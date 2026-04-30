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
        {/* Vertical Bar */}
        <path 
          d="M 50 15 L 62 25 L 62 75 L 50 85 L 38 75 L 38 25 Z" 
          fill="url(#core-gradient)" 
          stroke="#2dd4bf" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
      </g>
    </svg>
  );
}