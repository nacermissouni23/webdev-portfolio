# [cite_start]SOFTWARE REQUIREMENTS SPECIFICATION [cite: 1]
[cite_start]**Yacine Bencherif** [cite: 2]
[cite_start]**Portfolio Web Application** [cite: 3]

* [cite_start]**Document Version:** 1.0.0 [cite: 4]
* [cite_start]**Date:** March 2026 [cite: 5]
* [cite_start]**Prepared by:** Yacine Bencherif, Fullstack Web Developer, Algiers [cite: 6]
* [cite_start]**Technology Stack:** HTML5 · CSS3 · Vanilla JavaScript (ES2023) [cite: 7]
* [cite_start]**Status:** Ready for Development [cite: 8]

> [cite_start]"Every client who visits this portfolio should feel compelled to book a consultation before they reach the footer." [cite: 9]

---

## [cite_start]1. Introduction [cite: 10]

### [cite_start]1.1 Purpose [cite: 11]
[cite_start]This Software Requirements Specification (SRS) defines the complete functional, non-functional, design, and content requirements for the personal portfolio web application of Yacine Bencherif, a fullstack web developer based in Algiers, Algeria. [cite: 12] 
[cite_start]The document serves as the single source of truth for the design and development phase, governing every decision from information architecture to micro-interaction behavior. [cite: 13]

### [cite_start]1.2 Project Vision [cite: 14]
[cite_start]The portfolio is not a passive resume, it is a conversion machine. [cite: 15] 
[cite_start]Every design decision, copy choice, and interaction pattern is engineered toward a single measurable outcome: getting qualified visitors to book a consultation call before they leave the page. [cite: 16] 
[cite_start]The experience must feel like a premium, hand-crafted product, human, warm, and unmistakably Algerian in its cultural confidence, while performing at the level of award-winning international agencies. [cite: 17]

### [cite_start]1.3 Scope [cite: 18]
* [cite_start]A single-page web application (SPA behavior via smooth scroll, no routing library) [cite: 19]
* [cite_start]Pure HTML5, CSS3, and Vanilla JavaScript — zero frameworks, zero build steps [cite: 20]
* [cite_start]Fully self-contained: one HTML file, one CSS file, one JS file [cite: 21]
* [cite_start]No backend required: contact form uses mailto: or a static form service (Formspree) [cite: 22]
* [cite_start]Responsive across all viewports from 320px to 2560px wide [cite: 23]
* [cite_start]Deployable to any static host: GitHub Pages, Netlify, Vercel, or Algerian shared hosting [cite: 24]

### [cite_start]1.4 Definitions & Acronyms [cite: 25]

| Term | Definition |
| :--- | :--- |
| SPA | [cite_start]Single-Page Application — all content loaded once, navigation is scroll-based [cite: 26] |
| CTA | [cite_start]Call to Action — a button or link designed to trigger booking behavior [cite: 26] |
| LCP | [cite_start]Largest Contentful Paint — Core Web Vital measuring load performance [cite: 26] |
| CLS | [cite_start]Cumulative Layout Shift — Core Web Vital measuring visual stability [cite: 26] |
| Above the Fold | [cite_start]The portion of the page visible without scrolling on first load [cite: 26] |
| Mock Data | [cite_start]Placeholder Algerian-context content used during development phase [cite: 26] |

### [cite_start]1.5 Target Audience for This Document [cite: 27]
* [cite_start]The developer building the application (could be Yacine himself) [cite: 28]
* [cite_start]Any UI/UX reviewer validating the design direction [cite: 29]
* [cite_start]A client or stakeholder reviewing the project scope [cite: 30]

---

## [cite_start]2. Overall Description [cite: 31]

### [cite_start]2.1 Product Perspective [cite: 32]
[cite_start]The portfolio is a standalone marketing product with no external system dependencies beyond optional third-party services (Google Fonts CDN, Formspree for form submission). [cite: 33] 
[cite_start]It functions entirely in the browser and requires no authentication, database, or server-side logic. [cite: 34]

### [cite_start]2.2 User Personas [cite: 35]

[cite_start]**Persona A — The Algerian Business Owner** [cite: 36]

| Attribute | Detail |
| :--- | :--- |
| Name | [cite_start]Karim Boumediène, 38 [cite: 37] |
| Location | [cite_start]Algiers (Bab Ezzouar tech district) [cite: 37] |
| Goal | [cite_start]Launch an e-commerce platform for his import business within 3 months [cite: 37] |
| Pain Point | [cite_start]Has been burned by cheap freelancers who delivered buggy work and disappeared [cite: 37] |
| [cite_start]Device | iPhone 14, also checks on office desktop [cite: 37] |
| Decision Trigger | [cite_start]Sees real project work, a clear process, and a testimonial from someone he recognizes [cite: 37] |

