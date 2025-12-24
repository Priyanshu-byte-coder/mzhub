"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { BlobButton } from "@/components/ui/shared/BlobButton"

const faithMessages = [
  "Building Faith",
  "Empowering Communities",
  "Transforming Lives",
  "Preserving Wisdom",
  "Inspiring Hope"
]

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % faithMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
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

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Interactive Faith Message */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Prefix text */}
          <p className="text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent-gold/80 mb-4 md:mb-6">
            Where Technology Meets Faith
          </p>

          {/* Animated rotating message */}
          <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[240px] flex items-center justify-center">
            <motion.h2
              key={messageIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-4"
            >
              {faithMessages[messageIndex]}<span className="text-accent-gold">.</span>
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-4 md:mt-6"
          >
            Trusted by faith leaders worldwide. Building the future of spiritual communities with ethical AI.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
        >
          <BlobButton as={Link} href="/projects">
            See our work
          </BlobButton>
          <BlobButton as={Link} href="/contact">
            Get in touch
          </BlobButton>
        </motion.div>
      </div>
    </section>
  )
}
