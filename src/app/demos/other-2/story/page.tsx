export const metadata = { title: "Story — Craft Brooklyn Since 2018", description: "Navy Yard studio, wheel-thrown, indigo-dyed. Since 2018.", alternates:{canonical:"https://erowan.com/demos/other-2/story"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Story — Craft</h1>
      <p className="mt-2 text-sm leading-7 text-zinc-700">Navy Yard, Brooklyn — since 2018. Wheel-thrown ceramics, indigo-dyed textiles, hand-joined wood. Small studio, 2 kilns, 1 loom. We make in batches of 12, sell worldwide in 3 days. No Etsy fees, no middlemen. From Brooklyn to LA, London, Marfa — 63 Flushing Ave. Every piece signed, 30-day returns, wholesale on request.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">Since 2018</div><div className="text-xs text-zinc-500 mt-1">5k+ orders, 312 reviews 4.9★, 48h site by Erowan.</div></div>
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">Materials</div><div className="text-xs text-zinc-500 mt-1">Stoneware, linen, oak, ash, indigo, beeswax.</div></div>
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">Studio</div><div className="text-xs text-zinc-500 mt-1">63 Flushing Ave, Navy Yard, Brooklyn, NY 11205.</div></div>
      </div>
    </div>
  );
}