[cite_start]**Persona B — The International Recruiter / Agency** [cite: 38]

| Attribute | Detail |
| :--- | :--- |
| Name | [cite_start]Sophie Marchand, 34 [cite: 39] |
| Location | [cite_start]Paris, sourcing MENA talent for a digital agency [cite: 39] |
| Goal | [cite_start]Find a reliable remote fullstack developer for a 6-month contract [cite: 39] |
| Pain Point | [cite_start]Portfolios look the same — wants to see personality and proven technical depth [cite: 39] |
| Device | [cite_start]MacBook Pro, 27" external monitor [cite: 39] |
| Decision Trigger | [cite_start]Code quality visible in project descriptions, professional English copy, clear booking CTA [cite: 39] |

[cite_start]**Persona C — The Algerian Startup Founder** [cite: 40]

| Attribute | Detail |
| :--- | :--- |
| Name | [cite_start]Imane Rahmani, 29 [cite: 41] |
| Location | [cite_start]Oran, founder of a healthtech startup [cite: 41] |
| Goal | [cite_start]Build an MVP web app for her startup within budget [cite: 41] |
| Pain Point | [cite_start]Limited budget; needs a developer she can trust to work autonomously [cite: 41] |
| Device | [cite_start]Samsung Android, laptop at night [cite: 41] |
| Decision Trigger | [cite_start]Transparent pricing indication, relatable tone, WhatsApp booking option [cite: 41] |

### [cite_start]2.3 Constraints [cite: 42]
* [cite_start]Technology: HTML, CSS, JavaScript only — no React, Vue, Angular, or any npm package [cite: 43]
* [cite_start]File count: Maximum 3 files (index.html, style.css, main.js) plus an /assets/ folder [cite: 44]
* [cite_start]External dependencies: Only Google Fonts (CDN) and optionally Formspree [cite: 45]
* [cite_start]Bundle size: Total page weight under 1MB including all images (use WebP) [cite: 46]
* [cite_start]No cookies, no tracking scripts, no analytics by default (GDPR-friendly) [cite: 47]
* [cite_start]Language: English primary, with a French/Arabic language toggle in the nav [cite: 48]

---

## [cite_start]3. Information Architecture & Site Structure [cite: 49]

### [cite_start]3.1 Page Sections (scroll order) [cite: 50]

| # | Section ID | Section Name | Primary Goal |
| :--- | :--- | :--- | :--- |
| 0 | #nav | Navigation | [cite_start]Orient, reduce friction, reveal booking CTA immediately [cite: 51] |
| 1 | #hero | Hero | Stop the scroll. [cite_start]Establish who Yacine is, what he does, and what visitors should do next [cite: 51] |
| 2 | #about | About | [cite_start]Build trust through humanity and empathy — not a resume dump [cite: 51] |
| 3 | #services | Services | [cite_start]Help visitors self-identify and see the solution to their specific problem [cite: 51] |
| 4 | #work | Selected Work | [cite_start]Prove capability with real (mock) project case studies [cite: 51] |
| 5 | #testimonials | Testimonials | [cite_start]Social proof from recognizable Algerian clients [cite: 51] |
| 6 | #process | How We Work | [cite_start]Reduce the fear of starting — show a clear, safe 3-step process [cite: 51] |
| 7 | #book | Book a Call | [cite_start]PRIMARY CONVERSION SECTION — make booking frictionless [cite: 51] |
| 8 | #footer | Footer | [cite_start]Final CTA, social links, legal [cite: 51] |

### [cite_start]3.2 Navigation Structure [cite: 52]
* The navigation bar is sticky (position: fixed). Logo on the left. [cite_start]Nav links centered. [cite: 53]
* A gold-accented "Book a Call" button always visible on the right. [cite_start]On mobile, links collapse into a hamburger menu. [cite: 54]
* [cite_start]The "Book a Call" button remains visible at all viewport sizes. [cite: 55]
* [cite_start]Nav links: About · Services · Work · Testimonials · Process · Book a Call (CTA button) [cite: 56]
* [cite_start]Language selector: [EN] [FR] [AR] — toggling swaps text content via JS data attributes. [cite: 57]

---

## [cite_start]4. Detailed Section Requirements [cite: 58]

### [cite_start]4.1 Hero Section (#hero) [cite: 59]

[cite_start]**4.1.1 Content Requirements** [cite: 60]

