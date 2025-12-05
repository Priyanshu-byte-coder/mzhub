'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import Card from '@/components/ui/Card'
import { Button } from '@/components/ui/button'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        institution: '',
        phone: '',
        role: '',
        message: '',
    })

    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.institution.trim()) {
            newErrors.institution = 'Institution name is required'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            // In production, this would send to your backend
            console.log('Form submitted:', formData)
            setSubmitted(true)

            // Reset form
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    institution: '',
                    phone: '',
                    role: '',
                    message: '',
                })
                setSubmitted(false)
            }, 3000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-spiritual-indigo-900 to-spiritual-indigo-800 text-white py-20 md:py-32">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
                        Let's <span className="text-spiritual-gold-300">Connect</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-spiritual-indigo-200 max-w-4xl mx-auto">
                        Ready to explore how MZhub can serve your spiritual institution? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <SectionWrapper className="bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-spiritual-indigo-900 mb-6">Request a Demo</h2>
                            <p className="text-gray-700 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours to schedule a personalized demo of the MZhub platform.
                            </p>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg"
                                >
                                    <div className="flex items-center">
                                        <span className="text-4xl mr-4">✓</span>
                                        <div>
                                            <h3 className="font-bold text-green-900 text-xl mb-1">Thank you!</h3>
                                            <p className="text-green-800">We've received your message and will be in touch soon.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500`}
                                            placeholder="Swami Krishna / Father John / Rabbi Cohen"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* Institution */}
                                    <div>
                                        <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Institution Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="institution"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.institution ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500`}
                                            placeholder="Temple / Church / Mosque / Ashram / Synagogue"
                                        />
                                        {errors.institution && <p className="mt-1 text-sm text-red-600">{errors.institution}</p>}
                                    </div>

                                    {/* Phone (Optional) */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Role (Optional)
                                        </label>
                                        <select
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500"
                                        >
                                            <option value="">Select your role</option>
                                            <option value="spiritual-leader">Spiritual Leader / Guru</option>
                                            <option value="administrator">Administrator</option>
                                            <option value="coordinator">Community Coordinator</option>
                                            <option value="trustee">Trustee / Board Member</option>
                                            <option value="volunteer">Volunteer</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            How can we help? *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-spiritual-indigo-500`}
                                            placeholder="Tell us about your institution, community size, current challenges, and what you're hoping to achieve with MZhub..."
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    <Button type="submit" variant="secondary" size="lg" className="w-full">
                                        Send Message
                                    </Button>

                                    <p className="text-sm text-gray-500 text-center">
                                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Contact Info & Additional Details */}
                        <div className="space-y-8">
                            <Card>
                                <h3 className="text-2xl font-bold text-spiritual-indigo-900 mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Email</p>
                                            <a href="mailto:contact@mzhub.com" className="text-spiritual-indigo-600 hover:underline">
                                                contact@mzhub.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Phone</p>
                                            <a href="tel:+15551234567" className="text-spiritual-indigo-600 hover:underline">
                                                +1 (555) 123-4567
                                            </a>
                                            <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Live Chat</p>
                                            <p className="text-gray-600">Available on our website</p>
                                            <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-gradient-to-br from-spiritual-indigo-50 to-spiritual-gold-50">
                                <h3 className="text-xl font-bold text-spiritual-indigo-900 mb-4">What to Expect</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-spiritual-indigo-600 mr-2">1.</span>
                                        <div>
                                            <strong>Quick Response:</strong> We'll reply within 24 hours to schedule your demo
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-spiritual-indigo-600 mr-2">2.</span>
                                        <div>
                                            <strong>Personalized Demo:</strong> 45-minute walkthrough customized to your needs
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-spiritual-indigo-600 mr-2">3.</span>
                                        <div>
                                            <strong>Q&A Session:</strong> All your questions answered by our experts
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-spiritual-indigo-600 mr-2">4.</span>
                                        <div>
                                            <strong>Custom Proposal:</strong> Tailored implementation plan and pricing
                                        </div>
                                    </li>
                                </ul>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-bold text-spiritual-indigo-900 mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-gray-900">How long does implementation take?</p>
                                        <p className="text-gray-600 text-sm">Typically 2-4 weeks from contract signing to launch, depending on content volume.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Is training provided?</p>
                                        <p className="text-gray-600 text-sm">Yes! We provide comprehensive training for your team and ongoing support.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">What are the pricing options?</p>
                                        <p className="text-gray-600 text-sm">Pricing varies by community size and features. We'll create a custom quote for you.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}
