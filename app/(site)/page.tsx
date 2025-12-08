"use client"

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { BlobButton } from '@/components/ui/BlobButton'
import RotatingText from '@/components/RotatingText'
import { BackgroundPathsOnly } from '@/components/ui/background-paths'
import HoverCard from '@/components/ui/HoverCard'
import { PlatformFeatures } from '@/components/ui/PlatformFeatures'
import { BookOpen, Bot, Users } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { StaggerTestimonials } from '@/components/stagger-testimonials'
import VideoShowcase from '@/components/video-component'

const AnimatedCanvas = dynamic(() => import('@/components/ui/AnimatedCanvas'), {
    ssr: false,
})

export default function Home() {

    return (
        <div>
            <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-neutral-light dark:bg-primary-dark">
                <AnimatedCanvas />
                <BackgroundPathsOnly />
                <div className="container-custom relative z-20 text-center text-secondary-light dark:text-text-mist py-8 px-4 md:py-20">
                    <div className="flex items-center justify-center mb-6 md:mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif flex items-center gap-4">
                            <span className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-secondary-light dark:text-text-mist">Spiritual</span>
                            <RotatingText
                                texts={['Guru', 'AI']}
                                mainClassName="text-2xl sm:text-2xl md:text-4xl lg:text-6xl px-3 sm:px-4 md:px-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-xl"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </h1>
                    </div>

                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={3} blurStrength={8}>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-12 text-secondary-light/90 dark:text-accent-gold/90 italic max-w-4xl mx-auto px-4">
                            "You are not replacing the guru.
                            <br />
                            You are extending their reach."
                        </p>
                    </ScrollReveal>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                        <Link href="/contact">
                            <BlobButton>
                                Request Demo
                            </BlobButton>
                        </Link>
                        <Link href="/projects">
                            <BlobButton>
                                Explore Projects
                            </BlobButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Video Showcase */}
            <SectionWrapper id="showcase" className="bg-neutral-light dark:bg-primary-dark">
                <VideoShowcase
                    caption="Empowering faith communities through technology"
                />
            </SectionWrapper>
            
            {/* Key Features */}
            <SectionWrapper id="features" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-12">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold">Platform Features</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        Everything you need to digitally transform your spiritual institution
                    </p>
                </div>

                <PlatformFeatures />
            </SectionWrapper>

            {/* Philosophy & Trust */}
            <SectionWrapper id="philosophy" className="bg-neutral-light dark:bg-primary-dark">
                <div className="flex flex-col overflow-hidden">
                    <ContainerScroll
                        titleComponent={
                            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                                <h2 className="text-3xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold">
                                    Our Philosophy: Technology in Service of Faith
                                </h2>
                            </ScrollReveal>
                        }
                    >
                        <div className="h-full w-full p-6 md:p-10 overflow-auto">
                            {/* Introduction Text */}
                            <div className="space-y-6 text-base md:text-lg text-secondary-light dark:text-text-mist mb-8">
                                <p>
                                    We understand that faith is deeply personal and sacred. The introduction of artificial intelligence into spiritual contexts requires extraordinary care, respect, and ethical consideration.
                                </p>

                                <p className="text-lg md:text-xl font-semibold text-secondary-light dark:text-accent-gold bg-primary-light/20 dark:bg-secondary-dark p-6 rounded-lg border-l-4 border-accent-gold">
                                    MZhub was built on a fundamental principle: AI should amplify spiritual wisdom, never replace it. Technology serves tradition, not the other way around.
                                </p>
                            </div>

                            {/* Core Principles Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* What We Believe */}
                                <div className="bg-primary-light/30 dark:bg-primary-dark p-6 rounded-lg">
                                    <h4 className="font-bold text-xl mb-4 text-secondary-light dark:text-accent-gold">What We Believe</h4>
                                    <ul className="space-y-3 text-secondary-light dark:text-text-mist">
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Human spiritual leadership is irreplaceable</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Institutions must maintain doctrinal control</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Privacy and sanctity must be protected</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Technology should be transparent and trustworthy</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* What We Promise */}
                                <div className="bg-accent-gold/20 dark:bg-primary-dark p-6 rounded-lg">
                                    <h4 className="font-bold text-xl mb-4 text-secondary-light dark:text-accent-gold">What We Promise</h4>
                                    <ul className="space-y-3 text-secondary-light dark:text-text-mist">
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Complete institutional oversight</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Rigorous doctrinal alignment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Bank-level security and privacy</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent-gold mr-2 text-xl">✓</span>
                                            <span>Continuous ethical review</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ContainerScroll>
                </div>
            </SectionWrapper>

            {/* Target Audience */}
            <SectionWrapper id="audience" className="bg-white text-secondary-light dark:bg-primary-dark dark:text-white">
                <div className="text-center mb-16">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-light dark:text-accent-gold">Who We Serve</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                        MZhub is purpose-built for religious institutions seeking to expand their digital presence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Temples', icon: '🛕', description: 'Hindu temples and mandirs serving local and global communities' },
                        { title: 'Ashrams', icon: '🧘‍♂️', description: 'Spiritual retreat centers and meditation communities' },
                        { title: 'Churches', icon: '⛪', description: 'Christian congregations and ministries of all denominations' },
                        { title: 'Mosques', icon: '🕌', description: 'Islamic centers and Muslim community organizations' },
                        { title: 'Synagogues', icon: '✡️', description: 'Jewish congregations and study centers' },
                        { title: 'Monasteries', icon: '🙏', description: 'Buddhist and contemplative religious communities' },
                        { title: 'Gurudwaras', icon: '🏛️', description: 'Sikh temples and community centers' },
                        { title: 'Spiritual Centers', icon: '🕉️', description: 'Multi-faith and interfaith spiritual organizations' }
                    ].map((audience, index) => (
                        <div
                            key={index}
                            className="bg-secondary-light/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-secondary-light/20 transition-colors dark:bg-white/10 dark:hover:bg-white/20"
                        >
                            <div className="text-5xl mb-3">
                                {audience.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-secondary-light dark:text-white">{audience.title}</h3>
                            <p className="text-secondary-light/70 dark:text-neutral-light text-sm">{audience.description}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Social Proof */}
            <SectionWrapper id="social-proof" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-12">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold">Trusted by Spiritual Leaders Worldwide</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        See what religious institutions and spiritual communities are saying about MZhub
                    </p>
                </div>
                <StaggerTestimonials />
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper className="bg-white text-secondary-light text-center dark:bg-primary-dark dark:text-white">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-light dark:text-accent-gold">
                            Ready to Extend Your Spiritual Reach?
                        </h2>
                    </ScrollReveal>
                    <p className="text-xl mb-8 text-secondary-light/80 dark:text-text-mist">
                        Join religious institutions worldwide who are using MZhub to preserve their teachings and serve their communities better.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <BlobButton>
                                Schedule Demo
                            </BlobButton>
                        </Link>
                        <Link href="/projects">
                            <BlobButton>
                                Learn More
                            </BlobButton>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
