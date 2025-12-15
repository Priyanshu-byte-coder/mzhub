'use client'

import { motion } from 'framer-motion'
import { MDXContent } from './MDXContent'

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white dark:bg-secondary-dark border border-accent-blue/20 dark:border-accent-gold/20 rounded-2xl p-6 md:p-8 shadow-lg"
    >
      <MDXContent content={content} />
    </motion.div>
  )
}
