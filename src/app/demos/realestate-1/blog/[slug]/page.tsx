import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/mocks/realestate1";
export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return {};
  return { title: `${p.title} | Vista Blog`, description: p.excerpt, alternates:{canonical:`https://erowan.com/demos/realestate-1/blog/${p.slug}`} };
}
export default function Page({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/realestate-1/blog" className="underline">Blog</Link> / {p.title}</div>
      <h1 className="text-3xl font-serif font-bold mt-3">{p.title}</h1>
      <div className="text-xs text-zinc-500 mt-1">{p.date}</div>
      <Image src={p.image} alt={p.title} width={800} height={400} className="mt-6 rounded-2xl w-full object-cover border h-[320px]" />
      <p className="mt-6 text-sm leading-7 text-zinc-700">{p.content}</p>
    </div>
  );
}
