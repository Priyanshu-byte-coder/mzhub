'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ProjectCard } from '@/components/ui/project-card'
import { projects } from '@/lib/projectsData'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="bg-white dark:bg-primary-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-accent-gold font-medium"
            >
              Our Work
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-secondary-light dark:text-text-mist leading-[0.9] font-serif">
              Transforming
              <br />
              <span className="text-accent-gold">Faith</span> Through
              <br />
              Technology
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-secondary-light/70 dark:text-text-mist/70 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how we're helping religious institutions worldwide
              preserve their sacred teachings and connect with communities
              in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 text-accent-gold hover:gap-4 transition-all duration-300 text-lg font-medium group"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-accent-gold/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-accent-gold rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent-gold font-medium mb-4">
                  Featured Projects
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-light dark:text-text-mist font-serif">
                  Case Studies
                </h2>
              </div>
              <p className="text-lg text-secondary-light/70 dark:text-text-mist/70 max-w-xl">
                Each project represents a unique partnership, blending cutting-edge
                technology with timeless spiritual wisdom.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white">
        <div className="container-custom px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
              Ready to Start Your
              <br />
              <span className="text-spiritual-gold-300">Digital Journey?</span>
            </h2>
            
            <p className="text-xl text-spiritual-indigo-200 max-w-2xl mx-auto">
              Join religious institutions worldwide who trust MZhub to preserve
              their teachings and serve their communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-secondary-dark font-semibold rounded-full hover:bg-accent-gold/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
