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
  title: "Network Solutions for NorCal Businesses | Milk Man Toner",
  description:
    "Business network design, installation, and management in Sacramento and Northern California. Wired and wireless. Call Milk Man Toner at (916) 253-9804.",
  path: "/it-solutions/network-solutions",
});

const faqs = [
  {
    question: "Do you support both wired and wireless networks?",
    answer:
      "Yes. We design and install complete network environments  -  wired Ethernet, Wi-Fi, and hybrid solutions. We'll assess your office layout and recommend the right combination for your needs.",
  },
  {
    question: "Can you manage our existing network or do you need to replace it?",
    answer:
      "Both. We can take over management of your existing infrastructure, upgrade specific components, or design and install a completely new network. We'll assess what you have and recommend the most cost-effective path forward.",
  },
  {
    question: "Do you offer network monitoring after installation?",
    answer:
      "Yes. Our managed network service includes 24/7 monitoring, automated alerts, firmware updates, and proactive maintenance. We identify and resolve issues before they cause downtime.",
  },
];

export default function NetworkSolutionsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "IT Solutions", url: `${company.website}/it-solutions` },
          { name: "Network Solutions", url: `${company.website}/it-solutions/network-solutions` },
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
          <span className="text-brand-black">Network Solutions</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            IT Solutions
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Business network solutions designed for reliability and security
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            From small office networks to multi-site enterprise infrastructure, our local NorCal engineers design, install, and manage networks that keep your business connected.
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
                Networks built to keep your business running
              </h2>
              {[
                "A reliable, secure network is the backbone of your business. Every application, device, and user depends on it. Milk Man Toner Company designs and manages business networks for organizations across Northern California  -  from simple small office setups to complex multi-site enterprise networks.",
                "Our network solutions start with a thorough assessment of your current infrastructure, your security requirements, and your growth plans. We then design a solution that fits your needs  -  whether that's a simple wireless upgrade, a complete network redesign, or managed network monitoring and maintenance.",
                "We work with industry-leading hardware from Cisco, Meraki, Ubiquiti, and other enterprise-grade vendors. Every network we install is documented, monitored, and backed by our local NorCal support team.",
              ].map((para, i) => (
                <p key={i} className="text-[12px] text-[#555] leading-[1.75] mb-4">{para}</p>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg text-brand-black mb-4">What&apos;s included</h3>
              <ul>
                {[
                  "Network design and engineering",
                  "Wired LAN and wireless Wi-Fi installation",
                  "Managed switches, firewalls, and access points",
                  "VPN and remote access configuration",
                  "Network monitoring and management",
                  "Multi-site and SD-WAN solutions",
                  "VoIP phone system integration",
                  "Security audit and hardening",
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
          heading="How network solutions work"
          steps={[
            { number: "01", title: "Network assessment", description: "We audit your current network infrastructure, identify vulnerabilities and bottlenecks, and document your environment." },
            { number: "02", title: "Design & installation", description: "We design your new network, procure hardware, and manage the installation  -  with minimal disruption to your business operations." },
            { number: "03", title: "Ongoing management", description: "We monitor your network 24/7, respond to alerts, manage firmware updates, and provide proactive recommendations." },
          ]}
        />
      </div>

      <div className="bg-steel-bg">
        <FAQAccordion label="FAQ" heading="Network solutions questions" faqs={faqs} />
      </div>

      <CTAStrip
        heading="Need a reliable business network?"
        description="Free network assessment  -  we'll identify vulnerabilities and recommend improvements."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
