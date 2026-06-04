# PixelForge Studio — Nuxt 3 Landing Page

A modern, animated single-page landing page built with **Nuxt 3**, **Vue 3 Composition API**, **AOS (Animate On Scroll)**, and native **MutationObserver** APIs.

---

## Quick Start

```bash
# Requires Node.js v22+ (via nvm)
nvm use 22.19.0

# Install dependencies
npm install

# Development server → http://localhost:3000
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Nuxt | 3.21.x | SSR framework & auto-imports |
| Vue | 3.5.x | Reactive UI components |
| AOS | 2.3.x | Scroll-triggered animations |
| TypeScript | 5.x | Type safety |
| Vite | 7.x | Build tool & HMR |

---

## Project Structure

```
nuxtApp/
├── assets/
│   └── css/
│       └── main.css               # Global styles & CSS variables
├── components/
│   ├── AppNavbar.vue              # Fixed navigation bar
│   ├── AppFooter.vue              # Site footer
│   └── sections/                  # All 15 page sections
│       ├── HeroSection.vue
│       ├── PartnersSection.vue
│       ├── AboutSection.vue
│       ├── StatsSection.vue       ← MutationObserver #1
│       ├── FeaturesSection.vue
│       ├── ServicesSection.vue
│       ├── HowItWorksSection.vue
│       ├── PortfolioSection.vue   ← MutationObserver #2
│       ├── TestimonialsSection.vue
│       ├── TeamSection.vue
│       ├── PricingSection.vue
│       ├── FaqSection.vue         ← MutationObserver #3
│       ├── BlogSection.vue
│       ├── NewsletterSection.vue
│       └── ContactSection.vue
├── layouts/
│   └── default.vue                # Wraps Navbar + page + Footer
├── pages/
│   └── index.vue                  # Composes all 15 sections
├── plugins/
│   └── aos.client.ts              # AOS initialisation (client-only)
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── docs/
│   ├── SECTIONS.md                # Section-by-section breakdown
│   ├── ANIMATIONS.md              # AOS setup & animation reference
│   ├── OBSERVERS.md               # MutationObserver implementations
│   └── STYLING.md                 # CSS variables & design system
└── nuxt.config.ts                 # Nuxt configuration
```

---

## Documentation

| Document | Description |
|---|---|
| [docs/SECTIONS.md](docs/SECTIONS.md) | All 15 sections — purpose, content, AOS attributes |
| [docs/ANIMATIONS.md](docs/ANIMATIONS.md) | AOS setup, animation types, global configuration |
| [docs/OBSERVERS.md](docs/OBSERVERS.md) | MutationObserver implementations explained |
| [docs/STYLING.md](docs/STYLING.md) | CSS variables, design tokens, layout utilities |

---

## Key Features

- **15 sections** covering a complete agency landing page
- **AOS scroll animations** on every section element with staggered delays
- **3 MutationObserver** implementations with genuine real-world use cases
- **Fixed navbar** that turns solid on scroll, with mobile hamburger menu
- **Animated counters** that count up when scrolled into view
- **Portfolio filter** with "Load More" — MutationObserver detects new cards
- **FAQ accordion** with smooth height animation — MutationObserver watches class changes
- **Pricing toggle** — monthly / annual billing with 20% discount
- **Newsletter form** with submission confirmation state
- **Contact form** with budget selector and office hours panel
- **Infinite marquee** partner logo strip
- **Dark theme** with purple/violet accent palette and CSS custom properties throughout
