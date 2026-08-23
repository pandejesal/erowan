export const metadata = {
  title: "Legal — GDPR • Al Noor Berlin",
  description: "GDPR privacy, no data stored, WhatsApp only. Mitte 10 yrs.",
  alternates: { canonical: "https://erowan.com/demos/clinic-2/legal" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Legal — GDPR</h1>
      <div className="mt-6 bg-white border rounded-2xl p-6">
        <div className="font-bold">Privacy — No data stored</div>
        <p className="text-sm text-zinc-600 mt-2">WhatsApp only, no server storage beyond leads.json for demo, delete on request. DPO: hello@alnoor-berlin.de</p>
      </div>
      <div className="mt-4 bg-white border rounded-2xl p-6">
        <div className="font-bold">GDPR Rights</div>
        <p className="text-sm text-zinc-600 mt-2">Access, delete, portability. WhatsApp “delete” to erase. No cookies, no tracking.</p>
      </div>
      <div className="mt-4 bg-white border rounded-2xl p-6">
        <div className="font-bold">Terms</div>
        <p className="text-sm text-zinc-600 mt-2">Demo by Erowan — not a real client. Your clinic in 48h.</p>
      </div>
    </div>
  );
}
