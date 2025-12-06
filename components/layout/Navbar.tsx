'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Info, FolderOpen, BookOpen, Mail } from 'lucide-react'
import { MenuBar } from '@/components/ui/glow-menu'
import { Classic } from '@theme-toggles/react'
import '@theme-toggles/react/css/Classic.css'

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [activeItem, setActiveItem] = useState<string>('Home')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
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
                <div className="flex items-center">
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
            </div>
        </header>
    )
}
