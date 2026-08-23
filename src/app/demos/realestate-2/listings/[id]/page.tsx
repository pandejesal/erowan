import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { listings, getListing, getAgent } from "@/lib/mocks/realestate2";
export function generateStaticParams(){ return listings.map(l=>({id:l.id})); }
export function generateMetadata({params}:{params:{id:string}}){
  const l=getListing(params.id);
  if(!l) return {};
  return { title: `${l.title} — ${l.price} | Harbor Realty`, description: l.longDesc, alternates:{canonical:`https://erowan.com/demos/realestate-2/listings/${l.id}`} };
}
export default function Page({params}:{params:{id:string}}){
  const l=getListing(params.id);
  if(!l) return notFound();
  const agent=getAgent(l.agentId);
  const mortgage = Math.round(parseInt(l.price.replace(/[^0-9]/g,''))*0.8/300);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/realestate-2/listings" className="underline">Listings</Link> / {l.title}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{l.title}</h1>
          <div className="mt-2 flex gap-2"><span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{l.price}</span><span className="bg-white border px-3 py-1 rounded-full text-sm">{l.beds}BR • {l.baths}BA • {l.sqft} sqft</span><span className="bg-zinc-100 border px-3 py-1 rounded-full text-xs">{l.area}</span></div>
          <p className="mt-4 text-sm leading-7 text-zinc-700">{l.longDesc}</p>
          {l.longDescEs && <p className="mt-2 text-sm text-zinc-600 italic">ES: {l.longDescEs}</p>}
          <div className="mt-4 flex gap-2 flex-wrap">{l.features.map(f=><span key={f} className="border rounded-full px-2 py-1 text-xs bg-zinc-50">{f}</span>)}</div>
          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold">Mortgage — ${mortgage}/mo</div>
            <div className="text-xs text-zinc-500">80% loan, 300 mo, 6.5% demo. Bilingual.</div>
            <div className="mt-2 flex gap-2 text-xs">
              <button className="border rounded-full px-2 py-1 bg-white">EN</button>
              <button className="border rounded-full px-2 py-1 bg-white">ES</button>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Link href={`/demos/realestate-2/booking?listing=${l.id}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book viewing →</Link>
            <a href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi Harbor — brochure for '+l.title)}`} className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp brochure</a>
          </div>
          {agent && (
            <Link href={`/demos/realestate-2/agents/${agent.id}`} className="mt-6 flex gap-3 bg-white border rounded-2xl p-4 hover:shadow-sm">
              <Image src={agent.image} alt={agent.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
              <div><div className="font-bold">{agent.name}</div><div className="text-xs text-zinc-500">{agent.role} • EN+ES</div></div>
            </Link>
          )}
        </div>
        <div>
          <Image src={l.image} alt={l.title} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-3 grid grid-cols-3 gap-3">{l.gallery.map((g,i)=><Image key={i} src={g} alt="gallery" width={300} height={300} className="rounded-xl h-24 w-full object-cover border" />)}</div>
        </div>
      </div>
    </div>
  );
}
