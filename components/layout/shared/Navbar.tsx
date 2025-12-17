'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Info, FolderOpen, BookOpen, Mail, Menu, X } from 'lucide-react'
import { MenuBar } from '@/components/ui/shared/glow-menu'
import { ThemeToggleButton, useThemeTransition } from '@/components/ui/shared/theme-toggle-button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [activeItem, setActiveItem] = useState<string>('Home')
    const [mounted, setMounted] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const { startTransition } = useThemeTransition()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Track scroll position for navbar animation
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll + blur page when any menu is open
    useEffect(() => {
        const anyMenuOpen = isMobileMenuOpen || isDesktopMenuOpen
        if (anyMenuOpen) {
            document.body.style.overflow = 'hidden'
            document.body.dataset.navOpen = 'true'
        } else {
            document.body.style.overflow = ''
            delete document.body.dataset.navOpen
        }

        return () => {
            document.body.style.overflow = ''
            delete document.body.dataset.navOpen
        }
    }, [isMobileMenuOpen, isDesktopMenuOpen])

    const sharedGlowGradient = 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'

    const menuItems = [
        {
            icon: Home,
            label: 'Home',
            href: '/',
            gradient: sharedGlowGradient,
            iconColor: 'text-blue-500'
        },
        {
            icon: Info,
            label: 'About',
            href: '/about',
            gradient: sharedGlowGradient,
            iconColor: 'text-purple-500'
        },
        {
            icon: FolderOpen,
            label: 'Projects',
            href: '/projects',
            gradient: sharedGlowGradient,
            iconColor: 'text-pink-500'
        },
        {
            icon: BookOpen,
            label: 'Blog',
            href: '/blog',
            gradient: sharedGlowGradient,
            iconColor: 'text-green-500'
        },
        {
            icon: Mail,
            label: 'Contact',
            href: '/contact',
            gradient: sharedGlowGradient,
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
        <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white dark:bg-[#050a16] border-b border-border/40 shadow-sm transition-colors">
            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between px-4">
                {/* Logo and Brand Name */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8">
                        {mounted && (
                            <Image
                                src={theme === 'dark' ? '/shared/mzhub-logo_w.svg' : '/shared/mzhub-logo.svg'}
                                alt="MZhub Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            />
                        )}
                    </div>
                    <span className="text-xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                        MZHub
                    </span>
                </Link>

                {/* Theme Toggle & Hamburger Menu */}
                <div className="flex items-center gap-2">
                    {mounted && (
                        <ThemeToggleButton
                            theme={theme as 'light' | 'dark'}
                            variant="circle"
                            start="top-right"
                            onClick={() => {
                                startTransition(() => {
                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                })
                            }}
                        />
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
            <div className="hidden md:flex items-center justify-between w-full px-4">
                {/* Logo and Brand Name - Always Visible */}
                <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                    <div className="relative w-10 h-10">
                        {mounted && (
                            <Image
                                src={theme === 'dark' ? '/shared/mzhub-logo_w.svg' : '/shared/mzhub-logo.svg'}
                                alt="MZhub Logo"
                                width={40}
                                height={40}
                                className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            />
                        )}
                    </div>
                    <span className="text-2xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                        MZHub
                    </span>
                </Link>

                {/* Navigation Menu - Center (Fades on scroll) */}
                <motion.div
                    className="flex-1 flex justify-center mx-8"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: scrollY > 80 ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: scrollY > 80 ? 'none' : 'auto' }}
                >
                    <MenuBar
                        items={menuItems}
                        activeItem={activeItem}
                        onItemClick={handleItemClick}
                    />
                </motion.div>

                {/* Theme Toggle - Extreme Right (Fades on scroll) */}
                <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: scrollY > 80 ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: scrollY > 80 ? 'none' : 'auto' }}
                >
                    {mounted && (
                        <ThemeToggleButton
                            theme={theme as 'light' | 'dark'}
                            variant="circle"
                            start="top-right"
                            onClick={() => {
                                startTransition(() => {
                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                })
                            }}
                        />
                    )}
                </motion.div>
            </div>

            {/* Floating Hamburger Menu (Desktop Only - Appears on Scroll) */}
            <AnimatePresence>
                {scrollY > 80 && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                        className="hidden md:flex fixed top-6 right-6 z-[60] items-center justify-center w-14 h-14 rounded-full bg-white/80 dark:bg-[#0f172a]/95 backdrop-blur-md border-2 border-border hover:border-primary/50 shadow-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isDesktopMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Desktop Menu Drawer (Appears on Scroll) */}
            <AnimatePresence>
                {isDesktopMenuOpen && scrollY > 80 && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="hidden md:block fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
                            onClick={() => setIsDesktopMenuOpen(false)}
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="hidden md:block fixed top-0 right-0 bottom-0 w-[400px] bg-white dark:bg-[#0f172a] border-l border-border shadow-2xl z-[60]"
                        >
                            <div className="flex flex-col h-full p-8">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-12">
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10">
                                            {mounted && (
                                                <Image
                                                    src={theme === 'dark' ? '/shared/mzhub-logo_w.svg' : '/shared/mzhub-logo.svg'}
                                                    alt="MZhub Logo"
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                        <span className="text-2xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                                            MZHub
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsDesktopMenuOpen(false)}
                                        className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6 text-foreground" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-2 flex-1">
                                    {menuItems.map((item) => {
                                        const Icon = item.icon
                                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

                                        return (
                                            <button
                                                key={item.href}
                                                onClick={() => {
                                                    router.push(item.href)
                                                    setIsDesktopMenuOpen(false)
                                                }}
                                                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isActive
                                                    ? 'bg-accent-gold/10 text-accent-gold dark:text-accent-gold'
                                                    : 'hover:bg-foreground/5 text-foreground'
                                                    }`}
                                            >
                                                <Icon className={`w-6 h-6 ${isActive ? item.iconColor : ''}`} />
                                                <span className="text-lg font-medium">{item.label}</span>
                                            </button>
                                        )
                                    })}
                                </nav>

                                {/* Theme Toggle Section */}
                                <div className="pt-6 border-t border-border">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-foreground">Theme</span>
                                        {mounted && (
                                            <ThemeToggleButton
                                                theme={theme as 'light' | 'dark'}
                                                variant="circle"
                                                start="top-right"
                                                onClick={() => {
                                                    startTransition(() => {
                                                        setTheme(theme === 'dark' ? 'light' : 'dark')
                                                    })
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

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
                            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white dark:bg-[#0f172a] border-l border-border shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2">
                                        <div className="relative w-8 h-8">
                                            {mounted && (
                                                <Image
                                                    src={theme === 'dark' ? '/shared/mzhub-logo_w.svg' : '/shared/mzhub-logo.svg'}
                                                    alt="MZhub Logo"
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-contain"
                                                />
                                            )}
                                        </div>
                                        <span className="text-xl font-bold font-serif bg-gradient-to-r from-secondary-light to-accent-gold dark:from-text-mist dark:to-accent-gold bg-clip-text text-transparent">
                                            MZHub
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
                                                    ? 'bg-accent-gold/10 text-accent-gold dark:text-accent-gold'
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
