export interface Testimonial {
    name: string
    role: string
    institution: string
    content: string
    image?: string
}

export interface AnimatedTestimonial {
    quote: string
    name: string
    designation: string
    src: string
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

export function getAnimatedTestimonials(): AnimatedTestimonial[] {
    return [
        {
            quote: "MZhub has transformed how we engage with our global community. The AI assistant answers common questions accurately while preserving our teachings' essence. It truly extends our reach without replacing the personal touch.",
            name: "Swami Krishnananda",
            designation: "Spiritual Director, Vedanta Ashram",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
        },
        {
            quote: "The digital archive feature is invaluable. Decades of recorded homilies and teachings are now searchable and accessible. Our devotees can find exactly the guidance they need, when they need it.",
            name: "Sister Maria D'Souza",
            designation: "Community Coordinator, Sacred Heart Monastery",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
        },
        {
            quote: "We were initially skeptical about using AI in our spiritual work. But MZhub's commitment to institutional control and doctrinal alignment won our trust. The platform serves our community while honoring our traditions.",
            name: "Pandit Ramesh Sharma",
            designation: "Head Priest, Ganesh Temple Trust",
            src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop"
        }
    ]
}
