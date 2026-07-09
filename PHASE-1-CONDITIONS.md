# Phase 1: Foundation (MVP) — Role-Based Conditions

## Overview

Phase 1 delivers a live, polished landing page with browseable packages and a contact form. No booking engine yet. This is the public face of Hijjah — every design and engineering decision must encode the brand's spiritual, premium, and trustworthy character from day one.

---

## 1. Senior Product Designer

### Design System (Must Establish Before Any Code)

- [ ] **Design tokens defined** — color palette, spacing scale (4px base), border radius scale, shadow scale, opacity scale, z-index scale. Tokens must map 1:1 to Tailwind config extensions (no magic values).
- [ ] **Color system finalized** — Primary (Deep Emerald Green), Secondary (Gold), Accent (Warm Beige), Background (Off White), Text (Charcoal Black). Define light/dark mode variants for each. All ratios must pass WCAG AA contrast.
- [ ] **Typography scale** — Choose 1–2 premium typefaces (e.g., serif for headings evoking elegance/script heritage, sans-serif for body for readability). Define 6 levels: display, h1–h4, body, small. Establish line-height and letter-spacing per level.
- [ ] **Spacing & rhythm** — Consistent vertical rhythm (e.g., section padding of 16rem/20rem; component gap of 2rem/4rem). Whitespace is the primary luxury signal.
- [ ] **Component inventory** — Catalog every UI element needed in Phase 1: buttons (primary, secondary, outline, ghost, icon), cards (package, testimonial, stat), input fields, accordion, carousel, lightbox, navigation (mobile + desktop), footer, trust bar, section headers, badges, avatars.
- [ ] **Iconography** — Choose a single icon set (e.g., Lucide with custom Islamic geometric icons) and enforce consistency.
- [ ] **Photography direction** — Curate or source placeholder imagery: Makkah skyline, Madinah, pilgrims in Ihram, group prayers, aerial haram shots. All images must feel candid, warm, and reverent — not stocky. Define overlay gradients for text legibility.

### Visual Quality Gates

- [ ] Every section passes a "calm test" — remove one element; if the page breathes better, the layout needs simplification.
- [ ] No component exceeds two levels of visual hierarchy per viewport.
- [ ] Dark mode is not an afterthought — design both themes simultaneously for every component.
- [ ] Glassmorphism is used on exactly 0–2 elements in Phase 1 (stat cards or nav on scroll). No more.

---

## 2. UX Designer

### Information Architecture

- [ ] **Navigation structure** — Home, About, Packages, Gallery, Testimonials, FAQ, Contact. "Book Now" is a prominent CTA, not a nav link. Mobile nav uses a slide-in drawer with smooth transitions.
- [ ] **Hero section priority** — Headline (primary), subheading (secondary), 3 CTAs in order: "Book Your Journey" (primary), "Explore Packages" (secondary), "Watch Pilgrim Stories" (tertiary). No other content competes above the fold.
- [ ] **Scroll narrative** — Homepage sections ordered as: Hero → Trust Bar → About → Why Choose Us → Packages (preview) → Pilgrim Journey (storytelling preview) → Testimonials → Gallery → FAQ → Contact → Footer. Each section has a clear reason to exist in that position.

### Interaction Design

- [ ] **Scrolling behavior** — Smooth scroll for anchor links. Sections reveal progressively (not all at once). No horizontal scroll. No scrolljacking.
- [ ] **CTA hierarchy** — Exactly one primary action per section. Multiple CTAs must visually rank. "Book Your Journey" is the most important click in the entire product.
- [ ] **Forms** — Contact form has 4 fields max: Name, Email, Phone (optional), Message. Show inline validation on blur. Submit button shows loading state + success/failure feedback. No CAPTCHA — use honeypot + rate limiting instead.
- [ ] **Newsletter** — Single email input in footer. No double opt-in for MVP. Show success state inline.
- [ ] **Package cards** — Show: title, price, duration, hotel star rating, remaining seats, CTA. Hover reveals "Compare Packages" as secondary action. Cards link to package detail (placeholder page for Phase 1).

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | < 640px | Single column, stacked nav, reduced motion |
| Tablet | 640–1024px | 2-col grids, hamburger nav |
| Desktop | 1024–1440px | Full layout, horizontal nav |
| Wide | > 1440px | Max-width constraint (~1280px content), centered |

- [ ] Navigation collapses to hamburger at ≤ 1024px.
- [ ] Package cards go 1 → 2 → 3 columns.
- [ ] Gallery grid goes 1 → 2 → 3 → 4 columns.
- [ ] Touch targets ≥ 44px on mobile.

### Accessibility (WCAG AA Minimum)

