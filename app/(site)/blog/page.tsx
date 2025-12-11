import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { getAllBlogPosts } from '@/lib/blogPosts'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions. Expert perspectives on faith-tech integration.',
}

export default function Blog() {
    const posts = getAllBlogPosts()

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Insights & <span className="text-spiritual-gold-300">Perspectives</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        Exploring the intersection of spirituality, technology, and community building
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                                    <div className="inline-block bg-accent-blue/20 dark:bg-accent-gold/20 text-accent-blue dark:text-accent-gold px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start">
                                        {post.category}
                                    </div>

                                    <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-3 line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-secondary-light/80 dark:text-text-mist mb-4 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-secondary-light/60 dark:text-text-mist/60 pt-4 border-t">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 rounded-full bg-accent-blue dark:bg-accent-gold flex items-center justify-center text-white dark:text-primary-dark text-xs font-bold">
                                                {post.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-medium text-secondary-light dark:text-text-mist">{post.author}</span>
                                        </div>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <div className="text-xs text-secondary-light/60 dark:text-text-mist/60 mt-2">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* Newsletter CTA */}
            <SectionWrapper className="bg-gradient-to-br from-secondary-light to-secondary-dark dark:from-secondary-dark dark:to-primary-dark text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-xl text-white/80 mb-8">
                        Subscribe to receive insights on spiritual technology, community building, and platform updates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                        />
                        <button className="btn-secondary whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
