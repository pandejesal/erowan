export type LabIntent = "convert" | "delight" | "story";

export type LabPattern = {
  slug: string;
  num: string;
  title: string;
  intent: LabIntent;
  tagline: string;
  description: string;
  salesUse: string;
  craft: string;
  tech: string[];
  priceNote: string;
};

export const labPatterns: LabPattern[] = [
  {
    slug: "pricing-toggle",
    num: "01",
    title: "PRICING TOGGLE",
    intent: "convert",
    tagline: "Annual brags, monthly converts",
    description: "Spring-morphed toggle that flips 6 price cards with stagger. Yearly shows 20% save badge with confetti burst.",
    salesUse: "Salon memberships, Clinic plans, Realty fees — any tiered offer",
    craft: "Framer spring (stiffness 320, damping 24), layout animation, confetti particles on toggle",
    tech: ["framer-motion", "layout"],
    priceNote: "+$0 with any site",
  },
  {
    slug: "booking-scrub",
    num: "02",
    title: "BOOKING SCRUB",
    intent: "convert",
    tagline: "Drag time, book faster",
    description: "Horizontal drag rail to scrub 7am–9pm slots. Snaps to 30-min cells, shows staff avatar + price.",
    salesUse: "Salon chair, Clinic slot, Restaurant table — replaces ugly calendar",
    craft: "Drag with snap (motion drag elastic 0.2), inertial scroll, haptic ticks via vibration API",
    tech: ["framer-motion drag", "snap"],
    priceNote: "Core booking flow",
  },
  {
    slug: "before-after",
    num: "03",
    title: "BEFORE / AFTER",
    intent: "convert",
    tagline: "Proof not promise",
    description: "Clip-path slider you drag to reveal transformation. Handle has magnetic stick at 50%.",
    salesUse: "Salon color, Clinic whitening, Realty renovation, Restaurant plating",
    craft: "Clip-path 0–100%, pointer capture, magnetic threshold, reduced-motion fallback",
    tech: ["clip-path", "pointer"],
    priceNote: "Best for trust verticals",
  },
  {
    slug: "cart-drawer",
    num: "04",
    title: "CART DRAWER",
    intent: "convert",
    tagline: "Add → slide → pay",
    description: "Stagger-drawer that flies items from grid to drawer with shared layoutId. Drawer peeks on add.",
    salesUse: "Other-2 textiles/ceramics cart, Salon product shop, Restaurant order",
    craft: "Shared layoutId flight, staggerChildren 0.07, spring drawer (damping 22)",
    tech: ["layoutId", "stagger"],
    priceNote: "E-commerce essential",
  },
  {
    slug: "magnetic-cta",
    num: "05",
    title: "MAGNETIC CTA",
    intent: "delight",
    tagline: "Button wants you",
    description: "CTA warps toward cursor within 120px radius, snaps back on leave. Micro-scale + shadow grows with proximity.",
    salesUse: "Any 'Book now' 'Reserve' 'Get quote' — lifts CTR 18% in tests",
    craft: "Mousemove → set x/y with spring (mass 0.4), lerp 0.14, deactivate on touch",
    tech: ["spring", "pointer"],
    priceNote: "Drop-in upgrade",
  },
  {
    slug: "fluid-cursor",
    num: "06",
    title: "FLUID CURSOR",
    intent: "delight",
    tagline: "Ink follows intent",
    description: "Dot + trailing ring that stretches with velocity, blobs on click. Hides native cursor inside lab.",
    salesUse: "Lab signature — use as site-wide cursor for premium brands",
    craft: "Velocity → scaleX 1:1.6, 6 trailing dots with delay 0.04, mix-blend-difference",
    tech: ["framer-motion", "velocity"],
    priceNote: "Signature add-on",
  },
  {
    slug: "stagger-grid",
    num: "07",
    title: "STAGGER GRID",
    intent: "delight",
    tagline: "Hover one, wake all",
    description: "4×3 grid where hover triggers cascaded 3D tilt + y shift with 38ms stagger. Tap = replay on mobile.",
    salesUse: "Team, portfolio, listings, menu — any grid becomes alive",
    craft: "whileHover staggerChildren, rotateX 6deg, y -4, transition stagger 0.038",
    tech: ["stagger", "3d-tilt"],
    priceNote: "Grid glow-up",
  },
  {
    slug: "clip-reveal",
    num: "08",
    title: "CLIP REVEAL",
    intent: "delight",
    tagline: "Mask is the message",
    description: "Scroll-linked clip-path that wipes image from diamond → full. Scrubs with Lenis progress.",
    salesUse: "Hero image, case study cover, property hero — replaces fade",
    craft: "useScroll + useTransform clipPath, spring smoothing 0.18, fallback to opacity",
    tech: ["useScroll", "clipPath"],
    priceNote: "Hero enhancer",
  },
  {
    slug: "pinned-scroll",
    num: "09",
    title: "PINNED SCROLL",
    intent: "story",
    tagline: "Scroll pins, story drips",
    description: "Left text pins while right steps through 4 scenes with progress dots. Scrubs, not snaps.",
    salesUse: "About, process, case study narrative — the 'how we work' story",
    craft: "Sticky top 32vh, scroll-linked step index, AnimatePresence for step",
    tech: ["sticky", "scroll-linked"],
    priceNote: "Story weapon",
  },
  {
    slug: "horizontal-rail",
    num: "10",
    title: "HORIZONTAL RAIL",
    intent: "story",
    tagline: "Scroll down, move sideways",
    description: "Vertical scroll drives horizontal rail of 6 cards with parallax. Drag rail directly too.",
    salesUse: "Gallery, timeline, press, listings lane — no more boring carousel",
    craft: "useScroll → x transform -100vw, drag x with constraints, parallax y on cards",
    tech: ["horizontal", "parallax"],
    priceNote: "Gallery upgrade",
  },
  {
    slug: "text-scramble",
    num: "11",
    title: "TEXT SCRAMBLE",
    intent: "story",
    tagline: "Words glitch into meaning",
    description: "Headline scrambles charset → resolves to final copy on view. Hover re-scrambles.",
    salesUse: "Hero headline, stat reveal, testimonial pull-quote",
    craft: "Char array + setInterval 38ms, framer controlled decode, reduced-motion = no scramble",
    tech: ["scramble", "interval"],
    priceNote: "Headline flex",
  },
  {
    slug: "image-distort",
    num: "12",
    title: "IMAGE DISTORT",
    intent: "story",
    tagline: "Hover melts photo",
    description: "Image warps with CSS filter + scale + displacement map illusion. Cursor proximity drives intensity.",
    salesUse: "Portfolio, lookbook, product hover — tactile photo feel",
    craft: "filter: contrast + saturate + blur, scale 1.04, pseudo displacement via transform, spring",
    tech: ["filter", "spring"],
    priceNote: "Lookbook polish",
  },
];

export const labIntents: { id: LabIntent; label: string; desc: string; pack: string; price: string }[] = [
  { id: "convert", label: "CONVERT", desc: "Sell more — booking, pricing, proof, cart", pack: "CONVERT PACK", price: "$450 add-on" },
  { id: "delight", label: "DELIGHT", desc: "Feel premium — magnet, fluid, stagger, reveal", pack: "DELIGHT PACK", price: "$550 add-on" },
  { id: "story", label: "STORY", desc: "Stay longer — pinned, rail, scramble, distort", pack: "STORY PACK", price: "$650 add-on" },
];

export function getLabPattern(slug: string) {
  return labPatterns.find(p => p.slug === slug);
}
