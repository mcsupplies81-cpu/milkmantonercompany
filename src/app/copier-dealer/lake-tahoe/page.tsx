import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Dealer Lake Tahoe & Truckee",
  description:
    "HP and Konica Minolta copier dealer serving Lake Tahoe, Truckee, and the Sierra Nevada corridor. Same-day service, free toner delivery. Call (916) 253-9804.",
  path: "/copier-dealer/lake-tahoe",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving Lake Tahoe, Truckee, South Lake Tahoe, Incline Village, and the Sierra Nevada corridor with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/lake-tahoe",
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
    latitude: 39.0968,
    longitude: -120.0324,
  },
  areaServed: [
    "Lake Tahoe",
    "Truckee",
    "South Lake Tahoe",
    "Incline Village",
    "Kings Beach",
    "Tahoe City",
    "Carnelian Bay",
    "Tahoe Vista",
    "Crystal Bay",
    "Stateline",
    "Zephyr Cove",
    "Meyers",
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
        itemOffered: {
          "@type": "Service",
          name: "Copier Leasing Lake Tahoe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Copier Sales Truckee" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services Lake Tahoe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Toner Delivery Lake Tahoe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Printer Repair Truckee",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konica Minolta Dealer Lake Tahoe",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "HP Copier Dealer Lake Tahoe",
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
    body: "Genuine HP parts, factory-backed support, and certified technicians serving Lake Tahoe and Truckee. Not a reseller. An authorized HP partner with real local coverage.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on the full bizhub lineup. Color and black-and-white multifunction copiers for professional offices across North Lake, South Lake, and Truckee.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver HP and Konica Minolta toner and supplies directly to your Lake Tahoe or Truckee office at no extra charge. No shipping fees, no minimum orders, no running out at the wrong time.",
  },
  {
    headline: "Same-Day Service",
    body: "Based at the base of the Sierra in Loomis, we have real coverage across Lake Tahoe and Truckee. Call before noon and we will be there that day.",
  },
];

const serviceAreaRows = [
  ["Truckee", "Kings Beach"],
  ["Tahoe City", "Carnelian Bay"],
  ["Tahoe Vista", "Crystal Bay"],
  ["Incline Village", "North Lake Tahoe"],
  ["South Lake Tahoe", "Stateline"],
  ["Zephyr Cove", "Meyers"],
  ["Tahoma", "Homewood"],
  ["Soda Springs", "Donner Lake"],
];

const faqs = [
  {
    question:
      "Do you actually service Lake Tahoe and Truckee or just ship machines?",
    answer:
      "We have real coverage across Lake Tahoe and Truckee. We are based in Loomis at the base of the Sierra, which puts us closer to Tahoe than most copier dealers in Sacramento or Reno. We deliver, install, and service at your office on both sides of the lake. Call (916) 253-9804 to confirm response times for your specific location.",
  },
  {
    question: "How fast can you get a copier to our Tahoe or Truckee office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours. For urgent situations, same-day delivery may be available depending on your location and current road conditions. Call (916) 253-9804 to check availability.",
  },
  {
    question: "Do you work with law firms and title companies in Lake Tahoe?",
    answer:
      "Yes. Law firms and title companies are among our most active Lake Tahoe and Truckee clients. We understand the document volume, deadline pressure, and reliability requirements of professional offices and build our service agreements around them.",
  },
  {
    question:
      "What copier brands do you carry for Lake Tahoe and Truckee?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider - the only copier dealer with both certifications actively serving the Lake Tahoe and Truckee area. We carry the full HP LaserJet and Konica Minolta bizhub lineup for sale, lease, and rental with local delivery and service.",
  },
  {
    question: "Is toner delivery free in Lake Tahoe and Truckee?",
    answer:
      "Yes. Free toner delivery is included for all Lake Tahoe and Truckee customers. We deliver HP and Konica Minolta supplies directly to your office at no extra charge and pick up empty cartridges for recycling.",
  },
  {
    question: "Do you offer month-to-month rentals in Lake Tahoe?",
    answer:
      "Yes. We offer flexible month-to-month copier rentals with no long-term commitment. A popular option for seasonal businesses, resort offices, and property management companies with changing print needs throughout the year.",
  },
  {
    question: "Do you cover South Lake Tahoe as well as North Lake?",
    answer:
      "Yes. We cover both sides of the lake including South Lake Tahoe, Stateline, and Zephyr Cove on the Nevada side, as well as the full North Shore from Kings Beach through Tahoe City and Incline Village.",
  },
];

