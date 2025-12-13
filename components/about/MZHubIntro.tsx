"use client"

import SectionWrapper from '@/components/ui/SectionWrapper'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { motion } from 'framer-motion'

export default function MZHubIntro() {
    return (
        <SectionWrapper fullWidth className="bg-gradient-to-b from-neutral-light via-white to-neutral-light dark:from-primary-dark dark:via-primary-dark/90 dark:to-primary-dark">
            <div className="relative overflow-hidden w-full px-4 md:px-8 lg:px-12 text-secondary-light dark:text-text-mist">
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[-10%] top-0 h-64 rounded-full bg-gradient-to-r from-accent-gold/10 via-accent-blue/5 to-accent-gold/10 blur-3xl"
                    animate={{ y: [0, 12, 0], opacity: [0.15, 0.22, 0.15] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative grid items-center gap-10 md:gap-14 md:grid-cols-[0.85fr_1.25fr] lg:grid-cols-[0.8fr_1.35fr]">
                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0} className="space-y-4">
                        <motion.div
                            initial={{ y: 24, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
                        >
                            <div className="flex flex-col gap-2">
                                <span className="inline-flex items-center gap-3">
                                    <span className="inline-block h-2 w-8 rounded-full bg-accent-gold/80" />
                                    <span className="uppercase text-sm tracking-[0.4em] text-secondary-light/70 dark:text-text-mist/70">Why</span>
                                </span>
                                <span className="inline-flex items-center gap-3">
                                    <span className="text-secondary-light dark:text-white">MZHub</span>
                                </span>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ y: 18, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
                            className="max-w-xl text-lg md:text-xl leading-relaxed text-secondary-light/85 dark:text-text-mist"
                        >
                            A FAITHTECH platform shaped to extend timeless wisdom into the digital age with care, accuracy, and trust.
                        </motion.p>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.25} enableBlur={false} baseRotation={0} className="relative">
                        <div className="relative overflow-hidden rounded-2xl border border-secondary-light/10 dark:border-text-mist/10 bg-white/70 backdrop-blur-md dark:bg-secondary-dark/50 px-6 md:px-8 py-8 md:py-10 shadow-lg">
                            <div className="space-y-4 md:space-y-5 text-base md:text-lg leading-relaxed">
                                <div className="relative overflow-hidden rounded-xl bg-neutral-100/80 dark:bg-primary-dark/60 px-4 py-3 shadow-inner">
                                    <p className="font-semibold text-secondary-light dark:text-white">Most AI platforms today stop at integration.</p>
                                    <Shimmer />
                                </div>
                                <p className="relative">
                                    They connect an API, generate responses, and move on — a pattern that fails when the goal is to preserve meaning, context, and responsibility across faith, culture, and community leadership.
                                    <Shimmer subtle />
                                </p>
                                <p className="relative">
                                    MZHub is built differently. A multi-agent intelligence architecture brings specialized roles together — knowledge grounding, contextual reasoning, ethical validation, and engagement delivery — so guidance remains accountable at every step.
                                    <Shimmer subtle delay={0.2} />
                                </p>
                                <p className="relative">
                                    This layered approach keeps consistency across evolving archives, respects doctrinal and organizational boundaries, adapts to individual journeys without losing authenticity, and scales across languages, regions, and communities with confidence.
                                    <Shimmer subtle delay={0.35} />
                                </p>
                                <p className="relative">
                                    In practice, MZHub understands where knowledge comes from, how it should be interpreted, and when human oversight is essential — delivering intelligent guidance with accountability, transparency, and trust built in by design.
                                    <Shimmer subtle delay={0.5} />
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </SectionWrapper>
    )
}

function Shimmer({ subtle = false, delay = 0 }: { subtle?: boolean; delay?: number }) {
    const width = subtle ? '80%' : '65%'
    return (
        <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 block"
            initial={{ x: '-120%' }}
            animate={{ x: '120%' }}
            transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut', delay }}
        >
            <span
                className={`block h-full ${subtle ? 'opacity-25' : 'opacity-35'}`}
                style={{
                    width,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)',
                    filter: 'blur(12px)',
                }}
            />
        </motion.span>
    )
}
