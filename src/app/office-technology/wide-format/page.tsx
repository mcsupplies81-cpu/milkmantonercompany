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
  title: "Wide Format Printers & Plotters in Northern California | Milk Man Toner",
  description:
    "Wide format printers and plotters for architects, engineers, and designers in NorCal. HP DesignJet and Konica Minolta. Call (916) 253-9804.",
  path: "/office-technology/wide-format",
});

const faqs = [
  {
    question: "What file formats do wide format printers support?",
    answer:
      "Most wide format systems support PDF, TIFF, JPEG, DWF, and HP-GL/2 natively. With RIP software, you can print virtually any file format including AutoCAD DWG, Adobe AI, and more.",
  },
  {
    question: "What's the difference between a plotter and a wide format printer?",
    answer:
      "The terms are often used interchangeably. Historically, plotters used pens to draw lines; modern wide format printers use inkjet technology to produce both technical drawings and photographic output. All modern 'plotters' are inkjet wide format printers.",
  },
  {
    question: "Can you lease a wide format printer?",
    answer:
      "Yes. We offer flexible lease terms for all wide format systems. Leasing allows you to get the equipment you need with predictable monthly payments and no large upfront investment.",
  },
];

const description =
  'Wide format printers give your team the ability to produce large-scale output in-house  -  no waiting for an outside print shop, no per-sheet fees, no turnaround delays. For architects, engineers, GIS teams, and designers, in-house wide format printing is a productivity multiplier.\n\nMilk Man Toner Company carries HP DesignJet plotters and Konica Minolta wide format systems in 24", 36", and 44"+ widths. Whether you\'re printing architectural blueprints, engineering drawings, GIS maps, event banners, or POP displays, we\'ll match you with the right system.\n\nAll wide format systems include free delivery, professional installation, and same-day service from our local NorCal technicians. We also offer flexible lease terms so you can get the system you need without a large upfront investment.';

const features = [
  "HP DesignJet & Konica Minolta systems",
  '24" to 60"+ output width',
  "Technical drawing & CAD file support",
  "Architectural, engineering & GIS printing",
  "Banner and signage printing",
  "Free delivery & installation",
  "Same-day service & free supplies",
  "Flexible lease and purchase terms",
];

const steps = [
  {
    number: "01",
    title: "Assess your needs",
    description:
      "We evaluate your drawing sizes, media types, print volumes, and workflows to recommend the right wide format system.",
  },
  {
    number: "02",
    title: "Deliver & install",
    description:
      "Our technicians deliver your plotter, install print drivers and RIP software, and test output on your media types.",
  },
  {
    number: "03",
    title: "Ongoing support",
    description:
      "Free ink and media supplies, same-day service, and proactive maintenance. We keep your plotter printing at its best.",
  },
];

export default function WideFormatPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Office Technology", url: `${company.website}/office-technology` },
          { name: "Wide Format Printers", url: `${company.website}/office-technology/wide-format` },
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
          <span className="text-brand-black">Wide Format Printers</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Office Technology
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Wide format printers for design, engineering, and architecture
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-2xl">
            Print blueprints, technical drawings, banners, and signage in-house  -  with professional quality and fast turnaround.
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
              <h2 className="font-heading text-[22px] text-brand-black mb-4">About our wide format printers</h2>
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
          heading="How wide format printing works"
          steps={steps}
        />
      </div>

      {/* FAQ */}
      <div className="bg-steel-bg">
        <FAQAccordion
          label="FAQ"
          heading="Wide format printer questions"
          faqs={faqs}
        />
      </div>

      <CTAStrip
        heading="Need a wide format printer for your office?"
        description="Free consultation  -  we'll recommend the right system for your output requirements."
        primaryCTA={{ label: "Request a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
