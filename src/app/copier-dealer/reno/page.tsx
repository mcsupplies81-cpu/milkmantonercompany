import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Dealer Reno NV",
  description:
    "HP and Konica Minolta copier dealer serving Reno, Sparks, Carson City, and Northern Nevada. Same-day service, free toner delivery. Call (916) 253-9804.",
  path: "/copier-dealer/reno",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving Reno, Sparks, Carson City, and Northern Nevada with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/reno",
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
    latitude: 39.5296,
    longitude: -119.8138,
  },
  areaServed: [
    "Reno",
    "Sparks",
    "Carson City",
    "Fernley",
    "Fallon",
    "Minden",
    "Gardnerville",
    "Dayton",
    "Virginia City",
    "Lake Tahoe",
    "Incline Village",
    "Truckee",
    "Carson Valley",
    "Douglas County",
    "Washoe County",
    "Lyon County",
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
        itemOffered: { "@type": "Service", name: "Copier Leasing Reno NV" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Copier Sales Reno Nevada" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services Reno",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Free Toner Delivery Reno" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Printer Repair Reno NV" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konica Minolta Dealer Reno",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "HP Copier Dealer Reno" },
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
    body: "The only HP Authorized Dealer with active service coverage in Reno and Northern Nevada. Genuine HP parts, factory-backed support, and certified technicians on every HP machine.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on the full bizhub lineup. Color and black-and-white multifunction copiers for Reno professional offices of every size - from a two-person law office to a multi-location title company.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver HP and Konica Minolta toner and supplies directly to your Reno or Sparks office at no extra charge. No shipping fees, no minimum orders, no running out at the worst possible moment.",
  },
  {
    headline: "Same-Day Service",
    body: "Active technician coverage across Reno, Sparks, and Carson City. Call before noon and we are at your office that afternoon.",
  },
];

const serviceAreaRows = [
  ["Reno", "Sparks"],
  ["Carson City", "Fernley"],
  ["Minden", "Gardnerville"],
  ["Dayton", "Fallon"],
  ["Virginia City", "Lake Tahoe"],
  ["Incline Village", "Truckee"],
  ["South Lake Tahoe", "Stateline"],
  ["Washoe Valley", "Cold Springs"],
];

const faqs = [
  {
    question:
      "Are you actually based in Reno or do you just have a landing page?",
    answer:
      "We have active technician coverage across Reno, Sparks, and Carson City. We deliver, install, and service at your office location - not from a warehouse three states away. Call us at (916) 253-9804 and we will tell you exactly what our response time looks like for your specific location.",
  },
  {
    question: "How fast can you deliver a copier to our Reno office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours of your order. For urgent situations, same-day delivery may be available depending on your location. Call (916) 253-9804 to confirm availability.",
  },
  {
    question: "Are you really the only HP Authorized Dealer in Reno?",
    answer:
      "We are an HP Authorized Dealer with active certified service coverage in Reno and Northern Nevada. Most Reno copier dealers are not HP authorized - they resell HP equipment without factory-backed parts or certified technician status. That matters when something needs fixing.",
  },
  {
    question: "Do you work with law firms and title companies in Reno?",
    answer:
      "Yes. Law firms and title companies are among our most active Reno and Northern Nevada clients. We understand the document volume, deadline pressure, and uptime requirements of professional offices and build our service around them.",
  },
  {
    question: "What copier brands do you carry in Reno?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider - the only Reno area dealer carrying both. We carry the full HP LaserJet and Konica Minolta bizhub lineup for sale, lease, and rental with local delivery and service.",
  },
  {
    question: "Is toner delivery free in Reno?",
    answer:
      "Yes. Free toner delivery is included for all Reno, Sparks, and Carson City customers. We deliver HP and Konica Minolta supplies directly to your office at no extra charge and pick up empty cartridges for recycling.",
  },
  {
    question: "Do you offer month-to-month rentals in Reno?",
    answer:
      "Yes. We offer flexible month-to-month copier rentals with no long-term commitment. A popular option for Reno businesses with seasonal needs, short-term projects, or offices that want to try a machine before committing to a lease.",
  },
  {
    question: "Do you service Carson City as well as Reno?",
    answer:
      "Yes. We have active coverage across Carson City including the state Capitol corridor, the legal community surrounding the Legislature, and professional offices throughout the Carson City business district. Law firms and title companies in Carson City are among our most active Northern Nevada clients. Same-day service and free toner delivery apply to Carson City the same as Reno and Sparks. Call (916) 253-9804 to confirm response times for your specific location.",
  },
];

