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
  title: "Print Management Software  -  PaperCut for NorCal Businesses | Milk Man Toner",
  description:
    "PaperCut print management software for Northern California businesses. Track, control, and reduce print costs. Authorized PaperCut reseller. Call (916) 253-9804.",
  path: "/office-technology/print-software",
});

const faqs = [
  {
    question: "What is PaperCut?",
    answer:
      "PaperCut is the world's most widely used print management software, running in over 200,000 organizations globally. It tracks print usage, enforces print rules, enables secure pull printing, and provides detailed cost reports.",
  },
  {
    question: "Does PaperCut work with our existing printers?",
    answer:
      "PaperCut MF integrates with virtually every major printer and copier brand  -  HP, Konica Minolta, Canon, Ricoh, Xerox, and more. We can implement PaperCut in your existing environment regardless of what hardware you have.",
  },
  {
    question: "What's the difference between PaperCut MF and PaperCut NG?",
    answer:
      "PaperCut NG is the standard print management solution for tracking and reporting. PaperCut MF (Multifunction) adds native integration with MFP touchscreens, enabling secure pull printing, scan workflows, and copy tracking directly at the device.",
  },
];

export default function PrintSoftwarePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Office Technology", url: `${company.website}/office-technology` },
          { name: "Print Software", url: `${company.website}/office-technology/print-software` },
        ])}
      />
      <JsonLd data={buildFAQPageSchema(faqs)} />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/office-technology" className="hover:text-brand-black transition-colors">Office Technology</Link>
          <span>/</span>
          <span className="text-brand-black">Print Software</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Office Technology
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Print management software that puts you in control
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Track every page, control who prints what, and reduce print waste with PaperCut  -  the world&apos;s most widely used print management software.
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
              <h2 className="font-heading text-[22px] text-brand-black mb-4">
                Take control of your print environment
              </h2>
              {[
                "Most businesses have no visibility into how much they're printing, who's printing it, or how much it costs. Print management software fixes that  -  giving you complete visibility and control over every device, every user, and every page.",
                "Milk Man Toner Company is an authorized PaperCut MF and PaperCut NG reseller. We handle the full implementation  -  software licensing, server setup, device configuration, user training, and ongoing support. PaperCut integrates with virtually every printer and copier brand, making it the ideal solution for mixed-fleet environments.",
                "From simple print tracking to advanced secure pull printing, cost recovery, and print rules, we'll design a PaperCut deployment that fits your office and your budget.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Authorized PaperCut MF & NG reseller",
                  "Print tracking and cost reporting",
                  "Secure pull printing / follow-me printing",
                  "Print rules  -  restrict color, duplex, etc.",
                  "Cost allocation by department or user",
                  "Mobile and guest printing",
                  "Integration with all major printer brands",
                  "Full implementation and training included",
                ].map((feat) => (
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
          heading="How print software implementation works"
          steps={[
            { number: "01", title: "Print assessment", description: "We audit your current print environment  -  devices, volumes, users, and costs  -  to design the right PaperCut deployment." },
            { number: "02", title: "Software implementation", description: "Our team handles server setup, device integration, user import, and configuration. We test everything before going live." },
            { number: "03", title: "Training & support", description: "We train your admin team on reports and rules, and provide ongoing support for the life of your deployment." },
          ]}
        />
      </div>

      {/* FAQ */}
      <div className="bg-steel-bg">
        <FAQAccordion
          label="FAQ"
          heading="Print software questions"
          faqs={faqs}
        />
      </div>

      <CTAStrip
        heading="Ready to take control of your print environment?"
        description="Free print assessment  -  we'll show you exactly what you're spending and how to reduce it."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
