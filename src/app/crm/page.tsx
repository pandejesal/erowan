import CrmTable from "@/components/CrmTable";
import ResearchPanel from "@/components/ResearchPanel";
import EmailGenerator from "@/components/EmailGenerator";

export const metadata = {
  title: "CRM — Erowan Outreach System",
  description: "LocalStorage CRM, OpenClaw research, email generator. 20-30/day cap.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Outreach CRM — Gulf</h1>
        <span className="text-xs text-zinc-500">LocalStorage • Free • 20-30/day safe</span>
      </div>
      <p className="text-sm text-zinc-600 -mt-4">Add 20-30 leads/day max → Research each with OpenClaw panel (30-sec QA) → Generate niche email → Mark Sent. Per-niche reply% tells you what to double down.</p>
      <CrmTable />
      <div className="grid md:grid-cols-2 gap-4">
        <ResearchPanel />
        <EmailGenerator />
      </div>
      <div className="rounded-2xl border border-dashed border-zinc-300 p-4 text-xs text-zinc-600">
        <strong>Ops:</strong> Bot instant reply + human within 6h (evening IST = afternoon Gulf). Daily 15-min check. Export CSV weekly. Kill lowest niche after 100 touches.
      </div>
    </div>
  );
}
