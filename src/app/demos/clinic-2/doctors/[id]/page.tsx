import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { doctors, getDoctor, services } from "@/lib/mocks/clinic2";

export function generateStaticParams(){ return doctors.map(d=>({id:d.id})); }
export function generateMetadata({params}:{params:{id:string}}){
  const d=getDoctor(params.id);
  if(!d) return {};
  return { title:`${d.name} — ${d.role} | Al Noor`, description:d.bio, alternates:{canonical:`https://erowan.com/demos/clinic-2/doctors/${d.id}`} };
}

export default function Page({params}:{params:{id:string}}){
  const d=getDoctor(params.id);
  if(!d) return notFound();
  const myServices = services.filter(s=>d.focus.includes(s.slug));
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/clinic-2/doctors" className="underline">Doctors</Link> / {d.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex gap-4">
            <Image src={d.image} alt={d.name} width={120} height={120} className="h-24 w-24 rounded-full object-cover border" />
            <div><h1 className="text-2xl font-serif font-bold">{d.name}</h1><div className="text-sm text-zinc-600">{d.role} • {d.creds}</div><div className="text-sm">★ {d.rating} • {d.languages.join(" + ")}</div></div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-700">{d.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">{d.focus.map(f=><Link key={f} href={`/demos/clinic-2/services/${f}`} className="text-xs bg-zinc-900 text-white px-2 py-1 rounded-full">{f}</Link>)}</div>
          <Link href={`/demos/clinic-2/booking?doctor=${d.id}`} className="mt-6 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book with {d.name} →</Link>
        </div>
        <div>
          <div className="font-bold">Services</div>
          <div className="mt-3 grid gap-3">
            {myServices.map(s=>(
              <Link key={s.slug} href={`/demos/clinic-2/services/${s.slug}`} className="bg-white border rounded-2xl p-4 flex justify-between hover:shadow-sm">
                <div><div className="font-bold">{s.name}</div><div className="text-xs text-zinc-500">{s.duration}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold h-fit">{s.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
