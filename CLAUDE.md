# CLAUDE.md — Triveni Public School Website

> Single source of truth for this project. Read this before touching any code.

---

## Project Overview

**Client:** Triveni Public School (ICSE campus), Bagalagunte, Bengaluru  
**Owner:** Haseeb (Growth Masala agency)  
**Live domain:** `trivenipublicschool.in` (to be deployed)  
**GitHub:** `github.com/growthmasala/triveni-public-school`  
**Current branch:** `enhancing` (all new work goes here → merge to `main` when ready)

---

## How We Got Here

### Phase 1 — Vanilla HTML/CSS/JS (backup)
We first built a complete 6-page static site using vanilla HTML, CSS and JavaScript.
- **Location:** `/Users/haseeburrahmanmohammad/Desktop/Triveni Public school/html-backup/`
- Design was inspired by the **Dentia dental website** scraped at `/Users/haseeburrahmanmohammad/Desktop/claude-projects/dentia-extracted`
- Used: Bootstrap 5 grid, WOW.js animations, Swiper.js carousel, Remixicon icons, Urbanist + Inter fonts

### Phase 2 — Migration to Next.js (current)
Rebuilt the entire site in **Next.js 14 (App Router) + Tailwind CSS v4 + Framer Motion** for better performance, SEO, maintainability and deployment options.
- HTML version kept as backup — do NOT delete it
- All images migrated to `public/images/`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (replaces WOW.js) |
| Carousel | Swiper React (replaces CDN Swiper) |
| Forms | React Hook Form + Formspree |
| Icons | Remixicon (CDN in layout.tsx `<head>`) |
| Fonts | next/font/google — Urbanist (headings) + Inter (body) |
| Language | TypeScript |

---

## Design System

**Colors (from logo pixel-sampling):**
- Primary blue: `#272D66` (dark navy — dominant logo color)
- Accent orange: `#EC7E34` (warm orange — logo accent)

**All tokens live in `app/globals.css` under `@theme {}` — NOT in `tailwind.config.ts`.**  
This is a Tailwind v4 requirement. The `tailwind.config.ts` file exists but is effectively unused for tokens.

**Fonts:**
- next/font variables use `--nf-inter` and `--nf-urbanist` (prefixed to avoid circular reference with `@theme`)
- `@theme` maps them: `--font-inter: var(--nf-inter)` → generates `font-inter` utility

**Container:**
```css
.container-main {
  max-width: 1760px;
  padding: 0 clamp(20px, 6%, 96px);
}
```
This gives ~6% left/right breathing room. Navbar logo and hero text both use this — they stay left-aligned.

---

## Reference Documents

Located at `/Users/haseeburrahmanmohammad/Desktop/Triveni Public school/docs/`:

| File | Contents |
|---|---|
| `research-report.md` | Full competitor analysis, SEO keywords, parent review themes, strategic opportunities. Read before writing any copy. |
| `triveni-icse-profile.docx` | Official school profile document from the client. Contains Vision, Mission, Secretary message, Principal message, all program descriptions. |

**Images** at `/Users/haseeburrahmanmohammad/Desktop/Triveni Public school/images/` (23 real photos — no stock):
- Campus exteriors, classrooms, library, events (Independence Day, Janmashtami, Sports Day, NCC, Scouts, Kindergarten graduation, Marching band), leadership photo of Mr. K. Manjunath

---

## Pages

| Route | File | Key Sections |
|---|---|---|
| `/` | `app/page.tsx` | Hero, Why TPS, Programs, Pedagogy split, Testimonials, Gallery preview, FAQ, CTA |
| `/about` | `app/about/page.tsx` | School overview, Vision & Mission, Core values, Secretary + Principal messages, Affiliations |
| `/academics` | `app/academics/page.tsx` | ICSE overview, 4 grade wings (Pre-Primary → Senior), Pedagogy grid, Clubs, Assessment |
| `/admissions` | `app/admissions/page.tsx` | Trust cards, 4-step process, Enquiry form, Age criteria table, Documents list, FAQ |
| `/life` | `app/life/page.tsx` | Events, NCC & Scouts, Full gallery, Campus facilities |
| `/contact` | `app/contact/page.tsx` | Contact cards, Form + Map, Areas served, Reviews, CTA |

