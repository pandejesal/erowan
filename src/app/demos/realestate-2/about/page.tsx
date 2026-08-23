export const metadata = { title: "About — MLS | Harbor Realty", description: "300+ units, MLS, Brickell.", alternates:{canonical:"https://erowan.com/demos/realestate-2/about"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">About — Harbor Realty</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6"><p className="text-sm leading-6 text-zinc-700">Harbor Realty Brickell: MLS, 300+ units sold, 4.8 ★, 120 reviews. We own leads, not just listings. WhatsApp capture beats portals. Off-plan Tilal, ready Marina, JVC studio.</p><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">300+</div><div className="text-xs">Units</div></div><div className="rounded-xl border p-3"><div className="font-bold">MLS</div><div className="text-xs">Licensed</div></div><div className="rounded-xl border p-3"><div className="font-bold">4.8 ★</div><div className="text-xs">120 reviews</div></div></div></div>
        <div className="space-y-4"><div className="bg-white border rounded-2xl p-6"><div className="font-bold">Why not portals?</div><p className="text-sm text-zinc-600 mt-1">Portals charge 30%, we own WhatsApp leads free.</p></div><div className="bg-white border rounded-2xl p-6"><div className="font-bold">Press</div><p className="text-sm text-zinc-600 mt-1">Time Out Dubai nominee.</p></div></div>
      </div>
    </div>
  );
}
