"use client"

import React from 'react'
import Image from 'next/image'

type CardItem = {
  title: string
  text: string
}

export default function StickyScroll({
  videoSrc = "/home/video/MZHub.mp4",
  items = [],
}: {
  videoSrc?: string
  items?: CardItem[]
}) {
  const cards = items.length
    ? items
    : [
        { title: "Compassion First", text: "We place people and purpose over technology. Every feature is designed to serve with empathy and clarity." },
        { title: "Transparency Always", text: "Clear, honest systems you can trust. Oversight stays with your institution—no surprises, ever." },
        { title: "Security by Design", text: "Private, protected, and resilient. Your community’s data remains sacred and safe." },
      ]

  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: scrolling cards */}
        <div className="space-y-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-blue/10 to-accent-gold/10 blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative rounded-2xl border border-secondary-light/10 dark:border-accent-gold/10 bg-white/80 dark:bg-card/80 backdrop-blur p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-light dark:text-accent-gold mb-3">
                  {card.title}
                </h3>
                <p className="text-secondary-light/90 dark:text-text-mist text-base md:text-lg leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: sticky video */}
        <div className="lg:sticky lg:top-24">
          <div className="relative w-full overflow-hidden rounded-2xl border border-secondary-light/10 dark:border-accent-gold/10 bg-black/20">
            <video
              src={videoSrc}
              className="w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
