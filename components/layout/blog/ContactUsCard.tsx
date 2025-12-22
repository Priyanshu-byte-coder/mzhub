"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ContactUsCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl w-full max-w-[950px] h-[600px] mx-auto"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/projects/community-bg.jpg"
                    alt="Community background"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center p-8 md:p-12 lg:p-16">
                <div className="max-w-2xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p className="text-sm font-medium text-accent-gold tracking-wider uppercase mb-4">
                            Join Our Community
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Have Questions or Ideas?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            Whether you want to contribute to MZHub, explore partnership opportunities, or simply learn more about how we can serve your faith community — we'd love to hear from you.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/90 text-primary-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:shadow-xl group text-lg"
                        >
                            Get In Touch
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
