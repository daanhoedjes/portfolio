"use client";

import { SubmitEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen w-full flex items-center font-jetbrains justify-center p-4 py-24 md:py-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">

        {/* TOP COLUMN */}
        <div className="flex flex-col">
          {/* HEADER */}
          <h1 className="text-6xl md:text-8xl font-black font-jetbrains text-white leading-[0.95] mb-8 uppercase mix-blend-lighten">
            Get In<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-300 via-emerald-400 to-emerald-600 block pt-1 pb-2">
              Touch
            </span>
          </h1>
        </div>

        {/* BOTTOM COLUMN */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* FORM CARD */}
          <div className="bg-[#151517] flex-1 rounded-3xl p-8 border border-white/[0.03] shadow-2xl">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg tracking-wide">Message Sent!</p>
                  <p className="text-zinc-500 text-sm mt-1 font-mono">I&apos;ll get back to you soon.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="cursor-pointer text-[10px] font-bold tracking-widest uppercase text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/70">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="YOUR NAME"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/70">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="YOU@EXAMPLE.COM"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/70">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="YOUR MESSAGE"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="cursor-pointer mt-4 bg-gradient-to-r from-teal-400 to-emerald-600 text-[#151517] font-extrabold uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center gap-3 hover:opacity-90 transition-opacity text-[11px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8 flex-1">
            {/* INFO CARD 1 */}
            <div className="bg-[#151517] rounded-3xl p-6 flex flex-col justify-center border border-white/[0.03] relative overflow-hidden group hover:border-white/[0.08] transition-colors">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1a1c20]/80 flex items-center justify-center border border-white/[0.02]">
                  <span className="text-teal-400 font-fira text-xl">@</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-1">Email Address</span>
                  <span className="text-white font-medium text-sm">daanhoedjes@outlook.com</span>
                </div>
              </div>
            </div>

            {/* INFO CARD 2 */}
            <div className="bg-[#151517] rounded-3xl p-6 flex flex-col justify-center border border-white/[0.03] relative overflow-hidden group hover:border-white/[0.08] transition-colors">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#1a1c20]/80 flex items-center justify-center border border-white/[0.02]">
                  <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase mb-1">Location</span>
                  <span className="text-white font-medium text-sm">Netherlands</span>
                </div>
              </div>
            </div>

            {/* SOCIAL GRID */}
            <div className="grid grid-cols-2 gap-4 mt-1">
              {/* GITHUB */}
              <a href="https://github.com/daanhoedjes" target="_blank" rel="noreferrer" className="bg-[#151517] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 md:gap-5 border border-white/[0.03] hover:border-teal-500/20 transition-colors group">
                <div className="text-white group-hover:text-teal-400 transition-colors">
                  <svg className="w-8 h-8 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white uppercase text-center w-full">Github</span>
              </a>

              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/daan-hoedjes-a82a323b9/" target="_blank" rel="noreferrer" className="bg-[#151517] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 md:gap-5 border border-white/[0.03] hover:border-teal-500/20 transition-colors group">
                <div className="text-white group-hover:text-teal-400 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8"><g clipPath="url(#clip0_939_1222)"><path d="M21.333 0C22.8058 0 24 1.19423 24 2.66699V21.333C24 22.8058 22.8058 24 21.333 24H2.66699C1.19423 24 0 22.8058 0 21.333V2.66699C0 1.19423 1.19423 0 2.66699 0H21.333ZM3.67676 20.667H7.25586V9.11133H3.67676V20.667ZM16.46 8.75781C14.0081 8.758 12.9766 10.668 12.9766 10.668V9.11133H9.54395V20.667H12.9766V14.6006C12.9766 12.9754 13.7244 12.0079 15.1562 12.0078C16.4726 12.0078 17.1044 12.9376 17.1045 14.6006V20.667H20.666V13.3506C20.666 10.255 18.911 8.75781 16.46 8.75781ZM5.44922 3.33301C4.28014 3.33303 3.33301 4.28828 3.33301 5.46582C3.33305 6.64332 4.28017 7.59763 5.44922 7.59766C6.61829 7.59766 7.56538 6.64333 7.56543 5.46582C7.56543 4.28827 6.61832 3.33301 5.44922 3.33301Z" fill="currentColor"></path></g><defs><clipPath id="clip0_939_1222"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white uppercase text-center w-full">Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}