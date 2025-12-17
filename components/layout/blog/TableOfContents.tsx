'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, List } from 'lucide-react'

interface TableOfContentsProps {
  content: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [isOpen, setIsOpen] = useState(true)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const matches = Array.from(content.matchAll(headingRegex))
    
    const extractedHeadings = matches.map((match) => {
      const text = match[2]
        .replace(/\\/g, '')
        .replace(/\*/g, '')
        .replace(/`/g, '')
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
        .trim()
      
      return {
        id: slugify(text),
        text: text,
        level: match[1].length,
      }
    }).filter(h => h.level <= 3) // Show h1, h2, and h3

    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div
      className="sticky top-24 bg-white dark:bg-secondary-dark border border-accent-blue/20 dark:border-accent-gold/20 rounded-2xl p-6 shadow-lg z-10"
      style={{ position: 'sticky', top: '6rem' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 text-lg font-semibold"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-accent-blue dark:text-accent-gold" />
          <span className="text-secondary-light dark:text-text-mist">Table of contents</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <nav className="space-y-2 max-h-[60vh] overflow-y-auto">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className={`block text-sm transition-colors py-1 ${
                activeId === heading.id
                  ? 'text-accent-blue dark:text-accent-gold font-semibold'
                  : 'text-secondary-light/70 dark:text-text-mist/70 hover:text-accent-blue dark:hover:text-accent-gold'
              } ${
                heading.level === 1 ? '' : heading.level === 2 ? 'pl-4' : 'pl-8'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}
