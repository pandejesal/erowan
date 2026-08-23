import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://erowan.com";
  const routes = ["", "/salons", "/restaurants", "/clinics", "/real-estate", "/other", "/pay",
    "/demos/salon-1","/demos/salon-2","/demos/restaurant-1","/demos/restaurant-2","/demos/clinic-1","/demos/clinic-2","/demos/realestate-1","/demos/realestate-2","/demos/other-1","/demos/other-2"];

  // Phase 1 expanded — salon-1 & salon-2 deep pages
  const salon1 = [
    "/demos/salon-1/services",
    "/demos/salon-1/services/haircut-blowdry","/demos/salon-1/services/gel-manicure","/demos/salon-1/services/moroccan-bath","/demos/salon-1/services/balayage","/demos/salon-1/services/keratin-smooth","/demos/salon-1/services/bridal-trial",
    "/demos/salon-1/team","/demos/salon-1/team/layla","/demos/salon-1/team/sara","/demos/salon-1/team/mona","/demos/salon-1/team/huda","/demos/salon-1/team/nour","/demos/salon-1/team/zara",
    "/demos/salon-1/gallery","/demos/salon-1/reviews","/demos/salon-1/about","/demos/salon-1/booking","/demos/salon-1/blog","/demos/salon-1/blog/summer-hair-humidity","/demos/salon-1/blog/balayage-vs-foil","/demos/salon-1/blog/bridal-trial-timeline","/demos/salon-1/faq",
  ];
  const salon2 = [
    "/demos/salon-2/services",
    "/demos/salon-2/services/aroma-massage","/demos/salon-2/services/hydra-facial","/demos/salon-2/services/wax-full-body","/demos/salon-2/services/nail-art","/demos/salon-2/services/hair-spa","/demos/salon-2/services/bridal-package",
    "/demos/salon-2/team","/demos/salon-2/team/maya","/demos/salon-2/team/sofia","/demos/salon-2/team/lina","/demos/salon-2/team/zara","/demos/salon-2/team/nina",
    "/demos/salon-2/garden","/demos/salon-2/reviews","/demos/salon-2/about","/demos/salon-2/booking","/demos/salon-2/blog","/demos/salon-2/blog/soho-calm-why","/demos/salon-2/blog/aroma-vs-deep","/demos/salon-2/blog/bridal-nyc-garden","/demos/salon-2/faq",
  ];

  const clinic1 = [
    "/demos/clinic-1/treatments","/demos/clinic-1/treatments/implant","/demos/clinic-1/treatments/braces","/demos/clinic-1/treatments/whitening","/demos/clinic-1/treatments/pediatric","/demos/clinic-1/treatments/root-canal","/demos/clinic-1/treatments/cleaning",
    "/demos/clinic-1/doctors","/demos/clinic-1/doctors/aisha-khan","/demos/clinic-1/doctors/omar-farooq","/demos/clinic-1/doctors/sara-lee","/demos/clinic-1/doctors/huda-ali","/demos/clinic-1/doctors/karim-youssef",
    "/demos/clinic-1/about","/demos/clinic-1/contact","/demos/clinic-1/booking","/demos/clinic-1/reviews","/demos/clinic-1/blog","/demos/clinic-1/blog/implant-aftercare-heat","/demos/clinic-1/blog/braces-at-30","/demos/clinic-1/blog/why-dhcc","/demos/clinic-1/legal",
  ];
  const clinic2 = [
    "/demos/clinic-2/services","/demos/clinic-2/services/gp-visit","/demos/clinic-2/services/dental-check","/demos/clinic-2/services/pediatric","/demos/clinic-2/services/lab-tests","/demos/clinic-2/services/vaccination","/demos/clinic-2/services/wellness",
    "/demos/clinic-2/doctors","/demos/clinic-2/doctors/mueller","/demos/clinic-2/doctors/fatima","/demos/clinic-2/doctors/jonas","/demos/clinic-2/doctors/sophie","/demos/clinic-2/doctors/ahmed",
    "/demos/clinic-2/about","/demos/clinic-2/contact","/demos/clinic-2/booking","/demos/clinic-2/reviews","/demos/clinic-2/blog","/demos/clinic-2/blog/expat-labs","/demos/clinic-2/blog/vax-2026","/demos/clinic-2/blog/no-data-booking","/demos/clinic-2/legal",
  ];

  const restaurant1 = [
    "/demos/restaurant-1/menu","/demos/restaurant-1/menu/avocado-toast","/demos/restaurant-1/menu/shakshuka","/demos/restaurant-1/menu/mira-burger","/demos/restaurant-1/menu/iced-spanish-latte","/demos/restaurant-1/menu/acai-bowl","/demos/restaurant-1/menu/brunch-for-2",
    "/demos/restaurant-1/chefs","/demos/restaurant-1/chefs/lina","/demos/restaurant-1/chefs/omar","/demos/restaurant-1/chefs/sofia",
    "/demos/restaurant-1/gallery","/demos/restaurant-1/reviews","/demos/restaurant-1/about","/demos/restaurant-1/contact","/demos/restaurant-1/reserve","/demos/restaurant-1/order","/demos/restaurant-1/blog","/demos/restaurant-1/blog/pdf-kills-orders","/demos/restaurant-1/blog/jlt-brunch-guide","/demos/restaurant-1/blog/daily-reels","/demos/restaurant-1/legal",
  ];
  const restaurant2 = [
    "/demos/restaurant-2/menu","/demos/restaurant-2/menu/mixed-grill-platter","/demos/restaurant-2/menu/shish-tawook","/demos/restaurant-2/menu/kabsa-lahm","/demos/restaurant-2/menu/hummus-bread","/demos/restaurant-2/menu/fresh-juices","/demos/restaurant-2/menu/family-feast",
    "/demos/restaurant-2/chefs","/demos/restaurant-2/chefs/ahmed","/demos/restaurant-2/chefs/bilal","/demos/restaurant-2/chefs/youssef",
    "/demos/restaurant-2/gallery","/demos/restaurant-2/reviews","/demos/restaurant-2/about","/demos/restaurant-2/contact","/demos/restaurant-2/reserve","/demos/restaurant-2/order","/demos/restaurant-2/blog","/demos/restaurant-2/blog/halal-soho","/demos/restaurant-2/blog/spice-guide","/demos/restaurant-2/blog/family-feast","/demos/restaurant-2/legal",
  ];

  const realestate1 = [
    "/demos/realestate-1/listings","/demos/realestate-1/listings/dubai-hills-1br","/demos/realestate-1/listings/creek-2br","/demos/realestate-1/listings/damac-villa","/demos/realestate-1/listings/jvc-studio","/demos/realestate-1/listings/tilal-offplan","/demos/realestate-1/listings/marina-penthouse",
    "/demos/realestate-1/agents","/demos/realestate-1/agents/sara","/demos/realestate-1/agents/ahmed","/demos/realestate-1/agents/noura","/demos/realestate-1/agents/khalid",
    "/demos/realestate-1/areas","/demos/realestate-1/areas/dubai-hills","/demos/realestate-1/areas/creek-harbour","/demos/realestate-1/areas/damac","/demos/realestate-1/areas/jvc",
    "/demos/realestate-1/about","/demos/realestate-1/contact","/demos/realestate-1/booking","/demos/realestate-1/blog","/demos/realestate-1/blog/hills-charges","/demos/realestate-1/blog/offplan-vs-ready","/demos/realestate-1/blog/own-leads","/demos/realestate-1/legal",
  ];
  const realestate2 = [
    "/demos/realestate-2/listings","/demos/realestate-2/listings/brickell-2br","/demos/realestate-2/listings/miami-beach-3br","/demos/realestate-2/listings/coral-gables-villa","/demos/realestate-2/listings/wynwood-loft","/demos/realestate-2/listings/downtown-1br","/demos/realestate-2/listings/coconut-grove-2br",
    "/demos/realestate-2/agents","/demos/realestate-2/agents/maria","/demos/realestate-2/agents/carlos","/demos/realestate-2/agents/sofia","/demos/realestate-2/agents/james",
    "/demos/realestate-2/areas","/demos/realestate-2/areas/brickell","/demos/realestate-2/areas/miami-beach","/demos/realestate-2/areas/coral-gables","/demos/realestate-2/areas/wynwood",
    "/demos/realestate-2/about","/demos/realestate-2/contact","/demos/realestate-2/booking","/demos/realestate-2/blog","/demos/realestate-2/blog/brickell-invest","/demos/realestate-2/blog/beach-vs-brickell","/demos/realestate-2/blog/bilingual-leads","/demos/realestate-2/legal",
  ];

  const other1 = [
    "/demos/other-1/services","/demos/other-1/services/strategy-sprint","/demos/other-1/services/ops-review","/demos/other-1/services/retainer","/demos/other-1/services/workshop","/demos/other-1/services/due-diligence","/demos/other-1/services/fractional-coo",
    "/demos/other-1/case-studies","/demos/other-1/case-studies/fintech-ops","/demos/other-1/case-studies/marketplace-save","/demos/other-1/case-studies/saas-churn","/demos/other-1/case-studies/healthtech-launch","/demos/other-1/case-studies/ecom-ops","/demos/other-1/case-studies/fintech-dd",
    "/demos/other-1/team","/demos/other-1/team/james-north","/demos/other-1/team/priya-mehta","/demos/other-1/team/alex-chen","/demos/other-1/team/sara-khan","/demos/other-1/team/tom-wright",
    "/demos/other-1/about","/demos/other-1/contact","/demos/other-1/booking","/demos/other-1/blog","/demos/other-1/blog/no-retainer-trap","/demos/other-1/blog/ops-review-looms","/demos/other-1/blog/48h-site","/demos/other-1/legal",
  ];
  const other2 = [
    "/demos/other-2/products","/demos/other-2/products/ceramic-mug","/demos/other-2/products/linen-apron","/demos/other-2/products/wood-board","/demos/other-2/products/throw-pillow","/demos/other-2/products/ceramic-bowl","/demos/other-2/products/table-runner",
    "/demos/other-2/collections","/demos/other-2/collections/ceramics","/demos/other-2/collections/textiles","/demos/other-2/collections/wood",
    "/demos/other-2/story","/demos/other-2/stockists","/demos/other-2/faq","/demos/other-2/contact","/demos/other-2/cart","/demos/other-2/reviews","/demos/other-2/blog","/demos/other-2/blog/wheel-vs-slip","/demos/other-2/blog/natural-dyes-2026","/demos/other-2/blog/no-etsy-fees","/demos/other-2/legal",
  ];

  const lab = [
    "/lab",
    "/lab/pricing-toggle","/lab/booking-scrub","/lab/before-after","/lab/cart-drawer",
    "/lab/magnetic-cta","/lab/fluid-cursor","/lab/stagger-grid","/lab/clip-reveal",
    "/lab/pinned-scroll","/lab/horizontal-rail","/lab/text-scramble","/lab/image-distort",
  ];

  const all = [...routes, ...salon1, ...salon2, ...clinic1, ...clinic2, ...restaurant1, ...restaurant2, ...realestate1, ...realestate2, ...other1, ...other2, ...lab];
  return all.map(r => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" as const : "monthly" as const,
    priority: r === "" ? 1 : r.startsWith("/demos") ? 0.5 : 0.8,
  }));
}
