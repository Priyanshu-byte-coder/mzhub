"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import ExpandableCardDemo from './expandable-cards'


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

  const videoHeightStyle = {
    height: `calc((100vh - ${topOffset}px) * 0.8)`
  }


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
      <div className="grid grid-cols-1 lg:grid-cols-7 w-full gap-8 lg:gap-0 lg:items-center">
        {/* Expandable Cards Section */}
        <div className="lg:col-span-2 px-4 lg:px-4 lg:pr-8 flex flex-col justify-center">
          <ExpandableCardDemo />
        </div>
        <div className="hidden lg:block lg:col-span-1" aria-hidden />

        {/* Sticky video on the right */}
        <div className="hidden lg:block lg:col-span-4 lg:sticky" style={{ top: topOffset }}>
          <div className="flex flex-col gap-4 items-end justify-end">
            <div
              className="relative w-full overflow-hidden rounded-3xl shadow-sm"
              style={videoHeightStyle}
            >
              <video
                src={videoSrc}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                autoPlay
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

      <div className="lg:hidden mt-8 px-4">
        <div className="relative w-full max-w-[640px] mx-auto aspect-[4/5] overflow-hidden rounded-2xl shadow-md">
          <video
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/video/mzhub-poster.jpg"
            onClick={(e) => toggleVideoPlayback(e.currentTarget)}
          />
        </div>
      </div>
    </section>
  )
}
