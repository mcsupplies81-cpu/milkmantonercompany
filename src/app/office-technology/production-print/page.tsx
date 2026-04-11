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
  title: "Production Print Systems for NorCal Businesses | Milk Man Toner",
  description:
    "High-volume production print systems for businesses that print thousands of pages daily. Konica Minolta AccurioPress. Call Milk Man Toner at (916) 253-9804.",
  path: "/office-technology/production-print",
});

const faqs = [
  {
    question: "What's the difference between a production printer and a regular copier?",
    answer:
      "Production printers are designed for continuous, high-volume operation  -  often 50,000 to 300,000+ pages per month. They offer higher speeds, more precise color management, professional finishing options, and are built to run all day without overheating or jamming.",
  },
  {
    question: "What brands of production printers do you sell?",
    answer:
      "We're an authorized Konica Minolta dealer and carry the full AccurioPress line. We can also source production systems from other manufacturers depending on your requirements. Call us to discuss your needs.",
  },
  {
    question: "Can production printers handle different paper sizes and weights?",
    answer:
      'Yes. Most production systems handle paper from letter to 13" x 19" and weights from 52 gsm to 350 gsm or heavier. Inline finishing options vary by model  -  we\'ll spec the right machine for your media requirements.',
  },
];

const description =
  "Production print systems are purpose-built for high-volume environments  -  marketing departments, in-plant print shops, legal firms, schools, and any organization that runs printing as a business function. Unlike standard office copiers, production systems are engineered for continuous duty cycles, professional finishing, and consistent color accuracy across thousands of sheets.\n\nMilk Man Toner Company is an authorized Konica Minolta dealer, giving us access to the full AccurioPress line  -  Konica Minolta's professional production print portfolio. These systems deliver commercial-quality color output at speeds up to 135 pages per minute, with inline finishing options including stapling, folding, booklet making, and perfect binding.\n\nWhether you're printing marketing materials, reports, course packets, or client-facing documents, we'll match you with the right production system and keep it running with same-day service and free supplies.";

const features = [
  "Konica Minolta AccurioPress production systems",
  "Up to 135 ppm color output",
  "Professional inline finishing options",
  "Consistent color accuracy across all media",
  "Free delivery and professional installation",
  "Same-day service from certified technicians",
  "Free toner and supplies",
  "Flexible lease and purchase terms",
];

const steps = [
  {
    number: "01",
    title: "Fleet assessment",
    description:
      "We evaluate your current print volumes, workflows, and quality requirements to recommend the right production system.",
  },
  {
    number: "02",
    title: "System delivery & setup",
    description:
      "Our certified technicians deliver, install, and calibrate your production system  -  including network integration and color profiling.",
  },
  {
    number: "03",
    title: "Ongoing support",
    description:
      "Free toner and supplies, same-day service, and proactive maintenance for the life of your system. One call handles everything.",
  },
];

export default function ProductionPrintPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Office Technology", url: `${company.website}/office-technology` },
          { name: "Production Print", url: `${company.website}/office-technology/production-print` },
        ])}
      />
      <JsonLd data={buildFAQPageSchema(faqs)} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-0.5">/</span>
          <Link href="/office-technology" className="hover:text-brand-black transition-colors">Office Technology</Link>
          <span className="mx-0.5">/</span>
          <span className="text-brand-black">Production Print</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Office Technology
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            High-volume production printing for demanding environments
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-2xl">
            When your business prints thousands of pages a day, you need a production system that can keep up  -  without breaking the bank on service costs.
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

      {/* Description + Features */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading text-[22px] text-brand-black mb-4">About our production print systems</h2>
              {description.split("\n\n").map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {features.map((feat) => (
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
          heading="How production print works"
          steps={steps}
        />
      </div>

      {/* FAQ */}
      <div className="bg-steel-bg">
        <FAQAccordion
          label="FAQ"
          heading="Production print questions"
          faqs={faqs}
        />
      </div>

      <CTAStrip
        heading="Ready to upgrade to production print?"
        description="Free consultation  -  we'll spec the right system for your volume and budget."
        primaryCTA={{ label: "Request a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
