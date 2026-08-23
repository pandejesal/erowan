import Link from "next/link";
import Image from "next/image";
import { services, therapists, gallery, reviews } from "@/lib/mocks/salon2";

export const metadata = {
  title: "Bloom Spa — SoHo New York | Boutique Massage & Facial — Book $85",
  description: "Boutique spa in SoHo. Hot oils, calm, 60 min quiet. English + Spanish. Book at midnight, 10am slot. SoHo calm, premium care.",
  alternates: { canonical: "https://erowan.com/demos/salon-2" },
  openGraph: {
    title: "Bloom Spa — SoHo New York | Demo by Erowan",
    description: "NYC calm. Book in one tap. Boutique spa SoHo.",
    url: "https://erowan.com/demos/salon-2",
    images: [{ url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"DaySpa","name":"Bloom Spa","address":{"@type":"PostalAddress","addressLocality":"SoHo New York"},"priceRange":"$40 - $400","telephone":"+919999999999","url":"https://erowan.com/demos/salon-2","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"210"}})}} />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • 210 REVIEWS • SOHO • EN + ES</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">NYC calm.<br /><span className="text-zinc-400">Book in one tap.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">Boutique spa in SoHo. Real-time slots, staff picks, WhatsApp confirm in 30 seconds. English + Spanish.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/salon-2/booking" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book on WhatsApp</Link>
            <Link href="/demos/salon-2/services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">See prices</Link>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">4.8 ★</div><div className="text-xs">210 reviews</div></div>
            <div className="rounded-xl border bg-white p-3"><div className="font-bold">3k+</div><div className="text-xs">Monthly</div></div>
            <div className="rounded-xl border bg-white p-3"><div className="font-bold">EN + ES</div><div className="text-xs">SoHo</div></div>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&q=80&auto=format&fit=crop" alt="Bloom Spa" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Services & Prices</h2><Link href="/demos/salon-2/services" className="text-xs underline tracking-widest">VIEW ALL →</Link></div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.slice(0,6).map(s=>(
            <Link key={s.slug} href={`/demos/salon-2/services/${s.slug}`} className={`bg-white border rounded-2xl p-5 hover:shadow-sm ${s.featured?"border-zinc-900":"border-zinc-200"}`}>
              {s.featured && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">Therapists</h3><Link href="/demos/salon-2/team" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {therapists.slice(0,3).map(p=>(
            <Link key={p.id} href={`/demos/salon-2/team/${p.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={p.image} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{p.name}</div><div className="text-sm text-zinc-600">{p.specialty}</div><div className="text-xs">★ {p.rating} • {p.languages.join(" + ")}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">SoHo Garden</h3><Link href="/demos/salon-2/garden" className="text-xs underline tracking-widest">GARDEN →</Link></div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {gallery.slice(0,6).map((src,i)=>(<Image key={i} src={src} alt={`garden ${i}`} width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <div className="flex items-baseline justify-between"><h3 className="font-serif font-bold">Loved in New York</h3><Link href="/demos/salon-2/reviews" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {reviews.slice(0,3).map(r=>(
            <div key={r.id} className="bg-white border rounded-2xl p-5">
              <div className="text-sm leading-relaxed">“{r.text}”</div>
              <div className="mt-3 text-xs font-bold">— {r.author} ★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="font-serif font-bold">Explore Bloom</h3>
        <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
          {[
            { href:"/demos/salon-2/about", title:"About", desc:"SoHo calm, EN+ES"},
            { href:"/demos/salon-2/blog", title:"Journal", desc:"Calm, garden tips"},
            { href:"/demos/salon-2/faq", title:"FAQ", desc:"Scent, garden, pay"},
            { href:"/demos/salon-2/booking", title:"Book", desc:"Service → Therapist → WhatsApp"},
          ].map(c=>(
            <Link key={c.href} href={c.href} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
              <div className="font-bold">{c.title}</div><div className="text-xs text-zinc-600 mt-1">{c.desc}</div><div className="mt-2 text-xs font-bold underline">Open →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
