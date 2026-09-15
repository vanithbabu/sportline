import React from "react";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sportlineadvantage.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sportline Advantage | Creating access to sporting opportunity",
    template: "%s | Sportline Advantage",
  },
  description: "Sportline Advantage creates pathways that connect athletes, institutions and sporting communities with training, competition, international exposure, learning and development opportunities.",
  keywords: ["sports", "athletes", "training", "sporting experiences", "pathways", "development"],
  authors: [{ name: "Sportline Advantage" }],
  creator: "Sportline Advantage",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sportlineadvantage.com",
    siteName: "Sportline Advantage",
    title: "Sportline Advantage | Creating access to sporting opportunity",
    description: "Sportline Advantage creates pathways that connect athletes, institutions and sporting communities with training, competition, international exposure, learning and development opportunities.",
    images: [
      {
        url: "/images/banner5.jpg",
        width: 1200,
        height: 630,
        alt: "Sportline Advantage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportline Advantage | Creating access to sporting opportunity",
    description: "Sportline Advantage creates pathways that connect athletes, institutions and sporting communities.",
    images: ["/images/banner5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": "https://www.sportlineadvantage.com/#organization",
      name: "Sportline Advantage",
      legalName: "Sportline Advantage Private Limited",
      url: "https://www.sportlineadvantage.com",
      logo: "https://www.sportlineadvantage.com/icon.png",
      description:
        "Sportline Advantage creates pathways that connect athletes, institutions and sporting communities with training, competition, international exposure, learning and development opportunities.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sportlineadvantage.com/#website",
      url: "https://www.sportlineadvantage.com",
      name: "Sportline Advantage",
      publisher: {
        "@id": "https://www.sportlineadvantage.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FGJQ3MHTSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FGJQ3MHTSB');
          `}
        </Script>
      </body>
    </html>
  );
}
