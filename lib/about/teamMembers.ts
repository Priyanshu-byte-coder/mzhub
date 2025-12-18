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
        name: 'Dr. Arjun Patel',
        role: 'Founder & CEO',
        bio: 'Former AI researcher at Google with a deep background in spiritual studies. Arjun founded MZHub to bridge the gap between cutting-edge technology and timeless wisdom.',
        image: '/team/arjun-patel.jpg',
        theologicalCredentials: 'Bachelor of Divinity, studied under the Rishikesh Vedanta lineage',
        technicalCredentials: 'AWS Certified AI Practitioner, 10 years NLP experience',
        faithBackground: 'Raised in the Jain tradition, practicing member of the Shree Adinath Mandir collective',
        isFounder: true,
    },
    {
        name: 'Priya Krishnan',
        role: 'Chief Technology Officer',
        bio: 'Machine learning expert with 15 years of experience building scalable AI systems. Priya ensures MZHub\'s technology is both powerful and respectful of spiritual contexts.',
        image: '/team/priya-krishnan.jpg',
        theologicalCredentials: 'Certificate in Comparative Theology, mentored by the Sringeri Sharada peetham lineage',
        technicalCredentials: 'Google Cloud Professional ML Engineer, 12 years conversational AI delivery',
        faithBackground: 'Raised in a Tamil Shaivite household, active volunteer at the Bay Area Shiva Temple',
        isFounder: true,
    },
    {
        name: 'Rabbi David Cohen',
        role: 'Director of Ethical AI',
        bio: 'Religious scholar and ethicist specializing in technology\'s intersection with faith. David oversees all ethical guidelines and institutional partnerships.',
        image: '/team/david-cohen.jpg',
    },
    {
        name: 'Ananya Sharma',
        role: 'Head of Content',
        bio: 'Sanskrit scholar and digital archivist with expertise in preserving sacred texts and teachings. Ananya leads our content digitization and quality assurance efforts.',
        image: '/team/ananya-sharma.jpg',
    },
]

export function getTeamMembers(): TeamMember[] {
    return teamMembers
}