- [ ] All interactive elements focus-visible with a 3px gold outline.
- [ ] Skip-to-content link as first focusable element.
- [ ] All images have descriptive alt text (not just "image" or empty).
- [ ] Color is never the sole indicator of state.
- [ ] Form inputs have associated labels (not placeholders as labels).
- [ ] Carousels support pause, previous/next, and keyboard navigation.
- [ ] Reduced motion media query respected — disable parallax and scale animations, preserve fade-in and opacity transitions.

---

## 3. Motion Designer

### Principles

- **Calm over flashy.** Every animation must justify itself. If removing it improves perception of load speed, remove it.
- **Duration range:** 300ms–600ms for UI transitions. 600ms–1200ms for scroll reveals. No animation faster than 150ms (jarring) or slower than 1200ms (tedious).
- **Easing:** Use `ease-out` for entrances, `ease-in-out` for state changes. Avoid `ease-in-out` for scroll reveals — use a custom cubic bezier: `cubic-bezier(0.16, 1, 0.3, 1)` (gentle deceleration).
- **Stagger:** Child elements stagger at 50ms–100ms intervals. Groups of 3+ items must stagger to avoid visual noise.

### Phase 1 Animation Inventory

- [ ] **Hero entrance** — Headline fades up + stagger (300ms stagger per word/line). Background image has slow gentle zoom (1→1.05 over 20s, infinite). CTAs fade up with 100ms delay after headline.
- [ ] **Scroll reveals** — Every section below the fold uses `fade-up` with `once: true`. Root margin at -100px (triggers slightly before element enters viewport).
- [ ] **Card hover** — Lift (translateY -4px) + subtle shadow deepen. 300ms, ease-out. No scaling or rotation.
- [ ] **Button hover** — Slight background brightening (not darkening). Optional subtle icon slide (if icon present). No scale or ripple in Phase 1 (ripple is Phase 5 polish).
- [ ] **Navigation** — Mobile drawer slides in from right, 300ms, ease-out. Overlay fades in behind. Desktop nav links have underline slide-in on hover.
- [ ] **Counter animations** — Trust bar stats (years, pilgrims served, etc.) count up on scroll into view. 1–2s duration, ease-out. Use `useInView` + `useSpring` from Framer Motion.
- [ ] **FAQ accordion** — Content expands with height animation (AnimatePresence). Rotate chevron icon. 300ms.
- [ ] **Testimonial carousel** — Fade transition between slides (not slide). Auto-advance every 6s, pause on hover/focus. 500ms crossfade.
- [ ] **Gallery lightbox** — Open: backdrop fade + image scale(0.95→1). Close: reverse. Navigation between images: slide. 400ms.
- [ ] **Smooth scroll** — `scroll-behavior: smooth` for anchor links, or use Lenis library for more control if needed.

### Reduced Motion

- [ ] Respect `prefers-reduced-motion`. Disable: parallax, zoom, lift, slide, scale, counter animations. Keep: fade-in (opacity only, 400ms), color transitions, crossfade carousel.
- [ ] Test with reduced motion on before shipping any animated component.

---

## 4. Full-Stack Engineer

### Project Scaffolding

- [ ] `npx create-next-app@latest hijjah --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- [ ] Install and configure: `shadcn/ui`, `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `next-themes` (dark mode), `@prisma/client`, `next-auth`
- [ ] Tailwind config extended with design tokens (colors, fonts, spacing, radius, shadows, keyframes for fade-up and gentle zoom)
- [ ] Global CSS: import fonts, set base styles, define `@layer utilities` for custom animations, reduced motion overrides
- [ ] ESLint + Prettier config committed. Pre-commit hooks via husky + lint-staged (format + lint).

### Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, ThemeProvider, Toaster
│   ├── page.tsx             # Homepage (compose sections)
│   ├── loading.tsx          # Global loading skeleton
│   ├── error.tsx            # Global error boundary
│   ├── not-found.tsx        # Custom 404
│   ├── packages/
│   │   ├── page.tsx         # Packages listing
│   │   └── [slug]/
│   │       └── page.tsx     # Package detail (placeholder in Phase 1)
│   ├── gallery/
│   │   └── page.tsx         # Journey Stories gallery
│   └── contact/
│       └── page.tsx         # Contact form
├── components/
│   ├── ui/                  # shadcn/ui components + custom primitives
│   ├── layout/              # Navbar, Footer, MobileNav
│   ├── sections/            # Homepage sections (Hero, About, WhyUs, TrustBar, etc.)
│   ├── cards/               # PackageCard, TestimonialCard, StatCard, GalleryCard
│   └── shared/              # SectionHeading, CTAButton, AnimatedWrapper, etc.
├── lib/
│   ├── utils.ts             # cn() utility
│   ├── animations.ts        # Framer Motion variants (fadeUp, staggerContainer, etc.)
│   └── constants.ts         # Site config, nav links, social links, stats
├── hooks/
│   ├── useScrollReveal.ts   # InView wrapper for section animations
│   └── useReducedMotion.ts  # Preference detection
├── data/
│   └── packages.ts          # Static package data (Phase 1 — no DB yet)
├── prisma/
│   └── schema.prisma        # Schema ready but unused until Phase 2
└── public/
    ├── images/              # Optimized WebP images
    └── videos/              # Hero background video (optional Phase 1)
