import Link from "next/link";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
  buildLocalBusinessSchema,
} from "@/lib/schema";
import { company } from "@/data/company";

export interface Benefit {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceCityTemplateProps {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  region: string;
  heroHeading: string;
  heroSubheading: string;
  introParagraphs: string[];
  benefits: Benefit[];
  faqs: FAQ[];
  metaTitle?: string;
  metaDescription?: string;
  relatedLocationHref: string;
  relatedLocationLabel: string;
  serviceHubHref: string;
  serviceHubLabel: string;
}

export function ServiceCityTemplate({
  serviceName,
  serviceSlug,
  cityName,
  citySlug,
  region,
  heroHeading,
  heroSubheading,
  introParagraphs,
  benefits,
  faqs,
  relatedLocationHref,
  relatedLocationLabel,
  serviceHubHref,
  serviceHubLabel,
}: ServiceCityTemplateProps) {
  return (
    <>
      {/* Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Services", url: `${company.website}/managed-services/managed-print` },
          { name: serviceName, url: `${company.website}/${serviceSlug}` },
          {
            name: cityName,
            url: `${company.website}/${serviceSlug}-${citySlug}`,
          },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={buildFAQPageSchema(faqs)} />}
      <JsonLd data={buildLocalBusinessSchema()} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link
            href={serviceHubHref}
            className="hover:text-brand-black transition-colors"
          >
            {serviceName}
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">{cityName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            {region}
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            {heroHeading}
          </h1>
          <p className="text-[13px] text-brand-mid mb-5 max-w-xl leading-[1.6]">
            {heroSubheading}
          </p>
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

      {/* Intro copy */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-heading text-[22px] text-brand-black mb-4">
              Local {serviceName.toLowerCase()} for {cityName} businesses
            </h2>
            {introParagraphs.map((para, i) => (
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

      {/* Benefits grid */}
      <section className="bg-steel-bg border-t border-b border-steel-pale px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Why {cityName} businesses choose Milk Man
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.65] mb-6">
            Family-owned and based in Placer County - we know this area because we live here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="border-[1.5px] border-brand-black bg-white p-5"
              >
                <h3 className="font-heading text-base text-brand-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[11px] text-[#666] leading-[1.55]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[18px] text-brand-black mb-4">
            Explore more from Milk Man Toner Company
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={relatedLocationHref}
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2.5 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
            >
              {relatedLocationLabel}
            </Link>
            <Link
              href={serviceHubHref}
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2.5 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
            >
              {serviceHubLabel}
            </Link>
            <Link
              href="/contact"
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2.5 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <div className="bg-steel-bg">
          <FAQAccordion
            label="FAQ"
            heading={`${serviceName} questions for ${cityName}`}
            faqs={faqs}
          />
        </div>
      )}

      {/* CTA */}
      <CTAStrip
        heading={`Ready to get started in ${cityName}?`}
        description="Free quote - free delivery - no pressure. Your local Placer County print experts."
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
