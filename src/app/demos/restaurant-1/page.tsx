import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Mira Cafe — JLT Dubai | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">MIRA <span className="font-normal text-zinc-500">CAFE • JLT</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">ORDER — AED 38</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.7 • JLT • NO COMMISSION</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Menu that<br /><span className="text-zinc-400">orders, not PDFs.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Tap, customize, WhatsApp order — zero Talabat fees. Table reserve + daily reels. JLT mornings to late nights.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Order on WhatsApp</a><a href="#menu" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">See menu</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80&auto=format&fit=crop" alt="Mira Cafe" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section id="menu" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Menu — Tap to order</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Avocado Toast", price: "AED 38", desc: "Sourdough, chili, poach" },
            { name: "Shakshuka", price: "AED 42", desc: "Two eggs, labneh, pita" },
            { name: "Mira Burger", price: "AED 55", desc: "Beef, cheddar, fries" },
            { name: "Iced Spanish Latte", price: "AED 28", desc: "Condensed, oat option" },
            { name: "Açaí Bowl", price: "AED 45", desc: "Granola, banana, honey" },
            { name: "Brunch for 2", price: "AED 149", desc: "Share, 10am–2pm" },
          ].map(s=>(
            <div key={s.name} className="bg-white border rounded-2xl p-5 flex justify-between">
              <div><div className="font-bold">{s.name}</div><div className="text-sm text-zinc-600">{s.desc}</div></div>
              <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 gap-3">
        <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop" alt="g1" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop" alt="g2" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80&auto=format&fit=crop" alt="g3" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-900 text-white rounded-2xl flex justify-between items-center"><div><div className="font-bold">Reserve a table — JLT</div><div className="text-sm text-zinc-400">WhatsApp in 20 seconds</div></div><a href="https://wa.me/919999999999" className="px-6 py-3 bg-white text-zinc-900 rounded-full font-bold">Reserve →</a></section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your cafe in 48h.</div>
    </div>
  );
}
