'use client'

import { useState, useEffect, useRef } from 'react'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { Lightbulb, BookOpen, Heart, Shield, Network, Globe, Coins, Settings } from 'lucide-react'


interface Capability {
    number: string
    icon: string
    title: string
    body: string
    impactStory: string
}

interface CapabilitiesSectionProps {
    capabilities: Capability[]
}

const iconMap = {
    lightbulb: Lightbulb,
    scroll: BookOpen,
    heart: Heart,
    shield: Shield,
    network: Network,
    globe: Globe,
    coins: Coins,
    settings: Settings,
}

// Mobile Carousel Component
interface MobileCarouselProps {
    capabilities: Capability[]
    iconMap: typeof iconMap
    activeCard: string | null
    toggleCard: (number: string) => void
    renderCard: (capability: Capability, Icon: any, isActive: boolean, index: number) => JSX.Element
}

function MobileCarousel({ capabilities, iconMap, activeCard, toggleCard, renderCard }: MobileCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
        setIsDragging(true)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        if (!touchStart) return
        const currentTouch = e.targetTouches[0].clientX
        setTouchEnd(currentTouch)
        setDragOffset(currentTouch - touchStart)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setIsDragging(false)
            setDragOffset(0)
            return
        }

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe && currentIndex < capabilities.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
        if (isRightSwipe && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }

        setIsDragging(false)
        setDragOffset(0)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <div className="lg:hidden">
            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="relative overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                        transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                    }}
                >
                    {capabilities.map((capability, index) => {
                        const Icon = iconMap[capability.icon as keyof typeof iconMap]
                        const isActive = activeCard === capability.number

                        return (
                            <div
                                key={capability.number}
                                className="w-full flex-shrink-0 px-4"
                            >
                                <div className="min-h-[380px] sm:min-h-[450px]">
                                    {renderCard(capability, Icon, isActive, index)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-6">
                {capabilities.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === index
                            ? 'bg-accent-gold w-8'
                            : 'bg-secondary-light/20 dark:bg-white/20 hover:bg-secondary-light/40 dark:hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Arrow Navigation (optional for accessibility) */}
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={`p-2 rounded-full border border-accent-gold/30 transition-all duration-300 ${currentIndex === 0
                        ? 'opacity-30 cursor-not-allowed'
                        : 'hover:bg-accent-gold/10 active:scale-95'
                        }`}
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => currentIndex < capabilities.length - 1 && setCurrentIndex(currentIndex + 1)}
                    disabled={currentIndex === capabilities.length - 1}
                    className={`p-2 rounded-full border border-accent-gold/30 transition-all duration-300 ${currentIndex === capabilities.length - 1
                        ? 'opacity-30 cursor-not-allowed'
                        : 'hover:bg-accent-gold/10 active:scale-95'
                        }`}
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default function CapabilitiesSection({ capabilities }: CapabilitiesSectionProps) {
    const [activeCard, setActiveCard] = useState<string | null>(null)
    const [desktopIndex, setDesktopIndex] = useState(0)

    const toggleCard = (number: string) => {
        setActiveCard(activeCard === number ? null : number)
    }

    // Desktop infinite carousel autoplay with 2000ms delay
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)')

        if (!mediaQuery.matches) return

        const interval = setInterval(() => {
            setDesktopIndex((prev) => (prev + 1) % capabilities.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [capabilities.length])

    return (
        <SectionWrapper id="features" className="bg-neutral-light dark:bg-primary-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-light dark:text-accent-gold">
                                Building Digital Infrastructure for All Faiths
                            </h2>
                            <p className="text-lg md:text-xl font-medium text-secondary-light dark:text-accent-gold/90">
                                Capabilities built to support faith — not redefine it.
                            </p>
                            <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                                Everything required to build a responsible, scalable faith ecosystem
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Mobile: Swipeable Carousel */}
                <MobileCarousel
                    capabilities={capabilities}
                    iconMap={iconMap}
                    activeCard={activeCard}
                    toggleCard={toggleCard}
                    renderCard={renderCard}
                />

                {/* Desktop: Single-line Infinite Auto Carousel */}
                <div className="hidden lg:block overflow-hidden">
                    <div
                        className="flex gap-8 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${desktopIndex * (320 + 32)}px))`,
                        }}
                    >
                        {/* Duplicate cards for infinite loop effect */}
                        {[...capabilities, ...capabilities].map((capability, index) => {
                            const Icon = iconMap[capability.icon as keyof typeof iconMap]
                            const isActive = activeCard === capability.number
                            return (
                                <div key={`${capability.number}-${index}`} className="flex-shrink-0 w-[320px]">
                                    {renderCard(capability, Icon, isActive, index % capabilities.length)}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )

    // Render card function to avoid duplication
    function renderCard(capability: Capability, Icon: any, isActive: boolean, index: number) {
        return (
            <div
                className="group h-full min-h-[380px] sm:min-h-[450px] rounded-[24px] sm:rounded-[36px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-gradient-to-br from-white/95 via-white/90 to-neutral-light/80 dark:from-primary-dark/80 dark:via-primary-dark/70 dark:to-primary-dark/60 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm"
                style={{
                    transitionDelay: `${index * 100}ms`,
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.02) 0%, transparent 50%),
                        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
                    `,
                    backgroundSize: 'cover, cover, 60px 60px',
                    backgroundPosition: 'center, center, center',
                }}
            >
                {/* Organic shape overlay */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]">
                    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="currentColor"
                            className="text-accent-gold"
                            d="M45.7,-57.8C58.9,-49.5,69.2,-36.3,73.8,-21.4C78.4,-6.6,77.3,9.8,70.8,23.9C64.3,38,52.4,49.8,38.7,57.2C25,64.6,9.5,67.6,-5.6,65.8C-20.7,64,-35.4,57.4,-47.6,48.1C-59.8,38.8,-69.5,26.8,-73.3,12.9C-77.1,-1,-75,-16.8,-67.8,-30.2C-60.6,-43.6,-48.3,-54.6,-34.5,-62.6C-20.7,-70.6,-5.4,-75.6,8.3,-76.9C22,-78.2,32.5,-66.1,45.7,-57.8Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>

                {/* Card Content */}
                <div
                    className={`relative z-10 h-full flex flex-col p-6 sm:p-8 transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                >
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 dark:from-accent-gold/30 dark:to-accent-gold/20 flex items-center justify-center border border-accent-gold/20 dark:border-accent-gold/30 shadow-inner">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent-gold dark:text-accent-gold" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs uppercase tracking-[0.3em] text-secondary-light/40 dark:text-text-mist/40 font-medium">
                            {capability.number}
                        </span>
                    </div>

                    {/* Title and Body */}
                    <div className="flex-1 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-semibold text-secondary-light dark:text-white leading-tight">
                            {capability.title}
                        </h3>
                        <p className="text-sm sm:text-base text-secondary-light/80 dark:text-text-mist leading-relaxed">
                            {capability.body}
                        </p>
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={() => toggleCard(capability.number)}
                        className="mt-6 w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-accent-gold/10 to-accent-gold/5 dark:from-accent-gold/20 dark:to-accent-gold/10 border border-accent-gold/30 dark:border-accent-gold/40 text-secondary-light dark:text-accent-gold font-medium text-sm hover:from-accent-gold/20 hover:to-accent-gold/10 dark:hover:from-accent-gold/30 dark:hover:to-accent-gold/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        aria-label={`See the impact of ${capability.title}`}
                    >
                        <span>See the Impact</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

                {/* Impact Story Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-accent-gold via-accent-gold/95 to-accent-gold/90 dark:from-accent-gold/95 dark:via-accent-gold/90 dark:to-accent-gold/85 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 z-20 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="10" cy="10" r="1" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="200" height="200" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex-1 flex flex-col justify-center space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/25 dark:bg-black/25 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider text-white font-semibold shadow-lg">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Impact Story
                            </span>
                        </div>

                        <p className="text-base sm:text-lg text-white leading-relaxed font-medium">
                            {capability.impactStory}
                        </p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => toggleCard(capability.number)}
                        className="relative z-10 mt-6 w-full py-3 px-4 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/20 text-white font-medium text-sm hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        aria-label="Close impact story"
                    >
                        <span>Back to Details</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

