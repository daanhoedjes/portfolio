import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sans-Serif options
        inter: ['var(--font-inter)'],
        jakarta: ['var(--font-jakarta)'],
        space: ['var(--font-space)'],
        dm: ['var(--font-dm)'],
        
        // Monospace options
        jetbrains: ['var(--font-jetbrains)'],
        fira: ['var(--font-fira)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;