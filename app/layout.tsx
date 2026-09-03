import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

import { Metadata } from "next";

export const metadata: Metadata = {
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
    url: "https://sportlineadvantage.com",
    siteName: "Sportline Advantage",
    title: "Sportline Advantage",
    description: "Creating access to sporting opportunity for athletes, institutions, and communities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sportline Advantage",
    description: "Creating access to sporting opportunity.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
