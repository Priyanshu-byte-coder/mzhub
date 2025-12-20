"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Building2, ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { isAuthenticated } from '@/lib/vault/auth'

export default function GovernmentPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated('government')) {
      router.push('/vault')
    }
  }, [router])
  return (
    <div className="min-h-screen bg-neutral-light dark:bg-primary-dark relative overflow-hidden">
      <BackgroundPathsOnly />
      
      <div className="container-custom relative z-10 px-4 py-20">
        <Link 
          href="/vault"
          className="inline-flex items-center gap-2 text-secondary-light dark:text-text-mist hover:text-accent-gold dark:hover:text-accent-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Vault</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mb-6 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Government & Institutional Engagement
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            MZHub is designed with institutional responsibility, compliance, and ethical safeguards at its core.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Trust & Governance Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Trust & Governance Principles
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub platforms are built around:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Data sovereignty (community-owned data)</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Content integrity and doctrinal approval workflows</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Human-in-the-loop oversight for sensitive topics</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Responsible AI guardrails aligned with global ethical frameworks</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              These principles make MZHub suitable for engagement with public institutions, foundations, and regulated environments.
            </p>
          </motion.div>

          {/* Institutional Readiness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Institutional Readiness
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Secure, scalable architecture</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Vendor-independent infrastructure</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Audit-ready workflows</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Multilingual and regionally adaptive deployment</span>
              </div>
            </div>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mt-4">
              MZHub is structured for long-term collaboration with government bodies, educational institutions, and public-sector initiatives focused on culture, heritage, and digital inclusion.
            </p>
          </motion.div>
        </div>

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
