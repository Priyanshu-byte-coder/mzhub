'use client'

import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { Users, Globe, Heart, Sparkles } from 'lucide-react'

export default function TeamCompositionSection() {
    const teamHighlights = [
        {
            icon: Users,
            title: 'Secular & Multi-Faith',
            description: 'Our team includes members from diverse religious backgrounds—Hindu, Christian, Muslim, and more—working together with mutual respect.'
        },
        {
            icon: Globe,
            title: 'United by Purpose',
            description: 'Despite our different faiths, we share a singular goal: making spiritual knowledge accessible to strengthen society.'
        },
        {
            icon: Heart,
            title: 'Service-Driven',
            description: 'We view our work not just as livelihood, but as a meaningful contribution to the betterment of faith communities worldwide.'
        },
        {
            icon: Sparkles,
            title: 'Context-Aware Expertise',
            description: 'Our diversity is our strength—enabling us to build AI that respects the nuances of different traditions and philosophies.'
        }
    ]

    return (
        <SectionWrapper className="bg-white dark:bg-primary-dark">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                    <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
                        <p className="uppercase text-xs md:text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                            OUR UNIQUE COMPOSITION
                        </p>
                        <h2 className="text-2xl md:text-5xl font-semibold text-secondary-light dark:text-accent-gold px-4">
                            A Secular Team, A Sacred Mission
                        </h2>
                        <p className="text-base md:text-2xl text-secondary-light/80 dark:text-text-mist max-w-4xl mx-auto leading-relaxed px-4">
                            We are a secular team with members from all faiths, united by the goal of making spiritual knowledge accessible to better society.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Main Statement Card */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                    <div className="mb-10 md:mb-16 rounded-[24px] md:rounded-[32px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-gradient-to-br from-accent-gold/5 via-white/95 to-accent-gold/10 dark:from-accent-gold/10 dark:via-primary-dark/80 dark:to-accent-gold/5 shadow-2xl px-6 md:px-16 py-8 md:py-16 backdrop-blur-sm relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 dark:bg-accent-gold/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 dark:bg-accent-gold/10 rounded-full blur-3xl" />
                        
                        <div className="relative z-10 text-center space-y-4 md:space-y-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-gold/20 dark:from-accent-gold/40 dark:to-accent-gold/30 border-2 border-accent-gold/40 mb-2 md:mb-4 shadow-lg">
                                <Users className="w-7 h-7 md:w-8 md:h-8 text-accent-gold" strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-xl md:text-3xl font-semibold text-secondary-light dark:text-accent-gold">
                                Diversity as Our Foundation
                            </h3>
                            
                            <p className="text-sm md:text-lg text-secondary-light/85 dark:text-text-mist leading-relaxed max-w-3xl mx-auto">
                                Our team's composition is not accidental—it's intentional. By bringing together professionals from various religious backgrounds, we ensure that every solution we build is informed by genuine understanding, not assumption. We don't just tolerate different faiths; we celebrate them.
                            </p>
                            
                            <div className="pt-3 md:pt-4 border-t border-secondary-light/10 dark:border-secondary-dark/30 mt-4 md:mt-8">
                                <p className="text-base md:text-xl font-medium text-accent-gold dark:text-accent-gold">
                                    "We serve all traditions with equal reverence."
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Team Highlights Grid */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                    <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {teamHighlights.map((highlight, index) => {
                            const Icon = highlight.icon
                            return (
                                <div
                                    key={highlight.title}
                                    className="group rounded-[24px] md:rounded-[28px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-white/90 dark:bg-primary-dark/70 shadow-lg hover:shadow-2xl p-5 md:p-8 transition-all duration-500 hover:scale-[1.03] hover:border-accent-gold/30 dark:hover:border-accent-gold/50 relative overflow-hidden"
                                    style={{
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    {/* Hover glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:to-accent-gold/10 dark:group-hover:from-accent-gold/10 dark:group-hover:to-accent-gold/15 transition-all duration-500 rounded-[28px]" />
                                    
                                    <div className="relative z-10 space-y-3 md:space-y-4">
                                        {/* Icon */}
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 dark:from-accent-gold/30 dark:to-accent-gold/20 flex items-center justify-center border border-accent-gold/20 dark:border-accent-gold/30 shadow-inner group-hover:scale-110 transition-transform duration-500">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent-gold" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1.5 md:space-y-2">
                                            <h4 className="text-base md:text-lg font-semibold text-secondary-light dark:text-white">
                                                {highlight.title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-secondary-light/80 dark:text-text-mist leading-relaxed">
                                                {highlight.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ScrollReveal>

                {/* Bottom Statement */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={1} blurStrength={4}>
                    <div className="mt-10 md:mt-16 text-center px-4">
                        <p className="text-base md:text-xl text-secondary-light/80 dark:text-text-mist max-w-4xl mx-auto leading-relaxed">
                            This isn't just a business model—it's a calling. We believe that when credible spiritual knowledge is accessible, society becomes stronger, communities become more connected, and individuals find deeper meaning in their faith traditions.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}
