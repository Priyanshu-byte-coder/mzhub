"use client"

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useId,
} from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface StaggeredMenuItem {
  label: string
  href: string
}

export interface StaggeredMenuSocialItem {
  icon: React.ReactNode
  href: string
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right'
  colors?: string[]
  items?: StaggeredMenuItem[]
  socialItems?: StaggeredMenuSocialItem[]
  displaySocials?: boolean
  displayItemNumbering?: boolean
  className?: string
  logoUrl?: string
  menuButtonColor?: string
  openMenuButtonColor?: string
  accentColor?: string
  changeMenuColorOnOpen?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
  closeOnClickAway?: boolean
}

const defaultColors = ['#0f172a', '#1e293b', '#334155']
const defaultItems: StaggeredMenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Platform', href: '/platform' },
  { label: 'Community', href: '/community' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const getFocusable = (container: HTMLElement | null): HTMLElement[] => {
  if (!container) return []
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="radio"]',
    'input[type="checkbox"]',
    'select',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',')
  return Array.from(container.querySelectorAll<HTMLElement>(selectors))
}

export function StaggeredMenu({
  position = 'right',
  colors = defaultColors,
  items = defaultItems,
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = false,
  className,
  logoUrl,
  menuButtonColor = 'var(--nav-text, #0f172a)',
  openMenuButtonColor = 'var(--accent, #14b8a6)',
  accentColor = 'var(--accent, #14b8a6)',
  changeMenuColorOnOpen = true,
  onMenuOpen,
  onMenuClose,
  closeOnClickAway = true,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const menuId = useId()
  const panelRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const reduced =
    prefersReducedMotion ||
    (typeof document !== 'undefined' &&
      document.documentElement.classList.contains('reduce-motion'))

  const staggerDelay = reduced ? 0 : 0.1
  const itemTranslate = reduced ? 0 : 12
  const tiltDeg = reduced ? 0 : 3

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (isOpen) onMenuOpen?.()
    else onMenuClose?.()
  }, [isOpen, onMenuOpen, onMenuClose])

  useEffect(() => {
    if (!hydrated) return
    if (isOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isOpen, hydrated])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const panel = panelRef.current
    const focusables = getFocusable(panel)
    if (focusables.length) focusables[0].focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !isOpen) return
      const nodes = getFocusable(panel)
      if (!nodes.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleOverlayClick = useCallback(() => {
    if (closeOnClickAway) closeMenu()
  }, [closeOnClickAway, closeMenu])

  const panelVariants = {
    hidden: {
      x: position === 'right' ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'tween', duration: 0.25 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.35 },
    },
    exit: {
      x: position === 'right' ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'tween', duration: 0.25 },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  }

  const underlayVariants = {
    hidden: { opacity: 0, x: position === 'right' ? 60 : -60 },
    visible: (i: number) => ({
      opacity: 0.15,
      x: 0,
      transition: {
        delay: reduced ? 0 : 0.05 * i,
        duration: 0.25,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: position === 'right' ? 30 : -30,
      transition: {
        delay: reduced ? 0 : 0.03 * i,
        duration: 0.2,
      },
    }),
  }

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
        delayChildren: reduced ? 0 : 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay / 2,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: itemTranslate,
      rotateX: tiltDeg,
      rotateY: position === 'right' ? -tiltDeg : tiltDeg,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: { duration: 0.28, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: itemTranslate / 2,
      rotateX: -tiltDeg,
      rotateY: position === 'right' ? tiltDeg : -tiltDeg,
      transition: { duration: 0.2 },
    },
  }

  const ctaVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: [0.98, 1.02, 1],
      opacity: 1,
      transition: { duration: 0.35 },
    },
    exit: { scale: 0.98, opacity: 0, transition: { duration: 0.2 } },
  }

  const resolvedButtonColor =
    changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor

  return (
    <div className={cn('relative', className)} data-hydrated={hydrated}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((v) => !v)}
        className="rounded-full px-4 py-2 text-sm font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background: resolvedButtonColor,
          color: 'var(--nav-bg, #f8fafc)',
        }}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <noscript>
        <div className="mt-4 border rounded-lg p-4 bg-white text-gray-900">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </noscript>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[var(--overlay,rgba(0,0,0,0.5))]"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleOverlayClick}
            />

            <div className="fixed inset-0 z-40 pointer-events-none">
              {colors.map((c, i) => (
                <motion.span
                  key={c + i}
                  custom={i}
                  variants={underlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0"
                  style={{
                    background: c,
                    mixBlendMode: 'screen',
                  }}
                />
              ))}
            </div>

            <motion.nav
              id={menuId}
              role="menu"
              aria-label="Main"
              ref={panelRef}
              className={cn(
                'fixed top-0 bottom-0 z-50 w-[min(90vw,360px)] bg-[var(--nav-bg,#0b1224)] text-[var(--nav-text,#e2e8f0)] shadow-2xl',
                position === 'right' ? 'right-0' : 'left-0',
                'flex flex-col px-6 py-8 gap-6',
              )}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={panelVariants}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {logoUrl && (
                <div className="flex items-center gap-3">
                  <img
                    src={logoUrl}
                    alt="Logo"
                    className="h-10 w-10 rounded-lg object-contain border border-white/10"
                  />
                  <span className="text-lg font-semibold">Menu</span>
                </div>
              )}

              <motion.ul
                className="flex flex-col gap-3 text-lg"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {items.map((item, idx) => {
                  const isCta = idx === items.length - 1
                  const Variant = isCta ? motion.div : motion.li
                  return (
                    <Variant key={item.href} variants={isCta ? ctaVariants : itemVariants}>
                      <a
                        role="menuitem"
                        href={item.href}
                        onClick={closeMenu}
                        className="block rounded-lg px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/5 hover:bg-white/10"
                        style={{
                          color: 'var(--nav-text, #e2e8f0)',
                          borderColor: 'var(--accent, #14b8a6)',
                        }}
                      >
                        <span className="flex items-center gap-3">
                          {displayItemNumbering && (
                            <span className="text-sm opacity-70">
                              {(idx + 1).toString().padStart(2, '0')}
                            </span>
                          )}
                          <span className="font-semibold">{item.label}</span>
                        </span>
                      </a>
                    </Variant>
                  )
                })}
              </motion.ul>

              {displaySocials && socialItems.length > 0 && (
                <motion.div
                  className="mt-auto flex items-center gap-3"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {socialItems.map((s, i) => (
                    <motion.a
                      key={i}
                      role="menuitem"
                      href={s.href}
                      aria-label={`Social link ${i + 1}`}
                      variants={itemVariants}
                      onClick={closeMenu}
                      className="h-10 w-10 grid place-items-center rounded-full border border-white/10 hover:border-[var(--accent,#14b8a6)] transition"
                      style={{ color: accentColor }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}

              <button
                type="button"
                onClick={closeMenu}
                className="text-sm text-white/70 underline underline-offset-4 mt-2 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Close
              </button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StaggeredMenu
