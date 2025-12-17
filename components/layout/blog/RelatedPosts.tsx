'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, FileText } from 'lucide-react'
import { BlogMetadata } from '@/types'
import { useState } from 'react'

interface RelatedPostsProps {
  posts: BlogMetadata[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const [isOpen, setIsOpen] = useState(true)

  // Always show the box, even if no posts
  return (
    <div className="bg-white dark:bg-secondary-dark border border-accent-blue/20 dark:border-accent-gold/20 rounded-2xl p-6 shadow-lg mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 text-lg font-semibold text-secondary-light dark:text-text-mist"
      >
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-accent-blue dark:text-accent-gold" />
          <span>Related posts</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="space-y-3">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-3 bg-neutral-light dark:bg-primary-dark rounded-lg hover:shadow-md transition-all border border-accent-blue/20 dark:border-accent-gold/20"
              >
                <h4 className="font-semibold text-sm mb-1 line-clamp-2 text-secondary-light dark:text-accent-gold">
                  {post.title}
                </h4>
                <p className="text-xs text-secondary-light/70 dark:text-text-mist/70">{post.readTime}</p>
              </Link>
            ))
          ) : (
            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70 text-center py-4">
              No related posts available
            </p>
          )}
        </div>
      )}
    </div>
  )
}
