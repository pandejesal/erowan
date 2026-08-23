# Demo: other-1 — North Consulting (London) — Exhaustive Spec

**Vertical:** Other — B2B Consulting  
**Current:** `src/app/demos/other-1/page.tsx` (8,581 bytes) — Hero “Clarity that wins clients” + Stats 4.9 47 reviews 120+ scale-ups £2.1M savings + Services 6 (Strategy Sprint $2k featured...) + Case studies 3 + Team 3 (James/Priya/Alex) + Map Shoreditch + Book CTA. Brand `NORTH • LONDON • 12 yrs`, B2B.  
**Goal:** 10 pages, case study detail, service detail, internal+WhatsApp, B2B showcase, bespoke vs Craft handmade.

---

## 1. Sitemap (10 pages)

```
/demos/other-1/
/demos/other-1/services
/demos/other-1/services/[slug]    // strategy-sprint, ops-review, retainer, workshop, due-diligence, fractional-coo (6)
/demos/other-1/case-studies
/demos/other-1/case-studies/[slug]// fintech-ops, marketplace-save, saas-churn (3 → 6)
/demos/other-1/team
/demos/other-1/team/[id]          // james-north, priya-mehta, alex-chen (3 → 5)
/demos/other-1/about              // 12 yrs, worldwide, method
/demos/other-1/contact            // Shoreditch map, form
/demos/other-1/booking            // Call booking → internal+WhatsApp
/demos/other-1/blog
/demos/other-1/blog/[slug]
/demos/other-1/legal
```

---

## 2. File Tree

```
src/app/demos/other-1/
  page.tsx, services/page.tsx, services/[slug]/page.tsx
  case-studies/page.tsx, case-studies/[slug]/page.tsx
  team/page.tsx, team/[id]/page.tsx
  about/page.tsx, contact/page.tsx, booking/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/other1.ts
src/components/demos/other1/
  ServiceCard.tsx, CaseCard.tsx, TeamCard.tsx, MethodSteps.tsx, HeroNorth.tsx
```

---

## 3. Mock Data (`src/lib/mocks/other1.ts`)

```ts
export type Service = { slug: string; name: string; price: string; duration: string; desc: string; longDesc: string; deliverables: string[]; forWho: string; image: string; featured?: boolean }
export type CaseStudy = { slug: string; title: string; client: string; result: string; image: string; metrics: { label: string; value: string }[]; story: string; quote: string; services: string[] }
export type Person = { id: string; name: string; role: string; bio: string; image: string; expertise: string[] }
```
- Keep 6 services verbatim ($2k, $1.5k...), 3 cases + add 3: Healthtech, E-com, Fintech, 3 team + add 2: Ops, Investor. Keep `No retainer trap • 48h site • Worldwide`.

---

## 4. Design Direction

- **Aesthetic:** B2B editorial — ivory + charcoal + ink blue `#[0F1A2E]` + subtle gold for featured `MOST POPULAR`. More brutalist than Craft handmade (which is warm handmade).
- **Typography:** `Inter` + `Libre Baskerville` serif, tabular numbers for £2.1M.
- **Texture:** paper grain, not linen; thin ink dividers.
- **Differentiation:** North = B2B ink/serif brutal; Craft = Brooklyn warm/handmade.

### 3D / Motion
- `HeroNorth.tsx`: isometric low-poly maze turning to clarity (abstract), `MeshStandardMaterial`, 10% opacity, or no 3D — B2B prefers `MethodSteps` motion (stagger `framer-motion`).

---

## 5. Page Specs

### /services + /services/[slug]
- Grid 6, featured `MOST POPULAR` border `zinc-900`. Detail: deliverables list, forWho, duration, price, `Book →` → booking with service prefill, related case studies.

### /case-studies + /[slug]
- Grid, metrics `+32% ops speed`. Detail: story, metrics (3), quote, team who delivered, related services, `Book similar →`.

### /team + /[id]
- Cards, detail: expertise tags, bio, cases they led, `Book with [name]`.

### /booking
- Call flow: pick service/case → date → time → name/email/phone → `POST /api/book` → WhatsApp `Book free 20-min call for ${service}`.

---

## 6. SEO
- Title: `North Consulting — London | Clarity That Wins Clients for Scale-ups — 12 yrs`
- JSON-LD: `ProfessionalService` + `Person` for team + `BreadcrumbList`

## 7. Acceptance
- [ ] generateStaticParams for services/cases/team/blog
- [ ] Booking posts then WhatsApp
- [ ] Related case→service links work
- [ ] Shoreditch map snippet on /contact

Build Phase 5 with other-2 (pair).
