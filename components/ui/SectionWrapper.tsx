'use client'

import { ReactNode } from 'react'

interface SectionWrapperProps {
    children: ReactNode
    className?: string
    id?: string
    fullWidth?: boolean
}

export default function SectionWrapper({ children, className = '', id, fullWidth = false }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 ${className}`}
        >
            {fullWidth ? children : (
                <div className="container-custom">
                    {children}
                </div>
            )}
        </section>
    )
}
