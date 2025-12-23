"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light dark:text-white mb-6">
            Our Philosophy
          </h2>
        </motion.div>

        {/* Philosophy Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <p className="text-base sm:text-lg md:text-xl text-secondary-light/80 dark:text-text-mist leading-relaxed">
            We believe good spiritual technology should feel <span className="font-semibold text-secondary-light dark:text-white">effortless</span> and{" "}
            <span className="font-semibold text-secondary-light dark:text-white">grounded in purpose</span>.
            Every detail matters, from the way a page moves to how it makes someone feel. 
            At MZHub, design is not just about how things look but how clearly 
            they communicate and how seamlessly they perform.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-secondary-light/80 dark:text-text-mist leading-relaxed">
            Technology should never rush what is sacred. We approach spiritual teachings 
            with <span className="font-semibold text-accent-gold">deep respect</span> — 
            preserving what elders share while making wisdom accessible to new generations.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl text-secondary-light/80 dark:text-text-mist leading-relaxed">
              Founded by{" "}
              <span className="inline-flex items-center gap-2">
                <span className="relative w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden bg-accent-gold/20 inline-block align-middle">
                  <Image
                    src="/team/vatsal-shah.png"
                    alt="Vatsal Shah"
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="font-bold text-secondary-light dark:text-white">Vatsal Shah</span>
              </span>
              , MZHub was created from a passion for bridging ancient wisdom with modern technology 
              and a belief in designing with deep reverence. Every project reflects a commitment to 
              <span className="font-semibold text-accent-gold"> clarity, purpose, and precision</span>, 
              values that define both the work and the process behind it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
