import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with MZHub to schedule a personalized demo. Discover how AI can help your religious institution preserve teachings and serve your community.',
    keywords: ['contact mzhub', 'spiritual ai demo', 'religious technology consultation', 'faith tech contact'],
    alternates: {
        canonical: 'https://mzhub.com/contact',
    },
    openGraph: {
        title: 'Contact MZHub - Schedule Your Demo',
        description: 'Get in touch with MZHub to schedule a personalized demo. Discover how AI can help your religious institution.',
        url: 'https://mzhub.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact MZHub - Schedule Your Demo',
        description: 'Get in touch with MZHub to schedule a personalized demo. Discover how AI can help your religious institution.',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
