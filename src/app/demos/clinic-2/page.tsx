import Link from "next/link";
import Image from "next/image";
import { services, doctors, reviews } from "@/lib/mocks/clinic2";

export const metadata = {
  title: "Al Noor Clinic — Berlin Mitte | GP & Dental • GDPR Safe • English + German",
  description: "German + expat care. Doctor credentials, map, insurance, WhatsApp booking — GDPR safe, no data stored. Mitte 10 yrs.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2" },
  openGraph: {
    title: "Al Noor — Berlin | Demo",
    description: "Care that feels calm • GDPR safe",
    url: "https://erowan.com/demos/clinic-2",
    images: [{ url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop" }],
  },
};

export default function Page(){
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"MedicalClinic","name":"Al Noor Clinic","address":{"@type":"PostalAddress","addressLocality":"Berlin Mitte"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"180"}})}} />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xs tracking-widest border px-2 py-1 rounded-full bg-white inline-block">★ 4.8 • MITTE • GDPR SAFE • DE + EN</div>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">Care that<br /><span className="text-zinc-400">feels calm.</span></h1>
          <p className="mt-4 text-[17px] leading-7 text-zinc-600 max-w-[48ch]">German + expat care. Doctor credentials, map, insurance, WhatsApp booking — no data stored, GDPR safe.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/demos/clinic-2/booking" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-bold">Book consultation — €45</Link>
            <Link href="/demos/clinic-2/services" className="px-6 py-3 bg-white border rounded-full text-sm font-bold">Services</Link>
          </div>
        </div>
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80&auto=format&fit=crop" alt="Al Noor" width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-zinc-900 text-white p-4 text-center"><div className="text-xl font-bold">4.8 ★</div><div className="text-xs text-zinc-400">180 reviews</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">6k+</div><div className="text-xs text-zinc-500">Patients</div></div>
          <div className="rounded-xl border bg-white p-4 text-center"><div className="text-xl font-bold">10 yrs</div><div className="text-xs text-zinc-500">Mitte</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Services</h2><Link href="/demos/clinic-2/services" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {services.map(s=>(
            <Link key={s.slug} href={`/demos/clinic-2/services/${s.slug}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
              <div className="flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-baseline justify-between"><h2 className="text-2xl font-serif font-bold">Doctors</h2><Link href="/demos/clinic-2/doctors" className="text-xs underline tracking-widest">ALL →</Link></div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {doctors.slice(0,3).map(d=>(
            <Link key={d.id} href={`/demos/clinic-2/doctors/${d.id}`} className="bg-white border rounded-2xl p-4 flex gap-3 hover:shadow-sm">
              <Image src={d.image} alt={d.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{d.name}</div><div className="text-sm text-zinc-600">{d.role}</div><div className="text-xs">★ {d.rating} • {d.languages.join(" + ")}</div></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <h3 className="font-serif font-bold">Patient stories</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          {reviews.map(r=>(
            <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div></div>
          ))}
        </div>
        <div className="mt-4 text-center"><Link href="/demos/clinic-2/blog" className="text-xs underline tracking-widest">BLOG →</Link></div>
      </section>
    </div>
  );
}
