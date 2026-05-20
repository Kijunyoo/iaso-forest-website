import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.iasoforest.com/sitemap.xml',
    host: 'https://www.iasoforest.com',
  };
}
