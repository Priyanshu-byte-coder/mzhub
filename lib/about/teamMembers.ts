export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
    theologicalCredentials?: string
    technicalCredentials?: string
    faithBackground?: string
    isFounder?: boolean
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Vatsal Shah',
        role: 'Founder, CEO',
        bio: 'Vatsal leads MZHub with a vision to bridge ancient wisdom with modern technology. With a strong educational background from SP Jain School of Global Management across Singapore, Dubai, and Sydney, and experience in sales and marketing at Woolworths Group, Vatsal brings strategic leadership and business acumen to the mission.',
        image: '/team/vatsal-shah.png',
        technicalCredentials: 'SP Jain School of Global Management (Singapore, Dubai, Sydney), Sales and Marketing at Woolworths Group, SASMIRA Institute of Management and Research (Textile Science and Research)',
        isFounder: true,
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
