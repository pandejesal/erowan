export type Service = {
  slug: string;
  name: string;
  category: "massage" | "facial" | "nails" | "hair" | "bridal";
  price: string;
  duration: string;
  desc: string;
  longDesc: string;
  image: string;
  benefits: string[];
  aftercare: string[];
  featured?: boolean;
};

export type Therapist = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  languages: string[];
  image: string;
  rating: number;
  reviews: number;
  instagram: string;
};

export type Review = { id: string; author: string; serviceSlug: string; rating: number; text: string; date: string };
export type Post = { slug: string; title: string; excerpt: string; image: string; date: string; content: string };
export type FAQ = { q: string; a: string };

export const services: Service[] = [
  {
    slug: "aroma-massage",
    name: "Aroma Massage 60m",
    category: "massage",
    price: "$85",
    duration: "60 min",
    desc: "Hot oils, calm — most booked",
    longDesc: "Hot oil aroma massage for calm. SoHo calm, 60 min of quiet. Choose lavender or eucalyptus scent at booking.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
    benefits: ["Stress down", "Sleep better", "Neck release"],
    aftercare: ["Water", "Warm shower after 2h", "Stretch"],
    featured: true,
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "facial",
    price: "$120",
    duration: "75 min",
    desc: "Deep hydration, glow",
    longDesc: "Hydra facial for deep hydration and glow. 75 min, gentle extraction, serum. SoHo skin, year-round.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03edfa7bb?w=800&q=80&auto=format&fit=crop",
    benefits: ["Glow", "Hydration", "Pore clarity"],
    aftercare: ["No makeup 12h", "SPF daily", "Hydrate"],
  },
  {
    slug: "wax-full-body",
    name: "Wax Full Body",
    category: "nails",
    price: "$70",
    duration: "60 min",
    desc: "Gentle, clean",
    longDesc: "Gentle full-body wax, clean. 60 min, premium wax, calm SoHo room. English + Spanish.",
    image: "https://images.unsplash.com/photo-1634449571010-02389ed0f357?w=800&q=80&auto=format&fit=crop",
    benefits: ["Smooth 3 weeks", "Gentle", "Clean"],
    aftercare: ["No heat 24h", "Exfoliate day 3", "Moisturize"],
  },
  {
    slug: "nail-art",
    name: "Nail Art",
    category: "nails",
    price: "$40",
    duration: "45 min",
    desc: "Gel, design",
    longDesc: "Gel nail art, design you keep. 45 min, SoHo artists, photo-worthy. Book at midnight.",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80&auto=format&fit=crop",
    benefits: ["2-week wear", "Design", "Quick"],
    aftercare: ["Oil cuticle", "No picking", "Gloves for dishes"],
  },
  {
    slug: "hair-spa",
    name: "Hair Spa",
    category: "hair",
    price: "$65",
    duration: "60 min",
    desc: "Repair & shine",
    longDesc: "Hair spa repair & shine, 60 min. Repair, mask, shine. SoHo calm, English + Spanish.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    benefits: ["Repair", "Shine", "Calm"],
    aftercare: ["No wash 24h", "Sulfate-free", "Oil weekly"],
  },
  {
    slug: "bridal-package",
    name: "Bridal Package",
    category: "bridal",
    price: "$400",
    duration: "180 min",
    desc: "Trial + day",
    longDesc: "Bridal trial + day, 180 min. Save look, SoHo garden photos. For NYC brides, trial at garden.",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&auto=format&fit=crop",
    benefits: ["Trial included", "Photos", "Calm bride"],
    aftercare: ["Save look", "Touch-up kit", "WhatsApp group"],
  },
];

