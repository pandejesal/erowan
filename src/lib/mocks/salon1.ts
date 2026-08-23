export type Service = {
  slug: string;
  name: string;
  category: "hair" | "spa" | "nails" | "bridal";
  price: string;
  duration: string;
  desc: string;
  longDesc: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  includes: string[];
};

export type Stylist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  rating: number;
  reviews: number;
  instagram: string;
};

export type Review = {
  id: string;
  author: string;
  serviceSlug: string;
  rating: number;
  text: string;
  date: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string;
};

export type FAQ = { q: string; a: string };

export const services: Service[] = [
  {
    slug: "haircut-blowdry",
    name: "Haircut + Blowdry",
    category: "hair",
    price: "AED 120",
    duration: "45 min",
    desc: "Wash, precision cut, blowdry finish",
    longDesc: "Precision cut tailored to face shape and lifestyle. Includes relaxing wash, head massage, cut, and signature blowdry. Ladies-only, premium products. See style, pick slot, confirm on WhatsApp in 30 seconds.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    ],
    featured: true,
    includes: ["Consult", "Wash + massage", "Precision cut", "Blowdry + finish"],
  },
  {
    slug: "gel-manicure",
    name: "Gel Manicure",
    category: "nails",
    price: "AED 90",
    duration: "60 min",
    desc: "Long-lasting glossy gel, cuticle care",
    longDesc: "Chip-resistant gel with cuticle cleanup, shaping, and glossy top coat. 3-week wear, premium gel. Pick a color on WhatsApp after booking.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519012866027-1024abc1b9b4?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=600&q=80&auto=format&fit=crop",
    ],
    includes: ["Shape + cuticle", "Gel application", "Top coat", "Oil finish"],
  },
  {
    slug: "moroccan-bath",
    name: "Moroccan Bath",
    category: "spa",
    price: "AED 250",
    duration: "90 min",
    desc: "Deep cleanse & glow — hammam ritual",
    longDesc: "Traditional hammam deep cleanse with black soap, kessa exfoliation, rhassoul mask, and argan oil. Ladies-only hammam suite, private. Glow that lasts a week.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03edfa7bb?w=600&q=80&auto=format&fit=crop",
    ],
    includes: ["Black soap steam", "Kessa exfoliation", "Rhassoul mask", "Argan oil"],
  },
  {
    slug: "balayage",
    name: "Balayage",
    category: "hair",
    price: "AED 600",
    duration: "150 min",
    desc: "Hand-painted light, toner + blowout",
    longDesc: "Hand-painted balayage for natural, low-maintenance light. Includes toner, gloss, and blowout. Free 10-day toner refresh. Consult on WhatsApp first.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&q=80&auto=format&fit=crop",
    ],
    featured: true,
    includes: ["Consult", "Hand-painted light", "Toner + gloss", "Blowout"],
  },
  {
    slug: "keratin-smooth",
    name: "Keratin Smooth",
    category: "hair",
    price: "AED 600",
    duration: "180 min",
    desc: "3-month smooth, frizz-free",
    longDesc: "Keratin smoothing for 3-month frizz control. Humidity-proof, Dubai tested. Includes aftercare kit and WhatsApp check-in at 7 days.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560869713-b37aaf320f2a?w=600&q=80&auto=format&fit=crop",
    ],
    includes: ["Wash", "Keratin application", "Straightening", "Aftercare kit"],
  },
  {
    slug: "bridal-trial",
    name: "Bridal Trial",
    category: "bridal",
    price: "AED 400",
    duration: "120 min",
    desc: "Trial + consult, wedding ready",
    longDesc: "Bridal hair + makeup trial with consult. Bring your veil and inspo. Save look, share with WhatsApp group for feedback.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop",
    ],
    includes: ["Consult", "Hair trial", "Makeup trial", "Photos for day-of"],
  },
];

