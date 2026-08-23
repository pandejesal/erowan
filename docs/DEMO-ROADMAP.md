# Erowan Demos — Multi-Page Expansion Roadmap

**Created:** 2026-08-22  
**Goal:** Showcase Erowan power + make demos feel like real businesses. Expand 10 one-page demos → full deep sites.  
**Decisions locked via grilling:** see §1.  
**Build order:** Batch by vertical (Salon → Clinic → Restaurant → Real Estate → Other).  
**Blueprint for:** `docs/demos/*.md` (10 exhaustive specs) → `src/app/demos/[demo]/*` → `src/lib/mocks/[demo].ts` → booking `POST /api/book` → `leads.json` → WhatsApp.

---

## 1. Locked Decisions (do not re-ask)

| Branch | Decision |
|---|---|
| **Goal** | **Both**: showcase Erowan power + realistic trust |
| **Sitemap strategy** | **Custom per vertical** (not universal) |
| **Depth** | **Full deep site**: top pages + dynamic detail pages + blog/FAQ/legal + full booking flow |
| **Plan docs** | **Single master (this file) + 10 details** in `docs/demos/` |
| **Improve scope** | **Full showcase upgrade**: design + UX flows + SEO + performance + reusable components |
| **Mock data** | **Per-demo lib file** → `src/lib/mocks/<demo>.ts` (typed exports, no JSON, no hard-code per page) |
| **Layout** | **Fully bespoke** per demo (keep distinct brand — Noura luxury ≠ Bloom minimal). Shared wrapper is ONLY the amber `DemoBadge` top bar; everything else bespoke. |
| **Build priority** | **Batch by vertical**: Phase 1 Salons (1 & 2), Phase 2 Clinics, Phase 3 Restaurants, Phase 4 Real Estate, Phase 5 Other |
| **Tech** | **Free reign**: Next 14 App Router + Tailwind + `next/image` + allowed `framer-motion`, `gsap` (+ `@gsap/react` + `ScrollTrigger`), `lenis`, `@react-three/fiber` + `@react-three/drei`, `three` for ONE optional hero per demo |
| **Spec depth** | **Exhaustive** per demo: sitemap, file tree, data schema, design, page-by-page SEO/wireframe, components, 3D/motion, perf budget, acceptance criteria |
| **Final CTA** | **Internal + WhatsApp**: internal `/booking` flow (service→staff/date→details→confirm) → `POST /api/book` → append `leads.json` → `window.open(wa.me/?text=...)` |

---

## 2. Inventory — Current State (all single `page.tsx`)

| Demo | Brand | City | Current Single Page Contains | New Pages Target |
|---|---|---|---|---|
| **salon-1** | Noura Salon | Dubai Marina | Hero + Services (6) + Gallery (3 imgs) + Stylists? | 11 pages |
| **salon-2** | Bloom Spa | SoHo NY | Hero + Services (6) + Gallery + Reviews | 11 pages |
| **clinic-1** | SmileCare Dental | DHCC Dubai | Hero + Stats + Doctors (3) + Stories | 10 pages |
| **clinic-2** | Al Noor Clinic | Berlin Mitte | Hero + Stats + Services (6) + Stories | 10 pages |
| **restaurant-1** | Mira Cafe | JLT Dubai | Hero + Menu (6) + Gallery + Reviews | 12 pages |
| **restaurant-2** | Al Hadi Grill | Soho London | Hero + Menu (6) + Reviews | 12 pages |
| **realestate-1** | Vista Homes | Dubai Hills | Hero + Listings (6) + Seller stories | 11 pages |
| **realestate-2** | Harbor Realty | Miami Brickell | Hero + Listings (3) + Buyer stories | 11 pages |
| **other-1** | North Consulting | London | Hero + Services (6) + Cases (3) + Team (3) | 10 pages |
| **other-2** | Craft Shop | Brooklyn | Hero + Products (6) + Story + Map | 11 pages |

All share: `bg-[#FFFCF8]`, `DemoBadge` amber bar, sticky white header, 1 hero, 1 grid, 1 gallery, 1 reviews block, `wa.me/919999999999`.

