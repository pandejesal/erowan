import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Vista Homes"
      location="Dubai Hills"
      niche="Real Estate — Dubai"
      heroTitle="Leads, not just listings"
      heroSub="Filter by beds, area, AED. WhatsApp lead capture — portal independence for Gulf realtors."
      primaryCta="WhatsApp Listings"
      services={[
        { name: "1BR — Dubai Hills", price: "AED 1.1M" },
        { name: "2BR — Creek Harbour", price: "AED 1.8M" },
        { name: "3BR Villa — DAMAC", price: "AED 3.2M" },
        { name: "Studio — JVC", price: "AED 550K" },
        { name: "Off-plan — Tilal", price: "AED 900K" },
        { name: "Penthouse — Marina", price: "AED 4.5M" },
      ]}
    />
  );
}
