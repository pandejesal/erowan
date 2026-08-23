import Link from "next/link";
import Image from "next/image";
import { menu, chefs, reviews } from "@/lib/mocks/restaurant1";

export const metadata = {
  title: "Mira Cafe — JLT Dubai | Brunch Menu That Orders on WhatsApp — No Commission",
  description: "Tap, customize, WhatsApp order — zero Talabat fees. Table reserve + daily reels. JLT mornings to late nights.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1" },
  openGraph: {
    title: "Mira Cafe — JLT | Demo",
    description: "Menu that orders, not PDFs • JLT • No commission",
    url: "https://erowan.com/demos/restaurant-1",
    images: [{ url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Restaurant","name":"Mira Cafe","address":{"@type":"PostalAddress","addressLocality":"JLT Dubai"},"servesCuisine":"Brunch","priceRange":"AED 28–149","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"312"}})}} />
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.7 • JLT • NO COMMISSION</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Menu that<br /><span className="text-zinc-400">orders, not PDFs.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Tap, customize, WhatsApp order — zero Talabat fees. Table reserve + daily reels. JLT mornings to late nights.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/restaurant-1/order" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Order on WhatsApp</Link>
            <Link href="/demos/restaurant-1/menu" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">See menu</Link>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80&auto=format&fit=crop" alt="Mira Cafe" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.7 ★</div><div className="text-xs text-zinc-400">312 reviews</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">1.2k</div><div className="text-xs text-zinc-500">Orders/mo</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">15 min</div><div className="text-xs text-zinc-500">Avg. prep</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Menu — Tap to order</h2><Link href="/demos/restaurant-1/menu" className="text-xs underline tracking-widest">FULL MENU →</Link></div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {menu.slice(0,6).map(s=>(
            <Link key={s.slug} href={`/demos/restaurant-1/menu/${s.slug}`} className="bg-white border rounded-2xl p-5 flex justify-between hover:shadow-sm">
              <div><div className="font-bold">{s.name}</div><div className="text-sm text-zinc-600">{s.desc}</div></div>
              <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">Chefs</h3><Link href="/demos/restaurant-1/chefs" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {chefs.map(c=>(
            <Link key={c.id} href={`/demos/restaurant-1/chefs/${c.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={c.image} alt={c.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{c.name}</div><div className="text-sm text-zinc-600">{c.role}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Loved in JLT</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {reviews.map(r=>(
            <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div></div>
          ))}
        </div>
        <div className="mt-4 text-center"><Link href="/demos/restaurant-1/reviews" className="text-xs underline tracking-widest">ALL REVIEWS →</Link></div>
      </section>
    </div>
  );
}
