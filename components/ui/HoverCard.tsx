"use client"

import type { ReactNode } from 'react'

interface HoverCardProps {
    icon: ReactNode
    title: string
    description: string
    step: string
}

export default function HoverCard({ icon, title, description, step }: HoverCardProps) {
    return (
        <div className="group relative w-full h-[280px] sm:h-[300px]">
            {/* Card Container */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {/* Slide 1 - Icon and Title (Default View - Visible) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out transform translate-y-0 group-hover:translate-y-[-100%] z-10">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#fafbff] to-[#f5f7ff] dark:from-[#1e2540] dark:via-[#2a3150] dark:to-[#323a5a] rounded-2xl shadow-lg border-2 border-secondary-light/40 dark:border-accent-gold/30 hover:border-secondary-light/60 dark:hover:border-accent-gold/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300">
                        <div className="text-6xl sm:text-7xl mb-3 sm:mb-4">{icon}</div>
                        <div className="text-accent-gold dark:text-accent-gold font-bold text-xs sm:text-sm mb-2">Step {step}</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary-light dark:text-accent-gold px-4 text-center">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Slide 2 - Description (Hover View - Hidden Below) */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out transform translate-y-[100%] group-hover:translate-y-0">
                    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white dark:bg-[#1a1f3a] rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-secondary-light/20 dark:border-accent-gold/30">
                        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-secondary-light dark:text-accent-gold text-center">
                            {title}
                        </h3>
                        <p className="text-center text-sm sm:text-base text-secondary-light/80 dark:text-text-mist/90 leading-relaxed">
                            {description}
                        </p>
                        {/* Bottom accent line */}
                        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 h-1 bg-gradient-to-r from-secondary-light to-accent-gold dark:from-accent-gold dark:to-secondary-light rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