export const stylists: Stylist[] = [
  {
    id: "layla",
    name: "Layla",
    role: "Senior Stylist • 8 yrs",
    bio: "Dubai Marina favorite for precision cuts and balayage. Trained in Beirut, 8 yrs with Noura. Ladies-only calm, fast consultation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
    specialties: ["haircut-blowdry", "balayage"],
    rating: 4.9,
    reviews: 142,
    instagram: "@layla.noura",
  },
  {
    id: "sara",
    name: "Sara",
    role: "Nail Artist • Gel expert",
    bio: "Gel art that lasts 3 weeks. Minimal, glossy, Dubai heat-proof. Book with Sara for nail art that gets DM compliments.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
    specialties: ["gel-manicure"],
    rating: 4.9,
    reviews: 118,
    instagram: "@sara.nails.dxb",
  },
  {
    id: "mona",
    name: "Mona",
    role: "Bridal Specialist",
    bio: "Bridal hair + makeup, trial to wedding day. Calm under pressure, on-time always. 90 weddings and counting.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
    specialties: ["bridal-trial", "balayage"],
    rating: 5.0,
    reviews: 96,
    instagram: "@mona.bridal.dxb",
  },
  {
    id: "huda",
    name: "Huda",
    role: "Spa Therapist • Hammam",
    bio: "Moroccan bath ritual expert. Hammam suite, private, ladies-only. Book hammam with Huda for glow that lasts.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
    specialties: ["moroccan-bath"],
    rating: 4.9,
    reviews: 84,
    instagram: "@huda.hammam",
  },
  {
    id: "nour",
    name: "Nour",
    role: "Stylist • Keratin",
    bio: "Keratin smooth and frizz control. Humidity-proof Dubai hair. Aftercare check-in at 7 days.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80&auto=format&fit=crop",
    specialties: ["keratin-smooth", "haircut-blowdry"],
    rating: 4.9,
    reviews: 77,
    instagram: "@nour.keratin",
  },
  {
    id: "zara",
    name: "Zara",
    role: "Brows & Lash • Lift",
    bio: "Brows & lash lift, natural lift no tint. 45 min, gentle. Pairs well with bridal trial.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80&auto=format&fit=crop",
    specialties: ["gel-manicure", "bridal-trial"],
    rating: 4.8,
    reviews: 62,
    instagram: "@zara.brows",
  },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03edfa7bb?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
];

export const reviews: Review[] = [
  { id: "1", author: "Aisha • Google", serviceSlug: "haircut-blowdry", rating: 5, text: "Booked at 11pm, got 9am slot. Layla’s cut is flawless every time.", date: "2026-07-12" },
  { id: "2", author: "Fatima • Instagram", serviceSlug: "moroccan-bath", rating: 5, text: "Moroccan bath was heaven. Prices clear, no surprise. Will book again.", date: "2026-07-10" },
  { id: "3", author: "Noor • Repeat", serviceSlug: "gel-manicure", rating: 5, text: "WhatsApp booking in 20 seconds. Ladies-only calm, premium care.", date: "2026-07-08" },
  { id: "4", author: "Mariam • Google", serviceSlug: "balayage", rating: 5, text: "Balayage color is natural, grow-out is soft. Layla nailed it.", date: "2026-07-01" },
  { id: "5", author: "Sara • Bride", serviceSlug: "bridal-trial", rating: 5, text: "Mona made me calm. Trial was perfect, wedding day on time.", date: "2026-06-28" },
  { id: "6", author: "Huda • Review", serviceSlug: "keratin-smooth", rating: 5, text: "Keratin lasted 3 months, Dubai humidity no frizz.", date: "2026-06-20" },
  { id: "7", author: "Lina • Google", serviceSlug: "haircut-blowdry", rating: 5, text: "After-hours booking for busy Dubai women — exactly what I needed.", date: "2026-06-18" },
  { id: "8", author: "Yasmin • Instagram", serviceSlug: "gel-manicure", rating: 5, text: "Gel lasted 3 weeks, glossy. Sara is an artist.", date: "2026-06-15" },
  { id: "9", author: "Noura • Regular", serviceSlug: "moroccan-bath", rating: 5, text: "Huda’s hammam glow lasts a week. Book it.", date: "2026-06-10" },
  { id: "10", author: "Reem • Bride", serviceSlug: "bridal-trial", rating: 5, text: "Photos from trial saved us on wedding day. Flawless.", date: "2026-06-05" },
  { id: "11", author: "Dina • Google", serviceSlug: "balayage", rating: 5, text: "No pushy upsell, toner was included. Honest pricing.", date: "2026-06-01" },
  { id: "12", author: "Salma • Review", serviceSlug: "keratin-smooth", rating: 5, text: "Nour checked in at 7 days, sweet. Hair is smooth.", date: "2026-05-28" },
  { id: "13", author: "Alya • Google", serviceSlug: "haircut-blowdry", rating: 5, text: "45 min and done. Wash + cut + blowdry = AED 120 fair.", date: "2026-05-22" },
  { id: "14", author: "Hanan • Instagram", serviceSlug: "gel-manicure", rating: 5, text: "Cuticle care is detailed, no pain.", date: "2026-05-18" },
  { id: "15", author: "Khadija • Google", serviceSlug: "moroccan-bath", rating: 5, text: "Ladies-only, premium, private hammam. Love it.", date: "2026-05-12" },
  { id: "16", author: "Mona • Review", serviceSlug: "bridal-trial", rating: 5, text: "Veil + inspo photos, Mona got it first try.", date: "2026-05-08" },
  { id: "17", author: "Zahra • Google", serviceSlug: "balayage", rating: 5, text: "Color grew out soft, no harsh line.", date: "2026-05-02" },
  { id: "18", author: "Amira • Review", serviceSlug: "keratin-smooth", rating: 5, text: "180 min well spent, 3 months smooth.", date: "2026-04-28" },
  { id: "19", author: "Leen • Google", serviceSlug: "haircut-blowdry", rating: 5, text: "Pay at store, free reschedule — no commission.", date: "2026-04-20" },
  { id: "20", author: "Rana • Instagram", serviceSlug: "gel-manicure", rating: 5, text: "Oil finish, glossy. 3 weeks later still good.", date: "2026-04-15" },
  { id: "21", author: "Samira • Review", serviceSlug: "moroccan-bath", rating: 5, text: "Black soap + kessa, skin is baby.", date: "2026-04-10" },
  { id: "22", author: "Nada • Bride", serviceSlug: "bridal-trial", rating: 5, text: "120 min well used, saved look on phone.", date: "2026-04-05" },
  { id: "23", author: "Farah • Google", serviceSlug: "balayage", rating: 5, text: "Hand-painted light, not foil. Natural.", date: "2026-04-01" },
  { id: "24", author: "Ola • Review", serviceSlug: "keratin-smooth", rating: 5, text: "Aftercare kit included, clear instructions.", date: "2026-03-28" },
];

