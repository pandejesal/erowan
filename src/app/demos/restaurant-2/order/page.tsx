"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { menu } from "@/lib/mocks/restaurant2";

type CartItem = { slug: string; qty: number };

export default function Page(){
  const [cart,setCart]=useState<CartItem[]>([]);
  const [phone,setPhone]=useState("");
  const [name,setName]=useState("");

  useEffect(()=>{
    const s=localStorage.getItem("hadi-cart");
    if(s) setCart(JSON.parse(s));
    const q=new URLSearchParams(window.location.search).get("add");
    if(q){
      const next=[...cart];
      const f=next.find(i=>i.slug===q);
      if(f) f.qty+=1; else next.push({slug:q,qty:1});
      setCart(next);
      localStorage.setItem("hadi-cart",JSON.stringify(next));
      window.history.replaceState({},'',"/demos/restaurant-2/order");
    }
  },[]);

  useEffect(()=>{ localStorage.setItem("hadi-cart",JSON.stringify(cart)); },[cart]);

  function add(slug:string){ setCart(prev=>{ const n=[...prev]; const f=n.find(i=>i.slug===slug); if(f) f.qty+=1; else n.push({slug,qty:1}); return n; }); }
  function remove(slug:string){ setCart(prev=>prev.filter(i=>i.slug!==slug)); }

  const items = cart.map(c=>{
    const m=menu.find(x=>x.slug===c.slug);
    return { ...c, m };
  }).filter(x=>x.m);

  const subtotal = items.reduce((acc, cur)=>{
    const price=parseInt(cur.m!.price.replace(/[^0-9]/g,""));
    return acc + price * cur.qty;
  },0);

  async function checkout(){
    if(!phone||!name){ alert("Name + phone required"); return; }
    await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demo:"restaurant-2",name,phone,items:cart})});
    const msg=`Hi Al Hadi Soho — order: ${items.map(i=>`${i.qty}x ${i.m!.name}`).join(", ")} — £ ${subtotal} for ${name} (${phone})`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
    setCart([]);
    localStorage.removeItem("hadi-cart");
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Order — Al Hadi Soho</h1>
      <p className="text-sm text-zinc-600 mt-2">Tap menu → Add → WhatsApp checkout. No Talabat fees.</p>

      {items.length===0 ? (
        <div className="mt-6 bg-white border rounded-2xl p-8 text-center">
          <div className="text-sm text-zinc-600">Cart empty.</div>
          <Link href="/demos/restaurant-2/menu" className="mt-3 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">See menu →</Link>
        </div>
      ) : (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="space-y-3">
            {items.map(i=>(
              <div key={i.slug} className="flex justify-between border rounded-xl p-3">
                <div><div className="font-bold">{i.m!.name}</div><div className="text-xs text-zinc-500">{i.m!.price} × {i.qty}</div></div>
                <div className="flex gap-2">
                  <button onClick={()=>add(i.slug)} className="border rounded-full px-2 text-sm">+</button>
                  <button onClick={()=>remove(i.slug)} className="border rounded-full px-2 text-sm">✕</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4 flex justify-between font-bold">Subtotal<div>£ {subtotal}</div></div>
          <div className="mt-4 space-y-3">
            <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
            <input placeholder="Phone (WhatsApp)" value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
            <button onClick={checkout} className="w-full px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Checkout on WhatsApp → £ {subtotal}</button>
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="font-bold">Quick add</div>
        <div className="mt-2 grid md:grid-cols-3 gap-3">
          {menu.slice(0,3).map(m=>(
            <button key={m.slug} onClick={()=>add(m.slug)} className="bg-white border rounded-2xl p-4 text-left hover:shadow-sm">
              <div className="font-bold">{m.name}</div><div className="text-xs text-zinc-500">{m.price}</div><div className="mt-2 text-xs font-bold underline">Add →</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
