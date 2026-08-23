import Link from "next/link";
import Image from "next/image";
import { products, collections } from "@/lib/mocks/other2";
export const metadata = { title: "Craft Shop — Brooklyn Navy Yard | Ceramics & Textiles Handmade Since 2018 — Worldwide", description: "Wheel-thrown ceramics & indigo textiles from Navy Yard. 312 reviews 4.9★, 5k+ orders. Worldwide, 48h site, no Etsy fees.", alternates:{canonical:"https://erowan.com/demos/other-2"} };
export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Store", name:"Craft Shop Brooklyn"})}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{ "@type":"ListItem", position:1, name:"Craft", item:"https://erowan.com/demos/other-2"}]})}} />
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • BROOKLYN • HANDMADE • SINCE 2018</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Made by hand.<br /><span className="text-[#C4A484]">Sold worldwide.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Ceramics & textiles from Brooklyn studio. Shop, story, stock — one site that sells while you make. Navy Yard to worldwide in 3 days.</p>
          <div className="mt-6 flex gap-3"><Link href="/demos/other-2/products" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Shop $28 →</Link><Link href="/demos/other-2/collections" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Collections</Link></div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500"><span>✓ Worldwide shipping</span><span>✓ 48h site</span><span>✓ No Etsy fees</span></div>
        </div>
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&q=80&auto=format&fit=crop" alt="Craft" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">312 reviews</div></div>
          <div className="rounded-xl border p-4 text-center bg-white"><div className="text-xl font-bold">5k+</div><div className="text-xs text-zinc-500">Orders shipped</div></div>
          <div className="rounded-xl border p-4 text-center bg-white"><div className="text-xl font-bold">48h</div><div className="text-xs text-zinc-500">To launch</div></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-serif font-bold">Products — Small batch</h2>
          <span className="text-xs tracking-widest text-zinc-500">HANDMADE • SMALL BATCH</span>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {products.map(p=>(
            <Link key={p.slug} href={`/demos/other-2/products/${p.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={p.image} alt={p.name} width={400} height={300} className="h-36 w-full object-cover border-b" />
              <div className="p-4"><div className="flex justify-between"><div className="font-bold">{p.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{p.price}</div></div><div className="text-sm text-zinc-600 mt-1">{p.desc} • {p.stock} left</div></div>
            </Link>
          ))}
        </div>
        <div className="mt-3 text-center"><Link href="/demos/other-2/products" className="text-sm underline">All products →</Link></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Collections</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {collections.map(c=>(
            <Link key={c.slug} href={`/demos/other-2/collections/${c.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={c.image} alt={c.name} width={400} height={250} className="h-28 w-full object-cover border-b" />
              <div className="p-4"><div className="font-bold">{c.name}</div><div className="text-xs text-zinc-500">{c.desc}</div></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
