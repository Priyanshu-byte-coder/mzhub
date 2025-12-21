import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'

export const runtime = 'edge'
export const alt = 'MZHub - Spiritual AI for Faith Communities'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default async function Image() {
    return generateOGImage({
        title: 'MZHub',
        description: 'Spiritual AI for Faith Communities',
        category: 'AI-Powered Platform',
    })
}
