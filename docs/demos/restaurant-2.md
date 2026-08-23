# Demo: restaurant-2 — Al Hadi Grill (Soho London) — Exhaustive Spec

**Vertical:** Restaurant — Soho Grill Halal  
**Current:** `src/app/demos/restaurant-2/page.tsx` (5,281 bytes) — Hero “London grill, ordered in seconds” + Stats 4.8 210 reviews 900 orders 12 min + Menu 6 (Mixed Grill £22...) + Gallery + Loved in Soho. Brand `AL HADI GRILL • SOHO`, halal, charcoal tone.  
**Contrast:** Mira is brunch/terracotta/daylight; Al Hadi is grill/charcoal/night/seasoning.  
**Goal:** 12 pages, bespoke halal grill, modifiers for spice/sides, internal+WhatsApp.

---

## 1. Sitemap (12 pages)

Same 12 as restaurant-1 but copy grill:
```
/demos/restaurant-2/
/demos/restaurant-2/menu
/demos/restaurant-2/menu/[slug]  // mixed-grill-platter, shish-tawook, kabsa-lahm, hummus-bread, fresh-juices, family-feast (6)
/demos/restaurant-2/chefs
/demos/restaurant-2/chefs/[id]
/demos/restaurant-2/about
/demos/restaurant-2/gallery
/demos/restaurant-2/reviews
/demos/restaurant-2/reserve
/demos/restaurant-2/contact
/demos/restaurant-2/order
/demos/restaurant-2/blog
/demos/restaurant-2/blog/[slug]
/demos/restaurant-2/legal
```

---

## 2. File Tree

```
src/app/demos/restaurant-2/
  page.tsx, menu/page.tsx, menu/[slug]/page.tsx, chefs/page.tsx, chefs/[id]/page.tsx
  about/page.tsx, gallery/page.tsx, reviews/page.tsx, reserve/page.tsx, contact/page.tsx, order/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/restaurant2.ts
src/components/demos/restaurant2/
  MenuCard.tsx, SpicePicker.tsx, CartDrawer.tsx, GrillHero.tsx
```

---

## 3. Mock Data (`src/lib/mocks/restaurant2.ts`)

```ts
export type MenuItem = {
  slug: string; name: string; price: string; desc: string; longDesc: string; image: string;
  category: "grill"|"sides"|"drinks"|"feasts"; halal: boolean;
  modifiers: { id: string; label: string; options: { label: string; price: string }[] }[];
  spiceLevels: string[];
}
```
- Keep Mixed Grill For 2 £22, Shish Tawook £12 etc verbatim. Add `HALAL` badge per item. 3 chefs (Grill master), London Soho copy.

---

## 4. Design Direction

- **Aesthetic:** Soho grill night — charcoal `#[1A1A1A]` + ivory + ember orange `#[FF4D1A]` accent (flame), vs Mira terracotta.
- **Typography:** bolder, tighter.
- **Texture:** charcoal grain + subtle grill grate pattern at 4% opacity.
- **Differentiation:** halal badge, Soho neon hint in footer.

### 3D / Motion
- `GrillHero.tsx`: low-poly grill flame with `MeshStandardMaterial` emissive, behind hero at 10% opacity, or no 3D to keep halal authentic — prefer subtle ember particles via `Points`.

---

## 5. Page Specs

### /menu/[slug]
- Spice picker (mild/medium/hot), sides (rice/bread), `HALAL` badge, grill time, `Add to Order`.
- Cart & reserve same as restaurant-1 but copy `Soho lunch to late night`, halal note.

### Other
Parallel mira but London/Soho, halal, family feast.

---

## 6. SEO
- Title: `Al Hadi Grill — Soho London | Charcoal Halal Grill — Order on WhatsApp`
- JSON-LD: `Restaurant` with `servesCuisine: Middle Eastern`, `priceRange: ££`, halal flag in desc.

## 7. Acceptance
Same as restaurant-1 + halal badge visible, spice picker updates price, cart→WhatsApp works.

Build Phase 3 with restaurant-1.
