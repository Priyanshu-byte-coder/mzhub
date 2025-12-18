'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BlobButton } from '@/components/ui/shared/BlobButton'

export default function ContactForm() {
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
        <>
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
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
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
        </>
    )
}
