export type Niche = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  pain: string;
  description: string;
  features: string[];
  faq: { q: string; a: string }[];
  demos: { id: string; name: string; href: string; image: string }[];
  priceNote: string;
};

export const niches: Niche[] = [
  {
    slug: "salons",
    title: "Websites for Salons & Spas",
    shortTitle: "Salons & Spas",
    tagline: "Turn after-hours scrolls into booked chairs",
    pain: "60% of bookings happen after 8pm — no online booking = empty chairs",
    description:
      "For salons & spas worldwide — from Dubai to Miami — that lose bookings to WhatsApp chaos. We ship booking-first sites in 48 hours.",
    features: [
      "One-tap WhatsApp + online booking (Fresha/Squire compatible)",
      "Services & price list with USD/AED/EUR toggle",
      "Instagram feed + Google reviews auto-sync",
      "Staff pages + slot availability",
    ],
    faq: [
      { q: "Do you handle Arabic/Spanish?", a: "Yes — English + Arabic/Spanish layout included, RTL ready." },
      { q: "Can clients pay online?", a: "Optional deposit via Stripe/PayPal link — or pay-at-store." },
      { q: "How fast?", a: "48 hours for base, +24h for booking integration." },
    ],
    demos: [
      { id: "salon-1", name: "Noura Salon — Dubai", href: "/demos/salon-1", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80&auto=format&fit=crop" },
      { id: "salon-2", name: "Bloom Spa — New York", href: "/demos/salon-2", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop" },
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
      "For cafes & restaurants worldwide — own your ordering, keep the margin. No commission vs delivery apps.",
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
      { id: "restaurant-1", name: "Mira Cafe — Dubai", href: "/demos/restaurant-1", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop" },
      { id: "restaurant-2", name: "Al Hadi Grill — London", href: "/demos/restaurant-2", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop" },
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
      "Clinics worldwide that need compliant, calm, conversion-focused sites — DHA, HIPAA or GDPR aware.",
    features: [
      "Doctor profiles + credentials + license badge",
      "Appointment request with triage (not false promise)",
      "Before/after consent-aware gallery",
      "Insurance & location + multi-language toggle",
    ],
    faq: [
      { q: "Is it HIPAA/PDPL/GDPR safe?", a: "No patient data stored — forms go to your email/WhatsApp." },
      { q: "Languages?", a: "Yes, bilingual header included." },
      { q: "Booking integration?", a: "Connects to your existing HIS/Calendly — we don't replace it." },
    ],
    demos: [
      { id: "clinic-1", name: "SmileCare Dental — Dubai", href: "/demos/clinic-1", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop" },
      { id: "clinic-2", name: "Al Noor Clinic — Berlin", href: "/demos/clinic-2", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop" },
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
      "For realtors & developers worldwide who need fast, lead-gen pages that beat portal reliance.",
    features: [
      "Listings filter (beds, area, price) + WhatsApp lead capture",
      "Agent cards + compliance footer",
      "Off-plan vs ready filter",
      "Map + mortgage calculator hook",
    ],
    faq: [
      { q: "CRM?", a: "Leads to WhatsApp/Email/HubSpot free — your choice." },
      { q: "Listings sync?", a: "Manual for base; CSV import add-on." },
      { q: "Languages?", a: "Yes, included." },
    ],
    demos: [
      { id: "realestate-1", name: "Vista Homes — Dubai Hills", href: "/demos/realestate-1", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop" },
      { id: "realestate-2", name: "Harbor Realty — Miami", href: "/demos/realestate-2", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop" },
    ],
    priceNote: "$250 base + $150 listings",
  },
];

export const getNiche = (slug: string) => niches.find((n) => n.slug === slug);
