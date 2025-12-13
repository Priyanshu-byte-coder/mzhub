# MZhub Marketing Website

> **A modern, enterprise-grade marketing platform for MZhub** — An AI-powered spiritual technology platform designed for religious institutions, temples, ashrams, and faith communities worldwide.

---

## 🎯 Project Status

### ⚠️ **TO-DO LIST**

- [ ] **Fill site with real information** (team, testimonials, content)
- [ ] **Projects page** (add real project MDX files and images)
- [ ] **Landing page optimization** (social proof, CTAs, demo video)
- [ ] **Blog page** (write production articles, author profiles)
- [ ] **Contact automation** (email integration, CRM, spam protection)
- [ ] **SEO optimization** (structured data, analytics, alt text, Core Web Vitals)

### ✅ **COMPLETED FEATURES**

- [x] **Core Architecture**: Next.js 14 App Router with TypeScript
- [x] **Responsive Design**: Mobile-first, fully responsive across all devices
- [x] **Theme System**: Dark/Light mode with system preference detection
- [x] **Animation Framework**: Framer Motion with scroll-triggered animations
- [x] **UI Components**: Comprehensive component library with shadcn/ui
- [x] **Navigation**: Responsive navbar with mobile menu
- [x] **Footer**: Multi-column footer with sitemap and social links
- [x] **Loading States**: Custom loading screen with animations
- [x] **Page Transitions**: Smooth route transitions
- [x] **Basic SEO**: Meta tags, Open Graph, Twitter Cards
- [x] **Sitemap**: Dynamic sitemap generation
- [x] **Robots.txt**: Search engine crawler configuration
- [x] **Contact Form**: Client-side validation (backend integration pending)
- [x] **Blog Infrastructure**: MDX support and dynamic routing
- [x] **Projects Infrastructure**: Project listing and detail pages
- [x] **Typography System**: Custom font configuration (Inter + Playfair Display)
- [x] **Color System**: Spiritual-themed color palette (indigo + gold)
- [x] **Icon System**: Lucide React, Tabler Icons, React Icons integration

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Component Library](#-component-library)
- [Styling & Theming](#-styling--theming)
- [API Routes](#-api-routes)
- [Content Management](#-content-management)

---

## 🌟 Overview

MZhub is a comprehensive marketing website built to showcase an AI-powered spiritual platform for religious institutions. The platform enables temples, ashrams, churches, mosques, and other faith communities to extend their spiritual reach through technology while preserving their sacred teachings.

### **Key Brand Message**
> *"You are not replacing the guru. You are extending their reach."*

This core philosophy is emphasized throughout the site, ensuring that technology serves as an amplifier of spiritual guidance rather than a replacement.

---

## 🛠 Tech Stack

### **Core Framework**
- **Next.js 14.2.0** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.0+** - Type-safe development

### **Styling & UI**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Framer Motion 11.18.2** - Animation library
- **GSAP 3.13.0** - Advanced animations
- **Three.js 0.167.1** - 3D graphics (for AnimatedCanvas)
- **next-themes 0.4.6** - Theme management

### **Icons & Graphics**
- **Lucide React 0.555.0** - Icon library
- **Tabler Icons 3.35.0** - Additional icons
- **React Icons 5.5.0** - Icon collection

### **Content & Data**
- **gray-matter 4.0.3** - Frontmatter parsing for MDX
- **MDX** - Markdown with JSX support

### **Utilities**
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.4.0** - Tailwind class merging
- **class-variance-authority 0.7.1** - Component variants

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## ✨ Features

### **🎨 Design & UX**
- **Modern Aesthetic**: Clean, professional design with spiritual undertones
- **Responsive Layout**: Mobile-first design, optimized for all screen sizes
- **Dark/Light Mode**: System-aware theme switching with smooth transitions
- **Smooth Animations**: Scroll-triggered animations, page transitions, hover effects
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
- **Custom Loading Screen**: Branded loading experience with animations

### **📄 Pages & Routes**
- **Home** (`/`) - Hero section, features, philosophy, testimonials, CTA
- **About** (`/about`) - Company mission, values, story, team showcase
- **Projects** (`/projects`) - Portfolio of implementations and case studies
- **Blog** (`/blog`) - Articles on spiritual technology and industry insights
- **Contact** (`/contact`) - Contact form with validation

### **🎯 Interactive Components**
- **Animated Hero**: Rotating text animation (Guru ↔ AI)
- **Video Showcase**: Embedded video with custom controls
- **Testimonial Carousel**: Staggered animation testimonials
- **Team Carousel**: Interactive team member showcase
- **Platform Features**: Hover cards with detailed feature descriptions
- **Infinite Carousel**: Continuous scrolling content
- **Scroll Animations**: Reveal, slide, fade effects on scroll
- **3D Canvas**: Three.js animated background

### **🔧 Technical Features**
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **Dynamic Routing**: File-based routing with Next.js App Router
- **API Routes**: Server-side endpoints for form handling
- **Image Optimization**: Next.js Image component with automatic optimization
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic code splitting for faster loads
- **TypeScript**: Full type safety across the codebase

---

## 🚀 Getting Started

### **Prerequisites**
- **Node.js**: 18.0.0 or higher
- **npm**: 9.0.0 or higher (or yarn/pnpm equivalent)
- **Git**: For version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/your-org/mzhub.git
cd mzhub

# Install dependencies
npm install

# Set up environment variables (if needed)
cp .env.example .env.local
# Edit .env.local with your configuration
```

### **Development**

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

The development server includes:
- Hot Module Replacement (HMR)
- Fast Refresh for instant updates
- Error overlay for debugging
- TypeScript type checking

### **Building for Production**

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Or export static site
npm run build && npm run export
```

### **Linting**

```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

---

## 📂 Project Structure

```
mzhub/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Site route group
│   │   ├── about/                # About page
│   │   │   └── page.tsx
│   │   ├── blog/                 # Blog pages
│   │   │   ├── [slug]/           # Dynamic blog post
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx          # Blog listing
│   │   ├── contact/              # Contact page
│   │   │   └── page.tsx
│   │   ├── projects/             # Projects pages
│   │   │   └── page.tsx
│   │   ├── layout.tsx            # Site layout
│   │   ├── page.tsx              # Homepage
│   │   └── sitemap.ts            # Dynamic sitemap
│   ├── api/                      # API routes
│   │   ├── blog/                 # Blog API endpoints
│   │   │   └── route.ts
│   │   └── contact/              # Contact form handler
│   │       └── route.ts
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── icon.tsx                  # Favicon generator
│   └── apple-icon.tsx            # Apple touch icon
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Main navigation
│   │   └── FooterNew.tsx         # Site footer
│   ├── ui/                       # UI components
│   │   ├── AnimatedCanvas.tsx    # 3D background
│   │   ├── BlobButton.tsx        # Animated button
│   │   ├── Button.tsx            # Base button
│   │   ├── Card.tsx              # Card component
│   │   ├── HoverCard.tsx         # Hover effect card
│   │   ├── PlatformFeatures.tsx  # Features section
│   │   ├── animated-tooltip.tsx  # Tooltip component
│   │   ├── background-paths.tsx  # SVG background
│   │   ├── canvas.tsx            # Canvas utilities
│   │   ├── checkbox.tsx          # Checkbox input
│   │   ├── container-scroll-animation.tsx
│   │   ├── glow-menu.tsx         # Glowing menu effect
│   │   ├── infinite-carousel.tsx # Infinite scroll
│   │   ├── input.tsx             # Text input
│   │   ├── label.tsx             # Form label
│   │   ├── loading-screen.tsx    # Loading animation
│   │   ├── page-transition.tsx   # Page transitions
│   │   ├── project-card.tsx      # Project card
│   │   ├── scroll-reveal.tsx     # Scroll animations
│   │   ├── scroll-slide-reveal.tsx
│   │   ├── switch.tsx            # Toggle switch
│   │   ├── textarea.tsx          # Text area input
│   │   ├── theme-toggle-button.tsx # Theme switcher
│   │   └── tooltip.tsx           # Tooltip
│   ├── RotatingText.tsx          # Animated text rotation
│   ├── stagger-testimonials.tsx  # Testimonial section
│   ├── team-carousel.tsx         # Team showcase
│   ├── theme-provider.tsx        # Theme context
│   ├── transition-provider.tsx   # Transition context
│   └── video-component.tsx       # Video player
│
├── lib/                          # Utilities and data
│   ├── blog.ts                   # Blog utilities
│   ├── blogPosts.ts              # Blog post data
│   ├── constants.ts              # App constants
│   ├── projects.ts               # Project utilities
│   ├── projectsData.ts           # Project data
│   ├── teamMembers.ts            # Team data
│   ├── testimonials.ts           # Testimonial data
│   └── utils.ts                  # Helper functions
│
├── types/                        # TypeScript types
│   ├── blog.ts                   # Blog types
│   ├── index.ts                  # Shared types
│   └── project.ts                # Project types
│
├── content/                      # Content files
│   └── projects/                 # Project MDX files
│
├── public/                       # Static assets
│   ├── icons/                    # Icon files
│   ├── images/                   # Image assets
│   ├── projects/                 # Project images
│   ├── team/                     # Team photos
│   ├── video/                    # Video files
│   ├── mzhub-logo.png            # Logo (PNG)
│   ├── mzhub-logo.svg            # Logo (SVG)
│   ├── mzhub-logo_w.svg          # Logo white variant
│   └── robots.txt                # Robots file
│
├── styles/                       # Additional styles
│
├── hooks/                        # Custom React hooks
│
├── .github/                      # GitHub configuration
│
├── .next/                        # Next.js build output
├── node_modules/                 # Dependencies
│
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── components.json               # shadcn/ui config
├── next.config.js                # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript types
├── package.json                  # Dependencies & scripts
├── package-lock.json             # Dependency lock file
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # This file
└── UPDATE-SUMMARY.md             # Update changelog
```

---

## 🏗 Architecture

### **App Router Structure**
The project uses Next.js 14's App Router with the following conventions:

- **Route Groups**: `(site)` group for main site pages
- **Dynamic Routes**: `[slug]` for blog posts and projects
- **Layouts**: Nested layouts for shared UI
- **Loading States**: `loading.tsx` for suspense boundaries
- **Error Handling**: `error.tsx` for error boundaries

### **Component Architecture**
- **Atomic Design**: Components organized by complexity
- **Composition**: Small, reusable components composed into larger features
- **Props Interface**: TypeScript interfaces for all component props
- **Client/Server**: Explicit `"use client"` directives where needed

### **State Management**
- **React Context**: Theme and transition providers
- **Local State**: useState for component-level state
- **Server State**: Server components for data fetching

### **Styling Strategy**
- **Tailwind Utility Classes**: Primary styling method
- **CSS Modules**: For component-specific styles (when needed)
- **CSS Variables**: For theme values and dynamic colors
- **Responsive Design**: Mobile-first breakpoints

---

## 🎨 Component Library

### **Layout Components**
- **`Navbar`**: Responsive navigation with mobile menu, theme toggle
- **`FooterNew`**: Multi-column footer with links and social icons

### **UI Components**
- **`Button`**: Primary button with variants (primary, secondary, outline)
- **`BlobButton`**: Animated blob effect button
- **`Card`**: Container with shadow and hover effects
- **`HoverCard`**: Card with advanced hover animations
- **`Input`**: Form input with validation states
- **`Textarea`**: Multi-line text input
- **`Checkbox`**: Accessible checkbox component
- **`Switch`**: Toggle switch component
- **`Label`**: Form label component
- **`Tooltip`**: Hover tooltip component

### **Animation Components**
- **`AnimatedCanvas`**: Three.js 3D background
- **`ScrollReveal`**: Fade-in on scroll
- **`ScrollSlideReveal`**: Slide-in on scroll
- **`PageTransition`**: Route change animations
- **`LoadingScreen`**: Initial page load animation
- **`RotatingText`**: Text rotation animation
- **`InfiniteCarousel`**: Continuous scrolling content

### **Feature Components**
- **`PlatformFeatures`**: Feature showcase grid
- **`StaggerTestimonials`**: Animated testimonial cards
- **`TeamCarousel`**: Team member carousel
- **`VideoShowcase`**: Video player with custom controls
- **`ProjectCard`**: Project preview card

---

## 🎨 Styling & Theming

### **Color Palette**

#### **Spiritual Theme**
```typescript
spiritual: {
  indigo: {
    50: '#f0f4ff',   // Lightest
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  // Base
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b'   // Darkest
  },
  gold: {
    50: '#fefce8',   // Lightest
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',  // Base
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12'   // Darkest
  }
}
```

#### **Semantic Colors**
```typescript
primary: {
  light: '#e0e7ff',
  DEFAULT: 'hsl(var(--primary))',
  dark: '#0f172a',
}
secondary: {
  light: '#6366f1',
  dark: '#1e293b',
}
accent: {
  gold: '#f59e0b',
  beige: '#fef3c7',
  blue: '#6366f1',
}
```

### **Typography**
- **Sans-serif**: Inter (body text, UI elements)
- **Serif**: Playfair Display (headings, emphasis)

### **Animations**
```typescript
animations: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'float': 'float 3s ease-in-out infinite',
}
```

---

## 📱 SEO & Performance

### **Current SEO Implementation**

#### **Meta Tags**
- Title templates with site name
- Descriptive meta descriptions
- Keywords meta tag
- Author and creator tags
- Robots directives

#### **Open Graph**
- OG title, description, type
- OG locale and URL
- Site name

#### **Twitter Cards**
- Summary large image card
- Title and description

#### **Technical SEO**
- Semantic HTML5 structure
- Proper heading hierarchy (H1 → H6)
- Alt text on images (needs completion)
- Dynamic sitemap generation
- Robots.txt configuration
- Canonical URLs

### **Performance Optimizations**
- **Image Optimization**: Next.js Image component with automatic WebP conversion
- **Font Optimization**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic route-based splitting
- **Dynamic Imports**: Lazy loading for heavy components (AnimatedCanvas)
- **Static Generation**: Pre-rendered pages at build time

---

## 🔌 API Routes

### **Contact Form** (`/api/contact`)
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Status**: ⚠️ Backend integration pending (currently logs to console)

---

## 📝 Content Management

### **Blog Posts**
Blog content is managed through:
1. **Static Data**: `lib/blogPosts.ts` (current implementation)
2. **MDX Files**: `content/blog/` (future implementation)

**Blog Post Structure**:
```typescript
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image?: string
}
```

### **Projects**
Projects use MDX files in `content/projects/`:

**Project Frontmatter**:
```yaml
---
title: "Project Title"
description: "Project description"
category: "Category"
tags: ["tag1", "tag2"]
image: "/projects/image.jpg"
gallery: ["/projects/img1.jpg", "/projects/img2.jpg"]
link: "https://project-url.com"
github: "https://github.com/repo"
featured: true
---
```

### **Team Members**
Team data in `lib/teamMembers.ts`:

```typescript
interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}
```

### **Testimonials**
Testimonial data in `lib/testimonials.ts`:

```typescript
interface Testimonial {
  quote: string
  author: string
  role: string
  organization: string
  image?: string
}
```

---

## 📄 License

This project is proprietary software developed for MZhub. All rights reserved.

**Copyright © 2024 MZhub. All rights reserved.**

---

**Built with ❤️ for spiritual institutions worldwide**

*Last Updated: December 2024*
