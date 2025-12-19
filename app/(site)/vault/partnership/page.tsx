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
  const proofs = [
    {
      title: "Strategic Alliance Agreement",
      description: "Partnership with leading spiritual technology providers",
      date: "January 2024",
      status: "Active"
    },
    {
      title: "Collaboration Framework",
      description: "Joint initiatives with religious institutions worldwide",
      date: "December 2023",
      status: "Active"
    },
    {
      title: "Technology Integration",
      description: "Partnerships with AI and cloud service providers",
      date: "November 2023",
      status: "Active"
    },
    {
      title: "Academic Partnerships",
      description: "Research collaborations with theological institutions",
      date: "October 2023",
      status: "Active"
    }
  ]

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
            Partnership & Collaboration
          </h1>
          <p className="text-lg text-secondary-light/80 dark:text-text-mist max-w-2xl mx-auto">
            Digital proofs of our strategic partnerships and collaborative initiatives
          </p>
        </motion.div>

        {/* Proofs Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {proofs.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-secondary-light/10 dark:border-accent-gold/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-light dark:text-accent-gold mb-2">
                    {proof.title}
                  </h3>
                  <p className="text-secondary-light/70 dark:text-text-mist/70 text-sm mb-3">
                    {proof.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>{proof.status}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-secondary-light/10 dark:border-accent-gold/10">
                <span className="text-sm text-secondary-light/60 dark:text-text-mist/60">
                  {proof.date}
                </span>
                <button className="flex items-center gap-2 text-accent-gold hover:text-accent-gold/80 transition-colors text-sm font-medium">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </motion.div>
          ))}
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
