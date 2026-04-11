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
  title: "Business Continuity & Disaster Recovery for NorCal | Milk Man Toner",
  description:
    "Backup and disaster recovery solutions for businesses in Sacramento and Northern California. Stay running after ransomware, hardware failure, or disaster. Call (916) 253-9804.",
  path: "/it-solutions/business-continuity",
});

const faqs = [
  {
    question: "How often should backups be tested?",
    answer:
      "At minimum, backups should be tested quarterly  -  but for critical systems, monthly testing is better. Many businesses discover their backups don't work correctly only when they need them. We make sure your backups are verified and your recovery procedures work before disaster strikes.",
  },
  {
    question: "Can you recover from a ransomware attack?",
    answer:
      "Yes, if you have clean backups. We design backup solutions specifically with ransomware in mind  -  including air-gapped backups that ransomware can't reach, version history that lets you roll back to pre-infection states, and rapid restoration procedures.",
  },
  {
    question: "What is a recovery time objective (RTO)?",
    answer:
      "RTO is how long you can afford to be down after a disaster. Different businesses have different tolerances  -  a one-hour RTO requires different technology than a 24-hour RTO. We help you define your RTO and design a solution that meets it within your budget.",
  },
];

export default function BusinessContinuityPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "IT Solutions", url: `${company.website}/it-solutions` },
          { name: "Business Continuity", url: `${company.website}/it-solutions/business-continuity` },
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
          <span className="text-brand-black">Business Continuity</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            IT Solutions
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Business continuity solutions that keep you running when things go wrong
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Ransomware, hardware failure, and natural disasters happen. The question is how fast you can recover. Our backup and DR solutions get you back online in hours, not days.
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
                A backup that&apos;s never been tested isn&apos;t a backup you can count on
              </h2>
              {[
                "Business continuity planning is not just for large enterprises. Every business  -  regardless of size  -  needs a plan for what happens when critical systems go down. Whether it's a ransomware attack that encrypts your files, a server that fails at the worst possible time, or a natural disaster that takes out your office, the cost of unplanned downtime is significant.",
                "Milk Man Toner Company designs and implements business continuity solutions for Northern California businesses. We combine automated backup, offsite replication, and tested recovery procedures to ensure your critical data and systems can be restored quickly when disaster strikes.",
                "Our approach goes beyond simply backing up your data. We document your recovery time objectives, test your recovery procedures regularly, and make sure your team knows exactly what to do when something goes wrong.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Automated local and cloud backup",
                  "Offsite replication and air-gapped backups",
                  "Ransomware detection and recovery",
                  "Disaster recovery planning",
                  "Recovery time objective (RTO) definition",
                  "Regular backup testing and validation",
                  "Business continuity documentation",
                  "Rapid recovery for critical systems",
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
          heading="How business continuity works"
          steps={[
            { number: "01", title: "BC assessment", description: "We assess your critical systems, data, and recovery time requirements to design a business continuity plan that fits your risk profile." },
            { number: "02", title: "Implement backup & DR", description: "We deploy automated backup, configure offsite replication, and document recovery procedures for your critical systems." },
            { number: "03", title: "Test & maintain", description: "We test your recovery procedures on a regular schedule, validate your backups, and update your plan as your environment changes." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Business continuity questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Is your business prepared for a disaster?"
        description="Free BC assessment  -  we'll identify your risks and design a recovery plan that works."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
