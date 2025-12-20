"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowLeft, Download, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { isAuthenticated } from '@/lib/vault/auth'

export default function TalentPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated('talent')) {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
            Talent & Team
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            MZHub is built by a multidisciplinary team combining faith sensitivity, technology expertise, and operational experience.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-secondary-light dark:text-accent-gold mb-8 text-center"
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vatsal Shah */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-secondary-light/10 dark:border-accent-gold/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 relative overflow-hidden">
                <Image
                  src="/team/vatsal-shah.png"
                  alt="Vatsal Shah"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-2">
                  Vatsal Shah
                </h3>
                <p className="text-sm font-semibold text-accent-gold/80 dark:text-accent-gold/70 mb-4">
                  Founder, CEO
                </p>
                <div className="space-y-2 text-sm text-secondary-light/70 dark:text-text-mist/70">
                  <p>UB Whites</p>
                  <p>SP Jain School of Global Management., Singapore, Dubai, Sydney</p>
                  <p>Sales and Marketing at Woolworths Group</p>
                  <p>SASMIRA Institute of Management and Research, Textile Science and Research</p>
                </div>
              </div>
            </motion.div>

            {/* Hitender Singh */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-secondary-light/10 dark:border-accent-gold/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-green-500/5 relative overflow-hidden">
                <Image
                  src="/team/hitender-singh.png"
                  alt="Hitender Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-2">
                  Hitender Singh
                </h3>
                <p className="text-sm font-semibold text-accent-gold/80 dark:text-accent-gold/70 mb-4">
                  Fractional CTO
                </p>
                <div className="space-y-2 text-sm text-secondary-light/70 dark:text-text-mist/70">
                  <p>Over a decade of experience working with Fortune 500 clients, helping them adopt cloud, AI, and automation technologies</p>
                  <p>Expert in Microsoft Cloud Solutions, enterprise business applications, and program management with a focus on digital transformation and innovation</p>
                </div>
              </div>
            </motion.div>

            {/* Tijender Singh */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-secondary-light/10 dark:border-accent-gold/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-blue-500/5 relative overflow-hidden">
                <Image
                  src="/team/tijender-singh.png"
                  alt="Tijender Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-2">
                  Tijender Singh
                </h3>
                <p className="text-sm font-semibold text-accent-gold/80 dark:text-accent-gold/70 mb-4">
                  Fractional CTO
                </p>
                <div className="space-y-2 text-sm text-secondary-light/70 dark:text-text-mist/70">
                  <p>Consultant in AI Products, Models, Strategy & Cloud (Azure, DevOps)</p>
                  <p>Based in Germany | Employed by Accenture</p>
                  <p>15+ years of experience working with global clients</p>
                  <p>Expert in AI, Cloud Infrastructure, and Automation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Team Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <h2 className="text-2xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Team Philosophy
            </h2>
            <p className="text-secondary-light/80 dark:text-text-mist/80 mb-4">
              MZHub's team is:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Secular and diverse in personal faith backgrounds</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>United by respect for all traditions</span>
              </li>
              <li className="flex items-start gap-2 text-secondary-light/80 dark:text-text-mist/80">
                <CheckCircle className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>Committed to building context-aware, responsible AI</span>
              </li>
            </ul>
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