export const therapists: Therapist[] = [
  { id: "maya", name: "Maya", specialty: "Aroma • 6 yrs", bio: "Aroma calm, SoHo 6 yrs. Lavender or eucalyptus, your pick.", languages: ["EN","ES"], image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop", rating: 4.9, reviews: 92, instagram: "@maya.bloom" },
  { id: "sofia", name: "Sofia", specialty: "Facial • Hydra", bio: "Hydra glow, gentle extraction. SoHo skin, year-round hydration.", languages: ["EN","ES"], image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", rating: 4.9, reviews: 78, instagram: "@sofia.bloom" },
  { id: "lina", name: "Lina", specialty: "Wax • Gentle", bio: "Gentle wax, premium, clean. 60 min calm room.", languages: ["EN"], image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop", rating: 4.8, reviews: 64, instagram: "@lina.bloom" },
  { id: "zara", name: "Zara", specialty: "Nails • Art", bio: "Nail art that gets DMs. Gel, design, SoHo artists.", languages: ["EN","ES"], image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80&auto=format&fit=crop", rating: 4.9, reviews: 88, instagram: "@zara.bloom" },
  { id: "nina", name: "Nina", specialty: "Hair • Spa", bio: "Hair spa repair, shine. 60 min calm, English + Spanish.", languages: ["EN","ES"], image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop", rating: 4.8, reviews: 52, instagram: "@nina.bloom" },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570172619644-dfd03edfa7bb?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519012866027-1024abc1b9b4?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
];

export const reviews: Review[] = [
  { id: "1", author: "Jess • Google", serviceSlug: "aroma-massage", rating: 5, text: "Bloom is my reset — booked at midnight, 10am slot.", date: "2026-07-10" },
  { id: "2", author: "Ana • Instagram", serviceSlug: "nail-art", rating: 5, text: "Nail art is art. Prices clear, no surprise.", date: "2026-07-08" },
  { id: "3", author: "Megan • Repeat", serviceSlug: "hydra-facial", rating: 5, text: "SoHo calm, premium care, 48h site is legit.", date: "2026-07-05" },
  { id: "4", author: "Carla • ES", serviceSlug: "wax-full-body", rating: 5, text: "Gentle, clean, ES + EN perfect.", date: "2026-07-01" },
  { id: "5", author: "Rosa • Bride", serviceSlug: "bridal-package", rating: 5, text: "Garden photos were magic, trial saved us.", date: "2026-06-28" },
  { id: "6", author: "Kim • Google", serviceSlug: "hair-spa", rating: 5, text: "Hair spa shine lasted a week.", date: "2026-06-20" },
  { id: "7", author: "Sue • Google", serviceSlug: "aroma-massage", rating: 5, text: "Hot oils, calm 60 min — sleep better.", date: "2026-06-18" },
  { id: "8", author: "Lia • Instagram", serviceSlug: "hydra-facial", rating: 5, text: "Glow is real, no makeup needed next day.", date: "2026-06-15" },
  { id: "9", author: "Nina • Review", serviceSlug: "wax-full-body", rating: 5, text: "60 min gentle, clean SoHo room.", date: "2026-06-10" },
  { id: "10", author: "Dana • Google", serviceSlug: "nail-art", rating: 5, text: "Gel 2 weeks, design still.", date: "2026-06-05" },
  { id: "11", author: "Eva • Google", serviceSlug: "bridal-package", rating: 5, text: "$400 well spent, trial + day.", date: "2026-06-01" },
  { id: "12", author: "Tara • Review", serviceSlug: "hair-spa", rating: 5, text: "Repair & shine, calm.", date: "2026-05-28" },
  { id: "13", author: "Mia • Google", serviceSlug: "aroma-massage", rating: 5, text: "Choose lavender or eucalyptus, nice touch.", date: "2026-05-22" },
  { id: "14", author: "Bea • Review", serviceSlug: "hydra-facial", rating: 5, text: "Deep hydration, SoHo skin approved.", date: "2026-05-18" },
  { id: "15", author: "Lea • Google", serviceSlug: "nail-art", rating: 5, text: "SoHo artists, photo-worthy nails.", date: "2026-05-12" },
  { id: "16", author: "Gina • Review", serviceSlug: "aroma-massage", rating: 5, text: "60 min quiet, English + Spanish perfect.", date: "2026-05-08" },
  { id: "17", author: "Iris • Google", serviceSlug: "bridal-package", rating: 5, text: "180 min, photos, calm bride.", date: "2026-05-02" },
  { id: "18", author: "Ola • Review", serviceSlug: "hair-spa", rating: 5, text: "Repair weekly, shine daily.", date: "2026-04-28" },
];

export const posts: Post[] = [
  { slug: "soho-calm-why", title: "Why SoHo Calm Works", excerpt: "Calm is design: light, scent, quiet. Bloom’s ritual, not just service.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80&auto=format&fit=crop", date: "2026-07-01", content: "Calm is light at 3000K, scent lavender, quiet 38dB. SoHo calm is design, not decoration. Book at midnight, 10am slot." },
  { slug: "aroma-vs-deep", title: "Aroma vs Deep Tissue: Pick Your Calm", excerpt: "Hot oils flow vs deep pressure. Pick by next-day feel.", image: "https://images.unsplash.com/photo-1570172619644-dfd03edfa7bb?w=800&q=80&auto=format&fit=crop", date: "2026-06-15", content: "Aroma flows, deep presses. If you want sleep, pick aroma. If you want knots out, pick deep. Maya consults on WhatsApp." },
  { slug: "bridal-nyc-garden", title: "Bridal Prep in NYC Garden", excerpt: "Trial in SoHo garden, photos, calm. For NYC brides.", image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80&auto=format&fit=crop", date: "2026-05-20", content: "Trial at garden, photos at golden hour. 180 min trial + day. Save look in WhatsApp group." },
];

export const faqs: FAQ[] = [
  { q: "English + Spanish?", a: "Yes. SoHo bilingual — English + Spanish therapists. Tell us at booking." },
  { q: "Reschedule free?", a: "Yes. WhatsApp before slot — free reschedule, no fee." },
  { q: "Garden photos?", a: "Yes. SoHo garden for bridal trial photos at golden hour, included." },
  { q: "Scent pick?", a: "Yes. Lavender or eucalyptus at booking, changes room tint subtly." },
  { q: "Pay at shop?", a: "Yes. No pre-pay, $ at SoHo. Cash or card." },
  { q: "Nail art 2 weeks?", a: "Gel 2 weeks glossy, oil cuticle, no picking." },
  { q: "Bridal trial when?", a: "30 days before wedding, 180 min, trial + day. Save look." },
  { q: "After-hours booking?", a: "Yes. Book at midnight for 10am. WhatsApp 30s." },
];

export function getService(slug: string) { return services.find((s) => s.slug === slug); }
export function getTherapist(id: string) { return therapists.find((t) => t.id === id); }
export function getPost(slug: string) { return posts.find((p) => p.slug === slug); }
