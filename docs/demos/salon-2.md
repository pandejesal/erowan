# Demo: salon-2 — Bloom Spa (SoHo New York) — Exhaustive Spec

**Vertical:** Salon/Spa — SoHo Calm Minimal  
**Current:** `src/app/demos/salon-2/page.tsx` (5,770 bytes) — Hero NYC calm + Services 6 (Aroma Massage $85 featured) + 3 gallery + Reviews. Brand `BLOOM • SOHO • NEW YORK`, round `B` badge, zinc-900, ivory. Bilingual English+Spanish note.  
**Contrast to salon-1:** Noura is Dubai luxury/gold; Bloom is NY calm/soft, less serif luxury, more whitespace calm. Keep distinction.  
**Goal:** 11 pages, fully bespoke, free-reign motion, internal+WhatsApp.

---

## 1. Sitemap

```
/demos/salon-2/
/demos/salon-2/services
/demos/salon-2/services/[slug]   // aroma-massage, hydra-facial, wax, nail-art, hair-spa, bridal-package (6)
/demos/salon-2/team
/demos/salon-2/team/[id]         // therapists (5)
/demos/salon-2/garden             // signature: SoHo Garden + calm ritual (not gallery)
/demos/salon-2/reviews
/demos/salon-2/about
/demos/salon-2/booking
/demos/salon-2/blog
/demos/salon-2/blog/[slug]
/demos/salon-2/faq
```

*Note: `/garden` instead of `/gallery` to keep bespoke vs Noura's lookbook.*

---

## 2. File Tree

```
src/app/demos/salon-2/
  page.tsx, about/page.tsx, booking/page.tsx, garden/page.tsx, reviews/page.tsx, faq/page.tsx
  services/page.tsx, services/[slug]/page.tsx
  team/page.tsx, team/[id]/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/salon2.ts
src/components/demos/salon2/
  RitualCard.tsx, TherapistCard.tsx, ScentPicker.tsx, HeroCalm.tsx
```

---

## 3. Mock Data (`src/lib/mocks/salon2.ts`)

```ts
export type Service = { slug: string; name: string; price: string; duration: string; desc: string; longDesc: string; image: string; benefits: string[]; aftercare: string[]; category: "massage"|"facial"|"nails"|"hair"|"bridal" }
export type Therapist = { id: string; name: string; specialty: string; bio: string; languages: string[]; image: string; rating: number }
```
- 6 services as above, 5 therapists (keep bilingual note), 18 reviews, 3 posts: `Why SoHo Calm Works`, `Aroma vs Deep Tissue`, `Bridal Prep in NYC`.

---

## 4. Design Direction

- **Aesthetic:** SoHo calm — softer, more whitespace than Noura, rounded-2xl cards, `amber-50` very light, no gold — use sage `#[E8F0E8]` as accent for calm.
- **Typography:** `Inter` body + `Playfair` serif only for hero, less tight tracking than Noura.
- **Texture:** soft grain, no gold dividers; use thin `zinc-100` borders, rounded garden imagery.
- **Differentiation:** circular `B` + sage leaf icon in footer, English/Spanish toggle hint.
- **DFII:** 11

### 3D / Motion
- `HeroCalm.tsx`: `Float` with translucent `MeshTransmissionMaterial` blob (soothing, low poly), `dpr 1.5`, behind hero at 12% opacity, fallback static image on mobile/reduced-motion.
- `ScentPicker` on service detail: small interactive scent dots (lavender/eucalyptus) → changes background tint (framer-motion).

---

## 5. Page Specs (key bespoke deltas vs salon-1)

### /services /services/[slug]
- Same grid but add `Duration` filter (45/60/75/180m) + `Scent` filter. Detail includes Benefits/Aftercare, not Includes.

### /team vs /team/[id]
- Therapists not stylists — bio emphasizes languages (English+Spanish), ritual specialty.

### /garden (signature)
- Not gallery — editorial garden: 8 images of SoHo studio + garden, breathing exercise (inhale 4s), calm copy. No before/after (Bloom is wellness, not clinical).

### /booking
- Same flow but copy: `NYC calm. Book in one tap.` Staff = therapist, service = massage/facial.

### /blog
- Posts are calm wellness, not hair trends.

Other pages (/reviews,/about,/faq) parallel salon-1 but copy is NY/Spanish.

---

## 6. Components
`RitualCard`, `TherapistCard`, `ScentPicker`, `HeroCalm` — bespoke.

## 7. SEO
- Title: `Bloom Spa — SoHo New York | Boutique Massage & Facial — Book $85`
- JSON-LD: `DaySpa` + `BreadcrumbList`
- Canonicals per subpage

## 8. Acceptance & Build Order
Same QA as salon-1. Build after salon-1 (batch). 1) mocks 2) layout 3) home/services 4) team/garden 5) booking/blog/faq 6) HeroCalm last.
