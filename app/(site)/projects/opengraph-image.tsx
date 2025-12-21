import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'

export const runtime = 'edge'
export const alt = 'MZHub Projects - Success Stories from Faith Communities'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default async function Image() {
    return generateOGImage({
        title: 'Our Projects',
        description: 'Real implementations empowering faith communities worldwide',
        category: 'Success Stories',
    })
}
