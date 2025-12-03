'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
    children: ReactNode
    className?: string
    id?: string
}

export default function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`py-16 md:py-24 ${className}`}
        >
            <div className="container-custom">
                {children}
            </div>
        </motion.section>
    )
}
