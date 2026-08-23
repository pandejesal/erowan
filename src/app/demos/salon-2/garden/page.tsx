import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/lib/mocks/salon2";

export const metadata = {
  title: "Garden — SoHo Calm | Bloom Spa",
  description: "SoHo garden editorial — 8 images, breathing, calm ritual. Bloom’s signature not gallery.",
  alternates: { canonical: "https://erowan.com/demos/salon-2/garden" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">SoHo Garden</h1>
      <p className="text-sm text-zinc-600 mt-2">Not a gallery — a ritual. SoHo calm, breathe, book. 8-garden-editorial.</p>
      <div className="mt-6 columns-2 md:columns-3 gap-3 space-y-3">
        {gallery.map((src,i)=>(
          <Image key={i} src={src} alt={`garden ${i}`} width={500} height={600} className="rounded-xl w-full object-cover border" />
        ))}
      </div>
      <div className="mt-6 bg-[#E8F0E8] border rounded-2xl p-5 text-center">
        <div className="font-bold">Breathe: inhale 4s • hold 2s • exhale 4s</div>
        <div className="text-xs text-zinc-600 mt-1">Garden photos at golden hour, included with bridal package. <Link href="/demos/salon-2/booking" className="underline">Book garden trial →</Link></div>
      </div>
    </div>
  );
}
