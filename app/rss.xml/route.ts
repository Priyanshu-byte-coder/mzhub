import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog/blog'
import { absoluteUrl } from '@/lib/siteUrl'

function generateRss(): string {
  const posts = getAllBlogPosts()
  const siteUrl = absoluteUrl('')

  const itemsXml = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => {
      const postUrl = absoluteUrl(`/blog/${post.slug}`)
      return `<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${postUrl}</link>
  <guid isPermaLink="true">${postUrl}</guid>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <description><![CDATA[${post.description}]]></description>
</item>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>MZHub Blog</title>
  <link>${siteUrl}/blog</link>
  <description>Insights on faith-aligned AI, technology & spirituality</description>
  <language>en-us</language>
  ${itemsXml}
</channel>
</rss>`
}

export async function GET() {
  const body = generateRss()
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=UTF-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
