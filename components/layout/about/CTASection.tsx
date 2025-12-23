"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { BlobButton } from "@/components/ui/shared/BlobButton"

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-neutral-light dark:bg-primary-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6">
        {/* Bold Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-light dark:text-white leading-tight mb-4">
            Create Bold.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-light dark:text-white leading-tight">
            Deliver Better.
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-24"
        >
          <BlobButton as={Link} href="/projects">
            See our work
          </BlobButton>
          <BlobButton as={Link} href="/contact">
            Get in touch
          </BlobButton>
        </motion.div>

        {/* Large MZHub Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px]">
            {/* Light theme logo */}
            <img 
              src="/shared/MZHub-logo.svg" 
              alt="MZHub Logo"
              className="w-full h-full object-contain dark:hidden opacity-20"
            />
            {/* Dark theme logo */}
            <img 
              src="/shared/MZHub-logo_w.svg" 
              alt="MZHub Logo"
              className="w-full h-full object-contain hidden dark:block opacity-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
