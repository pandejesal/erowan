import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/lib/mocks/clinic2";

export const metadata = {
  title: "Doctors — Al Noor Berlin Mitte",
  description: "Müller, Fatima, Jonas, Sophie, Ahmed — Mitte 10 yrs, DE+EN+AR.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/doctors" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Doctors</h1>
      <p className="text-sm text-zinc-600 mt-2">Mitte 10 yrs • DE + EN + AR • GDPR safe</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {doctors.map(d=>(
          <Link key={d.id} href={`/demos/clinic-2/doctors/${d.id}`} className="bg-white border rounded-2xl p-5 hover:shadow-sm">
            <div className="flex gap-4">
              <Image src={d.image} alt={d.name} width={80} height={80} className="h-16 w-16 rounded-full object-cover border" />
              <div><div className="font-bold">{d.name}</div><div className="text-sm text-zinc-600">{d.role}</div><div className="text-xs tracking-widest">{d.creds}</div></div>
            </div>
            <div className="mt-3 text-xs text-zinc-600 line-clamp-2">{d.bio}</div>
            <div className="mt-2 text-xs">★ {d.rating} • {d.languages.join(" ")} • {d.focus.join(", ")}</div>
            <div className="mt-3 text-xs font-bold underline">View → Book with {d.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
