import Link from "next/link";
import Image from "next/image";
import DemoBadge from "@/components/DemoBadge";
export const metadata = { title: "Craft Shop — Brooklyn | Demo" };
export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="bg-amber-50 border-b border-amber-200"><div className="mx-auto max-w-7xl px-6 py-2 flex justify-between"><DemoBadge /><Link href="/" className="text-xs underline">← Back</Link></div></div>
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b"><div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center"><div className="font-serif font-bold">CRAFT <span className="font-normal text-zinc-500">SHOP • BROOKLYN</span></div><a href="https://wa.me/919999999999" className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-bold">SHOP — $28</a></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • BROOKLYN • HANDMADE • SINCE 2018</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Made by hand.<br /><span className="text-zinc-400">Sold worldwide.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Ceramics & textiles from Brooklyn studio. Shop, story, stock — one site that sells while you make.</p>
          <div className="mt-6 flex gap-3"><a href="https://wa.me/919999999999" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Shop WhatsApp</a><a href="#products" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Products</a></div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500"><span>✓ Worldwide shipping</span><span>✓ 48h site</span><span>✓ No Etsy fees</span></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80&auto=format&fit=crop" alt="Craft Shop" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">312 reviews</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">5k+</div><div className="text-xs text-zinc-500">Orders shipped</div></div>
          <div className="rounded-xl border p-4 text-center"><div className="text-xl font-bold">48h</div><div className="text-xs text-zinc-500">To launch</div></div>
        </div>
      </section>
      <section id="products" className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-serif font-bold">Products</h2>
          <span className="text-xs tracking-widest text-zinc-500">HANDMADE • SMALL BATCH</span>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Ceramic Mug", price: "$28", desc: "Wheel-thrown • 12oz", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=600&q=80&auto=format&fit=crop" },
            { name: "Linen Apron", price: "$45", desc: "Heavy linen • 2 pockets", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80&auto=format&fit=crop" },
            { name: "Wood Board", price: "$60", desc: "Walnut • Oiled", img: "https://images.unsplash.com/photo-1582738411706-bfc82e952a5a?w=600&q=80&auto=format&fit=crop" },
            { name: "Throw Pillow", price: "$38", desc: "Block print • 18”", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop" },
            { name: "Ceramic Bowl", price: "$32", desc: "Set of 2 • Matte", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80&auto=format&fit=crop" },
            { name: "Table Runner", price: "$55", desc: "Indigo dye • 72”", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80&auto=format&fit=crop" },
          ].map(p=>(
            <div key={p.name} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={p.img} alt={p.name} width={400} height={300} className="h-36 w-full object-cover border-b" />
              <div className="p-4"><div className="flex justify-between"><div className="font-bold">{p.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{p.price}</div></div><div className="text-sm text-zinc-600 mt-1">{p.desc}</div><a href="https://wa.me/919999999999" className="mt-2 inline-block text-xs font-bold underline">Shop →</a></div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-3 gap-3">
        <Image src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80&auto=format&fit=crop" alt="studio 1" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&auto=format&fit=crop" alt="studio 2" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
        <Image src="https://images.unsplash.com/photo-1493106641515-6b563a1d79e9?w=600&q=80&auto=format&fit=crop" alt="studio 3" width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Our story</h3>
        <div className="mt-3 bg-white border rounded-2xl p-6 grid md:grid-cols-2 gap-6">
          <div className="text-sm leading-relaxed text-zinc-700">Brooklyn studio since 2018. Two friends, one wheel, natural dyes. We ship worldwide from our Navy Yard studio. Every piece made to order, no mass production.</div>
          <div className="text-sm text-zinc-600 space-y-1"><div>✓ Ships in 3 days worldwide</div><div>✓ 30-day returns</div><div>✓ Wholesale on request</div></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <h3 className="font-serif font-bold text-center">Loved worldwide</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            "Mug is perfect weight — my daily ritual now.",
            "Apron survived 6 months of cafe shifts, still beautiful.",
            "Board is heirloom quality. Worldwide shipping was fast.",
          ].map((t,i)=><div key={i} className="bg-white border rounded-2xl p-5 text-sm">“{t}”<div className="mt-2 text-xs font-bold">— Client ★★★★★</div></div>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <h4 className="font-bold">Visit — Navy Yard, Brooklyn</h4>
          <div className="mt-3 rounded-xl bg-zinc-100 border h-40 grid place-items-center text-xs text-zinc-500">Map — 63 Flushing Ave • Open 11am–7pm</div>
        </div>
        <div className="bg-zinc-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div><div className="font-serif text-xl font-bold">Shop handmade — $28</div><div className="text-sm text-zinc-400 mt-1">Worldwide shipping, 48h site.</div></div>
          <a href="https://wa.me/919999999999" className="mt-4 inline-flex justify-center px-6 py-3 bg-white text-zinc-900 font-bold rounded-full">Shop on WhatsApp →</a>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-zinc-500 text-center">Concept demo by Erowan — your shop in 48h.</div>
    </div>
  );
}
