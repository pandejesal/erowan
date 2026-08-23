export const metadata = {
  title: "About — Boutique Since 2019 | Bloom Spa SoHo",
  description: "SoHo boutique since 2019, English + Spanish, garden ritual, calm 60 min.",
  alternates: { canonical: "https://erowan.com/demos/salon-2/about" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">About Bloom</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-white border rounded-2xl p-6">
          <p className="text-sm leading-6 text-zinc-700">Boutique spa in SoHo since 2019. Two friends, one garden, hot oils. We keep calm 38dB, light 3000K, lavender. English + Spanish. Book at midnight, 10am slot. SoHo calm not loud luxury.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-zinc-900 text-white p-3"><div className="font-bold">2019</div><div className="text-xs">Since</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">5</div><div className="text-xs">Therapists</div></div>
            <div className="rounded-xl border p-3"><div className="font-bold">210</div><div className="text-xs">Reviews</div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-white border rounded-2xl p-6">
            <div className="font-bold">SoHo Garden</div>
            <p className="text-sm text-zinc-600 mt-1">Golden hour garden for bridal trial photos, included. Breathe 4-2-4.</p>
          </div>
          <div className="bg-white border rounded-2xl p-6">
            <div className="font-bold">Bilingual</div>
            <p className="text-sm text-zinc-600 mt-1">English + Spanish therapists. Tell us at booking.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-[#E8F0E8] border rounded-2xl p-6 text-center">
        <div className="font-bold">SoHo, New York • 10am–8pm • Book 30s on WhatsApp</div>
      </div>
    </div>
  );
}
