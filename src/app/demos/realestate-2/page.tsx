import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Harbor Realty"
      location="Doha — The Pearl"
      niche="Real Estate — Doha"
      heroTitle="Doha listings that convert"
      heroSub="Bilingual, RERA-style footer, agent cards, map + mortgage hook. Leads to WhatsApp/HubSpot free."
      primaryCta="Get Brochure"
      services={[
        { name: "2BR — Pearl", price: "QAR 1.4M" },
        { name: "3BR — Lusail", price: "QAR 2.1M" },
        { name: "Villa — Al Rayyan", price: "QAR 3.8M" },
        { name: "Office — West Bay", price: "QAR 2.5M" },
        { name: "Shop — Souq Waqif", price: "QAR 1.2M" },
        { name: "Land — Al Khor", price: "QAR 900K" },
      ]}
    />
  );
}
