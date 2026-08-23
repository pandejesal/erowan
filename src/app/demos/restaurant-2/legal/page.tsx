export const metadata = {
  title: "Legal — Al Hadi Grill JLT",
  description: "Privacy, no commission. Demo by Erowan.",
  alternates: { canonical: "https://erowan.com/demos/restaurant-1/legal" },
};

export default function Page(){
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="text-3xl font-serif font-bold">Legal</h1>
      <div className="mt-6 bg-white border rounded-2xl p-6"><div className="font-bold">Privacy</div><p className="text-sm text-zinc-600 mt-2">No cookies, data via WhatsApp to Meta, leads.json demo.</p></div>
      <div className="mt-4 bg-white border rounded-2xl p-6"><div className="font-bold">No commission</div><p className="text-sm text-zinc-600 mt-2">Mira beats Talabat 30% fees via site.</p></div>
    </div>
  );
}
