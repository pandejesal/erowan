import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { agents, getAgent, listings } from "@/lib/mocks/realestate1";
export function generateStaticParams(){ return agents.map(a=>({id:a.id})); }
export function generateMetadata({params}:{params:{id:string}}){
  const a=getAgent(params.id);
  if(!a) return {};
  return { title: `${a.name} — ${a.role} | Vista`, description: a.bio, alternates:{canonical:`https://erowan.com/demos/realestate-1/agents/${a.id}`} };
}
export default function Page({params}:{params:{id:string}}){
  const a=getAgent(params.id);
  if(!a) return notFound();
  const myListings=listings.filter(l=>a.listings.includes(l.id));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/realestate-1/agents" className="underline">Agents</Link> / {a.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex gap-4">
            <Image src={a.image} alt={a.name} width={120} height={120} className="h-24 w-24 rounded-full object-cover border" />
            <div><h1 className="text-2xl font-serif font-bold">{a.name}</h1><div className="text-sm text-zinc-600">{a.role}</div><div className="text-sm">{a.phone} • {a.languages.join(' + ')}</div></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-700">{a.bio}</p>
          <a href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi '+a.name+' — inquiry')}`} className="mt-6 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">WhatsApp {a.name} →</a>
        </div>
        <div>
          <div className="font-bold">Listings</div>
          <div className="mt-3 grid gap-3">{myListings.map(l=>(
            <Link key={l.id} href={`/demos/realestate-1/listings/${l.id}`} className="bg-white border rounded-2xl overflow-hidden flex hover:shadow-sm">
              <Image src={l.image} alt={l.title} width={120} height={100} className="h-24 w-32 object-cover" />
              <div className="p-3"><div className="font-bold text-sm">{l.title}</div><div className="text-xs bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full mt-1">{l.price}</div></div>
            </Link>
          ))}</div>
        </div>
      </div>
    </div>
  );
}
