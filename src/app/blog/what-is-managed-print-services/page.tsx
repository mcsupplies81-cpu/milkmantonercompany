import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "What Is Managed Print Services and Does Your Business Need It?",
  description:
    "Learn what managed print services are, how they work, and whether your business needs them. Expert guide from Milk Man Toner Company in Northern California.",
  path: "/blog/what-is-managed-print-services",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "What Is Managed Print Services?", url: `${company.website}/blog/what-is-managed-print-services` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">What Is Managed Print Services?</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Services · 4 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            What Is Managed Print Services and Does Your Business Need It?
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Milk Man Toner Team · February 10, 2025</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              If you&apos;ve been hearing the term &quot;managed print services&quot; and wondering what it means for your business, you&apos;re not alone. Managed print services (MPS) is one of the fastest-growing segments of the office technology industry  -  and for good reason. It saves businesses money, reduces headaches, and keeps your printers running without you having to think about it.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">What is managed print services?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Managed print services is exactly what it sounds like: a provider manages your entire print environment on your behalf. This includes monitoring your printers and copiers, automatically ordering and delivering toner before you run out, handling all service and repair calls, providing detailed reports on your print usage, and optimizing your fleet for cost efficiency. Instead of reacting to printer problems  -  scrambling to order toner, calling for service, troubleshooting paper jams  -  everything is handled proactively by your managed print provider.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">How does it work?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              At Milk Man Toner Company, our managed print program starts with a fleet assessment. We audit your current printers, copiers, and print workflows to understand how your office prints, what it costs, and where there&apos;s room for improvement. Then we design a custom program that right-sizes your fleet, standardizes your supplies, and sets up proactive monitoring. Once the program is live, we handle everything  -  toner delivery, service calls, parts replacement, and quarterly business reviews. You get one predictable monthly cost and zero printer headaches.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">How much can it save?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Most businesses waste 1-3% of their annual revenue on unmanaged printing  -  and they don&apos;t even know it. Hidden costs like emergency toner orders, inefficient devices, unnecessary color printing, and reactive service calls add up quickly. Our managed print customers typically reduce their print costs by 20-30% in the first year. That&apos;s real money back in your budget for things that actually grow your business.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Does your business need managed print?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              If any of these sound familiar, managed print services could be a great fit for your office: you&apos;re constantly running out of toner at the worst possible time. Your employees waste time troubleshooting printer issues. You have no visibility into how much printing actually costs your business. You have multiple printer brands with different supply chains. Your service calls take days or weeks to resolve. If you checked even one of those boxes, a managed print program can save you time, money, and frustration.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Getting started is easy</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Milk Man Toner Company offers managed print services to businesses of all sizes across Sacramento, the Bay Area, Silicon Valley, and Northern California. We start with a free, no-obligation fleet assessment  -  just call us at {company.phone} or fill out our online form. We&apos;ll show you exactly how much you can save and design a program that fits your office.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Want to learn more about managed print?"
        description="Free fleet assessment, no obligation. We'll show you exactly how much you can save."
        primaryCTA={{ label: "Request a free assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
