# MZhub Marketing Website

A modern, SEO-optimized marketing website for **MZhub** — an AI-powered spiritual platform for religious institutions. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS, Framer Motion
- **SEO Optimized**: Comprehensive metadata, semantic HTML, sitemap, and robots.txt
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Smooth Animations**: Subtle, tasteful animations using Framer Motion
- **Spiritual Aesthetic**: Custom color palette (deep indigo + soft gold) with calm, trustworthy design
- **Complete Content**: 6 pages with production-ready copy and 5 detailed blog posts

## 📄 Pages

- **Home** (`/`) - Hero, How It Works, Features, Philosophy, Testimonials, CTA
- **About** (`/about`) - Mission, Values, Story, Team
- **Platform** (`/platform`) - Overview, 4 Core Modules, Security
- **Community** (`/community`) - Use Cases, Success Stories
- **Blog** (`/blog`) - 5 articles on spiritual technology
- **Contact** (`/contact`) - Validated contact form

## 🎨 Design

- **Color Palette**: Deep indigo (primary), soft gold (accent), neutral grays
- **Typography**: Inter (sans-serif) + Playfair Display (serif)
- **Animations**: Fade-in, slide-up, stagger effects on scroll
- **Special Emphasis**: Animated guru-line in hero section

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📂 Project Structure

```
mzhub_web/
├── app/                    # Next.js app router pages
│   ├── about/
│   ├── platform/
│   ├── community/
│   ├── blog/
│   ├── contact/
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable components (Button, Card, etc.)
├── lib/                   # Data and utilities
│   ├── blogPosts.ts
│   ├── testimonials.ts
│   └── teamMembers.ts
└── public/                # Static assets
```

## 🎯 Key Brand Message

> **"You are not replacing the guru. You are extending their reach."**

This core message is prominently featured and visually emphasized throughout the site.

## 🔧 Customization

### Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  spiritual: {
    indigo: { ... },
    gold: { ... }
  }
}
```

### Content

- **Blog posts**: Edit `lib/blogPosts.ts`
- **Testimonials**: Edit `lib/testimonials.ts`
- **Team members**: Edit `lib/teamMembers.ts`

## 📱 SEO Features

- Comprehensive meta tags on all pages
- Open Graph and Twitter Card support
- Semantic HTML5 structure
- Dynamic sitemap generation
- Robots.txt for crawler control
- Accessible headings hierarchy

## 🌟 Special Features

1. **Contact Form**: Client-side validation with success states
2. **Blog System**: Dynamic routes with static generation
3. **Smooth Animations**: Scroll-triggered Framer Motion animations
4. **Responsive Navigation**: Mobile-friendly menu with smooth transitions
5. **Spiritual Color Scheme**: Carefully chosen palette for trust and calm

## 📝 License

This is a production-ready website for MZhub. All rights reserved.

## 🤝 Support

For questions or support, visit the [Contact page](/contact) or email contact@mzhub.com.

---

**Built with ❤️ for spiritual institutions worldwide**
