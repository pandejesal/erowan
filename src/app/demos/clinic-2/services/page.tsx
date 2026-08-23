import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/mocks/clinic2";

export const metadata = {
  title: "Services — Al Noor Berlin Mitte | GP, Dental, Lab",
  description: "6 services, GP €45, dental €35, lab same day. GDPR safe, Mitte 10 yrs.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/services" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Services</h1>
      <p className="text-sm text-zinc-600 mt-2">GDPR safe • No data stored • DE + EN + AR • Mitte U6.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {services.map(s=>(
          <Link key={s.slug} href={`/demos/clinic-2/services/${s.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={s.image} alt={s.name} width={500} height={300} className="h-36 w-full object-cover border-b" />
            <div className="p-5">
              <div className="flex justify-between"><div className="font-bold">{s.name}</div><div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold">{s.price}</div></div>
              <div className="text-sm text-zinc-600 mt-1">{s.desc} • {s.duration}</div>
              <div className="mt-3 text-xs font-bold underline">View → Book</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
