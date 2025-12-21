import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { ContainerScroll } from '@/components/ui/home/container-scroll-animation'
import { StaggerTestimonials } from '@/components/layout/home/stagger-testimonials'
import VideoShowcase from '@/components/layout/home/video-component'
import HomeClient from '@/components/layout/home/HomeClient'
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
        canonical: 'https://mzhub.com',
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
            title: 'AI-Powered Spiritual Guidance',
            body: 'Knowledge-grounded companions that provide contextual, doctrine-aligned guidance while respecting institutional boundaries.'
        },
        {
            number: '02',
            title: 'Digital Heritage Preservation',
            body: 'AI-OCR transcription and content structuring to preserve manuscripts, sermons, and archives for the digital age.'
        },
        {
            number: '03',
            title: 'Community Engagement Automation',
            body: 'Thoughtful automation for messages, reminders, reflections, and community updates — delivered with care.'
        },
        {
            number: '04',
            title: 'Institutional Governance & Control',
            body: 'Full oversight over content sources, responses, escalation paths, and ethical guardrails.'
        },
        {
            number: '05',
            title: 'Multi-Platform Presence',
            body: 'Deploy your digital ecosystem across web, mobile, and conversational platforms like WhatsApp and Arattai.'
        },
        {
            number: '06',
            title: 'Multilingual & Global Access',
            body: 'Serve seekers across languages and geographies without losing cultural or doctrinal nuance.'
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
                        'https://mzhub.com'
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
            <SectionWrapper id="features" className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12 space-y-3">
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-4xl font-semibold text-secondary-light dark:text-accent-gold">
                                    Platform Capabilities
                                </h2>
                                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                                    Everything required to build a responsible, scalable faith ecosystem
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.number}
                                className="h-full rounded-3xl border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/85 dark:bg-primary-dark/60 shadow-sm px-6 py-8 flex flex-col space-y-4"
                            >
                                <span className="text-xs uppercase tracking-[0.4em] text-secondary-light/60 dark:text-text-mist/60">
                                    {capability.number}
                                </span>
                                <h3 className="text-xl font-semibold text-secondary-light dark:text-white">
                                    {capability.title}
                                </h3>
                                <p className="text-sm md:text-base text-secondary-light/85 dark:text-text-mist leading-relaxed">
                                    {capability.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm md:text-base text-secondary-light/70 dark:text-text-mist mt-10">
                        Capabilities built to support faith — not redefine it.
                    </p>
                </div>
            </SectionWrapper>

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
            <section
                className="py-20 md:py-32 relative overflow-hidden"
                style={{
                    backgroundImage: 'url(/projects/community-bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Light overlay to make background lighter */}
                <div className="absolute inset-0 bg-white/85 dark:bg-primary-dark/85"></div>

                <div className="container-custom px-4 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-light dark:text-accent-gold">
                                Ready to Extend Your Spiritual Reach?
                            </h2>
                        </ScrollReveal>
                        <p className="text-xl mb-8 text-secondary-light/80 dark:text-text-mist">
                            Join religious institutions worldwide who are using MZHub to preserve their teachings and serve their communities better.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <BlobButton as={Link} href="/contact">
                                Schedule Demo
                            </BlobButton>
                            <BlobButton as={Link} href="/projects">
                                Learn More
                            </BlobButton>
                        </div>
                    </div>
                </div>
            </section>
        </HomeClient>
    )
}
