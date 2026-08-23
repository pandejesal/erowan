# Demo: clinic-1 — SmileCare Dental (DHCC Dubai) — Exhaustive Spec

**Vertical:** Clinic — Clinical Trust (DHCC / DHA)  
**Current:** `src/app/demos/clinic-1/page.tsx` (5,352 bytes) — Hero “Trust before the chair” + 3 stats (4.9 ★ 420 reviews, 8k+ Smiles, 12 yrs) + Doctors 3 (Aisha/ Omar/ Sara) + Gallery (3) + Patient stories (3). Brand `SMILECARE • DHCC`, clean white, zinc-900.  
**Goal:** 10 pages, medical trust, bespoke clinical vs Al Noor Berlin GDPR, internal+WhatsApp.

---

## 1. Sitemap (10 pages)

```
/demos/clinic-1/
/demos/clinic-1/treatments
/demos/clinic-1/treatments/[slug]  // implant, braces, whitening, pediatric, root-canal, cleaning (6)
/demos/clinic-1/doctors
/demos/clinic-1/doctors/[id]       // aisha-khan, omar-farooq, sara-lee (+ 2 more =5)
/demos/clinic-1/about              // DHCC license, hygiene, accreditation
/demos/clinic-1/contact            // Map DHCC, insurance list, parking
/demos/clinic-1/booking            // Treatment → doctor → date → confirm → POST → WhatsApp
/demos/clinic-1/reviews            // 24 stories, filter by treatment
/demos/clinic-1/blog
/demos/clinic-1/blog/[slug]        // 3 posts
/demos/clinic-1/legal              // privacy + consent (photos with consent)
```

---

## 2. File Tree

```
src/app/demos/clinic-1/
  page.tsx, treatments/page.tsx, treatments/[slug]/page.tsx
  doctors/page.tsx, doctors/[id]/page.tsx
  about/page.tsx, contact/page.tsx, booking/page.tsx, reviews/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/clinic1.ts
src/components/demos/clinic1/
  TreatmentCard.tsx, DoctorCard.tsx, BeforeAfterConsent.tsx, InsuranceList.tsx, HeroClinical.tsx
```

---

## 3. Mock Data (`src/lib/mocks/clinic1.ts`)

```ts
export type Treatment = { slug: string; name: string; price: string; duration: string; desc: string; longDesc: string; image: string; steps: string[]; faqs: {q:string;a:string}[]; priceRange: string }
export type Doctor = { id: string; name: string; role: string; creds: string; bio: string; image: string; rating: number; languages: string[]; treatments: string[] }
```
- 6 treatments: keep SmileCare pricing tone (AED 150 appointment anchor). 5 doctors (add 2: Dr. Huda, Dr. Karim). 24 reviews, 3 posts: `Implant Aftercare in Heat`, `Braces at 30`, `Why DHCC Accreditation Matters`.

---

## 4. Design Direction

- **Aesthetic:** Clinical trust — white + zinc-900 + medical blue accent `#[E6F0FF]` (not gold). Clean borders, tabular stats, no linen texture.
- **Typography:** Serif for hero only, otherwise sans, tabular numbers, `tracking-widest` for credentials.
- **Differentiation:** DHCC vs Al Noor Berlin — Dubai shows RERA-like license `DHA LICENSED • DHCC`, Dubai Hills parking, insurance panel (Daman, AXA), while Berlin is GDPR calm.
- **Texture:** hairline blue dividers, no grain.

### 3D / Motion
- `HeroClinical.tsx`: optional low-poly tooth/molecule `Float` with `MeshPhysicalMaterial` (subtle, 10% opacity), fallback static image. Avoid playful — clinical.
- `BeforeAfterConsent`: slider requires click “View with consent” overlay — demonstrates ethics (showcase).

---

## 5. Page Specs

### /treatments + /treatments/[slug]
- Grid 6, price visible, `Treats: implant, braces...` filters. Detail: steps (3), priceRange, duration, FAQs, “Which doctor does this?” (link to doctors filtered), sticky `Request appointment — AED 150` bar.

### /doctors + /doctors/[id]
- Cards show creds `DHA`, languages, rating. Detail: creds expanded, treatments list, before/after portfolio (if allowed), reviews for that doctor, `Book with Dr. X` → booking.

### /about
- DHCC accreditation, hygiene (sterilization), 12 yrs timeline, team photo, press.

### /contact
- Map (DHCC), insurance `InsuranceList` (6 insurers), parking/transit, opening hours (Sat-Thu), WhatsApp direct.

### /booking
- Same internal+WhatsApp flow, copy `Trust before the chair.` Validate phone, show consent checkbox (“I consent to photos being used only with permission”).

---

## 6. SEO
- Title: `SmileCare Dental — DHCC Dubai | DHA-Licensed • Implants & Braces`
- JSON-LD: `Dentist` + `MedicalBusiness` + `Physician` for doctors + `BreadcrumbList`
- Canonicals per treatment/doctor

---

## 7. Acceptance
- [ ] Before/after requires consent click
- [ ] Insurance list visible on /contact
- [ ] generateStaticParams for treatments+doctors
- [ ] Booking posts to `/api/book` then WhatsApp

Build 2nd after salons. Create `clinic1.ts` first, then layout/home, then treatments/doctors, then booking/blog/legal.
