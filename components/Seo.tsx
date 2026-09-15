import type { Metadata } from "next";
import Head from "next/head";

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const defaultSeo = {
  title: "Sportline Advantage — Athlete-Centred Ecosystem",
  description:
    "Sportline Advantage connects athletes, coaches, institutions and partners through performance, pathways and partnerships.",
};

/**
 * For Client Components ('use client'), use this component to render <Head> tags.
 */
export default function Seo({ title, description, canonical }: SeoProps) {
  return (
    <Head>
      <title>{title || defaultSeo.title}</title>
      <meta
        name="description"
        content={description || defaultSeo.description}
      />
      {canonical && <link rel="canonical" href={canonical.startsWith("http") ? canonical : `https://sportlineadvantage.com${canonical}`} />}
    </Head>
  );
}

/**
 * For Server Components, use this helper to generate exported Next.js metadata.
 */
export function getMetadata({ title, description, canonical }: SeoProps): Metadata {
  const pageTitle = title || defaultSeo.title;
  const pageDescription = description || defaultSeo.description;
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `https://sportlineadvantage.com${canonical}`
    : "https://sportlineadvantage.com";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: "Sportline Advantage",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
