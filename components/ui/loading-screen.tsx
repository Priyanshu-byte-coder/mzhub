'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function LoadingScreen() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(prev => {
          const next = prev + 1
          return next > 100 ? 100 : next
        })
      }, 20)

      return () => clearTimeout(timer)
    } else if (count === 100) {
      const hideTimer = setTimeout(() => {
        setIsLoading(false)
      }, 800)
      
      return () => clearTimeout(hideTimer)
    }
  }, [count])

  const isDark = resolvedTheme === 'dark'
  const bgColor = isDark ? '#050a16' : '#ffffff'
  const textColor = isDark ? '#ffffff' : '#1e293b'
  const mutedColor = isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(30, 41, 59, 0.6)'

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="container-custom px-4">
            <div className="max-w-7xl mx-auto">
              {/* Counter - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-12 left-8 md:left-16"
                style={{ color: textColor }}
              >
                <span className="text-2xl md:text-3xl font-light italic">
                  {count} - 100
                </span>
              </motion.div>

              {/* Logo - Top Right */}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-12 right-8 md:right-16"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                      src={isDark ? '/mzhub-logo_w.svg' : '/mzhub-logo.svg'}
                      alt="MZhub Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              )}

              {/* Main Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-left"
              >
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8"
                  style={{ color: textColor }}
                >
                  MZHUB
                  <br />
                  <span className="text-accent-gold">SPIRITUAL</span> PLATFORM
                  <br />
                  IS LOADING
                </h1>
              </motion.div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-left"
              >
                <p className="text-sm md:text-base mb-2" style={{ color: mutedColor }}>
                  Preparing your spiritual experience
                </p>
                <p className="text-sm md:text-base" style={{ color: mutedColor }}>
                  Please wait a moment...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
