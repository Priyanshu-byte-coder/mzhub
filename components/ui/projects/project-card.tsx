'use client'

import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/projects/projectsData'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const handleTouchStart = () => {
    setIsTouched(true)
    setTimeout(() => setIsTouched(false), 300)
  }

  // Card entrance animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  // Floating animation for mobile
  const floatingAnimation = isMobile ? {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2
    }
  } : {}

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      className="group relative cursor-pointer"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(215, 180, 106, 0.6), rgba(147, 112, 219, 0.4), rgba(215, 180, 106, 0.6))`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : '0% 0%',
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={floatingAnimation}
        whileTap={isMobile ? { scale: 0.98 } : {}}
        className="relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-border/40 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent-gold/20"
      >
        {/* Animated glow effect following cursor */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
          style={{
            background: `radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(215, 180, 106, 0.15), transparent 50%)`,
            ['--glow-x' as string]: glowX,
            ['--glow-y' as string]: glowY,
          }}
        />

        {/* Image Container */}
        <div className="relative h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered || isTouched ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full"
          >
            {/* Multi-layer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-accent-gold/20 via-transparent to-purple-500/10 z-10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          
          {/* Category badge - always visible */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className="absolute top-4 left-4 z-20"
          >
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-accent-gold/90 text-white backdrop-blur-sm shadow-lg">
              {project.category}
            </span>
          </motion.div>

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
            className="absolute top-4 right-4 z-20"
          >
            <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 dark:bg-black/50 text-secondary-light dark:text-white backdrop-blur-sm shadow-lg">
              {project.year}
            </span>
          </motion.div>
          
          {/* Hover Overlay with description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isTouched ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex items-end p-6"
          >
            <div className="text-white w-full">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: isHovered || isTouched ? 0 : 30, opacity: isHovered || isTouched ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-sm md:text-base leading-relaxed line-clamp-3"
              >
                {project.description}
              </motion.p>
              
              {/* View Project Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered || isTouched ? 0 : 20, opacity: isHovered || isTouched ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4"
              >
                <span className="inline-flex items-center gap-2 text-accent-gold font-medium text-sm">
                  View Project
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 space-y-3">
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-secondary-light dark:text-white group-hover:text-accent-gold dark:group-hover:text-accent-gold transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          {/* Tags with staggered animation */}
          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: index * 0.15 + 0.3
                }
              }
            }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/20 transition-colors hover:bg-accent-gold/20"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Animated shine effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{
            x: isHovered || isTouched ? '200%' : '-100%',
          }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
        />

        {/* Corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path
              d="M80 80 L80 40 Q80 80 40 80 Z"
              fill="rgba(215, 180, 106, 0.3)"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
