import type { Metadata } from 'next'
import Link from 'next/link'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/scroll-reveal'

export const metadata: Metadata = {
    title: 'Platform',
    description: 'Explore MZhub\'s AI-powered platform features: intelligent guidance, digital archives, automation, analytics, and institutional control for religious organizations.',
}

export default function Platform() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        A Complete Platform for
                        <br />
                        <span className="text-spiritual-gold-300">Digital Spiritual Engagement</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        Everything you need to preserve teachings, serve devotees, and build community—all in one place.
                    </p>
                </div>
            </section>

            {/* Platform Overview */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold mb-8">Comprehensive Digital Infrastructure</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light/90 dark:text-text-mist leading-relaxed">
                        MZhub isn't just a chatbot or an archive—it's a complete ecosystem designed specifically for religious institutions. From content ingestion to community insights, every feature is built with spiritual contexts in mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">Built for Scale, Designed for Sanctity</h3>
                        <p className="text-secondary-light/90 dark:text-text-mist mb-4">
                            Whether you serve 100 devotees or 100,000, MZhub scales to meet your needs. Our cloud infrastructure handles millions of queries while maintaining institutional control and data privacy.
                        </p>
                        <p className="text-secondary-light/90 dark:text-text-mist">
                            Every interaction, every piece of content, every AI response is subject to your oversight. Technology serves your mission, not the other way around.
                        </p>
                    </div>
                    <div className="bg-primary-light/40 dark:bg-secondary-dark/40 rounded-2xl p-8 space-y-4">
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h4 className="font-bold text-secondary-light dark:text-accent-gold">Cloud-Native Architecture</h4>
                                <p className="text-secondary-light/80 dark:text-text-mist text-sm">Reliable, secure, and infinitely scalable</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h4 className="font-bold text-secondary-light dark:text-accent-gold">Mobile-First Design</h4>
                                <p className="text-secondary-light/80 dark:text-text-mist text-sm">Beautiful experience on every device</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h4 className="font-bold text-secondary-light dark:text-accent-gold">Enterprise Security</h4>
                                <p className="text-secondary-light/80 dark:text-text-mist text-sm">Bank-level encryption and compliance</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">✓</span>
                            <div>
                                <h4 className="font-bold text-secondary-light dark:text-accent-gold">White-Label Options</h4>
                                <p className="text-secondary-light/80 dark:text-text-mist text-sm">Brand the platform as your own</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Core Modules */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-16">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold">Core Platform Modules</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                        Four integrated modules that work together to serve your community
                    </p>
                </div>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {/* Module 1: AI Assistant */}
                    <Card className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-block bg-accent-blue/20 dark:bg-accent-blue/10 text-accent-blue dark:text-accent-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Module 1
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">🧘 AI Spiritual Assistant</h3>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-4">
                                Provide 24/7 personalized guidance to devotees using AI trained exclusively on your institutional teachings. The assistant can:
                            </p>
                            <ul className="space-y-2 text-secondary-light/90 dark:text-text-mist">
                                <li>• Answer questions about practices, rituals, and beliefs</li>
                                <li>• Recommend relevant scriptures and teachings</li>
                                <li>• Provide daily inspiration and reminders</li>
                                <li>• Guide users to human support when needed</li>
                            </ul>
                            <div className="mt-6 p-4 bg-accent-beige/20 dark:bg-secondary-dark/30 rounded-lg border-l-4 border-accent-gold">
                                <p className="text-sm font-semibold text-secondary-light dark:text-accent-gold">
                                    Complete Control: You review and approve all AI responses before they go live. The assistant learns your doctrine, not the internet's.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-secondary-light to-secondary-dark dark:from-secondary-dark dark:to-primary-dark rounded-xl p-8 text-white">
                            <div className="text-sm font-semibold mb-2 text-accent-gold">Example Interaction</div>
                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-3">
                                    <p className="text-sm font-semibold mb-1">Devotee:</p>
                                    <p className="text-white/90">"How should I prepare for morning meditation?"</p>
                                </div>
                                <div className="bg-accent-gold/30 rounded-lg p-3">
                                    <p className="text-sm font-semibold mb-1">AI Assistant:</p>
                                    <p className="text-white">
                                        "In our tradition, morning meditation preparation involves three steps: 1) Light purification with water, 2) Create sacred space with incense, 3) Begin with the opening prayer from our scriptures. Guruji emphasized this in his discourse on March 12, 2019 [link to recording]."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Module 2: Media Hub */}
                    <Card className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-gradient-to-br from-accent-gold/80 to-accent-gold rounded-xl p-8 text-white">
                            <h4 className="text-2xl font-bold mb-4">Features Include:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2">🔍</span>
                                    <div>
                                        <strong>Semantic Search</strong>
                                        <p className="text-sm text-white/90">Find content by meaning, not just keywords</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">📝</span>
                                    <div>
                                        <strong>Auto-Transcription</strong>
                                        <p className="text-sm text-white/90">Convert audio/video to searchable text</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">🌐</span>
                                    <div>
                                        <strong>Multi-Language</strong>
                                        <p className="text-sm text-white/90">Translate content to serve global communities</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">📱</span>
                                    <div>
                                        <strong>Mobile Apps</strong>
                                        <p className="text-sm text-white/90">iOS and Android native applications</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-accent-gold/20 dark:bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Module 2
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">🗄️ Digital Media Hub</h3>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-4">
                                Transform decades of teachings into a searchable, accessible digital library. Upload any format—audio, video, text, PDFs— and we'll organize it beautifully.
                            </p>
                            <p className="text-secondary-light/90 dark:text-text-mist">
                                Devotees can search through thousands of hours of content to find exactly the teaching they need, when they need it. Every search brings them closer to your wisdom.
                            </p>
                        </div>
                    </Card>

                    {/* Module 3: Automation */}
                    <Card className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-block bg-accent-blue/20 dark:bg-accent-blue/10 text-accent-blue dark:text-accent-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Module 3
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">💌 Engagement Automation</h3>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-4">
                                Stay connected with your community at scale. Automated engagement that feels personal:
                            </p>
                            <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent-blue dark:text-accent-gold">•</span>
                                    <div>
                                        <strong>Personalized Reminders:</strong> Festival dates, meditation times, prayer schedules
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent-blue dark:text-accent-gold">•</span>
                                    <div>
                                        <strong>Daily Inspiration:</strong> Share quotes, teachings, and wisdom automatically
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent-blue dark:text-accent-gold">•</span>
                                    <div>
                                        <strong>Milestone Recognition:</strong> Birthdays, membership anniversaries, spiritual journeys
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-accent-blue dark:text-accent-gold">•</span>
                                    <div>
                                        <strong>Event Notifications:</strong> Upcoming programs, special ceremonies, guest speakers
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-primary-light/40 dark:bg-secondary-dark/40 rounded-xl p-8">
                            <div className="bg-white dark:bg-card rounded-lg shadow-lg p-6 mb-4">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full bg-accent-blue dark:bg-accent-gold flex items-center justify-center text-white font-bold mr-3">
                                        MZ
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Daily Wisdom</p>
                                        <p className="text-xs text-gray-500">7:00 AM</p>
                                    </div>
                                </div>
                                <p className="text-secondary-light/90 dark:text-text-mist text-sm">
                                    "The mind is restless and difficult to restrain, but it is subdued by practice." - Today's teaching for your meditation practice 🙏
                                </p>
                            </div>
                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70 italic">
                                Automated messages based on user preferences and spiritual journey stage
                            </p>
                        </div>
                    </Card>

                    {/* Module 4: Analytics */}
                    <Card className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 bg-gradient-to-br from-secondary-light to-secondary-dark dark:from-secondary-dark dark:to-primary-dark rounded-xl p-8 text-white">
                            <h4 className="text-2xl font-bold mb-6">Insights Dashboard</h4>
                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-4">
                                    <p className="text-accent-gold text-sm font-semibold">Most Searched Topics</p>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex justify-between">
                                            <span>Meditation Techniques</span>
                                            <span className="text-accent-gold">1,247</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Festival Observances</span>
                                            <span className="text-accent-gold">892</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <p className="text-accent-gold text-sm font-semibold">Engagement Growth</p>
                                    <p className="text-3xl font-bold mt-2">+34% <span className="text-lg font-normal">this month</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-accent-gold/20 dark:bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                Module 4
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4">📊 Community Analytics</h3>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-4">
                                Understanding your community's needs and spiritual journeys through compassionate analytics:
                            </p>
                            <ul className="space-y-2 text-secondary-light/90 dark:text-text-mist">
                                <li>• What teachings resonate most?</li>
                                <li>• Which topics are devotees searching for?</li>
                                <li>• How is engagement growing over time?</li>
                                <li>• Who might benefit from outreach?</li>
                            </ul>
                            <p className="text-secondary-light/90 dark:text-text-mist mt-4">
                                All analytics are aggregated and anonymous, respecting individual privacy while revealing community patterns.
                            </p>
                        </div>
                    </Card>
                </div>
            </SectionWrapper>

            {/* Institutional Control */}
            <SectionWrapper id="control" className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold text-center mb-12">You're Always in Control</h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">🎛️ Content Curation</h3>
                            <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                <li>✓ Approve all content before it's accessible</li>
                                <li>✓ Edit or remove any archived material</li>
                                <li>✓ Categorize and organize as you see fit</li>
                                <li>✓ Feature important teachings prominently</li>
                            </ul>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">🤖 AI Oversight</h3>
                            <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                <li>✓ Review AI responses before deployment</li>
                                <li>✓ Set boundaries on what AI can discuss</li>
                                <li>✓ Train AI on your approved content only</li>
                                <li>✓ Override or correct AI at any time</li>
                            </ul>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">👥 User Management</h3>
                            <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                <li>✓ Define user roles and permissions</li>
                                <li>✓ Moderate community discussions</li>
                                <li>✓ Manage membership tiers</li>
                                <li>✓ Export user data anytime</li>
                            </ul>
                        </Card>

                        <Card>
                            <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">🔐 Data Ownership</h3>
                            <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                <li>✓ Your data stays yours, always</li>
                                <li>✓ Export everything at any time</li>
                                <li>✓ Delete your data completely</li>
                                <li>✓ No vendor lock-in</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </SectionWrapper>

            {/* Security */}
            <SectionWrapper id="security" className="bg-gradient-to-br from-secondary-light to-secondary-dark dark:from-secondary-dark dark:to-primary-dark text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Enterprise-Grade Security</h2>
                    <p className="text-xl text-white/80 mb-12">
                        Protecting your community's spiritual journey is our highest priority
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🔐', title: 'End-to-End Encryption', description: 'All data encrypted in transit and at rest' },
                            { icon: '☁️', title: 'Cloud Security', description: 'AWS/GCP infrastructure with 99.99% uptime' },
                            { icon: '✅', title: 'Compliance Ready', description: 'GDPR, CCPA, and religious privacy standards' },
                            { icon: '🔄', title: 'Regular Backups', description: 'Daily automated backups with instant restore' },
                            { icon: '👁️', title: 'Access Logs', description: 'Complete audit trails of all system access' },
                            { icon: '🛡️', title: 'DDoS Protection', description: 'Advanced protection against cyber attacks' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-white/80 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-secondary-light dark:text-accent-gold mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-xl text-secondary-light/90 dark:text-text-mist mb-8">
                        Schedule a personalized demo to see how MZhub can serve your institution.
                    </p>
                    <Link href="/contact">
                        <Button variant="secondary" size="lg">
                            Schedule Demo
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    )
}
