'use client'

import { motion } from 'framer-motion'
import { MDXContent } from './MDXContent'

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white/80 dark:bg-secondary-dark/80 backdrop-blur-sm border border-accent-blue/10 dark:border-accent-gold/10 rounded-2xl p-6 md:p-10 lg:p-12 shadow-lg"
    >
      <MDXContent content={content} />
    </motion.article>
  )
}
