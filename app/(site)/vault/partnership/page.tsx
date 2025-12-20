"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Handshake, ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { isAuthenticated } from '@/lib/vault/auth'

export default function PartnershipPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated('partnership')) {
      router.push('/vault')
    }
  }, [router])
  return (
    <div className="min-h-screen bg-neutral-light dark:bg-primary-dark relative overflow-hidden">
      <BackgroundPathsOnly />
      
      <div className="container-custom relative z-10 px-4 py-20">
        {/* Back Button */}
        <Link 
          href="/vault"
          className="inline-flex items-center gap-2 text-secondary-light dark:text-text-mist hover:text-accent-gold dark:hover:text-accent-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Vault</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold/60 mb-6 shadow-lg">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Partnerships & Collaborations
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            MZHub works closely with faith institutions, ethical businesses, and ecosystem partners to responsibly digitize spiritual knowledge and build sustainable faith-tech infrastructure.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Strategic Collaborations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Strategic Collaborations
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub collaborates with faith-driven institutions, textile organizations, content creators, and technology partners to ensure authenticity, scale, and long-term sustainability.
            </p>
            <div className="space-y-3">
              <p className="text-secondary-light/70 dark:text-text-mist/70 font-medium">Key collaboration areas include:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>Faith institutions and spiritual organizations</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>Ethical textile and faith-based merchandise partners</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>Technology and AI infrastructure collaborators</span>
                </li>
                <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                  <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span>Community platforms and engagement channels</span>
                </li>
              </ul>
              <p className="text-secondary-light/80 dark:text-text-mist/80 mt-4">
                These partnerships enable MZHub to deliver verified content, trusted commerce, and secure digital experiences across communities.
              </p>
            </div>
          </motion.div>

          {/* Content-Commerce Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Content–Commerce Integration Partnerships
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub integrates spiritual content with commerce in a non-intrusive, values-aligned manner:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Marketplace integrations for faith-based attire and ritual products</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Seamless purchase flows embedded within spiritual content</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Multi-platform access across web, mobile, and WhatsApp</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              This ensures monetization supports community sustainability, not exploitation.
            </p>
          </motion.div>

          {/* Expansion & Ecosystem Growth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Expansion & Ecosystem Growth
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub actively partners with:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Religious institutions</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>NGOs and social organizations</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Wellness and sustainability-focused brands</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              These collaborations allow rapid adoption while preserving cultural and doctrinal integrity.
            </p>
          </motion.div>
        </div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-accent-gold/10 dark:bg-accent-gold/5 rounded-xl p-4 border border-accent-gold/20">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-accent-gold" />
              <p className="text-sm text-secondary-light dark:text-text-mist">
                All documents are confidential and protected. Unauthorized distribution is prohibited.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
