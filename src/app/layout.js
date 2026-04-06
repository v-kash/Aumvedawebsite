import { Geist_Mono } from "next/font/google";
import { Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

// existing
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🪔 Vedic heading font (premium)
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cinzel",
});

// 🕉 Sanskrit font
const devnagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-devanagari",
});

export const metadata = {
  title: "Bringing Nature Closer to Everyday Life",
  description:
    "Discover organic, herbal, and eco-friendly products designed to support a healthier, more balanced lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${cinzel.variable} ${devnagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f1ea] text-[#1f2f1f]">
        {children}
      </body>
    </html>
  );
}