'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { BlogPost } from '@/types'

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-neutral-light dark:bg-primary-dark">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <Image
          src={post.image || '/placeholder-blog.jpg'}
          alt={post.title}
          fill
          className="object-cover opacity-10"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/placeholder-blog.jpg'
          }}
        />
        <div className="absolute inset-0 bg-neutral-light/90 dark:bg-primary-dark/90" />
      </div>

      <div className="w-full lg:w-[73%] lg:ml-[27%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-blue dark:bg-accent-gold text-white dark:text-primary-dark text-sm font-semibold rounded-full">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-secondary-light dark:text-accent-gold">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-light/70 dark:text-text-mist/70">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
