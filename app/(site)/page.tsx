'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { BlobButton } from '@/components/ui/BlobButton'
import { getTestimonials } from '@/lib/testimonials'
import RotatingText from '@/components/RotatingText'

const AnimatedCanvas = dynamic(() => import('@/components/ui/AnimatedCanvas'), {
    ssr: false,
})

export default function Home() {
    const testimonials = getTestimonials()

    return (
        <div>
            <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-neutral-light dark:bg-primary-dark">
                <AnimatedCanvas />
                <div className="container-custom relative z-20 text-center text-secondary-light dark:text-text-mist py-8 px-4 md:py-20">
                    <div className="flex items-center justify-center mb-8 md:mb-12">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-serif flex items-center gap-4">
                            <span className="text-secondary-light dark:text-text-mist">Spiritual</span>
                            <RotatingText
                                texts={['Guru', 'AI']}
                                mainClassName="px-3 sm:px-4 md:px-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-xl"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
                        <Link href="/contact">
                            <BlobButton>
                                Request Demo
                            </BlobButton>
                        </Link>
                        <Link href="/projects">
                            <BlobButton>
                                Explore Projects
                            </BlobButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <SectionWrapper id="how-it-works" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-16">
                    <h2 className="section-heading text-secondary-light dark:text-accent-gold">How MZhub Works</h2>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        A simple, three-step process to transform your spiritual institution's digital presence
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            step: '01',
                            title: 'Ingest Your Content',
                            description: 'Upload scriptures, discourses, Q&A sessions, media archives, and institutional teachings. Our secure platform handles all formats.',
                            icon: '📚'
                        },
                        {
                            step: '02',
                            title: 'Train & Align AI',
                            description: 'Our AI models learn from your content while maintaining strict alignment with your doctrine. You maintain complete control.',
                            icon: '🤖'
                        },
                        {
                            step: '03',
                            title: 'Serve Your Community',
                            description: 'Deploy personalized guidance, automated engagement, searchable archives, and community insights—all true to your teachings.',
                            icon: '🙏'
                        }
                    ].map((item, index) => (
                        <Card key={index} className="text-center">
                            <div className="text-6xl mb-4">{item.icon}</div>
                            <div className="text-secondary-light dark:text-accent-gold font-bold text-lg mb-2">Step {item.step}</div>
                            <h3 className="text-2xl font-bold mb-4 text-secondary-light dark:text-accent-gold">{item.title}</h3>
                            <p className="text-secondary-light/80 dark:text-text-mist/80">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Key Features */}
            <SectionWrapper id="features" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-16">
                    <h2 className="section-heading text-secondary-light dark:text-accent-gold">Platform Features</h2>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        Everything you need to digitally transform your spiritual institution
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'AI-Powered Guidance',
                            description: 'Provide 24/7 personalized spiritual guidance aligned with your teachings using advanced natural language AI.',
                            icon: '🧘'
                        },
                        {
                            title: 'Digital Archives',
                            description: 'Searchable library of all your content—sermons, texts, videos, Q&As—preserved and accessible forever.',
                            icon: '🗄️'
                        },
                        {
                            title: 'Automated Engagement',
                            description: 'Schedule reminders, send personalized messages, and maintain continuous connection with your devotees.',
                            icon: '💌'
                        },
                        {
                            title: 'Community Analytics',
                            description: 'Understand your community\'s needs through insights on engagement, popular topics, and spiritual journeys.',
                            icon: '📊'
                        },
                        {
                            title: 'Institutional Control',
                            description: 'Complete oversight of AI responses, content curation, and platform behavior. Your doctrine, your rules.',
                            icon: '🔐'
                        },
                        {
                            title: 'Multi-Language Support',
                            description: 'Serve devotees in their native languages while preserving the nuance of original teachings.',
                            icon: '🌍'
                        }
                    ].map((feature, index) => (
                        <Card key={index}>
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-secondary-light dark:text-accent-gold">{feature.title}</h3>
                            <p className="text-secondary-light/80 dark:text-text-mist/80">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Philosophy & Trust */}
            <SectionWrapper id="philosophy" className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="section-heading text-secondary-light dark:text-accent-gold mb-8">Our Philosophy: Technology in Service of Faith</h2>

                    <div className="space-y-6 text-lg text-secondary-light dark:text-text-mist text-left">
                        <p>
                            We understand that faith is deeply personal and sacred. The introduction of artificial intelligence into spiritual contexts requires extraordinary care, respect, and ethical consideration.
                        </p>

                        <p className="text-xl font-semibold text-secondary-light dark:text-accent-gold bg-primary-light/20 dark:bg-secondary-dark p-6 rounded-lg border-l-4 border-accent-gold">
                            MZhub was built on a fundamental principle: AI should amplify spiritual wisdom, never replace it. Technology serves tradition, not the other way around.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-primary-light/30 dark:bg-primary-dark p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-3 text-secondary-light dark:text-accent-gold">What We Believe</h3>
                                <ul className="space-y-2 text-secondary-light dark:text-text-mist">
                                    <li>✓ Human spiritual leadership is irreplaceable</li>
                                    <li>✓ Institutions must maintain doctrinal control</li>
                                    <li>✓ Privacy and sanctity must be protected</li>
                                    <li>✓ Technology should be transparent and trustworthy</li>
                                </ul>
                            </div>

                            <div className="bg-accent-gold/20 dark:bg-primary-dark p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-3 text-secondary-light dark:text-accent-gold">What We Promise</h3>
                                <ul className="space-y-2 text-secondary-light dark:text-text-mist">
                                    <li>✓ Complete institutional oversight</li>
                                    <li>✓ Rigorous doctrinal alignment</li>
                                    <li>✓ Bank-level security and privacy</li>
                                    <li>✓ Continuous ethical review</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Target Audience */}
            <SectionWrapper id="audience" className="bg-white text-secondary-light dark:bg-primary-dark dark:text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-light dark:text-accent-gold">Who We Serve</h2>
                    <p className="text-xl text-secondary-light/80 dark:text-text-mist max-w-3xl mx-auto">
                        MZhub is purpose-built for religious institutions seeking to expand their digital presence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Temples', icon: '🛕', description: 'Hindu temples and mandirs serving local and global communities' },
                        { title: 'Ashrams', icon: '🧘‍♂️', description: 'Spiritual retreat centers and meditation communities' },
                        { title: 'Churches', icon: '⛪', description: 'Christian congregations and ministries of all denominations' },
                        { title: 'Mosques', icon: '🕌', description: 'Islamic centers and Muslim community organizations' },
                        { title: 'Synagogues', icon: '✡️', description: 'Jewish congregations and study centers' },
                        { title: 'Monasteries', icon: '🙏', description: 'Buddhist and contemplative religious communities' },
                        { title: 'Gurudwaras', icon: '🏛️', description: 'Sikh temples and community centers' },
                        { title: 'Spiritual Centers', icon: '🕉️', description: 'Multi-faith and interfaith spiritual organizations' }
                    ].map((audience, index) => (
                        <div
                            key={index}
                            className="bg-secondary-light/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-secondary-light/20 transition-colors dark:bg-white/10 dark:hover:bg-white/20"
                        >
                            <div className="text-5xl mb-3">
                                {audience.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-secondary-light dark:text-white">{audience.title}</h3>
                            <p className="text-secondary-light/70 dark:text-neutral-light text-sm">{audience.description}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Testimonials */}
            <SectionWrapper id="testimonials" className="bg-neutral-light dark:bg-primary-dark">
                <div className="text-center mb-16">
                    <h2 className="section-heading text-secondary-light dark:text-accent-gold">What Spiritual Leaders Say</h2>
                    <p className="text-xl text-secondary-light dark:text-text-mist max-w-3xl mx-auto">
                        Trusted by religious institutions across traditions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col">
                            <div className="text-accent-gold text-4xl mb-4">"</div>
                            <p className="text-secondary-light dark:text-text-mist mb-6 flex-grow italic">{testimonial.content}</p>
                            <div className="border-t border-primary-light dark:border-secondary-dark pt-4">
                                <p className="font-bold text-secondary-light dark:text-accent-gold">{testimonial.name}</p>
                                <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">{testimonial.role}</p>
                                <p className="text-sm text-secondary-light dark:text-accent-gold">{testimonial.institution}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper className="bg-white text-secondary-light text-center dark:bg-primary-dark dark:text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-light dark:text-accent-gold">
                        Ready to Extend Your Spiritual Reach?
                    </h2>
                    <p className="text-xl mb-8 text-secondary-light/80 dark:text-text-mist">
                        Join religious institutions worldwide who are using MZhub to preserve their teachings and serve their communities better.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <BlobButton>
                                Schedule Demo
                            </BlobButton>
                        </Link>
                        <Link href="/projects">
                            <BlobButton>
                                Learn More
                            </BlobButton>
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
