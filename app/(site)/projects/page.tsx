import type { Metadata } from 'next'
import ProjectsClient from '@/components/layout/projects/ProjectsClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateServiceSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Projects - MZHub',
  description: 'Explore our case studies of religious institutions we\'ve helped transform digitally with AI-powered spiritual platforms. See real examples of temples, churches, and spiritual centers using MZhub.',
  keywords: ['spiritual AI case studies', 'religious technology projects', 'temple digital transformation', 'church AI platform', 'faith tech examples'],
  alternates: {
    canonical: 'https://mzhub.com/projects',
  },
  openGraph: {
    title: 'Projects - Transforming Faith Through Technology',
    description: 'Explore our case studies of religious institutions we\'ve helped transform digitally with AI-powered spiritual platforms.',
    url: 'https://mzhub.com/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Transforming Faith Through Technology',
    description: 'Explore our case studies of religious institutions we\'ve helped transform digitally with AI-powered spiritual platforms.',
  },
}

export default function ProjectsPage() {
  // Generate service schema for project delivery/implementation services
  const serviceSchema = generateServiceSchema([
    {
      name: 'Custom AI Platform Development',
      description: 'End-to-end development of custom AI-powered spiritual platforms tailored to each religious institution\'s unique teachings, traditions, and community needs.',
      serviceType: 'Software Development',
      areaServed: 'Worldwide',
    },
    {
      name: 'Legacy System Integration',
      description: 'Seamless integration of AI spiritual guidance systems with existing temple management software, donation platforms, and community tools.',
      serviceType: 'Integration Service',
      areaServed: 'Worldwide',
    },
    {
      name: 'Ongoing Platform Maintenance & Support',
      description: 'Continuous technical support, platform updates, and content refinement to ensure optimal performance and spiritual accuracy.',
      serviceType: 'Maintenance Service',
      areaServed: 'Worldwide',
    },
  ])

  return (
    <>
      {/* Structured Data - Server-rendered */}
      <JsonLd data={serviceSchema} />

      <ProjectsClient />
    </>
  )
}

