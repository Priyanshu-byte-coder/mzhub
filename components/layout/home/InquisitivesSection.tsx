'use client'

import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { Users, Heart, Lightbulb, Target } from 'lucide-react'

export default function InquisitivesSection() {
    const values = [
        {
            icon: Users,
            title: 'Secular & Inclusive',
            description: 'A diverse team from various religious backgrounds, united by a singular mission to serve all faiths equally.'
        },
        {
            icon: Heart,
            title: 'Service Over Profit',
            description: 'We view our work as a contribution to humanity, not just a means of livelihood.'
        },
        {
            icon: Lightbulb,
            title: 'Knowledge Accessibility',
            description: 'We believe making credible spiritual knowledge accessible strengthens society as a whole.'
        },
        {
            icon: Target,
            title: 'Community Betterment',
            description: 'Our purpose transcends business—we exist to empower and uplift existing faith communities.'
        }
    ]

    return (
        <SectionWrapper id="team" className="bg-gradient-to-b from-neutral-light to-white dark:from-primary-dark dark:to-primary-dark/80">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                    <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 px-4">
                        <p className="uppercase text-xs md:text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                            THE PEOPLE BEHIND THE MISSION
                        </p>
                        <h2 className="text-2xl md:text-5xl font-semibold text-secondary-light dark:text-accent-gold">
                            Meet the Inquisitives
                        </h2>
                        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
                            <p className="text-base md:text-2xl font-medium text-secondary-light dark:text-white leading-relaxed">
                                We are a secular team of professionals who believe that making credible knowledge accessible makes society better.
                            </p>
                            <p className="text-sm md:text-xl text-secondary-light/80 dark:text-text-mist">
                                We don't just work for livelihood; we work for the betterment of existing communities.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Philosophy Statement */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                    <div className="mb-10 md:mb-16 rounded-[24px] md:rounded-[32px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-gradient-to-br from-white/95 via-white/90 to-neutral-light/80 dark:from-primary-dark/80 dark:via-primary-dark/70 dark:to-primary-dark/60 shadow-xl px-6 md:px-12 py-8 md:py-16 backdrop-blur-sm relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
                            <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="team-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                        <circle cx="15" cy="15" r="2" fill="currentColor" className="text-accent-gold" />
                                    </pattern>
                                </defs>
                                <rect width="200" height="200" fill="url(#team-grid)" />
                            </svg>
                        </div>

                        <div className="relative z-10 text-center space-y-4 md:space-y-6">
                            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 dark:from-accent-gold/30 dark:to-accent-gold/20 border border-accent-gold/30 mb-2 md:mb-4">
                                <Heart className="w-7 h-7 md:w-8 md:h-8 text-accent-gold" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl md:text-3xl font-semibold text-secondary-light dark:text-accent-gold">
                                Work as Service
                            </h3>

                            <p className="text-sm md:text-lg text-secondary-light/85 dark:text-text-mist leading-relaxed max-w-3xl mx-auto">
                                While we recognize that work is the engine of livelihood, the MZHub team views our labor as a contribution to the betterment of humanity. We have chosen to apply our technical expertise to the Faith-Tech sector because we believe that making spiritual knowledge accessible is a vital social service.
                            </p>

                            <div className="pt-3 md:pt-4">
                                <p className="text-base md:text-xl font-medium text-secondary-light dark:text-accent-gold/90">
                                    We serve all traditions with equal reverence.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Values Grid */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                    <div className="grid gap-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div
                                    key={value.title}
                                    className="group rounded-[24px] md:rounded-[28px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-white/90 dark:bg-primary-dark/70 shadow-lg hover:shadow-2xl p-5 md:p-8 transition-all duration-500 hover:scale-[1.03] hover:border-accent-gold/30 dark:hover:border-accent-gold/50 relative overflow-hidden backdrop-blur-sm"
                                    style={{
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    {/* Subtle glow on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/0 group-hover:from-accent-gold/5 group-hover:to-accent-gold/10 dark:group-hover:from-accent-gold/10 dark:group-hover:to-accent-gold/15 transition-all duration-500 rounded-[24px] md:rounded-[28px]" />

                                    <div className="relative z-10 space-y-3 md:space-y-4">
                                        {/* Icon */}
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 dark:from-accent-gold/30 dark:to-accent-gold/20 flex items-center justify-center border border-accent-gold/30 mb-2 md:mb-4">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent-gold" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1.5 md:space-y-2">
                                            <h4 className="text-base md:text-lg font-semibold text-secondary-light dark:text-white">
                                                {value.title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-secondary-light/80 dark:text-text-mist leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ScrollReveal>

                {/* Closing Statement */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={1} blurStrength={4}>
                    <div className="mt-10 md:mt-16 text-center px-4">
                        <p className="text-base md:text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto leading-relaxed">
                            Our team's diversity is our greatest strength, allowing us to build context-aware AI that respects the nuances of different sects and philosophies while promoting universal spiritual harmony.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}
