import Image from "next/image";
import { gallery } from "@/lib/mocks/restaurant1";

export const metadata = {
  title: "Gallery — Mira Cafe JLT",
  description: "JLT brunch gallery, 6 images, interior and brunch.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/gallery" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Gallery</h1>
      <p className="text-sm text-zinc-600 mt-2">JLT mornings to late nights.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
        {gallery.map((src,i)=>(
          <Image key={i} src={src} alt={`gallery ${i}`} width={500} height={400} className="rounded-xl h-40 w-full object-cover border" />
        ))}
      </div>
    </div>
  );
}
