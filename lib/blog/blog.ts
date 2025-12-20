import { BlogPost, BlogMetadata } from '@/types'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogMetadata[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || '',
          tags: data.tags || [],
          thumbnail: data.thumbnail,
          image: data.image,
          readTime: data.readTime,
        } as BlogMetadata
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      thumbnail: data.thumbnail,
      image: data.image,
      content,
      readTime: data.readTime,
    } as BlogPost
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error)
    return null
  }
}
