import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'

export const runtime = 'edge'
export const alt = 'Contact MZHub - Get in Touch'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default async function Image() {
    return generateOGImage({
        title: 'Contact Us',
        description: 'Schedule a demo and discover how MZHub can help your faith community',
        category: 'Get in Touch',
    })
}
