"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components/ui/shared/Button'
import { Input } from '@/components/ui/shared/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/shared/tooltip'
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import { useTheme } from "next-themes"
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

export default function FooterNew() {
  const currentYear = new Date().getFullYear()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const footerLinks = {
    quickLinks: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Vault', href: '/vault' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section with Global Presence */}
          <div className="relative lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/shared/MZHub-logo.png"
                alt="MZHub Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">MZHub</span>
            </Link>

            {/* World Map with Location */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Our Global Presence</h4>
              <div className="relative rounded-lg overflow-hidden">
                {/* World Map Image */}
                <Image
                  src="/shared/world-map.png"
                  alt="World Map"
                  width={400}
                  height={200}
                  className="w-full h-auto opacity-60 dark:opacity-40"
                />

                {/* Mumbai Location Pin */}
                <div
                  className="absolute"
                  style={{ left: '66%', top: '46%' }}
                >
                  {/* Pulse animation */}
                  <div className="absolute w-2 h-2 bg-primary/40 dark:bg-accent-gold/40 rounded-full animate-ping" />
                  {/* Pin dot */}
                  <div className="relative w-2 h-2 bg-primary dark:bg-accent-gold rounded-full border border-white dark:border-gray-800 shadow-lg" />
                </div>

                {/* Location Card */}
                <div
                  className="absolute bg-background/95 dark:bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg px-2 py-1.5"
                  style={{ left: '45%', top: '25%', transform: 'translateX(-50%)' }}
                >
                  <div className="flex items-center gap-2">
                    {/* India Flag */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://flagcdn.com/w40/in.png"
                      alt="India flag"
                      width={20}
                      height={14}
                      className="h-3.5 w-5 rounded-sm border border-border/40 object-cover"
                    />
                    <div className="leading-tight">
                      <div className="font-semibold text-xs text-foreground">India</div>
                      <div className="text-[10px] text-muted-foreground">Mumbai, Maharashtra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-foreground transition-colors hover:text-primary dark:hover:text-accent-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Empowering spiritual institutions</p>
              <p>with AI-driven platforms</p>
              <p className="pt-2">Email: hello@mzhub.com</p>
              <p>Support: support@mzhub.com</p>
            </address>
          </div>

          {/* Social Media, Theme Toggle & Newsletter */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <TooltipProvider>
              <div className="mb-6 flex space-x-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>

            {/* Theme Toggle */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-3">Theme</h4>
              {mounted && (
                <div className="scale-[1.7] origin-left">
                  <Classic
                    duration={750}
                    toggled={theme === 'dark'}
                    toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    {...({} as any)}
                  />
                </div>
              )}
            </div>

            {/* Stay Connected - Newsletter */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Join our newsletter for updates on spiritual technology.
              </p>
              <form className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MZHub. All rights reserved. Empowering spiritual institutions with technology.
          </p>
          <nav className="flex gap-4 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground transition-colors hover:text-primary dark:hover:text-accent-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
