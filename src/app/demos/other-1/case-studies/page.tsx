import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/mocks/other1";
export const metadata = { title: "Case Studies — North Consulting", description: "Fintech +32%, Marketplace £400k, SaaS churn −18% — 6 cases.", alternates:{canonical:"https://erowan.com/demos/other-1/case-studies"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Case studies — North</h1>
      <p className="text-sm text-zinc-600">6 cases, metrics, Looms. Proof before pitch.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {cases.map(c=>(
          <Link key={c.slug} href={`/demos/other-1/case-studies/${c.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={c.image} alt={c.title} width={400} height={250} className="h-32 w-full object-cover border-b" />
            <div className="p-4"><div className="font-bold text-sm">{c.title}</div><div className="text-xs text-zinc-500">{c.client}</div><div className="flex gap-2 mt-2">{c.metrics.slice(0,2).map(m=><span key={m.label} className="bg-zinc-900 text-white text-xs px-2 py-1 rounded-full">{m.value} {m.label}</span>)}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
