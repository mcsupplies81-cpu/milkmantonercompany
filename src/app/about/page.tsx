import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "About Milk Man Toner Company - Family-Owned, NorCal Raised",
  description:
    "Meet the team behind Milk Man Toner Company. Family-owned and operated in Loomis, CA. Serving Northern California businesses with copiers, printers, toner, and managed print.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "About Us", url: `${company.website}/about` },
        ])}
      />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">About Us</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Our Story
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Classic service meets modern technology.
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65]">
            Milk Man Toner Company is a support-driven, family-owned office equipment and services company.
            We deliver, install, and support network copiers, printers, scanners, and fax machines throughout
            Northern California.
          </p>
        </div>
      </section>

      {/* Full-width team photo */}
      <div className="relative h-[300px] md:h-[500px] border-b-2 border-brand-black overflow-hidden">
        <Image
          src="/images/team-wide.jpg"
          alt="The Milk Man Toner Company team in Loomis, California"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent flex items-end px-6 pb-6">
          <p className="text-white text-[11px] tracking-[0.1em] uppercase font-medium">
            Our team - Loomis, California
          </p>
        </div>
      </div>

      {/* The concept */}
      <section className="px-5 py-12 md:py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">The concept</div>
          <h2 className="font-heading text-[26px] md:text-[32px] text-brand-black mb-6">
            The spirit of the milkman, brought to your office.
          </h2>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-4">
            The concept of our company is based on the spirit of the Milk Man from days gone by.
            The Milk Man of the past was a welcomed face, delivering milk to our homes on a weekly basis.
            Our Milk Man is similar - a welcomed, dedicated, professional business person there to support you.
          </p>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-4">
            The Milk Man today has one goal in mind: to exceed our customers&apos; expectations with
            responsive support, at a fair price. We blend new technology and solutions with the
            &ldquo;old school&rdquo; customer service approach.
          </p>
          <p className="text-[13px] text-[#555] leading-[1.85]">
            We thank you for stopping by our website and look forward to delivering that much-needed,
            next bottle of toner - and we&apos;ll gladly pick up your empty cartridges too.
          </p>
        </div>
      </section>

      {/* Full-width milkman photo */}
      <div className="relative h-[280px] md:h-[460px] border-t-2 border-b-2 border-brand-black overflow-hidden">
        <Image
          src="/images/milkman-float.jpg"
          alt="Old-school milkman with his delivery float - the inspiration behind Milk Man Toner Company"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/20" />
      </div>

      {/* Family-owned section */}
      <section className="bg-steel-bg border-b border-steel-pale px-5 py-12 md:py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">Our founder</div>
          <h2 className="font-heading text-[26px] md:text-[32px] text-brand-black mb-6">
            Family-owned. Family-operated.
          </h2>
          <div className="relative h-[260px] md:h-[420px] border-[1.5px] border-brand-black overflow-hidden mb-8">
            <Image
              src="/images/family-van.jpg"
              alt="Shamus McClure and family - Milk Man Toner Company"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-4">
            Milk Man Toner Company is a family-owned business based in Loomis, California, right in
            the heart of the Sacramento foothills. We&apos;re not a franchise. We&apos;re not backed
            by private equity. We&apos;re a family that cares about doing right by our customers and
            our community.
          </p>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-8">
            We are a complete &ldquo;one stop shop&rdquo; service-oriented company. We specialize in
            high-speed color products at an affordable rate, and our in-house leasing program makes it
            easy to upgrade your equipment when technology moves forward.
          </p>
          <div className="border-l-2 border-steel pl-4">
            <p className="text-[13px] font-medium text-brand-black">Shamus McClure</p>
            <p className="text-[11px] text-brand-mid">President, Milk Man Toner Company</p>
          </div>
        </div>
      </section>

      {/* Full-width fleet photo */}
      <div className="relative h-[280px] md:h-[460px] border-b-2 border-brand-black overflow-hidden">
        <Image
          src="/images/team-fleet.jpg"
          alt="Milk Man Toner Company delivery fleet covering Northern California"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent flex items-end px-6 pb-6">
          <p className="text-white text-[11px] tracking-[0.1em] uppercase font-medium">
            Our fleet - covering all of Northern California
          </p>
        </div>
      </div>

      {/* Coverage text */}
      <section className="px-5 py-12 md:py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">Coverage</div>
          <h2 className="font-heading text-[26px] md:text-[32px] text-brand-black mb-6">
            Wherever your business is, we deliver.
          </h2>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-4">
            Our fleet of delivery vans covers all of Northern California. From Sacramento to
            San Francisco, Silicon Valley to Reno, and everywhere in between. Every van is stocked
            with toner, parts, and supplies so our technicians can resolve most issues on the first visit.
          </p>
          <p className="text-[13px] text-[#555] leading-[1.85] mb-8">
            We offer free supply delivery across California and throughout Northern California. We know
            you&apos;re busy, so when you need to replenish your toner, let us minimize downtime and
            inconvenience by bringing your supplies right to you.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Sacramento", href: "/locations/sacramento" },
              { name: "Bay Area", href: "/locations/bay-area" },
              { name: "Silicon Valley", href: "/locations/silicon-valley" },
              { name: "Reno / Tahoe", href: "/locations/reno-tahoe" },
              { name: "Central CA", href: "/locations/central-california" },
            ].map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-3 py-1.5 hover:bg-brand-black hover:text-white transition-colors"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width team Disneyland photo */}
      <div className="relative h-[280px] md:h-[460px] border-t-2 border-b-2 border-brand-black overflow-hidden">
        <Image
          src="/images/team-disneyland.jpg"
          alt="The Milk Man Toner Company team"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/30" />
      </div>

      {/* Team copy */}
      <section className="bg-brand-black border-b-2 border-brand-black px-5 py-12 md:py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel-light uppercase mb-1.5">Our team</div>
          <h2 className="font-heading text-[26px] md:text-[32px] text-white mb-6">
            We invest in our people so they can invest in you.
          </h2>
          <p className="text-[13px] text-[#999] leading-[1.85] mb-4">
            Our factory-trained and certified technicians help keep your equipment running smoothly
            to eliminate downtime. We offer all-inclusive maintenance agreements to assist in managing
            your organization&apos;s copier and printer maintenance and supplies, all for one
            consolidated monthly fee.
          </p>
          <p className="text-[13px] text-[#999] leading-[1.85]">
            We guarantee a quick service call response that has become known in our industry as amazing.
            When you call Milk Man, you get a team that genuinely cares - because that&apos;s the
            culture we&apos;ve built together.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:px-8">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "100+", label: "Years combined experience" },
            { stat: "5", label: "Regions served" },
            { stat: "1,000s", label: "Businesses served" },
            { stat: "Same day", label: "Service response" },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-heading text-2xl text-brand-black mb-1">{item.stat}</div>
              <div className="text-[10px] text-brand-mid tracking-[0.08em] uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="px-5 py-12 md:py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">Credentials</div>
          <h2 className="font-heading text-[22px] text-brand-black mb-6">
            Certifications &amp; partnerships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              "HP Authorized Dealer",
              "Konica Minolta Certified",
              "BBB A+ Accredited",
              "Factory-Trained Technicians",
            ].map((cert) => (
              <div key={cert} className="border border-steel-pale p-4 text-center">
                <div className="text-[11px] font-medium text-brand-black">{cert}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 border border-steel-pale p-5 max-w-xs">
            <Image
              src="/images/placer-grown.png"
              alt="Placer Grown - proudly based in Placer County, California"
              width={72}
              height={72}
              className="object-contain shrink-0"
            />
            <p className="text-[11px] text-brand-mid leading-[1.6]">
              Proudly based in Placer County, CA
            </p>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to work with a team that cares?"
        description="Get a free quote from Northern California's family-owned copier and printer dealer."
        primaryCTA={{ label: "Get a free quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: company.phoneHref }}
        showPhone
      />
    </>
  );
}
