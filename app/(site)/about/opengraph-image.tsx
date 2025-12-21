import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'

export const runtime = 'edge'
export const alt = 'About MZHub - Our Mission and Values'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default async function Image() {
    return generateOGImage({
        title: 'About MZHub',
        description: 'Technology in Service of Faith',
        category: 'Our Story',
    })
}
