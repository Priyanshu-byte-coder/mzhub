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
import { BookOpen, Bot, Users, Church, Home as HomeIcon, Flower2, Lightbulb, Handshake } from 'lucide-react'
import { MdOutlineTempleHindu } from 'react-icons/md'
import { FaMosque } from 'react-icons/fa'
import { LiaSynagogueSolid } from 'react-icons/lia'
import { FaKhanda } from 'react-icons/fa6'
import ScrollReveal from '@/components/ui/scroll-reveal'
import ScrollSlideReveal from '@/components/ui/scroll-slide-reveal'
import InfiniteCarousel from '@/components/ui/infinite-carousel'
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
                                mainClassName="text-3xl sm:text-4xl md:text-4xl lg:text-6xl px-3 sm:px-4 md:px-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-xl"
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
                        <BlobButton as={Link} href="/contact">
                            Request Demo
                        </BlobButton>
                        <BlobButton as={Link} href="/projects">
                            Explore Projects
                        </BlobButton>
                    </div>
                </div>
            </section>

            {/* Video Showcase */}
            <SectionWrapper id="showcase" className="bg-neutral-light dark:bg-primary-dark -mt-32 md:-mt-0">
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
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-light dark:text-accent-gold mb-6">
                                Our Philosophy: Technology in Service of Faith
                            </h2>
                        </ScrollReveal>
                        <p className="text-lg md:text-xl text-secondary-light/80 dark:text-text-mist max-w-4xl mx-auto px-4">
                            We understand that faith is deeply personal and sacred. The introduction of artificial intelligence into spiritual contexts requires extraordinary care, respect, and ethical consideration.
                        </p>
                    </div>

                    {/* Core Principle Highlight */}
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2} blurStrength={6}>
                        <div className="mb-12 md:mb-16 mx-auto max-w-5xl px-4">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-gold/20 dark:from-accent-blue/10 dark:to-accent-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white/80 dark:bg-card/80 backdrop-blur-sm p-6 md:p-10 rounded-2xl border-l-4 border-accent-gold shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary-light dark:text-accent-gold leading-relaxed">
                                        MZhub was built on a fundamental principle: AI should amplify spiritual wisdom, never replace it. Technology serves tradition, not the other way around.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Beliefs and Promises Grid */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
                        {/* What We Believe */}
                        <ScrollSlideReveal direction="left">
                            <div className="group h-full">
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/20 to-accent-blue/20 dark:from-secondary-dark/40 dark:to-accent-blue/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                    <div className="relative bg-white/90 dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-secondary-light/10 dark:border-accent-gold/10 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-secondary-light dark:from-accent-gold dark:to-accent-gold/60 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                                <Lightbulb className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-2xl md:text-3xl text-secondary-light dark:text-accent-gold">What We Believe</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            {[
                                                'Human spiritual leadership is irreplaceable',
                                                'Institutions must maintain doctrinal control',
                                                'Privacy and sanctity must be protected',
                                                'Technology should be transparent and trustworthy'
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start group/item">
                                                    <span className="text-accent-gold dark:text-accent-gold mr-3 text-xl mt-1 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                                                    <span className="text-secondary-light/90 dark:text-text-mist text-base md:text-lg group-hover/item:text-secondary-light dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollSlideReveal>

                        {/* What We Promise */}
                        <ScrollSlideReveal direction="right">
                            <div className="group h-full">
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/30 to-accent-beige/30 dark:from-accent-gold/20 dark:to-accent-gold/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
                                    <div className="relative bg-accent-beige/30 dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-accent-gold/20 dark:border-accent-gold/10 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                        <div className="flex items-center mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-gold/60 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                                                <Handshake className="w-6 h-6 text-white" />
                                            </div>
                                            <h4 className="font-bold text-2xl md:text-3xl text-secondary-light dark:text-accent-gold">What We Promise</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            {[
                                                'Complete institutional oversight',
                                                'Rigorous doctrinal alignment',
                                                'Bank-level security and privacy',
                                                'Continuous ethical review'
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start group/item">
                                                    <span className="text-accent-gold dark:text-accent-gold mr-3 text-xl mt-1 group-hover/item:scale-125 transition-transform duration-300">✓</span>
                                                    <span className="text-secondary-light/90 dark:text-text-mist text-base md:text-lg group-hover/item:text-secondary-light dark:group-hover/item:text-white transition-colors duration-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollSlideReveal>
                    </div>
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

                <div className="space-y-4">
                    <InfiniteCarousel
                        items={[
                            { title: 'Temples', icon: MdOutlineTempleHindu, description: 'Hindu temples and mandirs serving local and global communities' },
                            { title: 'Ashrams', icon: Flower2, description: 'Spiritual retreat centers and meditation communities' },
                            { title: 'Churches', icon: Church, description: 'Christian congregations and ministries of all denominations' },
                            { title: 'Mosques', icon: FaMosque, description: 'Islamic centers and Muslim community organizations' },
                        ]}
                        speed={5}
                        direction="left"
                    />
                    <InfiniteCarousel
                        items={[
                            { title: 'Synagogues', icon: LiaSynagogueSolid, description: 'Jewish congregations and study centers' },
                            { title: 'Monasteries', icon: HomeIcon, description: 'Buddhist and contemplative religious communities' },
                            { title: 'Gurudwaras', icon: FaKhanda, description: 'Sikh temples and community centers' },
                            { title: 'Spiritual Centers', icon: Flower2, description: 'Multi-faith and interfaith spiritual organizations' }
                        ]}
                        speed={5}
                        direction="right"
                    />
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
                        <BlobButton as={Link} href="/contact">
                            Schedule Demo
                        </BlobButton>
                        <BlobButton as={Link} href="/projects">
                            Learn More
                        </BlobButton>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
