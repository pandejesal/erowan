"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { services, doctors } from "@/lib/mocks/clinic2";

export default function Page(){
  const sp=useSearchParams();
  const initService=sp.get("service")||"";
  const initDoctor=sp.get("doctor")||"";
  const [step,setStep]=useState(initService?2:1);
  const [serviceSlug,setServiceSlug]=useState(initService);
  const [doctor,setDoctor]=useState(initDoctor);
  const [date,setDate]=useState("");
  const [slot,setSlot]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [consent,setConsent]=useState(false);
  const [done,setDone]=useState(false);
  const [posting,setPosting]=useState(false);
  const slots=["09:00","10:30","12:00","15:00","17:00","18:30"];
  const s=services.find(x=>x.slug===serviceSlug);
  const d=doctors.find(x=>x.id===doctor);

  async function confirm(){
    if(!phone||!name||!consent){alert("Name, phone, GDPR consent required"); return;}
    setPosting(true);
    try{
      await fetch("/api/book",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({demo:"clinic-2",serviceSlug,staffId:doctor,date,slot,name,phone})});
      setDone(true);
      const msg=`Hi Al Noor Mitte — appointment ${s?.name||serviceSlug} on ${date} ${slot} with ${d?.name||"any doctor"} for ${name} (${phone}) — GDPR safe`;
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,"_blank");
    }finally{setPosting(false);}
  }

  if(done) return (
    <div className="mx-auto max-w-xl px-6 py-12 text-center">
      <div className="bg-white border rounded-2xl p-8">
        <div className="text-2xl">✓</div>
        <h1 className="text-2xl font-bold mt-2">Requested!</h1>
        <p className="text-sm text-zinc-600 mt-2">We posted to leads and opened WhatsApp. No data stored beyond.</p>
        <Link href="/demos/clinic-2" className="mt-4 inline-flex px-6 py-3 bg-zinc-900 text-white rounded-full font-bold">Back to Al Noor</Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Book — Al Noor</h1>
      <div className="mt-2 text-xs text-zinc-500">German + expat • GDPR safe • WhatsApp 30s</div>
      <div className="mt-2 flex gap-2 text-xs">{[1,2,3,4].map(n=><div key={n} className={`h-2 w-8 rounded-full ${step>=n?"bg-zinc-900":"bg-zinc-200"}`} />)}<span className="ml-2 text-zinc-500">Step {step} of 4</span></div>

      {step===1 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Pick service</div>
          <div className="mt-3 grid gap-2">
            {services.map(x=>(
              <button key={x.slug} onClick={()=>{setServiceSlug(x.slug); setStep(2)}} className={`text-left border rounded-xl p-4 flex justify-between hover:border-zinc-900 ${serviceSlug===x.slug?"border-zinc-900 bg-zinc-50":"bg-white"}`}>
                <div><div className="font-bold">{x.name}</div><div className="text-xs text-zinc-500">{x.duration} • {x.desc}</div></div>
                <div className="bg-zinc-900 text-white px-2 py-1 rounded-full text-xs font-bold h-fit">{x.price}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      {step===2 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Pick doctor</div>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <button onClick={()=>{setDoctor(""); setStep(3)}} className={`border rounded-2xl p-4 text-left ${!doctor?"border-zinc-900 bg-zinc-50":"bg-white"}`}><div className="font-bold">Any doctor</div><div className="text-xs text-zinc-500">We pick</div></button>
            {doctors.filter(doc=> !serviceSlug || doc.focus.includes(serviceSlug)).map(doc=>(
              <button key={doc.id} onClick={()=>{setDoctor(doc.id); setStep(3)}} className={`border rounded-2xl p-4 flex gap-3 text-left hover:border-zinc-900 ${doctor===doc.id?"border-zinc-900 bg-zinc-50":"bg-white"}`}>
                <img src={doc.image} alt={doc.name} className="h-12 w-12 rounded-full object-cover border" />
                <div><div className="font-bold">{doc.name}</div><div className="text-xs text-zinc-500">{doc.role}</div></div>
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
          <div className="mt-3 grid grid-cols-3 gap-2">{slots.map(s=>(<button key={s} onClick={()=>setSlot(s)} className={`border rounded-xl py-2 text-sm font-bold ${slot===s?"bg-zinc-900 text-white":"bg-white"}`}>{s}</button>))}</div>
          <div className="mt-4 flex gap-3">
            <button onClick={()=>setStep(2)} className="px-4 py-2 border rounded-full text-sm">← Back</button>
            <button disabled={!date||!slot} onClick={()=>setStep(4)} className="px-6 py-2 bg-zinc-900 text-white rounded-full font-bold text-sm disabled:opacity-50">Next → Details</button>
          </div>
        </div>
      )}
      {step===4 && (
        <div className="mt-6 bg-white border rounded-2xl p-5">
          <div className="font-bold">Your details → WhatsApp</div>
          <div className="mt-4 space-y-3">
            <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
            <input placeholder="Phone (WhatsApp)" value={phone} onChange={e=>setPhone(e.target.value)} className="border rounded-xl px-3 py-2 w-full" />
            <label className="flex gap-2 text-xs"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} /> I consent to WhatsApp contact, no data stored beyond demo leads.</label>
          </div>
          <div className="mt-4 bg-zinc-50 border rounded-xl p-4 text-sm">
            <div><span className="font-bold">Service:</span> {s?.name||"—"}</div>
            <div><span className="font-bold">Doctor:</span> {d?.name||"Any"}</div>
            <div><span className="font-bold">When:</span> {date} {slot}</div>
          </div>
          <div className="mt-4 flex gap-3">
            <button onClick={()=>setStep(3)} className="px-4 py-2 border rounded-full text-sm">← Back</button>
            <button onClick={confirm} disabled={posting} className="px-6 py-3 bg-zinc-900 text-white rounded-full font-bold disabled:opacity-50">{posting?"Posting...":"Confirm → WhatsApp"}</button>
          </div>
        </div>
      )}
    </div>
  );
}
