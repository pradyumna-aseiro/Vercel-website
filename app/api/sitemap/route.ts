import { SitemapStream, streamToPromise } from 'sitemap';
import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = new SitemapStream({ hostname: 'https://aseiro.in' });

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/solutions', changefreq: 'weekly', priority: 0.8 },
    { url: '/industries', changefreq: 'weekly', priority: 0.7 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  ];

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const xml = await streamToPromise(sitemap).then(data => data.toString());

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
