import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/mocks/other2";
export const metadata = { title: "Blog — Craft Brooklyn", description: "Behind the kiln, indigo, joinery.", alternates:{canonical:"https://erowan.com/demos/other-2/blog"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Blog — Craft</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {posts.map(p=>(
          <Link key={p.slug} href={`/demos/other-2/blog/${p.slug}`} className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">
            <Image src={p.image} alt={p.title} width={400} height={250} className="h-36 w-full object-cover border-b" />
            <div className="p-4"><div className="font-bold text-sm">{p.title}</div><div className="text-xs text-zinc-500">{p.date} • {p.excerpt}</div></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
