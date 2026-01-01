'use client'

import SectionWrapper from '@/components/ui/shared/SectionWrapper'
import ScrollReveal from '@/components/ui/shared/scroll-reveal'
import { BookOpen, MessageCircle, ShoppingCart, ArrowRight } from 'lucide-react'

export default function HowWePartnerSection() {
    const pillars = [
        {
            icon: BookOpen,
            number: '01',
            title: 'Content',
            subtitle: 'Digitizing Your Heritage',
            description: 'We transform your physical archives into digital assets. Using advanced AI-OCR technology, we transcribe manuscripts, sermons, and historical documents—preserving them for future generations while making them instantly searchable and accessible.',
            capabilities: [
                'Manuscript digitization with AI-OCR',
                'Archive structuring and categorization',
                'Multi-language transcription',
                'Historical document preservation'
            ],
            color: 'from-blue-500/20 to-blue-600/10'
        },
        {
            icon: MessageCircle,
            number: '02',
            title: 'Companion',
            subtitle: 'Knowledge-Grounded AI',
            description: 'We build intelligent AI companions that live on platforms your community already uses—WhatsApp and Arattai. These aren\'t generic chatbots; they\'re knowledge-grounded agents trained on your specific teachings, providing 24/7 spiritual guidance that\'s contextual, doctrine-aligned, and reverent.',
            capabilities: [
                'WhatsApp & Arattai integration',
                'Doctrine-aligned AI responses',
                'Multilingual spiritual guidance',
                '24/7 automated support'
            ],
            color: 'from-purple-500/20 to-purple-600/10'
        },
        {
            icon: ShoppingCart,
            number: '03',
            title: 'Commerce',
            subtitle: 'Sustainable Ecosystems',
            description: 'We automate the operational backbone of your organization. From donation gateways and discourse subscriptions to event bookings and product sales—we integrate seamless commerce directly into your digital platforms, creating sustainable revenue streams while reducing administrative burden.',
            capabilities: [
                'Secure donation gateways',
                'Subscription management for discourses',
                'Event booking automation',
                'Product display and e-commerce'
            ],
            color: 'from-green-500/20 to-green-600/10'
        }
    ]

    return (
        <SectionWrapper className="bg-gradient-to-b from-neutral-light to-white dark:from-primary-dark/80 dark:to-primary-dark">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={4} blurStrength={10}>
                    <div className="text-center space-y-6 mb-20">
                        <p className="uppercase text-sm tracking-[0.45em] text-secondary-light/70 dark:text-text-mist/70">
                            OUR AGENCY MODEL
                        </p>
                        <h2 className="text-3xl md:text-5xl font-semibold text-secondary-light dark:text-accent-gold">
                            How We Partner
                        </h2>
                        <p className="text-xl md:text-2xl text-secondary-light/80 dark:text-text-mist max-w-4xl mx-auto leading-relaxed">
                            We're not a product company—we're a service-based agency that builds complete digital ecosystems through our three-pillar approach.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Three Pillars */}
                <div className="space-y-8 md:space-y-16">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon
                        const isEven = index % 2 === 0

                        return (
                            <ScrollReveal
                                key={pillar.title}
                                baseOpacity={0}
                                enableBlur={true}
                                baseRotation={isEven ? 2 : -2}
                                blurStrength={6}
                            >
                                <div className={`grid gap-6 lg:gap-12 items-center ${isEven ? 'lg:grid-cols-[1fr,1.2fr]' : 'lg:grid-cols-[1.2fr,1fr]'}`}>
                                    {/* Icon Card - Left on even, Right on odd */}
                                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="relative rounded-[28px] md:rounded-[36px] border-2 border-secondary-light/10 dark:border-secondary-dark/40 bg-gradient-to-br from-white/95 to-white/85 dark:from-primary-dark/80 dark:to-primary-dark/60 shadow-2xl p-6 md:p-12 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-500">
                                            {/* Gradient overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-50 dark:opacity-70`} />
                                            
                                            {/* Decorative pattern */}
                                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                                                <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                        <pattern id={`pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                                                            <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-accent-gold" />
                                                        </pattern>
                                                    </defs>
                                                    <rect width="200" height="200" fill={`url(#pattern-${index})`} />
                                                </svg>
                                            </div>

                                            <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6">
                                                {/* Number Badge */}
                                                <span className="text-5xl md:text-7xl font-bold text-accent-gold/20 dark:text-accent-gold/30">
                                                    {pillar.number}
                                                </span>

                                                {/* Icon */}
                                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-accent-gold/30 to-accent-gold/20 dark:from-accent-gold/40 dark:to-accent-gold/30 flex items-center justify-center border-2 border-accent-gold/40 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent-gold" strokeWidth={1.5} />
                                                </div>

                                                {/* Title */}
                                                <div className="space-y-1 md:space-y-2">
                                                    <h3 className="text-2xl md:text-4xl font-bold text-secondary-light dark:text-white">
                                                        {pillar.title}
                                                    </h3>
                                                    <p className="text-base md:text-xl font-medium text-accent-gold dark:text-accent-gold/90">
                                                        {pillar.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content - Right on even, Left on odd */}
                                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="space-y-5 md:space-y-6">
                                            <p className="text-base md:text-xl text-secondary-light/85 dark:text-text-mist leading-relaxed">
                                                {pillar.description}
                                            </p>

                                            {/* Capabilities List */}
                                            <div className="rounded-[20px] md:rounded-[24px] border border-secondary-light/10 dark:border-secondary-dark/40 bg-white/50 dark:bg-primary-dark/50 p-5 md:p-6 backdrop-blur-sm">
                                                <h4 className="text-xs md:text-sm uppercase tracking-wider font-semibold text-secondary-light/70 dark:text-text-mist/70 mb-3 md:mb-4">
                                                    Key Capabilities
                                                </h4>
                                                <ul className="space-y-2.5 md:space-y-3">
                                                    {pillar.capabilities.map((capability) => (
                                                        <li key={capability} className="flex items-start gap-2.5 md:gap-3 text-secondary-light/85 dark:text-text-mist">
                                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0 mt-0.5" strokeWidth={2} />
                                                            <span className="text-sm md:text-base">{capability}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>

                {/* Bottom CTA Statement */}
                <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={1} blurStrength={4}>
                    <div className="mt-12 md:mt-20 rounded-[24px] md:rounded-[32px] border-2 border-accent-gold/20 dark:border-accent-gold/30 bg-gradient-to-br from-accent-gold/5 via-white/90 to-accent-gold/10 dark:from-accent-gold/10 dark:via-primary-dark/70 dark:to-accent-gold/5 shadow-2xl px-6 md:px-16 py-8 md:py-12 text-center backdrop-blur-sm">
                        <h3 className="text-xl md:text-3xl font-bold text-secondary-light dark:text-accent-gold mb-4 md:mb-6">
                            Content → Companion → Commerce
                        </h3>
                        <p className="text-base md:text-xl text-secondary-light/85 dark:text-text-mist max-w-4xl mx-auto leading-relaxed">
                            This isn't just a workflow—it's a complete transformation. We don't sell software; we build sustainable digital ecosystems that honor your tradition while empowering your future.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    )
}
