import DemoTemplate from "@/components/DemoTemplate";
export default function Page() {
  return (
    <DemoTemplate
      business="Al Noor Clinic"
      location="Muscat — Qurum"
      niche="Clinics & Dental — Muscat"
      heroTitle="Care that feels calm"
      heroSub="Omani + expat patients. Doctor credentials, location + map, insurance, Arabic toggle."
      primaryCta="Book Consultation"
      services={[
        { name: "GP Visit", price: "OMR 15" },
        { name: "Dental Check", price: "OMR 12" },
        { name: "Pediatric", price: "OMR 18" },
        { name: "Lab Tests", price: "OMR 20" },
        { name: "Vaccination", price: "OMR 10" },
        { name: "Wellness Package", price: "OMR 45" },
      ]}
    />
  );
}
