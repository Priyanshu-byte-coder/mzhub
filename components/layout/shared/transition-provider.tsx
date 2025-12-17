'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { PageTransition } from '@/components/ui/shared/page-transition'

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevPathname, setPrevPathname] = useState(pathname)

  useEffect(() => {
    if (pathname !== prevPathname) {
      setIsTransitioning(true)
      setPrevPathname(pathname)

      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [pathname, prevPathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition key={pathname} />}
      </AnimatePresence>
      {children}
    </>
  )
}
