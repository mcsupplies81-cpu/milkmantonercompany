import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { locations } from "@/data/locations";
import { LocationPageTemplate } from "@/components/sections/LocationPageTemplate";

const location = locations.find((l) => l.slug === "sacramento")!;

export const metadata: Metadata = buildMetadata({
  title: location.metaTitle,
  description: location.metaDescription,
  path: `/locations/${location.slug}`,
});

export default function SacramentoPage() {
  return <LocationPageTemplate location={location} />;
}
