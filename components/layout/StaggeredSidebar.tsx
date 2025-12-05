'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

// Animation constants from spec
const DEFAULTS = {
  overlayDuration: 0.32,
  panelDuration: 0.45,
  layerDuration: 0.36,
  layerStagger: 0.10,
  itemDuration: 0.36,
  itemStagger: 0.10,
  tiltDeg: 4,
  translateY: 12,
  easing: [0.2, 0.9, 0.2, 1] as const,
}

// TypeScript interfaces
export interface StaggeredMenuItem {
  label: string
  href: string
}

export interface StaggeredMenuSocialItem {
  icon: React.ReactNode
  href: string
  label: string
}

export interface StaggeredSidebarProps {
  isOpen: boolean
  onClose: () => void
  position?: 'left' | 'right'
  colors?: string[]
  items: StaggeredMenuItem[]
  socialItems?: StaggeredMenuSocialItem[]
  displaySocials?: boolean
  displayItemNumbering?: boolean
  logoUrl?: string
  menuButtonColor?: string
  openMenuButtonColor?: string
  accentColor?: string
  changeMenuColorOnOpen?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
  closeOnClickAway?: boolean
  ctaLabel?: string
  ctaHref?: string
}

export default function StaggeredSidebar({
  isOpen,
  onClose,
  position = 'left',
  colors = ['rgba(57, 69, 126, 0.15)', 'rgba(215, 180, 106, 0.12)', 'rgba(57, 69, 126, 0.08)'],
  items,
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  logoUrl = '/mzhub-logo.png',
  accentColor = 'var(--accent-gold)',
  onMenuOpen,
  onMenuClose,
  closeOnClickAway = true,
  ctaLabel = 'Get Started',
  ctaHref = '/contact',
}: StaggeredSidebarProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLButtonElement>(null)
  const previouslyFocusedRef = useRef<HTMLElement | null>(null)

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement
      document.body.style.overflow = 'hidden'
      onMenuOpen?.()
      
      // Focus first item after animation
      setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, prefersReducedMotion ? 50 : 600)
    } else {
      document.body.style.overflow = ''
      onMenuClose?.()
      
      // Restore focus
      setTimeout(() => {
        previouslyFocusedRef.current?.focus()
      }, 50)
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, onMenuOpen, onMenuClose, prefersReducedMotion])

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
      return
    }

    if (e.key === 'Tab') {
      const focusableElements = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusableElements || focusableElements.length === 0) return

      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }, [onClose])

  // Click away handler
  const handleOverlayClick = useCallback(() => {
    if (closeOnClickAway) {
      onClose()
    }
  }, [closeOnClickAway, onClose])

  // Overlay animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.overlayDuration,
        ease: DEFAULTS.easing 
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.overlayDuration,
        ease: DEFAULTS.easing 
      }
    }
  }

  // Panel animation variants
  const panelVariants = {
    hidden: {
      x: position === 'left' ? '-100%' : '100%',
      opacity: prefersReducedMotion ? 0 : 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.panelDuration,
        ease: DEFAULTS.easing,
        staggerChildren: prefersReducedMotion ? 0 : DEFAULTS.itemStagger,
        delayChildren: prefersReducedMotion ? 0 : 0.15,
      }
    },
    exit: {
      x: position === 'left' ? '-100%' : '100%',
      opacity: prefersReducedMotion ? 0 : 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.panelDuration,
        ease: DEFAULTS.easing,
        staggerChildren: prefersReducedMotion ? 0 : DEFAULTS.itemStagger * 0.5,
        staggerDirection: -1,
      }
    }
  }

  // Layer animation variants (underlay strips)
  const layerVariants = {
    hidden: { 
      scaleX: 0,
      opacity: 0,
      originX: position === 'left' ? 0 : 1,
    },
    visible: (i: number) => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.layerDuration,
        delay: prefersReducedMotion ? 0 : i * DEFAULTS.layerStagger,
        ease: DEFAULTS.easing,
      }
    })
  }

  // Menu item animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : DEFAULTS.translateY,
      rotateX: prefersReducedMotion ? 0 : DEFAULTS.tiltDeg,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.itemDuration,
        ease: DEFAULTS.easing,
      }
    }
  }

  // CTA animation variants (with micro pop)
  const ctaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      scale: [0.97, 1.03, 1],
      transition: {
        duration: prefersReducedMotion ? 0.1 : DEFAULTS.itemDuration,
        ease: DEFAULTS.easing,
        scale: {
          times: [0, 0.6, 1],
        }
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            id="menu-overlay"
            className="fixed inset-0 bg-black/45 z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          {/* Side Panel */}
          <motion.aside
            ref={panelRef}
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation menu"
            className={cn(
              "fixed top-0 z-50 h-full bg-[var(--nav-bg)] backdrop-blur-md overflow-y-auto",
              "w-full md:w-[420px] lg:w-[480px]",
              position === 'left' ? 'left-0' : 'right-0',
              "shadow-2xl"
            )}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onKeyDown={handleKeyDown}
            style={{
              '--nav-bg': 'rgba(255, 255, 255, 0.98)',
              '--nav-text': '#1a202c',
              '--accent': accentColor,
            } as React.CSSProperties}
          >
            {/* Underlay layers */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {colors.map((color, i) => (
                <motion.span
                  key={i}
                  className="absolute inset-0"
                  style={{
                    background: color,
                    transform: `translateY(${i * 8}px) rotate(${i % 2 ? 1 : -1}deg)`,
                  }}
                  variants={layerVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  data-index={i}
                />
              ))}
            </div>

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col min-h-full p-8 md:p-12">
              {/* Menu Header */}
              <motion.div 
                className="flex items-center justify-between mb-12"
                variants={itemVariants}
              >
                <Image
                  src={logoUrl}
                  alt="MZhub Logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain rounded-lg"
                />
                <button
                  ref={lastFocusableRef}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Navigation Menu */}
              <nav role="navigation" aria-label="Main menu" className="flex-1">
                <motion.ul role="menu" className="space-y-2">
                  {items.map((item, index) => (
                    <motion.li
                      key={item.href}
                      role="menuitem"
                      variants={itemVariants}
                      className="group"
                    >
                      <Link
                        ref={index === 0 ? firstFocusableRef : undefined}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center py-4 text-2xl lg:text-3xl font-semibold text-[var(--nav-text)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] rounded-lg px-2"
                      >
                        {displayItemNumbering && (
                          <span className="text-sm text-gray-400 pr-4 font-mono min-w-[3rem]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        )}
                        <span className="relative">
                          {item.label}
                          <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-[var(--accent)]"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* CTA Button */}
              {ctaLabel && ctaHref && (
                <motion.div 
                  className="mt-8 mb-8"
                  variants={ctaVariants}
                >
                  <Link
                    href={ctaHref}
                    onClick={onClose}
                    className="block w-full py-4 px-6 text-center rounded-lg bg-[var(--accent)] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                  >
                    {ctaLabel}
                  </Link>
                </motion.div>
              )}

              {/* Social Links */}
              {displaySocials && socialItems.length > 0 && (
                <motion.div
                  className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  {socialItems.map((social, index) => (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          delay: prefersReducedMotion ? 0 : (items.length * DEFAULTS.itemStagger) + (index * 0.05),
                        }
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
