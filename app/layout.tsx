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
  title: {
    default: "Tio Dwi Satrio | Full Stack Developer & UI/UX Designer",
    template: "%s | Tio Dwi Satrio",
  },
  description:
    "Professional Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building responsive web applications and stunning user interfaces. Based in Indonesia.",
  keywords: [
    "Tio Dwi Satrio",
    "Full Stack Developer",
    "Web Developer Indonesia",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Web Development",
    "Mobile App Development",
    "Portfolio Website",
    "Freelance Developer",
    "Indonesia Developer",
    "Yogyakarta Developer",
    "Laravel Developer",
    "Vue.js Developer",
    "PostgreSQL",
    "MySQL",
    "GraphQL",
  ],
  authors: [{ name: "Tio Dwi Satrio", url: "https://tiodwisatrio.com" }],
  creator: "Tio Dwi Satrio",
  publisher: "Tio Dwi Satrio",
  metadataBase: new URL("https://tiodwisatrio.com"),
  alternates: {
    canonical: "https://tiodwisatrio.com",
  },
  openGraph: {
    title: "Tio Dwi Satrio | Full Stack Developer & UI/UX Designer",
    description:
      "Professional Full Stack Developer building modern web applications with Next.js, React, and TypeScript. Transforming ideas into awesome digital products.",
    url: "https://tiodwisatrio.com",
    siteName: "Tio Dwi Satrio Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tio Dwi Satrio - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tio Dwi Satrio | Full Stack Developer",
    description:
      "Building modern web applications with Next.js, React, and TypeScript",
    creator: "@tiodwisatrio",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    logo: "/fav_logo_tio.png",
    name: "Tio Dwi Satrio",
    url: "https://tiodwisatrio.com",
    image: "https://tiodwisatrio.com/logo_tio.png",
    sameAs: [
      "https://github.com/tiodwisatrio",
      "https://www.linkedin.com/in/tio-dwi-satrio-a91153177/",
      "https://dribbble.com/tiodwisatrio",
      "https://www.instagram.com/tiodwisatrio_/",
      "https://www.facebook.com/tiodwisatrio",

      // Update with your actual LinkedIn
      // Add more social profiles
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Professional Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "Vue.js",
      "PostgreSQL",
      "MySQL",
      "GraphQL",
      "Web Development",
      "UI/UX Design",
      "Mobile App Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    email: "tiodwisatrio27@gmail.com",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tio Dwi Satrio Portfolio",
    url: "https://tiodwisatrio.com",
    description:
      "Professional portfolio showcasing full stack development projects and services",
    author: {
      "@type": "Person",
      name: "Tio Dwi Satrio",
    },
    inLanguage: "en-US",
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tio Dwi Satrio - Web Development Services",
    image: "https://tiodwisatrio.com/profile.svg",
    "@id": "https://tiodwisatrio.com",
    url: "https://tiodwisatrio.com",
    telephone: "+62-XXX-XXXX-XXXX", // Add your phone if you want
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "Indonesia",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "10",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_tio.png" sizes="any" />
        <link rel="icon" href="/fav_logo_tio.png" type="image/x-icon" />

        <link rel="apple-touch-icon" href="/logo_tio.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://o4506813739368448.ingest.us.sentry.io"
          crossOrigin="anonymous"
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
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
