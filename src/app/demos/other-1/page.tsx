import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "North Consulting — London | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">NORTH <span className="font-normal text-zinc-500">CONSULTING • LONDON</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">CONTACT — $250</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 5.0 • LONDON • B2B • 12 yrs</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Clarity that<br /><span className="text-zinc-400">wins clients.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Boutique consulting for scale-ups. Services, case studies, proof — one clear site that converts visitors to calls in 48h.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book a call — free 20 min</a><a href="#services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Services</a></div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500"><span>✓ No retainer trap</span><span>✓ 48h site</span><span>✓ Worldwide</span></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop" alt="North Consulting" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">47 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">120+</div><div className="text-xs text-zinc-500">Scale-ups helped</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">£2.1M</div><div className="text-xs text-zinc-500">Avg. client savings</div></div>
        </div>
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Services & Pricing</h2>
        <p className="text-sm text-zinc-600 mt-1">Transparent, no hidden fees. Most clients start with Strategy Sprint.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Strategy Sprint", price: "$2k", desc: "2 weeks • Roadmap + KPIs", pop: true },
            { name: "Ops Review", price: "$1.5k", desc: "1 week • Audit + plan • Loom", pop: false },
            { name: "Retainer", price: "$5k/mo", desc: "Weekly sprints • Slack • Reports", pop: false },
            { name: "Workshop", price: "$800", desc: "4 hours • Team alignment" },
            { name: "Due Diligence", price: "$3k", desc: "For investors • 5-day" },
            { name: "Fractional COO", price: "$8k/mo", desc: "2 days/week • Embedded" },
          ].map(s=>(
            <div key={s.name} className={`bg-white border rounded-2xl p-5 hover:shadow-sm ${s.pop ? "border-zinc-900" : "border-zinc-200"}`}>
              {s.pop && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST POPULAR</div>}
              <div className="mt-2 flex justify-between items-start"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc}</div>
              <a href="https://wa.me/919999999999" className="mt-3 inline-block text-xs font-bold underline">Book →</a>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Case studies</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop", title: "Fintech scale-up — +32% ops speed" },
            { img: "https://images.unsplash.com/photo-1553877522-c7a6a9aeef35?w=600&q=80&auto=format&fit=crop", title: "Marketplace — £400k saved" },
            { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop", title: "SaaS — Churn -18% in 90 days" },
          ].map(c=>(
            <div key={c.title} className="bg-white border rounded-2xl overflow-hidden">
              <Image src={c.img} alt={c.title} width={400} height={250} className="h-32 w-full object-cover border-b" />
              <div className="p-4"><div className="font-bold text-sm">{c.title}</div><div className="text-xs text-zinc-500">Read case study →</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Team</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            { name: "James North", role: "Founder • ex-McKinsey", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
            { name: "Priya Mehta", role: "Ops Lead • Scale-up", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop" },
            { name: "Alex Chen", role: "Product • B2B", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
          ].map(p=>(
            <div key={p.name} className="bg-white border rounded-2xl p-4 flex gap-3">
              <Image src={p.img} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{p.name}</div><div className="text-sm text-zinc-600">{p.role}</div><div className="text-xs">★ 5.0</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <h3 className="font-serif font-bold text-center">Loved by founders</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            "North gave us clarity in 2 weeks that we chased for 6 months.",
            "Ops review saved £400k — paid for itself 10x.",
            "Retainer feels like an extra co-founder. Worldwide, 48h site sold us.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Founder ★★★★★</div></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <h4 className="font-bold">Visit — Shoreditch, London</h4>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — Shoreditch High St • Open 9am–6pm</div>
        </div>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div><div className="font-serif text-xl font-bold">Book a free 20-min call</div><div className="text-sm text-zinc-400 mt-1">Worldwide, 48h site. No pitch.</div></div>
          <a href="https://wa.me/919999999999" className="mt-4 inline-flex justify-center px-6 py-3 bg-white text-zinc-900 font-bold rounded-full">Book on WhatsApp →</a>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-zinc-500 text-center">Concept demo by Erowan — your business in 48h.</div>
    </div>
  );
}
