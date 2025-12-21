import { getAllBlogPosts } from '@/lib/blog/blog'
import { absoluteUrl } from '@/lib/siteUrl'
import { NextResponse } from 'next/server'

function generateSiteMap(): string {
  const base = absoluteUrl()
  const staticPages = [
    '/',
    '/about',
    '/projects',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const staticUrls = staticPages
    .map((path) => {
      return `<url><loc>${base}${path}</loc><changefreq>monthly</changefreq><priority>$
      {path === '/' ? '1.0' : '0.8'}</priority></url>`
    })
    .join('')

  const blogPosts = getAllBlogPosts()
  const postUrls = blogPosts
    .map((post) => {
      return `<url><loc>${absoluteUrl(`/blog/${post.slug}`)}</loc><lastmod>${
        post.date || new Date().toISOString()
      }</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${postUrls}</urlset>`
}

export async function GET() {
  const body = generateSiteMap()
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
