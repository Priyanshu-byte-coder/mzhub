"use client"

import ParallaxHero from "@/components/layout/shared/ParallaxHero"

export default function ContactHero() {
  return (
    <ParallaxHero
      title={
        <>
          Let's <span className="text-accent-gold">Connect</span>
        </>
      }
      description="Ready to explore how MZHub can serve your spiritual institution? We'd love to hear from you."
      sectionClassName="relative min-h-screen flex items-center justify-center overflow-hidden"
      backgroundVariant="contact"
    />
  )
}
