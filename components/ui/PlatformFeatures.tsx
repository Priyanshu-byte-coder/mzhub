"use client"

import { cn } from "@/lib/utils"
import { Brain, Archive, Bell, BarChart3, Shield, Globe } from "lucide-react"

export function PlatformFeatures() {
  const features = [
    {
      title: "AI-Powered Guidance",
      description:
        "Provide 24/7 personalized spiritual guidance aligned with your teachings using advanced natural language AI.",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: "Digital Archives",
      description:
        "Searchable library of all your content—sermons, texts, videos, Q&As—preserved and accessible forever.",
      icon: <Archive className="w-8 h-8" />,
    },
    {
      title: "Automated Engagement",
      description:
        "Schedule reminders, send personalized messages, and maintain continuous connection with your devotees.",
      icon: <Bell className="w-8 h-8" />,
    },
    {
      title: "Community Analytics",
      description:
        "Understand your community's needs through insights on engagement, popular topics, and spiritual journeys.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Institutional Control",
      description:
        "Complete oversight of AI responses, content curation, and platform behavior. Your doctrine, your rules.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Multi-Language Support",
      description:
        "Serve devotees in their native languages while preserving the nuance of original teachings.",
      icon: <Globe className="w-8 h-8" />,
    },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-primary-light/30 dark:border-accent-gold/20",
        (index === 0 || index === 3) && "lg:border-l border-primary-light/30 dark:border-accent-gold/20",
        index < 3 && "lg:border-b border-primary-light/30 dark:border-accent-gold/20"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary-light/15 via-primary-light/10 dark:from-accent-gold/20 dark:via-accent-gold/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary-light/15 via-primary-light/10 dark:from-accent-gold/20 dark:via-accent-gold/10 to-transparent pointer-events-none" />
      )}
      {/* Glow effect on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full shadow-[inset_0_0_30px_rgba(99,102,241,0.15)] dark:shadow-[inset_0_0_30px_rgba(245,158,11,0.2)] pointer-events-none rounded-lg" />
      <div className="mb-4 relative z-10 px-10 text-secondary-light dark:text-accent-gold">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary-light/50 dark:bg-accent-gold/30 group-hover/feature:bg-secondary-light dark:group-hover/feature:bg-accent-gold transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-secondary-light dark:text-accent-gold">
          {title}
        </span>
      </div>
      <p className="text-sm text-secondary-light/80 dark:text-text-mist/90 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
