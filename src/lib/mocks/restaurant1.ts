export type MenuItem = {
  slug: string;
  name: string;
  price: string;
  desc: string;
  longDesc: string;
  image: string;
  category: "breakfast" | "brunch" | "coffee" | "bowls";
  tags: string[];
  modifiers: { id: string; label: string; options: { label: string; price: string }[] }[];
  allergens: string[];
  featured?: boolean;
};

export type Chef = { id: string; name: string; role: string; bio: string; image: string; specialty: string };

export const menu: MenuItem[] = [
  {
    slug: "avocado-toast",
    name: "Avocado Toast",
    price: "AED 38",
    desc: "Sourdough, chili, poach",
    longDesc: "Sourdough, smashed avocado, chili flakes, poached egg. JLT brunch hit. Tap modifiers for bread and add-ons.",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80&auto=format&fit=crop",
    category: "breakfast",
    tags: ["vegetarian"],
    modifiers: [
      { id: "bread", label: "Bread", options: [{ label: "Sourdough", price: "AED 0" }, { label: "Rye", price: "AED 0" }] },
      { id: "add", label: "Add", options: [{ label: "Poach +1", price: "AED 8" }, { label: "Avocado extra", price: "AED 12" }] },
    ],
    allergens: ["gluten","egg"],
    featured: true,
  },
  {
    slug: "shakshuka",
    name: "Shakshuka",
    price: "AED 42",
    desc: "Two eggs, labneh, pita",
    longDesc: "Two eggs in spiced tomato, labneh, warm pita. Share or solo. JLT mornings.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop",
    category: "brunch",
    tags: ["vegetarian"],
    modifiers: [{ id: "spice", label: "Spice", options: [{label:"Mild",price:"AED 0"},{label:"Harissa",price:"AED 0"}] }],
    allergens: ["egg","dairy"],
  },
  {
    slug: "mira-burger",
    name: "Mira Burger",
    price: "AED 55",
    desc: "Beef, cheddar, fries",
    longDesc: "Beef, cheddar, pickles, fries. 15 min avg prep. Brunch to late night.",
    image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=800&q=80&auto=format&fit=crop",
    category: "brunch",
    tags: [],
    modifiers: [{ id:"doneness", label:"Doneness", options:[{label:"Medium",price:"AED 0"},{label:"Well",price:"AED 0"}] }],
    allergens: ["gluten","dairy"],
  },
  {
    slug: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    price: "AED 28",
    desc: "Condensed, oat option",
    longDesc: "Iced Spanish latte, condensed milk, oat milk option. JLT 8am fuel.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80&auto=format&fit=crop",
    category: "coffee",
    tags: ["coffee"],
    modifiers: [{ id:"milk", label:"Milk", options:[{label:"Condensed",price:"AED 0"},{label:"Oat",price:"AED 3"}] }],
    allergens: ["dairy"],
  },
  {
    slug: "acai-bowl",
    name: "Açaí Bowl",
    price: "AED 45",
    desc: "Granola, banana, honey",
    longDesc: "Açaí, granola, banana, honey. Cold, fresh. 10am–2pm brunch for 2 option.",
    image: "https://images.unsplash.com/photo-1488477181946-64290103bb53?w=800&q=80&auto=format&fit=crop",
    category: "bowls",
    tags: ["vegan"],
    modifiers: [{ id:"topping", label:"Top", options:[{label:"Granola",price:"AED 0"},{label:"Extra honey",price:"AED 5"}] }],
    allergens: ["nuts"],
  },
  {
    slug: "brunch-for-2",
    name: "Brunch for 2",
    price: "AED 149",
    desc: "Share, 10am–2pm",
    longDesc: "Brunch for 2, share plates, 10am–2pm weekend ritual. Booking flawless via WhatsApp.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    category: "brunch",
    tags: ["share"],
    modifiers: [],
    allergens: [],
    featured: true,
  },
];

export const chefs: Chef[] = [
  { id:"lina", name:"Chef Lina", role:"Head Chef • Brunch", bio:"JLT brunch head, avocado toast perfection, 8 yrs.", image:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80&auto=format&fit=crop", specialty:"Avocado Toast" },
  { id:"omar", name:"Chef Omar", role:"Grill • Burger", bio:"Burger grill, 15 min avg, cheese pull.", image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop", specialty:"Mira Burger" },
  { id:"sofia", name:"Chef Sofia", role:"Pastry • Bowls", bio:"Bowls and pastry, granola house-made.", image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop", specialty:"Açaí Bowl" },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800&q=80&auto=format&fit=crop",
];

export const reviews = [
  { id:"1", author:"Alya • JLT", text:"Best avocado toast in JLT — ordered on WhatsApp in 20 seconds.", rating:5 },
  { id:"2", author:"Mira • Regular", text:"No more Talabat fees. Mira’s site is our top channel now.", rating:5 },
  { id:"3", author:"Sam • Weekend", text:"Brunch for 2 is our weekend ritual. Booking is flawless.", rating:5 },
];

export const posts = [
  { slug:"pdf-kills-orders", title:"Why PDFs Kill Orders", excerpt:"Menu PDFs vs tap-to-order. Tap wins.", image:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop", date:"2026-07-10", content:"PDFs kill orders. Tap to order wins. JLT mornings to late nights, WhatsApp checkout." },
  { slug:"jlt-brunch-guide", title:"JLT Brunch Guide", excerpt:"Weekend brunch for 2, share.", image:"https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80&auto=format&fit=crop", date:"2026-06-20", content:"JLT brunch guide: 10am–2pm, share, no commission." },
  { slug:"daily-reels", title:"Daily Reels That Sell", excerpt:"Reels sell brunch daily.", image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop", date:"2026-06-10", content:"Daily reels that sell: 15 sec, brunch for 2, WhatsApp link." },
];

export function getMenu(slug: string){ return menu.find(m=>m.slug===slug); }
export function getChef(id: string){ return chefs.find(c=>c.id===id); }
export function getPost(slug: string){ return posts.find(p=>p.slug===slug); }
