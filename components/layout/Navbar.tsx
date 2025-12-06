'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Info, FolderOpen, BookOpen, Mail, Menu, X } from 'lucide-react'
import { MenuBar } from '@/components/ui/glow-menu'
import { Classic } from '@theme-toggles/react'
import { motion, AnimatePresence } from 'framer-motion'
import '@theme-toggles/react/css/Classic.css'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [activeItem, setActiveItem] = useState<string>('Home')
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    const menuItems = [
        {
            icon: Home,
            label: 'Home',
            href: '/',
            gradient: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            iconColor: 'text-blue-500'
        },
        {
            icon: Info,
            label: 'About',
            href: '/about',
            gradient: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            iconColor: 'text-purple-500'
        },
        {
            icon: FolderOpen,
            label: 'Projects',
            href: '/projects',
            gradient: 'radial-gradient(circle at center, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
            iconColor: 'text-pink-500'
        },
        {
            icon: BookOpen,
            label: 'Blog',
            href: '/blog',
            gradient: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.5) 0%, transparent 70%)',
            iconColor: 'text-green-500'
        },
        {
            icon: Mail,
            label: 'Contact',
            href: '/contact',
            gradient: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.5) 0%, transparent 70%)',
            iconColor: 'text-amber-500'
        }
    ]

    // Update active item based on current pathname
    useEffect(() => {
        const currentItem = menuItems.find(item => {
            if (item.href === '/') {
                return pathname === '/'
            }
            return pathname.startsWith(item.href)
        })
        if (currentItem) {
            setActiveItem(currentItem.label)
        }
    }, [pathname])

    const handleItemClick = (label: string) => {
        const item = menuItems.find(i => i.label === label)
        if (item) {
            router.push(item.href)
            setActiveItem(label)
        }
    }

    const handleMobileNavClick = (href: string) => {
        router.push(href)
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between">
                {/* Logo and Brand Name */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8">
                        {mounted && (
                            <Image
                                src={theme === 'dark' ? '/mzhub-logo_w.svg' : '/mzhub-logo.svg'}
                                alt="MZhub Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            />
                        )}
                    </div>
                    <span className="text-xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                        MZhub
                    </span>
                </Link>

                {/* Theme Toggle & Hamburger Menu */}
                <div className="flex items-center gap-2">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            <Classic
                                duration={750}
                                toggled={theme === 'dark'}
                                toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                {...({} as any)}
                            />
                        </button>
                    )}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between gap-4">
                {/* Logo and Brand Name - Left */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10">
                        {mounted && (
                            <Image
                                src={theme === 'dark' ? '/mzhub-logo_w.svg' : '/mzhub-logo.svg'}
                                alt="MZhub Logo"
                                width={40}
                                height={40}
                                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            />
                        )}
                    </div>
                    <span className="text-2xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                        MZhub
                    </span>
                </Link>

                {/* Navigation Menu - Center */}
                <div className="flex-1 flex justify-center">
                    <MenuBar
                        items={menuItems}
                        activeItem={activeItem}
                        onItemClick={handleItemClick}
                    />
                </div>

                {/* Theme Toggle - Right */}
                {mounted && (
                    <div className="scale-125">
                        <Classic
                            duration={750}
                            toggled={theme === 'dark'}
                            toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            {...({} as any)}
                        />
                    </div>
                )}
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-background border-l border-border shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-8">
                                            {mounted && (
                                                <Image
                                                    src={theme === 'dark' ? '/mzhub-logo_w.svg' : '/mzhub-logo.svg'}
                                                    alt="MZhub Logo"
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                        <span className="text-xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                                            MZhub
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6 text-foreground" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2">
                                    {menuItems.map((item) => {
                                        const Icon = item.icon
                                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

                                        return (
                                            <button
                                                key={item.href}
                                                onClick={() => handleMobileNavClick(item.href)}
                                                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'hover:bg-foreground/5 text-foreground'
                                                    }`}
                                            >
                                                <Icon className={`w-5 h-5 ${isActive ? item.iconColor : ''}`} />
                                                <span className="text-lg font-medium">{item.label}</span>
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
