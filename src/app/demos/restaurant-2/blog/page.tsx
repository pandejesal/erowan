import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/mocks/restaurant2";

export const metadata = {
  title: "Journal — Al Hadi Grill JLT",
  description: "PDFs kill orders, JLT brunch guide, daily reels.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/blog" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Journal</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {posts.map(p=>(
          <Link key={p.slug} href={`/demos/restaurant-1/blog/${p.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={p.image} alt={p.title} width={500} height={300} className="h-44 w-full object-cover border-b" />
            <div className="p-5"><div className="text-xs text-zinc-500">{p.date}</div><div className="font-bold mt-1">{p.title}</div><div className="text-sm text-zinc-600 mt-1 line-clamp-2">{p.excerpt}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
