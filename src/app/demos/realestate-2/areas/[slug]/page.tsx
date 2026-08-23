import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { areas, getArea, listings } from "@/lib/mocks/realestate2";
export function generateStaticParams(){ return areas.map(a=>({slug:a.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const a=getArea(params.slug);
  if(!a) return {};
  return { title: `${a.name} — ${a.avgPrice} | Harbor Realty`, description: a.desc, alternates:{canonical:`https://erowan.com/demos/realestate-2/areas/${a.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const a=getArea(params.slug);
  if(!a) return notFound();
  const list=listings.filter(l=>l.areaSlug===a.slug);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/realestate-2/areas" className="underline">Areas</Link> / {a.name}</div>
      <h1 className="text-3xl font-serif font-bold mt-2">{a.name} — {a.avgPrice} avg</h1>
      <p className="text-sm text-zinc-600 mt-2">{a.desc}</p>
      <Image src={a.image} alt={a.name} width={800} height={400} className="mt-6 rounded-2xl w-full object-cover border h-[320px]" />
      <div className="mt-6 font-bold">Listings in {a.name} — {list.length}</div>
      <div className="mt-3 grid md:grid-cols-3 gap-4">{list.map(l=>(
        <Link key={l.id} href={`/demos/realestate-2/listings/${l.id}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
          <Image src={l.image} alt={l.title} width={400} height={250} className="h-32 w-full object-cover border-b" />
          <div className="p-4"><div className="font-bold">{l.title}</div><div className="text-xs bg-zinc-900 text-white inline-block px-2 py-0.5 rounded-full">{l.price}</div></div>
        </Link>
      ))}</div>
    </div>
  );
}
