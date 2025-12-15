import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { BlogPostHeader } from '@/components/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/blog/BlogPostContent'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { RecentPosts } from '@/components/blog/RecentPosts'

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
