import { generateOGImage, OG_IMAGE_SIZE } from '@/lib/seo/og-image'
import { getBlogPost } from '@/lib/blog/blog'

export const runtime = 'edge'
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        return []
    }

    return [
        {
            id: params.slug,
            alt: post.title,
            contentType: 'image/png',
        },
    ]
}

export default async function Image({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        return generateOGImage({
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found',
            category: 'Error',
        })
    }

    return generateOGImage({
        title: post.title,
        description: post.description,
        category: 'Blog Post',
    })
}
