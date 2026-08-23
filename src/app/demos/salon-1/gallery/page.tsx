import Image from "next/image";
import { gallery } from "@/lib/mocks/salon1";
import Link from "next/link";

export const metadata = {
  title: "Gallery — Lookbook | Noura Salon Dubai Marina",
  description: "Lookbook — 12 signature looks, before/after with consent. Ladies-only, premium care.",
  alternates: { canonical: "https://erowan.com/demos/salon-1/gallery" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Lookbook</h1>
      <p className="text-sm text-zinc-600 mt-2">12 looks • Before/after with consent • Tap to book the look.</p>
      <div className="mt-6 columns-2 md:columns-3 gap-3 space-y-3">
        {gallery.map((src,i)=>(
          <div key={i} className="break-inside-avoid">
            <Image src={src} alt={`Look ${i+1}`} width={500} height={600} className="rounded-xl w-full object-cover border" />
            <div className="mt-1 text-xs text-zinc-500">Look {i+1} • <Link href="/demos/salon-1/booking" className="underline">Book similar →</Link></div>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">Photos published with consent only. Ask stylist for full portfolio on WhatsApp.</div>
    </div>
  );
}
