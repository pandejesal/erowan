import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Al Hadi Grill — London | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">AL HADI <span className="font-normal text-zinc-500">GRILL • SOHO</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">ORDER — £12</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • SOHO • HALAL</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">London grill,<br /><span className="text-zinc-400">ordered in seconds.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Modifiers for spice & sides, WhatsApp checkout. No commission, no app. Soho lunch to late night.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Order WhatsApp</a><a href="#menu" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Menu</a></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=80&auto=format&fit=crop" alt="Al Hadi" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">210 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">900+</div><div className="text-xs text-zinc-500">Orders/mo</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">12 min</div><div className="text-xs text-zinc-500">Avg. grill</div></div>
        </div>
      </section>
      <section id="menu" className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-2xl font-serif font-bold">Menu</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Mixed Grill Platter", price: "£22", desc: "For 2, hummus + bread" },
            { name: "Shish Tawook", price: "£12", desc: "Charcoal, garlic toum" },
            { name: "Kabsa Lahm", price: "£16", desc: "Lamb, saffron rice" },
            { name: "Hummus + Bread", price: "£6", desc: "Warm, olive oil" },
            { name: "Fresh Juices", price: "£5", desc: "Mango, pomegranate" },
            { name: "Family Feast", price: "£45", desc: "Grill + sides + drinks" },
          ].map(s=>(
            <div key={s.name} className="bg-white border rounded-2xl p-5 flex justify-between hover:shadow-sm">
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
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Loved in Soho</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {[
            "Best mixed grill in Soho — WhatsApp order is instant.",
            "Shish tawook is our weekly. No app needed.",
            "Family feast fed 5 of us, still hot on arrival.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Guest ★★★★★</div></div>)}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-zinc-500 text-center">Concept demo by Erowan — your restaurant in 48h.</div>
    </div>
  );
}
