import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/siteUrl'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { ContainerScroll } from '@/components/ui/home/container-scroll-animation'
import { StaggerTestimonials } from '@/components/layout/home/stagger-testimonials'
import VideoShowcase from '@/components/layout/home/video-component'
import HomeClient from '@/components/layout/home/HomeClient'
import CapabilitiesSection from '@/components/layout/home/CapabilitiesSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateServiceSchema, generateWebPageSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
    title: 'MZHub - Spiritual AI for Religious Institutions',
    description: 'Trusted by 50+ temples, churches & mosques worldwide. Enterprise-grade spiritual AI platform with 24/7 guidance, multilingual support, and complete institutional control.',
    keywords: [
        'spiritual AI platform',
        'faith technology solution',
        'religious institution software',
        'AI spiritual guidance',
        'temple management system',
        'church technology platform',
        'mosque digital tools',
        'sacred teaching preservation',
        'multilingual spiritual guidance',
        'faith community engagement'
    ],
    alternates: {
        canonical: absoluteUrl('/'),
    },
    openGraph: {
        title: 'MZHub - Spiritual AI for Religious Institutions',
        description: 'Trusted by 50+ faith communities. Enterprise-grade spiritual AI with 24/7 guidance and complete institutional control.',
        type: 'website',
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZHub - Spiritual AI for Religious Institutions',
        description: 'Trusted by 50+ faith communities. Enterprise-grade spiritual AI with 24/7 guidance and institutional control.',
    },
}

