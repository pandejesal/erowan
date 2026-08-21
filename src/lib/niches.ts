export type Niche = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  pain: string;
  description: string;
  features: string[];
  faq: { q: string; a: string }[];
  demos: { id: string; name: string; href: string }[];
  priceNote: string;
};

export const niches: Niche[] = [
  {
    slug: "salons",
    title: "Websites for Salons & Spas",
    shortTitle: "Salons & Spas",
    tagline: "Turn after-hours scrolls into booked chairs",
    pain: "60% of Gulf bookings happen after 8pm — no online booking = empty chairs",
    description:
      "Built for Dubai, Sharjah & Riyadh salons that lose bookings to WhatsApp chaos. We ship booking-first sites in 48 hours.",
    features: [
      "One-tap WhatsApp + online booking (Fresha/Squire compatible)",
      "Services & price list with AED/USD toggle",
      "Instagram feed + Google reviews auto-sync",
      "Staff pages + slot availability",
    ],
    faq: [
      { q: "Do you handle Arabic?", a: "Yes — English + Arabic layout included, RTL ready." },
      { q: "Can clients pay online?", a: "Optional deposit via Stripe/PayPal link — or pay-at-store." },
      { q: "How fast?", a: "48 hours for base, +24h for booking integration." },
    ],
    demos: [
      { id: "salon-1", name: "Noura Salon — Dubai Marina", href: "/demos/salon-1" },
      { id: "salon-2", name: "Bloom Spa — Riyadh", href: "/demos/salon-2" },
    ],
    priceNote: "$250 base + $150 booking",
  },
  {
    slug: "restaurants",
    title: "Websites for Restaurants & Cafes",
    shortTitle: "Restaurants & Cafes",
    tagline: "Menu that sells — not just shows",
    pain: "Tourists & locals Google 'near me' — slow PDF menus kill orders",
    description:
      "For Gulf cafes and restaurants competing on Zomato/Talabat — own your ordering, keep the margin.",
    features: [
      "Mobile-first menu with modifiers & combo builder",
      "WhatsApp / phone ordering — no commission",
      "Table reservation + Google Maps embed",
      "Daily offers & Instagram reels block",
    ],
    faq: [
      { q: "Online payment?", a: "Cash on delivery default; card via Stripe link optional." },
      { q: "Multi-branch?", a: "Yes — branch switcher included." },
      { q: "Menu updates?", a: "You edit menu in 2 mins — no dev needed." },
    ],
    demos: [
      { id: "restaurant-1", name: "Mira Cafe — JLT", href: "/demos/restaurant-1" },
      { id: "restaurant-2", name: "Al Hadi Grill — Jeddah", href: "/demos/restaurant-2" },
    ],
    priceNote: "$250 base + $150 ordering",
  },
  {
    slug: "clinics",
    title: "Websites for Clinics & Dental",
    shortTitle: "Clinics & Dental",
    tagline: "Trust before they book the appointment",
    pain: "Patients vet you in 10 seconds — no doctor profiles = no trust",
    description:
      "Clinics in Dubai, Abu Dhabi & Doha that need compliant, calm, conversion-focused sites.",
    features: [
      "Doctor profiles + credentials + DHA license badge",
      "Appointment request with triage (not false promise)",
      "Before/after consent-aware gallery",
      "Insurance & location + Arabic toggle",
    ],
    faq: [
      { q: "Is it HIPAA/PDPL safe?", a: "No patient data stored — forms go to your email/WhatsApp." },
      { q: "Arabic?", a: "Yes, bilingual header included." },
      { q: "Booking integration?", a: "Connects to your existing HIS/Calendly — we don't replace it." },
    ],
    demos: [
      { id: "clinic-1", name: "SmileCare Dental — Dubai", href: "/demos/clinic-1" },
      { id: "clinic-2", name: "Al Noor Clinic — Muscat", href: "/demos/clinic-2" },
    ],
    priceNote: "$250 base + $150 appointments",
  },
  {
    slug: "real-estate",
    title: "Websites for Real Estate",
    shortTitle: "Real Estate",
    tagline: "Leads, not just listings",
    pain: "Portals eat your leads — your site should capture them",
    description:
      "For Gulf realtors & developers who need fast, lead-gen pages that beat portal reliance.",
    features: [
      "Listings filter (beds, area, AED) + WhatsApp lead capture",
      "Agent cards + RERA/DLD compliance footer",
      "Off-plan vs ready filter",
      "Map + mortgage calculator hook",
    ],
    faq: [
      { q: "CRM?", a: "Leads to WhatsApp/Email/HubSpot free — your choice." },
      { q: "Listings sync?", a: "Manual for base; CSV import add-on." },
      { q: "Arabic?", a: "Yes, included." },
    ],
    demos: [
      { id: "realestate-1", name: "Vista Homes — Dubai Hills", href: "/demos/realestate-1" },
      { id: "realestate-2", name: "Harbor Realty — Doha", href: "/demos/realestate-2" },
    ],
    priceNote: "$250 base + $150 listings",
  },
];

export const getNiche = (slug: string) => niches.find((n) => n.slug === slug);
