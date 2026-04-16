import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enrico Perania | Lead Software Engineer",
  description:
    "Portfolio de Enrico Perania — Lead Software Engineer especializado en React, Next.js y sistemas de IA. 9+ años de experiencia en equipos remotos globales.",
  keywords: [
    "Enrico Perania",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend",
    "Fullstack",
    "Lima",
    "Peru",
  ],
  authors: [{ name: "Enrico Perania" }],
  openGraph: {
    title: "Enrico Perania | Lead Software Engineer",
    description:
      "Portfolio de Enrico Perania — Lead Software Engineer con 9+ años de experiencia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased" style={{ backgroundColor: '#F7F5F0', color: '#111111' }}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
