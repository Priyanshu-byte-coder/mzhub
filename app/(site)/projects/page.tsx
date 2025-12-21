import type { Metadata } from 'next'
import { absoluteUrl } from '@/lib/siteUrl'
import ProjectsClient from '@/components/layout/projects/ProjectsClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateOrganizationSchema, generateWebPageSchema } from '@/lib/seo/schemas'

export const metadata: Metadata = {
  title: 'Our Projects - Faith Technology Case Studies | MZHub',
  description: 'Discover how MZHub helps religious institutions worldwide preserve sacred teachings and connect with communities through AI technology. Featured case studies and success stories.',
  keywords: ['faith technology projects', 'spiritual AI case studies', 'religious institution technology', 'digital transformation', 'spiritual guidance systems'],
  alternates: {
    canonical: absoluteUrl('/projects'),
  },
  openGraph: {
    title: 'MZHub Projects - Transforming Faith Through Technology',
    description: 'Real-world examples of faith communities powered by MZHub AI technology',
    type: 'website',
    siteName: 'MZHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MZHub Projects - Case Studies',
    description: 'See how we help religious institutions preserve teachings worldwide',
  },
}

export default function ProjectsPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={[
          generateOrganizationSchema(),
          generateWebPageSchema(
            {
              name: 'Our Projects - Faith Technology Case Studies | MZHub',
              description: 'Discover how MZHub helps religious institutions worldwide preserve sacred teachings and connect with communities through AI technology.',
              url: '/projects',
            },
            absoluteUrl('')
          ),
        ]}
      />
      <ProjectsClient />
    </>
  )
}
