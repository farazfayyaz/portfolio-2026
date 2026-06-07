import "./globals.css";

export const metadata = {
  title: "Faraz's Portfolio Website",
  description: "Developed using Next.js to display Faraz's work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
