import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HubPageTemplate } from "@/components/sections/HubPageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "IT Solutions for NorCal Businesses | Milk Man Toner",
  description:
    "Network solutions, cybersecurity, cloud services, and business continuity for businesses in Sacramento and Northern California. Call (916) 253-9804.",
  path: "/it-solutions",
});

const hub = {
  label: "IT Solutions",
  description:
    "Milk Man Toner Company delivers practical IT solutions for Northern California businesses  -  from network infrastructure and cybersecurity to cloud services and disaster recovery. Local technicians, no call centers.",
};

const services = [
  {
    title: "Network Solutions",
    description:
      "Network design, installation, and ongoing management for business offices. Wired, wireless, and hybrid network infrastructure tailored to your office layout and security requirements.",
    href: "/it-solutions/network-solutions",
    features: [
      "Wired & wireless network design",
      "Managed switches, firewalls & access points",
      "Ongoing monitoring & management",
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business data with layered security solutions  -  endpoint protection, email security, network monitoring, and employee security training.",
    href: "/it-solutions/cybersecurity",
    features: [
      "Endpoint protection & EDR",
      "Email security & anti-phishing",
      "Security awareness training",
    ],
  },
  {
    title: "Cloud Services",
    description:
      "Cloud print, document management, and cloud infrastructure services that let your team work from anywhere without sacrificing security or control.",
    href: "/it-solutions/cloud-services",
    features: [
      "Cloud print & document management",
      "Microsoft 365 & Google Workspace",
      "Secure cloud storage & backup",
    ],
  },
  {
    title: "Business Continuity",
    description:
      "Backup and disaster recovery solutions that keep your business running when things go wrong  -  whether it's a ransomware attack, hardware failure, or natural disaster.",
    href: "/it-solutions/business-continuity",
    features: [
      "Automated cloud & local backup",
      "Rapid disaster recovery",
      "Tested recovery plans & procedures",
    ],
  },
];

export default function ITSolutionsPage() {
  return (
    <HubPageTemplate
      hub={hub}
      services={services}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "IT Solutions" }]}
      ctaHeading="Ready to strengthen your IT infrastructure?"
      ctaDescription="Free IT assessment for Northern California businesses. We'll identify gaps and recommend solutions."
    />
  );
}
