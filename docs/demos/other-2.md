# Demo: other-2 — Craft Shop (Brooklyn) — Exhaustive Spec

**Vertical:** Other — E-commerce Handmade  
**Current:** `src/app/demos/other-2/page.tsx` (8,080 bytes) — Hero “Made by hand. Sold worldwide.” + Stats 4.9 312 reviews 5k+ orders 48h + Products 6 (Ceramic Mug $28...) + Studio 3 + Story + Loved worldwide 3 + Map Navy Yard + Shop CTA. Brand `CRAFT SHOP • BROOKLYN • SINCE 2018`, handmade, Navy Yard.  
**Contrast:** North is B2B ink/brutal; Craft is warm handmade/linen/ceramics.  
**Goal:** 11 pages, shop/cart/filter, collection pages, internal+WhatsApp checkout, warm craft showcase.

---

## 1. Sitemap (11 pages)

```
/demos/other-2/
/demos/other-2/products
/demos/other-2/products/[slug]    // ceramic-mug, linen-apron, wood-board, throw-pillow, ceramic-bowl, table-runner (6)
/demos/other-2/collections
/demos/other-2/collections/[slug]// ceramics, textiles, wood (3)
/demos/other-2/story              // Brooklyn since 2018, Navy Yard, process
/demos/other-2/stockists         // 4 stockists map
/demos/other-2/faq               // Shipping, returns, wholesale
/demos/other-2/contact           // Map Navy Yard 63 Flushing Ave
/demos/other-2/cart              // Cart + WhatsApp checkout (internal state)
/demos/other-2/reviews
/demos/other-2/blog
/demos/other-2/blog/[slug]
/demos/other-2/legal
```

---

## 2. File Tree

```
src/app/demos/other-2/
  page.tsx, products/page.tsx, products/[slug]/page.tsx
  collections/page.tsx, collections/[slug]/page.tsx
  story/page.tsx, stockists/page.tsx, faq/page.tsx, contact/page.tsx, cart/page.tsx
  reviews/page.tsx, blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/other2.ts
src/components/demos/other2/
  ProductCard.tsx, ClayPreview.tsx, CartDrawer.tsx, StoryTimeline.tsx, HeroCraft.tsx
```

---

## 3. Mock Data (`src/lib/mocks/other2.ts`)

```ts
export type Product = {
  slug: string; name: string; price: string; desc: string; longDesc: string; image: string; gallery: string[];
  category: "ceramics"|"textiles"|"wood"; stock: number; dims: string; materials: string[]; handmade: boolean;
  featured?: boolean;
}
export type Stockist = { id: string; name: string; city: string; address: string; map: string }
```
- Keep 6 products verbatim ($28, $45, $60...), add stock levels, dims. Keep `Worldwide shipping • 30-day returns • Wholesale`. 4 stockists (Brooklyn, Manhattan, LA, London). 3 posts: `Wheel-thrown vs Slip-cast`, `Natural Dyes 2026`, `No Etsy Fees`.

---

## 4. Design Direction

- **Aesthetic:** Brooklyn handmade warm — ivory + charcoal + clay `#[C4A484]` + indigo `#[283593]` (from Table Runner 72”). More linen texture than North brutal.
- **Typography:** serif hero + hand-written accent for `HANDMADE • SMALL BATCH`.
- **Texture:** canvas linen grain, deckled edges on images (2px border-radius larger).
- **Differentiation:** Craft warm/clay vs North ink.

### 3D / Motion
- `ClayPreview.tsx` on product detail: `Float` low-poly mug with `MeshPhysicalMaterial` (ceramic glaze) that rotates on scroll (GSAP), `dpr 1.5`, fallback image. Adds tactile wow without breaking shop.
- `CartDrawer`: `motion` slide-over, persist `craft-cart` localStorage.

---

## 5. Page Specs

### /products + /products/[slug] + /collections/[slug]
- Grid 6, filter by category, sort by price, `SMALL BATCH` badge. Detail: gallery (4), price, `Dims`, `Materials`, `Stock: 8 left`, `Add to cart` → local cart, `in 3 days worldwide` note. Collections: ceramics (mug+bowl), textiles (apron+pillow+runner), wood (board).

### /cart
- Cart state, qty, subtotal, shipping $8 worldwide hint, `Checkout on WhatsApp` → `POST /api/book { demo:"other-2", items }` → `wa.me?text=Order: Mug x2...`

### /story
- Timeline Navy Yard since 2018, process (wheel, dyes), 2 friends story, press.

### /stockists
- Map (63 Flushing Ave), 4 stockists cards with map pins.

---

## 6. SEO
- Title: `Craft Shop — Brooklyn Navy Yard | Ceramics & Textiles Handmade Since 2018 — Worldwide`
- JSON-LD: `Store` + `Product` + `Offer` + `BreadcrumbList`
- Canonicals per product/collection

---

## 7. Acceptance
- [ ] generateStaticParams for products/collections/blog
- [ ] ClayPreview 3D hidden on mobile/reduced-motion
- [ ] Cart persists, checkout posts then WhatsApp
- [ ] Stockists map snippet visible

Build Phase 5 with other-1 (last batch).
