export * from './blog'
export * from './project'

export interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
}

export interface Testimonial {
  name: string
  role: string
  institution: string
  content: string
  image?: string
}
