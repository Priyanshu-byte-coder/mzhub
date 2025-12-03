'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { getTestimonials } from '@/lib/testimonials'

export default function Home() {
    const testimonials = getTestimonials()

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-spiritual-indigo-900 via-spiritual-indigo-800 to-spiritual-indigo-950">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
                </div>

                <div className="container-custom relative z-10 text-center text-white py-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif"
                    >
                        Extend Your Spiritual Reach
                        <br />
                        <span className="bg-gradient-to-r from-spiritual-gold-300 to-spiritual-gold-500 bg-clip-text text-transparent">
                            With AI-Powered Platforms
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl mb-8 text-spiritual-indigo-100 max-w-3xl mx-auto"
                    >
                        Empower your religious institution with AI that preserves sacred teachings while delivering personalized guidance to your global community.
                    </motion.p>

                    {/* Highlighted Guru Line */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mb-12 py-8 px-6 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-spiritual-gold-400/30 max-w-4xl mx-auto"
                    >
                        <motion.p
                            animate={{
                                textShadow: [
                                    "0 0 10px rgba(250, 204, 21, 0.3)",
                                    "0 0 20px rgba(250, 204, 21, 0.5)",
                                    "0 0 10px rgba(250, 204, 21, 0.3)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-2xl md:text-3xl font-serif italic text-spiritual-gold-200"
                        >
                            "You are not replacing the guru.
                            <br />
                            <span className="text-spiritual-gold-300 font-bold">You are extending their reach."</span>
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact">
                            <Button variant="secondary" size="lg">
                                Request Demo
                            </Button>
                        </Link>
                        <Link href="/platform">
                            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20">
                                Explore Platform
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <SectionWrapper id="how-it-works" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">How MZhub Works</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                            <div className="text-spiritual-indigo-600 font-bold text-lg mb-2">Step {item.step}</div>
                            <h3 className="text-2xl font-bold mb-4 text-spiritual-indigo-900">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Key Features */}
            <SectionWrapper id="features" className="bg-gradient-to-br from-spiritual-indigo-50 to-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Platform Features</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                            <h3 className="text-xl font-bold mb-3 text-spiritual-indigo-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Philosophy & Trust */}
            <SectionWrapper id="philosophy" className="bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="section-heading mb-8">Our Philosophy: Technology in Service of Faith</h2>

                    <div className="space-y-6 text-lg text-gray-700 text-left">
                        <p>
                            We understand that faith is deeply personal and sacred. The introduction of artificial intelligence into spiritual contexts requires extraordinary care, respect, and ethical consideration.
                        </p>

                        <p className="text-xl font-semibold text-spiritual-indigo-900 bg-spiritual-gold-50 p-6 rounded-lg border-l-4 border-spiritual-gold-500">
                            MZhub was built on a fundamental principle: AI should amplify spiritual wisdom, never replace it. Technology serves tradition, not the other way around.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-spiritual-indigo-50 p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-3 text-spiritual-indigo-900">What We Believe</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Human spiritual leadership is irreplaceable</li>
                                    <li>✓ Institutions must maintain doctrinal control</li>
                                    <li>✓ Privacy and sanctity must be protected</li>
                                    <li>✓ Technology should be transparent and trustworthy</li>
                                </ul>
                            </div>

                            <div className="bg-spiritual-gold-50 p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-3 text-spiritual-indigo-900">What We Promise</h3>
                                <ul className="space-y-2 text-gray-700">
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
            <SectionWrapper id="audience" className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Serve</h2>
                    <p className="text-xl text-spiritual-indigo-200 max-w-3xl mx-auto">
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
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            <div className="text-5xl mb-3">{audience.icon}</div>
                            <h3 className="font-bold text-xl mb-2">{audience.title}</h3>
                            <p className="text-spiritual-indigo-200 text-sm">{audience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Testimonials */}
            <SectionWrapper id="testimonials" className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="section-heading">What Spiritual Leaders Say</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trusted by religious institutions across traditions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col">
                            <div className="text-spiritual-gold-500 text-4xl mb-4">"</div>
                            <p className="text-gray-700 mb-6 flex-grow italic">{testimonial.content}</p>
                            <div className="border-t pt-4">
                                <p className="font-bold text-spiritual-indigo-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                <p className="text-sm text-spiritual-indigo-600">{testimonial.institution}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper className="bg-gradient-to-r from-spiritual-indigo-600 to-spiritual-indigo-800 text-white text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Extend Your Spiritual Reach?
                    </h2>
                    <p className="text-xl mb-8 text-spiritual-indigo-100">
                        Join religious institutions worldwide who are using MZhub to preserve their teachings and serve their communities better.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="secondary" size="lg">
                                Schedule a Demo
                            </Button>
                        </Link>
                        <Link href="/platform">
                            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white text-white hover:bg-white/20">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </SectionWrapper>
        </div>
    )
}
