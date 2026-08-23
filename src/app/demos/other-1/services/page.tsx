import Link from "next/link";
import { services } from "@/lib/mocks/other1";
export const metadata = { title: "Services — North Consulting", description: "Strategy Sprint $2k, Ops Review $1.5k, Retainer, Workshop, Due Diligence, Fractional COO. Shoreditch.", alternates:{canonical:"https://erowan.com/demos/other-1/services"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold text-[#0F1A2E]">Services — North</h1>
      <p className="text-sm text-zinc-600">Transparent. 48h site included. Cancel anytime.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {services.map(s=>(
          <Link key={s.slug} href={`/demos/other-1/services/${s.slug}`} className={`bg-white border rounded-2xl p-5 hover:shadow-sm ${s.featured?"border-[#0F1A2E]":""}`}>
            {s.featured && <div className="text-[10px] tracking-widest bg-[#0F1A2E] text-white inline-block px-2 py-0.5 rounded-full">MOST POPULAR</div>}
            <div className="mt-1 font-bold">{s.name}</div><div className="bg-[#0F1A2E] text-white inline-block px-2 py-1 rounded-full text-sm font-bold mt-1">{s.price} • {s.duration}</div>
            <div className="text-sm text-zinc-600 mt-1">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
