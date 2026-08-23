import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/mocks/salon2";

export const metadata = {
  title: "Services & Prices — Bloom Spa SoHo New York | $40–$400",
  description: "Hot oils, hydra, wax, nails, hair spa, bridal. SoHo calm, English + Spanish, book at midnight.",
  alternates: { canonical: "https://erowan.com/demos/salon-2/services" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Services & Prices</h1>
      <p className="text-sm text-zinc-600 mt-2">SoHo calm, English + Spanish. Most booked: Aroma Massage $85.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {services.map(s=>(
          <Link key={s.slug} href={`/demos/salon-2/services/${s.slug}`} className={`bg-white border rounded-2xl overflow-hidden hover:shadow-sm ${s.featured?"border-zinc-900":"border-zinc-200"}`}>
            <Image src={s.image} alt={s.name} width={500} height={300} className="h-44 w-full object-cover border-b" />
            <div className="p-5">
              {s.featured && <div className="text-[10px] tracking-widest bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">MOST BOOKED</div>}
              <div className="mt-2 flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="text-xs text-zinc-500 mt-1">{s.benefits.join(" • ")}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
