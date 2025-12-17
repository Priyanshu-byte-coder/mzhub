'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogMetadata } from '@/types'

interface BlogCardProps {
  post: BlogMetadata
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white dark:bg-secondary-dark border border-accent-blue/20 dark:border-accent-gold/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent-blue/20 dark:hover:shadow-accent-gold/20 transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-muted">
            <Image
              src={post.image || '/placeholder-blog.jpg'}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-blog.jpg'
              }}
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 bg-transparent border-2 border-accent-blue dark:border-accent-gold text-accent-blue dark:text-accent-gold text-xs font-semibold rounded-full backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-4 text-xs text-secondary-light/60 dark:text-text-mist/60 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-secondary-light dark:text-accent-gold group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-secondary-light/70 dark:text-text-mist text-sm mb-4 line-clamp-3 flex-1">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent-blue/10 dark:bg-accent-gold/10 text-accent-blue dark:text-accent-gold text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More */}
            <div className="flex items-center text-accent-blue dark:text-accent-gold font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
