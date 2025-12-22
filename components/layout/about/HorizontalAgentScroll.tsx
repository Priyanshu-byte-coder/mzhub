"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'

interface AgentCard {
  number: string
  title: string
  emphasis: string
  description: string
  footerTag: string
  icon?: React.ReactNode
}

const agents: AgentCard[] = [
  {
    number: '01',
    title: 'Knowledge Grounding Agent',
    emphasis: 'Truth begins with trusted sources.',
    description: 'Every response is grounded exclusively in institution-approved teachings, texts, and archives. No open-web speculation. No invented theology.',
    footerTag: 'Institution-curated knowledge only',
  },
  {
    number: '02',
    title: 'Context Understanding Agent',
    emphasis: 'Meaning depends on who asks — and why.',
    description: 'Interprets intent, cultural background, emotional state, and situational nuance before a reply is formed.',
    footerTag: 'Intent • Culture • Pastoral sensitivity',
  },
  {
    number: '03',
    title: 'Ethics & Doctrine Validation Agent',
    emphasis: 'Every word is checked — not just generated.',
    description: 'Validates responses against doctrinal boundaries, ethical guardrails, and institutional governance rules.',
    footerTag: 'Alignment • Guardrails • Accountability',
  },
  {
    number: '04',
    title: 'Response Stewardship Agent',
    emphasis: 'Care determines delivery.',
    description: 'Sets tone, applies limits, and escalates sensitive matters to human leadership when needed.',
    footerTag: 'Tone • Escalation • Human-in-the-loop',
  },
]

const timelineLabels = ['Grounding', 'Context', 'Ethics', 'Stewardship']

