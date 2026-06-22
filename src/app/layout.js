import "./globals.css";
import { Press_Start_2P, Inter } from "next/font/google" // import fonts from Google Fonts

// Configure Press Start 2P font
const pressStart = Press_Start_2P({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-press-start', // This creates a CSS variable we can use in Tailwind
})

// configure standard font
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Faraz's Portfolio Website",
  description: "Developed using Next.js to display Faraz's work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} scroll-smooth`}
    >
      <body className="${inter.className} bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}
