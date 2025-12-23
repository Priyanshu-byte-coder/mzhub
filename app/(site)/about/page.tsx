import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/siteUrl'
import Link from 'next/link'
import { getTeamMembers } from '@/lib/about/teamMembers'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo/schemas'
import { BlobButton } from '@/components/ui/shared/BlobButton'

import VisuvateHero from '@/components/layout/about/VisuvateHero'
import PhilosophySection from '@/components/layout/about/PhilosophySection'
import ValuesTimeline from '@/components/layout/about/ValuesTimeline'
import MissionVisionSection from '@/components/layout/about/MissionVisionSection'
import WhyDifferentSection from '@/components/layout/about/WhyDifferentSection'
import TeamSection from '@/components/layout/about/TeamSection'
import CTASection from '@/components/layout/about/CTASection'

export const metadata: Metadata = {
    title: 'About Us | MZHub - AI Spiritual Platform for Religious Institutions',
    description: 'Learn about MZHub, an AI-powered spiritual platform bridging ancient wisdom with modern technology. Discover our mission, core values, and dedicated team serving religious institutions worldwide with ethical AI solutions.',
    keywords: [
        'MZHub',
        'AI spiritual platform',
        'religious AI',
        'spiritual technology',
        'faith-based AI',
        'religious institutions',
        'spiritual guidance',
        'AI ethics',
        'sacred knowledge preservation',
        'digital ministry',
        'church technology',
        'mosque technology',
        'temple technology',
        'spiritual wisdom AI',
        'ethical AI for faith',
        'religious content management',
        'spiritual community platform',
        'AI-powered guidance',
        'faith community technology',
        'religious digital transformation'
    ],
    openGraph: {
        title: 'About Us | MZHub - AI Spiritual Platform',
        description: 'MZHub bridges ancient spiritual wisdom with modern AI technology. Learn about our mission to serve religious institutions with ethical, reverent AI solutions.',
        type: 'website',
        url: absoluteUrl('/about'),
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | MZHub - AI Spiritual Platform',
        description: 'MZHub bridges ancient spiritual wisdom with modern AI technology. Learn about our mission to serve religious institutions.',
    },
    alternates: {
        canonical: absoluteUrl('/about'),
    },
}

export default function About() {
    const team = getTeamMembers()

    return (
        <main 
            className="bg-white dark:bg-primary-dark min-h-screen w-full"
            style={{ 
                position: 'relative',
                overflowX: 'hidden',
                overflowY: 'visible',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y pan-x'
            }}
        >
            {/* Structured Data for SEO */}
            <JsonLd
                data={[
                    generateOrganizationSchema(),
                    generateWebPageSchema(
                        {
                            name: 'About Us - MZHub AI Spiritual Platform',
                            description: 'Learn about MZHub, an AI-powered spiritual platform bridging ancient wisdom with modern technology. Discover our mission, core values, and dedicated team serving religious institutions worldwide.',
                            url: '/about',
                        },
                        absoluteUrl('')
                    ),
                ]}
            />

            {/* Hidden SEO Keywords */}
            <h1 className="sr-only">
                About MZHub - AI Spiritual Platform for Religious Institutions | Bridging Ancient Wisdom with Modern Technology
            </h1>

            {/* Hero Section - Visuvate Style */}
            <VisuvateHero />

            {/* Philosophy Section */}
            <PhilosophySection />

            {/* Mission & Vision */}
            <MissionVisionSection />

            {/* Values Timeline - Visuvate Style */}
            <ValuesTimeline />

            {/* Why MZHub Is Different */}
            <WhyDifferentSection />

            {/* Team Section */}
            <TeamSection team={team} />

            {/* CTA Section - Visuvate Style */}
            <CTASection />

            {/* Schema.org structured data for keywords */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "MZHub",
                        "description": "AI-powered spiritual platform bridging ancient wisdom with modern technology for religious institutions",
                        "url": absoluteUrl('/'),
                        "sameAs": [],
                        "knowsAbout": [
                            "Artificial Intelligence",
                            "Spiritual Technology",
                            "Religious Content Management",
                            "Faith-based AI Solutions",
                            "Sacred Knowledge Preservation",
                            "Digital Ministry",
                            "Ethical AI",
                            "Multi-faith Platform"
                        ]
                    })
                }}
            />
        </main>
    )
}
