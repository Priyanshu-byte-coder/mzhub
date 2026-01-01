'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { ArrowRight } from 'lucide-react'

export default function PhilosophySection() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const beliefCards = [
        {
            id: 'believe',
            title: 'What We Believe',
            points: [
                'Human spiritual leadership is irreplaceable',
                'Doctrine must remain institution-controlled',
                'Faith demands care, context, and continuity',
                'Technology should be transparent and accountable'
            ],
            ctaText: 'Read our Ethics Framework',
            ctaLink: '/about'
        },
        {
            id: 'promise',
            title: 'What We Promise',
            points: [
                'Complete institutional oversight',
                'Rigorous doctrinal alignment',
                'Privacy, security, and data sovereignty',
                'Continuous ethical review'
            ],
            ctaText: 'View Our Commitments',
            ctaLink: '/about'
        }
    ]

    return (
        <SectionWrapper id="philosophy" className="bg-neutral-light dark:bg-primary-dark">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 px-4">
                {/* Powerful Quote at Top */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                    <div className="text-center space-y-4 md:space-y-6 px-4">
                        <p className="text-xl md:text-3xl lg:text-4xl font-bold text-secondary-light dark:text-accent-gold leading-tight">
                            Faith is inherited — understanding is built.
                        </p>
                        <p className="text-base md:text-xl text-secondary-light/80 dark:text-text-mist">
                            MZHub exists to protect both.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Section Header */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                    <div className="text-center space-y-3 md:space-y-4 px-4">
                        <p className="uppercase text-xs md:text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                            TECHNOLOGY IN SERVICE OF FAITH
                        </p>
                        <h2 className="text-2xl md:text-5xl font-semibold text-secondary-light dark:text-accent-gold">
                            Technology in Service of Faith
                        </h2>
                        <p className="text-sm md:text-lg text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                            A philosophy built on stewardship, humility, and responsibility
                        </p>
                    </div>
                </ScrollReveal>

                {/* Core Statement */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                    <div className="rounded-[24px] md:rounded-[28px] border border-secondary-light/15 dark:border-secondary-dark/50 bg-white/85 dark:bg-card/70 shadow-xl px-5 md:px-12 py-8 md:py-10 text-center">
                        <p className="text-base md:text-2xl font-semibold text-secondary-light dark:text-accent-gold leading-relaxed">
                            AI should amplify spiritual wisdom — never replace it.
                            <br className="hidden md:block" />
                            <span className="md:hidden"> </span>
                            Technology must serve tradition, not the other way around.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Belief Cards with Hover States */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                    <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                        {beliefCards.map((card) => {
                            const isHovered = hoveredCard === card.id

                            return (
                                <div
                                    key={card.id}
                                    className="group relative rounded-[20px] md:rounded-[24px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-white/85 dark:bg-card/70 shadow-lg px-5 md:px-8 py-6 md:py-8 space-y-4 md:space-y-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-accent-gold/40 dark:hover:border-accent-gold/60 overflow-hidden"
                                    onMouseEnter={() => setHoveredCard(card.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:to-accent-gold/10 dark:group-hover:from-accent-gold/10 dark:group-hover:to-accent-gold/15 transition-all duration-500 rounded-[24px]" />
                                    
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-semibold text-secondary-light dark:text-white mb-3 md:mb-0">
                                            {card.title}
                                        </h3>
                                        <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-secondary-light/85 dark:text-text-mist leading-relaxed">
                                            {card.points.map((point) => (
                                                <li key={point} className="relative pl-5">
                                                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-secondary-light/70 dark:bg-accent-gold" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button - Appears on Hover */}
                                        <div
                                            className={`mt-5 md:mt-6 transition-all duration-500 ${
                                                isHovered 
                                                    ? 'opacity-100 translate-y-0' 
                                                    : 'opacity-0 translate-y-4 pointer-events-none'
                                            }`}
                                        >
                                            <Link
                                                href={card.ctaLink}
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-accent-gold/90 to-accent-gold/80 dark:from-accent-gold dark:to-accent-gold/90 text-white font-medium text-sm hover:from-accent-gold hover:to-accent-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                            >
                                                <span>{card.ctaText}</span>
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}
