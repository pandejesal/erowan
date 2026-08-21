import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Al Hadi Grill"
      location="London — Soho"
      niche="Restaurants & Cafes — London"
      heroTitle="London grill, ordered in seconds"
      heroSub="English menu, modifiers (spice, sides), WhatsApp checkout. No commission."
      primaryCta="Order WhatsApp"
      image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "Mixed Grill Platter", price: "£22" },
        { name: "Shish Tawook", price: "£12" },
        { name: "Kabsa Lahm", price: "£16" },
        { name: "Hummus + Bread", price: "£6" },
        { name: "Fresh Juices", price: "£5" },
        { name: "Family Feast", price: "£45" },
      ]}
    />
  );
}
