import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Daan Hoedjes",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex items-center font-jetbrains justify-center px-6">
      <div className="w-full max-w-5xl mx-auto flex flex-row md:flex-col gap-4">
        
        {/* TOP COLUMN */}
        <div className="flex flex-row">
          {/* HEADER */}
          <h1 className="text-6xl md:text-8xl font-black font-jetbrains text-white leading-[0.95] mb-8 uppercase mix-blend-lighten">
            Get In<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-300 via-emerald-400 to-emerald-600 block pt-1 pb-2">
              Touch
            </span>
          </h1>
        </div>
        
        {/* BOTTOM COLUMN */}
        <div className="flex flex-row gap-8">
          {/* FORM CARD */}
          <div className="bg-[#151517] flex-1 rounded-3xl p-8 border border-white/[0.03] shadow-2xl">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="YOUR NAME" 
                  className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="YOU@EXAMPLE.COM" 
                  className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  Message
                </label>
                <textarea 
                  rows={4}
                  placeholder="YOUR MESSAGE" 
                  className="bg-[#1a1c20]/50 border-none outline-none text-sm p-4 rounded-xl text-white placeholder-zinc-700/80 focus:ring-1 focus:ring-teal-500/50 transition-all font-mono resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="mt-4 bg-gradient-to-r from-teal-400 to-emerald-600 text-[#151517] font-extrabold uppercase tracking-widest py-4 px-6 rounded-full flex items-center justify-center gap-3 hover:opacity-90 transition-opacity text-[11px]"
              >
                SEND MESSAGE
              </button>
            </form>
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
              <a href="https://github.com/daanhoedjes" target="_blank" rel="noreferrer" className="bg-[#151517] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 border border-white/[0.03] hover:border-teal-500/20 transition-colors group">
                <div className="text-white group-hover:text-teal-400 transition-colors">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white uppercase text-center w-full">Github</span>
              </a>

              {/* LINKEDIN */}
              <a href="https://www.linkedin.com/in/daan-hoedjes-a82a323b9/" target="_blank" rel="noreferrer" className="bg-[#151517] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 border border-white/[0.03] hover:border-teal-500/20 transition-colors group">
                <div className="text-white group-hover:text-teal-400 transition-colors">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
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