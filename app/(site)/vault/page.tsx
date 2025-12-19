"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, KeyRound, Shield } from 'lucide-react'
import { BackgroundPathsOnly } from '@/components/ui/home/background-paths'
import { setVaultSession } from '@/lib/vault/auth'

const PASSKEYS = {
  'PARTNERSHIP2024': { path: '/vault/partnership', page: 'partnership' },
  'COMMUNITY2024': { path: '/vault/community', page: 'community' },
  'GOVERNMENT2024': { path: '/vault/government', page: 'government' },
  'TALENT2024': { path: '/vault/talent', page: 'talent' },
  'INVESTORS2024': { path: '/vault/investors', page: 'investors' },
}

export default function VaultPage() {
  const [passkey, setPasskey] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const upperPasskey = passkey.toUpperCase().trim()
    const passkeyData = PASSKEYS[upperPasskey as keyof typeof PASSKEYS]

    if (passkeyData) {
      setVaultSession(passkeyData.page)
      setTimeout(() => {
        router.push(passkeyData.path)
      }, 500)
    } else {
      setIsLoading(false)
      setError('Invalid passkey. Please try again.')
      setPasskey('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light dark:bg-primary-dark relative overflow-hidden">
      <BackgroundPathsOnly />
      
      <div className="container-custom relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold/60 mb-6 shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-light dark:text-accent-gold mb-4">
              Secure Vault
            </h1>
            <p className="text-lg text-secondary-light/80 dark:text-text-mist">
              Enter your passkey to access digital proofs
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-secondary-light/10 dark:border-accent-gold/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="passkey" className="block text-sm font-medium text-secondary-light dark:text-text-mist mb-2">
                  Passkey
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-secondary-light/50 dark:text-text-mist/50" />
                  </div>
                  <input
                    type="password"
                    id="passkey"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-primary-dark border-2 border-secondary-light/20 dark:border-accent-gold/20 rounded-xl focus:outline-none focus:border-accent-gold dark:focus:border-accent-gold transition-colors text-secondary-light dark:text-text-mist placeholder:text-secondary-light/40 dark:placeholder:text-text-mist/40"
                    placeholder="Enter your passkey"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading || !passkey}
                className="w-full py-3 px-6 bg-gradient-to-r from-accent-gold to-accent-gold/80 hover:from-accent-gold/90 hover:to-accent-gold/70 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Access Vault</span>
                  </>
                )}
              </button>
            </form>

            {/* Info Section */}
            <div className="mt-6 pt-6 border-t border-secondary-light/10 dark:border-accent-gold/10">
              <p className="text-xs text-secondary-light/60 dark:text-text-mist/60 text-center">
                This area contains confidential digital proofs. Only authorized personnel with valid passkeys can access this content.
              </p>
            </div>
          </motion.div>

          {/* Security Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 text-sm text-secondary-light/60 dark:text-text-mist/60">
              <Shield className="w-4 h-4" />
              <span>Protected by enterprise-grade security</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
