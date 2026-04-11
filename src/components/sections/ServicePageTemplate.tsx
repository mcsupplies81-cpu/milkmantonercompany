import Link from "next/link";
import { StepBlock } from "@/components/sections/StepBlock";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
} from "@/lib/schema";
import { company } from "@/data/company";
import type { Service } from "@/types";

export function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <>
      {/* Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Services", url: `${company.website}/services` },
          {
            name: service.title,
            url: `${company.website}/services/${service.slug}`,
          },
        ])}
      />
      <JsonLd data={buildFAQPageSchema(service.faqs)} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <Link
            href="/services/copier-rental"
            className="hover:text-brand-black transition-colors"
          >
            Services
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            {service.title}
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            {service.tagline}
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

      {/* Description + Features */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description */}
            <div>
              <h2 className="font-heading text-[22px] text-brand-black mb-4">
                About our {service.title.toLowerCase()} service
              </h2>
              {service.description.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[12px] text-[#555] leading-[1.75] mb-4"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Features */}
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">
                What&apos;s included
              </h3>
              <ul>
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="text-[12px] text-[#555] py-2 pl-4 border-b border-steel-pale relative before:content-['✓'] before:absolute before:left-0 before:text-steel before:font-bold"
                  >
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <div className="bg-steel-bg">
        <StepBlock
          label="How it works"
          heading={`How ${service.title.toLowerCase()} works`}
          steps={service.steps.map((s) => ({
            number: String(s.number).padStart(2, "0"),
            title: s.title,
            description: s.description,
          }))}
        />
      </div>

      {/* Service areas */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] text-brand-black mb-4">
            {service.title} across Northern California
          </h2>
          <p className="text-[12px] text-[#555] leading-[1.75] mb-5 max-w-2xl">
            Milk Man Toner Company provides {service.title.toLowerCase()} services across all of Northern California.
            No matter where your business is located, our local technicians deliver fast, reliable service.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Sacramento", href: "/locations/sacramento" },
              { name: "Bay Area / SF", href: "/locations/bay-area" },
              { name: "Silicon Valley", href: "/locations/silicon-valley" },
              { name: "Reno / Tahoe", href: "/locations/reno-tahoe" },
              { name: "Central CA", href: "/locations/central-california" },
            ].map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-steel-bg">
        <FAQAccordion
          label="FAQ"
          heading={`${service.title} questions`}
          faqs={service.faqs}
        />
      </div>

      {/* CTA */}
      <CTAStrip
        heading={`Ready to get started with ${service.title.toLowerCase()}?`}
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
