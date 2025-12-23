"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { BlobButton } from "@/components/ui/shared/BlobButton"

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Bold Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-light dark:text-white leading-tight mb-4">
            Create Bold.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-light dark:text-white leading-tight">
            Deliver Better.
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-24"
        >
          <BlobButton as={Link} href="/projects">
            See our work
          </BlobButton>
          <Link 
            href="/contact"
            className="px-6 py-3 border-2 border-secondary-light/30 dark:border-white/30 rounded-full text-secondary-light dark:text-white hover:bg-secondary-light/5 dark:hover:bg-white/5 transition-all duration-300 font-medium"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Large Logo/Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px]">
            <svg 
              viewBox="0 0 200 160" 
              className="w-full h-full"
              fill="none"
            >
              {/* Abstract geometric shape similar to Visuvate */}
              <motion.path
                d="M100 10 L180 80 L140 150 L60 150 L20 80 Z"
                fill="currentColor"
                className="text-secondary-light/10 dark:text-white/10"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path
                d="M100 30 L160 80 L130 130 L70 130 L40 80 Z"
                fill="currentColor"
                className="text-accent-gold/20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
              {/* Glow effect */}
              <motion.ellipse
                cx="100"
                cy="140"
                rx="80"
                ry="20"
                className="text-accent-gold/10"
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 border-t border-secondary-light/10 dark:border-white/10 pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {[
              { name: "Instagram", href: "#" },
              { name: "Facebook", href: "#" },
              { name: "Twitter", href: "#" },
              { name: "LinkedIn", href: "#" }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-r border-secondary-light/10 dark:border-white/10 last:border-r-0 hover:bg-secondary-light/5 dark:hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70 group-hover:text-secondary-light dark:group-hover:text-white transition-colors">
                  {social.name}
                </span>
                <svg 
                  className="w-4 h-4 text-secondary-light/40 dark:text-white/40 group-hover:text-accent-gold transition-colors"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
