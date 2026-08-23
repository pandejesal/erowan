import Link from "next/link";
import Image from "next/image";
import { menu, chefs, reviews } from "@/lib/mocks/restaurant2";

export const metadata = {
  title: "Al Hadi Grill — Soho London | Charcoal Halal Grill — Order on WhatsApp",
  description: "Modifiers for spice & sides, WhatsApp checkout. No commission, halal. Soho lunch to late night.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-2" },
  openGraph: {
    title: "Al Hadi Grill — Soho | Demo",
    description: "London grill, ordered in seconds • Halal",
    url: "https://erowan.com/demos/restaurant-2",
    images: [{ url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Restaurant","name":"Al Hadi Grill","address":{"@type":"PostalAddress","addressLocality":"Soho London"},"servesCuisine":"Middle Eastern","priceRange":"£6–45","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"210"}})}} />
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • SOHO • HALAL • CHARCOAL</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">London grill,<br /><span className="text-zinc-400">ordered in seconds.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Modifiers for spice & sides, WhatsApp checkout. No commission, halal, no app. Soho lunch to late night.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/restaurant-2/order" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Order WhatsApp</Link>
            <Link href="/demos/restaurant-2/menu" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">See menu</Link>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=80&auto=format&fit=crop" alt="Al Hadi" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">210 reviews</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">900+</div><div className="text-xs text-zinc-500">Orders/mo</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">12 min</div><div className="text-xs text-zinc-500">Avg. grill</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Menu</h2><Link href="/demos/restaurant-2/menu" className="text-xs underline tracking-widest">FULL MENU →</Link></div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {menu.slice(0,6).map(s=>(
            <Link key={s.slug} href={`/demos/restaurant-2/menu/${s.slug}`} className="bg-white border rounded-2xl p-5 flex justify-between hover:shadow-sm">
              <div><div className="font-bold">{s.name} {s.halal && <span className="text-xs bg-green-100 border border-green-200 px-1 rounded-full">HALAL</span>}</div><div className="text-sm text-zinc-600">{s.desc}</div></div>
              <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">Chefs</h3><Link href="/demos/restaurant-2/chefs" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {chefs.map(c=>(
            <Link key={c.id} href={`/demos/restaurant-2/chefs/${c.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={c.image} alt={c.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{c.name}</div><div className="text-sm text-zinc-600">{c.role}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Loved in Soho</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {reviews.map(r=>(
            <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div></div>
          ))}
        </div>
      </section>
    </div>
  );
}
