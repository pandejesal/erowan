"use client";
import { useState } from "react";
import Link from "next/link";

export default function Page(){
  const [date,setDate]=useState("");
  const [time,setTime]=useState("19:00");
  const [guests,setGuests]=useState(2);
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [done,setDone]=useState(false);
  const [posting,setPosting]=useState(false);

  async function confirm(){
    if(!date||!name||!phone){ alert("Date, name, phone required"); return; }
    setPosting(true);
    try{
      await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demo:"restaurant-2",date,slot:time,name,phone,items:`Table for ${guests}`})});
      setDone(true);
      const msg=`Hi Al Hadi Soho — reserve table for ${guests} on ${date} ${time} for ${name} (${phone})`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
    }finally{setPosting(false);}
  }

  if(done) return (
    <div className="mx-auto max-w-xl px-6 py-12 text-center">
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-2xl">✓</div>
        <h1 className="text-2xl font-bold mt-2">Reserved!</h1>
        <p className="text-sm text-zinc-600 mt-2">We posted to leads and opened WhatsApp.</p>
        <Link href="/demos/restaurant-2" className="mt-4 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Back to Mira</Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Reserve a table — JLT</h1>
      <p className="text-sm text-zinc-600 mt-2">WhatsApp in 20 seconds • Open 8am–11pm • No commission.</p>
      <div className="mt-6 bg-white border rounded-2xl p-5 space-y-4">
        <div className="grid md:grid-cols-3 gap-3">
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded-xl px-3 py-2" />
          <select value={time} onChange={e=>setTime(e.target.value)} className="border rounded-xl px-3 py-2">
            <option>12:00</option><option>13:30</option><option>19:00</option><option>20:30</option>
          </select>
          <select value={guests} onChange={e=>setGuests(parseInt(e.target.value))} className="border rounded-xl px-3 py-2">
            <option value={1}>1 guest</option><option value={2}>2 guests</option><option value={3}>3 guests</option><option value={4}>4 guests</option><option value={6}>6 guests</option>
          </select>
        </div>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
        <input placeholder="Phone (WhatsApp)" value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
        <button onClick={confirm} disabled={posting} className="w-full px-6 py-3 bg-zinc-900 text-white rounded-full font-bold disabled:opacity-50">{posting?"Posting...":"Confirm → WhatsApp"}</button>
        <div className="text-xs text-zinc-500 text-center">By confirming you agree to WhatsApp contact.</div>
      </div>
    </div>
  );
}
