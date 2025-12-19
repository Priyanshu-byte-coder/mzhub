'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BlogMetadata } from '@/types'

export default function Blog() {
    const [posts, setPosts] = useState<BlogMetadata[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/blog')
                const data = await response.json()
                setPosts(data.posts || [])
            } catch (error) {
                console.error('Error fetching posts:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark pt-20">
            <div className="relative">
                {/* Mobile Heading - Visible only on mobile */}
                <div className="lg:hidden container mx-auto px-8 py-12">
                    <div className="relative">
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-blue/10 dark:bg-accent-gold/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-20 -right-8 w-24 h-24 bg-accent-gold/10 dark:bg-accent-blue/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10">
                            <h1 className="text-[80px] leading-[0.85] font-bold mb-6">
                                <span className="text-secondary-light dark:text-text-mist">MZHub</span>
                                <br />
                                <span className="text-accent-gold">Blogs</span>
                            </h1>
                            <div className="w-24 h-1 bg-accent-gold mb-6"></div>
                            <p className="text-lg text-secondary-light/70 dark:text-text-mist/70 font-light leading-relaxed">
                                Insights on AI, Faith Tech,<br />
                                and Digital Transformation
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Left Side - Large Typography (Fixed) */}
                <div className="hidden lg:block fixed left-0 top-32 w-[45%] h-screen px-8 z-10">
                    <div className="container mx-auto max-w-2xl">
                        <div className="relative">
                            {/* Decorative Background Elements */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-blue/10 dark:bg-accent-gold/10 rounded-full blur-3xl"></div>
                            <div className="absolute top-20 -right-8 w-24 h-24 bg-accent-gold/10 dark:bg-accent-blue/10 rounded-full blur-2xl"></div>
                            
                            <div className="relative z-10 flex items-center h-full">
                                <div>
                                    <h1 className="text-[200px] leading-[0.85] font-bold mb-6">
                                        <span className="text-secondary-light dark:text-text-mist">MZHub</span>
                                        <br />
                                        <span className="text-accent-gold">Blogs</span>
                                    </h1>
                                    <div className="w-24 h-1 bg-accent-gold mb-6"></div>
                                    <p className="text-xl text-secondary-light/70 dark:text-text-mist/70 font-light leading-relaxed">
                                        Insights on AI, Faith Tech,<br />
                                        and Digital Transformation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Blog Posts */}
                <div className="lg:ml-[45%] w-full lg:w-[55%]">
                    <div className="container mx-auto px-8 py-8 lg:py-16">
                        <div className="space-y-12">
                        {posts.map((post, index) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-secondary-dark rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                        {/* Image */}
                                        <div className="relative w-full md:w-[240px] h-[280px] flex-shrink-0">
                                            <Image
                                                src={post.image || '/placeholder-blog.jpg'}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement
                                                    target.src = '/placeholder-blog.jpg'
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-wider text-secondary-light/60 dark:text-text-mist/60 mb-3">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                </p>
                                                <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4 group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors">
                                                    {post.title}
                                                </h2>
                                                <p className="text-secondary-light/70 dark:text-text-mist text-sm leading-relaxed mb-6">
                                                    {post.description}
                                                </p>
                                            </div>
                                            
                                            <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary-light dark:bg-accent-gold text-white dark:text-primary-dark text-sm font-semibold rounded-full hover:bg-accent-blue dark:hover:bg-accent-gold/90 transition-all w-fit">
                                                Discover
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
