'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hover ? { y: -5 } : {}}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-xl shadow-lg p-6 md:p-8 ${className}`}
        >
            {children}
        </motion.div>
    )
}