export const posts: Post[] = [
  {
    slug: "summer-hair-humidity",
    title: "Summer Hair Care in Dubai Humidity",
    excerpt: "Why keratin vs wash routine matters at 45°C and 80% humidity. Noura’s 3-step plan.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    date: "2026-07-15",
    content: "Dubai humidity is 80% at 45°C. Noura’s routine: wash 2x/week, air-dry 70%, keratin if you fight frizz daily. Pay at store, free reschedule if humidity wins. Book after-hours on WhatsApp.",
  },
  {
    slug: "balayage-vs-foil",
    title: "Balayage vs Foil: Which Light Is Yours?",
    excerpt: "Hand-painted soft grow-out vs foil bright lift. Pick by maintenance, not just photos.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
    date: "2026-06-20",
    content: "Balayage grows soft, foil lifts brighter. If you stretch 12 weeks, choose balayage. If you want max lift, choose foil. Layla consults on WhatsApp first.",
  },
  {
    slug: "bridal-trial-timeline",
    title: "Bridal Trial Timeline: 90 Days to Wedding",
    excerpt: "When to trial, when to cut color, when to save look. Mona’s checklist.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&auto=format&fit=crop",
    date: "2026-05-10",
    content: "Day 90: trial. Day 30: final cut/color. Day 7: blowout trial. Day 0: on time. Bring veil. Save photos. Confirm on WhatsApp group.",
  },
];

export const faqs: FAQ[] = [
  { q: "Reschedule free?", a: "Yes. WhatsApp us anytime before your slot — free reschedule, no fee. Pay at store, no pre-pay." },
  { q: "Ladies-only?", a: "Yes. Noura is ladies-only, premium care. Male staff only for maintenance, not visible." },
  { q: "Pay at store?", a: "Yes. No commission, no pre-pay. AED cash or card at Marina Walk. Free validation parking." },
  { q: "Bring kids?", a: "Small kids welcome before 4pm with supervision. Hammam is adults only." },
  { q: "Hammam private?", a: "Yes. Private hammam suite with Huda, ladies-only. Book 90 min, bring no products — we provide black soap." },
  { q: "Balayage maintenance?", a: "12 weeks soft grow-out. Toner included, free refresh at 10 days via WhatsApp." },
  { q: "Bridal group booking?", a: "Yes. Mona handles bridal parties — trial then day-of. Group of 4+ gets 10% off. WhatsApp to plan." },
  { q: "After-hours booking?", a: "Yes. Book at 11pm for 9am slot. WhatsApp in 30s, we confirm. 3 slots left today shown on hero." },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function getStylist(id: string) {
  return stylists.find((s) => s.id === id);
}
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
