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
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 5.0 • LONDON • B2B</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Clarity that<br /><span className="text-zinc-400">wins clients.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Boutique consulting for scale-ups. Services, case studies, proof — one clear site that converts visitors to calls.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book a call</a><a href="#services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Services</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop" alt="North Consulting" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Services</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "Strategy Sprint", price: "$2k", desc: "2 weeks • Roadmap" },
            { name: "Ops Review", price: "$1.5k", desc: "Audit + plan" },
            { name: "Retainer", price: "$5k/mo", desc: "Weekly sprints" },
          ].map(s=>(
            <div key={s.name} className="bg-white border rounded-2xl p-5 flex justify-between"><div><div className="font-bold">{s.name}</div><div className="text-sm text-zinc-600">{s.desc}</div></div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div></div>
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your business in 48h.</div>
    </div>
  );
}
