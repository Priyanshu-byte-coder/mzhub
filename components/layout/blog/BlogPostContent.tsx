'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MDXContent } from './MDXContent'

interface BlogPostContentProps {
  content: string
  image?: string
  title: string
}

export function BlogPostContent({ content, image, title }: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-sm border border-accent-blue/10 dark:border-accent-gold/10 rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg"
    >
      {/* Featured Image */}
      {image && (
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = '/placeholder-blog.jpg'
            }}
          />
        </div>
      )}
      
      <MDXContent content={content} />
    </motion.article>
  )
}
