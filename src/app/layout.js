import "./globals.css";
import { Press_Start_2P, Inter } from "next/font/google" // import fonts from Google Fonts

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
  description: "Developed using Next.js to display Faraz's work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${inter.variable} scroll-smooth`}
    >
      <body className={`${inter.className} bg-slate-950 text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
