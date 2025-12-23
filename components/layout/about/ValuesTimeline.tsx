"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface Value {
  title: string
  description: string
  position: "left" | "right"
}

const values: Value[] = [
  {
    title: "Reverence",
    description: "We approach spiritual teachings with deep respect. Technology simply preserves what elders already share, honoring tradition while enabling accessibility.",
    position: "left"
  },
  {
    title: "Precision",
    description: "Every detail matters. From layout to motion, precision defines how we work. Each response is validated against doctrinal boundaries and ethical guardrails.",
    position: "right"
  },
  {
    title: "Purpose",
    description: "Each project begins with understanding. We design with intent so every choice supports a goal — extending guidance without replacing human leadership.",
    position: "left"
  },
  {
    title: "Sovereignty",
    description: "Religious leaders keep full control of doctrine, approvals, and deployment. Institutions define their own boundaries and maintain complete authority.",
    position: "right"
  },
  {
    title: "Privacy",
    description: "Spiritual seeking is intimate. Every inquiry stays encrypted, logged, and under institutional guardianship. We treat data as sacred as the wisdom it represents.",
    position: "left"
  },
  {
    title: "Consistency",
    description: "Reliable, accountable AI that delivers faithful guidance every time. Our multi-agent architecture ensures every reply carries provenance and pastoral care.",
    position: "right"
  }
]

function ValueCard({ value, index }: { value: Value; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: value.position === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-start gap-6 md:gap-12 ${
        value.position === "left" 
          ? "md:flex-row md:text-right" 
          : "md:flex-row-reverse md:text-left"
      } flex-col text-left`}
    >
      {/* Content */}
      <div className={`flex-1 ${value.position === "left" ? "md:pr-8" : "md:pl-8"}`}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-secondary-light dark:text-white mb-3 md:mb-4"
        >
          {value.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-secondary-light/70 dark:text-text-mist/80 leading-relaxed max-w-md"
        >
          {value.description}
        </motion.p>
      </div>

      {/* Timeline Dot - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-3 h-3 bg-accent-gold rounded-full z-10"
        />
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default function ValuesTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(titleRef, { once: true, amount: 0.5 })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light dark:text-white underline decoration-accent-gold decoration-2 underline-offset-8">
            Our Values
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary-light/20 dark:bg-white/10 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent-gold/50 origin-top"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-secondary-light/20 dark:bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent-gold/50 origin-top"
            />
          </div>

          {/* Values */}
          <div className="space-y-16 md:space-y-24 pl-10 md:pl-0">
            {values.map((value, index) => (
              <div key={value.title} className="relative">
                {/* Mobile dot */}
                <div className="md:hidden absolute -left-10 top-2 w-3 h-3 bg-accent-gold rounded-full" />
                <ValueCard value={value} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
