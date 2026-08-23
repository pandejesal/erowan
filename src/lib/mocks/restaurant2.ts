export type MenuItem = {
  slug: string;
  name: string;
  price: string;
  desc: string;
  longDesc: string;
  image: string;
  category: "grill" | "sides" | "drinks" | "feasts";
  halal: boolean;
  modifiers: { id: string; label: string; options: { label: string; price: string }[] }[];
  spiceLevels: string[];
};

export type Chef = { id: string; name: string; role: string; bio: string; image: string; specialty: string };

export const menu: MenuItem[] = [
  {
    slug: "mixed-grill-platter",
    name: "Mixed Grill Platter",
    price: "£22",
    desc: "For 2, hummus + bread",
    longDesc: "Mixed grill for 2, charcoal, hummus + warm bread. Halal, Soho grill.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop",
    category: "grill",
    halal: true,
    modifiers: [{ id:"bread", label:"Bread", options:[{label:"Pita",price:"£0"},{label:"Khobz",price:"£0"}] }],
    spiceLevels: ["Mild","Medium","Hot"],
  },
  {
    slug: "shish-tawook",
    name: "Shish Tawook",
    price: "£12",
    desc: "Charcoal, garlic toum",
    longDesc: "Shish tawook charcoal, garlic toum. Halal, 12 min grill.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80&auto=format&fit=crop",
    category: "grill",
    halal: true,
    modifiers: [],
    spiceLevels: ["Mild","Hot"],
  },
  {
    slug: "kabsa-lahm",
    name: "Kabsa Lahm",
    price: "£16",
    desc: "Lamb, saffron rice",
    longDesc: "Lamb kabsa, saffron rice, Soho lunch to late night. Halal.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80&auto=format&fit=crop",
    category: "grill",
    halal: true,
    modifiers: [{ id:"rice", label:"Rice", options:[{label:"Saffron",price:"£0"},{label:"White",price:"£0"}] }],
    spiceLevels: ["Mild","Medium"],
  },
  {
    slug: "hummus-bread",
    name: "Hummus + Bread",
    price: "£6",
    desc: "Warm, olive oil",
    longDesc: "Warm hummus + bread, olive oil. Halal.",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80&auto=format&fit=crop",
    category: "sides",
    halal: true,
    modifiers: [],
    spiceLevels: [],
  },
  {
    slug: "fresh-juices",
    name: "Fresh Juices",
    price: "£5",
    desc: "Mango, pomegranate",
    longDesc: "Fresh juices mango pomegranate. Soho.",
    image: "https://images.unsplash.com/photo-1621506289937-a8ed287b0f52?w=800&q=80&auto=format&fit=crop",
    category: "drinks",
    halal: true,
    modifiers: [{ id:"fruit", label:"Fruit", options:[{label:"Mango",price:"£0"},{label:"Pomegranate",price:"£0"}] }],
    spiceLevels: [],
  },
  {
    slug: "family-feast",
    name: "Family Feast",
    price: "£45",
    desc: "Grill + sides + drinks",
    longDesc: "Family feast grill + sides + drinks, for 5. Halal, Soho.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop",
    category: "feasts",
    halal: true,
    modifiers: [],
    spiceLevels: ["Mild","Medium","Hot"],
  },
];

export const chefs: Chef[] = [
  { id:"ahmed", name:"Chef Ahmed", role:"Head Grill • Charcoal", bio:"Head grill charcoal, mixed grill for 2, halal.", image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop", specialty:"Mixed Grill" },
  { id:"bilal", name:"Chef Bilal", role:"Kabsa • Lamb", bio:"Kabsa lahm saffron rice.", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&auto=format&fit=crop", specialty:"Kabsa Lahm" },
  { id:"youssef", name:"Chef Youssef", role:"Juices • Sides", bio:"Juices and hummus.", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop", specialty:"Hummus" },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80&auto=format&fit=crop",
];

export const reviews = [
  { id:"1", author:"Aamir • Soho", text:"Best mixed grill in Soho — WhatsApp order is instant.", rating:5 },
  { id:"2", author:"Layla • Regular", text:"Shish tawook is our weekly. No app needed.", rating:5 },
  { id:"3", author:"Family • Soho", text:"Family feast fed 5 of us, still hot on arrival.", rating:5 },
];

export const posts = [
  { slug:"halal-soho", title:"Halal in Soho — Why It Matters", excerpt:"Halal, charcoal, Soho.", image:"https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"Halal charcoal grill Soho, no app, WhatsApp only." },
  { slug:"spice-guide", title:"Spice Guide: Mild to Hot", excerpt:"Mild, medium, hot.", image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"Spice mild to hot, pick at modifier." },
  { slug:"family-feast", title:"Family Feast for 5", excerpt:"Grill + sides + drinks.", image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop", date:"2026-06-10", content:"Family feast for 5, still hot." },
];

export function getMenu(slug:string){ return menu.find(m=>m.slug===slug); }
export function getChef(id:string){ return chefs.find(c=>c.id===id); }
export function getPost(slug:string){ return posts.find(p=>p.slug===slug); }
