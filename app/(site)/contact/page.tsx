import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import Card from '@/components/ui/shared/Card'
import ContactForm from '@/components/layout/contact/ContactForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
    title: 'Contact Us - MZhub',
    description: 'Get in touch with MZhub to explore how our AI-powered spiritual platform can serve your religious institution. Request a demo or consultation.',
    keywords: ['contact mzhub', 'spiritual AI demo', 'religious technology consultation', 'faith tech support'],
    alternates: {
        canonical: 'https://mzhub.com/contact',
    },
    openGraph: {
        title: 'Contact MZhub - Schedule a Demo',
        description: 'Get in touch with MZhub to explore how our AI-powered spiritual platform can serve your religious institution.',
        url: 'https://mzhub.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact MZhub - Schedule a Demo',
        description: 'Get in touch with MZhub to explore how our AI-powered spiritual platform can serve your religious institution.',
    },
}

export default function Contact() {
    // Generate service schema for consultation/demo services
    const serviceSchema = generateServiceSchema([
        {
            name: 'Platform Demo & Consultation',
            description: 'Personalized 45-minute demo and consultation to explore how MZhub can serve your religious institution\'s unique needs and community.',
            serviceType: 'Consulting Service',
            areaServed: 'Worldwide',
        },
        {
            name: 'Custom Implementation Planning',
            description: 'Tailored implementation plans and pricing for religious institutions looking to adopt AI-powered spiritual guidance platforms.',
            serviceType: 'Consulting Service',
            areaServed: 'Worldwide',
        },
    ])

    return (
        <div>
            {/* Structured Data - Server-rendered */}
            <JsonLd data={serviceSchema} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Let's <span className="text-spiritual-gold-300">Connect</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        Ready to explore how MZhub can serve your spiritual institution? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-6">Request a Demo</h2>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-8">
                                Fill out the form below and we'll get back to you within 24 hours to schedule a personalized demo of the MZhub platform.
                            </p>

                            <ContactForm />
                        </div>

                        {/* Contact Info & Additional Details */}
                        <div className="space-y-8">
                            <Card>
                                <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Email</p>
                                            <a href="mailto:contact@mzhub.com" className="text-accent-blue dark:text-accent-gold hover:underline">
                                                contact@mzhub.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Phone</p>
                                            <a href="tel:+15551234567" className="text-accent-blue dark:text-accent-gold hover:underline">
                                                +1 (555) 123-4567
                                            </a>
                                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Live Chat</p>
                                            <p className="text-secondary-light/90 dark:text-text-mist">Available on our website</p>
                                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-primary-light/30 dark:bg-secondary-dark/30">
                                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-4">What to Expect</h3>
                                <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">1.</span>
                                        <div>
                                            <strong>Quick Response:</strong> We'll reply within 24 hours to schedule your demo
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">2.</span>
                                        <div>
                                            <strong>Personalized Demo:</strong> 45-minute walkthrough customized to your needs
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">3.</span>
                                        <div>
                                            <strong>Q&A Session:</strong> All your questions answered by our experts
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">4.</span>
                                        <div>
                                            <strong>Custom Proposal:</strong> Tailored implementation plan and pricing
                                        </div>
                                    </li>
                                </ul>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">How long does implementation take?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Typically 2-4 weeks from contract signing to launch, depending on content volume.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">Is training provided?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Yes! We provide comprehensive training for your team and ongoing support.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">What are the pricing options?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Pricing varies by community size and features. We'll create a custom quote for you.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}

