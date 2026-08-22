"use client";
import { useEffect, useState } from "react";
import CrmTable from "./CrmTable";
import ResearchPanel from "./ResearchPanel";
import EmailGenerator from "./EmailGenerator";

export default function CrmGate() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch("/api/crm-auth", { method: "GET" }).then(r=>r.json()).then(j=>setAuthed(!!j.authed)).catch(()=>setAuthed(false));
    // also check legacy localStorage for previous logins and migrate to cookie
    if (localStorage.getItem("erowan_crm_auth") === "ok") setAuthed(true);
  }, []);

  const submit = async () => {
    setErr("");
    const res = await fetch("/api/crm-auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: input }) });
    if (res.ok) {
      localStorage.setItem("erowan_crm_auth", "ok");
      setAuthed(true);
    } else setErr("Wrong password");
  };

  if (authed === null) return <div className="mx-auto max-w-md px-6 py-16 text-sm text-zinc-500">Checking access…</div>;

  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <div className="border border-[var(--line)] p-6 bg-white">
          <h1 className="font-black" style={{fontFamily:"var(--font-display)"}}>CRM — Internal Only</h1>
          <p className="text-sm text-zinc-600 mt-2">Private outreach dashboard. Not linked in nav, noindexed. Enter password to access.</p>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter" && submit()} placeholder="Password" type="password" className="mt-4 w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm" />
          <button onClick={submit} className="mt-3 w-full bg-zinc-900 text-white py-2 rounded-full text-sm font-bold">Unlock CRM</button>
          {err && <div className="mt-2 text-xs text-red-600">{err}</div>}
          <div className="mt-3 text-xs text-zinc-500">Contact owner for password. Not shown in source — checked server-side via <code>/api/crm-auth</code>.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>Outreach CRM — Internal</h1>
        <button onClick={async()=>{ await fetch("/api/crm-auth",{method:"GET"}); localStorage.removeItem("erowan_crm_auth"); document.cookie="erowan_crm_auth=; Max-Age=0; path=/"; location.reload();}} className="text-xs underline">Lock</button>
      </div>
      <p className="text-sm text-zinc-600 -mt-4">Add 20-30 leads/day max → Research each with OpenClaw panel (30-sec QA) → Generate niche email → Mark Sent.</p>
      <CrmTable />
      <div className="grid md:grid-cols-2 gap-4">
        <ResearchPanel />
        <EmailGenerator />
      </div>
    </div>
  );
}
