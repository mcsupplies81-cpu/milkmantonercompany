import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Dealer Northern California | Chico, Redding & I-5 Corridor",
  description:
    "HP and Konica Minolta copier dealer serving Chico, Redding, Red Bluff, Yuba City, and the I-5 corridor. Same-day service, free toner delivery. Call (916) 253-9804.",
  path: "/copier-dealer/northern-california",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving Chico, Redding, Red Bluff, Yuba City, Oroville, and the Northern California I-5 corridor with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/northern-california",
  telephone: "+19162539804",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3444 Swetzer Rd Suite D",
    addressLocality: "Loomis",
    addressRegion: "CA",
    postalCode: "95650",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7285,
    longitude: -121.8375,
  },
  areaServed: [
    "Chico",
    "Redding",
    "Red Bluff",
    "Yuba City",
    "Marysville",
    "Oroville",
    "Corning",
    "Orland",
    "Willows",
    "Grass Valley",
    "Nevada City",
    "Paradise",
    "Gridley",
    "Live Oak",
    "Colusa",
    "Williams",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Copier and Printer Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Copier Leasing Chico CA" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Copier Sales Redding CA" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services Chico",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Toner Delivery Northern California",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Printer Repair Chico CA",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Copier Dealer Redding CA",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HP Copier Dealer Northern California",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konica Minolta Dealer Chico CA",
        },
      },
    ],
  },
  brand: [
    { "@type": "Brand", name: "HP" },
    { "@type": "Brand", name: "Konica Minolta" },
  ],
};

const features = [
  {
    headline: "HP Authorized Dealer",
    body: "Genuine HP parts, factory-backed support, and certified technicians serving Chico, Redding, and the full I-5 corridor. Not a reseller. An authorized HP partner with real Northern California coverage.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on the full bizhub lineup. Color and black-and-white multifunction copiers for professional offices across Chico, Redding, Yuba City, and every community in between.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver HP and Konica Minolta toner and supplies directly to your Northern California office at no extra charge. Chico, Redding, Red Bluff, Yuba City - no shipping fees, no minimum orders, delivered right to your door.",
  },
  {
    headline: "Same-Day Service",
    body: "Based in Loomis at the gateway to Northern California, we have real coverage across the I-5 corridor. Call before noon and we are at your Chico or Redding office that afternoon.",
  },
];

const serviceAreaRows = [
  ["Redding", "Red Bluff"],
  ["Corning", "Orland"],
  ["Chico", "Paradise"],
  ["Oroville", "Magalia"],
  ["Willows", "Colusa"],
  ["Yuba City", "Marysville"],
  ["Gridley", "Live Oak"],
  ["Grass Valley", "Nevada City"],
  ["Williams", "Maxwell"],
  ["Biggs", "Durham"],
];

const faqs = [
  {
    question:
      "Do you really service Redding and Chico or just ship machines?",
    answer:
      "We have real technician coverage across the full I-5 corridor from Yuba City through Chico, Red Bluff, and up to Redding. We are based in Loomis at the base of the Sierra, which puts us closer to Chico and Redding than most Bay Area or Sacramento dealers. We deliver, install, and service at your office. No shipping, no drop-off. Call (916) 253-9804 to confirm response times for your specific location.",
  },
  {
    question:
      "How fast can you get a copier to our Chico or Redding office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours. For urgent situations, same-day delivery is available across the I-5 corridor including Chico and Redding. Call (916) 253-9804 to confirm availability.",
  },
  {
    question:
      "Do you work with law firms and title companies in Northern California?",
    answer:
      "Yes. Law firms and title companies are among our most active clients across the I-5 corridor. We understand the document volume, deadline pressure, and uptime requirements of professional offices and build our service agreements specifically around them.",
  },
  {
    question: "What copier brands do you carry in Northern California?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider - the only copier dealer with both certifications actively serving the Northern California I-5 corridor. We carry the full HP LaserJet and Konica Minolta bizhub lineup for sale, lease, and rental with local delivery and service.",
  },
  {
    question: "Is toner delivery free in Chico and Redding?",
    answer:
      "Yes. Free toner delivery is included for all Northern California customers including Chico, Redding, Red Bluff, Yuba City, and every community along the I-5 corridor. We deliver HP and Konica Minolta supplies directly to your office at no extra charge and pick up empty cartridges for recycling.",
  },
  {
    question: "Do you offer month-to-month rentals in Northern California?",
    answer:
      "Yes. We offer flexible month-to-month copier rentals with no long-term commitment. A popular option for Northern California businesses with seasonal needs, project-based print requirements, or offices that want to try a machine before committing to a lease.",
  },
  {
    question:
      "Do you cover smaller communities like Corning, Orland, and Willows?",
    answer:
      "Yes. We cover the full I-5 corridor including smaller communities between the major cities. Corning, Orland, Willows, Colusa, Gridley, and every stop in between. If your business is on or near the I-5 corridor in Northern California, we can get there. Call (916) 253-9804 to confirm coverage for your specific location.",
  },
];

export default function CopierDealerNorthernCaliforniaPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <span className="hover:text-brand-black transition-colors">
            Copier Dealer
          </span>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Northern California</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Northern California I-5 Corridor
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copier Dealer Northern California - Chico, Redding, and the I-5
            Corridor
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block"
            >
              Get a free quote
            </Link>
            <a
              href={company.phoneHref}
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-[18px] py-2.5 tracking-[0.04em] hover:bg-brand-black hover:text-white transition-colors inline-block"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Milk Man Toner Company is the copier dealer Northern California
              law firms, title companies, and professional offices rely on across
              Chico, Redding, Red Bluff, Yuba City, and the full I-5 corridor.
              As an HP Authorized Dealer and{" "}
              <Link
                href="/office-technology/copiers-printers"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                Konica Minolta
              </Link>{" "}
              Certified provider, we deliver, install, and service copiers and
              printers directly at your office - from Yuba City in the south all
              the way through Chico, Oroville, Red Bluff, and up to Redding in
              the north. Free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and{" "}
              <Link
                href="/services/copier-lease"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                leasing
              </Link>{" "}
              terms built for Northern California businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Northern California Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why Northern California Businesses Choose Milk Man
          </h2>
          <div className="max-w-3xl mb-6">
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              The I-5 corridor north of Sacramento is underserved by copier
              dealers. Most vendors treat Chico and Redding as edge cases - too
              far from Sacramento to bother with, not worth dedicated coverage.
              Law firms, title companies, medical offices, and professional
              businesses from Yuba City to Redding have paid the price for that
              attitude for years - slow response times, no local technicians,
              and supply deliveries that take days.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Milk Man Toner Company covers the entire I-5 corridor with the
              same same-day service and free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>{" "}
              we provide everywhere else we operate. We are based in Loomis,
              right at the gateway to Northern California, which means Chico is
              less than 90 minutes away and Redding is a straight shot up I-5.
              When your copier goes down in the middle of a closing or a court
              deadline, we are there the same day. Not next week. Not whenever a
              technician can make the drive.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65]">
              And we bring something no other Northern California I-5 corridor
              dealer can offer - we are both an HP Authorized Dealer and Konica
              Minolta Certified. Most dealers up here carry one brand or neither.
              We carry both, with certified technicians on every machine we sell.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="border-[1.5px] border-brand-black bg-white p-5"
              >
                <h3 className="font-heading text-base text-brand-black mb-2">
                  {feature.headline}
                </h3>
                <p className="text-[11px] text-[#666] leading-[1.55]">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Copiers and Printers for Northern California Offices
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We carry the full line of{" "}
            <Link
              href="/office-technology/copiers-printers"
              className="text-brand-mid underline hover:text-brand-black transition-colors"
            >
              HP LaserJet
            </Link>{" "}
            and Konica Minolta bizhub machines, matched to your office size,
            print volume, and budget. Every machine is available for sale,
            lease, or month-to-month rental with full delivery and installation
            at your location - anywhere along the I-5 corridor from Yuba City
            to Redding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-steel-pale p-5">
              <span className="inline-block bg-brand-black text-white text-[9px] px-2 py-0.5 mb-2">
                Konica Minolta
              </span>
              <h3 className="font-heading text-base text-brand-black mb-2">
                Konica Minolta bizhub Series
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.55] mb-3">
                Color and black-and-white multifunction copiers from 25 to 65
                pages per minute. Print, copy, scan, and fax in one device.
                Touchscreen interface, mobile printing, and enterprise-grade
                security built in. The trusted choice for Northern California
                law firms and title companies that need consistent performance
                and zero tolerance for downtime.
              </p>
              <Link
                href="/contact"
                className="text-[11px] text-brand-mid font-medium hover:text-brand-black transition-colors"
              >
                Get a Konica Minolta quote &rarr;
              </Link>
            </div>
            <div className="border border-steel-pale p-5">
              <span className="inline-block bg-[#0096D6] text-white text-[9px] px-2 py-0.5 mb-2">
                HP
              </span>
              <h3 className="font-heading text-base text-brand-black mb-2">
                HP LaserJet Pro and Enterprise
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.55] mb-3">
                Reliable laser printers for small offices to large professional
                workgroups. PageWide high-speed output, AirPrint ready, and low
                cost of ownership. Backed by an HP Authorized Dealer with
                certified technician coverage across Northern California and the
                I-5 corridor.
              </p>
              <Link
                href="/contact"
                className="text-[11px] text-brand-mid font-medium hover:text-brand-black transition-colors"
              >
                Get an HP quote &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Serving the I-5 Corridor from Yuba City to Redding
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We cover the full Northern California I-5 corridor with active
            technician coverage at every stop. Our team delivers, installs, and
            services at your office location - no drop-off, no shipping, no
            waiting on someone to make the drive from the Bay Area.
          </p>
          <div className="border border-steel-pale bg-white">
            {serviceAreaRows.map(([left, right], i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-steel-pale border-b border-steel-pale last:border-b-0"
              >
                <div className="px-4 py-2.5 text-[11px] text-[#555]">
                  {left}
                </div>
                <div className="px-4 py-2.5 text-[11px] text-[#555]">
                  {right}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#555] leading-[1.75] mt-4">
            From Yuba City and Marysville in the south, through Chico and
            Oroville, all the way up through Red Bluff and into Redding - we
            have the entire I-5 corridor covered.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales Across Northern California
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Leasing is the smart choice for most Northern California businesses
              - it keeps capital free, locks in current pricing, and makes
              upgrading easy as your needs grow. We offer flexible lease terms
              from 12 to 60 months through North Shore Leasing, LLC, with clear
              agreements and no surprise fees at the end of your term.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer ownership, we sell new HP and Konica
              Minolta machines outright with full warranty and ongoing local
              service coverage across the I-5 corridor.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Every Northern California customer gets the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and personal support that professional offices
              across Chico, Redding, and the corridor have come to rely on from
              Milk Man.
            </p>
            <Link
              href="/contact"
              className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block"
            >
              Get a free quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-steel-bg">
        <FAQAccordion
          label="FAQ"
          heading="Northern California Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your Northern California Office?"
        description="Free quote. Free toner delivery. Same-day service. Real coverage from Yuba City through Chico, Red Bluff, and all the way to Redding."
        primaryCTA={{ label: "Request a free quote", href: "/contact" }}
        secondaryCTA={{
          label: `Call ${company.phone}`,
          href: company.phoneHref,
        }}
        showPhone
      />
    </>
  );
}
