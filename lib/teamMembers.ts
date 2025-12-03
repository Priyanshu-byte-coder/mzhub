export interface TeamMember {
    name: string
    role: string
    bio: string
    image?: string
}

export const teamMembers: TeamMember[] = [
    {
        name: 'Dr. Arjun Patel',
        role: 'Founder & CEO',
        bio: 'Former AI researcher at Google with a deep background in spiritual studies. Arjun founded MZhub to bridge the gap between cutting-edge technology and timeless wisdom.',
    },
    {
        name: 'Priya Krishnan',
        role: 'Chief Technology Officer',
        bio: 'Machine learning expert with 15 years of experience building scalable AI systems. Priya ensures MZhub\'s technology is both powerful and respectful of spiritual contexts.',
    },
    {
        name: 'Rabbi David Cohen',
        role: 'Director of Ethical AI',
        bio: 'Religious scholar and ethicist specializing in technology\'s intersection with faith. David oversees all ethical guidelines and institutional partnerships.',
    },
    {
        name: 'Ananya Sharma',
        role: 'Head of Content',
        bio: 'Sanskrit scholar and digital archivist with expertise in preserving sacred texts and teachings. Ananya leads our content digitization and quality assurance efforts.',
    },
]

export function getTeamMembers(): TeamMember[] {
    return teamMembers
}
