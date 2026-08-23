# Demo: realestate-2 — Harbor Realty (Miami Brickell) — Exhaustive Spec

**Vertical:** Real Estate — Miami Brickell MLS  
**Current:** `src/app/demos/realestate-2/page.tsx` (4,621 bytes) — Hero “Miami listings that convert” + Stats 4.9 95 reviews 200+ deals MLS + Listings 3 (Brickell $450K...) + Buyer stories. Brand `HARBOR • MIAMI BRICKELL`, bilingual note (from description).  
**Contrast:** Vista is Dubai RERA/sand/teal; Harbor is Miami MLS/ocean/bilingual EN/ES.  
**Goal:** 11 pages, bilingual cards, mortgage in USD, internal+WhatsApp.

---

## 1. Sitemap (11 pages)

Same 11 as realestate-1 but Miami:
```
/demos/realestate-2/
/demos/realestate-2/listings
/demos/realestate-2/listings/[id]   // brickell-2br, miami-beach-3br, coral-gables-villa (3 → expand to 6)
/demos/realestate-2/agents
/demos/realestate-2/agents/[id]
/demos/realestate-2/areas
/demos/realestate-2/areas/[slug]    // Brickell, Miami Beach, Coral Gables
/demos/realestate-2/about
/demos/realestate-2/contact
/demos/realestate-2/booking
/demos/realestate-2/blog
/demos/realestate-2/blog/[slug]
/demos/realestate-2/legal
```

---

## 2. File Tree

```
src/app/demos/realestate-2/
  page.tsx, listings/page.tsx, listings/[id]/page.tsx, agents/page.tsx, agents/[id]/page.tsx
  areas/page.tsx, areas/[slug]/page.tsx, about/page.tsx, contact/page.tsx, booking/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/realestate2.ts
src/components/demos/realestate2/
  ListingCard.tsx, FilterBar.tsx, MortgageCalc.tsx, BilingualToggle.tsx, HeroHarbor.tsx
```

---

## 3. Mock Data (`src/lib/mocks/realestate2.ts`)

```ts
export type Listing = {
  id: string; title: string; price: string; beds: number; baths: number; area: string; sqft: string;
  image: string; gallery: string[]; desc: string; longDesc: string; agentId: string; areaSlug: string; bilingualDesc?: string;
}
```
- Keep 3 listings verbatim ($450K, $780K, $1.2M), add 3: Wynwood Loft, Coconut Grove, Downtown. Bilingual EN/ES desc variant. 4 agents (Miami bilingual EN/ES), MLS copy.

---

## 4. Design Direction

- **Aesthetic:** Miami Brickell ocean — ivory + charcoal + ocean blue `#[0E7490]` + coral `#[FF6B4A]` accent, vs Vista sand/teal.
- **Texture:** wave noise, not sand.
- **Differentiation:** bilingual toggle `EN | ES` in header, MLS badge.

### 3D / Motion
- `HeroHarbor.tsx`: low-poly palm + water plane with `MeshDistortMaterial`, or no 3D — keep Miami map focus. Prefer subtle wave `Float`.

---

## 5. Page Specs
Parallel Vista but:
- FilterBar: areas are Brickell/Miami Beach/Coral Gables, price in USD.
- `BilingualToggle` on listing detail (EN ↔ ES).
- MortgageCalc in USD at 6.5% (US avg).
- Booking copy `Get brochure` → bilingual WhatsApp.

## 6. SEO
- Title: `Harbor Realty — Miami Brickell | MLS • Bilingual Listings That Convert`
- JSON-LD: `RealEstateAgent` (area Brickell) + `Apartment` + ES `alternateLanguage`

## 7. Acceptance
Same as Vista + bilingual toggle persists via `?lang=es`, filter URL-synced.

Build Phase 4 with realestate-1.
