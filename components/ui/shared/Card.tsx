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
            whileHover={hover ? { 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3, ease: "easeOut" }
            } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border dark:border-gray-700 rounded-xl shadow-lg p-6 md:p-8 ${className}`}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </motion.div>
    )
}
