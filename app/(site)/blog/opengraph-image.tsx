import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'

export const runtime = 'edge'
export const alt = 'MZHub Blog - Insights on Faith and Technology'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default async function Image() {
    return generateOGImage({
        title: 'Blog',
        description: 'Insights at the intersection of faith and technology',
        category: 'Articles',
    })
}
