export const metadata = {
  title: "Legal — Privacy & Consent | SmileCare DHCC",
  description: "Privacy, photos with consent only, no cookies. SmileCare DHCC 12 yrs.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/legal" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Legal</h1>
      <div className="mt-6 bg-white border rounded-2xl p-6">
        <div className="font-bold">Privacy</div>
        <p className="text-sm text-zinc-600 mt-2">No cookies, photos only with written consent. Data via WhatsApp to Meta, not stored beyond leads.json. DHCC 12 yrs, DHA licensed.</p>
      </div>
      <div className="mt-4 bg-white border rounded-2xl p-6">
        <div className="font-bold">Consent — Before/After</div>
        <p className="text-sm text-zinc-600 mt-2">Published only with written consent. Tap “View with consent” to see. Revoke anytime via WhatsApp.</p>
      </div>
      <div className="mt-4 bg-white border rounded-2xl p-6">
        <div className="font-bold">Terms</div>
        <p className="text-sm text-zinc-600 mt-2">Demo by Erowan — not a real client. Your clinic in 48h — replace logo, map, insurance.</p>
      </div>
    </div>
  );
}
