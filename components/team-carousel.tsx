"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { TeamMember } from '@/lib/teamMembers'

interface TeamCarouselProps {
    team: TeamMember[]
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
    const totalCards = team.length
    const indicatorCount = totalCards ? Math.min(2, totalCards) : 0
    const chunkSize = indicatorCount ? Math.ceil(totalCards / indicatorCount) : 0
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

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

    return (
        <div className="relative space-y-6">
            <div ref={scrollRef} className="team-scroll overflow-x-auto pb-6 snap-x snap-mandatory">
                <div className="flex gap-10 min-w-max pr-8">
                    {team.map((member, index) => {
                        const imageSrc = member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`
                        const offsetClass = index % 2 === 1 ? 'md:translate-y-10' : ''

                        return (
                            <figure
                                key={member.name}
                                className={`group snap-start w-[360px] shrink-0 space-y-5 ${offsetClass}`}
                            >
                                <div className="relative aspect-square w-full overflow-hidden rounded-[40px] bg-black/20">
                                    <img
                                        src={imageSrc}
                                        alt={member.name}
                                        className="h-full w-full object-cover transition duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0"
                                    />
                                </div>
                                <div>
                                    <p className="text-2xl font-semibold text-secondary-light dark:text-white">{member.name}</p>
                                    <p className="text-base text-secondary-light/70 dark:text-text-mist/70">{member.role}</p>
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
                                className={`h-3 w-3 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-light dark:focus-visible:ring-accent-gold ${isActive ? 'bg-secondary-light dark:bg-accent-gold' : 'bg-neutral-400/60 dark:bg-text-mist/50 hover:bg-neutral-500/70 dark:hover:bg-text-mist/80'}`}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
