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
  longDescEs?: string;
  agentId: string;
  areaSlug: string;
  features: string[];
};

export type Agent = { id: string; name: string; role: string; bio: string; image: string; phone: string; listings: string[]; languages: string[]; };

export type Area = { slug: string; name: string; desc: string; avgPrice: string; image: string };

export const agents: Agent[] = [
  { id:"maria", name:"Maria Garcia", role:"MLS • Brickell", bio:"MLS Brickell bilingual EN+ES, 200+ deals.", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", phone:"+13051234567", listings:["brickell-2br","wynwood-loft"], languages:["EN","ES"] },
  { id:"carlos", name:"Carlos Rivera", role:"Miami Beach", bio:"Miami Beach specialist.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", phone:"+13057654321", listings:["miami-beach-3br"], languages:["EN","ES"] },
  { id:"sofia", name:"Sofia Lopez", role:"Coral Gables • Villa", bio:"Coral Gables villa, luxury.", image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop", phone:"+13059887766", listings:["coral-gables-villa"], languages:["ES","EN"] },
  { id:"james", name:"James Smith", role:"Downtown • Loft", bio:"Downtown loft, Wynwood.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", phone:"+13051112222", listings:["wynwood-loft"], languages:["EN"] },
];

export const areas: Area[] = [
  { slug:"brickell", name:"Brickell", desc:"Brickell high-rise, finance.", avgPrice:"$550K", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop" },
  { slug:"miami-beach", name:"Miami Beach", desc:"Beach, 3BR.", avgPrice:"$780K", image:"https://images.unsplash.com/photo-1600607687644-c71734b42498?w=800&q=80&auto=format&fit=crop" },
  { slug:"coral-gables", name:"Coral Gables", desc:"Villa, gated.", avgPrice:"$1.2M", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop" },
  { slug:"wynwood", name:"Wynwood", desc:"Loft, art.", avgPrice:"$420K", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop" },
];

export const listings: Listing[] = [
  { id:"brickell-2br", title:"2BR — Brickell", price:"$450K", beds:2, baths:2, area:"Brickell", sqft:"1100", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop"], desc:"Brickell high-rise.", longDesc:"2BR Brickell, high-rise, 1100 sqft, MLS, bilingual.", longDescEs:"2 hab Brickell, 1100 pies, MLS bilingüe.", agentId:"maria", areaSlug:"brickell", features:["High-rise","2 baths"] },
  { id:"miami-beach-3br", title:"3BR — Miami Beach", price:"$780K", beds:3, baths:2, area:"Miami Beach", sqft:"1600", image:"https://images.unsplash.com/photo-1600607687644-c71734b42498?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600607687644-c71734b42498?w=600&q=80&auto=format&fit=crop"], desc:"Miami Beach.", longDesc:"3BR Miami Beach, 1600 sqft.", agentId:"carlos", areaSlug:"miami-beach", features:["Beach"] },
  { id:"coral-gables-villa", title:"Villa — Coral Gables", price:"$1.2M", beds:4, baths:3, area:"Coral Gables", sqft:"2800", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop"], desc:"Villa Coral Gables.", longDesc:"Villa Coral Gables, 2800 sqft.", agentId:"sofia", areaSlug:"coral-gables", features:["Gated","Pool"] },
  { id:"wynwood-loft", title:"Loft — Wynwood", price:"$420K", beds:1, baths:1, area:"Wynwood", sqft:"850", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop"], desc:"Wynwood loft, art.", longDesc:"Loft Wynwood art district, 850 sqft.", agentId:"james", areaSlug:"wynwood", features:["Loft","Art"] },
  { id:"downtown-1br", title:"1BR — Downtown", price:"$350K", beds:1, baths:1, area:"Downtown", sqft:"700", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop"], desc:"Downtown 1BR.", longDesc:"1BR Downtown, 700 sqft.", agentId:"james", areaSlug:"wynwood", features:["Downtown"] },
  { id:"coconut-grove-2br", title:"2BR — Coconut Grove", price:"$620K", beds:2, baths:2, area:"Coconut Grove", sqft:"1200", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop", gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format&fit=crop"], desc:"Coconut Grove.", longDesc:"2BR Coconut Grove, 1200 sqft.", agentId:"maria", areaSlug:"brickell", features:["Grove"] },
];

export const posts = [
  { slug:"brickell-invest", title:"Brickell Investment — Why Now", excerpt:"Brickell high-rise investment.", image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"Brickell investment high-rise, MLS, bilingual." },
  { slug:"beach-vs-brickell", title:"Beach vs Brickell", excerpt:"Beach villa vs high-rise.", image:"https://images.unsplash.com/photo-1600607687644-c71734b42498?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"Beach vs Brickell comparison." },
  { slug:"bilingual-leads", title:"Bilingual Leads Convert", excerpt:"EN+ES leads.", image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop", date:"2026-06-10", content:"Bilingual EN+ES leads convert, WhatsApp." },
];

export function getListing(id:string){ return listings.find(l=>l.id===id); }
export function getAgent(id:string){ return agents.find(a=>a.id===id); }
export function getArea(slug:string){ return areas.find(a=>a.slug===slug); }
export function getPost(slug:string){ return posts.find(p=>p.slug===slug); }
