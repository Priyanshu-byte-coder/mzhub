export interface Testimonial {
    name: string
    role: string
    institution: string
    content: string
    image?: string
}

export const testimonials: Testimonial[] = [
    {
        name: 'Swami Krishnananda',
        role: 'Spiritual Director',
        institution: 'Vedanta Ashram',
        content: 'MZhub has transformed how we engage with our global community. The AI assistant answers common questions accurately while preserving our teachings\' essence. It truly extends our reach without replacing the personal touch.',
    },
    {
        name: 'Sister Maria D\'Souza',
        role: 'Community Coordinator',
        institution: 'Sacred Heart Monastery',
        content: 'The digital archive feature is invaluable. Decades of recorded homilies and teachings are now searchable and accessible. Our devotees can find exactly the guidance they need, when they need it.',
    },
    {
        name: 'Pandit Ramesh Sharma',
        role: 'Head Priest',
        institution: 'Ganesh Temple Trust',
        content: 'We were initially skeptical about using AI in our spiritual work. But MZhub\'s commitment to institutional control and doctrinal alignment won our trust. The platform serves our community while honoring our traditions.',
    },
]

export function getTestimonials(): Testimonial[] {
    return testimonials
}
