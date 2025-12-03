import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { getTeamMembers } from '@/lib/teamMembers'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about MZhub\'s mission to bridge spiritual wisdom and AI technology, our core values, and the team dedicated to serving religious institutions.',
}

export default function About() {
    const team = getTeamMembers()

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Bridging <span className="text-spiritual-gold-300">Ancient Wisdom</span>
                        <br />
                        with Modern Technology
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        MZhub exists to help religious institutions preserve their sacred teachings while reaching devotees in the digital age.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="section-heading text-center mb-12">Our Mission</h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="text-xl leading-relaxed">
                            The world is becoming increasingly digital, and spiritual communities are no exception. Devotees seek guidance on their phones. They connect with communities online. They access teachings through apps and websites.
                        </p>

                        <p className="text-xl leading-relaxed">
                            Yet many religious institutions struggle to meet these digital expectations while maintaining the sanctity and authenticity of their teachings. That's where MZhub comes in.
                        </p>

                        <div className="bg-spiritual-indigo-50 border-l-4 border-spiritual-indigo-600 p-8 my-8 rounded-r-lg">
                            <p className="text-2xl font-semibold text-spiritual-indigo-900 italic">
                                Our mission is to empower religious institutions with AI-powered platforms that extend their spiritual reach without compromising their sacred traditions.
                            </p>
                        </div>

                        <p className="text-xl leading-relaxed">
                            We believe technology should serve tradition, not replace it. Every feature we build, every AI model we train, every partnership we form is guided by this principle.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Core Values */}
            <SectionWrapper className="bg-gradient-to-br from-spiritual-gold-50 to-spiritual-indigo-50">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Our Core Values</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        These principles guide every decision we make
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'Reverence for Tradition',
                            description: 'We approach spiritual teachings with deep respect and humility. Technology is a tool to preserve and share wisdom, never to alter or diminish it.',
                            icon: '🙏'
                        },
                        {
                            title: 'Institutional Sovereignty',
                            description: 'Religious leaders know their communities best. We provide the technology, but institutions maintain complete control over content, doctrine, and deployment.',
                            icon: '👑'
                        },
                        {
                            title: 'Privacy as Sacred',
                            description: 'Spiritual seeking is deeply personal. We employ bank-level security and never share, sell, or exploit devotee data. Privacy is a sacred trust.',
                            icon: '🔒'
                        },
                        {
                            title: 'Ethical AI',
                            description: 'Our AI systems are transparent, auditable, and aligned with institutional values. We believe in ethical AI development with continuous oversight.',
                            icon: '⚖️'
                        },
                        {
                            title: 'Inclusive Technology',
                            description: 'Spirituality should be accessible to all. Our platforms support multiple languages, accessibility features, and work across devices.',
                            icon: '🌍'
                        },
                        {
                            title: 'Continuous Learning',
                            description: 'We listen to our partner institutions, learn from feedback, and continuously improve. Humility drives innovation.',
                            icon: '📚'
                        }
                    ].map((value, index) => (
                        <Card key={index}>
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-spiritual-indigo-900">{value.title}</h3>
                            <p className="text-gray-700">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Our Story */}
            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="section-heading text-center mb-12">Our Story</h2>

                    <div className="space-y-6 text-lg text-gray-700">
                        <p>
                            MZhub was born from a simple observation: religious institutions possess incredible wealth—not financial wealth, but spiritual wealth. Decades of teachings, discourses, Q&A sessions, and sacred texts that could transform lives.
                        </p>

                        <p>
                            Yet this wealth was often locked away in filing cabinets, old cassette tapes, and physical archives. Meanwhile, devotees were seeking guidance online, often from unreliable sources that didn't reflect their tradition's authentic teachings.
                        </p>

                        <p>
                            Our founder, Dr. Arjun Patel, experienced this firsthand. As an AI researcher at Google, he had access to cutting-edge technology. As a practitioner of meditation and spiritual study, he knew the value of authentic teaching. He saw an opportunity to bridge these worlds.
                        </p>

                        <p className="bg-spiritual-gold-50 border-l-4 border-spiritual-gold-500 p-6 rounded-r-lg italic">
                            "What if we could help institutions digitize their teachings, make them searchable and accessible, and even use AI to provide personalized guidance—all while maintaining complete doctrinal control?"
                        </p>

                        <p>
                            That question led to MZhub. We started with a single ashram in 2022, helping them archive 40 years of recorded discourses and create a simple AI assistant for common questions. The response was overwhelming—both from the institution and their global community of devotees.
                        </p>

                        <p>
                            Today, we serve temples, churches, mosques, synagogues, and spiritual centers across traditions. Every partnership teaches us something new about the intersection of faith and technology. Every devotee who finds the guidance they need validates our mission.
                        </p>

                        <p className="text-xl font-semibold text-spiritual-indigo-900">
                            We're just getting started. The future of spiritual technology is bright, ethical, and guided by wisdom.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Team */}
            <SectionWrapper className="bg-gradient-to-br from-spiritual-indigo-50 to-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Meet Our Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A diverse group united by a passion for ethical technology and spiritual wisdom
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center">
                            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-spiritual-indigo-400 to-spiritual-gold-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h3 className="text-xl font-bold text-spiritual-indigo-900 mb-2">{member.name}</h3>
                            <p className="text-spiritual-gold-600 font-semibold mb-3">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.bio}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    )
}
