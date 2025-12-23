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
          {/* Main Title - About Us Only */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
          >
            <span className="text-secondary-light dark:text-white font-serif">About </span>
            <span className="text-accent-gold font-serif italic">Us</span>
          </motion.h1>

          {/* MZHub Logo - Light/Dark Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center py-4 md:py-6"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
              {/* Light theme logo */}
              <img 
                src="/shared/MZHub-logo.svg" 
                alt="MZHub Logo"
                className="w-full h-full object-contain dark:hidden opacity-30"
              />
              {/* Dark theme logo */}
              <img 
                src="/shared/MZHub-logo_w.svg" 
                alt="MZHub Logo"
                className="w-full h-full object-contain hidden dark:block opacity-30"
              />
            </div>
          </motion.div>

          {/* Short Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-secondary-light/80 dark:text-text-mist leading-relaxed">
              <span className="font-semibold text-secondary-light dark:text-white">MZHub</span> is an{" "}
              <span className="font-semibold text-accent-gold">AI-powered spiritual platform</span>{" "}
              that builds <span className="font-semibold">meaningful digital experiences</span> with reverence and purpose.
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
