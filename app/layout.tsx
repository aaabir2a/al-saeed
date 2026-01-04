import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://alsaeed.io";
const siteName = "Al Saeed Trading & Contracting WLL";
const siteDescription = "With over 14 years of excellence in civil construction in Qatar. Al Saeed Trading & Contracting delivers landmark infrastructure projects with integrity, specializing in building construction, excavation, maintenance, and renovation services.";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: `${siteName} | Civil Construction Excellence in Qatar`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "construction company Qatar",
    "civil construction Doha",
    "building construction Qatar",
    "excavation services Qatar",
    "infrastructure development Qatar",
    "Al Saeed Contracting",
    "heavy civil works Qatar",
    "maintenance services Qatar",
    "renovation Qatar",
    "commercial construction Qatar",
    "residential construction Qatar",
    "industrial construction Qatar",
    "concrete paving Qatar",
    "sewer and watermain Qatar",
    "building maintenance Doha",
  ],
  authors: [{ name: "Al Saeed Trading & Contracting WLL" }],
  creator: "Al Saeed Trading & Contracting WLL",
  publisher: "Al Saeed Trading & Contracting WLL",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Robots
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

  // Icons & Favicon
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/logo/favicon_io/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/logo/favicon_io/android-chrome-512x512.png" },
    ],
  },

  // Web App Manifest
  manifest: "/logo/favicon_io/site.webmanifest",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Civil Construction Excellence in Qatar`,
    description: siteDescription,
    images: [
      {
        url: "/logo/SMTC-LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Al Saeed Trading & Contracting - Building Qatar's Future",
      },
      {
        url: "/logo/logo-transparent.png",
        width: 800,
        height: 600,
        alt: "Al Saeed Logo",
      },
      {
        url: "/logo/logor-rounded.png",
        width: 512,
        height: 512,
        alt: "Al Saeed Rounded Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Civil Construction Excellence in Qatar`,
    description: siteDescription,
    images: ["/logo/SMTC-LOGO.jpg"],
    creator: "@alsaeedqa",
    site: "@alsaeedqa",
  },

  // Verification (add your verification codes when available)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Category
  category: "Construction",

  // Other metadata
  other: {
    "geo.region": "QA",
    "geo.placename": "Doha",
    "geo.position": "25.2854;51.5310",
    ICBM: "25.2854, 51.5310",
    "business:contact_data:street_address": "Flat 3, Floor 4, Building 30, Street 950, Umm Ghuwailina",
    "business:contact_data:locality": "Doha",
    "business:contact_data:country_name": "Qatar",
    "business:contact_data:phone_number": "+974 55799113",
    "business:contact_data:email": "alsaeedcontractingtrading@gmail.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
