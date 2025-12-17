"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import type { ReactNode, RefObject } from "react"
import { AnimatedHeroBackdrop, type HeroBackdropVariant } from "@/components/ui/shared/AnimatedHeroBackdrop"

interface HeroCTA {
  label: string
  href: string
}

interface ParallaxHeroProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  cta?: HeroCTA
  scrollTarget?: RefObject<HTMLElement | null>
  sectionClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  showIndicator?: boolean
  backgroundVariant?: HeroBackdropVariant
}

const combineClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ")

export default function ParallaxHero({
  eyebrow,
  title,
  description,
  cta,
  scrollTarget,
  sectionClassName,
  titleClassName,
  descriptionClassName,
  showIndicator = true,
  backgroundVariant = "projects",
}: ParallaxHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const targetRef = scrollTarget ?? sectionRef

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const sectionClasses = combineClasses(
    "relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24",
    sectionClassName,
  )

  const headingClasses = combineClasses(
    "text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-secondary-light dark:text-text-mist leading-[0.9] font-serif",
    titleClassName,
  )

  const descriptionClasses = combineClasses(
    "text-lg md:text-xl lg:text-2xl text-secondary-light/70 dark:text-text-mist/70 max-w-3xl mx-auto leading-relaxed",
    descriptionClassName,
  )

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <motion.div style={{ y, opacity }} className="container-custom text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-accent-gold font-medium"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={headingClasses}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={descriptionClasses}
            >
              {description}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 text-accent-gold hover:gap-4 transition-all duration-300 text-lg font-medium group"
              >
                {cta.label}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <AnimatedHeroBackdrop variant={backgroundVariant} />

      {showIndicator && (
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
      )}
    </section>
  )
}
