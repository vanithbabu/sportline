import Head from "next/head";

export interface SeoProps {
  title?: string;
  description?: string;
}

const defaultSeo = {
  title: "Sportline Advantage — Athlete-Centred Ecosystem",
  description:
    "Sportline Advantage connects athletes, coaches, institutions and partners through performance, pathways and partnerships.",
};

/**
 * For Client Components ('use client'), use this component to render <Head> tags.
 */
export default function Seo({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title || defaultSeo.title}</title>
      <meta
        name="description"
        content={description || defaultSeo.description}
      />
    </Head>
  );
}

/**
 * For Server Components, use this helper to generate exported Next.js metadata.
 */
export function getMetadata({ title, description }: SeoProps) {
  return {
    title: title || defaultSeo.title,
    description: description || defaultSeo.description,
  };
}
