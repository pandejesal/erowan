import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/mocks/clinic2";

export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }
export function generateMetadata({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return {};
  return { title:`${p.title} | Al Noor Blog`, description:p.excerpt, alternates:{canonical:`https://erowan.com/demos/clinic-2/blog/${p.slug}`} };
}

export default function Page({params}:{params:{slug:string}}){
  const p=getPost(params.slug);
  if(!p) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <div className="text-xs text-zinc-500"><Link href="/demos/clinic-2/blog" className="underline">Blog</Link> / {p.title}</div>
      <h1 className="text-3xl font-serif font-bold mt-3">{p.title}</h1>
      <div className="text-xs text-zinc-500 mt-1">{p.date}</div>
      <Image src={p.image} alt={p.title} width={800} height={400} className="mt-6 rounded-2xl w-full object-cover border h-[320px]" />
      <p className="mt-6 text-sm leading-7 text-zinc-700">{p.content}</p>
      <Link href="/demos/clinic-2/booking" className="mt-6 inline-flex px-5 py-2 bg-zinc-900 text-white rounded-full font-bold text-sm">Book consultation →</Link>
    </div>
  );
}
