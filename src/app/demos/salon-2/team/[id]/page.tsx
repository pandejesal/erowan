import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { therapists, getTherapist, services } from "@/lib/mocks/salon2";

export function generateStaticParams(){return therapists.map(t=>({id:t.id}));}
export function generateMetadata({params}:{params:{id:string}}){
  const t=getTherapist(params.id);
  if(!t) return {};
  return {title:`${t.name} — ${t.specialty} | Bloom Spa`, description:t.bio, alternates:{canonical:`https://erowan.com/demos/salon-2/team/${t.id}`}};
}

export default function Page({params}:{params:{id:string}}){
  const t=getTherapist(params.id);
  if(!t) return notFound();
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/salon-2/team" className="underline">Team</Link> / {t.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex gap-4">
            <Image src={t.image} alt={t.name} width={120} height={120} className="h-24 w-24 rounded-full object-cover border" />
            <div><h1 className="text-2xl font-serif font-bold">{t.name}</h1><div className="text-sm text-zinc-600">{t.specialty}</div><div className="text-sm">★ {t.rating} • {t.languages.join(" + ")} • {t.instagram}</div></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-700">{t.bio}</p>
          <Link href={`/demos/salon-2/booking?staff=${t.id}`} className="mt-6 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book with {t.name} →</Link>
        </div>
        <div>
          <div className="font-bold">Services</div>
          <div className="mt-3 grid gap-3">
            {services.slice(0,3).map(s=>(
              <Link key={s.slug} href={`/demos/salon-2/services/${s.slug}`} className="bg-white border rounded-2xl p-4 flex justify-between hover:shadow-sm">
                <div><div className="font-bold">{s.name}</div><div className="text-xs text-zinc-500">{s.duration}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
