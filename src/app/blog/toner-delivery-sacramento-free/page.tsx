import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Free Toner Delivery in Sacramento - Stop Overpaying at Office Supply Stores",
  description:
    "Stop overpaying for toner at Staples. Free toner delivery in Sacramento and Placer County from Milk Man Toner. HP and Konica Minolta supplies in stock.",
  path: "/blog/toner-delivery-sacramento-free",
});

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Blog", url: `${company.website}/blog` },
          { name: "Free Toner Delivery in Sacramento", url: `${company.website}/blog/toner-delivery-sacramento-free` },
        ])}
      />

      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <Link href="/blog" className="hover:text-brand-black transition-colors">Blog</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Free Toner Delivery in Sacramento</span>
        </div>
      </div>

      <article className="px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.14em] text-steel uppercase mb-2">Toner · 4 min read</div>
          <h1 className="font-heading text-[28px] md:text-[36px] leading-[1.15] text-brand-black mb-3">
            Free Toner Delivery in Sacramento - Stop Overpaying at Office Supply Stores
          </h1>
          <p className="text-[11px] text-brand-mid mb-8">By Shamus McClure · July 15, 2025</p>

          <div className="prose-milkman">
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Buying toner at Staples or Office Depot is one of the most common ways Sacramento businesses quietly overspend on printing. The retail markup is significant, the wrong-cartridge problem is constant, and there&apos;s a better option available that costs less and delivers to your door.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">The Real Cost of Buying Toner at Staples</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Walk into any Staples or Office Depot in Sacramento and you&apos;ll pay retail price for toner - and retail price on printer cartridges is marked up significantly over what dealers pay. A standard HP 87A black toner cartridge that retails for around $110 at a big-box store is available through a local dealer like Milk Man Toner Company at a meaningfully lower price, with free delivery to your door.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Multiply that difference across all the toner your office uses in a year, and you&apos;re looking at real savings. A busy Sacramento office that goes through 20 or 30 cartridges annually could easily save several hundred dollars just by switching to local dealer pricing.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">The Wrong Cartridge Problem</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Here&apos;s something every office manager has experienced: you send someone to the store to grab toner, they come back with the wrong cartridge, and now you&apos;ve got a $100 item to return while your printer sits idle. Printer model numbers are confusing. The HP LaserJet Pro M404n takes a different cartridge than the M404dn. The Konica Minolta bizhub C3320i takes four separate toner colors, each with its own part number.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              When you order through Milk Man Toner Company, we maintain a record of every device at your office. You call or email us, tell us which printer needs toner, and we ship the right cartridge. No guessing, no returns, no downtime waiting on a wrong-order situation.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">How Fast Is Delivery?</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              For Sacramento and Placer County customers, we offer next-business-day delivery on in-stock items. For customers in our immediate service area - Roseville, Rocklin, Loomis, Lincoln, Auburn, and Penryn - we can often arrange same-day delivery for urgent situations. We&apos;re based in Loomis, so we&apos;re close to most of our Placer County customers.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              For Bay Area and Reno/Tahoe customers, standard shipping applies. We keep a wide inventory of HP and Konica Minolta supplies and can ship quickly on most items.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">We Pick Up Your Empty Cartridges</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Printer cartridges are regulated waste in California. Tossing them in the trash isn&apos;t just wasteful - it can create compliance headaches for businesses that handle cartridges in volume. When we deliver fresh toner to your Sacramento or Placer County office, we pick up your empties and handle recycling properly. No boxes to ship back, no labels to print. It&apos;s part of the service.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">HP and Konica Minolta Compatibility</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              We specialize in two primary brands: HP and Konica Minolta. For HP, we stock toner for the entire LaserJet line, including the Pro series, the Enterprise series, and the MFP models. For Konica Minolta, we carry toner for the bizhub line from small-office models up through production-level machines.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              We carry both OEM (original manufacturer) cartridges and premium compatible cartridges where appropriate. For customers on a managed print program, we typically recommend OEM cartridges to protect warranty coverage and ensure consistent print quality. For customers who want to reduce costs on secondary printers, quality compatibles can be a reasonable option. We&apos;ll give you an honest recommendation based on your specific situation.
            </p>

            <h2 className="font-heading text-lg text-brand-black mt-8 mb-3">How to Order</h2>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              Ordering is simple. You can call us at {company.phone}, send an email, or use our online contact form. If you&apos;re not sure which cartridge you need, just tell us the printer model and we&apos;ll figure it out. For businesses with multiple printers, we can set up an account so your team has a single point of contact for all supply orders.
            </p>
            <p className="text-[13px] text-[#444] leading-[1.8] mb-5">
              For customers on our managed print program, toner is delivered automatically before you run out. You never have to think about it. Running out of toner the morning of a big presentation or right before a deadline is one of the most preventable office problems there is - and it&apos;s completely avoidable with a standing account.
            </p>
          </div>
        </div>
      </article>

      <CTAStrip
        heading="Get toner delivered free in Sacramento"
        description="Right cartridge, right price, delivered to your door. Set up an account in minutes."
        primaryCTA={{ label: "Set up a toner account", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
      />
    </>
  );
}
