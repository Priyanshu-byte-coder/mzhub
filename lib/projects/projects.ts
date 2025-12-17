import { Project, ProjectMetadata } from '@/types'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): ProjectMetadata[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allProjectsData = fileNames
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
          category: data.category || '',
          tags: data.tags || [],
          image: data.image,
          featured: data.featured || false,
        } as ProjectMetadata
      })

    return allProjectsData
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export function getProject(slug: string): Project | null {
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
      category: data.category || '',
      tags: data.tags || [],
      image: data.image,
      gallery: data.gallery || [],
      link: data.link,
      github: data.github,
      content,
      featured: data.featured || false,
    } as Project
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error)
    return null
  }
}
