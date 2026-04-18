import Link from "next/link";

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
            <path d="M3.75 6.75h16.5v10.5H3.75z" />
            <path d="m4 7 8 6 8-6" />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.88 1.56 2.3 1.11 2.86.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.67.95.67 1.91 0 1.38-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function BriefcaseIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
            <path d="M9 6V4.5h6V6" />
            <path d="M3.75 7.5h16.5v11.25H3.75z" />
            <path d="M3.75 12h16.5" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.5 2.5 2.5 15.5 0 18" />
            <path d="M12 3c-2.5 2.5-2.5 15.5 0 18" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="relative mt-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-400/45 to-transparent" />

            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:px-12">
                <section className="flex flex-col items-center text-center">
                    <p className="mb-4 text-xs font-fira font-semibold uppercase tracking-[0.08em] text-slate-400">Navigation</p>
                    <nav className="flex flex-col items-center gap-2 text-base font-space text-gray-200">
                        <Link href="/" className="transition-colors hover:text-teal-300">Home</Link>
                        <Link href="/projects" className="transition-colors hover:text-teal-300">Projects</Link>
                        <Link href="/about" className="transition-colors hover:text-teal-300">About</Link>
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-teal-300">Resume</Link>
                    </nav>
                </section>

                <section className="flex flex-col items-center text-center">
                    <p className="mb-4 text-xs font-fira font-semibold uppercase tracking-[0.08em] text-slate-400">Connect</p>
                    <a
                        href="mailto:daan@example.com"
                        className="mb-6 inline-flex items-center gap-3 text-base font-space text-gray-200 transition-colors hover:text-teal-300"
                    >
                        <span className="text-teal-400"><MailIcon /></span>
                        <span>daanhoedjes@outlook.com</span>
                    </a>

                    <div className="flex items-center justify-center gap-4 text-gray-300">
                        <a
                            href="https://github.com/daanhoedjes"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="rounded-md p-1 transition-colors hover:text-teal-300"
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Resume"
                            className="rounded-md p-1 transition-colors hover:text-teal-300"
                        >
                            <BriefcaseIcon />
                        </a>
                        <a
                            href="/contact"
                            aria-label="Contact"
                            className="rounded-md p-1 transition-colors hover:text-teal-300"
                        >
                            <GlobeIcon />
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );
}