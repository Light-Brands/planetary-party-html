import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";

import "@/styles/globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Planet Party",
    template: "%s | Planet Party",
  },
  description:
    "A living ecosystem platform enabling bioregional communities to sense, decide, and act together in service to life.",
  keywords: [
    "bioregional",
    "community",
    "regenerative",
    "ecosystem",
    "coordination",
    "councils",
    "guilds",
  ],
  authors: [{ name: "Planet Party" }],
  creator: "Planet Party",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Planet Party",
    title: "Planet Party",
    description:
      "A living ecosystem platform enabling bioregional communities to sense, decide, and act together in service to life.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planet Party",
    description:
      "A living ecosystem platform enabling bioregional communities to sense, decide, and act together in service to life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2116" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen bg-background font-body text-earth-950 antialiased">
        {children}
      </body>
    </html>
  );
}

