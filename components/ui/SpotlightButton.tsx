"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, ReactNode } from "react"

interface SpotlightButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  backgroundColor?: string
  textColor?: string
  spotlightColor?: string
}

export const SpotlightButton = ({
  children,
  onClick,
  className = "",
  backgroundColor = "#5A6FA8",
  textColor = "#ffffff",
  spotlightColor = "#FFD700",
}: SpotlightButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spanRef.current || !btnRef.current) return
      const { width } = (e.target as HTMLElement).getBoundingClientRect()
      const offset = e.offsetX
      const left = `${(offset / width) * 100}%`

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" })
    }

    const handleMouseLeave = () => {
      if (!spanRef.current) return
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      )
    }

    const btn = btnRef.current
    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove as any)
      btn.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (btn) {
        btn.removeEventListener("mousemove", handleMouseMove as any)
        btn.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg px-8 py-4 text-lg font-medium transition-all ${className}`}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {children}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full"
        style={{
          backgroundColor: spotlightColor,
        }}
      />
    </motion.button>
  )
}
