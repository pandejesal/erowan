import { reviews, services } from "@/lib/mocks/clinic2";

export const metadata = {
  title: "Reviews — 4.8 ★ • Patient Stories | Al Noor Berlin",
  description: "Patient stories, GDPR safe. Mitte 10 yrs.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/reviews" },
};

export default function Page({ searchParams }: { searchParams: { service?: string }}){
  const filter=searchParams.service;
  const list=filter? reviews.filter(r=>r.serviceSlug===filter):reviews;
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Patient stories</h1>
      <div className="mt-2 flex gap-2 flex-wrap text-xs">
        <a href="/demos/clinic-2/reviews" className={`px-3 py-1 rounded-full border ${!filter?"bg-zinc-900 text-white":"bg-white"}`}>ALL</a>
        {services.map(s=>(
          <a key={s.slug} href={`/demos/clinic-2/reviews?service=${s.slug}`} className={`px-3 py-1 rounded-full border ${filter===s.slug?"bg-zinc-900 text-white":"bg-white"}`}>{s.name}</a>
        ))}
      </div>
      <div className="mt-3 text-xs text-zinc-500">Showing {list.length} of {reviews.length} • 4.8 ★</div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {list.map(r=>(
          <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div><div className="text-xs text-zinc-500">{r.serviceSlug} • {r.date}</div></div>
        ))}
      </div>
    </div>
  );
}
