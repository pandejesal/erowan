import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { chefs, getChef, menu } from "@/lib/mocks/restaurant2";

export function generateStaticParams(){ return chefs.map(c=>({id:c.id})); }
export function generateMetadata({params}:{params:{id:string}}){
  const c=getChef(params.id);
  if(!c) return {};
  return { title:`${c.name} — ${c.role} | Al Hadi Grill`, description:c.bio, alternates:{canonical:`https://erowan.com/demos/restaurant-1/chefs/${c.id}`} };
}

export default function Page({params}:{params:{id:string}}){
  const c=getChef(params.id);
  if(!c) return notFound();
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/restaurant-1/chefs" className="underline">Chefs</Link> / {c.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex gap-4">
            <Image src={c.image} alt={c.name} width={120} height={120} className="h-24 w-24 rounded-full object-cover border" />
            <div><h1 className="text-2xl font-serif font-bold">{c.name}</h1><div className="text-sm text-zinc-600">{c.role}</div></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-700">{c.bio} — Specialty: {c.specialty}.</p>
          <Link href="/demos/restaurant-1/reserve" className="mt-6 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Reserve with {c.name} →</Link>
        </div>
        <div>
          <div className="font-bold">Signature</div>
          <div className="mt-3 grid gap-3">
            {menu.slice(0,2).map(m=>(
              <Link key={m.slug} href={`/demos/restaurant-1/menu/${m.slug}`} className="bg-white border rounded-2xl p-4 flex justify-between hover:shadow-sm">
                <div><div className="font-bold">{m.name}</div><div className="text-xs text-zinc-500">{m.desc}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold h-fit">{m.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
