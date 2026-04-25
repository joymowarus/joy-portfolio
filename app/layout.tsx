import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* 🔥 FIXED METADATA */
export const metadata: Metadata = {
  title: "Joy Mowar | Generative AI Engineer",
  description:
    "Portfolio of Joy Mowar – Generative AI Engineer specializing in RAG, Azure OpenAI, FastAPI, and enterprise AI systems.",
  keywords: [
    "Joy Mowar",
    "Generative AI Engineer",
    "RAG",
    "Azure OpenAI",
    "FastAPI",
    "AI Portfolio",
  ],
  authors: [{ name: "Joy Mowar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}