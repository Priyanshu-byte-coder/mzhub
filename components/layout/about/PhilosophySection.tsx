'use client'

import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { Shield, Brain, Users, Lock, BookCheck, Globe2, Coins, Heart, Sparkles } from 'lucide-react'

export default function PhilosophySection() {
    const philosophyPillars = [
        {
            title: 'Digital Sanctuary',
            subtitle: 'Technology That Honors the Sacred',
            description: 'Faiths deserve a digital space as sacred and trustworthy as its physical architecture. We believe technology should never rush what is sacred.',
            icon: Shield,
            color: 'from-blue-500/20 to-blue-600/10',
            principles: [
                {
                    icon: BookCheck,
                    title: 'Stewardship over Scraping',
                    description: 'We approach spiritual teachings with deep respect, preserving what elders share while making that wisdom accessible to new generations.'
                },
                {
                    icon: Lock,
                    title: 'Privacy as a Right',
                    description: 'We promise complete institutional oversight and data sovereignty, ensuring the community data remains your own.'
                },
                {
                    icon: Sparkles,
                    title: 'Design with Purpose',
                    description: 'We believe that spiritual technology should feel effortless and grounded in purpose, where every detail—from the way a page moves to how it makes someone feel—matters.'
                }
            ]
        },
        {
            title: 'Grounded Intelligence',
            subtitle: 'AI That Amplifies, Never Replaces',
            description: 'AI should amplify spiritual wisdom—never replace it. Technology must serve traditions, not the other way around.',
            icon: Brain,
            color: 'from-purple-500/20 to-purple-600/10',
            principles: [
                {
                    icon: Brain,
                    title: 'Answering the "Why"',
                    description: 'Faith is inherited, but understanding is built. We build "knowledge-grounded" companions that help curious individuals understand the doctrine-aligned "why" behind their practices.'
                },
                {
                    icon: BookCheck,
                    title: 'Scholarly Validation',
                    description: 'Our models undergo rigorous doctrinal alignment and continuous ethical review to prevent misinformation.'
                }
            ]
        },
        {
            title: 'Social Flourishing',
            subtitle: 'Technology for Community Betterment',
            description: 'Our team of young, inquisitive professionals believes that while work provides a livelihood, MZHub is our commitment to the betterment of society by making credible knowledge accessible.',
            icon: Users,
            color: 'from-green-500/20 to-green-600/10',
            principles: [
                {
                    icon: Globe2,
                    title: 'Inclusive Accessibility',
                    description: 'Serving seniors and next gen, multilingual communities, ensuring spiritual knowledge reaches everyone regardless of age, language, or technical ability.'
                },
                {
                    icon: Coins,
                    title: 'The Sustainable Ecosystem',
                    description: 'Bridging the gap from content to companion to commerce, automating the administrative "how" (donations, bookings, subscriptions, products) so leaders can focus on the spiritual "why".'
                },
                {
                    icon: Heart,
                    title: 'Secular Harmony',
                    description: 'United by the goal of building AI that promotes interfaith dialogues and universal spiritual teachings.'
                }
            ]
        }
    ]

    return (
        <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                    <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20 px-4">
                        <p className="uppercase text-xs md:text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                            THE INTENT
                        </p>
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-secondary-light dark:text-accent-gold">
                            Our Philosophy
                        </h2>
                        <p className="text-base md:text-xl text-secondary-light/80 dark:text-text-mist max-w-4xl mx-auto leading-relaxed">
                            Three pillars that guide everything we build
                        </p>
                    </div>
                </ScrollReveal>

                {/* Philosophy Pillars */}
                <div className="space-y-12 md:space-y-20">
                    {philosophyPillars.map((pillar, pillarIndex) => {
                        const PillarIcon = pillar.icon
                        
                        return (
                            <ScrollReveal
                                key={pillar.title}
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={pillarIndex % 2 === 0 ? 2 : -2}
                                blurStrength={6}
                            >
                                <div className="space-y-6 md:space-y-8">
                                    {/* Pillar Header */}
                                    <div className="text-center space-y-3 md:space-y-4 px-4">
                                        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 dark:from-accent-gold/30 dark:to-accent-gold/20 border-2 border-accent-gold/30 shadow-lg">
                                            <PillarIcon className="w-8 h-8 md:w-10 md:h-10 text-accent-gold" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl md:text-4xl font-bold text-secondary-light dark:text-white">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-base md:text-xl font-medium text-accent-gold dark:text-accent-gold/90">
                                            {pillar.subtitle}
                                        </p>
                                        <p className="text-sm md:text-lg text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>

                                    {/* Principles Grid */}
                                    <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {pillar.principles.map((principle, index) => {
                                            const PrincipleIcon = principle.icon
                                            
                                            return (
                                                <div
                                                    key={principle.title}
                                                    className="group rounded-[24px] md:rounded-[28px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-white/90 dark:bg-primary-dark/70 shadow-lg hover:shadow-2xl p-5 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:border-accent-gold/30 dark:hover:border-accent-gold/50 relative overflow-hidden backdrop-blur-sm"
                                                    style={{
                                                        transitionDelay: `${index * 100}ms`
                                                    }}
                                                >
                                                    {/* Gradient overlay */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-50 dark:opacity-70`} />
                                                    
                                                    {/* Hover glow */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:to-accent-gold/10 dark:group-hover:from-accent-gold/10 dark:group-hover:to-accent-gold/15 transition-all duration-500 rounded-[24px] md:rounded-[28px]" />
                                                    
                                                    <div className="relative z-10 space-y-3 md:space-y-4">
                                                        {/* Icon */}
                                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent-gold/30 to-accent-gold/20 dark:from-accent-gold/40 dark:to-accent-gold/30 flex items-center justify-center border-2 border-accent-gold/40 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                                            <PrincipleIcon className="w-6 h-6 md:w-7 md:h-7 text-accent-gold" strokeWidth={1.5} />
                                                        </div>

                                                        {/* Content */}
                                                        <div className="space-y-2">
                                                            <h4 className="text-base md:text-lg font-semibold text-secondary-light dark:text-white">
                                                                {principle.title}
                                                            </h4>
                                                            <p className="text-xs md:text-sm text-secondary-light/80 dark:text-text-mist leading-relaxed">
                                                                {principle.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}
