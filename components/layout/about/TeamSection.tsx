"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { TeamMember } from "@/lib/about/teamMembers"

interface TeamSectionProps {
  team: TeamMember[]
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary-dark/40 border border-secondary-light/10 dark:border-white/10 transition-all duration-500 hover:border-accent-gold/30">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary-light/10 to-accent-gold/10 dark:from-secondary-dark/60 dark:to-accent-gold/20 flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-secondary-light/20 dark:text-white/20">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Info on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-sm text-white/80 line-clamp-3">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h4 className="text-lg md:text-xl font-bold text-secondary-light dark:text-white mb-1">
            {member.name}
          </h4>
          <p className="text-sm md:text-base text-accent-gold">
            {member.role}
          </p>
          {member.isFounder && (
            <span className="inline-block mt-2 px-3 py-1 text-xs bg-accent-gold/10 text-accent-gold rounded-full">
              Founder
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamSection({ team }: TeamSectionProps) {
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
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-secondary-light/60 dark:text-text-mist/60 mb-3 md:mb-4">
            Meet Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Faces behind the mission
          </h2>
          <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70 max-w-2xl mx-auto">
            Every partnership blends rigorous AI craft with reverence for sacred wisdom. 
            Hover to bring each story from archival grayscale to living color.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
