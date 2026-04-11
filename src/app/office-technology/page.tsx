import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HubPageTemplate } from "@/components/sections/HubPageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Office Technology Solutions in Northern California | Milk Man Toner",
  description:
    "Copiers, printers, production print, wide format, and print software for NorCal businesses. HP and Konica Minolta dealer. Call (916) 253-9804.",
  path: "/office-technology",
});

const hub = {
  label: "Office Technology",
  description:
    "From desktop printers to high-volume production systems, Milk Man Toner Company delivers the right office technology for your business. We're your authorized HP and Konica Minolta dealer in Northern California  -  with free delivery, free toner, and same-day service built in.",
};

const services = [
  {
    title: "Copiers & Printers",
    description:
      "Industry-leading Konica Minolta bizhub and HP LaserJet multifunction devices  -  matched to your office's size and print volume. Sales, lease, and rental available.",
    href: "/office-technology/copiers-printers",
    features: [
      "HP & Konica Minolta authorized dealer",
      "Flexible lease, rental, and purchase options",
      "Free delivery & professional installation",
    ],
  },
  {
    title: "Production Print",
    description:
      "High-volume print systems for businesses that print thousands of pages daily. Professional color output, fast speeds, and finishing capabilities that rival commercial print shops.",
    href: "/office-technology/production-print",
    features: [
      "High-volume output up to 135 ppm",
      "Professional color & finishing options",
      "Designed for 24/7 production environments",
    ],
  },
  {
    title: "Wide Format Printers",
    description:
      "Plotters and large-format printers for architects, engineers, and designers. Print blueprints, banners, signage, and technical drawings in-house.",
    href: "/office-technology/wide-format",
    features: [
      "CAD, GIS & architectural printing",
      '24" to 60" wide format output',
      "HP DesignJet & Konica Minolta plotters",
    ],
  },
  {
    title: "Print Software",
    description:
      "PaperCut print management, fleet analytics, and document workflow software to reduce costs, improve security, and simplify print management.",
    href: "/office-technology/print-software",
    features: [
      "PaperCut MF & NG authorized reseller",
      "Print tracking, rules & cost allocation",
      "Secure print release & pull printing",
    ],
  },
];

export default function OfficeTechnologyPage() {
  return (
    <HubPageTemplate
      hub={hub}
      services={services}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Technology" }]}
      ctaHeading="Not sure what technology you need?"
      ctaDescription="Tell us about your office and we'll recommend the right equipment  -  no obligation, no pressure."
    />
  );
}