export default function HorizontalAgentScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [horizontalProgress, setHorizontalProgress] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const lockedScrollY = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    setIsMounted(true)
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const updateMatch = () => setIsLargeScreen(mediaQuery.matches)

    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)

    return () => mediaQuery.removeEventListener('change', updateMatch)
  }, [])

  const shouldTrapScroll = () => {
    if (typeof window === 'undefined' || !isLargeScreen) return false
    const section = sectionRef.current
    const container = scrollContainerRef.current
    if (!section || !container) return false

    const rect = section.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const topOffset = 96

    // Require section to be fully visible before activating horizontal scroll
    // Section should be past the top offset and have at least 80% visible
    const sectionHeight = rect.height
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, topOffset)
    const visibilityRatio = visibleHeight / sectionHeight
    
    const isFullyVisible = rect.top <= topOffset && visibilityRatio >= 0.8
    if (!isFullyVisible) return false

    // Allow trapping throughout the horizontal scroll range
    const scrollWidth = container.scrollWidth - container.clientWidth
    const scrollLeft = container.scrollLeft
    
    // Trap scroll when we're in the middle of horizontal scrolling
    return scrollWidth > 0
  }

  const clampPageScroll = (value: number) => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    return Math.min(Math.max(value, 0), maxScroll)
  }

  const alignSectionTop = () => {
    const section = sectionRef.current
    if (!section) return clampPageScroll(window.scrollY)
    const rect = section.getBoundingClientRect()
    const topOffset = 96
    return clampPageScroll(window.scrollY + rect.top - topOffset)
  }

  const applyHorizontalScroll = (deltaY: number) => {
    const container = containerRef.current
    if (!container) return { consumed: false, atStart: true, atEnd: true }

    // Calculate total scrollable width
    const totalCards = agents.length
    if (totalCards <= 1) return { consumed: false, atStart: true, atEnd: true }

    // Convert deltaY to progress change (0 to 1)
    // Adjust sensitivity: larger number = slower scroll
    const sensitivity = 800
    const progressDelta = deltaY / sensitivity
    
    const currentProgress = horizontalProgress
    const nextProgress = Math.min(Math.max(currentProgress + progressDelta, 0), 1)

    // Check if we actually moved
    const moved = Math.abs(nextProgress - currentProgress) > 0.001
    
    setHorizontalProgress(nextProgress)

    return {
      consumed: moved,
      atStart: nextProgress <= 0.01,
      atEnd: nextProgress >= 0.99,
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !isMounted || !isLargeScreen) return

    const onWheel = (event: WheelEvent) => {
      const trapActive = shouldTrapScroll()
      setIsActive(trapActive)

      if (!trapActive) {
        return
      }

      const direction = Math.sign(event.deltaY)
      const result = applyHorizontalScroll(event.deltaY)
      
      // Only allow exit at boundaries when scrolling in the exit direction
      // Scrolling up at start = exit up
      // Scrolling down at end = exit down
      const canExitUp = direction < 0 && result.atStart
      const canExitDown = direction > 0 && result.atEnd

      if (canExitUp || canExitDown) {
        setIsActive(false)
        lockedScrollY.current = null
        return
      }

      // Always lock vertical scroll and convert to horizontal movement
      // This means scrolling down will move cards sideways until the end
      lockedScrollY.current = alignSectionTop()
      window.scrollTo({ top: lockedScrollY.current, behavior: 'auto' })
      event.preventDefault()
    }

    const onTouchStart = (event: TouchEvent) => {
      if (!shouldTrapScroll()) return
      touchStartY.current = event.touches[0]?.clientY ?? null
    }

    const onTouchMove = (event: TouchEvent) => {
      const trapActive = shouldTrapScroll()
      if (!trapActive) return
      if (touchStartY.current === null) return

      const currentY = event.touches[0]?.clientY ?? touchStartY.current
      const deltaY = touchStartY.current - currentY

      const direction = Math.sign(deltaY)
      const result = applyHorizontalScroll(deltaY * 2)
      const canExitUp = direction < 0 && result.atStart
      const canExitDown = direction > 0 && result.atEnd

      if (canExitUp || canExitDown) {
        touchStartY.current = currentY
        setIsActive(false)
        return
      }

      if (result.consumed) {
        lockedScrollY.current = alignSectionTop()
        window.scrollTo({ top: lockedScrollY.current, behavior: 'auto' })
        event.preventDefault()
      }
      touchStartY.current = currentY
    }

    const resetTouch = () => {
      touchStartY.current = null
    }

    const updateHorizontalProgress = () => {
      // Progress is now managed by state, no need to sync from scrollLeft
      return
    }

    window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', resetTouch)
      window.addEventListener('touchcancel', resetTouch)

      return () => {
        window.removeEventListener('wheel', onWheel)
        window.removeEventListener('touchstart', onTouchStart)
        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('touchend', resetTouch)
        window.removeEventListener('touchcancel', resetTouch)
      }
  }, [isLargeScreen, isMounted])

  const getActiveCardIndex = () => {
    return Math.min(Math.floor(horizontalProgress * 4), 3)
  }

  const activeCardIndex = getActiveCardIndex()

  return (
    <SectionWrapper fullWidth className="bg-neutral-light dark:bg-primary-dark">
      <section
        ref={sectionRef}
        className="relative w-full py-20 md:py-28 overflow-hidden"
        suppressHydrationWarning
      >
        {/* Fixed Header */}
        <div className="text-center mb-16 px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-secondary-light dark:text-white mb-4">
            Why MZHub Is Different
          </h2>
          <p className="text-lg md:text-xl text-secondary-light/70 dark:text-text-mist/80 mb-8 font-light">
            Typical AI tools answer questions. MZHub stewards meaning.
          </p>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-medium text-secondary-light dark:text-spiritual-indigo-400">
              Stewarding Guidance the Right Way
            </p>
            <p className="text-sm md:text-base text-secondary-light/60 dark:text-text-mist/60">
              Every response follows a deliberate, accountable journey — from knowledge to care.
            </p>
          </div>
        </div>

        {/* Timeline Indicator */}
        <div className="relative mb-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-1 bg-secondary-light/20 dark:bg-secondary-dark/60 rounded-full mb-8">
              <motion.div
                className="absolute top-1/2 h-3 w-3 -mt-1.5 bg-secondary-light dark:bg-spiritual-indigo-400 rounded-full shadow-lg"
                style={{
                  left: `${horizontalProgress * 100}%`,
                  transform: 'translateX(-50%)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {timelineLabels.map((label, index) => (
                <div
                  key={label}
                  className="text-center"
                >
                  <motion.p
                    className={`text-xs md:text-sm font-medium transition-colors ${
                      index <= activeCardIndex
                        ? 'text-secondary-light dark:text-spiritual-indigo-400'
                        : 'text-secondary-light/40 dark:text-text-mist/40'
                    }`}
                    animate={{
                      opacity: index <= activeCardIndex ? 1 : 0.4,
                    }}
                  >
                    {label}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-hidden scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            ref={containerRef}
            className="flex gap-8 md:gap-12 px-8 md:px-16 transition-transform duration-300 ease-out"
            style={{
              width: 'max-content',
              transform: `translateX(-${horizontalProgress * 100}%)`,
              willChange: 'transform',
            }}
          >
            {agents.map((agent, index) => {
              const isActive = index === activeCardIndex
              const isVisible = Math.abs(index - activeCardIndex) <= 1

              return (
                <motion.div
                  key={agent.number}
                  className="flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] max-w-2xl"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.02 : 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`relative h-[500px] md:h-[600px] rounded-3xl p-8 md:p-12 flex flex-col justify-between transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-spiritual-indigo-50 via-white to-spiritual-indigo-100/40 dark:from-secondary-dark/80 dark:via-primary-dark/60 dark:to-secondary-dark/70 border-2 border-secondary-light/50 dark:border-spiritual-indigo-400/60 shadow-2xl'
                        : 'bg-gradient-to-br from-white via-neutral-light to-spiritual-indigo-50/50 dark:from-secondary-dark/60 dark:via-primary-dark/40 dark:to-secondary-dark/50 border border-secondary-light/20 dark:border-secondary-dark/40 shadow-lg'
                    }`}
                  >
                    {/* Top Section: Icon and Number */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-12 w-12 rounded-xl bg-secondary-light/10 dark:bg-spiritual-indigo-500/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-secondary-light dark:text-spiritual-indigo-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <span
                        className={`text-2xl md:text-3xl font-bold ${
                          isActive
                            ? 'text-secondary-light dark:text-spiritual-indigo-400'
                            : 'text-secondary-light/40 dark:text-text-mist/40'
                        }`}
                      >
                        {agent.number}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-semibold text-secondary-light dark:text-white">
                        {agent.title}
                      </h3>

                      <p className="text-lg md:text-xl font-medium text-secondary-light/90 dark:text-spiritual-indigo-300">
                        {agent.emphasis}
                      </p>

                      <p className="text-base md:text-lg text-secondary-light/80 dark:text-text-mist/80 leading-relaxed">
                        {agent.description}
                      </p>
                    </div>

                    {/* Footer Tag */}
                    <div className="mt-8 pt-6 border-t border-secondary-light/20 dark:border-secondary-dark/40">
                      <p className="text-xs md:text-sm text-secondary-light/60 dark:text-text-mist/60 uppercase tracking-wider">
                        {agent.footerTag}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Exit Line */}
        <motion.div
          className="text-center mt-16 md:mt-20 px-4 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: horizontalProgress >= 0.95 ? 1 : 0.3,
            y: horizontalProgress >= 0.95 ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg md:text-xl text-secondary-light/70 dark:text-text-mist/70 max-w-3xl mx-auto leading-relaxed">
            Accuracy alone is not enough. Meaning, context, and responsibility require structure.
          </p>
        </motion.div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </SectionWrapper>
  )
}
