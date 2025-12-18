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
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZhub Projects - Transforming Faith Through Technology',
        description: 'Explore our case studies of AI-powered spiritual platforms transforming religious institutions worldwide.',
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
