import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore our case studies of AI-powered spiritual platforms transforming religious institutions worldwide. Real-world implementations of faith technology.',
    keywords: ['spiritual ai projects', 'religious technology case studies', 'temple ai implementation', 'faith tech portfolio'],
    alternates: {
        canonical: 'https://mzhub.com/projects',
    },
    openGraph: {
        title: 'MZhub Projects - Transforming Faith Through Technology',
        description: 'Explore our case studies of AI-powered spiritual platforms transforming religious institutions worldwide.',
        url: 'https://mzhub.com/projects',
        type: 'website',
        images: [{
            url: 'https://mzhub.com/og-image-projects.png',
            width: 1200,
            height: 630,
            alt: 'MZhub Projects - Religious Technology Case Studies'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZhub Projects - Transforming Faith Through Technology',
        description: 'Explore our case studies of AI-powered spiritual platforms transforming religious institutions worldwide.',
        images: ['https://mzhub.com/og-image-projects.png'],
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
