import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";

const service = services.find((s) => s.slug === "copier-lease")!;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/services/${service.slug}`,
});

export default function CopierLeasePage() {
  return <ServicePageTemplate service={service} />;
}
