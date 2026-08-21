import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Mira Cafe"
      location="JLT, Dubai"
      niche="Restaurants & Cafes — JLT"
      heroTitle="Menu that orders — not PDFs"
      heroSub="Tap, customize, WhatsApp order — zero commission. Table reserve + daily offer reels."
      primaryCta="Order Now"
      image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "Avocado Toast", price: "AED 38" },
        { name: "Shakshuka", price: "AED 42" },
        { name: "Mira Burger", price: "AED 55" },
        { name: "Iced Spanish Latte", price: "AED 28" },
        { name: "Açaí Bowl", price: "AED 45" },
        { name: "Brunch for 2", price: "AED 149" },
      ]}
    />
  );
}
