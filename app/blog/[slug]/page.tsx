import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getAllBlogPosts } from '@/lib/blogPosts'

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
        description: post.excerpt,
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-16 md:py-24">
                <div className="container-custom max-w-4xl">
                    <div className="inline-block bg-spiritual-gold-500 text-spiritual-indigo-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        {post.category}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-spiritual-indigo-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full bg-spiritual-gold-500 flex items-center justify-center text-spiritual-indigo-900 font-bold">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-semibold text-white">{post.author}</p>
                                <p className="text-sm">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                        <span className="text-sm">{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="prose prose-lg max-w-none">
                            {/* Render the markdown content */}
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{
                                    __html: post.content.split('\n').map(line => {
                                        // Simple markdown-like rendering
                                        if (line.startsWith('# ')) {
                                            return `<h1 class="text-4xl font-bold text-spiritual-indigo-900 mb-6 mt-8">${line.slice(2)}</h1>`
                                        } else if (line.startsWith('## ')) {
                                            return `<h2 class="text-3xl font-bold text-spiritual-indigo-900 mb-4 mt-8">${line.slice(3)}</h2>`
                                        } else if (line.startsWith('### ')) {
                                            return `<h3 class="text-2xl font-bold text-spiritual-indigo-900 mb-3 mt-6">${line.slice(4)}</h3>`
                                        } else if (line.startsWith('- ')) {
                                            return `<li class="text-gray-700 ml-4">${line.slice(2)}</li>`
                                        } else if (line.trim() === '') {
                                            return '<br />'
                                        } else {
                                            return `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`
                                        }
                                    }).join('')
                                }}
                            />
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 bg-spiritual-indigo-50 rounded-xl p-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 rounded-full bg-spiritual-indigo-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-spiritual-indigo-900 mb-2">About {post.author}</h3>
                                <p className="text-gray-700">
                                    Contributing author at MZhub, exploring the intersection of spirituality and technology.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Back to Blog */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-spiritual-indigo-600 hover:text-spiritual-indigo-800 font-semibold transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7"></path>
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}
