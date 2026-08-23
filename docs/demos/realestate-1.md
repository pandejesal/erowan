# Demo: realestate-1 — Vista Homes (Dubai Hills) — Exhaustive Spec

**Vertical:** Real Estate — Dubai Hills RERA  
**Current:** `src/app/demos/realestate-1/page.tsx` (5,138 bytes) — Hero “Leads, not just listings” + Stats 4.8 120 reviews 300+ Units RERA + Listings 6 (1BR Dubai Hills AED 1.1M...) + Seller stories. Brand `VISTA HOMES • DUBAI HILLS`, RERA licensed.  
**Goal:** 11 pages, filters + mortgage + agent + internal+WhatsApp viewing, bespoke vs Harbor Miami MLS.

---

## 1. Sitemap (11 pages)

```
/demos/realestate-1/
/demos/realestate-1/listings
/demos/realestate-1/listings/[id]    // 6 ids: dubai-hills-1br etc (keep 6, add 2 =8)
/demos/realestate-1/agents
/demos/realestate-1/agents/[id]      // 4 agents
/demos/realestate-1/areas
/demos/realestate-1/areas/[slug]     // Dubai Hills, Creek Harbour, DAMAC, JVC (4)
/demos/realestate-1/about            // RERA, 300+ units, awards
/demos/realestate-1/contact          // Map Dubai Hills, form → leads.json
/demos/realestate-1/booking          // Viewing booking → internal+WhatsApp
/demos/realestate-1/blog
/demos/realestate-1/blog/[slug]
/demos/realestate-1/legal
```

---

## 2. File Tree

```
src/app/demos/realestate-1/
  page.tsx, listings/page.tsx, listings/[id]/page.tsx
  agents/page.tsx, agents/[id]/page.tsx
  areas/page.tsx, areas/[slug]/page.tsx
  about/page.tsx, contact/page.tsx, booking/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/realestate1.ts
src/components/demos/realestate1/
  ListingCard.tsx, FilterBar.tsx, MortgageCalc.tsx, AgentCard.tsx, MapSnippet.tsx, HeroHomes.tsx
```

---

## 3. Mock Data (`src/lib/mocks/realestate1.ts`)

```ts
export type Listing = {
  id: string; title: string; price: string; beds: number; baths: number; area: string; sqft: string;
  image: string; gallery: string[]; desc: string; longDesc: string; agentId: string;
  areaSlug: string; offplan?: boolean; features: string[];
}
export type Agent = { id: string; name: string; role: string; bio: string; image: string; phone: string; listings: string[]; languages: string[] }
```
- Keep 6 listings verbatim (AED 1.1M, 1.8M, 3.2M etc). Add 2: Palm Villa, Business Bay Studio. 4 agents (Dubai names), RERA copy.
- 3 posts: `Dubai Hills Service Charges`, `Off-plan vs Ready`, `Beat Portals: Own Leads`.

---

## 4. Design Direction

- **Aesthetic:** Dubai Hills premium — ivory + charcoal + sand `#[F5E6D3]` accent + RERA teal `#[0A4D4E]` for badges. More editorial than Miami.
- **Texture:** sand noise, thin teal dividers.
- **Differentiation:** Vista = RERA/Dubai Hills/DAMAC/JVC; Harbor = MLS/Brickell bilingual.

### 3D / Motion
- `HeroHomes.tsx`: optional isometric low-poly villa with `Float` + shadow catcher, 12% opacity behind hero, `dpr 1.5`, fallback static. Keep minimal — real estate needs map more than 3D.
- `FilterBar`: framer-motion chips, URL-synced (`?beds=2&area=dubai-hills`).

---

## 5. Page Specs

### /listings + /listings/[id]
- FilterBar: beds, area, price range (AED), off-plan toggle, URL-synced via `useSearchParams`. Grid `ListingCard` → detail.
- Detail: gallery (6 images), price `AED 1.1M`, beds/baths/sqft, features (Park view, RERA permit #), agent `AgentCard` mini, `MortgageCalc` (AED/mo at 3.99%), `Book viewing` → booking, `WhatsApp brochure` → `wa.me?text=Brochure for ${title}`.

### /agents + /agents/[id]
- Agents grid, detail: bio, languages (EN/AR), listings they sold (3), `WhatsApp agent`.

### /areas + /areas/[slug]
- Area pages: map snippet, avg price, 3 listings in area, `Why Dubai Hills` copy.

### /booking
- Viewing flow: pick listing → date → time → name/phone → `POST /api/book` → WhatsApp `Viewing for ${listing} on ${date}`.

---

## 6. SEO
- Title: `Vista Homes — Dubai Hills | RERA Licensed • Leads Not Just Listings`
- JSON-LD: `RealEstateAgent` + `Apartment` for listings + `BreadcrumbList` + `RealEstateListing` schema
- Canonicals per listing/area/agent

---

## 7. Acceptance
- [ ] FilterBar URL-synced, back/forward works
- [ ] MortgageCalc computes (price * 0.8 loan / 300mo)
- [ ] generateStaticParams for listings/agents/areas/blog
- [ ] Booking + brochure both POST then WhatsApp

Build Phase 4 first (pair with Harbor).
