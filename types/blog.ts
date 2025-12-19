export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  thumbnail?: string
  content: string
  readTime?: string
}

export interface BlogMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  image?: string
  thumbnail?: string
  readTime?: string
}
