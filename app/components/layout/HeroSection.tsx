import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-2xl z-10 font-fira">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-2">
          Hi, I'm Daan.
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-400 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
          I design and ship full‑stack web apps end‑to‑end: thoughtful frontends, reliable backends, and pragmatic engineering in TypeScript and Java.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link 
            href="/projects"
            className="px-8 py-3 bg-teal-500 text-slate-900 font-medium rounded-full hover:bg-teal-400 transition-colors"
          >
            View Projects
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right Content - Code Snippet Decoration */}
      <div className="hidden lg:block relative z-10 w-full max-w-md mt-16 md:mt-0">
        <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full" />
        <div className="relative bg-[#0d1117]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-sm text-gray-300 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <pre className="overflow-x-auto">
            <code className="font-jetbrains">
              <span className="text-pink-400">export function</span> <span className="text-blue-400">Hello</span>() {"{"}<br/>
              {"  "}<span className="text-pink-400">const</span> portfolio = <span className="text-green-400">'React'</span>;<br/>
              <br/>
              {"  "}<span className="text-pink-400">return</span> (<br/>
              {"    "}<span className="text-gray-500">&lt;</span><span className="text-blue-400">main</span> <span className="text-teal-300">className</span>=<span className="text-green-400">"flex-col"</span><span className="text-gray-500">&gt;</span><br/>
              {"      "}Hello World!<br/>
              {"    "}<span className="text-gray-500">&lt;/</span><span className="text-blue-400">main</span><span className="text-gray-500">&gt;</span><br/>
              {"  "});<br/>
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
