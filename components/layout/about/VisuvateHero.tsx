"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function VisuvateHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-neutral-light dark:bg-primary-dark"
    >
      <motion.div
        style={{ y, opacity }}
        className="container-custom text-center z-10 px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 md:space-y-10"
        >
          {/* Main Title - Visuvate Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
          >
            <span className="text-secondary-light dark:text-white font-serif">About</span>
            <span className="text-accent-gold font-serif italic ml-2 md:ml-4">Us</span>
          </motion.h1>

          {/* Logo/Icon similar to Visuvate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center py-6 md:py-10"
          >
            <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-secondary-light/20 dark:text-white/20"
                fill="currentColor"
              >
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
                <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-light/80 dark:text-text-mist leading-relaxed">
              <span className="font-semibold text-secondary-light dark:text-white">MZHub</span> is an{" "}
              <span className="font-semibold text-accent-gold">AI-powered spiritual platform</span>{" "}
              that builds <span className="font-semibold">meaningful digital experiences</span> with 
              reverence and purpose. We create technology that is spiritually grounded, ethically sound, 
              and meaningful to the communities who use it.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-secondary-light/70 dark:text-text-mist/80 leading-relaxed">
              Every project begins with understanding and ends with care. Our goal is 
              to design experiences that feel <span className="font-semibold">effortless and intentional</span> while delivering 
              measurable results that help <span className="font-semibold text-accent-gold">faith communities grow</span> and{" "}
              <span className="font-semibold text-accent-gold">perform better online</span>.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent-gold/40 rounded-full flex items-start justify-center p-2"
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
