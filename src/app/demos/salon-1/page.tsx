import Link from "next/link";
import Image from "next/image";
import { services, stylists, gallery, reviews } from "@/lib/mocks/salon1";

export const metadata = {
  title: "Noura Salon — Dubai Marina Ladies Salon | Book on WhatsApp",
  description: "Ladies-only premium hair & spa in Dubai Marina. See prices, pick a slot, confirm on WhatsApp in 30 seconds. Pay at store, free reschedule. EST. 2019.",
  alternates: { canonical: "https://erowan.com/demos/salon-1" },
  openGraph: {
    title: "Noura Salon — Dubai Marina | Demo by Erowan",
    description: "After-hours booking for busy Dubai women. Ladies-only, premium care.",
    url: "https://erowan.com/demos/salon-1",
    images: [{ url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page() {
  return (
    <div>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Noura Salon",
            address: { "@type": "PostalAddress", addressLocality: "Dubai Marina", addressCountry: "AE" },
            priceRange: "AED 90 - AED 600",
            telephone: "+919999999999",
            url: "https://erowan.com/demos/salon-1",
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs tracking-widest border px-2 py-1 rounded-full bg-white">★ 4.9 • 312 REVIEWS • DUBAI MARINA</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Book your glow.<br /><span className="text-zinc-400">No call needed.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">
            After-hours booking for busy Dubai women. See prices, pick a slot, confirm on WhatsApp in 30 seconds. Ladies-only, premium care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/demos/salon-1/booking" className="px-6 py-3 bg-zinc-900 text-white text-sm font-bold rounded-full">Book on WhatsApp — 30s</Link>
            <Link href="/demos/salon-1/services" className="px-6 py-3 bg-white border border-zinc-300 text-sm font-bold rounded-full">See prices</Link>
          </div>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500">
            <span>✓ No commission</span><span>✓ Pay at store</span><span>✓ Free reschedule</span>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border bg-white p-3"><div className="font-bold">4.9 ★</div><div className="text-xs text-zinc-500">312 reviews</div></div>
            <div className="rounded-xl border bg-white p-3"><div className="font-bold">EST. 2019</div><div className="text-xs text-zinc-500">Marina Walk</div></div>
            <div className="rounded-xl border bg-white p-3"><div className="font-bold">3 slots</div><div className="text-xs text-zinc-500">Left today</div></div>
          </div>
        </div>
        <div className="relative">
          <Image src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=1000&q=80&auto=format&fit=crop" alt="Noura Salon interior" width={800} height={600} className="rounded-2xl object-cover h-[420px] w-full border" />
          <div className="absolute -bottom-4 -left-4 bg-white border p-4 rounded-xl shadow-lg hidden md:block">
            <div className="text-xs tracking-widest text-zinc-500">TODAY</div>
            <div className="font-bold">3 slots left • 7pm, 8pm, 8:30pm</div>
            <Link href="/demos/salon-1/booking" className="mt-2 inline-block text-xs bg-zinc-900 text-white px-3 py-1 rounded-full">Claim 7pm →</Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-serif font-bold">Services & Prices</h2>
          <Link href="/demos/salon-1/services" className="text-xs underline tracking-widest">VIEW ALL →</Link>
        </div>
        <p className="text-sm text-zinc-600 mt-1">Tap to book — transparent, no hidden fees. Most guests book Haircut + Blowdry.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.slice(0,6).map(s => (
            <Link key={s.slug} href={`/demos/salon-1/services/${s.slug}`} className={`bg-white border rounded-2xl p-5 hover:shadow-sm hover:border-zinc-300 transition ${s.featured ? "border-zinc-900" : "border-zinc-200"}`}>
              {s.featured && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between items-start">
                <div className="font-bold">{s.name}</div>
                <div className="text-sm font-bold bg-zinc-900 text-white px-2 py-1 rounded-full">{s.price}</div>
              </div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stylists teaser */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif font-bold">Stylists you’ll love</h3>
          <Link href="/demos/salon-1/team" className="text-xs underline tracking-widest">ALL STYLISTS →</Link>
        </div>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {stylists.slice(0,3).map(p => (
            <Link key={p.id} href={`/demos/salon-1/team/${p.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={p.image} alt={p.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-zinc-600">{p.role}</div>
                <div className="text-xs text-zinc-500">★ {p.rating} • {p.reviews} reviews</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif font-bold">Gallery</h3>
          <Link href="/demos/salon-1/gallery" className="text-xs underline tracking-widest">LOOKBOOK →</Link>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {gallery.slice(0,6).map((src,i) => (
            <Image key={i} src={src} alt={`Salon work ${i+1}`} width={400} height={300} className="rounded-xl h-32 w-full object-cover border" />
          ))}
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="mx-auto max-w-7xl px-6 py-8 bg-zinc-50 border-y">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif font-bold">Loved in Dubai Marina</h3>
          <Link href="/demos/salon-1/reviews" className="text-xs underline tracking-widest">ALL REVIEWS →</Link>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {reviews.slice(0,3).map(r => (
            <div key={r.id} className="bg-white border rounded-2xl p-5">
              <div className="text-sm leading-relaxed">“{r.text}”</div>
              <div className="mt-3 text-xs font-bold">— {r.author} ★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="font-serif font-bold">Explore Noura</h3>
        <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
          {[
            { href:"/demos/salon-1/about", title:"Our Story", desc:"EST. 2019, ladies-only, hygiene"},
            { href:"/demos/salon-1/blog", title:"Journal", desc:"Humidity tips, balayage guide"},
            { href:"/demos/salon-1/faq", title:"FAQ", desc:"Reschedule, pay, hammam"},
            { href:"/demos/salon-1/booking", title:"Book", desc:"Service → Stylist → Date → WhatsApp"},
          ].map(c=>(
            <Link key={c.href} href={c.href} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
              <div className="font-bold">{c.title}</div>
              <div className="text-xs text-zinc-600 mt-1">{c.desc}</div>
              <div className="mt-2 text-xs font-bold underline">Open →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 text-center">
        <Link href="/demos/salon-1/booking" className="inline-flex px-8 py-3 bg-zinc-900 text-white font-bold rounded-full">Book on WhatsApp — AED 120 →</Link>
      </section>
    </div>
  );
}
