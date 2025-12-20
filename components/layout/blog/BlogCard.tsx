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
  // Determine if card should be on left or right (zig-zag pattern)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`w-full max-w-[950px] h-[600px] ${isEven ? 'mr-auto' : 'ml-auto'}`}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className={`group bg-white dark:bg-secondary-dark border border-accent-blue/20 dark:border-accent-gold/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent-blue/20 dark:hover:shadow-accent-gold/20 transition-all duration-300 h-full flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Image - 50% width */}
          <div className="relative w-1/2 overflow-hidden bg-muted">
            <Image
              src={post.thumbnail || post.image || '/placeholder-blog.jpg'}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/placeholder-blog.jpg'
              }}
            />
          </div>

          {/* Content - 50% width */}
          <div className="w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-secondary-light/60 dark:text-text-mist/60 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary-light dark:text-accent-gold group-hover:text-accent-blue dark:group-hover:text-accent-gold/80 transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-secondary-light/70 dark:text-text-mist text-base mb-6 line-clamp-4 flex-1">
              {post.description}
            </p>

            {/* Read More */}
            <div className="flex items-center text-accent-blue dark:text-accent-gold font-semibold text-base group-hover:gap-2 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
