import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------------------------------------------------------------------
// In-memory rate limiter
// Limits each IP to MAX_REQUESTS submissions within WINDOW_MS milliseconds.
// Note: this state is per-process. On serverless platforms (e.g. Vercel) with
// multiple instances, swap this out for Upstash Redis for a global counter.
// ---------------------------------------------------------------------------
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 3;

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): { limited: boolean; retryAfterSeconds: number } {
  const now = Date.now();

  // Purge expired entries to prevent unbounded memory growth
  for (const [key, entry] of rateLimitStore) {
    if (now - entry.windowStart > WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }

  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    // First request in this window
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return { limited: false, retryAfterSeconds: 0 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfterSeconds = Math.ceil((WINDOW_MS - (now - entry.windowStart)) / 1000);
    return { limited: true, retryAfterSeconds };
  }

  entry.count += 1;
  return { limited: false, retryAfterSeconds: 0 };
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { limited, retryAfterSeconds } = checkRateLimit(ip);

    if (limited) {
      return Response.json(
        { error: `Too many requests. Please wait ${Math.ceil(retryAfterSeconds / 60)} minute(s) before trying again.` },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfterSeconds) },
        }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "daanhoedjes@outlook.com",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; background: #0e0f11; color: #fff; padding: 32px; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #34d399; margin-top: 0;">New Contact Message</h2>
          <p><strong style="color: #a1a1aa;">From:</strong> ${name}</p>
          <p><strong style="color: #a1a1aa;">Email:</strong> <a href="mailto:${email}" style="color: #34d399;">${email}</a></p>
          <hr style="border-color: #27272a; margin: 24px 0;" />
          <p><strong style="color: #a1a1aa;">Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
