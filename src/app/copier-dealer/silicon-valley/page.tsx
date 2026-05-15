import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Dealer Silicon Valley & San Jose",
  description:
    "HP and Konica Minolta copier dealer serving Silicon Valley, San Jose, Palo Alto, and Santa Clara. Same-day service, free toner delivery. Call (916) 253-9804.",
  path: "/copier-dealer/silicon-valley",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving Silicon Valley, San Jose, Palo Alto, Santa Clara, and surrounding communities with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/silicon-valley",
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
    latitude: 37.3382,
    longitude: -121.8863,
  },
  areaServed: [
    "San Jose",
    "Palo Alto",
    "Santa Clara",
    "Sunnyvale",
    "Mountain View",
    "Cupertino",
    "Milpitas",
    "Campbell",
    "Los Gatos",
    "Saratoga",
    "Morgan Hill",
    "Gilroy",
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
          name: "Copier Leasing Silicon Valley",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Copier Sales San Jose",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services Silicon Valley",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Toner Delivery San Jose",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Printer Repair Silicon Valley",
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
    body: "Genuine HP parts, supplies, and factory-backed support across Silicon Valley and San Jose. Not a reseller. An authorized partner with certified technicians who know every HP machine.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on the full bizhub lineup. Color and black-and-white multifunction copiers for professional offices across San Jose, Palo Alto, Santa Clara, and Sunnyvale.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver toner and supplies directly to your Silicon Valley office at no extra charge. No shipping fees, no minimum orders, no waiting.",
  },
  {
    headline: "Same-Day Service",
    body: "Real technicians with active coverage across Silicon Valley and San Jose. Call before noon and we are at your office that afternoon.",
  },
];

const serviceAreaRows = [
  ["San Jose", "Palo Alto"],
  ["Santa Clara", "Sunnyvale"],
  ["Mountain View", "Cupertino"],
  ["Milpitas", "Campbell"],
  ["Los Gatos", "Saratoga"],
  ["Los Altos", "Menlo Park"],
  ["Redwood City", "Belmont"],
  ["San Mateo", "Burlingame"],
  ["Morgan Hill", "Gilroy"],
];

const faqs = [
  {
    question:
      "Do you have technicians in Silicon Valley or do you drive from Sacramento?",
    answer:
      "We have active technician coverage across Silicon Valley and San Jose. We deliver, install, and service at your office location. Call us at (916) 253-9804 to confirm response times for your specific area.",
  },
  {
    question: "How fast can you deliver a copier to our San Jose office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours. For urgent situations, same-day delivery may be available depending on your location. Call (916) 253-9804 to check availability.",
  },
  {
    question:
      "Do you work with law firms and title companies in Silicon Valley?",
    answer:
      "Yes. Law firms and title companies are among our most active Silicon Valley clients. We understand the document volume, turnaround requirements, and uptime expectations of professional offices and build our service agreements around them.",
  },
  {
    question: "What copier brands do you carry in Silicon Valley?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider. We carry the full HP LaserJet and Konica Minolta bizhub lineup for sale, lease, and rental with local delivery and service across Silicon Valley and San Jose.",
  },
  {
    question: "Is toner delivery really free in Silicon Valley?",
    answer:
      "Yes. Free toner delivery is included for all Silicon Valley and San Jose customers. We deliver HP and Konica Minolta supplies directly to your office at no extra charge and pick up empty cartridges for recycling.",
  },
  {
    question: "Do you offer month-to-month rentals in Silicon Valley?",
    answer:
      "Yes. We offer flexible month-to-month copier rentals with no long-term commitment. Popular with Silicon Valley businesses that have project-based, seasonal, or fast-changing office needs.",
  },
];

export default function CopierDealerSiliconValleyPage() {
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
          <span className="text-brand-black">Silicon Valley &amp; San Jose</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Silicon Valley &amp; San Jose
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copier Dealer Silicon Valley and San Jose - HP and{" "}
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
              Milk Man Toner Company is the copier dealer Silicon Valley law
              firms, title companies, and professional offices rely on across San
              Jose, Palo Alto, Santa Clara, and the surrounding tech corridor.
              As an HP Authorized Dealer and Konica Minolta Certified provider,
              we deliver, install, and service copiers and printers directly at
              your office - with free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and leasing terms built around how Silicon
              Valley businesses actually operate.
            </p>
          </div>
        </div>
      </section>

      {/* Why Silicon Valley Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why Silicon Valley Businesses Choose Milk Man
          </h2>
          <div className="max-w-3xl mb-6">
            <p className="text-[12px] text-[#555] leading-[1.65] mb-3">
              Silicon Valley runs fast. Your office equipment needs to keep up.
              Law firms closing deals, title companies processing transactions,
              and professional offices running back-to-back client meetings
              cannot afford a copier that is down for days waiting on a
              technician.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.65]">
              Milk Man Toner Company has active technician coverage across
              Silicon Valley and San Jose. When something goes wrong, we are
              there the same day. When you run low on toner, we deliver before
              you run out. That is the level of service Silicon Valley
              professional offices have come to expect from us.
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
            Copiers and Printers for Silicon Valley Offices
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
            print volume, and workflow. Every machine is available for sale,
            lease, or month-to-month rental with full delivery and installation
            at your location.
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
                security built in. The go-to choice for Silicon Valley law firms
                and title companies that need reliability at high monthly print
                volumes.
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
                technician coverage across Silicon Valley and San Jose.
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
            Serving Silicon Valley and San Jose
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We have active coverage across Silicon Valley from San Jose through
            Palo Alto and down through the South Bay. Our technicians deliver,
            install, and service at your office location - no drop-off, no
            shipping, no waiting.
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
            From downtown San Jose to the Peninsula and through the South Bay,
            we have Silicon Valley covered.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales in Silicon Valley
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Leasing is the standard choice for Silicon Valley businesses - it
              keeps capital working, locks in current pricing, and makes
              upgrading easy as your team grows. We offer flexible lease terms
              from 12 to 60 months through North Shore Leasing, LLC, with
              straightforward agreements and no hidden fees.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer to own, we sell new HP and Konica
              Minolta machines outright with full warranty and ongoing service
              coverage.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Every Silicon Valley customer gets the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and personal support regardless of whether
              they lease, rent, or buy.
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
          heading="Silicon Valley Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your Silicon Valley Office?"
        description="Free quote. Free toner delivery. Same-day service. Real coverage across Silicon Valley, San Jose, and the Peninsula."
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
