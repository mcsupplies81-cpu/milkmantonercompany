import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Dealer Sacramento",
  description:
    "Sacramento's local copier dealer since 2012. HP and Konica Minolta sales, leasing, and rental with free toner delivery and same-day service. Call (916) 253-9804.",
  path: "/copier-dealer/sacramento",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Milk Man Toner Company",
  description:
    "HP Authorized Dealer and Konica Minolta Certified copier dealer serving Sacramento and Northern California with sales, leasing, toner delivery, and same-day service.",
  url: "https://milkmancompany.com/copier-dealer/sacramento",
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
    latitude: 38.8274,
    longitude: -121.1966,
  },
  areaServed: [
    "Sacramento",
    "Roseville",
    "Rocklin",
    "Folsom",
    "Elk Grove",
    "Rancho Cordova",
    "Natomas",
    "Loomis",
    "Auburn",
    "Lincoln",
    "Granite Bay",
    "El Dorado Hills",
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
          name: "Copier Leasing Sacramento",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Copier Sales Sacramento" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Print Services Sacramento",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Toner Delivery Sacramento",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Printer Repair Sacramento",
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
    body: "Genuine HP parts, supplies, and factory-backed support. Not a reseller - an authorized partner.",
  },
  {
    headline: "Konica Minolta Certified",
    body: "Factory-trained technicians on every bizhub model. Color and black-and-white MFPs for offices of every size.",
  },
  {
    headline: "Free Toner Delivery",
    body: "We deliver toner directly to your Sacramento office at no extra charge - and pick up the empty cartridges for recycling.",
  },
  {
    headline: "Same-Day Service",
    body: "Local Loomis-based technicians covering all of Sacramento and Placer County. Call before noon, we're there that afternoon.",
  },
];

const serviceAreaRows = [
  ["Downtown Sacramento", "Midtown"],
  ["East Sacramento", "Natomas"],
  ["Arden-Arcade", "Rancho Cordova"],
  ["Elk Grove", "Folsom"],
  ["El Dorado Hills", "West Sacramento"],
  ["Roseville", "Rocklin"],
  ["Lincoln", "Loomis"],
  ["Auburn", "Granite Bay"],
  ["Penryn", "Newcastle"],
  ["Colfax", "Placer County foothills"],
];

const faqs = [
  {
    question: "How fast can you deliver a copier to my Sacramento office?",
    answer:
      "In most cases we can deliver and install within 24 to 48 hours of your order. For urgent situations, same-day delivery may be available depending on your location in the Sacramento area. Call us at (916) 253-9804 to confirm availability.",
  },
  {
    question: "Do you service copiers you didn't sell?",
    answer:
      "Yes. Our certified technicians service and repair most major copier and printer brands even if you didn't buy or lease from us. We offer one-time service calls and ongoing maintenance agreements.",
  },
  {
    question: "What copier brands do you carry in Sacramento?",
    answer:
      "We are an HP Authorized Dealer and Konica Minolta Certified provider. We carry the full line of HP LaserJet and Konica Minolta bizhub machines for sale, lease, and rental.",
  },
  {
    question: "Is toner delivery really free?",
    answer:
      "Yes. Free toner delivery is one of our core promises. We deliver HP and Konica Minolta toner and supplies directly to your Sacramento office at no extra charge - no shipping fees, no minimum orders. We also pick up empty cartridges for recycling at no charge.",
  },
  {
    question: "Do you offer month-to-month copier rentals in Sacramento?",
    answer:
      "Yes. We offer flexible month-to-month rentals with no long-term commitment. This is ideal for seasonal needs, short-term projects, or businesses that want to try a machine before committing to a lease.",
  },
  {
    question: "What areas of Sacramento do you cover?",
    answer:
      "We serve all of Greater Sacramento including Downtown, Midtown, Natomas, Rancho Cordova, Elk Grove, Folsom, and El Dorado Hills. We also cover all of Placer County including Roseville, Rocklin, Lincoln, Auburn, and our home base in Loomis.",
  },
];

export default function CopierDealerSacramentoPage() {
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
          <span className="text-brand-black">Sacramento</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Sacramento Region
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Sacramento's Local Copier Dealer - HP &amp; Konica Minolta
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
              Milk Man Toner Company is Sacramento's locally owned copier
              dealer, headquartered in Loomis and serving businesses across the
              greater Sacramento region every day. As an HP Authorized Dealer
              and{" "}
              <Link
                href="/office-technology/copiers-printers"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                Konica Minolta
              </Link>{" "}
              Certified provider, we match every business to the right machine -
              then back it up with free{" "}
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
              terms that actually make sense for your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sacramento Businesses Choose Milk Man */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why Sacramento Businesses Choose Milk Man
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.65] mb-6">
            We've spent 13 years learning what Northern California businesses
            actually need from a copier dealer - and it isn't a call center in
            another state. It's a local team that picks up the phone, shows up
            the same day, and remembers your name.
          </p>
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
            Copiers and Printers for Sacramento Offices
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            We carry the full line of{" "}
            <Link
              href="/office-technology/copiers-printers"
              className="text-brand-mid underline hover:text-brand-black transition-colors"
            >
              HP LaserJet
            </Link>{" "}
            and Konica Minolta bizhub machines - matched to your office size,
            print volume, and budget. Every machine is available for sale,
            lease, or month-to-month rental.
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
                Touchscreen interface, mobile printing, and enterprise security
                built in. Ideal for Sacramento offices printing 5,000 to 50,000
                pages per month.
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
                Reliable laser printers for small offices to enterprise
                workgroups. PageWide high-speed output, AirPrint ready, low
                cost of ownership. The most trusted name in business printing -
                backed by an authorized Sacramento dealer.
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
            Serving All of Greater Sacramento
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-6 max-w-3xl">
            Our service territory covers every corner of the Sacramento metro
            and Placer County foothills. We deliver, install, and service
            copiers and printers at your office - no drop-off required.
          </p>
          <div className="border border-steel-pale bg-white">
            {serviceAreaRows.map(([left, right], i) => (
              <div
                key={i}
                className="grid grid-cols-2 divide-x divide-steel-pale border-b border-steel-pale last:border-b-0"
              >
                <div className="px-4 py-2.5 text-[11px] text-[#555]">{left}</div>
                <div className="px-4 py-2.5 text-[11px] text-[#555]">{right}</div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#555] leading-[1.75] mt-4">
            If your office is within 60 miles of Loomis, we can be there today.
          </p>
        </div>
      </section>

      {/* Leasing and Sales */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Copier Leasing and Sales in Sacramento
            </h2>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              Not sure whether to lease or buy? Most Sacramento businesses lease
              - and for good reason. Leasing keeps your capital free, locks in
              today's pricing, and lets you upgrade when the technology changes.
              We offer flexible lease terms through North Shore Leasing, LLC,
              from 12 to 60 months.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-4">
              For businesses that prefer ownership, we sell new HP and Konica
              Minolta machines outright with full warranty and service coverage.
            </p>
            <p className="text-[12px] text-[#555] leading-[1.75] mb-6">
              Either way, you get the same free{" "}
              <Link
                href="/services/toner-delivery"
                className="text-brand-mid underline hover:text-brand-black transition-colors"
              >
                toner delivery
              </Link>
              , same-day service, and local support that Sacramento businesses
              have relied on for 13 years.
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
          heading="Sacramento Copier Dealer - Common Questions"
          faqs={faqs}
        />
      </div>

      {/* Final CTA */}
      <CTAStrip
        heading="Ready to Find the Right Copier for Your Sacramento Office?"
        description="Free quote. Free toner delivery. No pressure. Local NorCal experts standing by."
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
