export const metadata = {
  title: "About — DHCC 12 yrs | SmileCare Dental",
  description: "DHA-licensed, 12 yrs DHCC, sterilization, 8k+ smiles, 420 reviews.",
  alternates: { canonical: "https://erowan.com/demos/clinic-1/about" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">About — Trust before the chair</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm leading-6 text-zinc-700">SmileCare DHCC 12 yrs: DHA-licensed doctors, 8k+ smiles, 420 reviews 4.9 ★. Sterilization: autoclave, single-use, rubber dam. No false promise, before/after with consent only. 12 yrs DHCC accreditation.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">12 yrs</div><div className="text-xs">DHCC</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">8k+</div><div className="text-xs">Smiles</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">4.9 ★</div><div className="text-xs">420 reviews</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">DHCC Accreditation</div><p className="text-sm text-zinc-600 mt-1">DHCC, DHA licensed, annual audit, insurance panel: Daman, AXA, MedNet, NextCare, Saada, Oman.</p></div>
          <div className="bg-white border rounded-2xl p-6"><div className="font-bold">Hygiene</div><p className="text-sm text-zinc-600 mt-1">Autoclave, single-use tips, rubber dam, sterilization before every chair.</p></div>
          <div className="bg-[#E6F0FF] border border-blue-200 rounded-2xl p-6"><div className="font-bold">Press</div><p className="text-sm text-zinc-600 mt-1">Time Out Dubai “Best Clinic 2025 nominee,” 4.9 ★ Google.</p></div>
        </div>
      </div>
    </div>
  );
}
