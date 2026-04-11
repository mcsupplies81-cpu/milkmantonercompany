import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "7 Ways to Cut Print Costs | Sacramento Businesses 2026",
  description:
    "Sacramento businesses are cutting print costs 20-35% with these 7 strategies. Free fleet audit from Milk Man Toner. Serving Sacramento and Placer County.",
  path: "/blog/office-print-cost-reduction-tips",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "7 Ways to Cut Print Costs", url: `${company.website}/blog/office-print-cost-reduction-tips` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">7 Ways to Cut Print Costs</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Tips · 5 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            7 Ways Sacramento Businesses Are Cutting Print Costs in 2026
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Shamus McClure · February 3, 2026</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Print costs are one of the most controllable line items in a Sacramento business budget. Unlike rent or payroll, print costs are largely discretionary and highly reducible with the right approach. Businesses that take a systematic look at how they print consistently find ways to cut 20% to 35% from their print budget without sacrificing the output they actually need.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">1. Audit Your Current Fleet</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              You can&apos;t manage what you can&apos;t measure. The first step to cutting print costs is understanding what you&apos;re currently spending. That means taking inventory of every printer, copier, and multifunction device in your office, pulling page count data from each device, and tallying up what you&apos;re spending on supplies and service.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Most businesses skip this step because it sounds tedious. But the audit consistently reveals surprises: old devices that cost far more per page than modern alternatives, devices running well beyond their rated capacity, and supplies being purchased at retail prices when dealer pricing would be significantly cheaper. A free fleet audit from Milk Man Toner Company can complete this process for you at no cost.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">2. Switch to Managed Print</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Managed print services address print costs systematically rather than one fix at a time. Under an MPS program, your provider handles toner delivery, maintenance, and fleet optimization as an integrated service. You pay one predictable monthly cost instead of a series of unpredictable expenses.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              The average managed print customer in Sacramento cuts print costs by 20% to 30% in the first year. That savings compounds over time as the program continues to optimize the fleet and eliminate inefficiency.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">3. Consolidate Your Devices</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              More printers in an office usually means higher total cost, not more convenience. Each device has its own supply chain, its own service needs, and its own energy draw. A single well-positioned multifunction device serving a team of 10 is almost always cheaper than three individual printers scattered around the office.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Consolidation also simplifies management. One toner type instead of five, one service agreement instead of multiple, one set of drivers to maintain. For Sacramento businesses with offices spread across multiple locations, a consolidation assessment as part of a managed print program can dramatically simplify operations.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">4. Enable Duplex Printing as Default</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Defaulting all print jobs to two-sided output cuts paper consumption by up to 50%. Paper is a significant cost in high-volume print environments, and it&apos;s pure waste if employees are printing one-sided when the job doesn&apos;t actually require it.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Enabling duplex as the default setting on your printers takes about five minutes in the printer driver settings. For a Sacramento office printing 10,000 pages per month, the paper savings alone can add up to $1,000 or more per year.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">5. Use Local Toner Delivery Instead of Retail</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              A toner cartridge at Staples or Amazon is priced for retail margin. The same cartridge through a local dealer like Milk Man Toner Company is priced at dealer cost, which is consistently lower. Free delivery to Sacramento and Placer County means you&apos;re also saving the time and fuel cost of a supply run.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Beyond price, local dealer purchasing eliminates the wrong-cartridge problem. When you order through a dealer who maintains records of your device inventory, you always get the right supplies - eliminating the wasted time and cost of returns and emergency replacement orders.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">6. Set Print Policies for Color and Single-Sided Jobs</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Print policies are settings that restrict how users can print - specifically, requiring justification or authentication for color print jobs, defaulting to duplex, and limiting printing from certain applications. Enforced print policies can reduce color page volume by 30% to 50% in environments where color printing has been unrestricted.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Most managed print programs include print policy consulting and implementation as part of the service. If you&apos;re setting policies independently, identify which workflows legitimately require color and which don&apos;t before restricting access.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">7. Recycle Cartridges and Recover Value</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Used toner cartridges have value, and California businesses have an obligation to dispose of them properly. Many cartridge recycling programs offer credits toward future purchases, effectively reducing your toner cost further.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              At Milk Man Toner Company, we pick up empty cartridges when we deliver fresh ones. We handle recycling compliance on your behalf, which eliminates the hassle of managing returns and ensures your business is handling electronic waste correctly under California regulations.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Start With One Step</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              You don&apos;t have to implement all seven of these strategies at once. Start with the free fleet audit - it takes an hour and gives you a clear picture of where your print budget is going. From there, the highest-impact changes will be obvious. Call Milk Man Toner Company at {company.phone} to schedule your free audit.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Ready to cut your print costs?"
        description="Start with a free fleet audit. No obligation, no sales pressure - just clarity on what you&apos;re spending."
        primaryCTA={{ label: "Schedule a free audit", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
