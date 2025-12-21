import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog/blog'
import { BlogCard } from '@/components/layout/blog/BlogCard'
import { BlogHero } from '@/components/layout/blog/BlogHero'
import { ContactUsCard } from '@/components/layout/blog/ContactUsCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
    title: 'Blog | MZHub',
    description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions. Expert perspectives on faith-tech integration.',
}

export default function Blog() {
    const posts = getAllBlogPosts()

    return (
        <div className="min-h-screen bg-neutral-light dark:bg-primary-dark">
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    generateWebPageSchema(
                        {
                            name: 'Blog | MZHub',
                            description: 'Insights on AI, spirituality, technology, and building digital communities for religious institutions.',
                            url: '/blog',
                        },
                        'https://mzhub.com'
                    ),
                ]}
            />

            <BlogHero />

            <section className="container mx-auto px-4 py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-light dark:text-accent-gold">Latest Insights</h2>
                    <p className="text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
                        Explore our comprehensive guides and technical proposals on AI, cloud architecture, and digital transformation
                    </p>
                </div>

                <div className="flex flex-col gap-12 mb-16">
                    {posts.map((post, index) => (
                        <BlogCard key={post.slug} post={post} index={index} />
                    ))}
                </div>

                {/* Contact Us Card */}
                <ContactUsCard />
            </section>
        </div>
    )
}
