import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import PerformanceAnalytics from "@/components/PerformanceAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tio Dwi Satrio | Fullstack Developer Indonesia",
  description:
    "Modern & dynamic portfolio website showcasing fullstack development projects. Built with Next.js, React, and cutting-edge web technologies.",
  keywords: [
    "fullstack developer",
    "portfolio",
    "Next.js",
    "React",
    "web development",
    "Indonesia",
    "Yogyakarta",
  ],
  authors: [{ name: "Tio" }],
  creator: "Tio",
  publisher: "Tio",
  metadataBase: new URL("https://tiodwisatrio.com"),
  openGraph: {
    title: "Tio's Portfolio | Fullstack Developer",
    description: "Transforming ideas into awesome digital products",
    url: "https://tiodwisatrio.com",
    siteName: "Tio's Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tio Dwi Satrio | Fullstack Developer",
    description: "Transforming ideas into awesome digital products",
    creator: "@tiodwisatrio", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_tio.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://o4506813739368448.ingest.us.sentry.io"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <PerformanceAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
