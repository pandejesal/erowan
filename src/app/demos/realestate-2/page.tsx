import Link from "next/link";
import Image from "next/image";
import { listings, agents } from "@/lib/mocks/realestate2";
export const metadata = { title: "Harbor Realty — Miami Brickell | MLS • Bilingual • 200+ Deals", description: "Bilingual EN+ES, MLS. Brickell high-rise, Miami Beach villa. WhatsApp brochure.", alternates:{canonical:"https://erowan.com/demos/realestate-2"} };
export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent","name":"Harbor Realty","address":{"@type":"PostalAddress","addressLocality":"Brickell Miami"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"95"}})}} />
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • BRICKELL • MLS • BRICKELL • 200+ DEALS</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Miami listings<br /><span className="text-zinc-400">that convert.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Bilingual EN+ES, MLS. Brickell high-rise to Coral Gables villa. WhatsApp brochure, filter by beds/area/price.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/realestate-2/listings" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">View listings</Link>
            <Link href="/demos/realestate-2/contact" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Get brochure</Link>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80&auto=format&fit=crop" alt="Harbor" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">95 reviews</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">200+</div><div className="text-xs text-zinc-500">Deals closed</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">EN+ES</div><div className="text-xs text-zinc-500">Bilingual</div></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Listings</h2><Link href="/demos/realestate-2/listings" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {listings.slice(0,6).map(l=>(
            <Link key={l.id} href={`/demos/realestate-2/listings/${l.id}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
              <Image src={l.image} alt={l.title} width={400} height={250} className="h-36 w-full object-cover border-b" />
              <div className="p-4"><div className="font-bold">{l.title}</div><div className="text-sm text-zinc-500">{l.beds}BR • {l.sqft} sqft • {l.area}</div><div className="text-sm bg-zinc-900 text-white inline-block px-2 py-1 rounded-full mt-1">{l.price}</div></div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">Agents</h3><Link href="/demos/realestate-2/agents" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-3 grid md:grid-cols-4 gap-4">
          {agents.slice(0,4).map(a=>(
            <Link key={a.id} href={`/demos/realestate-2/agents/${a.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={a.image} alt={a.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
              <div><div className="font-bold text-sm">{a.name}</div><div className="text-xs text-zinc-500">{a.role} • EN+ES</div></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
