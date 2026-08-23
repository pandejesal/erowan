import { reviews, treatments } from "@/lib/mocks/clinic1";

export const metadata = {
  title: "Reviews — 4.9 ★ • Patient Stories | SmileCare DHCC",
  description: "12 verified stories, filter by treatment. Trust before the chair.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/reviews" },
};

export default function Page({ searchParams }: { searchParams: { treatment?: string } }){
  const filter=searchParams.treatment;
  const list=filter? reviews.filter(r=>r.treatmentSlug===filter):reviews;
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Patient stories</h1>
      <div className="mt-2 flex gap-2 flex-wrap text-xs">
        <a href="/demos/clinic-1/reviews" className={`px-3 py-1 rounded-full border ${!filter?"bg-zinc-900 text-white":"bg-white"}`}>ALL</a>
        {treatments.map(t=>(
          <a key={t.slug} href={`/demos/clinic-1/reviews?treatment=${t.slug}`} className={`px-3 py-1 rounded-full border ${filter===t.slug?"bg-zinc-900 text-white":"bg-white"}`}>{t.name}</a>
        ))}
      </div>
      <div className="mt-3 text-xs text-zinc-500">Showing {list.length} of {reviews.length} • 4.9 ★</div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {list.map(r=>(
          <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div><div className="text-xs text-zinc-500">{r.treatmentSlug} • {r.date}</div></div>
        ))}
      </div>
    </div>
  );
}
