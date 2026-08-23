import Link from "next/link";
import Image from "next/image";
import { services, cases, team } from "@/lib/mocks/other1";
export const metadata = { title: "North Consulting — London | Clarity That Wins Clients — 12 yrs", description: "Boutique consulting for scale-ups. 120+ helped, £2.1M savings. No retainer trap • 48h site • Worldwide. Shoreditch → remote.", alternates:{canonical:"https://erowan.com/demos/other-1"} };
export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService", name:"North Consulting", address:{ "@type":"PostalAddress", addressLocality:"London" }})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{ "@type":"ListItem", position:1, name:"North", item:"https://erowan.com/demos/other-1"}]})}} />
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 5.0 • LONDON • B2B • 12 YRS</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight text-[#0F1A2E]">Clarity that<br /><span className="text-zinc-400">wins clients.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Boutique consulting for scale-ups. Services, case studies, proof — one clear site that converts visitors to calls in 48h. Worldwide, Shoreditch to remote.</p>
          <div className="mt-6 flex gap-3"><Link href="/demos/other-1/booking" className="px-6 py-3 bg-[#0F1A2E] text-white rounded-full text-sm font-bold">Book a call — free 20 min</Link><Link href="/demos/other-1/services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Services</Link></div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500"><span>✓ No retainer trap</span><span>✓ 48h site</span><span>✓ Worldwide</span></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop" alt="North" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-[#0F1A2E] text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">47 reviews</div></div>
          <div className="rounded-xl border p-4 text-center bg-white"><div className="text-xl font-bold">120+</div><div className="text-xs text-zinc-500">Scale-ups</div></div>
          <div className="rounded-xl border p-4 text-center bg-white"><div className="text-xl font-bold">£2.1M</div><div className="text-xs text-zinc-500">Avg. savings</div></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Services & Pricing</h2>
        <p className="text-sm text-zinc-600 mt-1">Most clients start with Strategy Sprint — then sprint.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map(s=>(
            <Link key={s.slug} href={`/demos/other-1/services/${s.slug}`} className={`bg-white border rounded-2xl p-5 hover:shadow-sm ${s.featured?"border-[#0F1A2E] ring-1 ring-[#0F1A2E] relative":""}`}>
              {s.featured && <div className="absolute -top-2 left-4 text-[10px] tracking-widest bg-[#0F1A2E] text-white px-2 py-0.5 rounded-full">MOST POPULAR</div>}
              <div className="flex justify-between items-start"><div className="font-bold">{s.name}</div><div className="bg-[#0F1A2E] text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="text-xs font-bold underline mt-2">View →</div>
            </Link>
          ))}
        </div>
        <div className="mt-3 text-center"><Link href="/demos/other-1/services" className="text-sm underline">All services →</Link></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Case studies</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {cases.slice(0,3).map(c=>(
            <Link key={c.slug} href={`/demos/other-1/case-studies/${c.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={c.image} alt={c.title} width={400} height={250} className="h-32 w-full object-cover border-b" />
              <div className="p-4"><div className="font-bold text-sm">{c.title}</div><div className="text-xs text-zinc-500">{c.result} →</div></div>
            </Link>
          ))}
        </div>
        <div className="mt-3 text-center"><Link href="/demos/other-1/case-studies" className="text-sm underline">All cases →</Link></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Team</h3>
        <div className="mt-3 grid md:grid-cols-5 gap-4">
          {team.map(p=>(
            <Link key={p.id} href={`/demos/other-1/team/${p.id}`} className="bg-white border rounded-2xl p-4 text-center hover:shadow-sm">
              <Image src={p.image} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border mx-auto" />
              <div className="font-bold text-sm mt-2">{p.name}</div><div className="text-xs text-zinc-500">{p.role}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
