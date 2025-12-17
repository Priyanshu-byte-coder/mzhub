/**
 * SEO Utility Functions
 * Centralized helpers for generating SEO-related metadata across the site
 */

const SITE_URL = 'https://mzhub.com'
const SITE_NAME = 'MZhub'

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
    // Remove trailing slash except for root
    const cleanPath = path === '/' ? path : path.replace(/\/$/, '')
    return `${SITE_URL}${cleanPath}`
}

/**
 * Get Open Graph image path for a specific page
 */
export function getOpenGraphImage(page: 'home' | 'about' | 'projects' | 'blog' | 'contact'): string {
    const imageMap = {
        home: '/og-image-home.png',
        about: '/og-image-about.png',
        projects: '/og-image-projects.png',
        blog: '/og-image-blog.png',
        contact: '/og-image-contact.png',
    }
    return `${SITE_URL}${imageMap[page]}`
}

/**
 * Truncate description to optimal length for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 155): string {
    if (text.length <= maxLength) return text

    // Find last complete word within limit
    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')

    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
}

/**
 * Generate complete metadata object for a page
 */
interface PageMetadata {
    title: string
    description: string
    path: string
    ogImage?: 'home' | 'about' | 'projects' | 'blog' | 'contact'
    keywords?: string[]
    type?: 'website' | 'article'
    publishedTime?: string
    modifiedTime?: string
}

export function generatePageMetadata(config: PageMetadata) {
    const {
        title,
        description,
        path,
        ogImage = 'home',
        keywords = [],
        type = 'website',
        publishedTime,
        modifiedTime,
    } = config

    const canonical = getCanonicalUrl(path)
    const ogImageUrl = getOpenGraphImage(ogImage)
    const truncatedDesc = truncateDescription(description)

    return {
        title,
        description: truncatedDesc,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description: truncatedDesc,
            url: canonical,
            siteName: SITE_NAME,
            type,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: truncatedDesc,
            images: [ogImageUrl],
        },
    }
}

/**
 * Common keywords used across the site
 */
export const COMMON_KEYWORDS = [
    'spiritual technology',
    'AI for religious institutions',
    'temple technology',
    'ashram platform',
    'spiritual guidance AI',
    'faith tech',
    'religious AI platform',
    'digital spirituality',
]
