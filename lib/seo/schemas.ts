import type { WithContext, Organization, Service, Article, FAQPage, BreadcrumbList, WebPage, WebSite } from 'schema-dts'
import { getSiteUrl } from '@/lib/siteUrl'
import type { ServiceInfo, FAQItem, BreadcrumbItem, PageInfo } from '@/types/schema-types'
import type { BlogPost } from '@/types'

/**
 * Generates Organization schema for MZHub
 * This should be included on all major pages
 */
export function generateOrganizationSchema(): WithContext<Organization> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MZHub',
        description: 'AI-powered spiritual guidance platform helping religious institutions preserve teachings and connect with communities.',
        url: getSiteUrl(),
        logo: 'https://mzhub.com/logo.png',
        email: 'contact@mzhub.com',
        telephone: '+1-555-123-4567',
        foundingDate: '2024',
        sameAs: [
            // Add social media profiles when available
            // 'https://linkedin.com/company/mzhub',
            // 'https://twitter.com/mzhub',
        ],
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            // Add full address when available
        },
    }
}

/**
 * Generates Service schema for MZHub's platform capabilities
 * @param services - Array of service information objects
 */
export function generateServiceSchema(services: ServiceInfo[]): WithContext<Service>[] {
    const baseProvider: Organization = {
        '@type': 'Organization',
        name: 'MZHub',
        url: getSiteUrl(),
    }

    return services.map((service) => ({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: baseProvider,
        serviceType: service.category || 'Technology Service',
        areaServed: {
            '@type': 'Place',
            name: 'Worldwide',
        },
    }))
}

/**
 * Generates Article/BlogPosting schema for blog posts
 * @param post - Blog post data
 * @param siteUrl - Base site URL
 */
export function generateArticleSchema(post: BlogPost, siteUrl: string): WithContext<Article> {
    const articleUrl = `${siteUrl}/blog/${post.slug}`
    const imageUrl = post.image ? `${siteUrl}${post.image}` : `${siteUrl}${post.thumbnail}`

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: imageUrl,
        datePublished: post.date,
        dateModified: post.date, // Use same as published if no modified date
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'MZHub',
            logo: {
                '@type': 'ImageObject',
                url: `${getSiteUrl()}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl,
        },
        keywords: post.tags?.join(', ') || '',
    }
}

/**
 * Generates FAQPage schema
 * @param faqs - Array of FAQ items
 */
export function generateFAQPageSchema(faqs: FAQItem[]): WithContext<FAQPage> {
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

/**
 * Generates BreadcrumbList schema
 * @param items - Array of breadcrumb items
 * @param siteUrl - Base site URL
 */
export function generateBreadcrumbListSchema(
    items: BreadcrumbItem[],
    siteUrl: string
): WithContext<BreadcrumbList> {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.url}`,
        })),
    }
}

/**
 * Generates WebPage schema
 * @param page - Page information
 * @param siteUrl - Base site URL
 */
export function generateWebPageSchema(page: PageInfo, siteUrl: string): WithContext<WebPage> {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: page.name,
        description: page.description,
        url: `${siteUrl}${page.url}`,
        isPartOf: {
            '@type': 'WebSite',
            name: 'MZHub',
            url: siteUrl,
        },
        dateModified: page.dateModified,
    }
}

/**
 * Generates WebSite schema
 * @param siteUrl - Base site URL
 */
export function generateWebSiteSchema(siteUrl: string): WithContext<WebSite> {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'MZHub',
        description: 'AI-powered spiritual guidance platform for religious institutions',
        url: siteUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/search?q={search_term_string}`,
            },
        },
    }
}
