'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import Card from '@/components/ui/shared/Card'
import { BlobButton } from '@/components/ui/shared/BlobButton'
import ContactHero from '@/components/layout/contact/ContactHero'

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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitError(null)

        if (validateForm()) {
            setIsSubmitting(true)
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        institution: formData.institution,
                        phone: formData.phone,
                        role: formData.role,
                    }),
                })

                const data = await response.json()

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to send message')
                }

                setSubmitted(true)

                // Reset form after success
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
                }, 5000)
            } catch (error) {
                setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
            } finally {
                setIsSubmitting(false)
            }
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
        <div className="bg-white dark:bg-primary-dark">
            {/* Hero */}
            <ContactHero />

            {/* Contact Form Section */}
            <SectionWrapper className="bg-neutral-light dark:bg-primary-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-6">Request a Demo</h2>
                            <p className="text-secondary-light/90 dark:text-text-mist mb-8">
                                Fill out the form below and we'll get back to you within 24 hours to schedule a personalized demo of the MZhub platform.
                            </p>

                            {submitError && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6"
                                >
                                    <div className="flex items-center">
                                        <span className="text-4xl mr-4">⚠️</span>
                                        <div>
                                            <h3 className="font-bold text-red-900 text-xl mb-1">Error</h3>
                                            <p className="text-red-800">{submitError}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

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
                                        <label htmlFor="name" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'}
                                                } focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold`}
                                            placeholder="Swami Krishna / Father John / Rabbi Cohen"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    {/* Institution */}
                                    <div>
                                        <label htmlFor="institution" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            Institution Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="institution"
                                            name="institution"
                                            value={formData.institution}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.institution ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold`}
                                            placeholder="Temple / Church / Mosque / Ashram / Synagogue"
                                        />
                                        {errors.institution && <p className="mt-1 text-sm text-red-600">{errors.institution}</p>}
                                    </div>

                                    {/* Phone (Optional) */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            Phone Number (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    {/* Role */}
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            Your Role (Optional)
                                        </label>
                                        <select
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold"
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
                                        <label htmlFor="message" className="block text-sm font-semibold text-secondary-light dark:text-text-mist mb-2">
                                            How can we help? *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                } focus:outline-none focus:ring-2 focus:ring-accent-blue dark:focus:ring-accent-gold`}
                                            placeholder="Tell us about your institution, community size, current challenges, and what you're hoping to achieve with MZhub..."
                                        />
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    <BlobButton as="button" type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </BlobButton>

                                    <p className="text-sm text-secondary-light/60 dark:text-text-mist/60 text-center">
                                        By submitting this form, you agree to our privacy policy. We'll never share your information.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Contact Info & Additional Details */}
                        <div className="space-y-8">
                            <Card>
                                <h3 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">Other Ways to Reach Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Email</p>
                                            <a href="mailto:contact@mzhub.com" className="text-accent-blue dark:text-accent-gold hover:underline">
                                                contact@mzhub.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Phone</p>
                                            <a href="tel:+15551234567" className="text-accent-blue dark:text-accent-gold hover:underline">
                                                +1 (555) 123-4567
                                            </a>
                                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <p className="font-semibold text-secondary-light dark:text-accent-gold">Live Chat</p>
                                            <p className="text-secondary-light/90 dark:text-text-mist">Available on our website</p>
                                            <p className="text-sm text-secondary-light/70 dark:text-text-mist/70">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-primary-light/30 dark:bg-secondary-dark/30">
                                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-4">What to Expect</h3>
                                <ul className="space-y-3 text-secondary-light/90 dark:text-text-mist">
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">1.</span>
                                        <div>
                                            <strong>Quick Response:</strong> We'll reply within 24 hours to schedule your demo
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">2.</span>
                                        <div>
                                            <strong>Personalized Demo:</strong> 45-minute walkthrough customized to your needs
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">3.</span>
                                        <div>
                                            <strong>Q&A Session:</strong> All your questions answered by our experts
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-blue dark:text-accent-gold mr-2">4.</span>
                                        <div>
                                            <strong>Custom Proposal:</strong> Tailored implementation plan and pricing
                                        </div>
                                    </li>
                                </ul>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">How long does implementation take?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Typically 2-4 weeks from contract signing to launch, depending on content volume.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">Is training provided?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Yes! We provide comprehensive training for your team and ongoing support.</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-secondary-light dark:text-accent-gold">What are the pricing options?</p>
                                        <p className="text-secondary-light/80 dark:text-text-mist text-sm">Pricing varies by community size and features. We'll create a custom quote for you.</p>
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