export default function CopierDealerRenoPage() {
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
          <span className="text-brand-black">Reno NV</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Reno &amp; Northern Nevada
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copier Dealer Reno NV - HP and{" "}
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
              Milk Man Toner Company is the copier dealer Reno law firms, title
              companies, and professional offices trust across Reno, Sparks,
              Carson City, and Northern Nevada. As an HP Authorized Dealer and
              Konica Minolta Certified provider, we deliver, install, and service
              copiers and printers directly at your office across Reno, Sparks,
              Carson City, and all of Northern Nevada - with free{" "}
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
              terms built for Nevada businesses. No national chain. No call
              center. A real Northern California and Northern Nevada team that
              shows up.
            </p>
          </div>
        </div>
      </section>

      {/* Why Reno Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why Reno Businesses Choose Milk Man
          </h2>
          <div className="max-w-3xl mb-6">
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Reno is growing fast. Law firms, title companies, financial
              offices, and businesses of every size across the Truckee Meadows
              are expanding - and they need office equipment that keeps up
              without constant headaches.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Milk Man Toner Company brings something the big national copier
              chains cannot match in Reno: real local accountability. We are not
              a franchise. We are a family-owned Northern California business
              that has been serving the Sierra Nevada corridor for years, and we
              treat every Reno customer the same way we treat our neighbors back
              home in Loomis.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65]">
              And here is the competitive edge no other Reno copier dealer can
              claim - we are both an HP Authorized Dealer and{" "}
              <Link
                href="/office-technology/copiers-printers"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                Konica Minolta
              </Link>{" "}
              Certified. Most Reno dealers carry one or the other. We carry
              both, which means we match you to the right machine regardless of
              brand, then back it up with certified service.
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
            Copiers and Printers for Reno and Northern Nevada Offices
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
            at your Reno location.
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
                security built in. The preferred choice for Reno law firms and
                title companies running high monthly print volumes with zero
                tolerance for downtime.
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
                cost of ownership. Backed by the only HP Authorized Dealer with
                certified service coverage across Reno and Northern Nevada.
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
            Serving Reno, Sparks, Carson City, and Northern Nevada
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We have active coverage across the Truckee Meadows and Northern
            Nevada. Our technicians deliver, install, and service at your office
            location - no drop-off, no shipping, no waiting around for a
            technician flying in from out of state.
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
            From downtown Reno through Sparks, south to Carson City and the
            state Capitol corridor, and across the Sierra Nevada corridor, we
            have all of Northern Nevada covered.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales in Reno
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Leasing is the smart choice for most Reno businesses - it keeps
              capital free, locks in today's pricing, and makes upgrading easy
              as your business grows. We offer flexible lease terms from 12 to
              60 months through North Shore Leasing, LLC, with clear agreements
              and no surprise fees at the end of your term.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer ownership, we sell new HP and Konica
              Minolta machines outright with full warranty and ongoing local
              service coverage across Reno and Northern Nevada.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Either way, every Reno customer gets the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and personal support that Northern Nevada
              businesses have come to expect from Milk Man.
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
          heading="Reno Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your Reno Office?"
        description="Free quote. Free toner delivery. Same-day service. Real coverage across Reno, Sparks, Carson City, the Capitol corridor, and all of Northern Nevada."
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
