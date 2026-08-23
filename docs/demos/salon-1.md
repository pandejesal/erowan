# Demo: salon-1 — Noura Salon (Dubai Marina) — Exhaustive Spec

**Vertical:** Salon/Spa — Luxury Minimal  
**Current:** `src/app/demos/salon-1/page.tsx` (10,432 bytes) — Hero + Services (6 cards) + Gallery (3) + Stylists? (anchor #team not yet) + Reviews + amber DemoBadge. Brand: `NOURA • DUBAI MARINA — EST. 2019`, serif bold, zinc-900, ivory `bg-[#FFFCF8]`, gold tracker badge `4.9 ★ 312 REVIEWS`. CTA: `BOOK NOW — AED 120` → `wa.me`.  
**Goal:** Expand to **11 pages + 6 dynamic details** = full deep site, fully bespoke, free-reign 3D, internal + WhatsApp booking.

---

## 1. Sitemap (11 pages + details)

```
/demos/salon-1/                          // Home (redesigned, keep luxury)
/demos/salon-1/services                  // Grid + filters (category, price)
/demos/salon-1/services/[slug]           // Detail: Hair Color, Balayage, Keratin, Cut, Blowout, Bridal (6)
/demos/salon-1/team                      // Stylists grid (6)
/demos/salon-1/team/[id]                 // Stylist profile + portfolio
/demos/salon-1/gallery                   // Lookbook + before/after (consent)
/demos/salon-1/reviews                   // 24 reviews, filter by service
/demos/salon-1/about                     // Story, awards, hygiene, careers
/demos/salon-1/booking                   // Flow: service?staff?date → confirm → POST → WhatsApp
/demos/salon-1/blog                      // 3 posts (Care tips, Trends 2026)
/demos/salon-1/blog/[slug]               // Post detail
/demos/salon-1/faq                       // Accordion + legal tab
```

---

## 2. File Tree to Create

```
src/app/demos/salon-1/
  page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  team/page.tsx
  team/[id]/page.tsx
  gallery/page.tsx
  reviews/page.tsx
  about/page.tsx
  booking/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  faq/page.tsx
  layout.tsx          // bespoke Noura header (sticky, serif, gold line) + footer
  loading.tsx
src/lib/mocks/salon1.ts
src/components/demos/salon1/
  ServiceCard.tsx
  StylistCard.tsx
  BeforeAfter.tsx
  BookingSteps.tsx
  Hero3D.tsx          // optional Three.js torus-knot / hair-strand float
```

Command:
```bash
mkdir -p src/app/demos/salon-1/services/[slug] src/app/demos/salon-1/team/[id] src/app/demos/salon-1/blog/[slug] src/lib/mocks src/components/demos/salon1
```

---

## 3. Mock Data Schema (`src/lib/mocks/salon1.ts`)

```ts
export type Service = {
  slug: string; name: string; category: "hair"|"spa"|"nails"|"bridal";
  price: string; duration: string; desc: string; longDesc: string;
  image: string; gallery: string[]; featured?: boolean; includes: string[];
}
export type Stylist = {
  id: string; name: string; role: string; bio: string; image: string;
  specialties: string[]; rating: number; reviews: number; instagram: string;
}
export type Review = { id: string; author: string; serviceSlug: string; rating: 5; text: string; date: string; image?: string }
export type Post = { slug: string; title: string; excerpt: string; image: string; date: string; content: string }

// 6 services, 6 stylists, 12 gallery images, 24 reviews, 3 posts, 8 FAQs
export const services: Service[] = [
  { slug:"balayage", name:"Balayage", category:"hair", price:"AED 450", duration:"120m", desc:"Hand-painted light", longDesc:"...", image:"https://images.unsplash.com/...", gallery:[...], includes:["Consult","Toner","Blowout"] },
  // + hair-cut, keratin, blowout, mani-pedi, bridal
]
export const stylists: Stylist[] = [...]
export const reviews: Review[] = [...]
export const posts: Post[] = [...]
export function getService(slug: string){ return services.find(s=>s.slug===slug) }
export function getStylist(id: string){ return stylists.find(s=>s.id===id) }
```

- Keep existing Noura copy (Dubai Marina, Ladies-only, Pay at store, Free reschedule) verbatim where possible.
- Images: Unsplash salon hair/beauty, plus reserve one slot for future `/public/demo/salon1/hero.webp`.

---

## 4. Design Direction — Keep Bespoke Luxury

- **Aesthetic:** Editorial luxury minimal — serif headings (`font-serif` + add `Cormorant` via `next/font`), tight tracking `[0.2em]` sub-labels, large negative space, ivory + charcoal + warm amber accent (existing). Avoid Bloom’s SoHo calm (that’s salon-2).
- **Colors:** `bg-[#FFFCF8]` keep, accent `amber-200` → elevate to subtle gold `#[C9A86A]` for dividers, price pills stay `zinc-900`.
- **Texture:** hairline gold divider (1px gradient), linen noise overlay at 3% opacity on hero.
- **Differentiation anchor:** Noura’s gold circular `N` badge + marina skyline silhouette in footer — so screenshot without logo is still recognizably Noura vs Bloom.
- **DFII target:** 12 (high impact, fitting for Dubai luxury, feasible in Tailwind, low consistency risk).

### 3D / Motion (free reign, optional but planned)
- `Hero3D.tsx`: floating `TorusKnot` with `meshPhysicalMaterial` (clearcoat) in `Float` from `@react-three/drei`, `dpr={[1,1.5]}`, behind hero copy at 15% opacity, respects reduced-motion → static blurred image on mobile. Never blocks CTA.
- Page transitions: `framer-motion` fade + 8px y for route changes inside salon-1 only.

---

## 5. Page-by-Page Spec (Exhaustive)

### / (Home) — Redesign, keep brand soul
- Keep sticky header with `SERVICES | GALLERY | STYLISTS | REVIEWS` anchors, add `About | Booking` links to subpages.
- Hero: left copy, right `Hero3D` + `Image` fallback. Stats bar `4.9 ★ • 312 reviews • EST. 2019` stays.
- Add: featured services (3), stylist teaser (3), gallery teaser (6), testimonial carousel (3), `BookingSteps` (See prices → Pick slot → WhatsApp in 30s).
- SEO: title `Noura Salon — Dubai Marina Ladies Salon | Book on WhatsApp`, desc `Ladies-only premium hair & spa. See prices, pick a slot, confirm on WhatsApp in 30s. Pay at store.`
- JSON-LD: `BeautySalon` + `BreadcrumbList`.

### /services
- Grid 6 cards via `ServiceCard`, filter by category pills, sort by price. Each card links to `[slug]`, CTA `Book →` goes to `/booking?service=slug`.

### /services/[slug]
- `generateStaticParams` from `services`. Layout: hero image, price/duration pill, `includes` list, gallery (4), stylist who does it (2), FAQs about that service, sticky `Book this — AED 450` bar on mobile.
- SEO: `Balayage in Dubai Marina | Noura Salon — AED 450, 120m`

### /team + /team/[id]
- Grid 6 stylists with specialty tags, rating, `Book with [name]`. Detail: bio, Instagram, before/after portfolio (6 images), reviews for that stylist, `Book with her` CTA → `/booking?staff=id&service=slug`.

### /gallery
- Masonry lookbook (12 images), before/after `BeforeAfter` slider component (consent note: “Photos with consent”).

### /reviews
- 24 reviews, filter by service, star histogram, “Leave review” CTA → WhatsApp.

### /about
- Story EST. 2019, hygiene (ladies-only, premium care), awards, press mentions, careers (1 role), map snippet (Marina Walk).

### /booking — Internal + WhatsApp
Steps stored in URL: `/booking?step=1` → service → staff → date/time (mock slots) → name/phone → summary → `POST /api/book` → `window.open(wa.me?text=Hi Noura — booking ${service} on ${date} with ${staff} for ${name})`. Persist in `sessionStorage` per demo.

### /blog + /blog/[slug]
- 3 posts: `Summer Hair Care in Humidity`, `Balayage vs Foil`, `Bridal Trial Timeline`. Minimal prose, cover image, author Noura, date, related services.

### /faq
- 8 FAQs (reschedule?, ladies-only?, pay at store?, bring kids?), accordion, plus Legal tab (privacy, terms) — simple text, Erowan owns data, no cookies.

---

## 6. Components to Create / Reuse

- `ServiceCard`, `StylistCard`, `BeforeAfter`, `BookingSteps`, `Hero3D`, `ReviewFilters`, `FaqAccordion` — all under `src/components/demos/salon1/` (bespoke, not shared).
- Reuse global `DemoBadge` amber bar only.

---

## 7. Booking Flow Detail (Internal + WhatsApp)

```
BookingSteps state: { serviceSlug?, staffId?, date?, slot?, name?, phone? }
UI: stepper dots (4 steps), back/next, sticky summary on desktop
Validation: phone E.164, date not past, slot required
On Confirm: POST /api/book { demo:"salon-1", ... } → 200 → open WhatsApp
Error: toast, stay on step
```

---

## 8. SEO & Performance Budget

- Every page: unique `metadata` + `alternates.canonical = /demos/salon-1/...`
- Sitemap: add entries to `src/app/sitemap.ts`
- Perf: LCP <2.5s, CLS 0, no layout shift on gallery, images `sizes="(max-width:768px) 100vw, 50vw"`, 3D hero lazy `dynamic(()=>import(...),{ssr:false})`
- Captions: `alt` descriptive, no empty

---

## 9. Acceptance Criteria (QA gate)

- [ ] `salon1.ts` exports typed arrays, `generateStaticParams` works for both [slug] and [id]
- [ ] All 11 pages build (`next build` no type error)
- [ ] Booking posts to `/api/book` and opens WhatsApp with prefill
- [ ] Mobile sticky book bar visible on `[slug]` and `/booking`
- [ ] 3D hero hidden on `prefers-reduced-motion` or <768px
- [ ] SEO titles unique, JSON-LD valid via validator
- [ ] Gallery before/after consent note present

---

## 10. Build Checklist (in order)

1. Create `salon1.ts` with 6 services / 6 stylists / 24 reviews / 3 posts
2. Create `layout.tsx` (Noura header/footer) + `loading.tsx`
3. Rebuild `/` home, then `/services`, then `/services/[slug]`
4. Then `/team`, `/team/[id]`, `/gallery`, `/reviews`, `/about`
5. Then `/booking` flow + `/api/book` wiring
6. Then `/blog`, `/blog/[slug]`, `/faq`
7. Add `Hero3D` last (optional), test reduced-motion
8. Update `sitemap.ts`, run `next lint`, `next build`

**Next demo:** `salon-2.md` (batch by vertical, pair with this one).
