import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/shared/Navbar'
import FooterNew from '@/components/layout/shared/FooterNew'
import { ThemeProvider } from '@/components/layout/shared/theme-provider'
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
    metadataBase: new URL('https://mzhub.com'),
    title: {
        default: 'MZHub - Spiritual AI for Religious Institutions',
        template: '%s | MZHub'
    },
    description: 'Trusted by 50+ faith communities worldwide. AI-powered spiritual guidance platform helping temples, churches, and mosques preserve sacred teachings while serving modern seekers with 24/7 multilingual support.',
    keywords: ['spiritual technology', 'AI for religious institutions', 'temple technology', 'ashram platform', 'spiritual guidance AI', 'faith tech'],
    authors: [{ name: 'MZHub' }],
    creator: 'MZHub',
    publisher: 'MZHub',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mzhub.com',
        title: 'MZHub - Spiritual AI for Religious Institutions',
        description: 'Trusted by 50+ faith communities. AI-powered spiritual guidance preserving sacred teachings with 24/7 multilingual support.',
        siteName: 'MZHub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZHub - Spiritual AI for Religious Institutions',
        description: 'Trusted by 50+ faith communities. AI-powered spiritual guidance preserving sacred teachings with 24/7 multilingual support.',
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
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <FooterNew />
                </ThemeProvider>
            </body>
        </html>
    )
}
/*end*/