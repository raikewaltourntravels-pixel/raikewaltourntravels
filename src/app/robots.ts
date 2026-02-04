import type { MetadataRoute } from 'next';
import { siteUrl } from './(main)/utils';


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot-Image',
        disallow: '/images/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/images/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
