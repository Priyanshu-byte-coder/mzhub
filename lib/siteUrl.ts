export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://localhost:3000'
  ).replace(/\/$/, '')
}

export function absoluteUrl(path: string = ''): string {
  const base = getSiteUrl()
  if (!path) return base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
