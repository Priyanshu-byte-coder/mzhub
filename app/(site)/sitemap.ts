import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://MZHub.com'

  // Get all blog posts dynamically
  const blogPosts = getAllBlogPosts()
  const blogPostUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Define vault pages
  const vaultPages = [
    'talent',
    'partnership',
    'investors',
    'government',
    'community',
  ]

  const vaultUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/vault`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...vaultPages.map((page) => ({
      url: `${baseUrl}/vault/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]

  // Define static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Define policy pages
  const policyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Combine all URLs
  return [...staticPages, ...blogPostUrls, ...vaultUrls, ...policyPages]
}
