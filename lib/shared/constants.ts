import { getSiteUrl } from '@/lib/siteUrl'

export const SITE_NAME = 'MZHub'
export const SITE_DESCRIPTION = 'AI-Powered Spiritual Platforms for Religious Institutions'

export const SITE_URL = getSiteUrl()

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]
