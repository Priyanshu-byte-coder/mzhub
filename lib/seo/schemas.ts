/**
 * Schema.org Structured Data Generators
 * Generate JSON-LD schemas for various content types
 */

const SITE_URL = 'https://mzhub.com'
const SITE_NAME = 'MZhub'

/**
 * Generate Organization schema for homepage
 */
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        description: 'AI-Powered Spiritual Platforms for Religious Institutions',
        url: SITE_URL,
        logo: `${SITE_URL}/shared/mzhub-logo.png`,
        foundingDate: '2024',
        sameAs: [
            // Add your social media URLs here when available
            // 'https://twitter.com/mzhub',
            // 'https://linkedin.com/company/mzhub',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            url: `${SITE_URL}/contact`,
        },
    }
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        description: 'Extend your spiritual reach with AI. MZhub helps religious institutions, temples, and ashrams deliver personalized guidance while preserving their sacred teachings.',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    }
}

/**
 * Generate Article schema for blog posts
 */
interface ArticleSchemaProps {
    title: string
    description: string
    slug: string
    author: string
    publishedDate: string
    modifiedDate?: string
    image?: string
    category?: string
}

export function generateArticleSchema(props: ArticleSchemaProps) {
    const {
        title,
        description,
        slug,
        author,
        publishedDate,
        modifiedDate,
        image,
        category,
    } = props

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image: image || `${SITE_URL}/og-image-blog.png`,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/shared/mzhub-logo.png`,
            },
        },
        datePublished: publishedDate,
        dateModified: modifiedDate || publishedDate,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${slug}`,
        },
        ...(category && {
            articleSection: category,
        }),
    }
}

/**
 * Generate BreadcrumbList schema
 */
interface BreadcrumbItem {
    name: string
    path: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    }
}

/**
 * Generate VideoObject schema
 */
interface VideoSchemaProps {
    name: string
    description: string
    thumbnailUrl: string
    uploadDate: string
    contentUrl: string
    duration?: string
}

export function generateVideoSchema(props: VideoSchemaProps) {
    const { name, description, thumbnailUrl, uploadDate, contentUrl, duration } = props

    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl,
        uploadDate,
        contentUrl: `${SITE_URL}${contentUrl}`,
        ...(duration && { duration }),
    }
}

/**
 * Generate FAQPage schema
 */
interface FAQItem {
    question: string
    answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}
