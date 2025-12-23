"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const agents = [
  {
    number: "01",
    title: "Knowledge Grounding Agent",
    subtitle: "Truth begins with trusted sources.",
    description: "Every response is grounded exclusively in institution-approved teachings, texts, and archives. No open-web speculation. No invented theology.",
    footer: "Institution-curated knowledge only"
  },
  {
    number: "02",
    title: "Context Understanding Agent",
    subtitle: "Meaning depends on who asks — and why.",
    description: "Interprets intent, cultural background, emotional state, and situational nuance before a reply is formed.",
    footer: "Intent • Culture • Pastoral sensitivity"
  },
  {
    number: "03",
    title: "Ethics & Doctrine Validation Agent",
    subtitle: "Every word is checked — not just generated.",
    description: "Validates responses against doctrinal boundaries, ethical guardrails, and institutional governance rules.",
    footer: "Alignment • Guardrails • Accountability"
  },
  {
    number: "04",
    title: "Response Stewardship Agent",
    subtitle: "Care determines delivery.",
    description: "Sets tone, applies limits, and escalates sensitive matters to human leadership when needed.",
    footer: "Tone • Escalation • Human-in-the-loop"
  }
]

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-secondary-dark/40 border border-secondary-light/10 dark:border-white/10 backdrop-blur-sm hover:border-accent-gold/30 transition-all duration-300 h-full">
        {/* Number */}
        <span className="text-xs md:text-sm font-mono text-accent-gold mb-4 block">
          {agent.number}
        </span>
        
        {/* Title */}
        <h4 className="text-lg md:text-xl font-bold text-secondary-light dark:text-white mb-2">
          {agent.title}
        </h4>
        
        {/* Subtitle */}
        <p className="text-sm md:text-base font-medium text-accent-gold/80 mb-3">
          {agent.subtitle}
        </p>
        
        {/* Description */}
        <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/80 leading-relaxed mb-4">
          {agent.description}
        </p>
        
        {/* Footer */}
        <div className="pt-4 border-t border-secondary-light/10 dark:border-white/10">
          <span className="text-xs md:text-sm text-secondary-light/50 dark:text-text-mist/50">
            {agent.footer}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhyDifferentSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-28 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-light dark:text-white mb-4">
            Why MZHub Is Different
          </h2>
          <p className="text-base md:text-lg text-secondary-light/70 dark:text-text-mist/80 max-w-2xl mx-auto">
            Typical AI tools answer questions. <span className="font-semibold text-secondary-light dark:text-white">MZHub stewards meaning.</span>
          </p>
        </motion.div>

        {/* Subheader */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-secondary-light dark:text-white mb-2">
            Stewarding Guidance the Right Way
          </h3>
          <p className="text-sm md:text-base text-secondary-light/60 dark:text-text-mist/60 max-w-xl mx-auto">
            Every response follows a deliberate, accountable journey — from knowledge to care.
          </p>
        </motion.div>

        {/* Agent Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.number} agent={agent} index={index} />
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-white/80 dark:bg-secondary-dark/40 border border-secondary-light/10 dark:border-white/10">
            <p className="text-base md:text-lg font-semibold text-secondary-light dark:text-accent-gold">
              This architecture creates the "aha" moment — faithful guidance delivered with built-in oversight.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
