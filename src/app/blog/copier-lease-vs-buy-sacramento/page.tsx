import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copier Lease vs. Buy in Sacramento: What Makes Sense in 2026",
  description:
    "Lease or buy a copier in Sacramento? Compare upfront cost, tax treatment, maintenance, and cash flow. Honest guide from Milk Man Toner Company in Loomis, CA.",
  path: "/blog/copier-lease-vs-buy-sacramento",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "Copier Lease vs. Buy in Sacramento", url: `${company.website}/blog/copier-lease-vs-buy-sacramento` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Copier Lease vs. Buy Sacramento</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Leasing · 5 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            Copier Lease vs. Buy in Sacramento: What Makes Sense for Your Business in 2026
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Shamus McClure · August 20, 2025</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Leasing vs. buying a copier is one of the most common questions we hear from Sacramento businesses. The right answer depends on your cash flow, tax situation, and how you use technology. Here&apos;s an honest breakdown of both options.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">The Core Question: Cash Now or Cash Over Time?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              When a Sacramento business needs a new copier, the decision usually comes down to two options: write a check and own the machine outright, or sign a lease and pay monthly. Both approaches have legitimate advantages, and the right choice depends on factors specific to your business - cash flow, tax strategy, expected print volume, and how quickly your needs might change.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Upfront Cost Comparison</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              A mid-range multifunction copier suitable for a 10-to-20 person office - like a Konica Minolta bizhub C3320i or an HP LaserJet Enterprise MFP - typically costs between $3,000 and $8,000 to purchase outright. Purchasing outright means no monthly payment, but it ties up capital that could be deployed elsewhere in the business.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Leasing the same machine typically runs $75 to $200 per month depending on the device, lease term, and what&apos;s included in the agreement. Over a 48-month lease, you&apos;ll pay $3,600 to $9,600 - potentially more than the purchase price. But you&apos;ve preserved your cash, and in most cases the lease includes service and maintenance.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Tax Treatment: Section 179 vs. Lease Deduction</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Under Section 179 of the federal tax code, businesses can deduct the full purchase price of qualifying equipment in the year it&apos;s placed in service. In 2026, the Section 179 limit is generous enough to cover most copier purchases. If your business has a strong taxable income year and you&apos;re looking for a deduction, buying a copier outright and taking the Section 179 deduction can make a lot of sense.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Lease payments, on the other hand, are fully deductible as a business expense in the year they&apos;re paid. This provides a steady stream of smaller deductions over the lease term rather than one large deduction upfront. Talk to your CPA - they&apos;ll have a view on which approach makes more sense given your specific tax situation.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Technology Refresh Cycles</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Copier technology moves fast. The machine that&apos;s state-of-the-art today will be a generation behind in four years. Cloud connectivity features, security protocols, mobile printing capabilities, and scan workflows all evolve quickly.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              When you buy a copier, you own it until it wears out or you sell it. When you lease, the end of the lease term is a natural opportunity to upgrade to current technology. For businesses in fast-moving industries - tech companies or healthcare practices that need to stay current with document management standards - leasing provides a built-in technology refresh cycle.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Maintenance: Included in a Lease, Extra When You Own</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              A well-structured <Link href="/services/copier-lease">copier lease</Link> includes a service and maintenance agreement. When something breaks, your dealer comes out and fixes it at no additional cost. Parts, labor, and often toner are bundled into your monthly payment.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              When you own a copier, service calls cost money. A typical service call from a <Link href="/copier-dealer/sacramento">local copier dealer</Link> in the Sacramento area runs $150 to $250 for labor, plus parts. For a machine that&apos;s three or four years old, service calls start to add up. This is one of the most commonly overlooked costs in the lease-vs.-buy calculation.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">When Buying Makes More Sense</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Buying is the right call when: your print volume is low and predictable, you have the capital available and prefer to avoid ongoing obligations, you&apos;re taking advantage of a Section 179 deduction in a high-income year, or you&apos;re in a stable industry where technology needs won&apos;t change dramatically.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">When Leasing Makes More Sense</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Leasing is the better choice when: you want to preserve cash for operations or growth, you want maintenance bundled into a predictable monthly cost, you like the idea of upgrading equipment every three to five years, or your print needs are growing and you&apos;re not sure exactly what you&apos;ll need three years from now.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">Let&apos;s Talk Through Your Situation</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Milk Man Toner Company offers flexible lease terms from 24 to 60 months on Konica Minolta and HP equipment, with service and toner options that can be bundled into your monthly payment. We can also work with your accountant to structure the agreement in a way that fits your tax strategy.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Call us at {company.phone} to talk through what makes sense for your specific situation. We&apos;re not going to push you toward one option or the other - we&apos;ll give you the honest breakdown and let you decide.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Lease or buy? We&apos;ll help you figure it out."
        description="Honest advice, no pressure. Flexible lease terms and purchase options for Sacramento businesses."
        primaryCTA={{ label: "Get a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
