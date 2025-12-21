import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/siteUrl'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import { getTeamMembers } from '@/lib/about/teamMembers'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import TeamCarousel from '@/components/layout/about/team-carousel'
import MZHubIntro from '@/components/layout/about/MZHubIntro'
import CoreValuesSticky from '@/components/ui/about/core-values-sticky'
import AboutHero from '@/components/layout/about/AboutHero'
import WhyThisMatters from '@/components/layout/about/WhyThisMatters'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo/schemas'
import { BlobButton } from '@/components/ui/shared/BlobButton'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about MZHub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
    alternates: {
        canonical: absoluteUrl('/about'),
    },
}

export default function About() {
    const team = getTeamMembers()

    return (
        <div className="bg-white dark:bg-primary-dark">
            {/* Structured Data */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    generateWebPageSchema(
                        {
                            name: 'About Us - MZHub',
                            description: 'Learn about MZHub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
                            url: '/about',
                        },
                        absoluteUrl('')
                    ),
                ]}
            />

            {/* Hero */}
            <AboutHero />

            <WhyThisMatters />

            {/* Mission */}
            <MZHubIntro />

            {/* Core Values replaced with Sticky Scroll */}
            {/**
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark" fullWidth>
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="w-full">
                        <CoreValuesSticky
                            videoSrc="/home/video/MZHub.mp4"
                            topOffset={112}
                            headingTitle="Our Core Values"
                            headingSubtitle="These principles guide every decision we make"
                            items={[
                                {
                                    title: 'Reverence for Tradition',
                                    text: 'We approach spiritual teachings with deep respect. Technology simply preserves what elders already share.',
                                    details: [
                                        'We observe archivists, chant keepers, and ritual artists before touching any interface.',
                                        'Councils review tone, gestures, and ceremonial cues every quarter.'
                                    ],
                                    highlights: [
                                        'Palette captured from temple murals',
                                        'Sound beds sourced from live ceremonies',
                                        'Blessing prompts signed by lineage elders'
                                    ],
                                    fillerBlocks: 6
                                },
                                {
                                    title: 'Institutional Sovereignty',
                                    text: 'Religious leaders keep full control of doctrine, approvals, and deployment cadence.',
                                    details: [
                                        'Guardrail workshops let clergy define red lines before launch.',
                                        'In-house stewards learn content tooling and rollback steps.'
                                    ],
                                    highlights: [
                                        'Council-facing provenance reports',
                                        'Self-hosting kits for sensitive archives',
                                        'Emergency rollback switch in governance UI'
                                    ],
                                    fillerBlocks: 6
                                },
                                {
                                    title: 'Privacy as Sacred',
                                    text: 'Spiritual seeking is intimate, so every inquiry stays encrypted, logged, and under institutional guardianship.',
                                    details: [
                                        'Pastoral escalation flows redact sensitive fragments before routing to leaders.',
                                        'Annual drills simulate incidents so guardians rehearse every protection step.'
                                    ],
                                    highlights: [
                                        'Multi-region redundancy tuned for sacred sites',
                                        'Anonymized analytics dashboards for leaders',
                                        'Consent receipts via email or SMS for every devotee'
                                    ],
                                    fillerBlocks: 6
                                },
                            ]}
                        />
                    </div>
                </div>
            </SectionWrapper>
            **/}

            {/* Team */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-12">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <p className="text-sm uppercase tracking-[0.4em] text-secondary-light/70 dark:text-text-mist/70">Meet Our Team</p>
                        <h2 className="mt-4 text-4xl font-bold text-secondary-light dark:text-accent-gold">Faces behind the mission</h2>
                    </ScrollReveal>
                    <p className="mt-4 text-base text-secondary-light/80 dark:text-text-mist/80">
                        Every partnership blends rigorous AI craft with reverence for sacred wisdom. Hover to bring each story from archival grayscale to living color.
                    </p>
                </div>

                <TeamCarousel team={team} />
            </SectionWrapper>

            <SectionWrapper className="bg-white dark:bg-primary-dark">
                <div className="py-16 md:py-20 text-center space-y-5">
                    <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                        When stewardship-first AI feels right for your community, let us walk with you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <BlobButton as={Link} href="/contact">
                            Partner with MZHub
                        </BlobButton>
                        <BlobButton as={Link} href="/projects">
                            View Our Work
                        </BlobButton>
                    </div>
                </div>
            </SectionWrapper>

        </div>
    )
}
