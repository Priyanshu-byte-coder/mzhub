"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { isAuthenticated } from '@/lib/vault/auth'

export default function InvestorsPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated('investors')) {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 mb-6 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Investors & Strategic Backers
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            MZHub follows a long-term, mission-first growth approach supported by strategic backing and sustainable operations.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Operational Validation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Operational Validation
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub has demonstrated long-term operational credibility through:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Deep penetration in faith-based textile supply chains</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Decade-long distribution relationships</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Strong trust within minority and majority faith communities</span>
              </li>
            </ul>
          </motion.div>

          {/* Community Adoption Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Community Adoption Proof
            </h2>
            <ul className="space-y-2 ml-4 mb-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Nearly complete adoption within certain faith communities for textile needs</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Millions of meters of faith-specific textiles supplied over the last decade</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Trusted supplier to missionaries, religious leaders, and institutions</span>
              </li>
            </ul>
            <p className="text-secondary-light/80 dark:text-text-mist/80">
              This operational foundation supports MZHub's transition into scalable digital faith-tech platforms.
            </p>
          </motion.div>

          {/* Growth Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Growth Strategy
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light dark:text-accent-gold/90 mb-1">Phase 1</h3>
                  <p className="text-secondary-light/80 dark:text-text-mist/80">
                    Strengthen minority and underserved faith communities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                  <span className="text-accent-gold font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light dark:text-accent-gold/90 mb-1">Phase 2</h3>
                  <p className="text-secondary-light/80 dark:text-text-mist/80">
                    Expand into larger national and global faith ecosystems
                  </p>
                </div>
              </div>
            </div>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mt-4 pt-4 border-t border-secondary-light/10 dark:border-accent-gold/10">
              Growth is designed to be ethical, inclusive, and sustainable.
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
