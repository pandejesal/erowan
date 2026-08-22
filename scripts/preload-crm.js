// Preload 20 Gulf "Other" leads into https://erowan.vercel.app/crm (localStorage)
// 1. Open https://erowan.vercel.app/crm
// 2. Open DevTools → Console → paste this entire file → Enter → Refresh
// It respects 20/day cap — run only 20 today.

const leads = [
  { "business": "Bright Consulting Dubai", "niche": "other", "city": "Dubai", "contact": "info@brightconsulting.ae", "source": "Apollo Free", "url": "https://brightconsulting.ae" },
  { "business": "Al Noor Trading Sharjah", "niche": "other", "city": "Sharjah", "contact": "hello@alnoortrading.ae", "source": "Maps", "url": "https://alnoortrading.ae" },
  { "business": "Gulf Digital Agency", "niche": "other", "city": "Dubai", "contact": "contact@gulfdigital.ae", "source": "Apollo Free", "url": "https://gulfdigital.ae" },
  { "business": "Horizon Consulting Abu Dhabi", "niche": "other", "city": "Abu Dhabi", "contact": "info@horizonad.ae", "source": "Apollo Free", "url": "https://horizonad.ae" },
  { "business": "Craft & Co Dubai", "niche": "other", "city": "Dubai", "contact": "hello@craftandco.ae", "source": "Instagram", "url": "https://craftandco.ae" },
  { "business": "Palm Consulting Doha", "niche": "other", "city": "Doha", "contact": "info@palmconsulting.qa", "source": "Apollo Free", "url": "https://palmconsulting.qa" },
  { "business": "Riyadh Business Hub", "niche": "other", "city": "Riyadh", "contact": "contact@riyadhhub.sa", "source": "Apollo Free", "url": "https://riyadhhub.sa" },
  { "business": "Emirates Branding Studio", "niche": "other", "city": "Dubai", "contact": "hello@emiratesbranding.ae", "source": "Instagram", "url": "https://emiratesbranding.ae" },
  { "business": "Sharjah Trade Solutions", "niche": "other", "city": "Sharjah", "contact": "info@sharjahtrade.ae", "source": "Maps", "url": "https://sharjahtrade.ae" },
  { "business": "Doha Creative Agency", "niche": "other", "city": "Doha", "contact": "hello@dohacreative.qa", "source": "Apollo Free", "url": "https://dohacreative.qa" },
  { "business": "Jeddah Consulting Group", "niche": "other", "city": "Jeddah", "contact": "info@jeddahconsult.sa", "source": "Apollo Free", "url": "https://jeddahconsult.sa" },
  { "business": "Muscat Business Services", "niche": "other", "city": "Muscat", "contact": "contact@muscatbiz.om", "source": "Maps", "url": "https://muscatbiz.om" },
  { "business": "Dubai Tech Traders", "niche": "other", "city": "Dubai", "contact": "info@dubaitech.ae", "source": "Apollo Free", "url": "https://dubaitech.ae" },
  { "business": "Abu Dhabi Consulting Co", "niche": "other", "city": "Abu Dhabi", "contact": "hello@adconsulting.ae", "source": "Apollo Free", "url": "https://adconsulting.ae" },
  { "business": "Gulf Crafts Market", "niche": "other", "city": "Sharjah", "contact": "info@gulfcrafts.ae", "source": "Instagram", "url": "https://gulfcrafts.ae" },
  { "business": "Riyadh Digital Solutions", "niche": "other", "city": "Riyadh", "contact": "contact@riyadhdigital.sa", "source": "Apollo Free", "url": "https://riyadhdigital.sa" },
  { "business": "Doha Business Center", "niche": "other", "city": "Doha", "contact": "info@dohabusiness.qa", "source": "Maps", "url": "https://dohabusiness.qa" },
  { "business": "Emirates Consulting Hub", "niche": "other", "city": "Dubai", "contact": "hello@emirateshub.ae", "source": "Apollo Free", "url": "https://emirateshub.ae" },
  { "business": "Sharjah Creative Studio", "niche": "other", "city": "Sharjah", "contact": "hello@sharjahcreative.ae", "source": "Instagram", "url": "https://sharjahcreative.ae" },
  { "business": "Jeddah Trade & Consulting", "niche": "other", "city": "Jeddah", "contact": "info@jeddahtrade.sa", "source": "Apollo Free", "url": "https://jeddahtrade.sa" }
];

const toAdd = leads.map((l,i)=>({
  id: Date.now().toString(36)+i,
  business: l.business,
  niche: l.niche,
  city: l.city,
  contact: l.contact,
  source: l.source,
  url: l.url,
  sentDate: new Date().toISOString().slice(0,10),
  status: "Not Sent",
  reply: false,
  notes: `Gulf Other • demo: https://erowan.vercel.app/demos/${i%2===0?'other-1':'other-2'} • QA 30s before send`
}));

const key="erowan_crm_v1";
const existing = JSON.parse(localStorage.getItem(key) || "[]");
const merged = [...toAdd, ...existing].slice(0, 200);
localStorage.setItem(key, JSON.stringify(merged));
console.log(`Preloaded ${toAdd.length} Gulf Other leads → ${merged.length} total. Refresh /crm.`);
console.log("Next: For each → Research panel (paste URL → Analyze → QA) → Email Generator → mark Sent (20 today max).");
