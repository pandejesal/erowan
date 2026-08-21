import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Bloom Spa"
      location="New York — SoHo"
      niche="Salons & Spas — New York"
      heroTitle="NYC calm — booked in one tap"
      heroSub="Boutique spa with English + Spanish. Staff pages, real-time slots, WhatsApp confirmation."
      primaryCta="Book Slot"
      image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "Aroma Massage 60m", price: "$85" },
        { name: "Hydra Facial", price: "$120" },
        { name: "Wax Full Body", price: "$70" },
        { name: "Nail Art", price: "$40" },
        { name: "Hair Spa", price: "$65" },
        { name: "Bridal Package", price: "$400" },
      ]}
    />
  );
}
