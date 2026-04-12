import Link from "next/link";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-7xl mx-auto text-sm">
      {/* Logo & Portfolio Title */}
      <Link href="/" className="flex items-center gap-2 tracking-wide font-medium font-jetbrains">
        <Logo />
        <span className="text-white">DAAN HOEDJES</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400">SWE PORTFOLIO</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 font-jetbrains">
        <Link href="/" className="text-teal-400 hover:text-teal-300 transition-colors">
          Home
        </Link>
        <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </Link>

        {/* Resume Button */}
        <Link 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-500/10 transition-colors"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}