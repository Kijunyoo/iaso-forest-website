import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.iasoforest.com';
  const now = new Date();
  const routes: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' | 'monthly' }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/story', priority: 0.8, changeFrequency: 'daily' },
    { path: '/news', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/guide', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/location', priority: 0.6, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}/`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
