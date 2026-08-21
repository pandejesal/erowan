import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="SmileCare Dental"
      location="Dubai Healthcare City"
      niche="Clinics & Dental — DHCC"
      heroTitle="Trust before the chair"
      heroSub="DHA-licensed doctors, before/after (consent), insurance list, appointment request — not false real-time."
      primaryCta="Request Appointment"
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop"
      services={[
        { name: "Consultation", price: "AED 150" },
        { name: "Cleaning + Polish", price: "AED 300" },
        { name: "Whitening", price: "AED 900" },
        { name: "Braces Consult", price: "AED 200" },
        { name: "Implant", price: "AED 3500" },
        { name: "Kids Checkup", price: "AED 180" },
      ]}
    />
  );
}
