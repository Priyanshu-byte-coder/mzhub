import type { Thing, WithContext, Organization, Service, Article, FAQPage, BreadcrumbList, WebPage, WebSite } from 'schema-dts'

export type SchemaOrgType = WithContext<Thing>

export interface ServiceInfo {
    name: string
    description: string
    category?: string
}

export interface FAQItem {
    question: string
    answer: string
}

export interface BreadcrumbItem {
    name: string
    url: string
}

export interface PageInfo {
    name: string
    description: string
    url: string
    dateModified?: string
}
