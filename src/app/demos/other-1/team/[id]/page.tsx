import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { team, getPerson, cases } from "@/lib/mocks/other1";
export function generateStaticParams(){ return team.map(p=>({id:p.id})); }
export function generateMetadata({params}:{params:{id:string}}){
  const p=getPerson(params.id);
  if(!p) return {};
  return { title: `${p.name} — ${p.role} | North`, description: p.bio, alternates:{canonical:`https://erowan.com/demos/other-1/team/${p.id}`} };
}
export default function Page({params}:{params:{id:string}}){
  const p=getPerson(params.id);
  if(!p) return notFound();
  const led=cases.slice(0,2);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-1/team" className="underline">Team</Link> / {p.name}</div>
      <div className="mt-4 flex gap-6">
        <Image src={p.image} alt={p.name} width={120} height={120} className="h-28 w-28 rounded-full object-cover border" />
        <div><h1 className="text-3xl font-serif font-bold">{p.name}</h1><div className="text-sm text-zinc-600">{p.role}</div><p className="text-sm text-zinc-700 mt-2 max-w-[50ch]">{p.bio}</p><div className="mt-2 flex gap-1">{p.expertise.map(e=><span key={e} className="border rounded-full px-2 py-1 text-xs bg-white">{e}</span>)}</div><Link href={`/demos/other-1/booking?person=${p.id}`} className="mt-4 inline-block px-6 py-3 bg-[#0F1A2E] text-white rounded-full font-bold text-sm">Book with {p.name.split(' ')[0]} →</Link></div>
      </div>
      <div className="mt-8"><div className="font-bold">Cases led</div><div className="mt-2 grid md:grid-cols-2 gap-3">{led.map(c=><Link key={c.slug} href={`/demos/other-1/case-studies/${c.slug}`} className="bg-white border rounded-xl p-3 hover:shadow-sm"><div className="font-bold text-sm">{c.title}</div><div className="text-xs text-zinc-500">{c.result} →</div></Link>)}</div></div>
    </div>
  );
}
