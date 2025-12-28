"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { TeamMember } from "@/lib/about/teamMembers"

interface TeamSectionProps {
  team: TeamMember[]
}

const TeamCard = React.memo(function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })


  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center text-center px-4 py-8 h-full"
    >
      {/* Fixed Height Content Container */}
      <div className="flex flex-col items-center w-full min-h-[600px] sm:min-h-[650px] md:min-h-[700px]">
        {/* Circular Image Container with Divine Glow */}
        <div className="relative mb-6">
          {/* Outer glow ring - faith-inspired */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-gold/40 via-accent-gold/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110" />

          {/* Inner subtle glow */}
          <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image container */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-accent-gold/30 shadow-2xl group-hover:shadow-accent-gold/30 transition-all duration-500 group-hover:scale-105">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-secondary-light/10 to-accent-gold/20 dark:from-secondary-dark/60 dark:to-accent-gold/30 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold text-secondary-light/30 dark:text-white/30">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}

            {/* Peaceful overlay on hover */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-accent-gold/5 to-accent-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Founder badge with divine glow */}
          {member.isFounder && (
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5, type: "spring" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-gold/40 blur-md rounded-full" />
                <span className="relative inline-block px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-accent-gold to-accent-gold/80 text-white rounded-full shadow-lg">
                  Founder
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Name with gentle reveal */}
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-light dark:text-white mb-2 group-hover:text-accent-gold dark:group-hover:text-accent-gold transition-colors duration-300"
        >
          {member.name}
        </motion.h4>

        {/* Role with peaceful fade-in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          className="text-base sm:text-lg md:text-xl text-accent-gold font-medium mb-4"
        >
          {member.role}
        </motion.p>

        {/* Bio with staggered reveal - Fixed height with scroll */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.2 + 0.5 }}
          className="flex-1 flex items-start justify-center mb-6 w-full max-w-sm"
        >
          <p className="text-sm sm:text-base text-secondary-light/70 dark:text-text-mist/70 leading-relaxed h-[180px] sm:h-[200px] md:h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent-gold/20 scrollbar-track-transparent">
            {member.bio}
          </p>
        </motion.div>

        {/* Social Icons Placeholder with divine shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          className="flex gap-3 mt-auto"
        >
          {[1, 2, 3, 4].map((icon) => (
            <div
              key={icon}
              className="w-10 h-10 rounded-full bg-secondary-light/5 dark:bg-white/5 border border-secondary-light/10 dark:border-white/10 flex items-center justify-center hover:bg-accent-gold/10 hover:border-accent-gold/30 transition-all duration-300 cursor-pointer group/icon"
            >
              <div className="w-5 h-5 rounded-full bg-secondary-light/20 dark:bg-white/20 group-hover/icon:bg-accent-gold transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
});

export default function TeamSection({ team }: TeamSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-28 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      {/* Subtle divine background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container-custom px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] text-secondary-light/60 dark:text-text-mist/60 mb-3 md:mb-4">
            Meet Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Faces behind the mission
          </h2>
          <p className="text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70 max-w-2xl mx-auto">
            Guided by faith, driven by purpose. Each member brings divine wisdom and technical excellence to serve our spiritual communities.
          </p>
        </motion.div>

        {/* Team Grid - Responsive: stack on mobile, row on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
