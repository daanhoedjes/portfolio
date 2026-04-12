import { 
  Inter, 
  Plus_Jakarta_Sans, 
  Space_Grotesk, 
  DM_Sans, 
  JetBrains_Mono, 
  Fira_Code, 
  Roboto_Mono 
} from 'next/font/google';
import './globals.css';

// --- SANS-SERIF FONTS ---
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm' });

// --- MONOSPACE FONTS ---
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata = {
  title: 'Daan Hoedjes | SWE Portfolio',
  description: 'Software Engineering Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`
          ${inter.variable} 
          ${plusJakarta.variable} 
          ${spaceGrotesk.variable} 
          ${dmSans.variable} 
          ${jetbrainsMono.variable} 
          ${firaCode.variable} 
          ${robotoMono.variable} 
          bg-gray-950 text-white antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}