export default function Home() {

    const capabilities = [
        {
            number: '01',
            icon: 'lightbulb',
            title: 'From Information to Understanding',
            body: 'Bridge the gap between ancient text and modern curiosity with AI that knows the "why". Transform static scriptures into living conversations that help seekers understand the deeper meaning behind every ritual and teaching.',
            impactStory: 'Imagine a 18-year-old seeker finding the exact meaning of a 500-year-old ritual in seconds on WhatsApp. That is what we build.'
        },
        {
            number: '02',
            icon: 'scroll',
            title: 'Breathing Life into Archives',
            body: 'Transforming static manuscripts into living, searchable knowledge for the next generation. Preserve your heritage while making it accessible, ensuring ancient wisdom speaks to modern hearts.',
            impactStory: 'A grandmother\'s handwritten prayer book from 1920, now digitally preserved and instantly accessible to her great-grandchildren across continents, in their native language.'
        },
        {
            number: '03',
            icon: 'heart',
            title: 'Intentional Connection',
            body: 'Moving beyond bulk messages to thoughtful, automated engagement that feels personal, not programmed. Every interaction honors the individual journey while strengthening community bonds.',
            impactStory: 'A community member receives a personalized reflection on their spiritual milestone, timed perfectly, feeling seen and supported by their faith community.'
        },
        {
            number: '04',
            icon: 'shield',
            title: 'Institutional Governance & Control',
            body: 'Full oversight over content sources, responses, escalation paths, and ethical guardrails. Your doctrine, your values, your control—always.',
            impactStory: 'Religious leaders maintain complete authority over AI responses, ensuring every answer aligns perfectly with their tradition\'s teachings and values.'
        },
        {
            number: '05',
            icon: 'network',
            title: 'Multi-Platform Presence',
            body: 'Deploy your digital ecosystem across web, mobile, and conversational platforms like WhatsApp and Arattai. Meet your community where they already are.',
            impactStory: 'A seeker asks a spiritual question on WhatsApp at midnight and receives thoughtful, doctrine-aligned guidance instantly—no app download required.'
        },
        {
            number: '06',
            icon: 'globe',
            title: 'Multilingual & Global Access',
            body: 'Serve seekers across languages and geographies without losing cultural or doctrinal nuance. Break down barriers while preserving authenticity.',
            impactStory: 'A diaspora community member reconnects with their ancestral faith through teachings delivered in their preferred language, maintaining cultural authenticity.'
        },
        {
            number: '07',
            icon: 'coins',
            title: 'Sustainable Ecosystems',
            body: 'Integrate donation gateways, discourse subscriptions, and event bookings directly into your community platforms. Transform spiritual engagement into sustainable support for your mission.',
            impactStory: 'A community seamlessly processes monthly contributions, event registrations, and premium content access—all within their familiar chat interface.'
        },
        {
            number: '08',
            icon: 'settings',
            title: 'Operational Stewardship',
            body: 'Automating the administrative "how"—from tithes to registrations—so leaders and their teams can focus on the "why". Free your ministry from paperwork to focus on people.',
            impactStory: 'A spiritual leader spends 70% less time on administrative tasks, redirecting that energy to counseling, teaching, and deepening community connections.'
        }
    ];

    return (
        <HomeClient>
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    ...generateServiceSchema(capabilities.map(cap => ({
                        name: cap.title,
                        description: cap.body,
                        category: 'Technology Service'
                    }))),
                    generateWebPageSchema(
                        {
                            name: 'MZHub - Spiritual AI for Faith Communities',
                            description: 'AI-powered spiritual guidance platform helping religious institutions preserve teachings and connect with communities.',
                            url: '/',
                        },
                        absoluteUrl('')
                    ),
                ]}
            />

            {/* Video Showcase */}
            <SectionWrapper id="showcase" className="bg-neutral-light dark:bg-primary-dark -mt-32 md:-mt-0 pt-4 md:pt-24">
                <VideoShowcase
                    caption="Empowering faith communities through technology"
                />
            </SectionWrapper>

            {/* Platform Capabilities */}
            <CapabilitiesSection capabilities={capabilities} />

            {/* Philosophy & Trust */}
            <SectionWrapper id="philosophy" className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto space-y-12 px-4">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                        <div className="text-center space-y-4">
                            <p className="uppercase text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                                TECHNOLOGY IN SERVICE OF FAITH
                            </p>
                            <h2 className="text-3xl md:text-5xl font-semibold text-secondary-light dark:text-accent-gold">
                                Technology in Service of Faith
                            </h2>
                            <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                                A philosophy built on stewardship, humility, and responsibility
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                        <div className="rounded-[28px] border border-secondary-light/15 dark:border-secondary-dark/50 bg-white/85 dark:bg-card/70 shadow-xl px-6 md:px-12 py-10 text-center">
                            <p className="text-xl md:text-2xl font-semibold text-secondary-light dark:text-accent-gold leading-relaxed">
                                AI should amplify spiritual wisdom — never replace it.
                                <br />Technology must serve tradition, not the other way around.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                        <div className="grid gap-6 md:grid-cols-2">
                            {[{
                                title: 'What We Believe',
                                points: [
                                    'Human spiritual leadership is irreplaceable',
                                    'Doctrine must remain institution-controlled',
                                    'Faith demands care, context, and continuity',
                                    'Technology should be transparent and accountable'
                                ]
                            }, {
                                title: 'What We Promise',
                                points: [
                                    'Complete institutional oversight',
                                    'Rigorous doctrinal alignment',
                                    'Privacy, security, and data sovereignty',
                                    'Continuous ethical review'
                                ]
                            }].map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-[24px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-white/85 dark:bg-card/70 shadow-lg px-6 md:px-8 py-8 space-y-5"
                                >
                                    <h3 className="text-xl font-semibold text-secondary-light dark:text-white">
                                        {card.title}
                                    </h3>
                                    <ul className="space-y-4 text-sm md:text-base text-secondary-light/85 dark:text-text-mist leading-relaxed">
                                        {card.points.map((point) => (
                                            <li key={point} className="relative pl-5">
                                                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-secondary-light/70 dark:bg-accent-gold" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={1} blurStrength={4}>
                        <p className="text-center text-base md:text-lg text-secondary-light/80 dark:text-accent-gold">
                            Faith is inherited — understanding is built. MZHub exists to protect both.
                        </p>
                    </ScrollReveal>
                </div>
            </SectionWrapper>

            {/* Testimonial */}
            <SectionWrapper id="social-proof" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-12">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold">Trusted by Spiritual Leaders Worldwide</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        See what religious institutions and spiritual communities are saying about MZHub
                    </p>
                </div>
                <StaggerTestimonials />
            </SectionWrapper>

            {/* Final CTA */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                {/* Background Image with Overlay - Matching About Page Structure */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/projects/community-bg.jpg)',
                        }}
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80" />

                    {/* Additional accent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/10 via-transparent to-accent-gold/10" />
                </div>

                <div className="container-custom px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                            <div className="min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center justify-center flex-col">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-white">
                                    Ready to Extend Your
                                    <br />
                                    <span className="text-accent-gold">Spiritual Reach?</span>
                                </h2>
                            </div>
                        </ScrollReveal>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Join religious institutions worldwide who are using MZHub to preserve their teachings and serve their communities better.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <BlobButton as={Link} href="/contact">
                                Schedule Demo
                            </BlobButton>
                            <BlobButton as={Link} href="/faq">
                                View FAQs
                            </BlobButton>
                        </div>
                    </div>
                </div>
            </section>
        </HomeClient>
    )
}