---

## Component Architecture

```
components/
├── layout/
│   ├── Navbar.tsx       — scroll-aware, mobile drawer, school name + logo
│   └── Footer.tsx       — 4-col grid, Growth Masala credit
├── ui/
│   ├── Button.tsx       — accent / primary / outline / outline-white variants
│   ├── FadeIn.tsx       — Framer Motion whileInView wrapper (replaces WOW.js)
│   ├── SectionLabel.tsx — orange pill above section headings
│   └── WhatsAppFloat.tsx — fixed bottom-right WhatsApp button
└── sections/
    ├── Hero.tsx          — full-screen home hero + stats bar
    ├── PageHero.tsx      — inner page header with breadcrumb
    ├── CTABanner.tsx     — admissions CTA banner
    ├── SplitSection.tsx  — 2-col image + content layout (reversible)
    ├── StatCounter.tsx   — animated number counter with IntersectionObserver
    ├── Testimonials.tsx  — Swiper carousel
    ├── FAQAccordion.tsx  — Framer Motion animated accordion
    ├── AdmissionsForm.tsx — React Hook Form + Formspree
    └── ContactForm.tsx   — React Hook Form + Formspree
```

---

## Real School Data (confirmed)

| Field | Value |
|---|---|
| Phone | +91 80 2372 1148 |
| WhatsApp | +91 80 2372 1148 (same) |
| Email | info@trivenipublicschool.in |
| Address | No.28/29, Nagasandra Post, Hessarghatta Main Road, Bagalagunte, Mallasandra, T. Dasarahalli, Bengaluru – 560073 |
| CISCE School Code | KA-214 |
| Founded | 2007 |
| Secretary | Mr. K. Manjunath |
| Board | ICSE (CISCE, New Delhi) |
| Grades | Pre-Primary to Grade X |
| JustDial rating | 4.2★ / 138 reviews |

---

## Major Issues Faced & How We Fixed Them

### 1. Tailwind v4 — `tailwind.config.ts` does nothing
**Problem:** All custom colors (`bg-primary`, `text-accent`, etc.) were invisible. The site rendered with no brand colors.  
**Cause:** This project uses Tailwind v4. In v4, `tailwind.config.ts` is ignored for design tokens. Tokens must go in `app/globals.css` under `@theme {}`.  
**Fix:** Moved ALL colors, fonts, radius, shadows into `@theme {}` block in `globals.css`. Deleted content from `tailwind.config.ts`.

### 2. Font circular reference in Tailwind v4 `@theme`
**Problem:** `next/font` sets CSS variable `--font-inter`. If `@theme` also defines `--font-inter: var(--font-inter)` → circular self-reference, fonts break.  
**Fix:** Renamed next/font variables to `--nf-inter` and `--nf-urbanist`, then mapped them in `@theme`: `--font-inter: var(--nf-inter)`.

### 3. Navbar invisible on mobile/tablet — school name white on white
**Problem:** School name disappeared on mobile at the top of every page, appeared only after scrolling.  
**Root cause:** Navbar had a white `z-40` backdrop behind the `z-50` transparent nav. Text was `text-white` when `scrolled = false` → white text on white backdrop = invisible.  
**Fix:** Mobile/tablet navbar (`< lg`) is now always white background + dark text regardless of scroll position. Transparent + white text only applies on desktop (`lg:`) where the dark hero image provides contrast.

### 4. Navbar breakpoint too early — broken on iPad
**Problem:** At 768px (iPad), `md:flex` triggered the desktop nav. Logo + school name + 6 links + button = too cramped, all colliding.  
**Fix:** Changed ALL `md:` nav breakpoints to `lg:` (1024px). Desktop nav only shows at 1024px+. Below that = hamburger menu.

