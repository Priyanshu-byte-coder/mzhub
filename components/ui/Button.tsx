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
        primary: 'bg-primary-dark hover:bg-primary-dark/90 text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-accent-gold hover:bg-accent-gold/90 text-neutral-dark shadow-lg hover:shadow-xl',
        outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-light'
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
