"use client";
import { useState } from "react";
import { niches } from "@/lib/niches";

const templates: Record<string, (v: Vars)=> string> = {
  salons: (v)=> `Subject: quick idea for ${v.business} bookings

Hi ${v.name || "there"} — saw ${v.business} in ${v.city} — your Instagram is strong but I couldn't book a slot after 8pm without calling (60% book after-hours in Gulf).

I rebuilt your homepage as a concept demo with one-tap booking + AED pricing: ${v.demo} (concept, not live) — full page: https://erowan.com/salons

Want a 60-sec Loom of 3 fixes on your current site? No pitch.

— Erowan, Ahmedabad → Gulf, 48h, $250 base`,

  restaurants: (v)=> `Subject: menu that orders — ${v.business}?

Hi ${v.name || "there"} — your menu PDF is slow on mobile. Tourists search 'near me' and bounce.

Demo with tap-to-order (no Talabat cut): ${v.demo} — details: https://erowan.com/restaurants

Want your menu rebuilt as demo?`,

  clinics: (v)=> `Subject: trust before they book — ${v.business}

Hi ${v.name || "there"} — patients vet in 10s: doctor cards + DHA badge + insurance = trust. Your site hides doctors below fold.

Demo: ${v.demo} — page: https://erowan.com/clinics`,

  "real-estate": (v)=> `Subject: portal vs your leads — ${v.business}

Hi ${v.name || "there"} — portals keep leads. Your site should capture via WhatsApp filter (beds/area/AED).

Demo: ${v.demo} — page: https://erowan.com/real-estate`,

  other: (v)=> `Subject: quick idea for ${v.business} — ${v.city}

Hi ${v.name || "there"} — saw ${v.business} in ${v.city}. If clients Google you and find no clear site — you lose them.

I rebuilt a concept demo tailored to your business: ${v.demo} (concept, not live) — see catch-all page https://erowan.com/other — custom hero + WhatsApp + AED pricing, 48h $250 base.

Want a 60-sec Loom of 3 fixes? No pitch.

— Erowan, Ahmedabad → Gulf, 48h, $250 base`,
};

type Vars = { business: string; city: string; name: string; demo: string; niche: string };

export default function EmailGenerator() {
  const [vars, setVars] = useState<Vars>({ business: "Noura Salon", city: "Dubai Marina", name: "", demo: "https://erowan.com/demos/salon-1", niche: "salons" });
  const [follow, setFollow] = useState(0);
  const gen = templates[vars.niche] || templates.salons;
  const bodies = [
    gen(vars),
    `Bump — did you see the demo link above? Should I send the 60-sec Loom?`,
    `Closing loop — should I keep ${vars.business} on my rebuild list or not a priority now?`,
    `Last bump — I'll archive. Reply STOP to opt out.`,
  ];

  const copy = async (t: string) => { await navigator.clipboard.writeText(t); alert("Copied"); };

  return (
    <div className="rounded-2xl border border-zinc-200 p-4 bg-white space-y-4">
      <div className="font-medium text-sm">Email / DM generator — niche-pain + demo link</div>
      <div className="grid md:grid-cols-3 gap-2">
        <input placeholder="Business" value={vars.business} onChange={e=>setVars({...vars,business:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
        <input placeholder="City" value={vars.city} onChange={e=>setVars({...vars,city:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
        <input placeholder="Contact name (optional)" value={vars.name} onChange={e=>setVars({...vars,name:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
        <select value={vars.niche} onChange={e=>setVars({...vars,niche:e.target.value, demo: niches.find(n=>n.slug===e.target.value)?.demos[0]?.href ? `https://erowan.com${niches.find(n=>n.slug===e.target.value)!.demos[0].href}` : vars.demo})} className="border rounded-lg px-3 py-2 text-sm">
          {niches.map(n=> <option key={n.slug} value={n.slug}>{n.shortTitle}</option>)}
        </select>
        <input placeholder="Demo link" value={vars.demo} onChange={e=>setVars({...vars,demo:e.target.value})} className="border rounded-lg px-3 py-2 text-sm md:col-span-2" />
      </div>
      <div className="flex gap-2 text-xs">
        {[0,1,2,3].map(i=> <button key={i} onClick={()=>setFollow(i)} className={`px-3 py-1.5 rounded-full border ${follow===i ? "bg-zinc-900 text-white border-zinc-900" : "bg-white border-zinc-300"}`}>{i===0?"Initial":`F${i}`}</button>)}
      </div>
      <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3">
        <pre className="whitespace-pre-wrap text-sm font-sans">{bodies[follow]}</pre>
        <button onClick={()=>copy(bodies[follow])} className="mt-2 px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs">Copy</button>
      </div>
      <div className="text-xs text-zinc-500">Keep 20-30/day. Link to NICHE page, not homepage. Verify pain with Research panel first.</div>
    </div>
  );
}
