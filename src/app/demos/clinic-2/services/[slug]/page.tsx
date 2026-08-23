import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, doctors } from "@/lib/mocks/clinic2";

export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return {};
  return { title: `${s.name} — ${s.price} | Al Noor Berlin`, description: s.longDesc, alternates:{canonical:`https://erowan.com/demos/clinic-2/services/${s.slug}`} };
}

export default function Page({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return notFound();
  const related = doctors.filter(d=>d.focus.includes(s.slug));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/clinic-2" className="underline">Home</Link> / <Link href="/demos/clinic-2/services" className="underline">Services</Link> / {s.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{s.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{s.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{s.duration}</span><span className="bg-zinc-100 border px-3 py-1 rounded-full text-xs">GDPR SAFE</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{s.longDesc}</p>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Steps</div>
            <ol className="mt-2 text-sm space-y-1 list-decimal pl-5">{s.steps.map(x=><li key={x}>{x}</li>)}</ol>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/clinic-2/booking?service=${s.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book — {s.price} →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp</a>
          </div>
          {related.length>0 && (
            <div className="mt-6">
              <div className="font-bold text-sm">Doctors for {s.name}</div>
              <div className="mt-2 grid gap-3">
                {related.map(d=>(
                  <Link key={d.id} href={`/demos/clinic-2/doctors/${d.id}`} className="bg-white border rounded-2xl p-3 flex gap-3 hover:shadow-sm">
                    <Image src={d.image} alt={d.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
                    <div><div className="font-bold text-sm">{d.name}</div><div className="text-xs text-zinc-500">{d.role}</div></div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <Image src={s.image} alt={s.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-4 bg-zinc-50 border rounded-2xl p-4 text-xs text-zinc-600">GDPR safe • No data stored • WhatsApp only • Mitte 10 yrs.</div>
        </div>
      </div>
    </div>
  );
}
