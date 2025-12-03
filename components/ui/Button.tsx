'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center'

    const variants = {
        primary: 'bg-spiritual-indigo-600 hover:bg-spiritual-indigo-700 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-spiritual-gold-500 hover:bg-spiritual-gold-600 text-spiritual-indigo-900 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-spiritual-indigo-600 text-spiritual-indigo-600 hover:bg-spiritual-indigo-50'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...(props as any)}
        >
            {children}
        </motion.button>
    )
}
