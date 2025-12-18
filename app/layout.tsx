import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/shared/Navbar'
import FooterNew from '@/components/layout/shared/FooterNew'
import { ThemeProvider } from '@/components/layout/shared/theme-provider'
import { TransitionProvider } from '@/components/layout/shared/transition-provider'
import { LoadingScreen } from '@/components/ui/shared/loading-screen'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://MZHub.com'),
    title: {
        default: 'MZHub - AI-Powered Spiritual Platforms for Religious Institutions',
        template: '%s | MZHub'
    },
    description: 'Extend your spiritual reach with AI. MZHub helps religious institutions, temples, and ashrams deliver personalized guidance while preserving their sacred teachings.',
    keywords: ['spiritual technology', 'AI for religious institutions', 'temple technology', 'ashram platform', 'spiritual guidance AI', 'faith tech'],
    authors: [{ name: 'MZHub' }],
    creator: 'MZHub',
    publisher: 'MZHub',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://MZHub.com',
        title: 'MZHub - AI-Powered Spiritual Platforms',
        description: 'Extend your spiritual reach with AI. Preserve sacred teachings while scaling personalized guidance.',
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZHub - AI-Powered Spiritual Platforms',
        description: 'Extend your spiritual reach with AI. Preserve sacred teachings while scaling personalized guidance.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden`} suppressHydrationWarning>
            <body className="font-sans overflow-x-hidden">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <LoadingScreen />
                    <TransitionProvider>
                        <Navbar />
                        <main className="min-h-screen">
                            {children}
                        </main>
                        <FooterNew />
                    </TransitionProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
