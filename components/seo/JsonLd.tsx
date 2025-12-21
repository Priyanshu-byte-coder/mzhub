import type { WithContext, Thing } from 'schema-dts'

interface JsonLdProps {
    data: WithContext<Thing> | WithContext<Thing>[]
}

/**
 * JsonLd component for rendering structured data in JSON-LD format
 * 
 * @example
 * ```tsx
 * <JsonLd data={generateOrganizationSchema()} />
 * ```
 * 
 * @example Multiple schemas
 * ```tsx
 * <JsonLd data={[
 *   generateOrganizationSchema(),
 *   generateWebPageSchema(pageInfo, siteUrl)
 * ]} />
 * ```
 */
export function JsonLd({ data }: JsonLdProps) {
    const schemaArray = Array.isArray(data) ? data : [data]

    return (
        <>
            {schemaArray.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema, null, 2),
                    }}
                />
            ))}
        </>
    )
}
