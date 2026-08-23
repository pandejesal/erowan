export type Treatment = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  desc: string;
  longDesc: string;
  image: string;
  steps: string[];
  faqs: { q: string; a: string }[];
  priceRange: string;
};

export type Doctor = {
  id: string;
  name: string;
  role: string;
  creds: string;
  bio: string;
  image: string;
  rating: number;
  languages: string[];
  treatments: string[];
  instagram?: string;
};

export type Review = { id: string; author: string; treatmentSlug: string; rating: number; text: string; date: string };
export type Post = { slug: string; title: string; excerpt: string; image: string; date: string; content: string };
export type FAQ = { q: string; a: string };

export const treatments: Treatment[] = [
  {
    slug: "implant",
    name: "Dental Implant",
    price: "AED 2,800",
    duration: "90 min",
    desc: "Titanium, painless, guide",
    longDesc: "DHA-licensed implant with guided surgery, 3D scan, titanium fixture, temporary crown. Trust before the chair — consent photos, no false promise.",
    image: "https://images.unsplash.com/photo-1606811841688-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
    steps: ["3D Scan + plan", "Guided placement", "Temp crown + follow-up"],
    faqs: [{ q: "Pain?", a: "Local anesthesia, painless. Most say pressure only." }, { q: "Heal time?", a: "7 days soft, 3 months osseointegration." }],
    priceRange: "AED 2,800–4,200",
  },
  {
    slug: "braces",
    name: "Braces",
    price: "AED 6,500",
    duration: "12–18 mo",
    desc: "Metal / ceramic, monthly",
    longDesc: "DHA orthodontist, metal or ceramic, monthly adjustment included. Before/after with consent only. Teen and adult.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop",
    steps: ["Records + plan", "Bonding", "Monthly adjustment"],
    faqs: [{ q: "Age 30?", a: "Yes, adult braces common. Aligners also." }],
    priceRange: "AED 6,500–9,000",
  },
  {
    slug: "whitening",
    name: "Whitening",
    price: "AED 600",
    duration: "45 min",
    desc: "One visit, shade lift",
    longDesc: "One-visit whitening, shade guide, sensitivity protocol. DHCC quality, WhatsApp ease.",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80&auto=format&fit=crop",
    steps: ["Shade check", "Protect gums", "Whiten 45m"],
    faqs: [{ q: "Sensitive?", a: "Desensitizer included, mild." }],
    priceRange: "AED 600–900",
  },
  {
    slug: "pediatric",
    name: "Pediatric",
    price: "AED 200",
    duration: "30 min",
    desc: "Kids gentle, no tears",
    longDesc: "Kids love Dr. Sara — gentle, calm, no tears. Pediatric, DHA licensed, play corner.",
    image: "https://images.unsplash.com/photo-1594824475545-9d84e24786e2?w=800&q=80&auto=format&fit=crop",
    steps: ["Play + intro", "Check", "Fluoride"],
    faqs: [{ q: "Age?", a: "From 3 yrs, with parent." }],
    priceRange: "AED 200–350",
  },
  {
    slug: "root-canal",
    name: "Root Canal",
    price: "AED 1,200",
    duration: "60 min",
    desc: "Save tooth, no pain",
    longDesc: "Save tooth, rotary endo, rubber dam, crown after. DHA licensed, consent, insurance.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop",
    steps: ["X-ray", "Clean", "Fill + crown prep"],
    faqs: [{ q: "Pain?", a: "Anesthesia, pressure only." }],
    priceRange: "AED 1,200–1,800",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    price: "AED 250",
    duration: "30 min",
    desc: "Scale + polish",
    longDesc: "Scale + polish, 30 min, fresh. DHA, plain advice, no upsell.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop",
    steps: ["Scale", "Polish", "Advice"],
    faqs: [{ q: "How often?", a: "Every 6 months." }],
    priceRange: "AED 250–350",
  },
];

