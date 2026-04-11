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
  title: "Cloud Services for NorCal Businesses | Milk Man Toner",
  description:
    "Cloud print, document management, Microsoft 365, and cloud storage for businesses in Sacramento and Northern California. Call Milk Man Toner at (916) 253-9804.",
  path: "/it-solutions/cloud-services",
});

const faqs = [
  {
    question: "Can you migrate us from on-premise servers to the cloud?",
    answer:
      "Yes. We manage cloud migrations for businesses moving from on-premise file servers, Exchange email, and legacy applications to cloud platforms like Microsoft 365 and Google Workspace. We plan the migration carefully to minimize disruption.",
  },
  {
    question: "What is cloud print?",
    answer:
      "Cloud print allows your employees to send print jobs from any device  -  laptop, phone, tablet  -  to your office printers, even when they're working remotely. Combined with secure pull printing, it also improves document security by ensuring jobs are only released when the user is at the printer.",
  },
  {
    question: "How do you keep our cloud data secure?",
    answer:
      "We configure your cloud environment with security best practices  -  multi-factor authentication, conditional access policies, data loss prevention, and audit logging. We also monitor for suspicious activity and respond to alerts.",
  },
];

export default function CloudServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "IT Solutions", url: `${company.website}/it-solutions` },
          { name: "Cloud Services", url: `${company.website}/it-solutions/cloud-services` },
        ])}
      />
      <JsonLd data={buildFAQPageSchema(faqs)} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/it-solutions" className="hover:text-brand-black transition-colors">IT Solutions</Link>
          <span>/</span>
          <span className="text-brand-black">Cloud Services</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            IT Solutions
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Cloud services that keep your team connected and productive
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Work from anywhere without sacrificing security or control. We design and manage cloud environments for Northern California businesses.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link href="/contact" className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block">
              Request a free assessment
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
                Cloud done right  -  secure, practical, local support
              </h2>
              {[
                "Cloud services have transformed how businesses work  -  enabling remote teams, reducing hardware costs, and making enterprise-grade software accessible to businesses of all sizes. But setting up cloud services properly requires expertise: the wrong configuration can create security vulnerabilities, compliance issues, or performance problems.",
                "Milk Man Toner Company designs and manages cloud environments for Northern California businesses. We're experienced with Microsoft 365, Google Workspace, cloud print solutions, and document management platforms. We handle the setup, migration, and ongoing management  -  so you get the benefits of the cloud without the headaches.",
                "Cloud print services are a particular specialty: we integrate your office printers with cloud platforms so your team can print securely from any device, anywhere  -  and you get the reporting and control you need to manage costs.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Microsoft 365 deployment and management",
                  "Google Workspace setup and support",
                  "Cloud print integration",
                  "Document management platforms",
                  "Cloud backup and storage",
                  "Email migration and management",
                  "Single sign-on (SSO) setup",
                  "Cloud security configuration",
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
          heading="How cloud services work"
          steps={[
            { number: "01", title: "Cloud assessment", description: "We assess your current applications, workflows, and infrastructure to design the right cloud roadmap for your business." },
            { number: "02", title: "Migration & setup", description: "We handle migration from legacy systems, data transfer, user provisioning, and security configuration." },
            { number: "03", title: "Ongoing management", description: "We manage your cloud environment, handle license management, support your team, and keep security configurations up to date." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Cloud services questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Ready to move your business to the cloud?"
        description="Free cloud assessment  -  we'll design a roadmap that fits your business and your budget."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
