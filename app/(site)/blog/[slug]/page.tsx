import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog/blog'
import { BlogPostHeader } from '@/components/layout/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/layout/blog/BlogPostContent'
import { TableOfContents } from '@/components/layout/blog/TableOfContents'
import { RelatedPosts } from '@/components/layout/blog/RelatedPosts'
import { AuthorBio } from '@/components/layout/blog/AuthorBio'

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

    return {
        title: post.title,
        description: post.description,
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

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark pt-20">
            <BlogPostHeader post={post} />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Sidebar - Table of Contents */}
                    <aside className="w-full lg:w-[280px] lg:sticky lg:top-24 lg:self-start order-2 lg:order-1 hidden lg:block">
                        <TableOfContents content={post.content} />
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 order-1 lg:order-2 max-w-3xl">
                        <BlogPostContent content={post.content} />

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
                            <RelatedPosts posts={relatedPosts} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