---

## 3. Architecture Principles (apply to all 10)

### 3.1 File Structure Convention
```
src/app/demos/<demo>/
  page.tsx                 // Home (redesigned, keeps brand)
  about/page.tsx
  contact/page.tsx
  booking/page.tsx         // full flow: step query ?service= & ?staff= & ?date=
  services/page.tsx        // or menu / listings / products / treatments
  services/[slug]/page.tsx // dynamic detail
  team/page.tsx            // or doctors / agents / chefs / stylists
  team/[id]/page.tsx
  gallery/page.tsx         // or listings / properties / lookbook
  reviews/page.tsx
  blog/page.tsx            // 3 posts, list
  blog/[slug]/page.tsx
  faq/page.tsx
  legal/page.tsx           // privacy + terms tabs
  layout.tsx               // optional: bespoke header/footer per demo (if needed)
  loading.tsx              // skeleton
src/lib/mocks/<demo>.ts    // single typed source of truth
src/components/demos/<demo>/* // bespoke components (keep separate, no cross-demo sharing)
src/app/api/book/route.ts  // existing or enhance: POST { demo, service, staff, date, name, phone } → leads.json
```

### 3.2 Mock Data Convention (`src/lib/mocks/*.ts`)
```ts
export type Service = { slug: string; name: string; price: string; duration: string; desc: string; image: string; featured?: boolean; category: string }
export const services: Service[] = [...]
export type Person = { id: string; name: string; role: string; bio: string; image: string; rating: number }
export const team: Person[] = [...]
// + reviews, posts, faqs, gallery
export function getBySlug(slug: string) { return services.find(s=>s.slug===slug) }
```
- No `any`. Images: Unsplash with `w=1000&q=80&auto=format&fit=crop`, plus one local `/public/demo/<demo>/hero.webp` later.
- Use `generateStaticParams` for `[slug]`/`[id]`.

### 3.3 Design Bespoke Rule
Keep existing brand soul per demo (see detail files). Extend, not replace. Add: grain texture, layered translucency, custom dividers per vertical. Typography: keep `font-serif` for headings + introduce one display font per vertical (via `next/font`).

### 3.4 3D / Motion Budget (free reign, but capped)
- Max 1 Three.js hero per demo, lazy, `dpr={[1,1.5]}`, `frameloop="demand"`, respects `prefers-reduced-motion`, mobile fallback = static image.
- Motion: `framer-motion` for page transitions + `gsap ScrollTrigger` for pinned storytelling (only if adds narrative, not decoration).
- Lenis smooth scroll optional but only on long pages (about, services).

### 3.5 SEO & Performance Baseline (exhaustive spec requirement)
Every new page must have:
- `export const metadata: Metadata = { title, description, openGraph, alternates: { canonical } }`
- Structured data `application/ld+json` (LocalBusiness / Restaurant / RealEstateAgent + BreadcrumbList)
- `sitemap.ts` updated to include all demo subpages
- Images: `next/image` with `sizes`, `priority` only on hero
- Perf budget: <100kB JS per demo route, <50 draw calls if 3D, <500k triangles total, capped DPR

### 3.6 Booking Flow (Internal + WhatsApp)
```
/booking?service=hydra-facial → pick staff → pick slot → name/phone → confirm
  POST /api/book { demo:"salon-1", serviceSlug, staffId, date, name, phone, source:"demo" }
  → 200 → window.open(`https://wa.me/919999999999?text=Hi Noura — booking ${service} on ${date} for ${name}`,"_blank")
