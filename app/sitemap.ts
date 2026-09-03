import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sportlineadvantage.com';

  const routes = [
    '',
    '/about-us',
    '/what-we-do',
    '/partner-with-us',
    '/connect-with-us',
    '/insights'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
