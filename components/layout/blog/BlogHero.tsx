"use client"

import ParallaxHero from "@/components/layout/shared/ParallaxHero"

export function BlogHero() {
  return (
    <ParallaxHero
      title={
        <>
          MZHub <span className="text-accent-gold">Blog</span>
        </>
      }
      description="Discover cutting-edge solutions in AI, cloud architecture, and digital transformation for FaithTech organizations"
      sectionClassName="relative min-h-screen flex items-center justify-center overflow-hidden"
      backgroundVariant="blog"
    />
  )
}
