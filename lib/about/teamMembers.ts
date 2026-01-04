export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
    theologicalCredentials?: string
    technicalCredentials?: string
    faithBackground?: string

}

export const teamMembers: TeamMember[] = [
    {
        name: 'Vatsal Shah',
        role: 'Founder, CEO',
        bio: 'Vatsal leads MZHub with a mission to bridge ancient wisdom and modern technology through cultural preservation and making credible knowledge accessible with scale. Drawing from a global education at SP Jain School of Global Management and his leadership as Executive Vice President of Valencia Nutrition Limited, he manages 12+ business verticals across wellness, nutracare, and consumer products. Vatsal applies his expertise in scaling complex FMCG powerhouses to build a faith-tech ecosystem that prioritizes social responsibility and human authority. Driven by the belief that work is a form of service, he is dedicated to ensuring that sacred knowledge remains vibrant and accessible for the betterment of society.',
        image: '/team/vatsal-shah.png',
        technicalCredentials: 'SP Jain School of Global Management (Singapore, Dubai, Sydney), Sales and Marketing at Woolworths Group, SASMIRA Institute of Management and Research (Textile Science and Research)',

    },
    {
        name: 'Hitender Singh',
        role: 'Fractional CTO',
        bio: 'Hitender brings over a decade of experience working with Fortune 500 clients, helping them adopt cloud, AI, and automation technologies. He ensures MZHub\'s technology infrastructure is robust, scalable, and aligned with enterprise best practices.',
        image: '/team/hitender-singh.png',
        technicalCredentials: 'Expert in Microsoft Cloud Solutions, enterprise business applications, and program management with a focus on digital transformation and innovation. Over a decade of experience with Fortune 500 clients in cloud, AI, and automation technologies.',
    },
    {
        name: 'Tijender Singh',
        role: 'Fractional CTO',
        bio: 'Tijender is a consultant specializing in AI Products, Models, Strategy & Cloud technologies. Based in Germany and employed by Accenture, he brings 15+ years of global client experience to MZHub\'s technical strategy.',
        image: '/team/tijender-singh.png',
        technicalCredentials: 'Consultant in AI Products, Models, Strategy & Cloud (Azure, DevOps). 15+ years of experience working with global clients. Expert in AI, Cloud Infrastructure, and Automation. Based in Germany | Employed by Accenture',
    },
]

export function getTeamMembers(): TeamMember[] {
    return teamMembers
}
