import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Bloom Spa — New York | Demo by Erowan" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="flex gap-3 items-center"><div className="h-9 w-9 rounded-full bg-zinc-900 text-white grid place-items-center font-serif">B</div><div><div className="font-serif font-bold">BLOOM</div><div className="text-[10px] tracking-widest text-zinc-500 -mt-1">SOHO • NEW YORK</div></div></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">BOOK — $85</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • 210 REVIEWS • SOHO</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">NYC calm.<br /><span className="text-zinc-400">Book in one tap.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Boutique spa in SoHo. Real-time slots, staff picks, WhatsApp confirm in 30 seconds. English + Spanish.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book on WhatsApp</a><a href="#services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">See prices</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=80&auto=format&fit=crop" alt="Bloom Spa" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">210 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">3k+</div><div className="text-xs text-zinc-500">Monthly clients</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">2019</div><div className="text-xs text-zinc-500">SoHo since</div></div>
        </div>
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Services & Prices</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Aroma Massage 60m", price: "$85", desc: "60 min • Hot oils, calm", pop: true },
            { name: "Hydra Facial", price: "$120", desc: "75 min • Deep hydration" },
            { name: "Wax Full Body", price: "$70", desc: "60 min • Gentle, clean" },
            { name: "Nail Art", price: "$40", desc: "45 min • Gel, design" },
            { name: "Hair Spa", price: "$65", desc: "60 min • Repair & shine" },
            { name: "Bridal Package", price: "$400", desc: "180 min • Trial + day" },
          ].map(s=>(
            <div key={s.name} className={`bg-white border rounded-2xl p-5 ${s.pop? "border-zinc-900":"border-zinc-200"}`}>
              {s.pop && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 gap-3">
        <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80&auto=format&fit=crop" alt="g1" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop" alt="g2" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop" alt="g3" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <h3 className="font-serif font-bold text-center">Loved in New York</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            "Bloom is my reset — booked at midnight, 10am slot.",
            "Nail art is art. Prices clear, no surprise.",
            "SoHo calm, premium care, 48h site is legit.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Client ★★★★★</div></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-zinc-500">Concept demo by Erowan — your spa in 48h.</section>
    </div>
  );
}
