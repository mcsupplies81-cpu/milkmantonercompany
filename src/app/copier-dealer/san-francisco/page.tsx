import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

const _baseMeta = buildMetadata({
  title: "Copier Dealer San Francisco & Marin | Milk Man Toner Company",
  description:
    "HP and Konica Minolta copier dealer serving San Francisco, Marin, and the North Bay. Local delivery, same-day service, free toner. Call (916) 253-9804.",
  path: "/copier-dealer/san-francisco",
});

export const metadata: Metadata = {
  ..._baseMeta,
  title: {
    absolute: "Copier Dealer San Francisco & Marin | Milk Man Toner Company",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving San Francisco, Marin County, and the North Bay with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/san-francisco",
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
    latitude: 37.7749,
    longitude: -122.4194,
  },
  areaServed: [
    "San Francisco",
    "Marin County",
    "San Rafael",
    "Novato",
    "Mill Valley",
    "Sausalito",
    "Tiburon",
    "Corte Madera",
    "Larkspur",
    "Fairfax",
    "Petaluma",
    "Santa Rosa",
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
          name: "Copier Leasing San Francisco",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Copier Sales San Francisco",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services San Francisco",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Toner Delivery San Francisco",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Printer Repair San Francisco",
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
    body: "Genuine HP parts, supplies, and factory-backed support. Not a reseller. An authorized partner with certified technicians who know every HP machine inside and out.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on the full bizhub lineup. Color and black-and-white multifunction copiers for professional offices of every size across San Francisco and Marin.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver toner and supplies directly to your San Francisco or Marin office at no extra charge. No shipping fees, no minimum orders, no hassle.",
  },
  {
    headline: "Same-Day Service",
    body: "Real technicians with real coverage across San Francisco, Marin County, and the North Bay. When your copier goes down, we are there the same day.",
  },
];

const serviceAreaRows = [
  ["San Francisco (all neighborhoods)", "Financial District"],
  ["SoMa", "Civic Center"],
  ["Mission District", "Marina District"],
  ["Pacific Heights", "Presidio"],
  ["Marin County", "San Rafael"],
  ["Novato", "Mill Valley"],
  ["Sausalito", "Tiburon"],
  ["Corte Madera", "Larkspur"],
  ["Fairfax", "Petaluma"],
  ["Santa Rosa", "North Bay"],
];

const faqs = [
  {
    question:
      "Do you actually service San Francisco - or do you just ship machines?",
    answer:
      "We have real technicians with active coverage across San Francisco, Marin County, and the North Bay. We deliver, install, and service at your office location. No shipping, no drop-off required.",
  },
  {
    question: "How fast can you get a copier to our San Francisco office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours. For urgent situations, same-day delivery may be available. Call us at (916) 253-9804 to confirm availability for your location.",
  },
  {
    question:
      "Do you work with law firms and title companies in San Francisco?",
    answer:
      "Yes. Law firms and title companies are some of our most active San Francisco and Marin clients. We understand the print volume, reliability, and document security requirements of professional offices and build our service agreements around them.",
  },
  {
    question: "What copier brands do you carry in San Francisco?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider. We carry the full line of HP LaserJet and Konica Minolta bizhub machines for sale, lease, and rental with local delivery and service.",
  },
  {
    question: "Is toner delivery free in San Francisco?",
    answer:
      "Yes. Free toner delivery is included for all San Francisco and Marin customers. We deliver HP and Konica Minolta supplies directly to your office at no extra charge and pick up empty cartridges for recycling at no charge.",
  },
  {
    question: "Do you offer month-to-month rentals in San Francisco?",
    answer:
      "Yes. We offer flexible month-to-month copier rentals with no long-term commitment. This is a popular option for San Francisco businesses with project-based or seasonal print needs.",
  },
];

export default function CopierDealerSanFranciscoPage() {
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
          <span className="text-brand-black">San Francisco &amp; Marin</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            San Francisco &amp; Marin
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copier Dealer San Francisco and Marin - HP and{" "}
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
              Milk Man Toner Company is the copier dealer San Francisco title
              companies, law firms, and professional offices trust across the
              city and Marin County. As an HP Authorized Dealer and Konica
              Minolta Certified provider, we deliver, install, and service
              copiers and printers directly at your office - with free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service calls, and flexible{" "}
              <Link
                href="/services/copier-lease"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                copier leasing
              </Link>{" "}
              terms built for Northern California businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Why SF and Marin Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why San Francisco and Marin Businesses Choose Milk Man
          </h2>
          <div className="max-w-3xl mb-6">
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              San Francisco businesses need a copier dealer that actually shows
              up. Not a national chain routing calls through a call center. Not
              a vendor that makes you wait a week for a technician. A local team
              with real coverage across the city, Marin County, and the North
              Bay - that picks up the phone and gets there fast.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65]">
              Title companies and law firms across San Francisco and Marin have
              trusted Milk Man Toner Company for exactly that reason.
              High-volume print environments cannot afford downtime. We make
              sure they never have to.
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
            Copiers and Printers for San Francisco and Marin Offices
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
            included.
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
                security built in. The preferred choice for San Francisco law
                firms and title companies running high monthly print volumes.
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
                cost of ownership. Backed by an HP Authorized Dealer with local
                service coverage across San Francisco and Marin.
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
            Serving San Francisco and Marin County
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We have active coverage across San Francisco and all of Marin
            County. Our technicians deliver, install, and service at your office
            - no drop-off, no shipping, no waiting.
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
            From the Financial District to Marin County and up through the
            North Bay, we have you covered.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales in San Francisco
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Leasing is the most popular choice for San Francisco and Marin
              businesses - and for good reason. It keeps capital free, locks in
              current pricing, and makes it easy to upgrade as your needs
              change. We offer flexible lease terms from 12 to 60 months through
              North Shore Leasing, LLC.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer to own, we sell new HP and Konica
              Minolta machines outright with full warranty and ongoing service
              coverage.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Either way, every customer gets the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and personal support that professional offices
              across San Francisco and Marin rely on.
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
          heading="San Francisco Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your San Francisco Office?"
        description="Free quote. Free toner delivery. Same-day service. Local coverage across San Francisco, Marin, and the North Bay."
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
