import { stockists } from "@/lib/mocks/other2";
export const metadata = { title: "Stockists — Craft Brooklyn", description: "BK, MH, LA, LDN stockists.", alternates:{canonical:"https://erowan.com/demos/other-2/stockists"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Stockists — Craft</h1>
      <p className="text-sm text-zinc-600">Brooklyn, Manhattan, LA, London. Wholesale on request.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {stockists.map(s=>(
          <div key={s.name} className="bg-white border rounded-2xl p-5">
            <div className="font-bold">{s.name}</div><div className="text-sm text-zinc-600">{s.city} • {s.address}</div><a href={`https://maps.google.com/?q=${encodeURIComponent(s.address)}`} className="text-xs underline mt-1 inline-block">Maps →</a>
          </div>
        ))}
      </div>
    </div>
  );
}
