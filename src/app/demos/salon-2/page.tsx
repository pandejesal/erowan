import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Bloom Spa"
      location="Riyadh — Olaya"
      niche="Salons & Spas — Riyadh"
      heroTitle="Riyadh’s calm — booked in one tap"
      heroSub="Ladies-only spa with Arabic + English. Staff pages, real-time slots, WhatsApp confirmation."
      primaryCta="Book Slot"
      services={[
        { name: "Aroma Massage 60m", price: "SAR 280" },
        { name: "Hydra Facial", price: "SAR 350" },
        { name: "Wax Full Body", price: "SAR 200" },
        { name: "Nail Art", price: "SAR 110" },
        { name: "Hair Spa", price: "SAR 180" },
        { name: "Bridal Package", price: "SAR 1200" },
      ]}
    />
  );
}
