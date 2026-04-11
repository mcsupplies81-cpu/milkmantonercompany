import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { company } from "@/data/company";

interface HubService {
  title: string;
  description: string;
  href: string;
  features: string[];
}

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HubPageTemplateProps {
  hub: { label: string; description: string };
  services: HubService[];
  breadcrumbs: Breadcrumb[];
  ctaHeading: string;
  ctaDescription: string;
}

export function HubPageTemplate({
  hub,
  services,
  breadcrumbs,
  ctaHeading,
  ctaDescription,
}: HubPageTemplateProps) {
  return (
    <>
      {/* Breadcrumbs bar */}
      <div className="bg-steel-bg border-b border-steel-pale px-5 py-3">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {i > 0 && <span className="mx-0.5">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand-black transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-black">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-black text-white text-[9px] tracking-[0.16em] uppercase px-2.5 py-1 mb-3 inline-block">
            {hub.label}
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            {hub.label} for Northern California
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] max-w-2xl mb-5">
            {hub.description}
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

      {/* Services grid */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-[22px] mb-6">
            Our {hub.label} Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-[1.5px] border-brand-black p-6 flex flex-col"
              >
                <h3 className="font-heading text-[18px] text-brand-black mb-2">
                  {service.title}
                </h3>
                <p className="text-[12px] text-[#555] leading-[1.7] mb-4 flex-1">
                  {service.description}
                </p>
                <ul className="mb-0">
                  {service.features.slice(0, 3).map((feat) => (
                    <li
                      key={feat}
                      className="text-[11px] text-[#555] py-1 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-steel before:font-bold"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-4 inline-block text-[11px] font-medium text-brand-black border-b border-brand-black pb-0.5 hover:text-brand-accent hover:border-brand-accent transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Milk Man strip */}
      <div className="bg-steel-bg border-t border-steel-pale border-b px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "25+ Years Experience", sub: "Serving NorCal businesses since 1998" },
              { title: "Local NorCal Team", sub: "Technicians based in your region" },
              { title: "Free Toner Delivery", sub: "Supplies to your door at no charge" },
              { title: "Same-Day Service", sub: "Fast response when you need it" },
            ].map((item) => (
              <div key={item.title}>
                <div className="font-bold text-[13px] text-brand-black">
                  {item.title}
                </div>
                <div className="text-[11px] text-brand-mid mt-0.5">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Strip */}
      <CTAStrip
        heading={ctaHeading}
        description={ctaDescription}
        primaryCTA={{ label: "Get a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
