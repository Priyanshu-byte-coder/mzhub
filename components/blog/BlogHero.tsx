'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function BlogHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-neutral-light dark:bg-primary-dark">
      {/* Background */}
      <div className="absolute inset-0" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-blue dark:text-accent-gold">Technical Insights & Proposals</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            MZHub Blog
          </h1>

          <p className="text-lg md:text-xl text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            Discover cutting-edge solutions in AI, cloud architecture, and digital transformation for FaithTech organizations
          </p>
        </motion.div>
      </div>
    </section>
  )
}
