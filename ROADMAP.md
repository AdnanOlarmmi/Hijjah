# Hijjah — Build Roadmap

## Phase 1: Foundation (MVP)
**Goal:** A live, polished landing page + browse packages + contact.

- [ ] Next.js project scaffolding (App Router, TS, Tailwind, shadcn/ui)
- [ ] Project structure: components/, lib/, app/, prisma/
- [ ] Global layout: fonts, metadata, dark mode toggle, accessibility base
- [ ] Hero section: headline, CTA buttons, parallax/static hero image
- [ ] Sections: About, Why Choose Us, Trust bar
- [ ] Packages page: static package cards (no booking yet)
- [ ] Gallery page: Journey Stories grid with lightbox
- [ ] Testimonials: static carousel
- [ ] Contact page: form, map embed, WhatsApp button
- [ ] FAQ accordion section
- [ ] Elegant footer: links, socials, newsletter form
- [ ] Framer Motion: fade-in sections, hover lifts, smooth scroll
- [ ] SEO basics: meta tags, sitemap, OG images
- [ ] Deploy to Vercel

**Estimated:** 2–3 weeks (solo) · 1 week (team)

---

## Phase 2: Booking Engine
**Goal:** Users can browse packages and complete a booking.

- [ ] Database setup: PostgreSQL + Prisma schema
- [ ] Auth: NextAuth with email + Google OAuth
- [ ] Package detail page with full info + gallery
- [ ] Multi-step booking wizard (7 steps as spec'd)
  - Choose package
  - Traveler info form
  - Passport upload (Cloudinary)
  - Passport photo upload
  - Room selection
  - Payment (Paystack + Flutterwave)
  - Confirmation
- [ ] Progress indicators, autosave
- [ ] Booking confirmation email (Resend)
- [ ] Admin: view/manage bookings

**Estimated:** 3–4 weeks (solo) · 1.5–2 weeks (team)

---

## Phase 3: Pilgrim Dashboard
**Goal:** Logged-in pilgrims get a personalized dashboard.

- [ ] Dashboard layout with sidebar navigation
- [ ] Booking summary + status
- [ ] Visa status + passport verification display
- [ ] Flight ticket + hotel info
- [ ] Travel checklist (interactive)
- [ ] Departure countdown timer
- [ ] Payment history + receipts
- [ ] Document downloads
- [ ] Emergency contacts
- [ ] Travel itinerary view
- [ ] Learning videos section
- [ ] Announcements feed

**Estimated:** 2–3 weeks (solo) · 1 week (team)

---

## Phase 4: Learning Center & Content
**Goal:** A rich resource hub for pilgrims.

- [ ] Learning Center layout: topic cards, search
- [ ] Content pages: Umrah guide, Hajj guide, Ihram guide
- [ ] Packing checklist, travel tips, vaccinations
- [ ] Rich text / MDX content rendering
- [ ] Video embeds (YouTube/Cloudinary)
- [ ] Progress tracking for guides

**Estimated:** 1–2 weeks (solo) · 3–5 days (team)

---

## Phase 5: Storytelling & Polish
**Goal:** Elevate the experience from "website" to "journey."

- [ ] Cinematic scroll-based storytelling sections (Dream → Prepare → Travel → Worship → Return)
- [ ] Background video hero (Makkah footage)
- [ ] Animated counters, stats, trust indicators
- [ ] Parallax effects throughout
- [ ] Journey Stories gallery with timeline layout
- [ ] Video testimonial support
- [ ] Glassmorphism elements (subtle)
- [ ] Islamic geometric pattern accents (SVG)

**Estimated:** 2–3 weeks (solo) · 1 week (team)

---

## Phase 6: Extra Features
**Goal:** Delightful utilities that differentiate the platform.

- [ ] AI travel assistant chatbot
- [ ] Prayer times widget (API)
- [ ] Qibla direction indicator
- [ ] Live Makkah/Madinah weather
- [ ] Currency converter
- [ ] Notifications (in-app + email)
- [ ] Multi-language support (i18n)
- [ ] PWA + offline capability
- [ ] Dark mode refinement

**Estimated:** 3–4 weeks (solo) · 1.5–2 weeks (team)

---

## Phase 7: Hardening
**Goal:** Production-ready quality.

- [ ] Comprehensive accessibility audit (WCAG AA)
- [ ] Lighthouse score ≥ 95 all categories
- [ ] Image optimization pass (WebP, lazy loading, srcset)
- [ ] Error boundaries + graceful fallbacks
- [ ] Loading states, skeletons, empty states
- [ ] Rate limiting, CSRF, security headers
- [ ] Analytics (PostHog / Plausible)
- [ ] Load testing
- [ ] Multi-browser testing
- [ ] Performance budget enforcement

**Estimated:** 2 weeks (solo) · 1 week (team)

---

## Quick Summary

| Phase | Focus | Solo | Team |
|-------|-------|------|------|
| 1 | Foundation / MVP | 2–3 wk | 1 wk |
| 2 | Booking Engine | 3–4 wk | 1.5–2 wk |
| 3 | Pilgrim Dashboard | 2–3 wk | 1 wk |
| 4 | Learning Center | 1–2 wk | 3–5 d |
| 5 | Storytelling & Polish | 2–3 wk | 1 wk |
| 6 | Extra Features | 3–4 wk | 1.5–2 wk |
| 7 | Hardening | 2 wk | 1 wk |
| **Total** | | **~15–21 wk** | **~7–10 wk** |

Phases build on each other — recommend going in order. Phase 1 and 2 would already give you a functional, shippable product.
