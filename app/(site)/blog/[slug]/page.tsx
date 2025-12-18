import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog/blog'
import { BlogPostHeader } from '@/components/layout/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/layout/blog/BlogPostContent'
import { TableOfContents } from '@/components/layout/blog/TableOfContents'
import { RelatedPosts } from '@/components/layout/blog/RelatedPosts'
import { RecentPosts } from '@/components/layout/blog/RecentPosts'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateArticleSchema } from '@/lib/seo/schemas'

const SITE_URL = 'https://mzhub.com'

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPost(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`
    const imageUrl = post.image || `${SITE_URL}/og-image-blog.png`

    return {
        title: post.title,
        description: post.description,
        keywords: post.tags?.join(', '),
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            url: canonicalUrl,
            siteName: 'MZhub',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [imageUrl],
            creator: '@mzhub',
        },
        alternates: {
            canonical: canonicalUrl,
        },
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    const allPosts = getAllBlogPosts()
    // Get related posts - prioritize same category, but show any posts if none in category
    let relatedPosts = allPosts
        .filter((p) => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3)

    // If no posts in same category, just show other recent posts
    if (relatedPosts.length === 0) {
        relatedPosts = allPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 3)
    }

    // Generate Article schema for SEO
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.description,
        slug: post.slug,
        author: post.author,
        publishedDate: post.date,
        image: post.image,
        category: post.category,
    })

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark pt-20">
            <JsonLd data={articleSchema} />
            <BlogPostHeader post={post} />

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content */}
                    <div className="flex-1 lg:max-w-[66%]">
                        <BlogPostContent content={post.content} />
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[33%] space-y-6">
                        <TableOfContents content={post.content} />
                        <RelatedPosts posts={relatedPosts} />
                    </aside>
                </div>
            </div>
        </div>
    )
}
