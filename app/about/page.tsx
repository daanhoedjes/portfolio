import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Daan Hoedjes",
  description: "About me and my skills.",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Vue", "JavaScript", "TypeScript"]
  },
  {
    title: "Backend",
    skills: ["Python", "Java", "Spring Boot"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Vector DBs"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker"]
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center font-jetbrains pt-32 pb-20 px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-12">
        {/* HEADER */}
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-black font-jetbrains text-white leading-[0.95] uppercase mix-blend-lighten">
            About<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-300 via-emerald-400 to-emerald-600 block pt-1 pb-2">
              Me
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BIO SECTION */}
          <div className="bg-[#151517] rounded-3xl p-8 border border-white/[0.03] shadow-2xl flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.08] transition-colors">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-400">Background</h2>
            <div className="flex flex-col gap-4">
              <p className="text-zinc-300 leading-relaxed font-sans text-lg">
                I am a passionate <span className="text-white font-semibold">second-year software engineering student</span> with a drive for building robust, scalable, and beautifully designed applications.
              </p>
              <p className="text-zinc-300 leading-relaxed font-sans text-lg">
                My journey in software development has equipped me with a diverse skill set, spanning both frontend interfaces and complex backend architectures. I enjoy tackling challenging problems, learning new technologies, and continuously refining my craft.
              </p>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="bg-[#151517] rounded-3xl p-8 border border-white/[0.03] shadow-2xl flex flex-col gap-6 relative overflow-hidden group hover:border-white/[0.08] transition-colors">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-400">Education</h2>
            <div className="flex flex-col gap-2 h-full justify-center">
              <h3 className="text-2xl font-bold text-white mb-1">HBO-ICT Software Engineering</h3>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/10 w-fit px-3 py-1 rounded-full border border-emerald-400/20">2nd Year Student</span>
              <p className="text-zinc-400 mt-4 font-sans leading-relaxed">
                Currently pursuing my degree at the Amsterdam University of Applied Sciences (HvA), focusing on core computer science principles, modern software development practices, data structures, algorithms, and hands-on full-stack project work.
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="flex flex-col gap-8 mt-8">
          <h2 className="text-3xl md:text-4xl font-black font-jetbrains text-white uppercase tracking-wider">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-[#151517] rounded-3xl p-8 border border-white/[0.03] shadow-2xl flex flex-col gap-6 hover:border-teal-500/20 transition-colors group">
                <h3 className="text-xs font-bold tracking-widest uppercase text-teal-400/80 group-hover:text-teal-400 transition-colors">{category.title}</h3>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-teal-500/50 transition-colors"></div>
                      <span className="text-zinc-200 font-medium font-sans">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
