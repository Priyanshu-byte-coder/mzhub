import type { Metadata } from 'next'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { getTeamMembers } from '@/lib/teamMembers'
import ScrollReveal from '@/components/ui/scroll-reveal'

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
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold text-center mb-12">Our Mission</h2>
                    </ScrollReveal>

                    <div className="prose prose-lg max-w-none text-secondary-light/90 dark:text-text-mist space-y-6">
                        <p className="text-xl leading-relaxed">
                            The world is becoming increasingly digital, and spiritual communities are no exception. Devotees seek guidance on their phones. They connect with communities online. They access teachings through apps and websites.
                        </p>

                        <p className="text-xl leading-relaxed">
                            Yet many religious institutions struggle to meet these digital expectations while maintaining the sanctity and authenticity of their teachings. That's where MZhub comes in.
                        </p>

                        <div className="bg-primary-light/30 dark:bg-secondary-dark/30 border-l-4 border-accent-blue dark:border-accent-gold p-8 my-8 rounded-r-lg">
                            <p className="text-2xl font-semibold text-secondary-light dark:text-accent-gold italic">
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
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-16">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold">Our Core Values</h2>
                    </ScrollReveal>
                    <p className="text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
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
                            <h3 className="text-2xl font-bold mb-3 text-secondary-light dark:text-accent-gold">{value.title}</h3>
                            <p className="text-secondary-light/90 dark:text-text-mist">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Our Story */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <h2 className="section-heading text-secondary-light dark:text-accent-gold text-center mb-12">Our Story</h2>
                    </ScrollReveal>

                    <div className="space-y-6 text-lg text-secondary-light/90 dark:text-text-mist">
                        <p>
                            MZhub was born from a simple observation: religious institutions possess incredible wealth—not financial wealth, but spiritual wealth. Decades of teachings, discourses, Q&A sessions, and sacred texts that could transform lives.
                        </p>

                        <p>
                            Yet this wealth was often locked away in filing cabinets, old cassette tapes, and physical archives. Meanwhile, devotees were seeking guidance online, often from unreliable sources that didn't reflect their tradition's authentic teachings.
                        </p>

                        <p>
                            Our founder, Dr. Arjun Patel, experienced this firsthand. As an AI researcher at Google, he had access to cutting-edge technology. As a practitioner of meditation and spiritual study, he knew the value of authentic teaching. He saw an opportunity to bridge these worlds.
                        </p>

                        <p className="bg-accent-beige/20 dark:bg-secondary-dark/30 border-l-4 border-accent-gold p-6 rounded-r-lg italic">
                            "What if we could help institutions digitize their teachings, make them searchable and accessible, and even use AI to provide personalized guidance—all while maintaining complete doctrinal control?"
                        </p>

                        <p>
                            That question led to MZhub. We started with a single ashram in 2022, helping them archive 40 years of recorded discourses and create a simple AI assistant for common questions. The response was overwhelming—both from the institution and their global community of devotees.
                        </p>

                        <p>
                            Today, we serve temples, churches, mosques, synagogues, and spiritual centers across traditions. Every partnership teaches us something new about the intersection of faith and technology. Every devotee who finds the guidance they need validates our mission.
                        </p>

                        <p className="text-xl font-semibold text-secondary-light dark:text-accent-gold">
                            We're just getting started. The future of spiritual technology is bright, ethical, and guided by wisdom.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Team */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-12">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                        <p className="text-sm uppercase tracking-[0.4em] text-secondary-light/70 dark:text-text-mist/70">Meet Our Team</p>
                        <h2 className="mt-4 text-4xl font-bold text-secondary-light dark:text-accent-gold">Faces behind the mission</h2>
                    </ScrollReveal>
                    <p className="mt-4 text-base text-secondary-light/80 dark:text-text-mist/80">
                        Every partnership blends rigorous AI craft with reverence for sacred wisdom. Hover to bring each story from archival grayscale to living color.
                    </p>
                </div>

                    <div className="team-scroll overflow-x-auto pb-4">
                        <div className="flex gap-10 min-w-max pr-8 snap-x snap-mandatory">
                            {team.map((member, index) => {
                                const imageSrc = member.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}`
                                const offsetClass = index % 2 === 1 ? 'md:translate-y-10' : ''

                                return (
                                    <figure
                                        key={member.name}
                                        className={`group snap-start w-[320px] shrink-0 space-y-5 ${offsetClass}`}
                                    >
                                        <div className="relative aspect-square w-full overflow-hidden rounded-[32px] bg-black/20">
                                            <img
                                                src={imageSrc}
                                                alt={member.name}
                                                className="h-full w-full object-cover transition duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-semibold text-secondary-light dark:text-white">{member.name}</p>
                                            <p className="text-base text-secondary-light/70 dark:text-text-mist/70">{member.role}</p>
                                        </div>
                                    </figure>
                                )
                            })}
                        </div>
                    </div>
            </SectionWrapper>

        </div>
    )
}
