export type Listing = {
  id: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  sqft: string;
  image: string;
  gallery: string[];
  desc: string;
  longDesc: string;
  agentId: string;
  areaSlug: string;
  offplan?: boolean;
  features: string[];
};

export type Agent = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone: string;
  listings: string[];
  languages: string[];
};

export type Area = { slug: string; name: string; desc: string; avgPrice: string; image: string };

export const agents: Agent[] = [
  { id:"sara", name:"Sara Al-Mansoori", role:"Senior Agent • RERA", bio:"RERA licensed, Dubai Hills specialist, 300+ units sold, EN+AR.", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", phone:"+971501234567", listings:["dubai-hills-1br","creek-2br"], languages:["EN","AR"] },
  { id:"ahmed", name:"Ahmed Khalid", role:"Off-plan • DAMAC", bio:"DAMAC off-plan, Tilal, investment.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", phone:"+971501111222", listings:["damac-villa","tilal-offplan"], languages:["EN","AR"] },
  { id:"noura", name:"Noura Hassan", role:"JVC • Studio", bio:"JVC studio expert, first-buyer.", image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop", phone:"+971502223333", listings:["jvc-studio","marina-penthouse"], languages:["EN","RU"] },
  { id:"khalid", name:"Khalid R.", role:"Luxury • Marina", bio:"Marina penthouse, luxury.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", phone:"+971504445555", listings:["marina-penthouse"], languages:["EN","AR"] },
];

export const areas: Area[] = [
  { slug:"dubai-hills", name:"Dubai Hills", desc:"Family villas, RERA, parks.", avgPrice:"AED 1.8M", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop" },
  { slug:"creek-harbour", name:"Creek Harbour", desc:"Harbour, 2BR investment.", avgPrice:"AED 1.6M", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop" },
  { slug:"damac", name:"DAMAC Hills", desc:"Golf villas, DAMAC.", avgPrice:"AED 2.9M", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop" },
  { slug:"jvc", name:"JVC", desc:"Studio, young buyers.", avgPrice:"AED 600K", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80&auto=format&fit=crop" },
];

export const listings: Listing[] = [
  { id:"dubai-hills-1br", title:"1BR — Dubai Hills", price:"AED 1.1M", beds:1, baths:1, area:"Dubai Hills", sqft:"750", image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80&auto=format&fit=crop"], desc:"RERA permit #123, park view.", longDesc:"1BR Dubai Hills, park view, RERA #123, 750 sqft, WhatsApp brochure. Beat portals, own leads.", agentId:"sara", areaSlug:"dubai-hills", features:["Park view","RERA #123","1 bath"] },
  { id:"creek-2br", title:"2BR — Creek Harbour", price:"AED 1.8M", beds:2, baths:2, area:"Creek Harbour", sqft:"1100", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop"], desc:"Creek view, 2BR.", longDesc:"2BR Creek Harbour, harbour view, 1100 sqft.", agentId:"sara", areaSlug:"creek-harbour", features:["Harbour view","2 baths"] },
  { id:"damac-villa", title:"3BR Villa — DAMAC", price:"AED 3.2M", beds:3, baths:4, area:"DAMAC Hills", sqft:"2400", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop"], desc:"Golf villa, DAMAC.", longDesc:"3BR villa DAMAC Hills, golf, 2400 sqft.", agentId:"ahmed", areaSlug:"damac", features:["Golf","4 baths"] },
  { id:"jvc-studio", title:"Studio — JVC", price:"AED 550K", beds:0, baths:1, area:"JVC", sqft:"450", image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop"], desc:"Studio JVC, investment.", longDesc:"Studio JVC, 450 sqft, investment.", agentId:"noura", areaSlug:"jvc", features:["Investment"] },
  { id:"tilal-offplan", title:"Off-plan — Tilal", price:"AED 900K", beds:2, baths:2, area:"Tilal", sqft:"980", image:"https://images.unsplash.com/photo-1600607687644-c71734b42498?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600607687644-c71734b42498?w=600&q=80&auto=format&fit=crop"], desc:"Off-plan Tilal.", longDesc:"Off-plan Tilal, 2BR, 980 sqft.", agentId:"ahmed", areaSlug:"damac", offplan:true, features:["Off-plan"] },
  { id:"marina-penthouse", title:"Penthouse — Marina", price:"AED 4.5M", beds:3, baths:3, area:"Dubai Marina", sqft:"2800", image:"https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=600&q=80&auto=format&fit=crop"], desc:"Penthouse Marina, sea view.", longDesc:"Penthouse Marina, sea view, 2800 sqft.", agentId:"khalid", areaSlug:"dubai-hills", features:["Sea view","Penthouse"] },
];

export const posts = [
  { slug:"hills-charges", title:"Dubai Hills Service Charges — What to Pay", excerpt:"Service charges, what’s included.", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"Dubai Hills service charges: park, pool, security. WhatsApp brochure." },
  { slug:"offplan-vs-ready", title:"Off-plan vs Ready: Which Wins?", excerpt:"Off-plan Tilal vs ready Marina.", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"Off-plan vs ready: payment plan vs immediate. Beat portals." },
  { slug:"own-leads", title:"Beat Portals: Own Leads", excerpt:"WhatsApp capture beats Dubizzle.", image:"https://images.unsplash.com/photo-1600607687644-c71734b42498?w=800&q=80&auto=format&fit=crop", date:"2026-06-10", content:"Own leads via WhatsApp capture. RERA." },
];

export const faqs = [
  { q:"RERA licensed?", a:"Yes, RERA, DM permit." },
  { q:"Off-plan payment?", a:"40/60 plan, Tilal." },
];

export function getListing(id:string){ return listings.find(l=>l.id===id); }
export function getAgent(id:string){ return agents.find(a=>a.id===id); }
export function getArea(slug:string){ return areas.find(a=>a.slug===slug); }
export function getPost(slug:string){ return posts.find(p=>p.slug===slug); }
