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
  title: "Managed IT Services for NorCal Businesses | Milk Man Toner",
  description:
    "Outsourced IT management for small and mid-size businesses in Northern California. Proactive monitoring, patching, and local support. Call (916) 253-9804.",
  path: "/managed-services/managed-it",
});

const faqs = [
  {
    question: "What's included in managed IT services?",
    answer:
      "Our managed IT program includes 24/7 monitoring of all devices and servers, automatic patch management, remote and on-site support, network management, security monitoring, and regular IT reviews. We tailor the program to your specific environment.",
  },
  {
    question: "Is managed IT right for small businesses?",
    answer:
      "Absolutely. Managed IT is often the most cost-effective option for businesses with 5 to 100 employees  -  you get enterprise-level support for a fraction of the cost of an in-house IT hire.",
  },
  {
    question: "Do you replace our existing IT person or company?",
    answer:
      "We can. Or we can supplement your existing IT resources  -  handling routine monitoring and maintenance while your team focuses on strategic projects. We're flexible and will work with whatever arrangement fits your business.",
  },
];

export default function ManagedITPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Managed Services", url: `${company.website}/managed-services` },
          { name: "Managed IT", url: `${company.website}/managed-services/managed-it` },
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
          <span className="text-brand-black">Managed IT</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Managed Services
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Fully managed IT for your Northern California business
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Stop reacting to IT problems. We proactively manage your infrastructure, keep your systems secure and up to date, and respond fast when issues arise.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link href="/contact" className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block">
              Get a free assessment
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
                Enterprise IT support without the enterprise price tag
              </h2>
              {[
                "Managed IT services give small and mid-size businesses enterprise-level IT support without the cost of an in-house IT department. Milk Man Toner Company manages your entire IT environment  -  workstations, servers, networks, cloud services, and security  -  for one predictable monthly fee.",
                "Unlike national IT companies that route your call to a distant help desk, our team is local. When you need on-site support, we dispatch a NorCal technician  -  often the same day. We know your business, your team, and your infrastructure.",
                "Our managed IT program starts with a comprehensive IT assessment. We document your environment, identify vulnerabilities and inefficiencies, and design a support plan tailored to your business. Then we monitor everything 24/7, apply patches automatically, and respond to alerts before they become outages.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "24/7 infrastructure monitoring",
                  "Automatic patch management",
                  "Workstation and server management",
                  "Network monitoring and management",
                  "Cloud services management",
                  "Security monitoring and response",
                  "Local on-site support available",
                  "Predictable monthly pricing",
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
          heading="How managed IT works"
          steps={[
            { number: "01", title: "IT assessment", description: "We document your entire IT environment, identify vulnerabilities, and design a managed IT plan tailored to your business." },
            { number: "02", title: "Onboarding", description: "We deploy our monitoring and management tools, establish baselines, and take over day-to-day IT management." },
            { number: "03", title: "Ongoing management", description: "We monitor your infrastructure 24/7, apply patches, respond to alerts, and handle support requests. You focus on your business." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Managed IT questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Ready to outsource your IT?"
        description="Free IT assessment  -  we'll identify gaps and design a managed IT plan for your business."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
