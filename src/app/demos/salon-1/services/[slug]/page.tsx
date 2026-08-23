import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getService, stylists } from "@/lib/mocks/salon1";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.name} — ${s.price}, ${s.duration} | Noura Salon Dubai Marina`,
    description: s.longDesc,
    alternates: { canonical: `https://erowan.com/demos/salon-1/services/${s.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return notFound();
  const relatedStylists = stylists.filter(st => st.specialties.includes(s.slug));

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/salon-1" className="underline">Home</Link> / <Link href="/demos/salon-1/services" className="underline">Services</Link> / {s.name}</div>

      <div className="mt-4 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-serif font-bold">{s.name}</h1>
          <div className="mt-2 flex gap-2">
            <span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-sm font-bold">{s.price}</span>
            <span className="bg-white border px-3 py-1 rounded-full text-sm">{s.duration}</span>
            <span className="bg-amber-100 border border-amber-200 px-3 py-1 rounded-full text-xs">{s.category.toUpperCase()}</span>
          </div>
          <p className="mt-4 text-[15px] leading-7 text-zinc-700">{s.longDesc}</p>

          <div className="mt-6 bg-white border rounded-2xl p-5">
            <div className="font-bold text-sm">Includes</div>
            <ul className="mt-2 text-sm text-zinc-700 space-y-1">
              {s.includes.map(i => <li key={i}>✓ {i}</li>)}
            </ul>
          </div>

          <div className="mt-6 flex gap-3">
            <Link href={`/demos/salon-1/booking?service=${s.slug}`} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Book this — {s.price} →</Link>
            <a href="https://wa.me/919999999999" className="px-6 py-3 bg-white border rounded-full font-bold text-sm">WhatsApp consult</a>
          </div>

          {relatedStylists.length>0 && (
            <div className="mt-6">
              <div className="font-bold text-sm">Done by</div>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {relatedStylists.map(st=>(
                  <Link key={st.id} href={`/demos/salon-1/team/${st.id}`} className="bg-white border rounded-2xl p-3 flex gap-3 hover:shadow-sm">
                    <Image src={st.image} alt={st.name} width={56} height={56} className="h-12 w-12 rounded-full object-cover border" />
                    <div><div className="font-bold text-sm">{st.name}</div><div className="text-xs text-zinc-500">{st.role}</div></div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <Image src={s.image} alt={s.name} width={800} height={600} className="rounded-2xl h-[420px] w-full object-cover border" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {s.gallery.map((g,i)=>(<Image key={i} src={g} alt={`${s.name} ${i+1}`} width={300} height={300} className="rounded-xl h-24 w-full object-cover border" />))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white border rounded-2xl p-5">
        <div className="font-bold">FAQs — {s.name}</div>
        <div className="mt-3 text-sm text-zinc-600 space-y-2">
          <div><span className="font-bold">How long?</span> {s.duration} — book after-hours.</div>
          <div><span className="font-bold">Pay?</span> At store, no pre-pay, free reschedule via WhatsApp.</div>
          <div><span className="font-bold">Ladies-only?</span> Yes, premium, private.</div>
        </div>
      </div>

      <div className="mt-6 sticky bottom-4 bg-zinc-900 text-white rounded-2xl p-4 flex justify-between items-center md:hidden">
        <div className="font-bold text-sm">Book {s.name} — {s.price}</div>
        <Link href={`/demos/salon-1/booking?service=${s.slug}`} className="px-4 py-2 bg-white text-zinc-900 rounded-full font-bold text-sm">Book →</Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":s.name,"offers":{"@type":"Offer","price":s.price.replace("AED ",""),"priceCurrency":"AED"},"description":s.longDesc})}} />
    </div>
  );
}
