import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/mocks/other2";
export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return {};
  return { title: `${p.title} | Craft`, description: p.excerpt, alternates:{canonical:`https://erowan.com/demos/other-2/blog/${p.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/other-2/blog" className="underline">Blog</Link> / {p.title}</div>
      <h1 className="mt-2 text-3xl font-serif font-bold">{p.title}</h1>
      <div className="text-xs text-zinc-500">{p.date}</div>
      <Image src={p.image} alt={p.title} width={800} height={400} className="mt-4 rounded-2xl h-64 w-full object-cover border" />
      <p className="mt-4 text-sm leading-7 text-zinc-700">{p.body}</p>
      <Link href="/demos/other-2/products" className="mt-6 inline-block px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Shop →</Link>
    </div>
  );
}
