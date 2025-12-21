import Link from 'next/link'
import { absoluteUrl } from '@/lib/siteUrl'
import { JsonLd } from '@/components/seo/JsonLd'
import { generateWebPageSchema } from '@/lib/seo/schemas'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-light dark:bg-primary-dark text-center p-6">
      {/* Structured Data */}
      <JsonLd
        data={generateWebPageSchema(
          {
            name: '404 - Page Not Found',
            description: 'The page you are looking for does not exist.',
            url: '/404',
          },
          absoluteUrl('')
        )}
      />

      <h1 className="text-6xl font-bold text-secondary-light dark:text-accent-gold mb-4">404</h1>
      <p className="text-xl text-secondary-light/80 dark:text-text-mist mb-8">
        The page you requested could not be found.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-full bg-accent-gold text-primary-dark font-semibold shadow-lg hover:opacity-90 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
