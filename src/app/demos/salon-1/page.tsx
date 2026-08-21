import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Noura Salon"
      location="Dubai Marina"
      niche="Salons & Spas — Dubai"
      heroTitle="Book your glow — no call needed"
      heroSub="After-hours booking for busy Dubai women. See services, pick a slot, confirm on WhatsApp — in 30 seconds."
      primaryCta="Book Now"
      services={[
        { name: "Haircut + Blowdry", price: "AED 120" },
        { name: "Gel Manicure", price: "AED 90" },
        { name: "Moroccan Bath", price: "AED 250" },
        { name: "Bridal Trial", price: "AED 400" },
        { name: "Keratin", price: "AED 600" },
        { name: "Brows & Lash", price: "AED 150" },
      ]}
    />
  );
}
