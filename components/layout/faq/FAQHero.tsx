"use client"

import ParallaxHero from "@/components/layout/shared/ParallaxHero"

export default function FAQHero() {
  return (
    <ParallaxHero
      eyebrow="Your Questions Answered"
      title={
        <>
          Frequently Asked <span className="text-accent-gold">Questions</span>
        </>
      }
      description="Everything you need to know about MZHub's faith-aligned AI platform for religious institutions."
      sectionClassName="relative min-h-screen flex items-center justify-center overflow-hidden"
      backgroundVariant="about"
    />
  )
}
