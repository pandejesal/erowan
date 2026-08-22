import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Vista Homes — Dubai Hills | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">VISTA <span className="font-normal text-zinc-500">HOMES • DUBAI HILLS</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">WHATSAPP LEADS</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • DUBAI HILLS • RERA</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Leads, not<br /><span className="text-zinc-400">just listings.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Filter by beds, area, AED. WhatsApp capture — beat portals, own your leads.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">WhatsApp listings</a><a href="#listings" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Listings</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80&auto=format&fit=crop" alt="Vista Homes" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">120 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">300+</div><div className="text-xs text-zinc-500">Units sold</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">RERA</div><div className="text-xs text-zinc-500">Licensed</div></div>
        </div>
      </section>
      <section id="listings" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Listings</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { name: "1BR — Dubai Hills", price: "AED 1.1M", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop" },
            { name: "2BR — Creek Harbour", price: "AED 1.8M", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop" },
            { name: "3BR Villa — DAMAC", price: "AED 3.2M", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop" },
            { name: "Studio — JVC", price: "AED 550K", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop" },
            { name: "Off-plan — Tilal", price: "AED 900K", img: "https://images.unsplash.com/photo-1600607687644-c71734b42498?w=600&q=80&auto=format&fit=crop" },
            { name: "Penthouse — Marina", price: "AED 4.5M", img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=600&q=80&auto=format&fit=crop" },
          ].map(l=>(
            <div key={l.name} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={l.img} alt={l.name} width={400} height={250} className="h-36 w-full object-cover border-b" />
              <div className="p-4"><div className="font-bold">{l.name}</div><div className="text-sm bg-zinc-900 text-white inline-block px-2 py-1 rounded-full mt-1">{l.price}</div></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">What sellers say</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            "Sold in 21 days, above asking. WhatsApp leads were hot.",
            "No portal fees, direct leads. Vista delivered.",
            "Off-plan sold out via our site, not Dubizzle.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Seller ★★★★★</div></div>)}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your brokerage in 48h.</div>
    </div>
  );
}
