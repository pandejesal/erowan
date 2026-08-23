"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { services, stylists } from "@/lib/mocks/salon1";

export default function Page() {
  const sp = useSearchParams();
  const initialService = sp.get("service") || "";
  const initialStaff = sp.get("staff") || "";

  const [step, setStep] = useState(1);
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [staffId, setStaffId] = useState(initialStaff);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const [posting, setPosting] = useState(false);

  useEffect(()=>{ if(initialService) setStep(2); },[initialService]);

  const slots = ["10:00","11:30","14:00","16:00","19:00","20:30"];
  const service = services.find(s=>s.slug===serviceSlug);
  const staff = stylists.find(s=>s.id===staffId);

  async function confirm() {
    if(!phone || !name) { alert("Name + phone required"); return; }
    setPosting(true);
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ demo:"salon-1", serviceSlug, staffId, date, slot, name, phone, source:"demo" })
      });
      setDone(true);
      const msg = `Hi Noura — booking ${service?.name||serviceSlug} on ${date} ${slot} with ${staff?.name||staffId||"any stylist"} for ${name} (${phone})`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
    } finally { setPosting(false); }
  }

  if(done) return (
    <div className="mx-auto max-w-xl px-6 py-12 text-center">
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-2xl">✓</div>
        <h1 className="text-2xl font-bold mt-2">Requested!</h1>
        <p className="text-sm text-zinc-600 mt-2">We posted to leads and opened WhatsApp. Pay at store, free reschedule.</p>
        <Link href="/demos/salon-1" className="mt-4 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Back to Noura</Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Book — Noura</h1>
      <div className="mt-2 flex gap-2 text-xs">
        {[1,2,3,4].map(n=> <div key={n} className={`h-2 w-8 rounded-full ${step>=n?"bg-zinc-900":"bg-zinc-200"}`} />)}
        <span className="ml-2 text-zinc-500">Step {step} of 4</span>
      </div>

      {step===1 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Pick service</div>
          <div className="mt-3 grid gap-2">
            {services.map(s=>(
              <button key={s.slug} onClick={()=>{setServiceSlug(s.slug); setStep(2)}} className={`text-left border rounded-xl p-4 flex justify-between hover:border-zinc-900 ${serviceSlug===s.slug?"border-zinc-900 bg-zinc-50":"bg-white"}`}>
                <div><div className="font-bold">{s.name}</div><div className="text-xs text-zinc-500">{s.duration} • {s.desc}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-sm font-bold h-fit">{s.price}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step===2 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Pick stylist</div>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <button onClick={()=>{setStaffId(""); setStep(3)}} className={`border rounded-2xl p-4 text-left ${!staffId?"border-zinc-900 bg-zinc-50":"bg-white"}`}>
              <div className="font-bold">Any stylist</div><div className="text-xs text-zinc-500">We pick by service</div>
            </button>
            {stylists.filter(st=> !serviceSlug || st.specialties.includes(serviceSlug)).map(st=>(
              <button key={st.id} onClick={()=>{setStaffId(st.id); setStep(3)}} className={`border rounded-2xl p-4 flex gap-3 text-left hover:border-zinc-900 ${staffId===st.id?"border-zinc-900 bg-zinc-50":"bg-white"}`}>
                <img src={st.image} alt={st.name} className="h-12 w-12 rounded-full object-cover border" />
                <div><div className="font-bold">{st.name}</div><div className="text-xs text-zinc-500">{st.role}</div></div>
              </button>
            ))}
          </div>
          <button onClick={()=>setStep(1)} className="mt-4 text-xs underline">← Back</button>
        </div>
      )}

      {step===3 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Pick date & time</div>
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="mt-3 border rounded-xl px-3 py-2 w-full" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {slots.map(s=>(
              <button key={s} onClick={()=>setSlot(s)} className={`border rounded-xl py-2 text-sm font-bold ${slot===s?"bg-zinc-900 text-white":"bg-white"}`}>{s}</button>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={()=>setStep(2)} className="px-4 py-2 border rounded-full text-sm">← Back</button>
            <button disabled={!date||!slot} onClick={()=>setStep(4)} className="px-6 py-2 bg-zinc-900 text-white rounded-full font-bold text-sm disabled:opacity-50">Next → Details</button>
          </div>
        </div>
      )}

      {step===4 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Your details → WhatsApp</div>
          <p className="text-xs text-zinc-500 mt-1">We save to leads, then open WhatsApp pre-filled.</p>
          <div className="mt-4 space-y-3">
            <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
            <input placeholder="Phone (WhatsApp) e.g. +971..." value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
          </div>
          <div className="mt-4 bg-zinc-50 border rounded-xl p-4 text-sm">
            <div><span className="font-bold">Service:</span> {service?.name||serviceSlug||"—"}</div>
            <div><span className="font-bold">Stylist:</span> {staff?.name||"Any"}</div>
            <div><span className="font-bold">When:</span> {date} {slot}</div>
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={()=>setStep(3)} className="px-4 py-2 border rounded-full text-sm">← Back</button>
            <button onClick={confirm} disabled={posting} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold disabled:opacity-50">{posting?"Posting...":"Confirm → WhatsApp"}</button>
          </div>
          <div className="mt-2 text-xs text-zinc-500">By confirming you agree to WhatsApp contact. Ladies-only, pay at store.</div>
        </div>
      )}
    </div>
  );
}
