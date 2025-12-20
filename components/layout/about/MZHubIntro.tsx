"use client"

import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { motion } from 'framer-motion'
import HorizontalAgentScroll from './HorizontalAgentScroll'
import Image from 'next/image'

export default function MZHubIntro() {
    return (
        <>
        <SectionWrapper fullWidth className="bg-neutral-light dark:bg-primary-dark">
            <div className="relative overflow-hidden w-full px-0 md:px-8 lg:px-12 py-0 md:py-28 text-secondary-light dark:text-text-mist">
                <div className="relative space-y-20 md:space-y-28">
                    {/* MEET MZHUB HERO */}
                    <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={0}>
                        <div className="relative h-[70vh] min-h-[460px] w-full">
                            <div className="absolute inset-0">
                                <div className="relative h-full w-full">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/75 to-white/80 dark:from-black/40 dark:via-black/60 dark:to-black/80 z-10 transition-colors duration-500" />
                                    <div className="absolute inset-0">
                                        <motion.div
                                            className="h-full w-full"
                                            initial={{ scale: 1.05, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
                                        >
                                            <div className="h-full w-full bg-[url('/shared/MZHub-logo.png')] bg-cover bg-center" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-spiritual-indigo-600 dark:text-white transition-colors duration-500">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="uppercase text-xs tracking-[0.55em] text-spiritual-indigo-400 dark:text-white/70 mb-4"
                                >
                
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                                    className="text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase tracking-[0.08em] leading-none text-current"
                                >
                                    Meet MZHub
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    className="mt-6 max-w-3xl text-base md:text-lg text-spiritual-indigo-700 dark:text-white/80"
                                >
                                    MZHub pairs spiritual leadership with ethical AI so institutions can extend guidance beyond walls without
                                    softening doctrine, dignity, or human authority.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="mt-8 w-full flex justify-center"
                                >
                                    <div className="w-full max-w-2xl rounded-[2.2rem] border border-accent-gold/40 bg-gradient-to-br from-[#FFF8E7] via-white to-[#F7F9FC] px-8 py-8 shadow-xl text-center relative overflow-hidden dark:from-[#23263a] dark:via-[#181a29] dark:to-[#23263a] dark:border-accent-gold/25 dark:shadow-[0_8px_32px_0_rgba(40,40,80,0.45)]">
                                        {/* Glow effect */}
                                        <div className="pointer-events-none absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-accent-gold/20 via-white/10 to-accent-gold/10 blur-2xl opacity-60 dark:from-accent-gold/10 dark:via-white/5 dark:to-accent-gold/20" />
                                        <p className="relative z-10 text-xl md:text-2xl font-semibold text-spiritual-indigo-600 dark:text-accent-gold drop-shadow-sm tracking-tight">
                                            MZHub does not digitise faith. It protects it — and helps<br />it travel further.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>

                                        {/* VISION & MISSION BLOCK */}
                                        <div className="mt-0 md:mt-16 w-full flex flex-col gap-y-32">
                                            {/* Vision Block with animation */}
                                            <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={0}>
                                                <div className="w-full flex flex-row items-start justify-start px-6 md:px-12">
                                                    <div className="flex flex-col items-end pr-6 min-w-[60px]">
                                                        <span className="text-base md:text-lg font-medium text-spiritual-indigo-400 dark:text-accent-gold/80">(01)</span>
                                                    </div>
                                                    <div className="flex flex-col items-start">
                                                        <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none text-spiritual-indigo-600 dark:text-white mb-6">Vision</h3>
                                                        <p className="max-w-md text-lg md:text-xl text-[#6479A3] dark:text-text-mist/90 leading-relaxed mb-4">
                                                            A world where spiritual wisdom is accessible, understood, and preserved — without losing meaning, dignity, or human guidance.
                                                        </p>
                                                        <p className="max-w-md text-base md:text-lg text-[#6479A3] dark:text-text-mist/80 leading-relaxed">
                                                            We envision technology helping faith traditions remain present across generations, cultures, and geographies, while staying rooted in responsibility, context, and care.
                                                        </p>
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                            {/* Mission Block with animation */}
                                            <ScrollReveal baseOpacity={0.1} enableBlur={false} baseRotation={0}>
                                                <div className="w-full flex flex-row items-start justify-end px-6 md:px-12">
                                                    <div className="flex flex-col items-end pr-6 min-w-[60px]">
                                                        <span className="text-base md:text-lg font-medium text-spiritual-indigo-400 dark:text-accent-gold/80">(02)</span>
                                                    </div>
                                                    <div className="flex flex-col items-start text-left">
                                                        <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none text-spiritual-indigo-600 dark:text-white mb-6">Mission</h3>
                                                        <p className="max-w-md text-lg md:text-xl text-[#6479A3] dark:text-text-mist/90 leading-relaxed mb-4">
                                                            To empower faith-driven institutions with responsible AI that extends guidance without replacing human leadership.
                                                            MZHub preserves and organises sacred knowledge to enable meaningful, context-aware spiritual guidance at scale.
                                                        </p>
                                                        <p className="max-w-md text-base md:text-lg text-[#6479A3] dark:text-text-mist/80 leading-relaxed">
                                                            Through ethical automation, we reduce administrative burden so leaders can focus on care, presence, and purpose.
                                                        </p>
                                                    </div>
                                                </div>
                                            </ScrollReveal>
                                        </div>
                    {/* WHY THIS MATTERS
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
                                <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed text-secondary-light/85 dark:text-text-mist/90 max-w-[55ch] mx-auto">
                                    <p>
                                        Billions can connect instantly, yet when someone seeks calm counsel the right priest, pastor, or guru is often out of reach.
                                    </p>
                                    <p>
                                        Sacred archives stay on shelves while leaders juggle administration, leaving seekers waiting and generations drifting apart.
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
                                            "Guidance Doesn't Scale",
                                            'Institutions Overburdened'
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
                    </ScrollReveal> */}

                    {/* MEET MZHUB */}
                   

                    {/* WHY DIFFERENT */}
                    {/* <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0} className="pt-8 md:pt-16">
                        <div className="space-y-10 rounded-[36px] bg-white dark:bg-secondary-dark/65 border border-secondary-light/10 dark:border-secondary-dark/40 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.25)] px-4 md:px-10 py-10">
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl md:text-4xl font-semibold text-secondary-light dark:text-white">
                                    Why MZHub Is Different
                                </h3>
                                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                                    Typical AI tools answer questions. MZHub stewards meaning.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="rounded-3xl border border-secondary-light/15 dark:border-secondary-dark/60 bg-secondary-light/5 dark:bg-primary-dark/60 px-6 md:px-8 py-8 space-y-4 text-left">
                                    <p className="text-xs uppercase tracking-[0.45em] text-secondary-light/60 dark:text-text-mist/60">
                                        Typical AI Platforms
                                    </p>
                                    <div className="space-y-3 text-secondary-light/70 dark:text-text-mist/80">
                                        {[
                                            '1. Plug into a generic API',
                                            '2. Generate unverified output',
                                            '3. Leave context unresolved'
                                        ].map((step) => (
                                            <div key={step} className="flex items-start gap-3">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary-light/40 dark:bg-accent-gold/60" />
                                                <span className="text-sm md:text-base">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-[32px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-gradient-to-br from-white via-accent-beige/35 to-white dark:from-secondary-dark/70 dark:via-primary-dark/60 dark:to-secondary-dark/70 px-6 md:px-10 py-10 space-y-5">
                                    <p className="text-xs uppercase tracking-[0.45em] text-secondary-light/60 dark:text-accent-gold/70">
                                        MZHub's Multi-Agent Architecture
                                    </p>
                                    <p className="text-lg md:text-xl font-semibold text-secondary-light dark:text-white max-w-xl">
                                        Four specialised agents move in sequence so every reply carries provenance, pastoral care, and accountability.
                                    </p>
                                    <div className="space-y-3">
                                        {[{
                                            title: 'Grounding Agent',
                                            body: 'Keeps every answer tethered to institution-approved teachings.'
                                        }, {
                                            title: 'Context Agent',
                                            body: 'Reads intent, culture, and pastoral tone before a reply forms.'
                                        }, {
                                            title: 'Ethics & Doctrine Agent',
                                            body: 'Checks each line against doctrinal and governance guardrails.'
                                        }, {
                                            title: 'Stewardship Agent',
                                            body: 'Sets tone, routes delicate queries, and invites humans when needed.'
                                        }].map((agent, idx) => (
                                            <div
                                                key={agent.title}
                                                className="rounded-2xl border border-secondary-light/15 dark:border-secondary-dark/40 bg-white/90 dark:bg-secondary-dark/65 px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1"
                                                style={{ marginTop: idx * 6 }}
                                            >
                                                <p className="text-sm font-semibold text-secondary-light dark:text-white">{agent.title}</p>
                                                <p className="text-sm text-secondary-light/75 dark:text-text-mist leading-relaxed">{agent.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 rounded-[28px] border border-accent-gold/30 bg-gradient-to-r from-accent-beige/70 via-white to-accent-gold/20 dark:from-secondary-dark/70 dark:via-primary-dark/60 dark:to-secondary-dark/65 shadow-lg px-6 md:px-10 py-6 text-center">
                                <p className="text-base md:text-lg font-semibold text-secondary-light dark:text-accent-gold">
                                    This architecture creates the "aha" moment — faithful guidance delivered with built-in oversight.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal> */}

                </div>
            </div>
        </SectionWrapper>

        {/* Why MZHub Is Different - Horizontal Scroll Section */}
        <HorizontalAgentScroll />

        <SectionWrapper fullWidth className="bg-neutral-light dark:bg-primary-dark">
            <div className="relative overflow-hidden w-full px-0 md:px-8 lg:px-12 py-0 md:py-28 text-secondary-light dark:text-text-mist">
                <div className="relative space-y-20 md:space-y-28">
                    {/* CALM PAUSE */}
                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="py-20 md:py-28 overflow-hidden relative">
                            <div className="flex whitespace-nowrap">
                                <motion.div
                                    className="flex"
                                    initial={{ x: 0 }}
                                    animate={{
                                        x: '-50%',
                                    }}
                                    transition={{
                                        x: {
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            duration: 20,
                                            ease: "linear",
                                        },
                                    }}
                                >
                                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-light/90 dark:text-text-mist px-8 block">
                                        Technology should never rush what is sacred.
                                    </span>
                                    <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-light/90 dark:text-text-mist px-8 block">
                                        Technology should never rush what is sacred.
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>


                    {/* TRUST & GOVERNANCE - Redesigned */}
                    <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 py-12 md:py-20 px-4 md:px-12">
                            {/* Left: Text Content */}
                            <div className="flex-1 max-w-xl text-left">
                                <div className="flex flex-col justify-start h-full md:items-start md:text-left mt-16">
                                    <h3 className="text-[clamp(3.5rem,8vw,6rem)] font-bold leading-tight text-secondary-light dark:text-white mb-6" style={{fontFamily:'inherit'}}>
                                        Innovation<br />Purpose<br />Functionality
                                    </h3>
                                    <p className="text-lg md:text-xl text-secondary-light/80 dark:text-text-mist mb-4">
                                        A captivating design sparks connection. We ignite impact by merging originality, purpose, and practicality.
                                    </p>
                                    <p className="text-lg md:text-xl text-secondary-light/80 dark:text-text-mist mb-6">
                                        At <span className="font-bold">MZHub</span>, our diverse team of experts co-creates innovative solutions, driven by collaboration, inclusivity, and creative excellence.
                                    </p>
                                </div>
                            </div>
                            {/* Right: Images Column */}
                            <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-md">
                                <div className="flex flex-col gap-12 w-full relative">
                                    {/* Top Image - left aligned */}
                                    <div className="flex w-full justify-start mb-8">
                                        <Image
                                            src="/shared/MZHub-logo.png"
                                            alt="MZHub Top"
                                            width={320}
                                            height={200}
                                            className="rounded-xl shadow-lg object-contain bg-white dark:bg-secondary-dark p-2"
                                            style={{ marginLeft: '0' }}
                                        />
                                    </div>
                                    {/* Main Logo Image - right aligned, more offset */}
                                    <div className="flex w-full justify-end mb-8">
                                        <Image
                                            src="/shared/MZHub-logo.png"
                                            alt="MZHub Logo"
                                            width={480}
                                            height={320}
                                            className="rounded-2xl shadow-xl object-contain bg-white dark:bg-secondary-dark p-4"
                                            priority
                                            style={{ marginRight: '0' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* IMPACT */}
                    {/* <ScrollReveal baseOpacity={0.15} enableBlur={false} baseRotation={0}>
                        <div className="space-y-10">
                            <div className="text-center space-y-3">
                                <span className="inline-flex items-center justify-center rounded-full border border-secondary-light/20 dark:border-accent-gold/40 px-4 py-1 text-xs font-semibold tracking-[0.45em] uppercase text-secondary-light/70 dark:text-accent-gold/80">
                                    Impact
                                </span>
                                <h3 className="text-2xl md:text-4xl font-semibold text-secondary-light dark:text-white">
                                    Building the Future of Faith, Thoughtfully
                                </h3>
                                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist">
                                    Outcomes you can feel now — foundations that last.
                                </p>
                            </div>

                            <div className="grid gap-8 md:gap-10 md:grid-cols-2">
                                {[{
                                    heading: 'For Institutions',
                                    icon: (
                                        <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent-gold" aria-hidden="true">
                                            <path d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                                        </svg>
                                    ),
                                    points: [
                                        'Scale guidance without adding campuses',
                                        'Preserve sacred knowledge responsibly',
                                        'Reduce administrative burden for clergy'
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
                                        'Receive guidance anytime with reverence',
                                        'See the "why" behind rituals and teachings',
                                        'Learn in their own language and pace'
                                    ]
                                }].map((impact, index) => (
                                    <motion.div
                                        key={impact.heading}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className="rounded-[32px] border border-secondary-light/12 dark:border-secondary-dark/50 bg-white/85 dark:bg-secondary-dark/65 shadow-lg hover:shadow-xl transition-shadow duration-300 px-10 py-10 md:px-14 md:py-14 space-y-8 min-h-[550px] md:min-h-[650px] flex flex-col"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-accent-beige/60 dark:bg-secondary-dark/70">
                                                {impact.icon}
                                            </span>
                                            <h4 className="text-2xl md:text-3xl font-semibold text-secondary-light dark:text-white">
                                                {impact.heading}
                                            </h4>
                                        </div>
                                        <ul className="space-y-4 text-lg md:text-xl text-secondary-light/85 dark:text-text-mist leading-relaxed flex-1">
                                            {impact.points.map((point) => (
                                                <li key={point} className="flex items-start gap-4">
                                                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-gold/80 flex-shrink-0"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="relative w-full h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden mt-6">
                                            <Image
                                                src="/shared/MZHub-logo.png"
                                                alt="MZHub Logo"
                                                fill
                                                className="object-contain p-6 md:p-8"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal> */}
                </div>
            </div>
        </SectionWrapper>
        </>
    )
}
