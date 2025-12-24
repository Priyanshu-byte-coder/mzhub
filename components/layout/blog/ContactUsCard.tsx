"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BlobButton } from "@/components/ui/shared/BlobButton"

export function ContactUsCard() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden w-full">
            {/* Background Image with Overlay - Matching About/Projects Page Structure */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/projects/community-bg.jpg)',
                    }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80" />

                {/* Additional accent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/10 via-transparent to-accent-gold/10" />
            </div>

            <div className="container-custom px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center justify-center flex-col">
                        <p className="text-sm font-medium text-accent-gold tracking-wider uppercase mb-4">
                            Join Our Community
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-white">
                            Have Questions or Ideas?
                        </h2>
                    </div>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Whether you want to contribute to MZHub, explore partnership opportunities, or simply learn more about how we can serve your faith community — we'd love to hear from you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <BlobButton as={Link} href="/projects">
                            See our work
                        </BlobButton>
                        <BlobButton as={Link} href="/contact">
                            Get in touch
                        </BlobButton>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
