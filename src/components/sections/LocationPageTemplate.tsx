import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildFAQPageSchema, buildLocationSchema } from "@/lib/schema";
import { company } from "@/data/company";
import { services } from "@/data/services";
import type { Location, FAQ } from "@/types";

const locationFaqs: Record<string, FAQ[]> = {
  sacramento: [
    { question: "Do you offer same-day copier service in Sacramento?", answer: "Yes. As our home base, Sacramento receives priority service. Most service calls are completed the same day. Call before noon and we'll have a technician at your office that afternoon." },
    { question: "Can you deliver toner to my Sacramento office for free?", answer: "Absolutely. Free toner delivery is available throughout the Sacramento metro area  -  including Roseville, Folsom, Elk Grove, Rancho Cordova, and all surrounding communities. No shipping fees, no minimum orders." },
    { question: "What copier brands do you carry in Sacramento?", answer: "We carry the full line of Konica Minolta bizhub copiers and HP LaserJet printers. Both brands are available for sale, lease, or month-to-month rental with free delivery and installation." },
  ],
  "bay-area": [
    { question: "Do you serve all of the Bay Area?", answer: "Yes. We serve San Francisco, Oakland, Berkeley, San Mateo, the Peninsula, Marin County, and the entire East Bay. Our technicians travel throughout the Bay Area for installations, service calls, and toner delivery." },
    { question: "How fast can you get a copier to my Bay Area office?", answer: "In most cases, we can deliver and install a copier within 24–48 hours. For urgent needs, same-day delivery may be available. Call us to discuss your timeline." },
    { question: "Do you offer copier rentals for Bay Area events?", answer: "Yes. We offer short-term copier rentals for trade shows, conferences, and events throughout the Bay Area. Month-to-month terms, no long-term commitment." },
  ],
  "silicon-valley": [
    { question: "Do you work with tech startups in Silicon Valley?", answer: "Yes. We work with companies of all sizes in Silicon Valley  -  from early-stage startups to established enterprises. Our flexible rental and lease terms are perfect for fast-growing companies." },
    { question: "Can you set up managed print for our Silicon Valley office?", answer: "Absolutely. Our managed print program includes fleet monitoring, automatic toner replenishment, same-day service, and detailed reporting  -  everything a tech office needs." },
    { question: "What areas of Silicon Valley do you cover?", answer: "We serve San Jose, Sunnyvale, Palo Alto, Mountain View, Cupertino, Santa Clara, Milpitas, Campbell, Los Gatos, and all surrounding communities." },
  ],
  "reno-tahoe": [
    { question: "Do you deliver toner to Reno and Tahoe?", answer: "Yes. We deliver toner and supplies to businesses throughout the Reno-Tahoe corridor, including Reno, Sparks, Carson City, Incline Village, Truckee, and surrounding areas." },
    { question: "Do you offer seasonal copier rentals for Tahoe businesses?", answer: "Yes. Our month-to-month copier rentals are perfect for seasonal hospitality and tourism businesses around Lake Tahoe. Rent during peak season and return when you're done." },
    { question: "How quickly can you respond to service calls in Reno?", answer: "We provide same-day or next-day service throughout the Reno-Tahoe area. Our technicians are experienced with the region and can reach most locations quickly." },
  ],
  "central-california": [
    { question: "What cities do you serve in Central California?", answer: "We serve Stockton, Modesto, Fresno, Visalia, Merced, Turlock, Manteca, Tracy, Lodi, and communities throughout the Central Valley and Sierra foothills." },
    { question: "Do you offer free toner delivery in Central California?", answer: "Yes. Free toner delivery is available throughout our Central California service area. No shipping charges, no minimum orders." },
    { question: "Can you service copiers at agricultural businesses?", answer: "Absolutely. We serve agriculture companies, packing houses, and food processing facilities throughout the Central Valley. Our technicians are experienced with the unique needs of agricultural businesses." },
  ],
};

export function LocationPageTemplate({ location }: { location: Location }) {
  const faqs = locationFaqs[location.slug] || [];

  return (
    <>
      {/* Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Locations", url: `${company.website}/locations` },
          {
            name: location.name,
            url: `${company.website}/locations/${location.slug}`,
          },
        ])}
      />
      <JsonLd
        data={buildLocationSchema(
          location.name,
          location.slug,
          location.metaDescription
        )}
      />
      {faqs.length > 0 && <JsonLd data={buildFAQPageSchema(faqs)} />}

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link
            href="/locations/sacramento"
            className="hover:text-brand-black transition-colors"
          >
            Locations
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">{location.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative border-b-2 border-brand-black overflow-hidden">
        <div className="h-[200px] md:h-[340px] bg-steel relative overflow-hidden">
          <Image
            src={location.image}
            alt={location.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black/75" />
        </div>
        <div className="bg-steel-pale px-5 py-8 md:py-10 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
              {location.region}
            </div>
            <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
              Copier &amp; printer services in {location.name}
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
        </div>
      </section>

      {/* Local copy  -  400+ words */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Your local copier &amp; printer partner in {location.name}
            </h2>
            {location.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[12px] text-[#555] leading-[1.75] mb-4"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Services available in {location.name}
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.65] mb-6">
            Every service includes free delivery, free toner, and same-day
            support from local technicians.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="border-[1.5px] border-brand-black bg-white p-5 hover:bg-steel-pale transition-colors group"
              >
                <h3 className="font-heading text-base text-brand-black mb-1 group-hover:text-brand-mid transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[11px] text-[#666] leading-[1.55] mb-2">
                  {svc.tagline}
                </p>
                <span className="text-[11px] text-brand-mid tracking-[0.03em] font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment recommendation */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Recommended equipment for {location.name} offices
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-5 max-w-2xl">
            Not sure which copier or printer is right for your {location.name}{" "}
            office? Here are our most popular choices for businesses in the area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-steel-pale p-5">
              <span className="inline-block bg-brand-black text-white text-[9px] px-2 py-0.5 mb-2">
                Konica Minolta
              </span>
              <h3 className="font-heading text-base text-brand-black mb-1">
                bizhub Color MFP Series
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.55] mb-3">
                Professional color copiers from 25–65 ppm. Print, copy, scan,
                and fax in one device. Perfect for offices of all sizes.
              </p>
              <Link
                href="/office-technology/copiers-printers"
                className="text-[11px] text-brand-mid font-medium"
              >
                View equipment &rarr;
              </Link>
            </div>
            <div className="border border-steel-pale p-5">
              <span className="inline-block bg-[#0096D6] text-white text-[9px] px-2 py-0.5 mb-2">
                HP
              </span>
              <h3 className="font-heading text-base text-brand-black mb-1">
                LaserJet Pro &amp; Enterprise
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.55] mb-3">
                Reliable laser printers for small offices to enterprise
                workgroups. Low cost of ownership with legendary HP quality.
              </p>
              <Link
                href="/office-technology/copiers-printers"
                className="text-[11px] text-brand-mid font-medium"
              >
                View equipment &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className="bg-steel-bg">
          <FAQAccordion
            label="FAQ"
            heading={`${location.name} service questions`}
            faqs={faqs}
          />
        </div>
      )}

      {/* CTA */}
      <CTAStrip
        heading={`Ready to get started in ${location.name}?`}
        description="Free quote · free toner delivery · no pressure. Local NorCal experts standing by."
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
