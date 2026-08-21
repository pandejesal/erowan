import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Harbor Realty"
      location="Miami — Brickell"
      niche="Real Estate — Miami"
      heroTitle="Miami listings that convert"
      heroSub="Bilingual, agent cards, map + mortgage hook. Leads to WhatsApp/HubSpot free."
      primaryCta="Get Brochure"
      image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "2BR — Brickell", price: "$450K" },
        { name: "3BR — Miami Beach", price: "$780K" },
        { name: "Villa — Coral Gables", price: "$1.2M" },
        { name: "Office — Downtown", price: "$850K" },
        { name: "Shop — Wynwood", price: "$420K" },
        { name: "Land — Coconut Grove", price: "$300K" },
      ]}
    />
  );
}
