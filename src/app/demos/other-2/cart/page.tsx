"use client";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/mocks/other2";
export default function Page(){
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const pre=params?.get("add")||"";
  const [items,setItems]=useState<string[]>(pre?[pre]:[]);
  const toggle=(slug:string)=> setItems(prev=> prev.includes(slug)? prev.filter(s=>s!==slug): [...prev,slug]);
  const list=products.filter(p=>items.includes(p.slug));
  const total=list.reduce((s,p)=> s + (Number(p.price.replace(/[^0-9.]/g,""))||0),0);
  const checkout=async()=>{
    await fetch("/api/book",{method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({demo:"other-2", serviceSlug: items.join(","), date:new Date().toISOString().slice(0,10), slot:"cart", name:"Guest", phone:"000"})});
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(`Hi Craft — order: ${list.map(p=>p.name+" "+p.price).join(", ")} = $${total}`)}`,"_blank");
  };
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Cart — Craft</h1>
      <p className="text-sm text-zinc-600">Internal save → WhatsApp checkout. +1 add/remove.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {products.map(p=>(
          <div key={p.slug} className={`bg-white border rounded-2xl p-4 flex justify-between ${items.includes(p.slug)?"border-zinc-900":""}`}>
            <div><div className="font-bold text-sm">{p.name}</div><div className="text-xs text-zinc-500">{p.price} • {p.stock} left</div></div>
            <button onClick={()=>toggle(p.slug)} className={`px-3 py-1 rounded-full text-xs font-bold border ${items.includes(p.slug)?"bg-zinc-900 text-white":"bg-white"}`}>{items.includes(p.slug)?"Remove":"Add"}</button>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white border rounded-2xl p-5">
        <div className="font-bold">Cart ({list.length})</div>
        {list.length===0? <div className="text-sm text-zinc-500">No items. Add from above or <Link href="/demos/other-2/products" className="underline">products →</Link></div> : (
          <>
            <ul className="mt-2 space-y-1">{list.map(p=><li key={p.slug} className="text-sm flex justify-between"><span>{p.name}</span><span>{p.price}</span></li>)}</ul>
            <div className="mt-3 font-bold">Total ${total}</div>
            <button onClick={checkout} className="mt-3 w-full py-3 bg-zinc-900 text-white rounded-full font-bold">Checkout via WhatsApp →</button>
          </>
        )}
      </div>
    </div>
  );
}
