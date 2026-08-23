import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, therapists } from "@/lib/mocks/salon2";

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return {};
  return { title: `${s.name} — ${s.price}, ${s.duration} | Bloom Spa`, description: s.longDesc, alternates:{canonical:`https://erowan.com/demos/salon-2/services/${s.slug}`} };
}

export default function Page({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return notFound();
  const related = therapists.slice(0,2);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/salon-2" className="underline">Home</Link> / <Link href="/demos/salon-2/services" className="underline">Services</Link> / {s.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{s.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{s.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{s.duration}</span><span className="bg-[#E8F0E8] border px-3 py-1 rounded-full text-xs">{s.category.toUpperCase()}</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{s.longDesc}</p>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Benefits</div><ul className="mt-2 text-sm space-y-1">{s.benefits.map(b=><li key={b}>✓ {b}</li>)}</ul>
          </div>
          <div className="mt-4 bg-[#E8F0E8] border rounded-2xl p-5">
            <div className="font-bold text-sm">Aftercare</div><ul className="mt-2 text-sm space-y-1">{s.aftercare.map(b=><li key={b}>• {b}</li>)}</ul>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/salon-2/booking?service=${s.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book this — {s.price} →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp</a>
          </div>
          <div className="mt-6 flex gap-3">
            {related.map(t=>(
              <Link key={t.id} href={`/demos/salon-2/team/${t.id}`} className="bg-white border rounded-2xl p-3 flex gap-3 hover:shadow-sm">
                <Image src={t.image} alt={t.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
                <div><div className="font-bold text-sm">{t.name}</div><div className="text-xs text-zinc-500">{t.specialty}</div></div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Image src={s.image} alt={s.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          {/* ScentPicker small demo */}
          <div className="mt-4 bg-white border rounded-2xl p-4">
            <div className="font-bold text-sm">Pick scent</div>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-purple-100 border">Lavender</span>
              <span className="px-3 py-1 rounded-full bg-green-100 border">Eucalyptus</span>
            </div>
            <div className="text-xs text-zinc-500 mt-2">Changes room tint subtly on booking.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
