import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "How to Choose a Copier Lease in Sacramento",
  description:
    "Learn how to choose the best copier lease for your Sacramento business. Compare lease terms, costs, and features. Expert advice from Milk Man Toner Company.",
  path: "/blog/how-to-choose-copier-lease-sacramento",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "How to Choose a Copier Lease in Sacramento", url: `${company.website}/blog/how-to-choose-copier-lease-sacramento` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">How to Choose a Copier Lease</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Leasing · 5 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            How to Choose a Copier Lease in Sacramento
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Milk Man Toner Team · March 15, 2025</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Choosing the right copier lease can save your Sacramento business thousands of dollars over the life of the agreement  -  or cost you thousands if you get it wrong. With so many options on the market, how do you find the right fit? Here&apos;s what every Sacramento business owner should consider before signing a copier lease.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">1. Understand your print volume</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Before you start shopping for a copier, take a hard look at how much your office actually prints. Most copier leases include a monthly page allotment  -  typically between 2,000 and 20,000 pages  -  with overage charges for anything above that. If you underestimate your volume, those overage charges can add up fast. If you overestimate, you&apos;re paying for capacity you don&apos;t need. Pull your print logs for the last 3-6 months and calculate your average monthly output. That&apos;s your starting point.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">2. Compare lease terms carefully</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Copier leases typically range from 24 to 60 months. Shorter leases give you more flexibility to upgrade, while longer leases usually come with lower monthly payments. But watch out for auto-renewal clauses, early termination fees, and end-of-lease buyout terms. Some dealers bury unfavorable terms in the fine print. At Milk Man Toner Company, we believe in transparent, straightforward lease agreements  -  no surprises, no hidden fees.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">3. Factor in the total cost of ownership</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              The monthly lease payment is just one piece of the puzzle. You also need to consider the cost of toner, maintenance, service calls, and parts. Some dealers charge separately for each of these  -  which can double or triple your effective monthly cost. Look for a lease that bundles toner, service, and maintenance into the monthly payment. At Milk Man, every lease includes free toner delivery and same-day service at no extra charge.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">4. Choose a local dealer</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              National copier companies may offer competitive pricing upfront, but when your copier breaks down at 4 PM on a Friday, who&apos;s coming to fix it? A local Sacramento dealer like Milk Man Toner Company has technicians in the area who can respond the same day. We know the Sacramento market, we know your business, and we&apos;re just a phone call away.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">5. Ask about flexibility</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Your business needs will change over time. Can you upgrade your copier mid-lease if your office grows? Can you add or remove machines? What happens if you move locations? The best copier lease is one that adapts to your business  -  not one that locks you into a rigid contract for five years. Ask your dealer about upgrade options, machine swaps, and relocation policies before you sign.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Ready to get started?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              If you&apos;re a Sacramento business looking for a copier lease, Milk Man Toner Company offers flexible 24-60 month terms with free toner delivery, same-day service, and transparent pricing. Call us at {company.phone} or request a free quote online.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Need a copier lease in Sacramento?"
        description="Free quote, free toner delivery, flexible terms. Local NorCal experts standing by."
        primaryCTA={{ label: "Get a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
