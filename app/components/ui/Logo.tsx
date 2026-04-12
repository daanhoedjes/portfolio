export default function Logo() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="30" 
      height="30"
      className="inline-block"
    >
      <defs>
        {/* The Neon Glow Filter */}
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* The Deep Teal Core Gradient */}
        <linearGradient id="core-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a2e2e" />
          <stop offset="100%" stopColor="#041212" />
        </linearGradient>
      </defs>

      <g filter="url(#neon-glow)">
        {/* Left Faceted Bar */}
        <path 
          d="M 17 15 L 25 24 L 25 76 L 17 85 Z" 
          fill="url(#core-gradient)" 
          stroke="#2dd4bf" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />

        {/* Outer D Curve with internal faceted cut */}
        <path 
          d="M 29 15 L 53 15 C 71 15 79 28 79 50 C 79 72 71 85 53 85 L 29 85 L 39 73 L 53 73 C 63 73 68 64 68 50 C 68 36 63 27 53 27 L 39 27 Z" 
          fill="url(#core-gradient)" 
          stroke="#2dd4bf" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
      </g>
    </svg>
  );
}