| Element | Specification |
| :--- | :--- |
| Pre-headline | [cite_start]Small label: "Fullstack Web Developer · Algiers, Algeria" [cite: 61] |
| Headline | "Great Algerian businesses deserve great websites." [cite_start]— viewport-filling, dramatic scale [cite: 61] |
| Sub-headline | [cite_start]"I help founders and businesses across Algeria build fast, beautiful web products that convert visitors into clients." [cite: 61] |
| Primary CTA | [cite_start]"Book a Free 30-Min Call" — gold filled button, large, center or left-aligned [cite: 61] |
| Secondary CTA | [cite_start]"See My Work →" — text link with animated underline [cite: 61] |
| Trust Signal | [cite_start]"12 Algerian businesses launched · 98% client satisfaction · 4-year track record" [cite: 61] |
| Background | [cite_start]Warm off-white (#F4F1EB) with a subtle geometric SVG pattern (Arabesque-inspired, very faint) [cite: 61] |
| Photo | [cite_start]Professional headshot of Yacine (mock: use placeholder.co/400x500) — positioned right side [cite: 61] |

[cite_start]**4.1.2 Behavior** [cite: 62]
* [cite_start]On page load: headline animates in word by word (CSS animation, staggered, 0.08s delay per word) [cite: 63]
* [cite_start]Photo slides in from right with a slight parallax effect on scroll [cite: 64]
* [cite_start]CTA button has a magnetic hover effect (JS-powered, moves toward cursor within 40px radius) [cite: 65]
* [cite_start]The hero occupies 100vh minimum on desktop, min-height: 600px on mobile [cite: 66]

### [cite_start]4.2 About Section (#about) [cite: 67]

[cite_start]**4.2.1 Content Requirements** [cite: 68]
[cite_start]This section positions Yacine as the empathetic guide — not as the hero. [cite: 69] 
[cite_start]The copy leads with understanding the client's world, then earns authority. [cite: 70]

| Element | Mock Content |
| :--- | :--- |
| Section Label | [cite_start]About [cite: 71] |
| Statement | [cite_start]"I know what it feels like to launch a business in Algeria and watch a bad website kill it before it starts." [cite: 71] |
| Story | Born in Tlemcen. Based in Algiers. Started coding at 17 to build a website for his uncle's textile business in Sidi Bel Abbès. That site generated 3x more orders in 6 months. [cite_start]Yacine has been building for Algerian business owners ever since. [cite: 71] |
| Authority Stats | [cite_start]12+ projects delivered · 4 years experience · React, Node.js, PostgreSQL specialist [cite: 71] |
| Values | [cite_start]On-time delivery · Clear communication (Darija, French, English) · Full ownership of the code [cite: 71] |
| Photo | [cite_start]Casual workspace photo (placeholder.co/600x400) with a warm filter [cite: 71] |

[cite_start]**4.2.2 Layout** [cite: 72]
* [cite_start]Two-column grid on desktop (text left, image right), single column on mobile. [cite: 73]
* [cite_start]The image has an offset border treatment (gold border, shifted 12px right and 12px down) that creates visual depth. [cite: 74]

### [cite_start]4.3 Services Section (#services) [cite: 75]

[cite_start]**4.3.1 Service Cards** [cite: 76]
[cite_start]Three cards, presented in a horizontal row on desktop, stacked on mobile. [cite: 77] 
[cite_start]Each card has an icon, a service name, a one-line description, and a list of 3–4 deliverables. [cite: 78]

| Card | Service | Icon | Deliverables |
| :--- | :--- | :--- | :--- |
| 1 | Web Application Development | < / > SVG icon | [cite_start]Custom SPA/MPA · REST API integration · Auth system · Admin dashboard [cite: 79] |
| 2 | E-Commerce Stores | 🛒 SVG icon | [cite_start]Product catalog · Cart & checkout · CIB/Baridimob payment · Order management [cite: 79] |
| 3 | Landing Pages & Portfolios | ✦ SVG icon | [cite_start]Conversion-optimized layout · Mobile-first · Fast load (< 1s) · WhatsApp CTA integration [cite: 79] |

[cite_start]**4.3.2 Behavior** [cite: 80]
* [cite_start]Cards reveal on scroll (IntersectionObserver, slide-up animation, 120ms stagger between cards) [cite: 81]
* [cite_start]Hover: card lifts with box-shadow, gold left-border appears [cite: 82]
* [cite_start]Each card has a subtle "From X,000 DZD" pricing anchor at the bottom — psychological anchoring [cite: 83]

### [cite_start]4.4 Selected Work Section (#work) [cite: 84]

[cite_start]**4.4.1 Project Case Studies (Mock Data — Algerian Context)** [cite: 85]
Four projects displayed as large cards. [cite_start]Each card shows a project thumbnail, project name, one-line description, tech tags, and a "View Project" link. [cite: 86]

| Project | Description | Client (Mock) | Tech Stack |
| :--- | :--- | :--- | :--- |
| Bourak Market | B2B wholesale marketplace for Algerian textile traders connecting Batna and Ghardaïa suppliers | Bourak SARL, Algiers | [cite_start]HTML · CSS · Node.js · MongoDB [cite: 87] |
| MediClic DZ | Doctor appointment booking platform for clinics in Oran and Constantine — mobile-first | Clinique El Amal | [cite_start]React · Express · PostgreSQL [cite: 87] |
| Atlas Coffee Co. | E-commerce store for an artisan Kabyle coffee brand shipping across Algeria | Atlas Coffee, Tizi Ouzou | [cite_start]HTML · CSS · JS · Stripe [cite: 87] |
| Saharatek Corp. | Corporate website + investor portal for a renewable energy startup in Tamanrasset | Saharatek, Algiers | [cite_start]Next.js · Tailwind · Supabase [cite: 87] |

[cite_start]**4.4.2 Layout & Interaction** [cite: 88]
* [cite_start]First project (Bourak Market) is displayed as a large featured card spanning full width [cite: 89]
* [cite_start]Remaining 3 projects in a 3-column grid [cite: 90]
* [cite_start]Hovering a card reveals a dark overlay with "View Project →" centered in the card [cite: 91]
* [cite_start]Images: placeholder.co images with aspect ratio 16:9, warm tint via CSS mix-blend-mode [cite: 92]
* [cite_start]A "See All Work" ghost button at the bottom (links to a /work.html page — defined scope boundary) [cite: 93]

### [cite_start]4.5 Testimonials Section (#testimonials) [cite: 94]

[cite_start]**4.5.1 Testimonial Cards (Mock Data)** [cite: 95]

| Client | Quote | Company | Result Metric |
| :--- | :--- | :--- | :--- |
| Karim B. | "Yacine delivered in 6 weeks what 2 other developers couldn't do in 6 months." | Bourak SARL | [cite_start]+340% online orders in 90 days [cite: 96] |
| Dr. Samia M. | "Our booking rate tripled. Patients can finally find us and book online from their phones." | Clinique El Amal, Oran | [cite_start]3x appointment bookings [cite: 96] |
| Lydia A. | "The website looked exactly like I dreamed it. Professional, fast, and our sales doubled." | Atlas Coffee Co. | [cite_start]2x online sales, month 1 [cite: 96] |

[cite_start]**4.5.2 Design Treatment** [cite: 97]
* [cite_start]Large pull-quote format: quotation mark graphic (CSS, oversized, gold opacity 0.15) behind the text [cite: 98]
* [cite_start]Client photo (40px circle avatar) + name + company on the left, result metric badge on the right [cite: 99]
* [cite_start]Section background: #1A1A2E (dark brand color) to create a visual break — white text [cite: 100]
* [cite_start]Auto-scrolling carousel on mobile (CSS scroll snap), static 3-column on desktop [cite: 101]

### [cite_start]4.6 How We Work Section (#process) [cite: 102]

[cite_start]**4.6.1 Process Steps** [cite: 103]

| Step | Name | Description |
| :--- | :--- | :--- |
| 01 | Discovery Call | 30-minute free call to understand your goals, budget, and timeline. No commitment required. [cite_start]We'll tell you honestly if we're a good fit. [cite: 104] |
| 02 | Proposal & Quote | Within 48 hours you receive a detailed written proposal: scope, timeline, price, and payment schedule. [cite_start]Everything in writing — no surprises. [cite: 104] |
| 03 | Build & Deliver | We build your project in agreed sprints. You get weekly progress updates and a staging URL to review at every stage. [cite_start]You own 100% of the code on delivery. [cite: 104] |

[cite_start]**4.6.2 Visual Design** [cite: 105]
* [cite_start]Three steps connected by a horizontal line on desktop (like a timeline) [cite: 106]
* [cite_start]Each step has a large number (01, 02, 03) in gold, the step name in dark blue, and description in body text [cite: 107]
* [cite_start]A final line: "From first call to live website: typically 3–6 weeks." [cite: 108]
* [cite_start]Ends with the primary CTA button again: "Start with a Free Call →" [cite: 109]

### [cite_start]4.7 Book a Call Section (#book) [cite: 110]
This is the highest-priority section. The entire portfolio leads here. [cite_start]Every friction point must be eliminated. [cite: 111]

[cite_start]**4.7.1 Content** [cite: 112]

| Element | Specification |
| :--- | :--- |
| Headline | [cite_start]"Ready to build something great together?" [cite: 113] |
| Subheadline | [cite_start]"Book a free 30-minute call. No pitch, no pressure — just a real conversation about your project." [cite: 113] |
| Form Fields | [cite_start]Name (required) · Email (required) · Phone / WhatsApp (optional) · Project type (dropdown) · Short description (textarea, 200 chars) [cite: 113] |
| Project Types | [cite_start]Web Application · E-Commerce Store · Landing Page / Portfolio · Other [cite: 113] |
| Submit Button | [cite_start]"Send My Request" — gold, full-width on mobile, large on desktop [cite: 113] |
| Alternatives | [cite_start]WhatsApp button: "+213 555 123 456 — Message on WhatsApp" (green, opens wa.me link) [cite: 113] |
| Trust Line | [cite_start]"I personally read every message and reply within 24 hours — usually within 2 hours." [cite: 113] |
| Success State | [cite_start]Form hides, success message appears: "Shukran! Your message is on its way. I'll be in touch by tomorrow." [cite: 113] |

[cite_start]**4.7.2 Form Behavior** [cite: 114]
* [cite_start]Real-time validation: fields turn gold-bordered on focus, red-bordered on invalid blur [cite: 115]
* [cite_start]Submit sends POST to Formspree endpoint (no server needed) [cite: 116]
* [cite_start]On success: form replaced by success state with animated checkmark (CSS) [cite: 117]
* [cite_start]WhatsApp link opens in new tab, pre-filled with "Hello Yacine, I want to discuss a project" [cite: 118]

---

## [cite_start]5. Visual Design System [cite: 119]

### [cite_start]5.1 Aesthetic Direction [cite: 120]
[cite_start]The aesthetic is "Refined Algerian Editorial" — a fusion of warm North African palette warmth, French editorial precision, and modern digital minimalism. [cite: 121] 
It must feel human and crafted, never template-like or AI-generated. [cite_start]The overarching personality: confident, warm, trustworthy, and distinctly Algerian. [cite: 122]

### [cite_start]5.2 Color Palette [cite: 123]

| Token Name | Hex Value | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| Ink / Almost Black | #0A0A0A | --c-ink | [cite_start]Body text, headings in light sections [cite: 124] |
| Brand Dark Blue | #1A1A2E | --c-brand | [cite_start]Nav, section headings, testimonials BG [cite: 124] |
| Gold Accent | #C9A84C | --c-gold | [cite_start]CTA buttons, decorative dividers, hover states, numbers [cite: 124] |
| Warm White | #F4F1EB | --c-bg | [cite_start]Primary background (never pure white) [cite: 124] |
| Muted Gray | #6B7280 | --c-muted | [cite_start]Captions, metadata, secondary text [cite: 124] |
| Warm Border | #D1C9B8 | --c-border | [cite_start]Card borders, dividers, input borders [cite: 124] |
| Success Green | #16A34A | --c-success | [cite_start]Form success state, positive indicators [cite: 124] |
| WhatsApp Green | #25D366 | --c-whatsapp | [cite_start]WhatsApp CTA button exclusively [cite: 124] |

### [cite_start]5.3 Typography [cite: 125]

| Role | Font Family | Source | Usage & Sizing |
| :--- | :--- | :--- | :--- |
| Display / Hero | Playfair Display | Google Fonts | [cite_start]Hero headline: clamp(3rem, 8vw, 7rem) · Section headings: 2.5–3.5rem · Weight 700 [cite: 126] |
| Body / UI | DM Sans | Google Fonts | [cite_start]Body text: 1rem/1.7 line-height · Labels: 0.75rem uppercase · Nav: 0.9rem · Weight 400/500 [cite: 126] |
| Code / Accent | DM Mono | Google Fonts | [cite_start]Stat numbers, tech tags, step numbers: 0.85rem · Weight 400 [cite: 126] |

[cite_start]Typographic scale rationale: Playfair Display brings editorial gravitas and a classic serif warmth that resonates with sophisticated Algerian business culture. [cite: 127] 
[cite_start]DM Sans is clean, modern, and highly legible at small sizes. [cite: 128] 
[cite_start]The pairing creates a 10:1 scale contrast between hero type and caption text — the gasping moment this portfolio needs. [cite: 129]

### [cite_start]5.4 Spacing System [cite: 130]
* Based on an 8px base unit. [cite_start]All spacing values are multiples of 8: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192px. [cite: 131]
* Section padding: 96px top/bottom on desktop, 64px on mobile. Card padding: 32px. [cite_start]Element gap: 24px. [cite: 132]

### [cite_start]5.5 Border Radius & Shadows [cite: 133]

| Element | Specification |
| :--- | :--- |
| [cite_start]Cards | border-radius: 4px — intentionally subtle, not pill-shaped [cite: 134] |
| [cite_start]CTA Button | border-radius: 2px — almost square, signals confidence not cuteness [cite: 134] |
| [cite_start]Avatar Images | border-radius: 50% (circle) [cite: 134] |
| [cite_start]Card Hover Shadow | box-shadow: 0 16px 40px rgba(10,10,10,0.12) — warm, not blue-tinted [cite: 134] |
| Hero Image | [cite_start]No border-radius — geometric, anchored, intentional asymmetry [cite: 134] |

### [cite_start]5.6 Animation & Motion Principles [cite: 135]
* Easing: ALWAYS cubic-bezier(0.16, 1, 0.3, 1) — expo out. [cite_start]NEVER use ease, ease-in, or linear [cite: 136]
* [cite_start]Duration: Reveals 0.6s · Micro-interactions 0.2s · Page transitions 0.4s [cite: 137]
* [cite_start]Scroll reveals: IntersectionObserver, threshold 0.15, translate Y 24px → 0, opacity 0 → 1 [cite: 138]
* [cite_start]Stagger: 80ms between sibling elements in a group (cards, list items, steps) [cite: 139]
* [cite_start]No animation on reduced-motion: @media (prefers-reduced-motion: reduce) disables all [cite: 140]
* [cite_start]Magnetic button: within 40px cursor range, button moves max 8px toward cursor [cite: 141]
* [cite_start]Custom cursor: 12px dot that scales to 40px on link hover — dark blue filled [cite: 142]

### [cite_start]5.7 Component Specifications [cite: 143]
[cite_start]**CTA Button — Primary** [cite: 144]

| Property | Value |
| :--- | :--- |
| Background | [cite_start]#C9A84C (Gold) [cite: 145] |
| Text Color | [cite_start]#0A0A0A (Ink — dark on gold for legibility) [cite: 145] |
| Padding | [cite_start]16px 40px (desktop) · 14px 28px (mobile) [cite: 145] |
| Font | [cite_start]DM Sans 500, 1rem, letter-spacing 0.02em [cite: 145] |
| Hover State | [cite_start]Background darkens to #B8933D, slight lift transform: translateY(-2px) [cite: 145] |
| [cite_start]Active State | transform: translateY(0) — resets, gives tactile press feel [cite: 145] |
| [cite_start]Focus State | outline: 3px solid #C9A84C, outline-offset: 4px (accessible) [cite: 145] |

---

## [cite_start]6. Non-Functional Requirements [cite: 146]

### [cite_start]6.1 Performance [cite: 147]

| Metric | Target | Method |
| :--- | :--- | :--- |
| Largest Contentful Paint (LCP) | < 2.5s | [cite_start]WebP images, font preloading, no render-blocking scripts [cite: 148] |
| Cumulative Layout Shift (CLS) | < 0.1 | [cite_start]Reserve image dimensions, no late-injected fonts [cite: 148] |
| First Input Delay (FID) | < 100ms | [cite_start]Defer all non-critical JS, no main-thread blocking [cite: 148] |
| Page Weight | < 1MB total | [cite_start]Compressed images, subset Google Fonts, minified CSS/JS [cite: 148] |
| Time to Interactive | < 3.5s on 3G | [cite_start]Critical CSS inlined, remaining loaded async [cite: 148] |
| Lighthouse Score | >= 95 all categories | [cite_start]Test at development complete milestone [cite: 148] |

### [cite_start]6.2 Accessibility [cite: 149]
* [cite_start]WCAG 2.1 Level AA compliance [cite: 150]
* [cite_start]All images have descriptive alt attributes [cite: 151]
* [cite_start]Color contrast ratio minimum 4.5:1 for body text, 3:1 for large text [cite: 152]
* [cite_start]All interactive elements reachable and operable via keyboard (Tab, Enter, Space) [cite: 153]
* [cite_start]Focus indicators visible and branded (not removed or hidden) [cite: 154]
* [cite_start]Semantic HTML: nav, main, section, article, header, footer used correctly [cite: 155]
* [cite_start]Form inputs have associated label elements (not placeholder-only) [cite: 156]
* [cite_start]ARIA labels on icon-only buttons [cite: 157]

### [cite_start]6.3 Browser Support [cite: 158]

| Browser | Target Version | Notes |
| :--- | :--- | :--- |
| Chrome / Edge | Last 2 major | [cite_start]Primary development target [cite: 159] |
| Firefox | Last 2 major | [cite_start]Full support required [cite: 159] |
| Safari (iOS + macOS) | Last 2 major | [cite_start]Critical — Algerian users heavy iOS usage [cite: 159] |
| Samsung Internet | Last 2 major | [cite_start]Common in Algeria on Android mid-range [cite: 159] |
| Internet Explorer | Not supported | [cite_start]Explicitly excluded [cite: 159] |

### [cite_start]6.4 Security [cite: 160]
* [cite_start]No user data stored client-side beyond form input during active session [cite: 161]
* [cite_start]Form submission via HTTPS to Formspree endpoint (TLS 1.2+) [cite: 162]
* [cite_start]No eval(), no innerHTML with user input — all DOM manipulation via textContent [cite: 163]
* [cite_start]CSP meta tag to prevent XSS: default-src 'self', font-src fonts.gstatic.com [cite: 164]
* [cite_start]External links use rel="noopener noreferrer" [cite: 165]

### [cite_start]6.5 SEO Requirements [cite: 166]
* [cite_start]Title tag: "Yacine Bencherif — Fullstack Web Developer Algeria" [cite: 167]
* [cite_start]Meta description: "I help Algerian businesses build fast, beautiful websites. Book a free call." [cite: 168]
* [cite_start]Open Graph tags for social sharing (og:title, og:description, og:image) [cite: 169]
* [cite_start]Semantic heading hierarchy: one H1, logical H2/H3 structure [cite: 170]
* [cite_start]Structured data: Person schema JSON-LD in the head [cite: 171]
* [cite_start]Sitemap.xml and robots.txt present [cite: 172]
* [cite_start]All page text indexable (no critical content hidden in JS-rendered only states) [cite: 173]

---

## [cite_start]7. Content Requirements & Copy Guidelines [cite: 174]

### [cite_start]7.1 Tone of Voice [cite: 175]

| Principle | Sounds Like | Does NOT Sound Like |
| :--- | :--- | :--- |
| Confident, not arrogant | "Here's what I'll build for you." | [cite_start]"We are the #1 developer in Algeria." [cite: 176] |
| Warm, not casual | "I know how much this project matters to you." | [cite_start]"Hey guys, check out my sick portfolio!" [cite: 176] |
| Clear, not clever | "Book a free 30-minute call." | [cite_start]"Embark on your digital journey today." [cite: 176] |
| Specific, not vague | "Delivered in 6 weeks. You own the code." | [cite_start]"We deliver quality solutions." [cite: 176] |
| Local, not generic | "I've built for businesses from Annaba to Tlemcen." | [cite_start]"Serving clients worldwide." [cite: 176] |

### [cite_start]7.2 Multilingual Requirements [cite: 177]
The default language is English. [cite_start]A language toggle in the nav switches between English (EN), French (FR), and Arabic (AR). [cite: 178] 
[cite_start]Implementation uses data-i18n attributes on all text nodes and a JS object containing all translations. [cite: 179] 
[cite_start]Arabic mode sets dir="rtl" on the body. [cite: 180]

### [cite_start]7.3 Mock Data Summary — Algerian Context [cite: 181]
All placeholder content must feel authentically Algerian. [cite_start]The following naming conventions apply to all mock data used during development: [cite: 182]
* [cite_start]People: Karim, Imane, Samia, Lydia, Youcef, Amira, Riad, Nour [cite: 183]
* [cite_start]Companies: SARL, EURL suffixes · Wilaya-specific locations (Algiers, Oran, Constantine, Annaba, Tizi Ouzou, Béjaïa, Blida, Batna) [cite: 184]
* [cite_start]Industries: Textile, Agroalimentaire, Santé, E-commerce, Immobilier, Tech startup [cite: 185]
* [cite_start]Currency: Algerian Dinar (DZD) for pricing anchors [cite: 186]
* [cite_start]Phone format: +213 5XX XXX XXX [cite: 187]

---

## [cite_start]8. Technical Architecture & File Structure [cite: 188]

### [cite_start]8.1 File Structure [cite: 189]
[cite_start]The following structure must be maintained exactly as specified: [cite: 190]

| Path | Description |
| :--- | :--- |
| index.html | [cite_start]Single HTML file containing all semantic markup and i18n data attributes [cite: 191] |
| style.css | [cite_start]All styles: custom properties, reset, layout, components, animations, responsive [cite: 191] |
| main.js | [cite_start]All interactivity: scroll animations, magnetic buttons, custom cursor, form, i18n [cite: 191] |
| assets/images/ | [cite_start]WebP images: hero-photo.webp, project-1.webp ... project-4.webp, og-image.webp [cite: 191] |
| assets/fonts/ | [cite_start]Self-hosted font fallback (optional — primary via Google Fonts CDN) [cite: 191] |
| assets/icons/ | [cite_start]SVG icon sprites for services section and social links [cite: 191] |
| sitemap.xml | [cite_start]Single-page sitemap for SEO [cite: 191] |
| robots.txt | [cite_start]Allow all crawlers [cite: 191] |

### [cite_start]8.2 CSS Architecture [cite: 192]
* [cite_start]CSS Custom Properties (variables) defined in :root for all design tokens [cite: 193]
* [cite_start]No CSS preprocessors (no Sass/Less) — vanilla CSS only [cite: 194]
* [cite_start]Mobile-first media queries: base styles for 320px, breakpoints at 640px, 1024px, 1440px [cite: 195]
* [cite_start]Single stylesheet, organized in this order: Reset → Variables → Base → Layout → Sections → Components → Animations → Utilities → Responsive [cite: 196]

### [cite_start]8.3 JavaScript Architecture [cite: 197]
* [cite_start]Strict mode enabled: "use strict" at top of main.js [cite: 198]
* [cite_start]Module pattern: all code wrapped in an IIFE or organized as named function exports [cite: 199]
* [cite_start]No global variables exposed beyond a single namespace object (e.g., Portfolio = {}) [cite: 200]
* [cite_start]IntersectionObserver for scroll animations (not scroll event listeners) [cite: 201]
* [cite_start]Custom cursor implemented via mousemove event, throttled with requestAnimationFrame [cite: 202]
* [cite_start]Form submission: fetch() to Formspree endpoint, async/await, error handling [cite: 203]
* [cite_start]i18n: JSON object in main.js, DOM traversal on language toggle, RTL handled via body attribute [cite: 204]

---

## [cite_start]9. Acceptance Criteria & Definition of Done [cite: 205]

### [cite_start]9.1 Functional Checklist [cite: 206]
* [cite_start]Navigation scrolls smoothly to the correct section on every link click [cite: 207]
* [cite_start]"Book a Call" CTA is visible in the viewport at all times on all screen sizes [cite: 208]
* [cite_start]Booking form validates all required fields and shows inline error messages [cite: 209]
* [cite_start]Booking form submits successfully and shows the success state [cite: 210]
* [cite_start]WhatsApp button opens wa.me with pre-filled message [cite: 211]
* [cite_start]Language toggle switches all visible text without page reload [cite: 212]
* [cite_start]All 4 project cards are visible and hoverable [cite: 213]
* [cite_start]Mobile hamburger menu opens/closes correctly [cite: 214]
* [cite_start]Custom cursor is visible on desktop and hidden on touch devices [cite: 215]

### [cite_start]9.2 Performance Checklist [cite: 216]
* [cite_start]Lighthouse Performance score >= 95 (measured on production URL) [cite: 217]
* [cite_start]Lighthouse Accessibility score >= 95 [cite: 218]
* [cite_start]Lighthouse SEO score >= 90 [cite: 219]
* [cite_start]Page loads in under 3 seconds on a throttled 3G connection (Chrome DevTools) [cite: 220]
* [cite_start]No layout shift visible during page load [cite: 221]

### [cite_start]9.3 Visual QA Checklist [cite: 222]
* [cite_start]No text overflows its container at any tested viewport (320px, 375px, 768px, 1280px, 1440px, 2560px) [cite: 223]
* [cite_start]Gold color is never used on white text (contrast violation) [cite: 224]
* [cite_start]All section transitions feel smooth — no jarring jumps [cite: 225]
* [cite_start]Images have correct aspect ratios and are never distorted [cite: 226]
* [cite_start]Arabic mode: all text reads right-to-left, layout mirrors correctly [cite: 227]

### [cite_start]9.4 Conversion Checklist [cite: 228]
* [cite_start]The CTA button "Book a Free 30-Min Call" appears above the fold on 100% of tested viewports [cite: 229]
* [cite_start]There are a minimum of 4 CTAs across the page (hero, services end, process end, booking section) [cite: 230]
* [cite_start]The testimonial result metrics (e.g., "+340% online orders") are visible without scrolling on the testimonials section [cite: 231]
* [cite_start]The booking section's WhatsApp button is displayed with the correct green color and WhatsApp icon [cite: 232]
* [cite_start]The success message after form submission includes the word "Shukran" (a human touch) [cite: 233]

---

## [cite_start]10. Document Revision History [cite: 234]

| Version | Date | Changes | Author |
| :--- | :--- | :--- | :--- |
| 1.0.0 | March 2026 | Initial SRS — full specification for development phase | [cite_start]Yacine Bencherif [cite: 235] |

[cite_start]End of Document · Yacine Bencherif Portfolio SRS v1.0.0 · March 2026 [cite: 236]