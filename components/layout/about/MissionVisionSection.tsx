"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function MissionVisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-28 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Meet MZHub Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase tracking-wide text-secondary-light dark:text-white">
            Meet MZHub
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-secondary-light/70 dark:text-text-mist/80 leading-relaxed">
            MZHub pairs spiritual leadership with ethical AI so institutions can extend guidance beyond walls without
            softening doctrine, dignity, or human authority.
          </p>
          
          {/* Highlighted Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold/20 via-accent-gold/30 to-accent-gold/20 dark:from-accent-gold/30 dark:via-accent-gold/40 dark:to-accent-gold/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main card with organic design */}
              <div className="relative rounded-[32px] bg-gradient-to-br from-white/95 via-white/90 to-accent-gold/5 dark:from-primary-dark/90 dark:via-primary-dark/80 dark:to-accent-gold/10 backdrop-blur-xl px-8 py-10 md:px-12 md:py-12 border-2 border-accent-gold/20 dark:border-accent-gold/30 shadow-2xl overflow-hidden">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent-gold/30 rounded-tl-[32px]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent-gold/30 rounded-br-[32px]" />
                
                {/* Organic shape overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] dark:opacity-[0.05]">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="currentColor" className="text-accent-gold" />
                  </svg>
                </div>
                
                {/* Quote icon */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 text-accent-gold/20 dark:text-accent-gold/30">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                
                <p className="relative text-xl md:text-2xl lg:text-3xl font-bold text-secondary-light dark:text-accent-gold leading-relaxed text-center">
                  MZHub does not digitise faith. It protects it — and helps it travel further.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <span className="text-sm md:text-base font-medium text-accent-gold">(01)</span>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary-light dark:text-white mb-4">
                  Vision
                </h3>
                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist/90 leading-relaxed mb-3">
                  A world where spiritual wisdom is accessible, understood, and preserved — without losing meaning, dignity, or human guidance.
                </p>
                <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70 leading-relaxed">
                  We envision technology helping faith traditions remain present across generations, cultures, and geographies, while staying rooted in responsibility, context, and care.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <span className="text-sm md:text-base font-medium text-accent-gold">(02)</span>
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary-light dark:text-white mb-4">
                  Mission
                </h3>
                <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist/90 leading-relaxed mb-3">
                  To empower faith-driven institutions with responsible AI that extends guidance without replacing human leadership.
                </p>
                <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70 leading-relaxed">
                  MZHub preserves and organises sacred knowledge to enable meaningful, context-aware spiritual guidance at scale. Through ethical automation, we reduce administrative burden so leaders can focus on care, presence, and purpose.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
