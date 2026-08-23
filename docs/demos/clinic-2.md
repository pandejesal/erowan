# Demo: clinic-2 — Al Noor Clinic (Berlin Mitte) — Exhaustive Spec

**Vertical:** Clinic — GDPR Calm (Berlin)  
**Current:** `src/app/demos/clinic-2/page.tsx` (4,235 bytes) — Hero “Care that feels calm” + Stats 4.8 180 reviews 6k+ patients 10 yrs + Services 6 (GP €45, Dental €35...) + Stories 3. Brand `AL NOOR • BERLIN`, same ivory, less content than clinic-1.  
**Contrast:** SmileCare is Dubai DHCC trust/blue/insurance-heavy; Al Noor is Berlin GDPR/mitte/expats, German+English, GDPR safe.  
**Goal:** 10 pages, fully bespoke, internal+WhatsApp, GDPR copy.

---

## 1. Sitemap

```
/demos/clinic-2/
/demos/clinic-2/services              // GP, Dental, Pediatric, Lab, Vaccination, Wellness
/demos/clinic-2/services/[slug]
/demos/clinic-2/doctors               // 5 doctors (different names than SmileCare)
/demos/clinic-2/doctors/[id]
/demos/clinic-2/about                 // GDPR + Mitte 10 yrs + expat care
/demos/clinic-2/contact               // Map Mitte, GDPR notice, no data stored
/demos/clinic-2/booking
/demos/clinic-2/reviews
/demos/clinic-2/blog
/demos/clinic-2/blog/[slug]
/demos/clinic-2/legal                 // GDPR privacy, terms, data processing
```

Same 10 as clinic-1 but naming: `services` not `treatments`, `GDPR SAFE` badge.

---

## 2. File Tree

```
src/app/demos/clinic-2/
  page.tsx, services/page.tsx, services/[slug]/page.tsx
  doctors/page.tsx, doctors/[id]/page.tsx
  about/page.tsx, contact/page.tsx, booking/page.tsx, reviews/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/clinic2.ts
src/components/demos/clinic2/
  ServiceCard.tsx, DoctorCard.tsx, GdprNotice.tsx, HeroBerlin.tsx
```

---

## 3. Mock Data (`src/lib/mocks/clinic2.ts`)

```ts
export type Service = { slug: string; name: string; price: string; desc: string; longDesc: string; image: string; duration: string; languages: string[] }
export type Doctor = { id: string; name: string; role: string; creds: string; bio: string; image: string; languages: string[]; focus: string[] }
```
- 6 services with € pricing, 5 doctors (Berlin names: Dr. Müller, Dr. Fatima, Dr. Jonas...), keep `GDPR SAFE` and `German + expat care` copy verbatim. 18 reviews, 3 posts: `Expat Guide to German Labs`, `Vaccination Schedule 2026`, `No-Data Booking`.

---

## 4. Design Direction

- **Aesthetic:** Berlin calm — same ivory but cooler, accent `stone-100` + thin `zinc-200` borders, more whitespace, softer shadows than Dubai clinical blue.
- **Typography:** sans-heavy, less serif than Dubai.
- **Texture:** no gold, no blue — minimal.
- **Differentiation:** footer shows `Mitte` tram map hint, GDPR badge.

### 3D / Motion
- `HeroBerlin.tsx`: optional subtle `MeshDistortMaterial` calm blob (not tooth), or no 3D — keep GDPR minimal. Prefer no 3D here to contrast Dubai’s clinical molecule.

---

## 5. Page Specs (bespoke deltas vs clinic-1)

### /services/[slug]
- Show `Languages: German/English/Arabic`, duration, and `GDPR: no data stored` note. No insurance panel (Berlin contact shows GDPR, not Daman).

### /legal
- Heavy: GDPR privacy, data processing, cookie = none, contact DPO — showcase Berlin compliance.

### /contact
- Map Mitte, transit (U6), `GDPR SAFE • no data stored` callout, not insurance.

Other pages parallel but Berlin copy.

---

## 6. SEO
- Title: `Al Noor Clinic — Berlin Mitte | GP & Dental • GDPR Safe • English + German`
- JSON-LD: `MedicalClinic` + `BreadcrumbList`

## 7. Acceptance & Build
Same as clinic-1. Build in same phase as clinic-1 after salons. `clinic2.ts` first, then pages.
