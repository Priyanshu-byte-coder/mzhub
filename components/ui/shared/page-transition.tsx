'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const quotes = [
  "Extending spiritual reach through technology",
  "Preserving sacred teachings for generations",
  "Where tradition meets innovation",
  "Empowering spiritual communities",
  "Technology in service of faith"
]

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
}

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

export function PageTransition() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    setMounted(true)
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark' || theme === 'dark'

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={blackBox}
      style={{
        backgroundColor: isDark ? '#0f172a' : '#f1f5f9',
      }}
    >
      <motion.svg
        variants={textContainer}
        className="absolute z-[101] flex"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
          >
            <rect 
              className="w-full h-full" 
              fill={isDark ? '#0f172a' : '#f1f5f9'} 
            />
            <motion.rect
              variants={text}
              className="w-full h-full"
              fill={isDark ? '#334155' : '#cbd5e1'}
            />
          </pattern>
        </defs>
        
        {/* Main Title */}
        <text
          className="text-6xl md:text-8xl font-bold font-serif"
          textAnchor="middle"
          x="50%"
          y="45%"
          style={{ fill: "url(#pattern)" }}
        >
          MZHub
        </text>
        
        {/* Quote */}
        <text
          className="text-base md:text-xl"
          textAnchor="middle"
          x="50%"
          y="55%"
          style={{ fill: "url(#pattern)" }}
        >
          {randomQuote}
        </text>
      </motion.svg>
    </motion.div>
  )
}
