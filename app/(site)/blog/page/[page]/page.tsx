import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { absoluteUrl } from '@/lib/siteUrl'
import { getAllBlogPosts } from '@/lib/blog/blog'
import { BlogCard } from '@/components/layout/blog/BlogCard'
import { BlogHero } from '@/components/layout/blog/BlogHero'
import { ContactUsCard } from '@/components/layout/blog/ContactUsCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo/schemas'
import { BlobButton } from '@/components/ui/shared/BlobButton'

const POSTS_PER_PAGE = 10

export async function generateStaticParams() {
  const totalPosts = getAllBlogPosts().length
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE))
  return Array.from({ length: totalPages }).map((_, i) => ({ page: String(i + 1) }))
}

export function generateMetadata({ params }: { params: { page: string } }): Metadata {
  const currentPage = Number(params.page)
  if (isNaN(currentPage) || currentPage < 1) {
    return {
      title: 'Blog',
    }
  }
  return {
    title: `Blog - Page ${currentPage} | MZHub`,
    description: `Page ${currentPage} of insights on AI, spirituality, and technology for faith institutions`,
    alternates: {
      canonical: absoluteUrl(`/blog/page/${currentPage}`),
    },
  }
}

export default function BlogPaginated({ params }: { params: { page: string } }) {
  const allPosts = getAllBlogPosts()
  const currentPage = Number(params.page)

  if (isNaN(currentPage) || currentPage < 1) {
    notFound()
  }

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  if (currentPage > totalPages) {
    notFound()
  }

  const start = (currentPage - 1) * POSTS_PER_PAGE
  const pagePosts = allPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-primary-dark">
      {/* Structured Data */}
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema(
            {
              name: `Blog - Page ${currentPage} | MZHub`,
              description: `Page ${currentPage} of insights on AI, spirituality, and technology for faith institutions`,
              url: `/blog/page/${currentPage}`,
            },
            absoluteUrl('')
          ),
        ]}
      />

      <BlogHero />

      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-light dark:text-accent-gold">
            Latest Insights
          </h2>
        </div>

        <div className="flex flex-col gap-12 mb-16">
          {pagePosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center gap-4 mt-8">
          {currentPage > 1 && (
            <BlobButton as={Link} href={`/blog/page/${currentPage - 1}`}>
              Previous
            </BlobButton>
          )}
          {currentPage < totalPages && (
            <BlobButton as={Link} href={`/blog/page/${currentPage + 1}`}>
              Next
            </BlobButton>
          )}
        </div>

        {/* Contact Us Card */}
        <ContactUsCard />
      </section>
    </div>
  )
}
