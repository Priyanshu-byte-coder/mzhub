"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedHeroBackdrop } from "@/components/ui/shared/AnimatedHeroBackdrop"

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="container-custom text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-secondary-light dark:text-text-mist leading-tight font-serif"
          >
            Bridging <span className="text-accent-gold">Ancient Wisdom</span>
            <br />
            with Modern Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-secondary-light/70 dark:text-text-mist/70 max-w-3xl mx-auto leading-relaxed"
          >
            MZhub exists to help religious institutions preserve their sacred teachings while reaching devotees in the digital age.
          </motion.p>
        </motion.div>
      </motion.div>

      <AnimatedHeroBackdrop variant="about" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent-gold/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-accent-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
