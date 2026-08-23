# Demo: restaurant-1 — Mira Cafe (JLT Dubai) — Exhaustive Spec

**Vertical:** Restaurant — JLT Brunch Cafe  
**Current:** `src/app/demos/restaurant-1/page.tsx` (5,778 bytes) — Hero “Menu that orders, not PDFs” + Stats 4.7 312 reviews 1.2k orders 15 min + Menu 6 (Avocado Toast AED 38...) + Gallery 3 + Loved in JLT 3 + Reserve bar. Brand `MIRA CAFE • JLT`, brunch tone, Talabat fees callout.  
**Goal:** 12 pages, menu modifiers + cart + table reserve, bilingual, internal+WhatsApp, free-reign motion, fully bespoke vs Al Hadi grill halal.

---

## 1. Sitemap (12 pages)

```
/demos/restaurant-1/
/demos/restaurant-1/menu
/demos/restaurant-1/menu/[slug]       // avocado-toast, shakshuka, mira-burger, iced-latte, acai-bowl, brunch-for-2 (6)
/demos/restaurant-1/chefs              // 3 chefs
/demos/restaurant-1/chefs/[id]
/demos/restaurant-1/about              // No commission story, JLT
/demos/restaurant-1/gallery
/demos/restaurant-1/reviews
/demos/restaurant-1/reserve            // Table booking → internal+WhatsApp
/demos/restaurant-1/contact            // Map JLT, hours 8am-11pm
/demos/restaurant-1/order              // Cart + WhatsApp checkout (internal state)
/demos/restaurant-1/blog
/demos/restaurant-1/blog/[slug]
/demos/restaurant-1/legal
```

---

## 2. File Tree

```
src/app/demos/restaurant-1/
  page.tsx, menu/page.tsx, menu/[slug]/page.tsx, chefs/page.tsx, chefs/[id]/page.tsx
  about/page.tsx, gallery/page.tsx, reviews/page.tsx, reserve/page.tsx, contact/page.tsx, order/page.tsx
  blog/page.tsx, blog/[slug]/page.tsx, legal/page.tsx
  layout.tsx, loading.tsx
src/lib/mocks/restaurant1.ts
src/components/demos/restaurant1/
  MenuCard.tsx, ModifierPicker.tsx, CartDrawer.tsx, ChefCard.tsx, HeroCafe.tsx, TablePicker.tsx
```

---

## 3. Mock Data (`src/lib/mocks/restaurant1.ts`)

```ts
export type MenuItem = {
  slug: string; name: string; price: string; desc: string; longDesc: string; image: string;
  category: "breakfast"|"brunch"|"coffee"|"bowls"; tags: string[];
  modifiers: { id: string; label: string; options: { label: string; price: string }[] }[];
  allergens: string[]; calories?: string;
}
export type Chef = { id: string; name: string; role: string; bio: string; image: string; specialty: string }
```
- 6 menu items as listed + add 2 seasonal = 8 total for realism. Keep `NO COMMISSION`, `Tap to order`, `AED 38/42/55` copy.
- 3 chefs, 24 reviews, 3 posts: `Why PDFs Kill Orders`, `JLT Brunch Guide`, `Daily Reels That Sell`.

---

## 4. Design Direction

- **Aesthetic:** JLT brunch — warm ivory + charcoal + warm wood; add terracotta `#[E8D5C4]` accent (vs Al Hadi charcoal grill). Rounded, friendly.
- **Typography:** serif hero, sans menu.
- **Texture:** linen + subtle coffee grain in hero.
- **Differentiation:** Mira = brunch/daylight, Al Hadi = grill/night charcoal + halal bold.

### 3D / Motion
- `HeroCafe.tsx`: `Float` croissant/coffee cup low-poly with `MeshStandardMaterial`, 10% opacity behind hero, `dpr 1.5`, mobile fallback static.
- `ModifierPicker`: framer-motion for topping selection (chip animate).
- `CartDrawer`: slide-over with `motion`.

---

## 5. Page Specs

### /menu + /menu/[slug]
- Grid by category, filter pills, search. Card shows price pill `AED 38`. Detail: image, price, `ModifierPicker` (e.g., Avocado Toast: bread sourdough/rye, add poach +AED 8), allergens, calories, `Add to Order` → local cart (localStorage `mira-cart`).

### /order (Cart)
- Cart state (qty, modifiers), subtotal, `Checkout on WhatsApp` → `POST /api/book { demo:"restaurant-1", items }` → `wa.me?text=Order: 2x Avocado Toast...`

### /reserve
- Table picker: date, time, guests (2-8), name/phone → `POST /api/book` → WhatsApp `Reserve JLT table for 2 on ...`

### /chefs + /chefs/[id]
- Chef cards, detail shows specialty (brunch), schedule.

### Other
- /about: Talabat no-fees story, JLT mornings to late nights, press.
- /gallery: 12 food/interior images, masonry.
- 3D budget same caps.

---

## 6. SEO
- Title: `Mira Cafe — JLT Dubai | Brunch Menu That Orders on WhatsApp — No Commission`
- JSON-LD: `Restaurant` + `Menu` + `MenuItem` + `BreadcrumbList`
- Canonicals per dish

---

## 7. Acceptance
- [ ] ModifierPicker updates price live
- [ ] Cart persists localStorage, checkout posts then WhatsApp
- [ ] Table reserve flow posts then WhatsApp
- [ ] generateStaticParams for menu/chefs/blog
- [ ] Images next/image, no CLS

Build Phase 3 first (pair with restaurant-2).
