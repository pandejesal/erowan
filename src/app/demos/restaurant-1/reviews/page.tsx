import { reviews } from "@/lib/mocks/restaurant1";

export const metadata = {
  title: "Reviews — Mira Cafe JLT • 4.7 ★",
  description: "Loved in JLT, 312 reviews.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/reviews" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Loved in JLT</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {reviews.map(r=>(
          <div key={r.id} className="bg-white border rounded-2xl p-5 text-sm">“{r.text}”<div className="mt-2 text-xs font-bold">— {r.author} ★★★★★</div></div>
        ))}
      </div>
    </div>
  );
}
