import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { treatments, getTreatment, doctors } from "@/lib/mocks/clinic1";

export function generateStaticParams(){return treatments.map(t=>({slug:t.slug}));}
export function generateMetadata({params}:{params:{slug:string}}){
  const t=getTreatment(params.slug);
  if(!t) return {};
  return {title:`${t.name} — ${t.price} | SmileCare DHCC`, description:t.longDesc, alternates:{canonical:`https://erowan.com/demos/clinic-1/treatments/${t.slug}`}};
}

export default function Page({params}:{params:{slug:string}}){
  const t=getTreatment(params.slug);
  if(!t) return notFound();
  const related = doctors.filter(d=>d.treatments.includes(t.slug));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/clinic-1" className="underline">Home</Link> / <Link href="/demos/clinic-1/treatments" className="underline">Treatments</Link> / {t.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{t.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{t.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{t.duration}</span><span className="bg-[#E6F0FF] border px-3 py-1 rounded-full text-xs">DHCC</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{t.longDesc}</p>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Steps</div>
            <ol className="mt-2 text-sm space-y-1 list-decimal pl-5">{t.steps.map(s=><li key={s}>{s}</li>)}</ol>
          </div>
          <div className="mt-4 bg-zinc-50 border rounded-2xl p-5">
            <div className="font-bold text-sm">Price range</div><div className="text-sm text-zinc-700">{t.priceRange} • Insurance check on WhatsApp.</div>
          </div>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">FAQs</div>
            <div className="mt-2 space-y-2 text-sm">{t.faqs.map(f=><div key={f.q}><span className="font-bold">{f.q}</span> {f.a}</div>)}</div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/clinic-1/booking?treatment=${t.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Request — AED 150 →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp</a>
          </div>
          {related.length>0 && (
            <div className="mt-6">
              <div className="font-bold text-sm">Doctors for {t.name}</div>
              <div className="mt-2 grid gap-3">
                {related.map(d=>(
                  <Link key={d.id} href={`/demos/clinic-1/doctors/${d.id}`} className="bg-white border rounded-2xl p-3 flex gap-3 hover:shadow-sm">
                    <Image src={d.image} alt={d.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
                    <div><div className="font-bold text-sm">{d.name}</div><div className="text-xs text-zinc-500">{d.role} • {d.creds}</div></div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <Image src={t.image} alt={t.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-4 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Before / After — with consent</div>
            <div className="text-xs text-zinc-500">Published only with written consent. Tap to view.</div>
            <details className="mt-3">
              <summary className="cursor-pointer text-sm font-bold underline">View with consent</summary>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Image src={t.image} alt="before" width={300} height={300} className="rounded-xl h-32 w-full object-cover border" />
                <Image src={doctors[0].image} alt="after" width={300} height={300} className="rounded-xl h-32 w-full object-cover border" />
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className="mt-6 sticky bottom-4 bg-zinc-900 text-white rounded-2xl p-4 flex justify-between items-center md:hidden">
        <div className="font-bold text-sm">Request {t.name} — AED 150</div>
        <Link href={`/demos/clinic-1/booking?treatment=${t.slug}`} className="px-4 py-2 bg-white text-zinc-900 rounded-full font-bold text-sm">Book →</Link>
      </div>
    </div>
  );
}
