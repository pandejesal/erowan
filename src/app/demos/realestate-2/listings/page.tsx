import Link from "next/link";
import Image from "next/image";
import { listings, areas } from "@/lib/mocks/realestate2";
export const metadata = { title: "Listings — Harbor Realty Miami Brickell", description: "6 listings, filter by beds/area/$, WhatsApp brochure. MLS bilingual.", alternates:{canonical:"https://erowan.com/demos/realestate-2/listings"} };
export default function Page({searchParams}:{searchParams:{beds?:string, area?:string}}){
  const beds=searchParams.beds? parseInt(searchParams.beds): undefined;
  const area=searchParams.area;
  let list=listings;
  if(beds!==undefined) list=list.filter(l=>l.beds===beds);
  if(area) list=list.filter(l=>l.areaSlug===area);
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Listings — Harbor</h1>
      <div className="mt-4 flex gap-2 flex-wrap text-xs">
        <a href="/demos/realestate-2/listings" className="px-3 py-1 rounded-full border bg-zinc-900 text-white">ALL</a>
        {[0,1,2,3,4].map(b=> <a key={b} href={`/demos/realestate-2/listings?beds=${b}`} className={`px-3 py-1 rounded-full border ${beds===b?"bg-zinc-900 text-white":"bg-white"}`}>{b===0?"Studio":b+"BR"}</a>)}
        {areas.map(a=> <a key={a.slug} href={`/demos/realestate-2/listings?area=${a.slug}`} className={`px-3 py-1 rounded-full border ${area===a.slug?"bg-zinc-900 text-white":"bg-white"}`}>{a.name}</a>)}
      </div>
      <div className="mt-2 text-xs text-zinc-500">Showing {list.length} of {listings.length}</div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {list.map(l=>(
          <Link key={l.id} href={`/demos/realestate-2/listings/${l.id}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={l.image} alt={l.title} width={400} height={250} className="h-36 w-full object-cover border-b" />
            <div className="p-4"><div className="font-bold">{l.title}</div><div className="text-sm text-zinc-500">{l.beds}BR • {l.sqft} sqft • {l.area}</div><div className="text-sm bg-zinc-900 text-white inline-block px-2 py-1 rounded-full mt-1">{l.price}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