export default function CopierDealerLakeTahoePage() {
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
          <span className="text-brand-black">Lake Tahoe &amp; Truckee</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Lake Tahoe &amp; Truckee
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copier Dealer Lake Tahoe and Truckee - HP and{" "}
            <Link
              href="/office-technology/copiers-printers"
              className="text-brand-mid hover:text-brand-black transition-colors"
            >
              Konica Minolta
            </Link>{" "}
            Specialists
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
              Milk Man Toner Company is the copier dealer Lake Tahoe and Truckee
              law firms, title companies, property management offices, and
              professional businesses rely on across the Sierra Nevada corridor.
              As an HP Authorized Dealer and Konica Minolta Certified provider,
              we deliver, install, and service copiers and printers directly at
              your office - covering both sides of the lake and all the way
              through Truckee. Free{" "}
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
              terms built for mountain community businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Why Lake Tahoe and Truckee Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why Lake Tahoe and Truckee Businesses Choose Milk Man
          </h2>
          <div className="max-w-3xl mb-6">
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Finding reliable office equipment service in the Lake Tahoe and
              Truckee area has always been a challenge. Most copier dealers treat
              the Sierra Nevada corridor as an afterthought - too far from
              Sacramento, too far from Reno, not worth the drive.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Milk Man Toner Company sees it differently. We are headquartered
              in Loomis, right at the base of the Sierra, which puts Lake Tahoe
              and Truckee squarely in our backyard. Law firms, title companies,
              property management offices, and resort businesses across North
              Lake, South Lake, and Truckee have trusted us for exactly that
              reason - we show up, we know the area, and we treat mountain
              community businesses the same way we treat every other customer.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65]">
              And we bring something no other Tahoe area copier dealer can offer
              - we are both an HP Authorized Dealer and{" "}
              <Link
                href="/office-technology/copiers-printers"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                Konica Minolta
              </Link>{" "}
              Certified. Two brands, one local team, certified service on both.
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
            Copiers and Printers for Lake Tahoe and Truckee Offices
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
            at your location - no matter which side of the lake you are on.
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
                security built in. The trusted choice for Lake Tahoe and Truckee
                law firms and title companies that need consistent performance at
                high monthly print volumes.
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
                cost of ownership. Backed by an HP Authorized Dealer with real
                service coverage across the Sierra Nevada corridor.
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
            Serving Lake Tahoe, Truckee, and the Sierra Nevada Corridor
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We cover both sides of the lake and all the way through Truckee and
            the surrounding communities. Our technicians deliver, install, and
            service at your office - no drop-off, no shipping, no waiting on a
            technician from out of the area.
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
            From Truckee and the North Shore all the way around to South Lake
            Tahoe and Stateline, we have the Sierra Nevada corridor covered.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales in Lake Tahoe and Truckee
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Leasing is the most flexible option for Lake Tahoe and Truckee
              businesses - it keeps capital free, locks in current pricing, and
              makes upgrading easy as your needs change. We offer flexible lease
              terms from 12 to 60 months through North Shore Leasing, LLC, with
              clear agreements and no surprise fees.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer ownership, we sell new HP and Konica
              Minolta machines outright with full warranty and ongoing local
              service coverage across the Sierra Nevada corridor.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Every Lake Tahoe and Truckee customer gets the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and personal support that mountain community
              businesses have come to rely on from Milk Man.
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
          heading="Lake Tahoe and Truckee Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your Lake Tahoe or Truckee Office?"
        description="Free quote. Free toner delivery. Same-day service. Real coverage across Lake Tahoe, Truckee, and the full Sierra Nevada corridor."
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
