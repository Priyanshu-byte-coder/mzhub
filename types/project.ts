export interface Project {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  gallery?: string[]
  link?: string
  github?: string
  content: string
  featured?: boolean
}

export interface ProjectMetadata {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  featured?: boolean
}
