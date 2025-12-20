"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'

export default function WhyThisMatters() {
    const baseDelay = 0.15

    return (
            <SectionWrapper fullWidth className="bg-neutral-light text-spiritual-indigo-600 dark:bg-primary-dark dark:text-text-mist">
                <motion.section
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="w-full px-2 sm:px-4 md:px-10 lg:px-16 py-10 sm:py-16 md:py-20 lg:py-28"
                >
                    <div className="space-y-10 sm:space-y-16">
                        <div className="space-y-4 sm:space-y-6 text-center">
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: baseDelay, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="uppercase text-xs sm:text-sm tracking-[0.35em] sm:tracking-[0.55em] text-spiritual-indigo-400 dark:text-text-mist/70"
                            >
                                WHY THIS MATTERS TODAY
                            </motion.p>

                            <motion.h2
                                initial={{ opacity: 0, letterSpacing: 8 }}
                                whileInView={{ opacity: 1, letterSpacing: 2 }}
                                transition={{ duration: 1.1, delay: baseDelay + 0.05, ease: [0.19, 1, 0.22, 1] }}
                                viewport={{ once: true }}
                                className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[clamp(2.6rem,6vw,5.8rem)] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] leading-tight break-words text-spiritual-indigo-600 dark:text-white"
                                style={{ wordBreak: 'break-word' }}
                            >
                                A WORLD — MORE CONNECTED<br className="block sm:hidden" />YET SPIRITUALLY DISCONNECTED
                            </motion.h2>
                    </div>

                    <div className="lg:grid lg:grid-cols-[0.8fr_1.2fr_0.9fr] gap-10 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: baseDelay + 0.15, ease: [0.45, 0, 0.2, 1] }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="hidden lg:flex self-start justify-start -mt-4"
                        >
                            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_45px_95px_-60px_rgba(0,0,0,0.8)]">
                                <Image
                                    src="/shared/MZHub-logo.png"
                                    alt="MZHub creative journey left"
                                    width={420}
                                    height={480}
                                    className="h-[340px] w-[260px] object-cover grayscale"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: baseDelay + 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="space-y-8 text-center lg:text-left max-w-3xl mx-auto"
                        >
                            <p className="text-base md:text-lg leading-relaxed text-[#6479A3] dark:text-text-mist/90">
                                Time feels eternal yet mysterious — shaping change, layering meanings, and holding the
                                power to define every race. In a hyper-connected era, true spiritual connection still feels
                                distant when calm counsel or moral clarity is most needed.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-[#6479A3] dark:text-text-mist/90">
                                Sacred wisdom sits inside sermons, manuscripts, and recordings — powerful but often
                                inaccessible in the decisive moment. Human leadership is irreplaceable, yet time,
                                geography, and administrative burden limit its reach.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9, delay: baseDelay + 0.35, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="rounded-[24px] border border-[#DFE3E9] bg-gradient-to-r from-[#FFF8E7] via-[#FDFBFF] to-[#F7F9FC] px-8 py-6 text-center shadow-lg dark:border-white/15 dark:bg-gradient-to-r dark:from-white/15 dark:via-white/5 dark:to-white/15 dark:shadow-none"
                            >
                                <p className="text-base md:text-lg font-semibold text-spiritual-indigo-600 dark:text-white">
                                    The challenge is not faith — it is access, continuity, and care at scale.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: baseDelay + 0.3, ease: [0.45, 0, 0.2, 1] }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="hidden lg:flex self-end justify-end mt-20"
                        >
                            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_65px_120px_-70px_rgba(0,0,0,0.85)]">
                                <Image
                                    src="/shared/MZHub-logo.png"
                                    alt="MZHub creative journey right"
                                    width={540}
                                    height={620}
                                    className="h-[500px] w-[360px] object-cover grayscale"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </SectionWrapper>
    )
}
