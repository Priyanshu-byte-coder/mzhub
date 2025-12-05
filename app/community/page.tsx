import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Community',
    description: 'Discover how MZhub helps religious institutions build vibrant digital communities, share success stories, and foster meaningful spiritual connections.',
}

export default function Community() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Building <span className="text-spiritual-gold-300">Spiritual Communities</span>
                        <br />
                        in the Digital Age
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        Technology that brings devotees together, no matter where they are.
                    </p>
                </div>
            </section>

            {/* Why Community Matters */}
            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="section-heading text-center mb-12">Why Community Matters</h2>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p className="text-xl">
                            Spiritual growth doesn't happen in isolation. Throughout history, seekers have gathered in temples, ashrams, churches, and mosques—not just to receive teachings, but to support each other's journeys.
                        </p>

                        <div className="bg-spiritual-gold-50 border-l-4 border-spiritual-gold-500 p-6 rounded-r-lg my-8">
                            <p className="text-xl font-semibold text-spiritual-indigo-900 italic">
                                "When two or three are gathered in my name, there am I in the midst of them." - This principle transcends traditions.
                            </p>
                        </div>

                        <p className="text-xl">
                            But modern life scatters communities. Work relocations, global migration, and busy schedules make regular in-person gathering difficult. Digital platforms bridge this gap, creating new ways for devotees to connect, share, and grow together.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Community Features */}
            <SectionWrapper className="bg-gradient-to-br from-spiritual-indigo-50 to-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">How MZhub Fosters Community</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Purpose-built features for spiritual connection
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'Virtual Gatherings',
                            description: 'Host live satsang, meditation sessions, and study groups via integrated video conferencing. Record sessions for those who can\'t attend live.',
                            icon: '📹',
                            examples: ['Weekly meditation circles', 'Scripture study groups', 'Q&A with spiritual leaders', 'Festival celebrations']
                        },
                        {
                            title: 'Discussion Forums',
                            description: 'Moderated community spaces where devotees can ask questions, share insights, and support each other\'s spiritual journeys.',
                            icon: '💬',
                            examples: ['Practice discussions', 'Life application of teachings', 'Event planning', 'Newcomer welcome']
                        },
                        {
                            title: 'Shared Calendars',
                            description: 'Community calendars ensuring everyone knows about festivals, ceremonies, special events, and important observances.',
                            icon: '📅',
                            examples: ['Festival dates', 'Ceremony schedules', 'Fasting days', 'Guest speaker events']
                        },
                        {
                            title: 'Seva Coordination',
                            description: 'Organize and track community service projects. Connect those who want to serve with opportunities to make a difference.',
                            icon: '🤝',
                            examples: ['Temple maintenance', 'Food distribution', 'Teaching support', 'Outreach programs']
                        },
                        {
                            title: 'Mentorship Matching',
                            description: 'Connect experienced practitioners with newcomers for personalized guidance and support on the spiritual path.',
                            icon: '🎓',
                            examples: ['Practice mentorship', 'New member orientation', 'Youth programs', 'Elder wisdom sharing']
                        },
                        {
                            title: 'Private Messaging',
                            description: 'Secure, private channels for one-on-one spiritual guidance and community member connections.',
                            icon: '✉️',
                            examples: ['Pastoral care', 'Confidential guidance', 'Crisis support', 'Personal check-ins']
                        }
                    ].map((feature, index) => (
                        <Card key={index}>
                            <div className="flex items-start space-x-4">
                                <div className="text-5xl">{feature.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-spiritual-indigo-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-700 mb-4">{feature.description}</p>
                                    <div className="space-y-1">
                                        {feature.examples.map((example, i) => (
                                            <div key={i} className="text-sm text-spiritual-indigo-600">
                                                → {example}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Use Cases */}
            <SectionWrapper className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Community in Action</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real scenarios showing how digital communities thrive
                    </p>
                </div>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'Global Diaspora Connection',
                            scenario: 'A Hindu temple in Mumbai has devotees who have relocated to the US, UK, and Australia for work.',
                            solution: 'Using MZhub, they offer live-streamed morning aarti, recorded festival celebrations, and a WhatsApp-integrated community chat. Diaspora members feel connected despite the distance.',
                            impact: '300+ international devotees now regularly participate in temple activities'
                        },
                        {
                            title: 'Intergenerational Engagement',
                            scenario: 'An ashram struggles to engage younger members who expect modern digital experiences but respects tradition.',
                            solution: 'MZhub provides a mobile app where youth access teachings via short videos, join virtual study circles, and participate in gamified spiritual challenges—all while honoring traditional practices.',
                            impact: 'Youth engagement increased by 150% in six months'
                        },
                        {
                            title: 'Newcomer Integration',
                            scenario: 'A meditation center receives many curious newcomers but lacks resources for personalized onboarding.',
                            solution: 'Automated welcome sequences introduce practices gradually, while the mentorship feature connects newcomers with experienced practitioners for guidance.',
                            impact: 'Newcomer retention improved from 30% to 75%'
                        },
                        {
                            title: 'Crisis Support Network',
                            scenario: 'During pandemic lockdowns, a church community couldn\'t gather for worship or provide pastoral care in person.',
                            solution: 'MZhub enabled virtual services, private counseling sessions, prayer request sharing, and a support network where members could request and offer help.',
                            impact: 'Community stayed connected and supported through unprecedented challenges'
                        }
                    ].map((useCase, index) => (
                        <Card key={index} className="border-l-4 border-spiritual-indigo-600">
                            <h3 className="text-2xl font-bold text-spiritual-indigo-900 mb-4">{useCase.title}</h3>
                            <div className="space-y-3">
                                <div>
                                    <span className="font-semibold text-gray-900">Scenario: </span>
                                    <span className="text-gray-700">{useCase.scenario}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-900">Solution: </span>
                                    <span className="text-gray-700">{useCase.solution}</span>
                                </div>
                                <div className="bg-spiritual-gold-50 p-4 rounded-lg">
                                    <span className="font-semibold text-spiritual-indigo-900">Impact: </span>
                                    <span className="text-spiritual-indigo-800">{useCase.impact}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Success Stories */}
            <SectionWrapper className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
                    <p className="text-xl text-spiritual-indigo-200 max-w-3xl mx-auto">
                        Communities transformed through thoughtful technology
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            institution: 'Vedanta Ashram',
                            location: 'Rishikesh, India',
                            stat: '5,000+',
                            metric: 'Global Devotees Connected',
                            quote: 'MZhub helped us preserve 40 years of teachings and make them accessible worldwide. Our community has never been stronger.'
                        },
                        {
                            institution: 'Sacred Heart Monastery',
                            location: 'California, USA',
                            stat: '10,000+',
                            metric: 'Hours of Content Archived',
                            quote: 'Digital archives ensure our contemplative teachings reach future generations. The searchability transforms how people engage with our wisdom.'
                        },
                        {
                            institution: 'Ganesh Temple Trust',
                            location: 'London, UK',
                            stat: '85%',
                            metric: 'Member Engagement Increase',
                            quote: 'The AI assistant answers common questions instantly, freeing our priests to focus on deep spiritual guidance. It truly extends our reach.'
                        }
                    ].map((story, index) => (
                        <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 text-white" hover={false}>
                            <div className="text-5xl font-bold text-spiritual-gold-300 mb-2">{story.stat}</div>
                            <p className="text-spiritual-indigo-200 mb-4">{story.metric}</p>
                            <hr className="border-white/20 my-4" />
                            <p className="italic mb-4">"{story.quote}"</p>
                            <p className="font-bold">{story.institution}</p>
                            <p className="text-sm text-spiritual-indigo-200">{story.location}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper className="bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-spiritual-indigo-900 mb-6">
                        Build Your Digital Community
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        See how MZhub can help you connect and serve your community better.
                    </p>
                    <Link href="/contact">
                        <Button variant="default" size="lg">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    )
}
