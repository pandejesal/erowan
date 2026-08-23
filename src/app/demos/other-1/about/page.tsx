export const metadata = { title: "About — North Consulting 12 yrs", description: "Shoreditch, London. 12 yrs, 120+ scale-ups, £2.1M savings. Worldwide.", alternates:{canonical:"https://erowan.com/demos/other-1/about"} };
export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold text-[#0F1A2E]">About — North</h1>
      <p className="mt-2 text-sm leading-7 text-zinc-700 max-w-[60ch]">Shoreditch, London. 12 yrs boutique. ex-McKinsey + operators. We map ops, kill meetings, install KPIs, and ship a 48h site — worldwide. No retainer trap. Method: discovery → audit → Loom → sprint. Clients from London to remote.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">Method</div><ol className="mt-2 list-decimal pl-4 space-y-1 text-zinc-600"><li>Discovery (2 days)</li><li>Audit + roadmap</li><li>Loom walkthrough</li><li>Sprint + 48h site</li></ol></div>
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">12 yrs</div><div className="text-zinc-600 text-xs mt-1">120+ scale-ups, 47 reviews 4.9★, £2.1M avg savings.</div></div>
        <div className="bg-white border rounded-2xl p-5"><div className="font-bold">Worldwide</div><div className="text-zinc-600 text-xs mt-1">London base, remote delivery. Shoreditch High St.</div></div>
      </div>
    </div>
  );
}
