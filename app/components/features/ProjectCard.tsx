type ProjectCardProps = {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    technologies?: string[];
    category?: string;
    githubUrl?: string;
    liveUrl?: string;
    className?: string;
};

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.88 1.56 2.3 1.11 2.86.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.67.95.67 1.91 0 1.38-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4">
            <path d="M14 5h5v5" />
            <path d="M10 14 19 5" />
            <path d="M19 14v5h-14v-14h5" />
        </svg>
    );
}

export default function ProjectCard({
    title = "QuantumLeap AI",
    description = "Crafting modern web experiences, writing efficient code, and shipping polished products.",
    imageSrc,
    imageAlt = "Project preview",
    technologies = ["React", "TypeScript"],
    category = "AI/ML",
    githubUrl = "#",
    liveUrl = "#",
    className = "",
}: ProjectCardProps) {
    return (
        <article
            className={`group relative flex h-full w-full max-w-[320px] flex-col rounded-2xl border border-slate-700/60 bg-[#0f131b]/90 p-4 shadow-[0_26px_48px_-28px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${className}`}
        >
            <div className="relative mb-4 overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-[#121a2b] via-[#141d34] to-[#0b111d]">
                <div className="pointer-events-none absolute -inset-x-10 -top-16 h-28 bg-cyan-400/10 blur-2xl" />
                {imageSrc ? (
                    <img src={imageSrc} alt={imageAlt} className="h-40 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]" />
                ) : (
                    <div className="h-40 w-full p-4 text-[10px] leading-4 text-cyan-100/60">
                        <div className="h-full rounded-lg border border-cyan-400/15 bg-[#0b1323]/70 p-3 font-jetbrains">
                            <p className="text-cyan-300/70">const project = &#123;</p>
                            <p className="pl-3 text-cyan-100/70">stack: ["React", "TypeScript"],</p>
                            <p className="pl-3 text-cyan-100/70">focus: "Product + DX",</p>
                            <p className="pl-3 text-cyan-100/70">quality: "High"</p>
                            <p className="text-cyan-300/70">&#125;</p>
                        </div>
                    </div>
                )}
            </div>

            <h3 className="mb-1 text-2xl font-space font-semibold tracking-tight text-white">{title}</h3>
            <p className="mb-4 text-sm font-space leading-relaxed text-slate-300">{description}</p>

            <div className="mt-auto">
                <div className="mb-3 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-100">
                        {category}
                    </span>

                    <div className="flex items-center gap-2 text-slate-400">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub repository"
                            className="rounded-md p-1.5 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Live project"
                            className="rounded-md p-1.5 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}