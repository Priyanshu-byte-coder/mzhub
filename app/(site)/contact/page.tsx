import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import Card from '@/components/ui/shared/Card'
import ContactHero from '@/components/layout/contact/ContactHero'
import ContactForm from '@/components/layout/contact/ContactForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateFAQPageSchema, generateWebPageSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
    title: 'Contact Us - Request a Demo | MZHub',
    description: 'Schedule a personalized demo of MZHub. See how we help religious institutions preserve sacred teachings and serve communities better. Get in touch within 24 hours.',
    keywords: ['contact MZHub', 'faith technology demo', 'spiritual AI demo', 'religious institution technology', 'schedule demo'],
    alternates: {
        canonical: 'https://mzhub.com/contact',
    },
    openGraph: {
        title: 'Contact MZHub - Schedule Your Demo',
        description: 'Get in touch to transform your faith community with AI-powered spiritual guidance systems.',
        type: 'website',
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact MZHub - Schedule Your Demo',
        description: 'Request a personalized demo for your religious institution',
    },
}

export default function Contact() {
    // FAQ data extracted from the page content
    const faqs = [
        {
            question: 'How long does implementation take?',
            answer: 'Typically 2-4 weeks from contract signing to launch, depending on content volume.'
        },
        {
            question: 'Is training provided?',
            answer: 'Yes! We provide comprehensive training for your team and ongoing support.'
        },
        {
            question: 'What are the pricing options?',
            answer: 'Pricing varies by community size and features. We\'ll create a custom quote for you.'
        }
    ]

    return (
        <div className="bg-white dark:bg-primary-dark">
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    generateFAQPageSchema(faqs),
                    generateWebPageSchema(
                        {
                            name: 'Contact Us - Request a Demo | MZHub',
                            description: 'Schedule a personalized demo of MZHub. See how we help religious institutions preserve sacred teachings and serve communities better.',
                            url: '/contact',
                        },
                        'https://mzhub.com'
                    ),
                ]}
            />

            {/* Hero */}
            <ContactHero />

            {/* Contact Form Section */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <ContactForm />

                        {/* Contact Info & Additional Details */}
                        <div className="space-y-8">
                            <Card>
                                <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Email</p>
                                            <a href="mailto:contact@MZHub.com" className="text-accent-blue dark:text-accent-gold hover:underline">
                                                contact@MZHub.com
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
