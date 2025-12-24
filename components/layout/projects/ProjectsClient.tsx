"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ParallaxHero from '@/components/layout/shared/ParallaxHero'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import ThreeDCarousel from '@/components/ui/shared/ThreeDCarousel'
import { projects } from '@/lib/projects/projectsData'

export default function ProjectsClient() {
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

            {/* Projects Carousel */}
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
                                    Our Work
                                </h2>
                            </div>
                            <p className="text-lg text-secondary-light/70 dark:text-text-mist/70 max-w-xl">
                                Each project represents a unique partnership, blending cutting-edge
                                technology with timeless spiritual wisdom.
                            </p>
                        </div>
                    </motion.div>

                    <ThreeDCarousel
                        items={projects}
                        autoRotate={true}
                        rotateInterval={5000}
                        cardHeight={500}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 relative overflow-hidden">
                {/* Background Image with Overlay - Matching About Page Structure */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/projects/community-bg.jpg)',
                        }}
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80" />

                    {/* Additional accent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/10 via-transparent to-accent-gold/10" />
                </div>

                <div className="container-custom px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        <div className="min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center justify-center flex-col">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-white">
                                Ready to Start Your
                                <br />
                                <span className="text-accent-gold">Digital Journey?</span>
                            </h2>
                        </div>

                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Join religious institutions worldwide who trust MZHub to preserve
                            their teachings and serve their communities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <BlobButton as={Link} href="/about">
                                About Us
                            </BlobButton>
                            <BlobButton as={Link} href="/contact">
                                Get in touch
                            </BlobButton>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
