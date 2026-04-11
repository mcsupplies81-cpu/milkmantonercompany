import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ServiceCityTemplate } from "@/components/sections/ServiceCityTemplate";

export const metadata: Metadata = buildMetadata({
  title: "Managed Print Services in Placer County, CA | Milk Man Toner Company",
  description:
    "Managed print services across all of Placer County - Auburn, Rocklin, Roseville, Lincoln, Loomis, Granite Bay, Colfax. Family-owned and Placer County based. Call (916) 253-9804.",
  path: "/managed-print-placer-county",
});

export default function ManagedPrintPlacerCountyPage() {
  return (
    <ServiceCityTemplate
      serviceName="Managed Print Services"
      serviceSlug="managed-print-placer-county"
      cityName="Placer County"
      citySlug="placer-county"
      region="Placer County, CA"
      heroHeading="Managed Print Services in Placer County, CA"
      heroSubheading="We are not a company that serves Placer County - we are a Placer County company. Based in Loomis since day one. Same-day service everywhere from Roseville to Auburn to Colfax."
      introParagraphs={[
        "Milk Man Toner Company is headquartered at 3444 Swetzer Road in Loomis, California - in the geographic heart of Placer County. We did not expand into Placer County from Sacramento or set up a satellite office to chase market share. This is our home. Our team lives in Loomis, Rocklin, Lincoln, and Penryn. We shop at Raley's on Horseshoe Bar Road, eat lunch at local spots in Auburn and Roseville, and drive the same I-80 and Highway 65 corridors that our customers do every day. When we say we are Placer County's managed print company, we are not using a marketing tagline - it is simply a description of where we exist.",
        "Placer County's business landscape is as varied as its geography, and we serve all of it. The high-volume office campuses along Roseville's East Roseville Parkway and Blue Oaks Boulevard need different print solutions than the boutique professional offices in Auburn's historic downtown or the agricultural businesses out in the Lincoln and Penryn flatlands. We understand that diversity and build managed print programs accordingly. A commercial real estate firm in Rocklin's Stanford Ranch needs fleet monitoring and color copier management. A vineyard office in Newcastle needs reliable black-and-white output and responsive service when the harvest season accounting kicks in. We handle both.",
        "Our managed print program covers every corner of the county. Roseville and Rocklin's business corridors, the Auburn business parks along Bell Road and Grass Valley Highway, Lincoln's fast-growing commercial zones near Ferrari Ranch Road, Granite Bay's professional services offices, the smaller communities of Penryn, Loomis, and Newcastle, and the foothill towns of Colfax and Meadow Vista. We visit all of these areas regularly - not as edge-of-route stops, but as core service territory. Being Placer Grown means we invest in the whole county, not just the densest zip codes.",
        "Managed print from Milk Man Toner includes automatic toner replenishment, remote fleet monitoring, unlimited service calls, and a single monthly invoice. We start every new account with a free print audit - we come to your Placer County office, document your current equipment and spending, and show you exactly what a managed plan would cost and save. There is no obligation and no pressure. We believe the numbers speak for themselves, and we are confident enough in our pricing and service quality to show you the full picture before asking for your business.",
      ]}
      benefits={[
        {
          title: "Placer Grown - truly local",
          description:
            "Our office is in Loomis. Our technicians live in Placer County. When you call us, you reach a person who knows your street, your business park, and your area. We are not a national chain with a local franchise.",
        },
        {
          title: "Full county coverage",
          description:
            "Auburn, Lincoln, Rocklin, Roseville, Loomis, Penryn, Granite Bay, Colfax, Newcastle - we service all of Placer County with the same fast response times. No rural surcharges, no service area exclusions.",
        },
        {
          title: "County-wide fleet management",
          description:
            "If your business has locations in Roseville and Auburn, or in Lincoln and Granite Bay, we manage the whole fleet under one plan. Unified reporting, one invoice, one point of contact for every device in every Placer County location.",
        },
        {
          title: "Automatic toner - county-wide",
          description:
            "Remote monitoring watches supply levels across all your Placer County devices. Toner is shipped and delivered to each location automatically, before anyone runs out. No guessing, no emergency orders.",
        },
        {
          title: "Same-day service, everywhere",
          description:
            "Being based in Loomis means we can reach Auburn in 20 minutes, Roseville in 15, and Lincoln in 25. Same-day response is not a marketing promise - it is a realistic commitment for every Placer County address.",
        },
        {
          title: "Family-owned accountability",
          description:
            "When something goes wrong, you talk to us directly - not a national customer service line. We are invested in our reputation in this county because we live and work here. Your satisfaction matters to our neighbors too.",
        },
      ]}
      faqs={[
        {
          question: "Do you serve all of Placer County, including Auburn and Colfax?",
          answer:
            "Yes. We cover the full county from Roseville and Rocklin in the west to Auburn, Colfax, and the upper foothill communities in the east. Auburn's business district along Bell Road and Grass Valley Highway, the commercial parks near Dry Creek Road, and even the smaller foothill communities like Meadow Vista and Weimar are within our regular service territory. Colfax businesses are a bit further out, but we make regular runs and can schedule service there with a few days' notice. No matter where in Placer County your office is, you are not at the edge of our service area - you are in it.",
        },
        {
          question: "What makes Milk Man Toner different from a national managed print provider?",
          answer:
            "The biggest difference is accountability and speed. A national provider routes your service call through a regional dispatch center, often sub-contracts repairs to a local contractor who has never met you, and measures response time in days. We route your call to a person in Placer County who dispatches our own technician - usually the same person who set up your account. We measure response time in hours, not days. We also do not lock you into multi-year contracts with impossible exit clauses. We earn your business every month by showing up and delivering. Our entire reputation is built in this county, which means we take every account personally.",
        },
        {
          question: "Can you manage print for a business with offices in both Placer County and Sacramento?",
          answer:
            "Absolutely. Multi-location managed print across Placer County and Sacramento is a common setup for our clients. We serve both regions, so the transition between a Roseville headquarters and a Downtown Sacramento branch office is seamless from our end. All devices are on the same monitoring platform, all toner shipments are coordinated, and you receive one consolidated monthly invoice for every location. Many of our clients are professional services firms, healthcare groups, and real estate companies with offices spread across the Sacramento and Placer County region.",
        },
        {
          question: "Is there a minimum number of devices required for managed print in Placer County?",
          answer:
            "No minimum. We work with single-printer offices in Loomis and 30-device campuses in Roseville. The economics shift at different scales, and we will always tell you honestly if a managed plan does not make financial sense for your situation. For very small offices, our toner delivery and on-call service program can be a better fit than a full managed print contract. The free audit we offer is designed to figure out which approach saves you the most money and time, regardless of your fleet size.",
        },
      ]}
      relatedLocationHref="/locations/sacramento"
      relatedLocationLabel="View Sacramento service area"
      serviceHubHref="/managed-services/managed-print"
      serviceHubLabel="About managed print services"
    />
  );
}
