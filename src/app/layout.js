import "./globals.css";
import { Press_Start_2P, Inter } from "next/font/google" // import fonts from Google Fonts
import { Analytics } from '@vercel/analytics/next';

// Configure Press Start 2P font
const pressStart = Press_Start_2P({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-ps2',
})

// configure standard font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' })

export const metadata = {
  title: "Faraz's Portfolio Website",
  description: "Faraz Fayyaz is a Chicago-based software engineer and CS student specializing in full-stack development, data architecture, and machine learning.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${inter.variable} scroll-smooth`}
    >
      <body className={`${inter.className} bg-slate-950 text-slate-200`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
