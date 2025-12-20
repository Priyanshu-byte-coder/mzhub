"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TeamMember } from '@/lib/about/teamMembers'

interface TeamCarouselProps {
    team: TeamMember[]
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
    const totalCards = team.length
    // Responsive indicator count: desktop shows 2 dots, mobile shows up to 4
    const getInitialIndicatorCount = () => {
        if (typeof window !== 'undefined') {
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches
            return totalCards ? Math.min(isDesktop ? 2 : 4, totalCards) : 0
        }
        // SSR fallback
        return totalCards ? Math.min(2, totalCards) : 0
    }
    const [indicatorCount, setIndicatorCount] = useState<number>(getInitialIndicatorCount())
    const chunkSize = indicatorCount ? Math.ceil(totalCards / indicatorCount) : 0
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const getCardWidth = useCallback(() => {
        const container = scrollRef.current
        if (!container) return 0

        const cards = container.querySelectorAll('figure')
        if (cards.length >= 2) {
            const first = cards[0].getBoundingClientRect()
            const second = cards[1].getBoundingClientRect()
            return Math.abs(second.left - first.left)
        }

        return cards[0]?.clientWidth ?? 0
    }, [])

    const scrollToIndex = (index: number) => {
        if (!totalCards) return

        const normalized = ((index % totalCards) + totalCards) % totalCards
        const container = scrollRef.current
        const cardWidth = getCardWidth()
        if (!container || !cardWidth) return

        container.scrollTo({ left: cardWidth * normalized, behavior: 'smooth' })
        setActiveIndex(normalized)
    }

    const handleArrow = (direction: 'left' | 'right') => {
        const delta = direction === 'left' ? -1 : 1
        scrollToIndex(activeIndex + delta)
    }

    useEffect(() => {
        if (!totalCards) return
        const container = scrollRef.current
        if (!container) return

        const updateActiveIndex = () => {
            const cardWidth = getCardWidth()
            if (!cardWidth) return

            const scrollLeft = container.scrollLeft
            const maxScroll = container.scrollWidth - container.clientWidth
            
            // If scrolled to the end, set to last card
            if (scrollLeft >= maxScroll - 10) {
                setActiveIndex(totalCards - 1)
            } else {
                const index = Math.round(scrollLeft / cardWidth)
                const normalized = Math.min(Math.max(0, index), totalCards - 1)
                setActiveIndex(normalized)
            }
        }

        updateActiveIndex()
        container.addEventListener('scroll', updateActiveIndex, { passive: true })
        return () => container.removeEventListener('scroll', updateActiveIndex)
    }, [getCardWidth, totalCards])

    // Update indicator count on viewport resize (mobile: 4 dots, desktop: 2 dots)
    useEffect(() => {
        const updateIndicators = () => {
            const isDesktop = window.matchMedia('(min-width: 1024px)').matches
            const next = totalCards ? Math.min(isDesktop ? 2 : 4, totalCards) : 0
            setIndicatorCount(next)
        }

        updateIndicators()
        window.addEventListener('resize', updateIndicators)
        return () => window.removeEventListener('resize', updateIndicators)
    }, [totalCards])

    // Autoplay: advance cards in a loop, pause on hover/focus
    useEffect(() => {
        if (!totalCards) return
        if (isPaused) return

        const interval = setInterval(() => {
            // Advance to next card; wraps via scrollToIndex normalization
            scrollToIndex(activeIndex + 1)
        }, 3000) // 3s per card; adjust as needed

        return () => clearInterval(interval)
    }, [activeIndex, isPaused, totalCards])

    return (
        <div className="relative space-y-6">
            <div
                ref={scrollRef}
                className="team-scroll overflow-x-auto pb-8 snap-x snap-mandatory"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
            >
                <div className="flex gap-4 sm:gap-6 md:gap-10 min-w-max pr-4 sm:pr-8">
                    {team.map((member, index) => {
                        const imageSrc = member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`
                        const offsetClass = index % 2 === 1 ? 'md:translate-y-4' : ''
                        const infoBlocks = [
                            member.theologicalCredentials && {
                                label: 'Theological credentials (if any)',
                                value: member.theologicalCredentials,
                            },
                            {
                                label: 'Technical credentials',
                                value: member.technicalCredentials || 'AWS Certified AI Practitioner, 10 years NLP experience',
                            },
                            member.faithBackground && {
                                label: 'Faith background',
                                value: member.faithBackground,
                            },
                        ].filter(Boolean) as Array<{ label: string; value: string }>

                        return (
                            <figure
                                key={member.name}
                                className={`group snap-start w-[85vw] max-w-[340px] sm:w-[320px] md:w-[420px] shrink-0 ${offsetClass}`}
                            >
                                <div className="flex h-full flex-col rounded-[32px] md:rounded-[48px] border border-white/10 bg-white/80 p-4 sm:p-6 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] md:shadow-[0_25px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-lg dark:bg-black/40">
                                    <div className="relative aspect-square w-full overflow-hidden rounded-[24px] md:rounded-[32px] bg-black/20">
                                        <img
                                            src={imageSrc}
                                            alt={member.name}
                                            className="h-full w-full object-cover transition duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div className="mt-4 md:mt-6">
                                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary-light dark:text-white">{member.name}</p>
                                        <p className="text-xs sm:text-sm md:text-base text-secondary-light/70 dark:text-text-mist/70">{member.role}</p>
                                    </div>
                                    <dl className="mt-4 md:mt-6 space-y-2 md:space-y-4 text-xs sm:text-sm md:text-base text-secondary-light/80 dark:text-text-mist">
                                        {infoBlocks.map((info, infoIndex) => (
                                            <div
                                                key={`${member.name}-${info.label}`}
                                                className={infoIndex === 0 ? 'border-none pt-0' : 'border-t border-white/20 pt-2 md:pt-4 dark:border-white/10'}
                                            >
                                                <dt className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-secondary-light/60 dark:text-text-mist/60">{info.label}</dt>
                                                <dd className="mt-1 leading-relaxed text-secondary-light dark:text-white">{info.value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </figure>
                        )
                    })}
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                    {Array.from({ length: indicatorCount }).map((_, index) => {
                        const targetIndex = chunkSize ? index * chunkSize : 0
                        const isActive = chunkSize ? Math.floor(activeIndex / chunkSize) % indicatorCount === index : false

                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => scrollToIndex(targetIndex)}
                                aria-label={`Go to team group ${index + 1}`}
                                className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-light dark:focus-visible:ring-accent-gold ${isActive ? 'bg-secondary-light dark:bg-accent-gold' : 'bg-neutral-400/60 dark:bg-text-mist/50 hover:bg-neutral-500/70 dark:hover:bg-text-mist/80'}`}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
