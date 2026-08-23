"use client";
import { useState } from "react";
import { services, team } from "@/lib/mocks/other1";
export default function Page(){
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const preService = params?.get("service") || "";
  const [service,setService]=useState(preService);
  const [person,setPerson]=useState(params?.get("person") || "");
  const [date,setDate]=useState("");
  const [time,setTime]=useState("10:00");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [done,setDone]=useState(false);
  const submit=async()=>{
    if(!service||!date||!name||!phone){ alert("service, date, name, phone required"); return; }
    await fetch("/api/book",{method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({demo:"other-1", serviceSlug:service, staffId:person, date, slot:time, name, phone, email})});
    setDone(true);
    const svc=services.find(s=>s.slug===service)?.name||service;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(`Hi North — book free 20-min call for ${svc} on ${date} ${time}. ${name} ${phone}`)}`,"_blank");
  };
  if(done) return <div className="mx-auto max-w-xl px-6 py-12 text-center"><div className="text-2xl font-bold">Booked — check WhatsApp</div><div className="text-sm text-zinc-600 mt-1">We opened WhatsApp with your call details.</div></div>;
  return (
    <div className="mx-auto max-w-xl px-6 py-8">
      <h1 className="text-2xl font-serif font-bold">Book — North</h1>
      <p className="text-sm text-zinc-600">Free 20-min call → internal save → WhatsApp.</p>
      <div className="mt-4 space-y-3">
        <select value={service} onChange={e=>setService(e.target.value)} className="w-full border rounded-xl px-3 py-2 bg-white">
          <option value="">Select service</option>
          {services.map(s=><option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>)}
        </select>
        <select value={person} onChange={e=>setPerson(e.target.value)} className="w-full border rounded-xl px-3 py-2 bg-white">
          <option value="">Any person</option>
          {team.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <div className="grid grid-cols-2 gap-3">
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="border rounded-xl px-3 py-2" />
          <select value={time} onChange={e=>setTime(e.target.value)} className="border rounded-xl px-3 py-2 bg-white"><option>10:00</option><option>11:00</option><option>14:00</option><option>15:00</option></select>
        </div>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="w-full border rounded-xl px-3 py-2" />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded-xl px-3 py-2" />
        <input placeholder="WhatsApp" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full border rounded-xl px-3 py-2" />
        <button onClick={submit} className="w-full py-3 bg-[#0F1A2E] text-white rounded-full font-bold">Book free call →</button>
        <div className="text-xs text-zinc-500 text-center">Shoreditch, London • Worldwide • POST /api/book</div>
      </div>
    </div>
  );
}
