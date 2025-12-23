import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/siteUrl'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateFAQPageSchema, generateWebPageSchema } from '@/lib/seo/schemas'
import FAQHero from '@/components/layout/faq/FAQHero'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
    title: 'Frequently Asked Questions - MZHub Faith Technology Solutions',
    description: 'Find answers to common questions about MZHub\'s AI-powered spiritual guidance platform, implementation process, pricing, security, and how we serve religious institutions worldwide.',
    keywords: ['MZHub FAQ', 'faith technology questions', 'spiritual AI questions', 'religious institution technology', 'AI implementation', 'faith tech pricing', 'spiritual platform security'],
    alternates: {
        canonical: absoluteUrl('/faq'),
    },
    openGraph: {
        title: 'FAQ - Common Questions About MZHub Faith Technology',
        description: 'Get answers about our AI-powered spiritual guidance platform for religious institutions.',
        type: 'website',
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZHub FAQ - Your Questions Answered',
        description: 'Everything you need to know about faith-aligned AI technology',
    },
}

export default function FAQ() {
    const faqCategories = [
        {
            category: 'Getting Started',
            questions: [
                {
                    question: 'What is MZHub and who is it for?',
                    answer: 'MZHub is an AI-powered spiritual guidance platform designed specifically for religious institutions, temples, churches, mosques, ashrams, and faith-based organizations. We help you extend your spiritual reach through technology while preserving sacred teachings and maintaining complete institutional control. Our platform is trusted by 50+ faith communities worldwide.'
                },
                {
                    question: 'How is MZHub different from generic AI chatbots?',
                    answer: 'Unlike generic chatbots that "guess" answers, MZHub uses Knowledge-Grounded Conversational Agents (KGCA) that only provide responses based on your institution\'s approved sacred texts and teachings. If the answer isn\'t in your trusted library, our AI won\'t make one up. We also emphasize human-in-the-loop oversight, ensuring AI serves as a librarian, not a replacement for spiritual leaders.'
                },
                {
                    question: 'Do I need technical expertise to use MZHub?',
                    answer: 'No technical expertise is required. We provide comprehensive training for your team and handle all technical setup. Our platform is designed to be intuitive for religious leaders and staff, with ongoing support available whenever you need it.'
                },
                {
                    question: 'Can MZHub work with multiple languages and regional dialects?',
                    answer: 'Yes! MZHub supports multilingual deployment with specialized support for Indic languages and regional dialects. We use advanced NLP and translation technologies to ensure your spiritual guidance reaches seekers across languages without losing cultural or doctrinal nuance.'
                },
            ]
        },
        {
            category: 'Implementation & Timeline',
            questions: [
                {
                    question: 'How long does implementation take?',
                    answer: 'Typically 2-4 weeks from contract signing to launch, depending on your content volume and customization requirements. The process includes: (1) Content curation and approval (1 week), (2) System configuration and training (1 week), (3) Team training and testing (3-5 days), (4) Launch and monitoring (ongoing).'
                },
                {
                    question: 'What does the implementation process involve?',
                    answer: 'Our implementation follows a structured approach: First, we conduct a discovery session to understand your institution\'s needs and sacred content. Then, we help you curate and digitize your approved teachings. Next, we configure the AI system with your institutional guardrails and ethical boundaries. Finally, we train your team and provide ongoing support for a smooth transition.'
                },
                {
                    question: 'What content do I need to provide?',
                    answer: 'You provide the sacred texts, sermons, teachings, FAQs, and any other approved spiritual content you want the AI to reference. We support various formats including PDFs, Word documents, audio recordings, and video content. Our team helps you organize and structure this content for optimal AI performance.'
                },
                {
                    question: 'Is training provided for our staff?',
                    answer: 'Yes! We provide comprehensive training including: (1) Platform navigation and daily operations, (2) Content management and updates, (3) Monitoring AI responses and escalation protocols, (4) Analytics and reporting, (5) Ongoing support through documentation, video tutorials, and dedicated support channels.'
                },
            ]
        },
        {
            category: 'Pricing & Plans',
            questions: [
                {
                    question: 'How much does MZHub cost?',
                    answer: 'Pricing varies based on your community size, feature requirements, and content volume. We offer flexible plans for small temples (under 500 members), medium institutions (500-5,000 members), and large organizations (5,000+ members). Contact us for a custom quote tailored to your specific needs and budget.'
                },
                {
                    question: 'What is included in the pricing?',
                    answer: 'Our pricing includes: Platform access and hosting, AI model training on your content, multilingual support, mobile and web applications, content management system, analytics dashboard, team training, ongoing technical support, regular system updates, and data security compliance. No hidden fees.'
                },
                {
                    question: 'Do you offer discounts for non-profit religious organizations?',
                    answer: 'Yes, we offer special pricing for registered non-profit religious organizations and faith-based charities. We believe in making spiritual technology accessible to all faith communities, regardless of budget size. Contact us to discuss eligibility and available discounts.'
                },
                {
                    question: 'Is there a free trial available?',
                    answer: 'We offer a personalized demo and pilot program for qualified institutions. During the demo, you\'ll see how MZHub works with sample content. For serious inquiries, we can arrange a 2-week pilot with a subset of your content to demonstrate real-world value before full commitment.'
                },
            ]
        },
        {
            category: 'Security & Privacy',
            questions: [
                {
                    question: 'How do you protect our sacred content and user data?',
                    answer: 'We implement enterprise-grade security including: End-to-end encryption for all data, secure cloud infrastructure with multi-region redundancy, role-based access controls, regular security audits, GDPR and data privacy compliance, and complete data sovereignty—your content remains your property and can be deleted at any time.'
                },
                {
                    question: 'Who has access to our institutional data?',
                    answer: 'Only your designated administrators have access to your institutional data. MZHub staff cannot view your sacred content or user interactions without explicit permission. We maintain strict data isolation between institutions, and all our team members sign comprehensive NDAs.'
                },
                {
                    question: 'What happens to our data if we stop using MZHub?',
                    answer: 'You retain complete ownership of your data. Upon contract termination, we provide a full export of all your content, user data, and analytics in standard formats. We then permanently delete all your data from our systems within 30 days, with written confirmation provided.'
                },
                {
                    question: 'How do you ensure AI responses are doctrinally accurate?',
                    answer: 'We use Retrieval-Augmented Generation (RAG) to ground all AI responses in your approved content. Every response includes source citations so your team can verify accuracy. We also implement institutional guardrails, escalation protocols for sensitive queries, and provide a content review dashboard for ongoing monitoring.'
                },
            ]
        },
        {
            category: 'Features & Capabilities',
            questions: [
                {
                    question: 'What platforms does MZHub support?',
                    answer: 'MZHub works across web browsers, iOS and Android mobile apps, WhatsApp integration, and can be embedded into your existing website. We provide a unified experience across all platforms with synchronized data and seamless user journeys.'
                },
                {
                    question: 'Can we customize the AI\'s responses and tone?',
                    answer: 'Absolutely. You have complete control over the AI\'s personality, tone, and response style. We work with you to define appropriate language, cultural sensitivities, and doctrinal boundaries. You can also set up custom response templates for common scenarios and define escalation rules for sensitive topics.'
                },
                {
                    question: 'How does the AI handle questions it cannot answer?',
                    answer: 'If the AI cannot find an answer in your approved content, it will honestly acknowledge this limitation and offer to escalate the question to a human spiritual leader. We never allow the AI to "make up" answers. This transparency builds trust and ensures doctrinal integrity.'
                },
                {
                    question: 'Can we track how the platform is being used?',
                    answer: 'Yes! Our analytics dashboard provides insights into: Most common questions and topics, user engagement metrics, response accuracy ratings, escalation patterns, peak usage times, and content gaps. These insights help you understand your community\'s needs and improve your spiritual guidance over time.'
                },
                {
                    question: 'Does MZHub support digital heritage preservation?',
                    answer: 'Yes! We offer AI-powered OCR transcription for manuscripts, audio/video content structuring for sermons and teachings, digital archiving with searchable metadata, and multi-format content preservation. We help you transform fragile historical content into accessible digital knowledge for future generations.'
                },
            ]
        },
        {
            category: 'Support & Maintenance',
            questions: [
                {
                    question: 'What kind of ongoing support do you provide?',
                    answer: 'We provide: 24/7 technical support via email and chat, dedicated account manager for enterprise clients, regular system health checks and updates, quarterly content review sessions, community forum for best practices, and comprehensive documentation and video tutorials.'
                },
                {
                    question: 'How often is the platform updated?',
                    answer: 'We release minor updates monthly (bug fixes, performance improvements) and major feature updates quarterly. All updates are tested thoroughly and deployed with zero downtime. You\'ll receive advance notice of major updates with detailed release notes and migration guides if needed.'
                },
                {
                    question: 'What if we need to update our sacred content?',
                    answer: 'You can update content anytime through our content management system. Changes are reviewed by your team before going live. We support version control, so you can track changes and revert if needed. For major content overhauls, we provide migration assistance.'
                },
                {
                    question: 'Can we cancel our subscription at any time?',
                    answer: 'Yes, we offer flexible contracts with no long-term lock-in. You can cancel with 30 days notice. We believe in earning your trust through excellent service, not contractual obligations. Upon cancellation, we provide full data export and ensure smooth transition.'
                },
            ]
        },
    ]

    // Flatten all FAQs for schema
    const allFAQs = faqCategories.flatMap(cat => 
        cat.questions.map(q => ({
            question: q.question,
            answer: q.answer
        }))
    )

    return (
        <div className="bg-white dark:bg-primary-dark">
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    generateFAQPageSchema(allFAQs),
                    generateWebPageSchema(
                        {
                            name: 'Frequently Asked Questions - MZHub Faith Technology',
                            description: 'Comprehensive answers to common questions about MZHub\'s AI-powered spiritual guidance platform for religious institutions.',
                            url: '/faq',
                        },
                        absoluteUrl('')
                    ),
                ]}
            />

            {/* Hero Section */}
            <FAQHero />

            {/* FAQ Content */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-5xl mx-auto">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                            <p className="text-lg md:text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto leading-relaxed">
                                Find answers to the most common questions about MZHub's faith-aligned AI platform. 
                                Can't find what you're looking for? <Link href="/contact" className="text-accent-blue dark:text-accent-gold hover:underline font-semibold">Contact us</Link> for personalized assistance.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* FAQ Categories */}
                    <div className="space-y-16">
                        {faqCategories.map((category, categoryIndex) => (
                            <ScrollReveal key={category.category} baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-light dark:text-accent-gold mb-8">
                                        {category.category}
                                    </h2>
                                    <Accordion type="single" collapsible className="space-y-4">
                                        {category.questions.map((faq, faqIndex) => (
                                            <AccordionItem 
                                                key={faqIndex} 
                                                value={`item-${categoryIndex}-${faqIndex}`}
                                                className="rounded-2xl border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/85 dark:bg-card/70 shadow-sm hover:shadow-md transition-shadow px-6 md:px-8"
                                            >
                                                <AccordionTrigger className="text-xl md:text-2xl font-semibold text-secondary-light dark:text-white hover:text-accent-blue dark:hover:text-accent-gold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-base md:text-lg text-secondary-light/85 dark:text-text-mist leading-relaxed pb-6">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                        <div className="mt-20 text-center bg-gradient-to-br from-primary-light/30 to-accent-gold/10 dark:from-secondary-dark/30 dark:to-accent-gold/5 rounded-3xl p-12 border border-secondary-light/10 dark:border-accent-gold/20">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary-light dark:text-accent-gold mb-6">
                                Still Have Questions?
                            </h2>
                            <p className="text-lg text-secondary-light/80 dark:text-text-mist mb-8 max-w-2xl mx-auto">
                                Our team is here to help you understand how MZHub can serve your faith community. 
                                Schedule a personalized demo or reach out with your specific questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <BlobButton as={Link} href="/contact">
                                    Schedule a Demo
                                </BlobButton>
                                <BlobButton as={Link} href="/about">
                                    Learn More About Us
                                </BlobButton>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Additional Resources */}
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                        <div className="mt-16 grid md:grid-cols-3 gap-6">
                            <Link 
                                href="/blog"
                                className="group p-6 rounded-xl border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/85 dark:bg-card/70 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-3 group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors">
                                    📚 Read Our Blog
                                </h3>
                                <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">
                                    Explore in-depth articles about faith technology, AI ethics, and digital transformation for religious institutions.
                                </p>
                            </Link>
                            <Link 
                                href="/projects"
                                className="group p-6 rounded-xl border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/85 dark:bg-card/70 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-3 group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors">
                                    🎯 View Our Projects
                                </h3>
                                <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">
                                    See how faith communities worldwide are using MZHub to preserve teachings and serve their members.
                                </p>
                            </Link>
                            <Link 
                                href="/privacy"
                                className="group p-6 rounded-xl border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/85 dark:bg-card/70 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-semibold text-secondary-light dark:text-accent-gold mb-3 group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors">
                                    🔒 Privacy & Security
                                </h3>
                                <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">
                                    Learn about our commitment to protecting your sacred content and user data with enterprise-grade security.
                                </p>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </SectionWrapper>
        </div>
    )
}
