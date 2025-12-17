/**
 * JSON-LD Structured Data Component
 * Renders Schema.org structured data for SEO
 */

interface JsonLdProps {
    data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
