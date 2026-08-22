"use client";
import { useEffect, useState } from "react";
import CrmTable from "./CrmTable";
import ResearchPanel from "./ResearchPanel";
import EmailGenerator from "./EmailGenerator";

const PASS = "erowan2024"; // change to your own — share only with your teammate

export default function CrmGate() {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (localStorage.getItem("erowan_crm_auth") === "ok") setAuthed(true);
  }, []);

  const submit = () => {
    if (input === PASS) {
      localStorage.setItem("erowan_crm_auth", "ok");
      setAuthed(true);
    } else setErr("Wrong password");
  };

  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <div className="border border-[var(--line)] p-6 bg-white">
          <h1 className="font-black" style={{fontFamily:"var(--font-display)"}}>CRM — Internal Only</h1>
          <p className="text-sm text-zinc-600 mt-2">This is your private outreach dashboard, not for clients. Enter password to access. (Default: <code className="bg-zinc-100 px-1">erowan2024</code> — change in <code>CrmGate.tsx:5</code>)</p>
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter" && submit()} placeholder="Password" type="password" className="mt-4 w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm" />
          <button onClick={submit} className="mt-3 w-full bg-zinc-900 text-white py-2 rounded-full text-sm font-bold">Unlock CRM</button>
          {err && <div className="mt-2 text-xs text-red-600">{err}</div>}
          <div className="mt-3 text-xs text-zinc-500">Not linked in nav, noindexed, disallowed in robots.txt. Only you with direct link + password can see it.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-6 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-black tracking-tight" style={{fontFamily:"var(--font-display)"}}>Outreach CRM — Internal</h1>
        <button onClick={()=>{localStorage.removeItem("erowan_crm_auth"); location.reload();}} className="text-xs underline">Lock</button>
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
