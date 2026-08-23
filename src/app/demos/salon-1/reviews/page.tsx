import { reviews, services } from "@/lib/mocks/salon1";

export const metadata = {
  title: "Reviews — 4.9 ★ 312 Reviews | Noura Salon",
  description: "24 verified reviews, filter by service. Ladies-only, pay at store, free reschedule.",
  alternates: { canonical: "https://erowan.com/demos/salon-1/reviews" },
};

export default function Page({ searchParams }: { searchParams: { service?: string } }) {
  const filter = searchParams.service;
  const list = filter ? reviews.filter(r=>r.serviceSlug===filter) : reviews;
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Loved in Dubai Marina</h1>
      <div className="mt-2 flex gap-2 flex-wrap text-xs">
        <a href="/demos/salon-1/reviews" className={`px-3 py-1 rounded-full border ${!filter?"bg-zinc-900 text-white":"bg-white"}`}>ALL</a>
        {services.map(s=>(
          <a key={s.slug} href={`/demos/salon-1/reviews?service=${s.slug}`} className={`px-3 py-1 rounded-full border ${filter===s.slug?"bg-zinc-900 text-white":"bg-white"}`}>{s.name}</a>
        ))}
      </div>
      <div className="mt-3 text-xs text-zinc-500">Showing {list.length} of {reviews.length} • 4.9 ★ average</div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {list.map(r=>(
          <div key={r.id} className="bg-white border rounded-2xl p-5">
            <div className="text-sm leading-relaxed">“{r.text}”</div>
            <div className="mt-3 text-xs font-bold">— {r.author} • ★★★★★</div>
            <div className="text-xs text-zinc-500">{r.serviceSlug} • {r.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
