import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import Card from '@/components/ui/shared/Card'
import { getTeamMembers } from '@/lib/about/teamMembers'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import TeamCarousel from '@/components/layout/about/team-carousel'
import MZHubIntro from '@/components/layout/about/MZHubIntro'
import CoreValuesSticky from '@/components/ui/about/core-values-sticky'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about MZhub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
    keywords: ['about mzhub', 'spiritual AI mission', 'religious technology team', 'faith tech values'],
    alternates: {
        canonical: 'https://mzhub.com/about',
    },
    openGraph: {
        title: 'About MZhub - Bridging Ancient Wisdom with Modern Technology',
        description: 'Learn about MZhub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
        url: 'https://mzhub.com/about',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About MZhub - Bridging Ancient Wisdom with Modern Technology',
        description: 'Learn about MZhub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
    },
}

export default function About() {
    const team = getTeamMembers()

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Bridging <span className="text-spiritual-gold-300">Ancient Wisdom</span>
                        <br />
                        with Modern Technology
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        MZhub exists to help religious institutions preserve their sacred teachings while reaching devotees in the digital age.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <MZHubIntro />

            {/* Core Values replaced with Sticky Scroll */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark" fullWidth>
                <div className="w-full px-4 sm:px-8 lg:px-12">
                    <div className="w-full">
                        <CoreValuesSticky
                            videoSrc="/home/video/mzhub.mp4"
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

        </div>
    )
}
