"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Users, ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { isAuthenticated } from '@/lib/vault/auth'

export default function CommunityPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated('community')) {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Community & Social Stakeholders
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            MZHub serves diverse spiritual communities by building inclusive, multilingual, and accessible digital ecosystems.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Communities Served */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Communities Served
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub supports multiple spiritual traditions, including:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Jainism</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Hinduism</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Sikh (Khalsa Path)</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Buddhism</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Zoroastrianism (Parsi)</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Judaism</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Islam</span>
              </div>
              <div className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Christianity</span>
              </div>
            </div>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mt-4">
              Each community's teachings, rituals, and sensitivities are handled with contextual care.
            </p>
          </motion.div>

          {/* Community Engagement Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Community Engagement Model
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub enables:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>WhatsApp-based spiritual guidance and group engagement</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Virtual sanghas, study circles, and devotional communities</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Youth and elder cohorts for intergenerational learning</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              AI-powered tools help scale engagement without replacing human leadership.
            </p>
          </motion.div>

          {/* Social Impact Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Social Impact Focus
            </h2>
            <ul className="space-y-3 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Preserving ancient wisdom through digitization</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Making spiritual knowledge accessible regardless of geography or language</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Supporting minority and underrepresented faith communities</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              MZHub views technology as a social service, not just a product.
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
