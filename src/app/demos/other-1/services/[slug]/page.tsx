import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, cases } from "@/lib/mocks/other1";
export function generateStaticParams(){ return services.map(s=>({slug:s.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return {};
  return { title: `${s.name} — ${s.price} | North`, description: s.longDesc, alternates:{canonical:`https://erowan.com/demos/other-1/services/${s.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const s=getService(params.slug);
  if(!s) return notFound();
  const related=cases.filter(c=>c.services.includes(s.slug));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-1/services" className="underline">Services</Link> / {s.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#0F1A2E]">{s.name}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-[#0F1A2E] text-white px-3 py-1 rounded-full text-sm font-bold">{s.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{s.duration}</span>{s.featured && <span className="bg-amber-100 border px-2 py-1 rounded-full text-xs">MOST POPULAR</span>}</div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{s.longDesc}</p>
          <div className="mt-2 text-sm text-zinc-600">For: {s.forWho}</div>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Deliverables</div>
            <ul className="mt-2 space-y-1">{s.deliverables.map(d=><li key={d} className="text-sm flex gap-2"><span className="text-[#0F1A2E]">✓</span>{d}</li>)}</ul>
          </div>
          <Link href={`/demos/other-1/booking?service=${s.slug}`} className="mt-6 inline-block px-6 py-3 bg-[#0F1A2E] text-white rounded-full font-bold">Book {s.name} →</Link>
          {related.length>0 && (
            <div className="mt-6">
              <div className="font-bold text-sm">Case studies using this</div>
              <div className="mt-2 grid gap-2">{related.map(c=><Link key={c.slug} href={`/demos/other-1/case-studies/${c.slug}`} className="bg-white border rounded-xl p-3 hover:shadow-sm text-sm"><div className="font-bold">{c.title}</div><div className="text-xs text-zinc-500">{c.result} →</div></Link>)}</div>
            </div>
          )}
        </div>
        <div>
          <Image src={s.image} alt={s.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-4 bg-zinc-50 border rounded-2xl p-4 text-xs text-zinc-600">Method — discovery → audit → Loom → 48h site. London, worldwide. <Link href="/demos/other-1/about" className="underline">Method →</Link></div>
        </div>
      </div>
    </div>
  );
}
