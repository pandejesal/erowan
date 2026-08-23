import Link from "next/link";
import Image from "next/image";
import { treatments } from "@/lib/mocks/clinic1";

export const metadata = {
  title: "Treatments — SmileCare Dental DHCC | Implant, Braces, Whitening",
  description: "6 treatments, DHA-licensed, price visible, WhatsApp booking. Implant AED 2,800, braces AED 6,500.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/treatments" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Treatments</h1>
      <p className="text-sm text-zinc-600 mt-2">DHA-licensed • Before/after with consent • Insurance Daman/AXA.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {treatments.map(t=>(
          <Link key={t.slug} href={`/demos/clinic-1/treatments/${t.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={t.image} alt={t.name} width={500} height={300} className="h-36 w-full object-cover border-b" />
            <div className="p-5">
              <div className="flex justify-between"><div className="font-bold">{t.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold">{t.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{t.desc} • {t.duration}</div>
              <div className="text-xs text-zinc-500 mt-1">{t.priceRange}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
