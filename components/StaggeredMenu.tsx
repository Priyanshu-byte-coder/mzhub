"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface StaggeredMenuItem {
  label: string
  href: string
}

export interface StaggeredMenuSocialItem {
  icon: React.ReactNode
  href: string
}

interface StaggeredMenuProps {
  position?: "left" | "right"
  colors?: string[]
  items: StaggeredMenuItem[]
  socialItems?: StaggeredMenuSocialItem[]
  displayItemNumbering?: boolean
  logoUrl?: string
  accentColor?: string
  changeMenuColorOnOpen?: boolean
  closeOnClickAway?: boolean
}

const menuVariants = {
  closed: {
    clipPath: "circle(0% at 100% 0%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    clipPath: "circle(150% at 100% 0%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const itemVariants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
}

const socialVariants = {
  closed: {
    opacity: 0,
    scale: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.05,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
}

export default function StaggeredMenu({
  position = "right",
  colors = ["#0f172a", "#1e293b", "#14b8a6"],
  items,
  socialItems = [],
  displayItemNumbering = false,
  logoUrl,
  accentColor = "#14b8a6",
  changeMenuColorOnOpen = false,
  closeOnClickAway = true,
}: StaggeredMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  React.useEffect(() => {
    if (!closeOnClickAway) return

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, closeOnClickAway])

  const backgroundColor = React.useMemo(() => {
    if (!changeMenuColorOnOpen) return colors[0]
    return isOpen ? colors[2] || colors[0] : colors[0]
  }, [isOpen, changeMenuColorOnOpen, colors])

  return (
    <div ref={menuRef} className="relative">
      <motion.button
        onClick={toggleMenu}
        className="relative z-50 rounded-full p-4 text-white shadow-lg transition-colors"
        style={{ backgroundColor }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "fixed inset-0 z-40 flex flex-col justify-center px-8 py-16",
              position === "left" ? "items-start" : "items-end"
            )}
            style={{
              background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2] || colors[0]} 100%)`,
            }}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="w-full max-w-md space-y-8">
              {logoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-12"
                >
                  <Image
                    src={logoUrl}
                    alt="Logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
              )}

              <nav className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 text-white transition-colors hover:text-opacity-80"
                    >
                      {displayItemNumbering && (
                        <span
                          className="text-sm font-mono opacity-50"
                          style={{ color: accentColor }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                      <span className="text-4xl font-bold tracking-tight transition-transform group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {socialItems.length > 0 && (
                <motion.div
                  className="flex gap-4 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {socialItems.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={index}
                      variants={socialVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="rounded-full border-2 border-white/30 p-3 text-white transition-colors hover:border-white hover:bg-white/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
