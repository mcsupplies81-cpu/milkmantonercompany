import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Managed Print Services Placer County CA | Local MPS Guide",
  description:
    "Placer County businesses cut print costs 20-35% with managed print. Free audit from Milk Man Toner in Loomis. Serving Roseville, Rocklin, Lincoln, Auburn.",
  path: "/blog/managed-print-placer-county-guide",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "Placer County Managed Print Guide", url: `${company.website}/blog/managed-print-placer-county-guide` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Placer County Managed Print Guide</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Managed Print · 5 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            A Placer County Business Owner&apos;s Guide to Managed Print Services
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Shamus McClure · November 12, 2025</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Most Placer County businesses have no idea what printing really costs them. This guide walks through what an MPS audit reveals, how a managed print program works, and why a local Loomis-based provider beats the national alternatives.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">The Print Costs Most Businesses Don&apos;t Track</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Ask a business owner in Roseville or Rocklin what they spend on printing each month and you&apos;ll usually get a shrug, followed by a guess that&apos;s significantly lower than reality. Printing is one of the few business expenses that&apos;s genuinely hard to track because it&apos;s spread across multiple devices, multiple supply purchases, occasional service calls, and hidden employee time.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Industry research shows that businesses typically underestimate their true print costs by 30% to 40%. When you add up toner and ink, paper, maintenance, the energy cost of running older devices, and the time employees spend managing printer issues and supply orders, the real number is consistently higher than what shows up in the budget.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">What a Print Audit Reveals</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              A managed print services engagement starts with a free fleet audit. Our audit process involves inventorying every printing device in your office, assessing the age and condition of each machine, pulling page count data where available, and reviewing how your office buys supplies.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              What we typically find in a Placer County business: devices that are oversized for their actual workload, devices that are undersized and being run beyond their rated duty cycle, multiple different toner cartridge types that create procurement complexity, retail supply purchasing at marked-up prices, and no formal process for ordering supplies until someone runs out.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Typical Savings for Placer County Businesses</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              After completing a print audit and implementing a managed print program, our Placer County customers typically see savings in the range of 20% to 35% in the first year. Fleet right-sizing often accounts for the biggest single savings - replacing three aging, inefficient printers with one properly sized multifunction device reduces energy costs, toner costs, and maintenance costs simultaneously. Supply consolidation typically saves 15% to 25% on supplies alone.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              For a Roseville business spending $1,800 per month on print-related costs, a 25% savings is $450 per month, or $5,400 per year.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">How Fleet Consolidation Works</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Many Placer County offices have accumulated printing devices over the years without a plan - one printer here when the office expanded, another one there when an employee complained about walking to the shared printer. The result is a fleet of mismatched devices with different supply needs, different service requirements, and varying reliability.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Consolidating to fewer, better devices - and positioning them strategically within the office - typically reduces supply costs, simplifies procurement, and improves reliability. Most small-to-medium businesses find that a single well-chosen multifunction printer can replace two or three aging single-function devices.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Remote Monitoring: How It Works</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Managed print programs use monitoring software that communicates with each printing device and reports toner levels, page counts, and device status back to us. When toner drops below a preset threshold, we ship a replacement automatically - it arrives before you run out. When a device logs error codes that indicate an impending problem, we dispatch a technician proactively.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              For our Loomis-based operation, serving customers across Roseville, Rocklin, Lincoln, Auburn, Penryn, and the broader Placer County area, this remote visibility means we can support your entire fleet without needing to visit daily. We monitor everything from our office and only roll a truck when it&apos;s actually needed.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Why a Local Provider Beats the National Options</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              National managed print providers have the resources to serve large enterprise accounts. But for the typical Placer County business with 10 to 100 employees, a national provider creates a service gap that local businesses pay for in downtime.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              When your copier breaks, you need someone who can be there the same day. National service contracts often specify 4-hour or next-business-day response windows, and in practice they frequently miss those windows. When you call to complain, you get a call center in another state.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              At Milk Man Toner Company, we&apos;re based right here in Loomis. Our service territory is our backyard. When a customer in Rocklin calls with a down machine, we know the fastest route there and we can often dispatch someone within hours. You talk to us directly - not a call center.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Getting Started</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              To schedule a free print audit for your Placer County business, call Milk Man Toner Company at {company.phone}. We&apos;ll schedule a visit to your office, complete the assessment at no cost, and provide a detailed report showing your current costs and projected savings under a managed print program. There&apos;s no obligation to proceed and no pressure.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Free print audit for Placer County businesses"
        description="We come to you, assess your fleet, and show you exactly what you&apos;ll save. No obligation."
        primaryCTA={{ label: "Schedule a free audit", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
