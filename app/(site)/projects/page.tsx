'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ProjectCard } from '@/components/ui/projects/project-card'
import { projects } from '@/lib/projects/projectsData'
import Link from 'next/link'
import ParallaxHero from '@/components/layout/shared/ParallaxHero'

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="bg-white dark:bg-primary-dark">
      {/* Hero Section */}
      <ParallaxHero
        scrollTarget={containerRef}
        eyebrow="Our Work"
        title={
          <>
            Transforming
            <br />
            <span className="text-accent-gold">Faith</span> Through
            <br />
            Technology
          </>
        }
        description="Discover how we're helping religious institutions worldwide preserve their sacred teachings and connect with communities in the digital age."
        cta={{ label: 'Explore Projects', href: '#projects' }}
        backgroundVariant="projects"
      />

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
