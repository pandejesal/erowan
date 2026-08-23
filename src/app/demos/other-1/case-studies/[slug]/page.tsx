import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cases, getCase, getService } from "@/lib/mocks/other1";
export function generateStaticParams(){ return cases.map(c=>({slug:c.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const c=getCase(params.slug);
  if(!c) return {};
  return { title: `${c.title} | North`, description: c.story, alternates:{canonical:`https://erowan.com/demos/other-1/case-studies/${c.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const c=getCase(params.slug);
  if(!c) return notFound();
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-1/case-studies" className="underline">Case studies</Link> / {c.title}</div>
      <h1 className="mt-2 text-3xl font-serif font-bold text-[#0F1A2E]">{c.title}</h1>
      <div className="text-sm text-zinc-600">{c.client} • {c.result}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <div className="grid grid-cols-3 gap-3">
            {c.metrics.map(m=>(
              <div key={m.label} className="bg-[#0F1A2E] text-white rounded-xl p-3 text-center"><div className="text-lg font-bold">{m.value}</div><div className="text-xs text-zinc-300">{m.label}</div></div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{c.story}</p>
          <div className="mt-4 bg-white border rounded-2xl p-4 text-sm">“{c.quote}”<div className="text-xs text-zinc-500 mt-1">— {c.client}</div></div>
          <div className="mt-4 flex gap-2">{c.services.map(slug=>{
            const s=getService(slug);
            if(!s) return null;
            return <Link key={slug} href={`/demos/other-1/services/${slug}`} className="border rounded-full px-2 py-1 text-xs bg-white hover:bg-zinc-50">{s.name} →</Link>;
          })}</div>
          <Link href={`/demos/other-1/booking?service=${c.services[0]}`} className="mt-6 inline-block px-6 py-3 bg-[#0F1A2E] text-white rounded-full font-bold">Book similar →</Link>
        </div>
        <div>
          <Image src={c.image} alt={c.title} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
        </div>
      </div>
    </div>
  );
}