### 5. Hero headline cut off on mobile
**Problem:** `whitespace-nowrap` forced the headline to one line, overflowing and getting cut off on narrow screens.  
**Fix:** Changed to `xl:whitespace-nowrap` — nowrap only applies at 1280px+ where there is enough room. Mobile wraps naturally.

### 6. PageHero excessive top padding on mobile
**Problem:** `pt-[140px]` (designed for desktop navbar height) was hardcoded on all inner pages, creating huge dead space on mobile where the navbar is only ~68px.  
**Fix:** Changed to responsive: `pt-24 md:pt-32 lg:pt-36` — each breakpoint accounts for the actual navbar height at that viewport size.

### 7. `next/image` aspect ratio warnings
**Problem:** Images using `width={X} height={Y}` props with `w-full h-full` CSS classes — Next.js warned about one dimension being modified without the other.  
**Fix:** Switched all container-fill images to use the `fill` prop with `position: relative` parent containers and proper `sizes` attribute. Fixed logos with `style={{ width: N, height: N }}`.

### 8. `scroll-behavior: smooth` warning
**Problem:** Next.js warned about `scroll-behavior: smooth` on `<html>` conflicting with route transitions.  
**Fix:** Removed from CSS, added `data-scroll-behavior="smooth"` attribute on the `<html>` element in `layout.tsx`.

### 9. Grid breakpoints too aggressive on tablet
**Problem:** `md:grid-cols-4` and `md:grid-cols-3` on 768px iPad were too cramped.  
**Fix:** All 4-column grids now use `grid-cols-2 lg:grid-cols-4`. All 3-column grids use `md:grid-cols-2 lg:grid-cols-3`.

### 10. Large image files breaking `git push`
**Problem:** `git push` failed with HTTP 400 — 23 school photos exceeded the default git HTTP buffer.  
**Fix:** `git config http.postBuffer 524288000` (500MB buffer) before pushing.

### 11. `bg-gradient-to-r` vs `bg-linear-to-r` in Tailwind v4
**Problem:** Tailwind v4 renamed gradient utilities. `bg-gradient-to-r` still works but linter suggests `bg-linear-to-r`.  
**Fix:** Updated to canonical v4 class names (`bg-linear-to-r`, `via-45%`, etc.).

---

## Still Pending (needs client input)

| Item | Current State | Action needed |
|---|---|---|
| Formspree ID | `REPLACE_WITH_FORMSPREE_ID` in both forms | Client signs up at formspree.io → share endpoint ID |
| Instagram | `href="#"` in footer | Client provides URL or confirm no account |
| YouTube | `href="#"` in footer | Client provides URL or confirm no channel |
| Email | `info@trivenipublicschool.in` | Confirm this is the live email |
| Principal's name | Not in profile doc | Confirm before adding to About page |
| Board exam results | Not provided | For academic credibility claim on homepage |

---

## SEO Notes

- Every page has unique `<title>`, `<meta description>`, `<link rel="canonical">`
- `EducationalOrganization` + `LocalBusiness` JSON-LD schema on Home and Contact
- `FAQPage` schema on Home and Admissions
- Target keywords: "ICSE school Bagalagunte", "ICSE school Hessarghatta Road", "ICSE school T. Dasarahalli", "ICSE school Mallasandra Bengaluru"
- Google Business Profile optimisation recommended separately

---

## Dev Commands

```bash
# Start dev server
cd triveni-next
npm run dev          # http://localhost:3000

# Build (verify zero errors before any PR)
npm run build

# Push to enhancing branch
git add -A
git commit -m "feat: ..."
git push origin enhancing
```

## Git Workflow

```
main         ← stable, deployed
  └── enhancing  ← all current work (YOU ARE HERE)
```

- Never push directly to `main`
- All work goes to `enhancing` → PR → merge to `main` when done
- Commit format: `feat:`, `fix:`, `style:`, `refactor:`
