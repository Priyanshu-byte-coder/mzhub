'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Clock } from 'lucide-react'
import { BlogMetadata } from '@/types'
import { useState } from 'react'

interface RecentPostsProps {
  posts: BlogMetadata[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const [isOpen, setIsOpen] = useState(true)

  if (posts.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 shadow-lg"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-4 text-lg font-semibold text-green-900 dark:text-green-100"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>Recent posts</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3"
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-3 bg-white dark:bg-green-900/20 rounded-lg hover:shadow-md transition-all border border-green-100 dark:border-green-800"
            >
              <h4 className="font-semibold text-sm mb-1 line-clamp-2 text-green-900 dark:text-green-100">
                {post.title}
              </h4>
              <p className="text-xs text-green-700 dark:text-green-300">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