export const doctors: Doctor[] = [
  { id: "aisha-khan", name: "Dr. Aisha Khan", role: "Orthodontist", creds: "DHA • DHCC 12 yrs", bio: "Orthodontist, DHA 12 yrs DHCC. Braces & aligners, before/after with consent.", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop", rating: 4.9, languages: ["EN","AR","HI"], treatments: ["braces","whitening"], instagram: "@aisha.smile" },
  { id: "omar-farooq", name: "Dr. Omar Farooq", role: "Implantologist", creds: "DHA • Implant", bio: "Implantologist, guided surgery, titanium. DHCC implant team lead.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop", rating: 4.9, languages: ["EN","AR"], treatments: ["implant","root-canal"], instagram: "@omar.implant" },
  { id: "sara-lee", name: "Dr. Sara Lee", role: "Pediatric", creds: "DHA • Pediatric", bio: "Kids love Dr. Sara — gentle, calm, no tears. Pediatric elective.", image: "https://images.unsplash.com/photo-1594824475545-9d84e24786e2?w=400&q=80&auto=format&fit=crop", rating: 5.0, languages: ["EN"], treatments: ["pediatric","cleaning"], instagram: "@sara.peds" },
  { id: "huda-ali", name: "Dr. Huda Ali", role: "General Dentist", creds: "DHA • DHCC", bio: "General, cleaning + whitening, hygiene. Insurance: Daman, AXA.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", rating: 4.9, languages: ["EN","AR"], treatments: ["cleaning","whitening"], instagram: "@huda.smile" },
  { id: "karim-youssef", name: "Dr. Karim Youssef", role: "Endodontist", creds: "DHA • Endo", bio: "Endodontist, root canal, save tooth. Rotary, rubber dam.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", rating: 4.9, languages: ["EN","AR","FR"], treatments: ["root-canal","implant"], instagram: "@karim.endo" },
];

export const reviews: Review[] = [
  { id:"1", author:"Mariam • Google", treatmentSlug:"implant", rating:5, text:"Implant was painless, team explained every step. Trust earned.", date:"2026-07-12" },
  { id:"2", author:"Kids mom", treatmentSlug:"pediatric", rating:5, text:"Kids love Dr. Sara — gentle, calm, no tears.", date:"2026-07-10" },
  { id:"3", author:"Salma • Google", treatmentSlug:"whitening", rating:5, text:"Whitening results in one visit. DHCC quality, WhatsApp ease.", date:"2026-07-08" },
  { id:"4", author:"Omar • Google", treatmentSlug:"braces", rating:5, text:"Braces at 30, no shame. Aisha is great.", date:"2026-07-05" },
  { id:"5", author:"Huda • Review", treatmentSlug:"root-canal", rating:5, text:"Root canal no pain, saved tooth.", date:"2026-07-01" },
  { id:"6", author:"Lina • Google", treatmentSlug:"cleaning", rating:5, text:"Cleaning 30 min, fresh, no upsell.", date:"2026-06-28" },
  { id:"7", author:"Fadi • Implant", treatmentSlug:"implant", rating:5, text:"Guided implant, temp crown same day.", date:"2026-06-22" },
  { id:"8", author:"Sara • Mom", treatmentSlug:"pediatric", rating:5, text:"Play corner, kid calm.", date:"2026-06-18" },
  { id:"9", author:"Nora • Whitening", treatmentSlug:"whitening", rating:5, text:"Shade lift 4, sensitivity mild.", date:"2026-06-15" },
  { id:"10", author:"Ali • Braces", treatmentSlug:"braces", rating:5, text:"Ceramic braces, monthly easy.", date:"2026-06-10" },
  { id:"11", author:"Rana • Endo", treatmentSlug:"root-canal", rating:5, text:"Karim saved tooth, crown perfect.", date:"2026-06-05" },
  { id:"12", author:"Dina • Cleaning", treatmentSlug:"cleaning", rating:5, text:"Scale + polish fresh.", date:"2026-06-01" },
];

export const posts: Post[] = [
  { slug:"implant-aftercare-heat", title:"Implant Aftercare in Dubai Heat", excerpt:"Soft diet 7 days, avoid heat 48h.", image:"https://images.unsplash.com/photo-1606811841688-23dfddce3e95?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"Dubai heat: avoid sauna 48h, soft diet 7 days, WhatsApp check-in. DHCC." },
  { slug:"braces-at-30", title:"Braces at 30: Adult Guide", excerpt:"No shame, aligners vs braces.", image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"Adult braces at 30: Aisha explains metal vs ceramic vs aligners. Before/after with consent." },
  { slug:"why-dhcc", title:"Why DHCC Accreditation Matters", excerpt:"12 yrs DHCC, sterilization, insurance.", image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop", date:"2026-05-20", content:"DHCC 12 yrs: sterilization, DHA licensed, insurance Daman/AXA, 8k+ smiles." },
];

export const faqs: FAQ[] = [
  { q:"DHA licensed?", a:"Yes. All doctors DHA licensed, DHCC 12 yrs. Ask for license at desk." },
  { q:"Insurance?", a:"Daman, AXA, MedNet, NextCare, Saada, Oman. WhatsApp card for pre-check." },
  { q:"Pain?", a:"Local anesthesia, painless. Pressure only. Consent photos." },
  { q:"Before/after consent?", a:"Yes. Published only with written consent. View with consent click." },
  { q:"Reschedule free?", a:"Yes. WhatsApp before slot — free." },
  { q:"Kids?", a:"Yes, Dr. Sara pediatric, play corner, from 3 yrs." },
  { q:"Parking?", a:"DHCC parking validated, metro near." },
  { q:"WhatsApp booking?", a:"Yes, 30s. No app, pay after." },
];

export function getTreatment(slug:string){return treatments.find(t=>t.slug===slug);}
export function getDoctor(id:string){return doctors.find(d=>d.id===id);}
export function getPost(slug:string){return posts.find(p=>p.slug===slug);}
