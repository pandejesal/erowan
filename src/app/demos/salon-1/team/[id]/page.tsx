import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { stylists, getStylist, services, reviews } from "@/lib/mocks/salon1";

export function generateStaticParams() { return stylists.map(s=>({ id: s.id })); }
export function generateMetadata({ params }: { params: { id: string }}) {
  const s = getStylist(params.id);
  if(!s) return {};
  return { title: `${s.name} — ${s.role} | Noura Salon`, description: s.bio, alternates: { canonical: `https://erowan.com/demos/salon-1/team/${s.id}` } };
}

export default function Page({ params }: { params: { id: string }}) {
  const s = getStylist(params.id);
  if(!s) return notFound();
  const myServices = services.filter(svc=> s.specialties.includes(svc.slug));
  const myReviews = reviews.filter(r=> r.serviceSlug && s.specialties.includes(r.serviceSlug)).slice(0,3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/salon-1/team" className="underline">Team</Link> / {s.name}</div>
      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <div className="flex gap-4">
            <Image src={s.image} alt={s.name} width={120} height={120} className="h-24 w-24 rounded-full object-cover border" />
            <div>
              <h1 className="text-2xl font-serif font-bold">{s.name}</h1>
              <div className="text-sm text-zinc-600">{s.role}</div>
              <div className="text-sm">★ {s.rating} • {s.reviews} reviews • {s.instagram}</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-700">{s.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.specialties.map(sp=> <Link key={sp} href={`/demos/salon-1/services/${sp}`} className="text-xs bg-zinc-900 text-white px-2 py-1 rounded-full">{sp}</Link>)}
          </div>
          <Link href={`/demos/salon-1/booking?staff=${s.id}`} className="mt-6 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book with {s.name} →</Link>
        </div>

        <div>
          <div className="font-bold">Services by {s.name}</div>
          <div className="mt-3 grid gap-3">
            {myServices.map(svc=>(
              <Link key={svc.slug} href={`/demos/salon-1/services/${svc.slug}`} className="bg-white border rounded-2xl p-4 flex justify-between hover:shadow-sm">
                <div><div className="font-bold">{svc.name}</div><div className="text-xs text-zinc-500">{svc.duration}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{svc.price}</div>
              </Link>
            ))}
          </div>

          <div className="mt-6 font-bold">Reviews for {s.name}</div>
          <div className="mt-3 space-y-3">
            {myReviews.map(r=>(
              <div key={r.id} className="bg-white border rounded-2xl p-4 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author}</div></div>
            ))}
          </div>

          <div className="mt-6 bg-zinc-50 border rounded-2xl p-4">
            <div className="font-bold text-sm">Before / After (consent)</div>
            <div className="text-xs text-zinc-500">Photos with consent. Ask {s.name} at booking for portfolio.</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Image src={s.image} alt="before" width={300} height={300} className="rounded-xl h-32 w-full object-cover border" />
              <Image src={myServices[0]?.image || s.image} alt="after" width={300} height={300} className="rounded-xl h-32 w-full object-cover border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
