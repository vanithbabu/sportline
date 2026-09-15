import "./styles.css";
import { getMetadata } from "@/components/Seo";

export const metadata = getMetadata({
  title: "What We Do | Sportline Advantage",
  description:
    "Discover how Sportline Advantage creates pathways for athletes, institutions, and sporting communities through training, development, and international exposure.",
  canonical: "/what-we-do",
});

export default function WhatWeDoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
