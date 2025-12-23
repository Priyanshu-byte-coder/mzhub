"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import RotatingText from '@/components/layout/home/RotatingText'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import InfiniteCarousel from '@/components/ui/home/infinite-carousel'
import { Church, Home as HomeIcon, Flower2 } from 'lucide-react'
import { MdOutlineTempleHindu } from 'react-icons/md'
import { FaMosque } from 'react-icons/fa'
import { LiaSynagogueSolid } from 'react-icons/lia'
import { FaKhanda } from 'react-icons/fa6'

const AnimatedCanvas = dynamic(() => import('@/components/ui/home/AnimatedCanvas'), {
    ssr: false,
})

interface HomeClientProps {
    children: React.ReactNode
}

export default function HomeClient({ children }: HomeClientProps) {
    return (
        <>
            {/* Hero Section with Client Interactions */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-light dark:bg-primary-dark">
                <AnimatedCanvas />
                <BackgroundPathsOnly />
                <div className="container-custom relative z-20 text-center text-secondary-light dark:text-text-mist py-8 px-4 md:py-20">
                    <div className="flex items-center justify-center mb-6 md:mb-8">
                        <h1
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif flex items-center gap-4"
                            aria-label="MZHub: AI-Powered Spiritual Guidance Platform for Religious Institutions"
                        >
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

            {/* Rest of the page content passed as children */}
            {children}

            {/* Target Audience Section with Icons (must be in client component) */}
            <section id="audience-carousel" className="bg-white text-secondary-light dark:bg-primary-dark dark:text-white py-20 md:py-32">
                <div className="text-center mb-16">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-light dark:text-accent-gold">Who We Serve</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                        MZHub is purpose-built for religious institutions seeking to expand their digital presence
                    </p>
                </div>

                <InfiniteCarousel
                    items={[
                        { title: 'Temples', icon: MdOutlineTempleHindu, description: 'Hindu temples and mandirs serving local and global communities' },
                        { title: 'Ashrams', icon: Flower2, description: 'Spiritual retreat centers and meditation communities' },
                        { title: 'Churches', icon: Church, description: 'Christian congregations and ministries of all denominations' },
                        { title: 'Mosques', icon: FaMosque, description: 'Islamic centers and Muslim community organizations' },
                        { title: 'Synagogues', icon: LiaSynagogueSolid, description: 'Jewish congregations and study centers' },
                        { title: 'Monasteries', icon: HomeIcon, description: 'Buddhist and contemplative religious communities' },
                        { title: 'Gurudwaras', icon: FaKhanda, description: 'Sikh temples and community centers' },
                        { title: 'Spiritual Centers', icon: Flower2, description: 'Multi-faith and interfaith spiritual organizations' }
                    ]}
                    speed={5}
                    direction="left"
                />
            </section>
        </>
    )
}
