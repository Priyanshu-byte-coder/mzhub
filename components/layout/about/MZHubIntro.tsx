"use client"

import Link from 'next/link'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { motion } from 'framer-motion'

export default function MZHubIntro() {
    return (
        <SectionWrapper fullWidth className="bg-neutral-light dark:bg-primary-dark">
            <div className="relative overflow-hidden w-full px-4 md:px-8 lg:px-12 py-20 md:py-28 text-secondary-light dark:text-text-mist">
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[-10%] top-0 h-64 rounded-full bg-gradient-to-r from-accent-gold/10 via-accent-blue/5 to-accent-gold/10 blur-3xl"
                    animate={{ y: [0, 12, 0], opacity: [0.15, 0.22, 0.15] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative space-y-20 md:space-y-28">
                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="relative grid items-start gap-6 md:gap-8 lg:gap-10 md:grid-cols-[0.68fr_0.32fr]">
                            <div className="absolute inset-0 rounded-[32px] bg-white/40 dark:bg-secondary-dark/40 backdrop-blur-[1px] opacity-60" aria-hidden="true" />
                            <div className="space-y-6 max-w-3xl relative z-10 md:justify-self-center text-center">
                                <div className="uppercase text-sm md:text-base tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                                    WHY THIS MATTERS TODAY
                                </div>
                                <h3 className="text-[2.4rem] md:text-[3.6rem] font-semibold text-secondary-light dark:text-white leading-tight">
                                    A World More Connected — Yet Spiritually Disconnected
                                </h3>
                                <div className="space-y-6 text-base md:text-xl leading-[1.95] text-secondary-light/90 dark:text-text-mist max-w-[55ch] mx-auto">
                                    <p>
                                        Technology has connected billions of people across the globe, yet meaningful spiritual guidance has become harder to access, harder to scale, and harder to preserve.
                                    </p>
                                    <p>
                                        Sacred teachings often remain locked inside sermons, manuscripts, recordings, or archives — powerful, but unavailable when seekers need guidance in daily life.
                                    </p>
                                    <p>
                                        Human spiritual leadership is irreplaceable, but time, geography, and administrative burden limit its reach. Institutions struggle to remain present across generations while staying true to tradition.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col justify-center md:justify-self-center md:text-left">
                                <div className="space-y-4">
                                    <div className="uppercase text-xs tracking-[0.45em] text-secondary-light/60 dark:text-text-mist/60">
                                        Key Challenges Today
                                    </div>
                                    <div className="grid gap-3 max-w-sm">
                                        {[
                                            'Wisdom Locked Away',
                                            "Guidance Doesn\'t Scale",
                                            'Institutions Overburdened',
                                        ].map((phrase, idx) => (
                                            <div
                                                key={phrase}
                                                className="rounded-2xl border border-secondary-light/15 dark:border-text-mist/20 bg-white/80 dark:bg-secondary-dark/60 shadow-lg px-6 py-6 flex items-center justify-between transition-transform duration-200 hover:-translate-y-0.5"
                                            >
                                                <span className="text-sm md:text-base font-medium tracking-wide text-secondary-light dark:text-text-mist">
                                                    {phrase}
                                                </span>
                                                <span className="h-9 w-9 rounded-full border border-secondary-light/15 dark:border-text-mist/25 flex items-center justify-center text-secondary-light/50 dark:text-text-mist/60 text-xs">
                                                    0{idx + 1}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="w-full rounded-2xl bg-gradient-to-r from-white/80 via-accent-beige/50 to-white/80 dark:from-secondary-dark/70 dark:via-primary-dark/60 dark:to-secondary-dark/70 border border-secondary-light/10 dark:border-secondary-dark/40 px-6 md:px-10 py-6 text-center text-lg md:text-xl font-semibold italic text-secondary-light dark:text-accent-gold">
                                The challenge is not faith — it is access, continuity, and care at scale.
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="rounded-[32px] border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/75 dark:bg-secondary-dark/60 backdrop-blur-sm px-6 md:px-12 py-14 text-center flex flex-col items-center">
                            <div className="uppercase text-sm md:text-base tracking-[0.5em] text-secondary-light/70 dark:text-text-mist/70 mb-6">
                                WHAT IS MZHub
                            </div>
                            <h3 className="text-3xl md:text-5xl font-semibold text-secondary-light dark:text-white leading-snug max-w-4xl">
                                Meet MZHub — Faith, Forward
                            </h3>
                            <div className="mt-8 space-y-5 text-base md:text-xl leading-[1.9] text-secondary-light/90 dark:text-text-mist max-w-3xl mx-auto">
                                <p>
                                    MZHub is a FaithTech platform designed to help spiritual and religious institutions extend their guidance beyond physical boundaries — without compromising doctrine, dignity, or human leadership.
                                </p>
                                <p>
                                    We work alongside Gurus, Priests, Pastors, and faith-driven organisations to transform their teachings into trusted, accessible digital experiences for the modern seeker.
                                </p>
                                <p>
                                    MZHub bridges ancient wisdom and modern technology with one clear principle: technology must serve faith, not redefine it.
                                </p>
                            </div>
                            <div className="mt-10 w-full flex justify-center">
                                <div className="w-full max-w-3xl rounded-3xl bg-gradient-to-r from-accent-beige/70 via-white to-accent-gold/20 dark:from-secondary-dark/70 dark:via-primary-dark/60 dark:to-accent-gold/15 border border-accent-gold/25 px-8 md:px-14 py-10 shadow-xl">
                                    <p className="text-xl md:text-2xl font-semibold leading-relaxed text-secondary-light dark:text-accent-gold">
                                        MZHub does not digitise faith. It protects it — and helps it travel further.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0} className="pt-8 md:pt-16">
                        <div className="space-y-10 rounded-[36px] bg-white dark:bg-secondary-dark/65 border border-secondary-light/10 dark:border-secondary-dark/40 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.25)] px-4 md:px-10 py-10">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl md:text-4xl font-semibold text-secondary-light dark:text-white">
                                    Why MZHub Is Different
                                </h3>
                                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                                    Because meaning, context, and responsibility cannot be handled by simple AI integrations
                                </p>
                            </div>

                            <div className="relative grid gap-6 md:gap-10 md:grid-cols-[0.4fr_0.6fr]">
                                <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-secondary-light/20 via-secondary-light/40 to-secondary-light/20 dark:from-accent-gold/10 dark:via-accent-gold/30 dark:to-accent-gold/10" aria-hidden="true" />

                                <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={0} className="space-y-4">
                                    <p className="text-xs uppercase tracking-[0.4em] text-secondary-light/60 dark:text-text-mist/60">
                                        Most AI Platforms Stop at Integration
                                    </p>
                                    <div className="space-y-3 border-l border-secondary-light/20 dark:border-secondary-dark/40 pl-4">
                                        {[ 'Connect to an API', 'Generate an answer', 'Move on' ].map((step, index) => (
                                            <div key={step} className="flex items-center gap-3">
                                                <span className="h-2 w-2 rounded-full bg-secondary-light/60 dark:bg-accent-gold" />
                                                <p className="text-sm md:text-base text-secondary-light/85 dark:text-text-mist">{index + 1}. {step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0} className="relative">
                                    <div className="rounded-[32px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-white/95 dark:bg-secondary-dark/70 shadow-lg/5 px-6 md:px-10 py-10 space-y-6">
                                        <h4 className="text-xl font-semibold text-secondary-light dark:text-white">
                                            MZHub Is Built for Responsibility
                                        </h4>
                                        <div className="space-y-3">
                                            {[{
                                                title: 'Knowledge Grounding Agent',
                                                body: 'Ensures responses come only from approved, institution-curated content.'
                                            }, {
                                                title: 'Context Understanding Agent',
                                                body: 'Interprets user intent, cultural nuance, and situational meaning.'
                                            }, {
                                                title: 'Ethical & Doctrinal Validation Agent',
                                                body: 'Verifies alignment with ethical guardrails and doctrinal boundaries.'
                                            }, {
                                                title: 'Response Stewardship Agent',
                                                body: 'Determines tone, limits, escalation, or when human oversight is required.'
                                            }].map((agent, idx) => (
                                                <div
                                                    key={agent.title}
                                                    className="rounded-2xl bg-white/85 dark:bg-secondary-dark/60 border border-secondary-light/10 dark:border-secondary-dark/40 px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary-light/40 dark:hover:border-accent-gold/40"
                                                    style={{ marginLeft: idx * 4 }}
                                                >
                                                    <p className="text-sm font-semibold text-secondary-light dark:text-white">{agent.title}</p>
                                                    <p className="text-sm text-secondary-light/80 dark:text-text-mist leading-relaxed">{agent.body}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="mt-6 rounded-[28px] border border-accent-gold/30 bg-gradient-to-r from-accent-beige/70 via-white to-accent-gold/20 dark:from-secondary-dark/70 dark:via-primary-dark/60 dark:to-secondary-dark/65 shadow-lg px-6 md:px-10 py-6 text-center">
                                <p className="text-base md:text-lg font-semibold text-secondary-light dark:text-accent-gold">
                                    In faith-driven environments, accuracy alone is not enough. Meaning, context, and responsibility matter.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="space-y-10">
                            <div className="text-center space-y-2">
                                <div className="inline-block">
                                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-secondary-light dark:text-white inline-block">
                                        Trust & Governance
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist">
                                    Built for stewardship, accountability, and care
                                </p>
                            </div>

                            <div className="relative overflow-hidden rounded-[32px] border border-accent-gold/35 bg-gradient-to-br from-accent-beige/55 via-white to-accent-gold/20 dark:from-secondary-dark/70 dark:via-primary-dark/55 dark:to-secondary-dark/65 shadow-xl px-6 md:px-12 py-9 text-center max-w-4xl mx-auto">
                                <div className="absolute inset-4 rounded-[28px] border border-white/30 dark:border-secondary-dark/40 opacity-60" aria-hidden="true"></div>
                                <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-accent-gold/25 blur-3xl opacity-60" aria-hidden="true"></div>
                                <div className="absolute -right-6 bottom-0 h-32 w-32 rounded-full bg-accent-beige/40 blur-3xl opacity-60" aria-hidden="true"></div>

                                <div className="relative space-y-4">
                                    <span className="inline-flex items-center justify-center rounded-full border border-accent-gold/40 bg-white/60 dark:bg-secondary-dark/60 px-4 py-1 text-xs font-semibold tracking-[0.5em] text-secondary-light/70 dark:text-accent-gold/80 uppercase">
                                        Principle
                                    </span>
                                    <p className="text-2xl md:text-[2rem] font-semibold text-secondary-light dark:text-accent-gold leading-tight">
                                        Human leadership leads. Technology supports.
                                    </p>
                                    <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist">
                                        Every workflow is governed by human authority — AI amplifies, never replaces.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {[{
                                    title: 'Institutional Control',
                                    body: 'You retain full authority over knowledge sources, response boundaries, and escalation rules.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-secondary-light" aria-hidden="true">
                                            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.4" />
                                            <path d="M12 6v12M6 12h12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                                        </svg>
                                    )
                                }, {
                                    title: 'Ethical Guardrails',
                                    body: 'Every interaction follows doctrinal, cultural, and ethical constraints defined by the institution.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-secondary-light" aria-hidden="true">
                                            <path d="M12 3l8 4v5.5c0 4.5-3.2 8.6-8 9.5-4.8-.9-8-5-8-9.5V7z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )
                                }, {
                                    title: 'Privacy & Security',
                                    body: 'Spiritual conversations and community data are protected with enterprise-grade security and strict access controls.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-secondary-light" aria-hidden="true">
                                            <rect x="5" y="11" width="14" height="9" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.4" />
                                            <path d="M9 11V7a3 3 0 0 1 6 0v4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                        </svg>
                                    )
                                }, {
                                    title: 'Human-in-the-Loop',
                                    body: 'AI assists — humans guide, correct, and decide.',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-secondary-light" aria-hidden="true">
                                            <circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
                                            <path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                            <circle cx="18" cy="6" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                                            <circle cx="6" cy="6" r="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                                        </svg>
                                    )
                                }].map((pillar, idx) => (
                                    <div
                                        key={pillar.title}
                                        className={`rounded-3xl border border-secondary-light/15 dark:border-secondary-dark/50 bg-white/90 dark:bg-secondary-dark/65 shadow-sm px-6 py-7 transition duration-300 hover:-translate-y-1 hover:border-accent-gold/60 ${idx < 2 ? 'md:-mt-6' : 'md:mt-6'}`}
                                    >
                                        <div className="flex items-center justify-between mb-5">
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-beige/60 dark:bg-secondary-dark/70 text-secondary-light">
                                                {pillar.icon}
                                            </span>
                                            <span className="inline-flex items-center justify-center rounded-full bg-accent-beige/60 dark:bg-secondary-dark/70 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-secondary-light">
                                                0{idx + 1}
                                            </span>
                                        </div>
                                        <h5 className="text-lg font-semibold text-secondary-light dark:text-white mb-3">{pillar.title}</h5>
                                        <p className="text-sm md:text-base text-secondary-light/80 dark:text-text-mist leading-relaxed">{pillar.body}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-sm md:text-base text-secondary-light/75 dark:text-accent-gold">
                                Trust is not assumed. It is structured, governed, and continuously respected.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="space-y-10">
                            <div className="text-center space-y-3">
                                <span className="inline-flex items-center justify-center rounded-full border border-secondary-light/20 dark:border-accent-gold/40 px-4 py-1 text-xs font-semibold tracking-[0.45em] uppercase text-secondary-light/70 dark:text-accent-gold/80">
                                    Impact
                                </span>
                                <h3 className="text-2xl md:text-4xl font-semibold text-secondary-light dark:text-white">
                                    Building the Future of Faith, Thoughtfully
                                </h3>
                                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                                    Impact today. Stewardship for tomorrow.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {[{
                                    heading: 'For Institutions',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent-gold" aria-hidden="true">
                                            <path d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    points: [
                                        'Scale guidance without scaling staff',
                                        'Preserve sacred knowledge digitally',
                                        'Reduce administrative burden',
                                        'Reach global communities confidently'
                                    ]
                                }, {
                                    heading: 'For Seekers',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent-gold" aria-hidden="true">
                                            <circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
                                            <path d="M4 21a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                        </svg>
                                    ),
                                    points: [
                                        'Access guidance anytime, respectfully',
                                        'Understand the “why” behind teachings',
                                        'Engage with faith in daily life',
                                        'Learn in their language and pace'
                                    ]
                                }].map((impact) => (
                                    <div
                                        key={impact.heading}
                                        className="rounded-[28px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-white/85 dark:bg-secondary-dark/65 shadow-sm px-6 py-6 space-y-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-beige/60 dark:bg-secondary-dark/70">
                                                {impact.icon}
                                            </span>
                                            <h4 className="text-lg md:text-xl font-semibold text-secondary-light dark:text-white">
                                                {impact.heading}
                                            </h4>
                                        </div>
                                        <ul className="space-y-2 text-sm md:text-base text-secondary-light/85 dark:text-text-mist leading-relaxed">
                                            {impact.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2">
                                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-gold/80"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-[32px] border border-accent-gold/25 bg-gradient-to-r from-accent-beige/70 via-white to-accent-gold/25 dark:from-secondary-dark/70 dark:via-primary-dark/55 dark:to-secondary-dark/65 shadow-lg px-6 md:px-12 py-8">
                                <div className="grid md:grid-cols-2 divide-y divide-secondary-light/10 dark:divide-secondary-dark/40 md:divide-y-0 md:divide-x">
                                    {[{
                                        label: 'Vision',
                                        copy: 'A world where spiritual wisdom is accessible, understood, and preserved through ethical innovation.'
                                    }, {
                                        label: 'Mission',
                                        copy: 'To empower faith-driven organisations with high-integrity AI ecosystems.'
                                    }].map((item) => (
                                        <div key={item.label} className="px-4 md:px-8 py-6 text-center space-y-3">
                                            <p className="uppercase text-xs tracking-[0.45em] text-secondary-light/70 dark:text-accent-gold/80">
                                                {item.label}
                                            </p>
                                            <p className="text-base md:text-lg text-secondary-light/90 dark:text-text-mist leading-relaxed">
                                                {item.copy}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-full bg-secondary-light text-white dark:bg-accent-gold dark:text-primary-dark px-8 py-3 text-sm md:text-base font-semibold"
                                    >
                                        Request a Demo
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center justify-center rounded-full border border-secondary-light/40 dark:border-accent-gold/60 text-secondary-light dark:text-accent-gold px-8 py-3 text-sm md:text-base font-semibold"
                                    >
                                        Explore Projects
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </SectionWrapper>
    )
}
