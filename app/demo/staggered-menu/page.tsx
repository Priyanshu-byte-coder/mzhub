"use client"

import React, { useEffect, useState } from 'react'
import { Sun, Moon, Github, Twitter, Linkedin } from 'lucide-react'
import { useTheme } from 'next-themes'
import StaggeredMenu, {
  StaggeredMenuItem,
  StaggeredMenuSocialItem,
} from '@/components/StaggeredMenu'

const items: StaggeredMenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Platform', href: '/platform' },
  { label: 'Community', href: '/community' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socialItems: StaggeredMenuSocialItem[] = [
  { icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com' },
  { icon: <Github className="h-4 w-4" />, href: 'https://github.com' },
  { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com' },
]

const colors = ['#0f172a', '#1e293b', '#14b8a6']

export default function StaggeredMenuDemoPage() {
  const { theme, setTheme } = useTheme()
  const [reduceMotionSim, setReduceMotionSim] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (reduceMotionSim) root.classList.add('reduce-motion')
    else root.classList.remove('reduce-motion')
  }, [reduceMotionSim])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Staggered Menu Demo</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-white/20 px-3 py-2 text-sm flex items-center gap-2"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              Toggle Theme
            </button>
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={reduceMotionSim}
                onChange={(e) => setReduceMotionSim(e.target.checked)}
              />
              Prefers Reduced Motion (simulate)
            </label>
          </div>
        </header>

        <p className="text-slate-200 max-w-2xl">
          Click the “Menu” button to open the staggered, animated navigation. Toggle theme and reduced motion to verify
          accessibility and animation fallbacks.
        </p>

        <div className="mt-6">
          <StaggeredMenu
            position="right"
            colors={colors}
            items={items}
            socialItems={socialItems}
            displayItemNumbering
            logoUrl="/mzhub-logo.png"
            accentColor="#14b8a6"
            changeMenuColorOnOpen
            closeOnClickAway
          />
        </div>
      </div>
    </main>
  )
}