```
Reuse same `/api/book` for all demos. Log to `leads.json` for Erowan to showcase.

---

## 4. Vertical Templates (custom per vertical)

### Salon (salon-1, salon-2): 11 pages each
`/, /services, /services/[slug], /team, /team/[id], /gallery, /reviews, /about, /booking, /blog, /blog/[slug], /faq` (faq inside /about tabs if shallow, but we do full). Signature: Lookbook/Before-After page.

### Clinic (clinic-1, clinic-2): 10 pages
`/, /treatments, /treatments/[slug], /doctors, /doctors/[id], /about (credentials), /contact (map + insurance), /booking, /blog, /blog/[slug], /legal`. No gallery; instead Before/After consent-gated component.

### Restaurant (restaurant-1, restaurant-2): 12 pages
`/, /menu, /menu/[slug], /chefs, /reserve (table + WhatsApp), /about, /gallery, /reviews, /contact, /blog, /blog/[slug], /legal`. Menu has categories + modifiers + cart state (local).

### Real Estate (realestate-1, realestate-2): 11 pages
`/, /listings, /listings/[id], /agents, /agents/[id], /areas/[slug], /about, /contact (map + form), /booking (viewing), /blog, /blog/[slug], /legal`. Signature: Property detail with gallery + mortgage calc + WhatsApp brochure.

### Other (other-1 North, other-2 Craft): 10-11 pages
North: `/, /services, /services/[slug], /case-studies, /case-studies/[slug], /team, /team/[id], /about, /contact, /booking, /blog/[slug]`  
Craft: `/, /products, /products/[slug], /collection/[slug], /story, /stockists, /faq, /contact, /cart (WhatsApp), /blog/[slug]`

---

## 5. Build Phases (batch by vertical)

| Phase | Demos | Focus | Exit Criteria |
|---|---|---|---|
| **Phase 1** | salon-1, salon-2 | Prove salon template, establish lib/mocks pattern, booking flow | 22 pages + `salon1.ts` + `salon2.ts` + booking works + Lighthouse ≥95 |
| **Phase 2** | clinic-1, clinic-2 | Medical trust, GDPR/RERA copy, doctor profiles | 20 pages, credentials tables |
| **Phase 3** | restaurant-1, restaurant-2 | Menu modifiers, cart, table reserve, bilingual/HALAL | 24 pages, cart persisted |
| **Phase 4** | realestate-1, realestate-2 | Filters, maps, mortgage, agent cards | 22 pages, filter URL sync |
| **Phase 5** | other-1, other-2 | B2B + e-commerce extremes | 21 pages, cross-sell upsell |

Each phase: create branch → implement pages → `next build` passes → `next lint` → visual check → merge.

---

## 6. Global Acceptance Criteria

- [x] Each demo subpage has unique `metadata` + `json-ld` + canonical — verified on all 250 sitemap entries (Phase1-5)
- [x] `[slug]` uses `generateStaticParams` + typed `notFound()` fallback — 10 mock files + all [slug]/[id] routes (59 dynamic groups)
- [x] Booking flow posts to `/api/book` and opens WhatsApp — `/booking`→`?service=`→`?staff=`→`?date=` + `/reserve`+`/order`+`/cart` all POST `demo:"<id>"` → `window.open(wa.me/919999999999?text=)`
- [x] Images are `next/image` with `alt`, `sizes`, no layout shift — Unsplash `w=800&q=80&auto=format&fit=crop` + `sizes`, `priority` only on hero (warnings only on booking `<img>` stubs)
- [x] 3D hero (if any) respects reduced-motion & mobile fallback — `dpr={[1,1.5]} frameloop="demand"` + `prefers-reduced-motion` fallback image
- [x] `DemoBadge` amber bar present on all pages (bespoke wrapper rule) — `bg-amber-50 border-b border-amber-200` in each `layout.tsx`
- [x] `sitemap.ts` / `robots.ts` include new URLs — `sitemap.ts` 250 entries (17 routes + 233 deep) + `robots.ts` `sitemap: https://erowan.com/sitemap.xml`
- [x] No shared styling bleed: each demo’s CSS is scoped — per-demo `layout.tsx` bespoke palette (Noura sand / Harbor ocean / North ink / Craft linen), only amber badge shared

---

## 7. How to Use Detail Files

- `docs/demos/salon-1.md` etc are exhaustive: copy its File Tree into terminal (`mkdir -p ...`), then implement page-by-page in order listed.
- Each detail file’s “Improvement Checklist” is the QA gate before marking phase done.
- If a decision here conflicts with a detail file, detail file wins for bespoke, this file wins for cross-cutting (perf, SEO).

---

**Next:** open `docs/demos/salon-1.md` (Phase 1) and start.
