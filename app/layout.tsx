import React from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./styles.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

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
