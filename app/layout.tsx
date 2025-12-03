import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
        default: 'MZhub - AI-Powered Spiritual Platforms for Religious Institutions',
        template: '%s | MZhub'
    },
    description: 'Extend your spiritual reach with AI. MZhub helps religious institutions, temples, and ashrams deliver personalized guidance while preserving their sacred teachings.',
    keywords: ['spiritual technology', 'AI for religious institutions', 'temple technology', 'ashram platform', 'spiritual guidance AI', 'faith tech'],
    authors: [{ name: 'MZhub' }],
    creator: 'MZhub',
    publisher: 'MZhub',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mzhub.com',
        title: 'MZhub - AI-Powered Spiritual Platforms',
        description: 'Extend your spiritual reach with AI. Preserve sacred teachings while scaling personalized guidance.',
        siteName: 'MZhub',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZhub - AI-Powered Spiritual Platforms',
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
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans">
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
