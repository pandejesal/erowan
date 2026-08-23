import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/mocks/salon1";

export const metadata = {
  title: "Services & Prices — Noura Salon Dubai Marina | AED 90–600",
  description: "See prices, pick a slot, confirm on WhatsApp in 30 seconds. Hair, spa, nails, bridal — ladies-only, pay at store.",
  alternates: { canonical: "https://erowan.com/demos/salon-1/services" },
};

export default function Page() {
  const categories: Array<"all"|"hair"|"spa"|"nails"|"bridal"> = ["all","hair","spa","nails","bridal"];
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-serif font-bold">Services & Prices</h1>
        <span className="text-xs tracking-widest text-zinc-500">AED • INCLUSIVE</span>
      </div>
      <p className="text-sm text-zinc-600 mt-2">Transparent, no hidden fees. Tap to view details → Book on WhatsApp. AED 120 most booked.</p>

      <div className="mt-6 flex gap-2 flex-wrap">
        {categories.map(c=>(
          <span key={c} className={`px-3 py-1 rounded-full border text-xs ${c==="all"?"bg-zinc-900 text-white border-zinc-900":"bg-white"}`}>{c.toUpperCase()}</span>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {services.map(s=>(
          <Link key={s.slug} href={`/demos/salon-1/services/${s.slug}`} className={`bg-white border rounded-2xl overflow-hidden hover:shadow-sm group ${s.featured?"border-zinc-900":"border-zinc-200"}`}>
            <Image src={s.image} alt={s.name} width={500} height={300} className="h-44 w-full object-cover border-b" />
            <div className="p-5">
              {s.featured && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between items-start">
                <div className="font-bold group-hover:underline">{s.name}</div>
                <div className="text-sm font-bold bg-zinc-900 text-white px-2 py-1 rounded-full">{s.price}</div>
              </div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="text-xs text-zinc-500 mt-2">{s.includes.join(" • ")}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-zinc-900 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between gap-4 items-center">
        <div>
          <div className="font-bold">Not sure which service?</div>
          <div className="text-sm text-zinc-400">WhatsApp Layla — free consult, 30 seconds.</div>
        </div>
        <Link href="/demos/salon-1/booking" className="px-6 py-3 bg-white text-zinc-900 rounded-full font-bold">Book on WhatsApp →</Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://erowan.com/demos/salon-1"},{"@type":"ListItem","position":2,"name":"Services","item":"https://erowan.com/demos/salon-1/services"}]})}} />
    </div>
  );
}
