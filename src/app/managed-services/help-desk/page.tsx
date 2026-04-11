import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { StepBlock } from "@/components/sections/StepBlock";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildFAQPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "IT Help Desk Services for NorCal Businesses | Milk Man Toner",
  description:
    "Local IT help desk support for businesses in Sacramento and Northern California. Real people answer  -  no automated menus. Call Milk Man Toner at (916) 253-9804.",
  path: "/managed-services/help-desk",
});

const faqs = [
  {
    question: "What hours is the help desk available?",
    answer:
      "Our standard help desk hours are Monday through Friday, 8 AM to 5 PM Pacific. Extended hours and on-call support are available for managed IT customers. Contact us for details.",
  },
  {
    question: "What types of issues can the help desk handle?",
    answer:
      "Our help desk handles a wide range of office technology issues  -  printer and copier connectivity, network troubleshooting, password resets, software installation, email configuration, and general PC support.",
  },
  {
    question: "Is there a minimum commitment for help desk services?",
    answer:
      "No. We offer per-incident support with no minimum commitment, as well as monthly retainer plans for businesses that need predictable support costs. We'll recommend the right option for your call volume.",
  },
];

export default function HelpDeskPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Managed Services", url: `${company.website}/managed-services` },
          { name: "Help Desk", url: `${company.website}/managed-services/help-desk` },
        ])}
      />
      <JsonLd data={buildFAQPageSchema(faqs)} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/managed-services" className="hover:text-brand-black transition-colors">Managed Services</Link>
          <span>/</span>
          <span className="text-brand-black">Help Desk</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Managed Services
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Local help desk support  -  real people, fast response
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            When your employees have a tech problem, they call us. A real person answers, diagnoses the issue, and resolves it  -  usually within the hour.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link href="/contact" className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block">
              Contact us today
            </Link>
            <a href={company.phoneHref} className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-[18px] py-2.5 tracking-[0.04em] hover:bg-brand-black hover:text-white transition-colors inline-block">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-[22px] text-brand-black mb-4">
                A help desk that actually helps
              </h2>
              {[
                "The Milk Man help desk is staffed by local NorCal technicians who know your environment. When your employees call with a tech problem  -  a printer that won't connect, a password that's expired, an application that won't launch  -  they get a real person who takes ownership of the problem and sees it through to resolution.",
                "Our help desk service is available as a standalone offering or as part of our managed IT program. We offer remote support for most issues, with on-site dispatch available for problems that can't be resolved remotely.",
                "Unlike national help desk services that route your call to an offshore call center, our techs are local. They speak the same language, work in the same time zone, and can be at your office the same day when needed.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Live answer  -  no automated phone menus",
                  "Local NorCal technicians",
                  "Remote and on-site support",
                  "Ticket tracking and reporting",
                  "Priority response for managed customers",
                  "Integration with managed print and IT programs",
                  "Per-incident or monthly retainer options",
                  "Printer and copier support included",
                ].map((feat) => (
                  <li key={feat} className="text-[12px] text-[#555] py-2 pl-4 border-b border-steel-pale relative before:content-['✓'] before:absolute before:left-0 before:text-steel before:font-bold">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-steel-bg">
        <StepBlock
          label="How it works"
          heading="How help desk support works"
          steps={[
            { number: "01", title: "Employee calls us", description: "Your employee calls our help desk number. A real person answers  -  no automated menus, no hold music, no offshore routing." },
            { number: "02", title: "We diagnose & resolve", description: "Our technician takes ownership of the issue, diagnoses it remotely, and resolves it. Most issues are resolved in the first call." },
            { number: "03", title: "We document & follow up", description: "We log every ticket, track resolution times, and provide monthly reports. If the issue recurs, we identify the root cause." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Help desk questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Need reliable tech support for your team?"
        description="Local help desk  -  real people, fast response, NorCal technicians."
        primaryCTA={{ label: "Contact us today", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