```

### Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | ≤ 1.2s |
| Largest Contentful Paint | ≤ 2.0s |
| Cumulative Layout Shift | ≤ 0.05 |
| Total Bundle Size (gzipped) | ≤ 150KB |
| Image Weight per Page | ≤ 500KB |

### Image Optimization

- [ ] Use `next/image` for every image. No `<img>` tags.
- [ ] Provide WebP + AVIF formats. Fallback to JPEG.
- [ ] Define `sizes` attribute for responsive images.
- [ ] Lazy load all images below the fold. Hero image is `priority`.
- [ ] Cloudinary configured for asset delivery (even if using local placeholders in Phase 1).
- [ ] Blur placeholder for every image (blurDataURL or dominant color).

### SEO

- [ ] Metadata API used in every page layout — title, description, OG image, twitter card.
- [ ] Generate `sitemap.xml` via Next.js built-in sitemap generation.
- [ ] `robots.txt` allowing all crawlers.
- [ ] Semantic HTML hierarchy: one `<h1>` per page, proper `<section>`/`<article>`/`<nav>` elements.
- [ ] Structured data (JSON-LD) for Organization and WebSite schema on homepage.

### Deployment

- [ ] Vercel project linked to GitHub repo. Production branch: `main`.
- [ ] Preview deployments for all PRs.
- [ ] Custom domain configured (if available).
- [ ] Environment variables documented in `.env.example`.
- [ ] Analytics-ready but not wired in Phase 1 (placeholder script in layout for easy future addition).

### Code Quality

- [ ] All components use TypeScript strict mode. No `any` without explicit justification.
- [ ] No `use client` on layout or page level — colocate to the smallest interactive component.
- [ ] Server components preferred. Client components only where interactivity is required.
- [ ] No CSS modules or inline styles — Tailwind utility classes + `cn()` for conditional classes.
- [ ] No third-party UI library beyond shadcn/ui. No Bootstrap, MUI, or Chakra.
- [ ] Commit convention: `type(scope): description` (e.g., `feat(hero): add parallax background`, `fix(nav): mobile drawer not closing on route change`).
- [ ] Every PR reviewed against this conditions document before merge.

---

## Phase 1 Definition of Done

A section or component is **done** when:

- [ ] It matches the design spec visually (Product Designer sign-off)
- [ ] It follows the intended UX flow and is responsive (UX Designer sign-off)
- [ ] All animations are implemented and feel calm (Motion Designer sign-off)
- [ ] It is accessible (keyboard navigable, screen-reader friendly, contrast-compliant)
- [ ] It meets the performance budget
- [ ] It has no console errors or TypeScript errors
- [ ] It works in Chrome, Firefox, Safari, and Edge (latest 2 versions)

---

## Build Order (Recommended)

| # | Task | Role Lead |
|---|------|-----------|
| 1 | Scaffold Next.js project, configure Tailwind + shadcn/ui, folder structure | Engineer |
| 2 | Set up design tokens in Tailwind config, global CSS, fonts | Designer + Engineer |
| 3 | Build global layout: ThemeProvider, Navbar, Footer, Toaster | Designer + Engineer |
| 4 | Hero section (static bg, headline, CTAs) | Motion + Designer + Engineer |
| 5 | Trust Bar + About + Why Choose Us sections | Motion + Designer + Engineer |
| 6 | Package cards + `/packages` page | Designer + Engineer |
| 7 | Gallery + `/gallery` page with lightbox | Motion + Designer + Engineer |
| 8 | Testimonials carousel | Motion + Designer + Engineer |
| 9 | FAQ accordion section | Motion + Designer + Engineer |
| 10 | Contact form + `/contact` page | Designer + Engineer |
| 11 | Footer with newsletter | Designer + Engineer |
| 12 | SEO pass (metadata, sitemap, structured data) | Engineer |
| 13 | Performance pass (images, bundle audit, Lighthouse) | Engineer |
| 14 | Accessibility audit + fixes | Designer + Engineer |
| 15 | Deploy to Vercel, test live | Engineer |
