// import { Geist_Mono } from "next/font/google";
// import { Cinzel, Noto_Serif_Devanagari } from "next/font/google";
// import "./globals.css";

// // existing
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // 🪔 Vedic heading font (premium)
// const cinzel = Cinzel({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-cinzel",
// });

// // 🕉 Sanskrit font
// const devnagari = Noto_Serif_Devanagari({
//   subsets: ["devanagari"],
//   weight: ["400"],
//   variable: "--font-devanagari",
// });

// export const metadata = {
//   title: "Bringing Nature Closer to Everyday Life",
//   description:
//     "Discover organic, herbal, and eco-friendly products designed to support a healthier, more balanced lifestyle.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistMono.variable} ${cinzel.variable} ${devnagari.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col bg-[#f4f1ea] text-[#1f2f1f]">
//         {children}
//       </body>
//     </html>
//   );
// }

import { Geist_Mono } from "next/font/google";
import { Cinzel, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cinzel",
  display: "swap",
});

const devnagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://aumvedawellness.com'), // YOUR DOMAIN
  title: {
    default: "Aumveda Wellness - Premium Organic & Ayurvedic Products",
    template: "%s | Aumveda Wellness"
  },
  description:
    "Discover premium organic, herbal, and Ayurvedic wellness products. Natural supplements, eco-friendly skincare, and holistic health solutions for balanced living.",
  keywords: [
    "organic wellness products",
    "ayurvedic supplements",
    "herbal remedies",
    "natural skincare",
    "eco-friendly health products",
    "holistic wellness",
    "ayurveda products online",
    "organic supplements India",
    "natural health solutions"
  ],
  authors: [{ name: "Aumveda Wellness" }],
  creator: "Aumveda Wellness",
  publisher: "Aumveda Wellness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aumvedawellness.com",
    siteName: "Aumveda Wellness",
    title: "Aumveda Wellness - Premium Organic & Ayurvedic Products",
    description: "Premium organic and herbal wellness products rooted in Ayurvedic tradition for natural, balanced living.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aumveda Wellness - Organic Ayurvedic Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumveda Wellness - Premium Organic & Ayurvedic Products",
    description: "Premium organic and herbal wellness products rooted in Ayurvedic tradition",
    images: ["/twitter-image.jpg"],
    creator: "@aumveda", // YOUR TWITTER
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "health and wellness",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${cinzel.variable} ${devnagari.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f4f1ea" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f4f1ea] text-[#1f2f1f]">
        {children}
      </body>
    </html>
  );
}