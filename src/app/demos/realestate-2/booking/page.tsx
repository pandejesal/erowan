"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { listings } from "@/lib/mocks/realestate2";
export default function Page(){
  const sp=useSearchParams();
  const init=sp.get("listing")||"";
  const [listing,setListing]=useState(init);
  const [date,setDate]=useState("");
  const [slot,setSlot]=useState("10:00");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [done,setDone]=useState(false);
  const [posting,setPosting]=useState(false);
  const l=listings.find(x=>x.id===listing);
  async function confirm(){
    if(!listing||!date||!name||!phone){alert("Fill all"); return;}
    setPosting(true);
    try{
      await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demo:"realestate-2",serviceSlug:listing,date,slot,name,phone})});
      setDone(true);
      const msg=`Hi Harbor — viewing for ${l?.title||listing} on ${date} ${slot} for ${name} (${phone})`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
    }finally{setPosting(false);}
  }
  if(done) return (<div className="mx-auto max-w-xl px-6 py-12 text-center"><div className="bg-white border rounded-2xl p-8"><div className="text-2xl">✓</div><h1 className="text-2xl font-bold mt-2">Viewing requested!</h1><Link href="/demos/realestate-2" className="mt-4 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Back to Harbor</Link></div></div>);
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Book viewing — Harbor</h1>
      <div className="mt-6 bg-white border rounded-2xl p-5 space-y-4">
        <div>
          <div className="font-bold text-sm">Listing</div>
          <select value={listing} onChange={e=>setListing(e.target.value)} className="mt-2 border rounded-xl px-3 py-2 w-full">
            <option value="">Pick listing</option>
            {listings.map(x=> <option key={x.id} value={x.id}>{x.title} — {x.price}</option>)}
          </select>
        </div>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
        <select value={slot} onChange={e=>setSlot(e.target.value)} className="border rounded-xl px-3 py-2 w-full">
          <option>10:00</option><option>14:00</option><option>16:00</option><option>18:00</option>
        </select>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
        <input placeholder="Phone (WhatsApp)" value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
        <button onClick={confirm} disabled={posting} className="w-full px-6 py-3 bg-zinc-900 text-white rounded-full font-bold disabled:opacity-50">{posting?"Posting...":"Confirm → WhatsApp"}</button>
      </div>
    </div>
  );
}
