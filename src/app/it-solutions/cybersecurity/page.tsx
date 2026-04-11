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
  title: "Cybersecurity Solutions for NorCal Businesses | Milk Man Toner",
  description:
    "Protect your business with layered cybersecurity  -  endpoint protection, email security, network monitoring, and employee training in Northern California. Call (916) 253-9804.",
  path: "/it-solutions/cybersecurity",
});

const faqs = [
  {
    question: "Is my small business really a target for cyberattacks?",
    answer:
      "Yes. Small businesses are frequently targeted precisely because they often have weaker security than large enterprises. According to Verizon's annual data breach report, 46% of all cybersecurity breaches target businesses with fewer than 1,000 employees.",
  },
  {
    question: "What is endpoint detection and response (EDR)?",
    answer:
      "EDR is next-generation antivirus that monitors device behavior in real time, not just known malware signatures. It detects ransomware, fileless attacks, and other advanced threats that traditional antivirus misses  -  and can automatically contain threats before they spread.",
  },
  {
    question: "How do you help with compliance requirements like HIPAA or PCI?",
    answer:
      "We have experience helping healthcare and financial services businesses meet compliance requirements. We assess your environment against the relevant framework, implement required controls, and provide documentation to support your compliance efforts.",
  },
];

export default function CybersecurityPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "IT Solutions", url: `${company.website}/it-solutions` },
          { name: "Cybersecurity", url: `${company.website}/it-solutions/cybersecurity` },
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
          <span className="text-brand-black">Cybersecurity</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            IT Solutions
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Cybersecurity solutions that protect your business and your data
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Ransomware, phishing, and data breaches hit small businesses every day. We layer proven security solutions to protect your network, your devices, and your people.
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
                Practical security for real businesses
              </h2>
              {[
                "Cybercrime against small businesses is at an all-time high. Ransomware, phishing emails, business email compromise, and data breaches cost small businesses hundreds of thousands of dollars every year  -  and most attacks exploit simple vulnerabilities that could have been prevented.",
                "Milk Man Toner Company delivers practical cybersecurity solutions for Northern California businesses. We don't sell fear  -  we assess your real risk, close the gaps that matter most, and put monitoring in place to catch threats before they become breaches.",
                "Our approach is layered: endpoint protection stops malware on your devices, email security filters out phishing attempts, network monitoring detects suspicious activity, and security awareness training teaches your team to recognize threats. Together, these layers dramatically reduce your attack surface.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Endpoint detection and response (EDR)",
                  "Email security and anti-phishing",
                  "Network security monitoring",
                  "Multi-factor authentication (MFA)",
                  "Security awareness training",
                  "Vulnerability assessments",
                  "Ransomware protection and recovery",
                  "Compliance support (HIPAA, PCI, etc.)",
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
          heading="How cybersecurity works"
          steps={[
            { number: "01", title: "Security assessment", description: "We assess your current security posture  -  identifying vulnerabilities, reviewing your current tools, and benchmarking against best practices." },
            { number: "02", title: "Implement protections", description: "We deploy the right security tools for your environment  -  endpoint protection, email security, MFA, and network monitoring." },
            { number: "03", title: "Ongoing monitoring", description: "Our security team monitors your environment for threats, responds to alerts, and keeps your protections up to date." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Cybersecurity questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Is your business protected from cyber threats?"
        description="Free security assessment  -  we'll identify your vulnerabilities before attackers do."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
