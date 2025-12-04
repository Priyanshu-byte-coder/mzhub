'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import GooeyNav from '../GooeyNav'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const [activeIndex, setActiveIndex] = useState(0)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/platform', label: 'Platform' },
        { href: '/community', label: 'Community' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ]

    const gooeyItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Platform', href: '/platform' },
        { label: 'Community', href: '/community' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ]

    // Update active index based on current pathname
    useEffect(() => {
        const index = gooeyItems.findIndex(item => {
            if (item.href === '/') {
                return pathname === '/'
            }
            return pathname.startsWith(item.href)
        })
        setActiveIndex(index >= 0 ? index : 0)
    }, [pathname])

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image 
                            src="/mzhub-logo.png" 
                            alt="MZhub Logo" 
                            width={48} 
                            height={48}
                            className="w-12 h-12 object-contain rounded-lg"
                            priority
                        />
                        <span className="text-2xl font-bold gradient-text">MZhub</span>
                    </Link>

                    {/* Desktop Navigation with GooeyNav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="bg-gradient-to-r from-primary-dark to-accent-gold rounded-full px-2 py-1">
                            <GooeyNav
                                items={gooeyItems}
                                particleCount={15}
                                particleDistances={[90, 10]}
                                particleR={100}
                                initialActiveIndex={activeIndex}
                                animationTime={600}
                                timeVariance={300}
                                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                            />
                        </div>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="container-custom py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-4 text-gray-700 hover:bg-primary-light rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <button className="btn-primary w-full">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
