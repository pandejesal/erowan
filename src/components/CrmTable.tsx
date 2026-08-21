"use client";

import { useEffect, useState } from "react";

export type Lead = {
  id: string;
  business: string;
  niche: string;
  city: string;
  contact: string;
  source: string;
  url?: string;
  sentDate: string;
  status: "Not Sent" | "Sent" | "Replied" | "Meeting" | "Closed Won" | "Closed Lost";
  reply: boolean;
  follow1?: string;
  follow2?: string;
  follow3?: string;
  notes?: string;
};

const STORAGE_KEY = "erowan_crm_v1";
const NICHES = ["salons", "restaurants", "clinics", "real-estate"];

export default function CrmTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [form, setForm] = useState<Partial<Lead>>({ niche: "salons", city: "Dubai", status: "Not Sent" });

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) try { setLeads(JSON.parse(raw)); } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  }, [leads]);

  const addLead = () => {
    if (!form.business || !form.contact) return alert("Business + Contact required");
    const lead: Lead = {
      id: Date.now().toString(36),
      business: form.business!,
      niche: form.niche || "salons",
      city: form.city || "Dubai",
      contact: form.contact!,
      source: form.source || "Apollo",
      url: form.url,
      sentDate: new Date().toISOString().slice(0, 10),
      status: (form.status as Lead["status"]) || "Not Sent",
      reply: false,
      notes: form.notes,
    };
    setLeads([lead, ...leads]);
    setForm({ niche: "salons", city: "Dubai", status: "Not Sent" });
  };

  const todaySent = leads.filter(l => l.sentDate === new Date().toISOString().slice(0,10) && l.status !== "Not Sent").length;
  const capWarn = todaySent >= 30 ? "bg-red-50 border-red-200 text-red-700" : todaySent >= 20 ? "bg-amber-50 border-amber-200 text-amber-800" : "bg-emerald-50 border-emerald-200 text-emerald-800";

  const metrics = NICHES.map(n => {
    const slice = leads.filter(l => l.niche === n);
    const sent = slice.filter(l => l.status !== "Not Sent").length;
    const replied = slice.filter(l => l.reply).length;
    const meetings = slice.filter(l => l.status === "Meeting" || l.status === "Closed Won").length;
    return { niche: n, total: slice.length, sent, replyPct: sent ? Math.round((replied/sent)*100) : 0, meetingPct: sent ? Math.round((meetings/sent)*100) : 0 };
  });

  const update = (id: string, patch: Partial<Lead>) => setLeads(leads.map(l => l.id === id ? { ...l, ...patch } : l));
  const remove = (id: string) => setLeads(leads.filter(l => l.id !== id));
  const exportCsv = () => {
    const header = "Business,Niche,City,Contact,Source,URL,SentDate,Status,Reply,Notes";
    const rows = leads.map(l => [l.business,l.niche,l.city,l.contact,l.source,l.url||"",l.sentDate,l.status,l.reply?"Yes":"No",`"${(l.notes||"").replace(/"/g,'""')}"`].join(","));
    const blob = new Blob([header+"\n"+rows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "erowan-crm.csv"; a.click();
  };

  return (
    <div className="space-y-4">
      <div className={`rounded-xl border p-3 text-sm ${capWarn}`}>
        <span className="font-semibold">Daily cap guard:</span> {todaySent}/30 sent today. {todaySent>=30 ? "STOP — risk of IG/Gmail ban. Resume tomorrow." : todaySent>=20 ? "Caution — 20–30 is safe free limit." : "Safe — you can send more today."}
      </div>

      <div className="grid md:grid-cols-4 gap-2">
        {metrics.map(m => (
          <div key={m.niche} className="rounded-xl border border-zinc-200 p-3 bg-white">
            <div className="text-xs uppercase tracking-widest text-zinc-500">{m.niche}</div>
            <div className="text-sm mt-1"><span className="font-bold">{m.sent}</span> sent / {m.total} total</div>
            <div className="text-xs text-zinc-600">Reply {m.replyPct}% • Meeting {m.meetingPct}%</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-200 p-4 bg-white">
        <div className="font-medium text-sm">Add lead</div>
        <div className="mt-3 grid md:grid-cols-3 gap-2">
          <input placeholder="Business *" value={form.business||""} onChange={e=>setForm({...form,business:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
          <input placeholder="Contact (email/IG) *" value={form.contact||""} onChange={e=>setForm({...form,contact:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
          <input placeholder="URL (https://...)" value={form.url||""} onChange={e=>setForm({...form,url:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
          <select value={form.niche} onChange={e=>setForm({...form,niche:e.target.value})} className="border rounded-lg px-3 py-2 text-sm">
            {NICHES.map(n=> <option key={n} value={n}>{n}</option>)}
          </select>
          <input placeholder="City" value={form.city||""} onChange={e=>setForm({...form,city:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
          <input placeholder="Source" value={form.source||""} onChange={e=>setForm({...form,source:e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
          <input placeholder="Notes" value={form.notes||""} onChange={e=>setForm({...form,notes:e.target.value})} className="border rounded-lg px-3 py-2 text-sm md:col-span-3" />
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={addLead} className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm">Add to CRM</button>
          <button onClick={exportCsv} className="px-4 py-2 rounded-full border border-zinc-300 text-sm">Export CSV</button>
          <button onClick={()=>{ if(confirm("Clear all leads?")) setLeads([])}} className="text-xs text-zinc-500 underline">Clear</button>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-xs uppercase tracking-widest text-zinc-500">
              <tr>
                <th className="text-left p-2">Business</th>
                <th className="text-left p-2">Niche</th>
                <th className="text-left p-2">Contact</th>
                <th className="text-left p-2">Sent</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Reply</th>
                <th className="text-left p-2"></th>
              </tr>
            </thead>
            <tbody>
              {leads.length===0 && <tr><td colSpan={7} className="p-6 text-center text-zinc-500">No leads yet — add 20-30/day max.</td></tr>}
              {leads.map(l=> (
                <tr key={l.id} className="border-t border-zinc-100">
                  <td className="p-2"><div className="font-medium">{l.business}</div><div className="text-xs text-zinc-500">{l.city} • {l.url||""}</div></td>
                  <td className="p-2 text-xs">{l.niche}</td>
                  <td className="p-2 text-xs break-all">{l.contact}</td>
                  <td className="p-2 text-xs">{l.sentDate}</td>
                  <td className="p-2">
                    <select value={l.status} onChange={e=>update(l.id,{ status: e.target.value as Lead["status"]})} className="border rounded-lg px-2 py-1 text-xs">
                      <option>Not Sent</option><option>Sent</option><option>Replied</option><option>Meeting</option><option>Closed Won</option><option>Closed Lost</option>
                    </select>
                  </td>
                  <td className="p-2"><input type="checkbox" checked={l.reply} onChange={e=>update(l.id,{ reply: e.target.checked })} /></td>
                  <td className="p-2"><button onClick={()=>remove(l.id)} className="text-xs text-red-600">Del</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
