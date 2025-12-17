import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with MZhub to schedule a personalized demo. Discover how AI can help your religious institution preserve teachings and serve your community.',
    keywords: ['contact mzhub', 'spiritual ai demo', 'religious technology consultation', 'faith tech contact'],
    alternates: {
        canonical: 'https://mzhub.com/contact',
    },
    openGraph: {
        title: 'Contact MZhub - Schedule Your Demo',
        description: 'Get in touch with MZhub to schedule a personalized demo. Discover how AI can help your religious institution.',
        url: 'https://mzhub.com/contact',
        type: 'website',
        images: [{
            url: 'https://mzhub.com/og-image-contact.png',
            width: 1200,
            height: 630,
            alt: 'Contact MZhub - Schedule Your Demo'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact MZhub - Schedule Your Demo',
        description: 'Get in touch with MZhub to schedule a personalized demo. Discover how AI can help your religious institution.',
        images: ['https://mzhub.com/og-image-contact.png'],
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
