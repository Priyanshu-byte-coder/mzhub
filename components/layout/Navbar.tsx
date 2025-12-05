'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import GooeyNav from '../GooeyNav'
import StaggeredMenu from './StaggeredMenu'
import { ToggleTheme } from '../toggle-theme'

export default function Navbar() {
    const pathname = usePathname()
    const { theme } = useTheme()
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { label: 'Home', link: '/', ariaLabel: 'Go to home page' },
        { label: 'About', link: '/about', ariaLabel: 'Learn about us' },
        { label: 'Platform', link: '/platform', ariaLabel: 'View our platform' },
        { label: 'Community', link: '/community', ariaLabel: 'Join our community' },
        { label: 'Blog', link: '/blog', ariaLabel: 'Read our blog' },
        { label: 'Contact', link: '/contact', ariaLabel: 'Get in touch' },
    ]

    const socialItems = [
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'Twitter', link: 'https://twitter.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' },
        { label: 'Email', link: 'mailto:contact@mzhub.com' },
    ]

    const gooeyItems = useMemo(() => ([
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Platform', href: '/platform' },
        { label: 'Community', href: '/community' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ]), [])

    // Update active index based on current pathname
    useEffect(() => {
        const index = gooeyItems.findIndex(item => {
            if (item.href === '/') {
                return pathname === '/'
            }
            return pathname.startsWith(item.href)
        })
        setActiveIndex(index >= 0 ? index : 0)
    }, [pathname, gooeyItems])

    return (
        <>
            {/* StaggeredMenu - Full viewport overlay with integrated header */}
            <StaggeredMenu
                position="right"
                items={navLinks}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={false}
                logoUrl="/mzhub-logo.svg"
                menuButtonColor={theme === 'dark' ? '#FFD700' : '#1a202c'}
                openMenuButtonColor={theme === 'dark' ? '#FFD700' : '#1a202c'}
                changeMenuColorOnOpen={false}
                colors={['rgba(57, 69, 126, 0.15)', 'rgba(215, 180, 106, 0.12)']}
                accentColor="#D7B46A"
                isFixed={true}
                closeOnClickAway={true}
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
                onMenuStateChange={setIsMenuOpen}
            />
            {/* Theme Toggle - only visible when menu is open */}
            {isMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                        position: 'fixed', 
                        top: '2rem', 
                        right: '8rem', 
                        zIndex: 50 
                    }}
                >
                    <ToggleTheme />
                </motion.div>
            )}
        </>
    )
}
