export type Service = {
  slug: string;
  name: string;
  price: string;
  duration: string;
  desc: string;
  longDesc: string;
  image: string;
  steps: string[];
  faqs: { q: string; a: string }[];
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
  focus: string[];
};

export type Review = { id: string; author: string; serviceSlug: string; rating: number; text: string; date: string };
export type Post = { slug: string; title: string; excerpt: string; image: string; date: string; content: string };

export const services: Service[] = [
  { slug:"gp-visit", name:"GP Visit", price:"€45", duration:"20 min", desc:"German + expat", longDesc:"German + expat GP, 20 min, thorough, no rush. GDPR safe, no data stored.", image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop", steps:["Talk","Check","Plan"], faqs:[{q:"English?",a:"Yes, EN + DE + AR"}] },
  { slug:"dental-check", name:"Dental Check", price:"€35", duration:"20 min", desc:"Check, no upsell", longDesc:"Dental check, plain advice, no upsell. Mitte, GDPR.", image:"https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80&auto=format&fit=crop", steps:["Check","Advice"], faqs:[{q:"Upsell?",a:"No, plain."}] },
  { slug:"pediatric", name:"Pediatric", price:"€50", duration:"25 min", desc:"Kids", longDesc:"Pediatric, gentle. Mitte, U6, GDPR safe.", image:"https://images.unsplash.com/photo-1594824475545-9d84e24786e2?w=800&q=80&auto=format&fit=crop", steps:["Play","Check","Advice"], faqs:[{q:"Age?",a:"From newborn"}] },
  { slug:"lab-tests", name:"Lab Tests", price:"€60", duration:"Same day", desc:"Same day", longDesc:"Lab tests same day via WhatsApp. Mitte lab, GDPR.", image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop", steps:["Draw","Lab","WhatsApp result"], faqs:[{q:"Result?",a:"Same day"}] },
  { slug:"vaccination", name:"Vaccination", price:"€30", duration:"10 min", desc:"Schedule", longDesc:"Vaccination schedule 2026, GDPR, no app.", image:"https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&q=80&auto=format&fit=crop", steps:["Check","Vax","Card"], faqs:[{q:"Card?",a:"Digital"}] },
  { slug:"wellness", name:"Wellness", price:"€120", duration:"45 min", desc:"Holistic", longDesc:"Wellness holistic, calm. Berlin Mitte.", image:"https://images.unsplash.com/photo-1540206395-68808572332f?w=800&q=80&auto=format&fit=crop", steps:["Talk","Check","Plan"], faqs:[{q:"Holistic?",a:"Yes"}] },
];

export const doctors: Doctor[] = [
  { id:"mueller", name:"Dr. Müller", role:"GP", creds:"Mitte 10 yrs", bio:"GP Mitte 10 yrs, German + expat, thorough, no rush.", image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop", rating:4.9, languages:["DE","EN"], focus:["gp-visit","wellness"] },
  { id:"fatima", name:"Dr. Fatima", role:"Dental", creds:"Dental", bio:"Dental, no upsell, plain.", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", rating:4.9, languages:["EN","AR","DE"], focus:["dental-check"] },
  { id:"jonas", name:"Dr. Jonas", role:"Pediatric", creds:"Pediatric", bio:"Pediatric, gentle.", image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop", rating:5.0, languages:["DE","EN"], focus:["pediatric"] },
  { id:"sophie", name:"Dr. Sophie", role:"Lab", creds:"Lab", bio:"Lab, same day WhatsApp.", image:"https://images.unsplash.com/photo-1594824475545-9d84e24786e2?w=400&q=80&auto=format&fit=crop", rating:4.8, languages:["DE","EN"], focus:["lab-tests","vaccination"] },
  { id:"ahmed", name:"Dr. Ahmed", role:"Wellness", creds:"Mitte", bio:"Wellness, holistic calm.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", rating:4.8, languages:["EN","AR","DE"], focus:["wellness","gp-visit"] },
];

export const reviews: Review[] = [
  { id:"1", author:"Paul • Expat", serviceSlug:"gp-visit", rating:5, text:"Dr. Müller thorough, no rush. Berlin care, calm.", date:"2026-07-10" },
  { id:"2", author:"Lena • Lab", serviceSlug:"lab-tests", rating:5, text:"Lab results same day via WhatsApp. Easy.", date:"2026-07-08" },
  { id:"3", author:"Family • Mitte", serviceSlug:"pediatric", rating:5, text:"Family doctor for 3 years — trust.", date:"2026-07-05" },
  { id:"4", author:"Kai • GP", serviceSlug:"gp-visit", rating:5, text:"German + EN perfect, GDPR safe.", date:"2026-07-01" },
];

export const posts: Post[] = [
  { slug:"expat-labs", title:"Expat Guide to German Labs", excerpt:"Same day, WhatsApp result, GDPR.", image:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"German labs: draw, lab, WhatsApp same day. GDPR safe, Mitte U6." },
  { slug:"vax-2026", title:"Vaccination Schedule 2026", excerpt:"Schedule, card, no app.", image:"https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"Vax schedule 2026, digital card, Mitte." },
  { slug:"no-data-booking", title:"No-Data Booking", excerpt:"WhatsApp, no storage, GDPR.", image:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop", date:"2026-06-10", content:"No data stored, WhatsApp only, GDPR safe. Book calm." },
];

export const faqs = [
  { q:"GDPR safe?", a:"Yes. No data stored, WhatsApp only. Mitte GDPR." },
  { q:"English?", a:"Yes. DE + EN + AR. Tell at booking." },
  { q:"Same day lab?", a:"Yes. Lab via WhatsApp same day." },
  { q:"U6 Mitte?", a:"Yes, U6 Mitte, 10 yrs." },
];

export function getService(slug:string){return services.find(s=>s.slug===slug);}
export function getDoctor(id:string){return doctors.find(d=>d.id===id);}
export function getPost(slug:string){return posts.find(p=>p.slug===slug);}
