"use client"

import { useEffect, useMemo, useRef, useState } from 'react'

type CardItem = {
  title: string
  text: string
  details?: string[]
  highlights?: string[]
  fillerBlocks?: number
}

type CoreValuesStickyProps = {
  videoSrc?: string
  items?: CardItem[]
  topOffset?: number
  headingTitle?: string
  headingSubtitle?: string
}

export default function CoreValuesSticky({
  videoSrc = "/video/mzhub.mp4",
  items = [],
  topOffset = 96, // sticky offset in px (e.g., navbar height)
  headingTitle,
  headingSubtitle,
}: CoreValuesStickyProps) {
  const cardScrollRef = useRef<HTMLDivElement | null>(null)
  const touchStartY = useRef<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const lockedScrollY = useRef<number | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const cards = useMemo(() => (
    items.length
      ? items
      : [
          {
            title: "Reverence for Tradition",
            text: "We approach spiritual teachings with humility. Technology is only here to document and share what already exists.",
            details: [
              "We shadow archivists, chant with monastics, and map sacred calendars before writing a single interface component.",
              "Every quarterly review lets elders fine-tune tone, gestures, and ceremonial cues."
            ],
            highlights: [
              "Temple ambience underscoring meditations",
              "Glyphs traced from hand-copied scripture",
              "Story prompts vetted by lineage bearers"
            ],
            fillerBlocks: 6
          },
          {
            title: "Institutional Sovereignty",
            text: "Religious leaders stay in command of doctrine, rollout, and review. Our tooling simply mirrors their governance.",
            details: [
              "Pipelines show every action so archivists can pause or retract instantly.",
              "We teach local stewards to manage content, versioning, and emergency shutdowns."
            ],
            highlights: [
              "Per-response provenance ledger",
              "Editable doctrine guardrails",
              "Self-hosted options for air-gapped campuses"
            ],
            fillerBlocks: 6
          },
          {
            title: "Privacy as Sacred",
            text: "Spiritual seeking is private. We never sell or expose devotee insights and treat every inquiry as sacred data.",
            details: [
              "Clear privacy notices ship in multiple languages and opt-ins are reversible.",
              "Pastoral escalations redact sensitive pieces before reaching chaplains."
            ],
            highlights: [
              "Tokenized session IDs recycled daily",
              "Zero-knowledge encryption for archives",
              "Consent prompts before pastoral escalation"
            ],
            fillerBlocks: 6
          },
        ]
  ), [items])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    const updateMatch = () => setIsLargeScreen(mediaQuery.matches)

    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)

    return () => mediaQuery.removeEventListener('change', updateMatch)
  }, [])

  const videoHeightStyle = useMemo(
    () => ({ height: `calc(100vh - ${topOffset}px)` }),
    [topOffset]
  )

  const applyScrollToCard = (deltaY: number) => {
    const card = cardScrollRef.current
    if (!card) return { consumed: false, atStart: true, atEnd: true }

    const maxScroll = card.scrollHeight - card.clientHeight
    if (maxScroll <= 0) return { consumed: false, atStart: true, atEnd: true }

    const nextScroll = Math.min(Math.max(card.scrollTop + deltaY, 0), maxScroll)
    if (nextScroll === card.scrollTop) {
      return { consumed: false, atStart: nextScroll === 0, atEnd: nextScroll === maxScroll }
    }

    card.scrollTop = nextScroll
    return { consumed: true, atStart: nextScroll === 0, atEnd: nextScroll === maxScroll }
  }

  const shouldTrapScroll = () => {
    if (typeof window === 'undefined' || !isLargeScreen) return false
    const section = sectionRef.current
    if (!section) return false
    const rect = section.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const clampTop = Math.min(topOffset, viewportHeight - 1)
    const stickyViewportHeight = Math.min(Math.max(0, viewportHeight - topOffset), rect.height)
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0))
    return rect.top <= clampTop && visibleHeight >= stickyViewportHeight
  }

  const clampPageScroll = (value: number) => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
    return Math.min(Math.max(value, 0), maxScroll)
  }

  const alignSectionTop = () => {
    const section = sectionRef.current
    if (!section) return clampPageScroll(window.scrollY)
    const rect = section.getBoundingClientRect()
    const clampTop = Math.min(topOffset, window.innerHeight - 1)
    return clampPageScroll(window.scrollY + rect.top - clampTop)
  }

  const toggleVideoPlayback = (video?: HTMLVideoElement | null) => {
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {
        video.setAttribute('controls', 'true')
      })
    } else {
      video.pause()
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !isLargeScreen) return

    const onWheel = (event: WheelEvent) => {
      const trapActive = shouldTrapScroll()
      if (!trapActive) return

      const direction = Math.sign(event.deltaY)
      const result = applyScrollToCard(event.deltaY)
      const canExitUp = direction < 0 && result.atStart && !result.consumed
      const canExitDown = direction > 0 && result.atEnd && !result.consumed

      if (canExitUp || canExitDown) {
        return
      }

      lockedScrollY.current = alignSectionTop()
      window.scrollTo({ top: lockedScrollY.current })
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
      const result = applyScrollToCard(deltaY)
      const canExitUp = direction < 0 && result.atStart && !result.consumed
      const canExitDown = direction > 0 && result.atEnd && !result.consumed

      if (canExitUp || canExitDown) {
        touchStartY.current = currentY
        return
      }

      lockedScrollY.current = alignSectionTop()
      window.scrollTo({ top: lockedScrollY.current })
      event.preventDefault()
      touchStartY.current = currentY
    }

    const resetTouch = () => {
      touchStartY.current = null
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
  }, [topOffset, isLargeScreen])

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
    >
      {(headingTitle || headingSubtitle) && (
        <div className="text-center flex flex-col items-center pb-4">
          {headingTitle && (
            <h2 className="section-heading text-secondary-light dark:text-accent-gold">{headingTitle}</h2>
          )}
          {headingSubtitle && (
            <p className="mt-2 text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl">
              {headingSubtitle}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full gap-8 lg:gap-0">
        {/* Scrollable card column */}
        <div className="lg:col-span-2">
          <div className="lg:sticky" style={{ top: topOffset }}>
            <div className="px-2 sm:px-4 lg:px-0" style={isLargeScreen ? videoHeightStyle : undefined}>
              <div className="relative lg:h-full bg-transparent dark:bg-transparent overflow-visible lg:overflow-hidden">
                <div
                  ref={cardScrollRef}
                  className="relative lg:h-full overflow-visible lg:overflow-y-auto px-6 py-10 team-scroll"
                >
                  <div className="relative pl-12 space-y-16">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold/70 via-accent-blue/30 to-transparent" aria-hidden />
                    {cards.map((card, idx) => (
                      <article key={idx} className="relative border border-white/60 dark:border-white/10 bg-white/85 dark:bg-card/85 p-7 shadow-[0_35px_95px_-55px_rgba(15,23,42,0.9)] backdrop-blur">
                        <span className="absolute -left-12 top-7 flex h-10 w-10 items-center justify-center border border-accent-gold bg-white dark:bg-card text-primary-dark dark:text-white font-semibold text-sm shadow-lg">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-secondary-light/60 dark:text-text-mist/60">
                          <span>Principle</span>
                          <span>Depth</span>
                        </div>
                        <h3 className="mt-3 text-3xl font-serif text-secondary-light dark:text-accent-gold">
                          {card.title}
                        </h3>
                        <div className="mt-5 space-y-4 text-secondary-light/85 dark:text-text-mist text-lg leading-relaxed">
                          <p>{card.text}</p>
                          {card.details?.map((detail, detailIdx) => (
                            <p key={detailIdx}>{detail}</p>
                          ))}
                          {card.highlights && (
                            <ul className="space-y-3 border-t border-secondary-light/10 dark:border-accent-gold/15 pt-4 text-base">
                              {card.highlights.map((point, pointIdx) => (
                                <li key={pointIdx} className="flex items-start gap-3">
                                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-gold" aria-hidden />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {Array.from({ length: card.fillerBlocks ?? 0 }).map((_, fillerIdx) => (
                            <div key={`filler-${fillerIdx}`} aria-hidden className="h-16 sm:h-20" />
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky video on the right */}
        <div className="hidden lg:block lg:col-span-3 lg:sticky" style={{ top: topOffset }}>
          <div className="flex flex-col gap-4">
            <div className="w-full flex items-start justify-center overflow-hidden rounded-3xl shadow-sm" style={videoHeightStyle}>
              <video
                src={videoSrc}
                className="w-full h-full min-h-[320px] object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onClick={(event) => toggleVideoPlayback(event.currentTarget)}
                title="Toggle video playback"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-10">
        <div className="w-full flex items-start justify-center overflow-hidden rounded-3xl shadow-sm">
          <video
            src={videoSrc}
            className="w-full h-full min-h-[240px] object-cover cursor-pointer"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onClick={(event) => toggleVideoPlayback(event.currentTarget)}
            title="Toggle video playback"
          />
        </div>
      </div>
    </section>
  )
}
