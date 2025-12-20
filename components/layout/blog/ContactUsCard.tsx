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
                        <p className="text-sm font-medium text-accent-orange tracking-wider uppercase mb-4">
                            Wanna Contribute to MZHub?
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 hover:gap-3 group"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
