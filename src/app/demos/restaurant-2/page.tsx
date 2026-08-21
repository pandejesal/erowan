import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Al Hadi Grill"
      location="Jeddah — Corniche"
      niche="Restaurants & Cafes — Jeddah"
      heroTitle="Jeddah grill, ordered in seconds"
      heroSub="Arabic + English menu, modifiers (spice, rice), WhatsApp checkout. No Talabat cut."
      primaryCta="Order WhatsApp"
      services={[
        { name: "Mixed Grill Platter", price: "SAR 85" },
        { name: "Shish Tawook", price: "SAR 45" },
        { name: "Kabsa Lahm", price: "SAR 65" },
        { name: "Hummus + Bread", price: "SAR 22" },
        { name: "Fresh Juices", price: "SAR 18" },
        { name: "Family Feast", price: "SAR 199" },
      ]}
    />
  );
}
