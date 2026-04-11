import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { HubPageTemplate } from "@/components/sections/HubPageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Managed Services for NorCal Businesses | Milk Man Toner",
  description:
    "Managed print, managed IT, and help desk services for businesses in Sacramento, Bay Area, and Northern California. One call handles everything. Call (916) 253-9804.",
  path: "/managed-services",
});

const hub = {
  label: "Managed Services",
  description:
    "Stop reacting to technology problems. Milk Man Toner Company manages your print fleet, IT infrastructure, and help desk so you can focus on running your business  -  not chasing down service calls.",
};

const services = [
  {
    title: "Managed Print",
    description:
      "We monitor your entire print fleet, auto-ship toner before you run out, handle all service calls, and provide detailed usage reporting  -  for one predictable monthly cost.",
    href: "/managed-services/managed-print",
    features: [
      "Proactive fleet monitoring 24/7",
      "Automatic toner replenishment",
      "20-30% average cost reduction",
    ],
  },
  {
    title: "Managed IT",
    description:
      "Outsourced IT management for small and mid-size businesses. We manage your infrastructure, keep your systems up to date, and respond to issues before they become problems.",
    href: "/managed-services/managed-it",
    features: [
      "Full IT infrastructure management",
      "Proactive monitoring & patching",
      "Local NorCal technicians  -  not a call center",
    ],
  },
  {
    title: "Help Desk",
    description:
      "Local tech support on call for your team. When something breaks, your employees call us  -  and a real person answers.",
    href: "/managed-services/help-desk",
    features: [
      "Live answer  -  no automated menus",
      "Remote and on-site support",
      "Priority response for managed customers",
    ],
  },
];

export default function ManagedServicesPage() {
  return (
    <HubPageTemplate
      hub={hub}
      services={services}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Managed Services" }]}
      ctaHeading="Ready to stop managing technology and start using it?"
      ctaDescription="Free assessment of your current print and IT environment  -  no obligation."
    />
  );
}
