"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { BackgroundPathsOnly } from "@/components/ui/home/background-paths"

const HeroAnimatedCanvas = dynamic(() => import("@/components/ui/home/AnimatedCanvas"), {
  ssr: false,
  loading: () => null,
})

interface BlobConfig {
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  color: string
}

const VARIANT_CONFIG = {
  about: {
    gradient: `radial-gradient(circle at 18% 25%, rgba(255, 224, 178, 0.35), transparent 55%),
      radial-gradient(circle at 82% 0%, rgba(148, 111, 255, 0.2), transparent 50%),
      linear-gradient(135deg, rgba(6, 3, 20, 0.85), rgba(24, 12, 34, 0.65))`,
    grid: "rgba(255, 255, 255, 0.06)",
    accent: "rgba(255, 214, 170, 0.6)",
    accentSoft: "rgba(131, 85, 255, 0.35)",
    blobs: [
      { top: "15%", left: "12%", size: 360, color: "rgba(255, 214, 170, 0.25)" },
      { top: "55%", right: "10%", size: 420, color: "rgba(131, 85, 255, 0.2)" },
    ] as BlobConfig[],
  },
  blog: {
    gradient: `radial-gradient(circle at 12% 18%, rgba(111, 208, 255, 0.25), transparent 55%),
      radial-gradient(circle at 88% 8%, rgba(255, 214, 153, 0.25), transparent 50%),
      linear-gradient(135deg, rgba(4, 12, 24, 0.85), rgba(12, 20, 48, 0.7))`,
    grid: "rgba(255, 255, 255, 0.05)",
    accent: "rgba(88, 190, 255, 0.65)",
    accentSoft: "rgba(255, 189, 113, 0.35)",
    blobs: [
      { top: "10%", right: "18%", size: 340, color: "rgba(80, 180, 255, 0.22)" },
      { bottom: "10%", left: "20%", size: 420, color: "rgba(255, 189, 113, 0.18)" },
    ] as BlobConfig[],
  },
  projects: {
    gradient: `radial-gradient(circle at 20% 10%, rgba(255, 214, 153, 0.25), transparent 50%),
      radial-gradient(circle at 75% 15%, rgba(92, 225, 230, 0.22), transparent 55%),
      linear-gradient(135deg, rgba(5, 10, 24, 0.85), rgba(13, 28, 52, 0.75))`,
    grid: "rgba(255, 255, 255, 0.05)",
    accent: "rgba(255, 214, 153, 0.65)",
    accentSoft: "rgba(92, 225, 230, 0.35)",
    blobs: [
      { top: "25%", left: "10%", size: 400, color: "rgba(255, 214, 153, 0.2)" },
      { bottom: "15%", right: "12%", size: 460, color: "rgba(86, 204, 242, 0.2)" },
    ] as BlobConfig[],
  },
  contact: {
    gradient: `radial-gradient(circle at 15% 15%, rgba(255, 214, 153, 0.3), transparent 55%),
      radial-gradient(circle at 85% 5%, rgba(255, 130, 130, 0.18), transparent 45%),
      linear-gradient(135deg, rgba(8, 8, 20, 0.85), rgba(22, 6, 28, 0.75))`,
    grid: "rgba(255, 255, 255, 0.05)",
    accent: "rgba(255, 214, 153, 0.6)",
    accentSoft: "rgba(255, 135, 135, 0.35)",
    blobs: [
      { top: "20%", right: "18%", size: 360, color: "rgba(255, 214, 153, 0.22)" },
      { bottom: "8%", left: "25%", size: 420, color: "rgba(255, 135, 135, 0.18)" },
    ] as BlobConfig[],
  },
}

const ORBIT_SIZES = [420, 620, 860] as const
const PARTICLE_COLUMNS = [6, 18, 32, 46, 58, 72, 84] as const

export type HeroBackdropVariant = keyof typeof VARIANT_CONFIG

interface AnimatedHeroBackdropProps {
  variant?: HeroBackdropVariant
  className?: string
}

export function AnimatedHeroBackdrop({ variant = "projects", className }: AnimatedHeroBackdropProps) {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.projects
  const classes = ["absolute inset-0 -z-10 overflow-hidden pointer-events-none", className]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={classes}>
      <HeroAnimatedCanvas />
      <BackgroundPathsOnly />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: config.gradient, filter: "saturate(110%)" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(120deg, transparent 35%, ${config.accent} 45%, transparent 55%)`,
          backgroundSize: "180% 180%",
        }}
        animate={{ backgroundPosition: ["-40% -40%", "60% 60%", "-30% -30%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-40 mix-blend-screen dark:mix-blend-lighten"
        style={{
          backgroundImage: `linear-gradient(0deg, ${config.grid} 1px, transparent 1px), linear-gradient(90deg, ${config.grid} 1px, transparent 1px)`,
          backgroundSize: "140px 140px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "70px 70px", "0px 0px"],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {config.blobs.map((blob, index) => (
        <motion.div
          aria-hidden
          key={`${variant}-blob-${index}`}
          className="absolute rounded-full blur-3xl opacity-70"
          style={{
            background: blob.color,
            top: blob.top,
            bottom: blob.bottom ?? undefined,
            left: blob.left,
            right: blob.right,
            width: blob.size,
            height: blob.size,
          }}
          animate={{
            x: ["-3%", "3%", "-2%"],
            y: ["-2%", "4%", "-3%"],
            rotate: [0, 4, -3],
          }}
          transition={{ duration: 20 + index * 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      ))}

      {ORBIT_SIZES.map((size, index) => {
        const dimension = `${size}px`
        const offset = `calc(50% - ${size / 2}px)`
        return (
          <motion.div
            aria-hidden
            key={`orbit-${size}`}
            className="absolute rounded-full border border-dashed opacity-40"
            style={{
              width: dimension,
              height: dimension,
              top: offset,
              left: offset,
              borderColor: index % 2 === 0 ? config.accent : config.accentSoft,
            }}
            animate={{ rotate: [0, index % 2 === 0 ? 12 : -12, 0] }}
            transition={{ duration: 50 + index * 10, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      })}

      {PARTICLE_COLUMNS.map((left, index) => (
        <motion.div
          aria-hidden
          key={`particle-${left}`}
          className="absolute rounded-full"
          style={{
            left: `${left}%`,
            width: 3,
            height: 24 + (index % 3) * 12,
            background: index % 2 === 0 ? config.accent : config.accentSoft,
            opacity: 0.4,
            filter: "blur(0.5px)",
          }}
          initial={{ top: "-10%", opacity: 0 }}
          animate={{ top: "110%", opacity: [0, 0.7, 0] }}
          transition={{ duration: 8 + index, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px)` ,
          backgroundSize: "90px 90px",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
