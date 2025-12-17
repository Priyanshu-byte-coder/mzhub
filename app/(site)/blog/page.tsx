import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog/blog'
import { BlogCard } from '@/components/layout/blog/BlogCard'
import { BlogHero } from '@/components/layout/blog/BlogHero'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions. Expert perspectives on faith-tech integration.',
    keywords: ['spiritual technology blog', 'faith tech insights', 'AI for religion', 'temple technology articles', 'digital spirituality'],
    alternates: {
        canonical: 'https://mzhub.com/blog',
    },
    openGraph: {
        title: 'MZhub Blog - Spiritual Technology Insights',
        description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions. Expert perspectives on faith-tech integration.',
        url: 'https://mzhub.com/blog',
        type: 'website',
        images: [{
            url: 'https://mzhub.com/og-image-blog.png',
            width: 1200,
            height: 630,
            alt: 'MZhub Blog - Insights on Spiritual Technology'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZhub Blog - Spiritual Technology Insights',
        description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions.',
        images: ['https://mzhub.com/og-image-blog.png'],
    },
}

export default function Blog() {
    const posts = getAllBlogPosts()

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark">
            <BlogHero />

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-light dark:text-accent-gold">Latest Insights</h2>
                    <p className="text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
                        Explore our comprehensive guides and technical proposals on AI, cloud architecture, and digital transformation
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>
            </section>
        </div>
    )
}
