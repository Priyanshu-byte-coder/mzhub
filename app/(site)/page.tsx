import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebSiteSchema, generateVideoSchema, generateServiceSchema } from '@/lib/seo/schemas'
import { Metadata } from 'next'
import HomeClient from '@/components/layout/home/HomeClient'

// Generate metadata on the server
export const metadata: Metadata = {
    title: 'MZHub - Spiritual Guru AI | Faith-Based AI Platform',
    description: 'Empowering faith communities through AI-powered spiritual technology. Join religious institutions worldwide who are using MZHub to preserve their teachings and serve their communities better.',
    keywords: ['spiritual AI', 'faith technology', 'religious institutions', 'AI for temples', 'AI for churches', 'AI for mosques'],
    openGraph: {
        title: 'MZHub - Spiritual Guru AI',
        description: 'Empowering faith communities through AI-powered spiritual technology',
        type: 'website',
        url: 'https://mzhub.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MZHub - Spiritual Guru AI',
        description: 'Empowering faith communities through AI-powered spiritual technology',
    }
}

export default function Home() {
    // Generate structured data schemas on the server
    const organizationSchema = generateOrganizationSchema()
    const websiteSchema = generateWebSiteSchema()
    const videoSchema = generateVideoSchema({
        name: 'MZHub : AI Powered Spiritual Platform',
        description: 'Empowering faith communities through AI-powered spiritual technology',
        thumbnailUrl: 'https://mzhub.com/og-image-home.png',
        uploadDate: '2024-12-01',
        contentUrl: '/home/video/mzhub.mp4',
    })
    const serviceSchema = generateServiceSchema([
        {
            name: 'AI Spiritual Chatbot Platform',
            description: 'Custom AI-powered chatbots trained on sacred texts and teachings to provide personalized spiritual guidance to devotees 24/7.',
            serviceType: 'Software Application',
            areaServed: 'Worldwide',
        },
        {
            name: 'Content Management System for Religious Institutions',
            description: 'Comprehensive CMS for managing sacred teachings, sermons, events, and community content with multilingual support.',
            serviceType: 'Software Application',
            areaServed: 'Worldwide',
        },
        {
            name: 'Community Engagement Tools',
            description: 'Digital tools for religious institutions to connect with and serve their communities through prayer requests, donations, and event management.',
            serviceType: 'Software Application',
            areaServed: 'Worldwide',
        },
        {
            name: 'Analytics & Insights Dashboard',
            description: 'Real-time analytics and insights on community engagement, spiritual inquiries, and content performance for religious leaders.',
            serviceType: 'Software Application',
            areaServed: 'Worldwide',
        },
    ])

    return (
        <div>
            {/* Structured Data - Server-rendered */}
            <JsonLd data={organizationSchema} />
            <JsonLd data={websiteSchema} />
            <JsonLd data={videoSchema} />
            <JsonLd data={serviceSchema} />

            {/* Client-side interactive content */}
            <HomeClient />
        </div>
    )
}
