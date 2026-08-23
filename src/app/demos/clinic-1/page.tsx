import Link from "next/link";
import Image from "next/image";
import { treatments, doctors, reviews } from "@/lib/mocks/clinic1";

export const metadata = {
  title: "SmileCare Dental — DHCC Dubai | DHA-Licensed • Implants & Braces",
  description: "Trust before the chair. DHA-licensed doctors, before/after with consent, insurance Daman/AXA, WhatsApp appointment.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1" },
  openGraph: {
    title: "SmileCare Dental — DHCC | Demo",
    description: "DHA-licensed • 4.9 ★ • Trust before the chair",
    url: "https://erowan.com/demos/clinic-1",
    images: [{ url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Dentist","name":"SmileCare Dental","address":{"@type":"PostalAddress","addressLocality":"DHCC Dubai"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"420"},"priceRange":"AED 200–2800"})}} />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.9 • DHA LICENSED • DHCC 12 yrs</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Trust before<br /><span className="text-zinc-400">the chair.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">DHA-licensed doctors, before/after with consent, insurance Daman/AXA, WhatsApp appointment — no false promise.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/clinic-1/booking" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Request appointment — AED 150</Link>
            <Link href="/demos/clinic-1/doctors" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Doctors</Link>
          </div>
          <div className="mt-4 flex gap-3 text-xs text-zinc-500">
            <span>✓ DHA licensed</span><span>✓ Insurance</span><span>✓ Consent</span>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop" alt="SmileCare" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.9 ★</div><div className="text-xs text-zinc-400">420 reviews</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">8k+</div><div className="text-xs text-zinc-500">Smiles</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">12 yrs</div><div className="text-xs text-zinc-500">DHCC</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Treatments</h2><Link href="/demos/clinic-1/treatments" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {treatments.slice(0,6).map(t=>(
            <Link key={t.slug} href={`/demos/clinic-1/treatments/${t.slug}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
              <div className="flex justify-between"><div className="font-bold">{t.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold">{t.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{t.desc} • {t.duration}</div>
              <div className="text-xs text-zinc-500 mt-2">{t.priceRange}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Doctors</h2><Link href="/demos/clinic-1/doctors" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {doctors.slice(0,3).map(d=>(
            <Link key={d.id} href={`/demos/clinic-1/doctors/${d.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={d.image} alt={d.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{d.name}</div><div className="text-sm text-zinc-600">{d.role} • {d.creds}</div><div className="text-xs">★ {d.rating} • {d.languages.join(" ")}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Patient stories</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {reviews.slice(0,3).map(r=>(
            <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div></div>
          ))}
        </div>
        <div className="mt-4 text-center"><Link href="/demos/clinic-1/reviews" className="text-xs underline tracking-widest">ALL REVIEWS →</Link></div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h3 className="font-serif font-bold">Explore SmileCare</h3>
        <div className="mt-4 grid md:grid-cols-4 gap-4 text-sm">
          {[
            {href:"/demos/clinic-1/about",title:"About",desc:"DHCC 12 yrs, hygiene"},
            {href:"/demos/clinic-1/contact",title:"Contact",desc:"Map, insurance, parking"},
            {href:"/demos/clinic-1/blog",title:"Blog",desc:"Implant heat, braces"},
            {href:"/demos/clinic-1/booking",title:"Book",desc:"Treatment → Doctor → WhatsApp"},
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
