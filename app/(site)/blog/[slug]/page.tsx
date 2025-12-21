import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog/blog'
import { getRelatedPosts } from '@/lib/blog/relatedPostsEngine'
import { BlogPostHeader } from '@/components/layout/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/layout/blog/BlogPostContent'
import { TableOfContents } from '@/components/layout/blog/TableOfContents'
import { RelatedPosts } from '@/components/layout/blog/RelatedPosts'
import { AuthorBio } from '@/components/layout/blog/AuthorBio'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbListSchema } from '@/lib/seo/schemas'

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPost(params.slug)
    const siteUrl = 'https://mzhub.com'

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    // Construct absolute image URL for social sharing
    const imageUrl = post.image
        ? `${siteUrl}${post.image}`
        : post.thumbnail
            ? `${siteUrl}${post.thumbnail}`
            : `${siteUrl}/og-default.png`

    return {
        title: post.title,
        description: post.description,
        keywords: post.tags?.join(', '),
        alternates: {
            canonical: `${siteUrl}/blog/${params.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${siteUrl}/blog/${params.slug}`,
            siteName: 'MZHub',
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [imageUrl],
        },
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    const allPosts = getAllBlogPosts()
    // Use serverless rule engine to get related posts based on multiple factors
    const relatedPosts = getRelatedPosts(post, allPosts, 3)

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark">
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateArticleSchema(post, 'https://mzhub.com'),
                    generateBreadcrumbListSchema(
                        [
                            { name: 'Home', url: '/' },
                            { name: 'Blog', url: '/blog' },
                            { name: post.title, url: `/blog/${post.slug}` },
                        ],
                        'https://mzhub.com'
                    ),
                ]}
            />

            <div className="pt-20">
                <BlogPostHeader post={post} />
            </div>

            <div className="flex">
                {/* Left Sidebar - Table of Contents (Fixed at 27%) */}
                <aside className="hidden lg:block w-[27%] fixed left-0 h-screen overflow-y-auto bg-neutral-light dark:bg-primary-dark border-r border-accent-blue/10 dark:border-accent-gold/10" style={{ top: '0', paddingTop: '10rem' }}>
                    <div className="px-6 py-8">
                        <TableOfContents content={post.content} />
                    </div>
                </aside>

                {/* Main Content Area (Scrollable at 73%) */}
                <div className="w-full lg:w-[73%] lg:ml-[27%]">
                    <div className="mx-auto px-4 py-12 max-w-4xl">
                        <BlogPostContent content={post.content} image={post.image} title={post.title} />

                        {/* Author Bio */}
                        <AuthorBio
                            author={post.author}
                            bio="Contributing expert on AI, technology, and digital transformation for faith-based organizations."
                        />

                        {/* Related Posts */}
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-secondary-light dark:text-text-mist mb-8">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPosts.length > 0 ? (
                                    relatedPosts.map((relatedPost) => (
                                        <Link
                                            key={relatedPost.slug}
                                            href={`/blog/${relatedPost.slug}`}
                                            className="block p-4 bg-white dark:bg-secondary-dark rounded-xl hover:shadow-lg transition-all border border-accent-blue/20 dark:border-accent-gold/20"
                                        >
                                            <h4 className="font-semibold text-base mb-2 line-clamp-2 text-secondary-light dark:text-accent-gold">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70 mb-2">{relatedPost.description}</p>
                                            <p className="text-xs text-secondary-light/60 dark:text-text-mist/60">{relatedPost.readTime}</p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-secondary-light/70 dark:text-text-mist/70 text-center py-4 col-span-full">
                                        No related posts available
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
