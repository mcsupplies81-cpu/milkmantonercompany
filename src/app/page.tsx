import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { RotatingTagline } from "@/components/sections/RotatingTagline";
import { SolutionCards } from "@/components/sections/SolutionCards";
import { TechPartner } from "@/components/sections/TechPartner";
import { TrustBadgeBar } from "@/components/sections/TrustBadgeBar";
import { LocationStrip } from "@/components/sections/LocationStrip";
import { StepBlock } from "@/components/sections/StepBlock";
import { BrandBlock } from "@/components/sections/BrandBlock";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { LocationCard } from "@/components/cards/LocationCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFAQPageSchema } from "@/lib/schema";
import { homepageFaqs } from "@/data/faqs";
import { blogPosts } from "@/data/blog-posts";
import { company } from "@/data/company";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFAQPageSchema(homepageFaqs)} />

      {/* 3. Hero */}
      {/* Rotating tagline */}
      <RotatingTagline />

      {/* 3. Hero */}
      <HeroSection
        tag="Northern California's Copier Dealer"
        title={
          <>
            Your local partner
            <br />
            for <em className="text-brand-mid italic">office technology</em>
          </>
        }
        description="HP and Konica Minolta copiers, printers, toner and managed print  -  serving Sacramento, Bay Area, Silicon Valley, and Reno."
        primaryCTA={{ label: "Get a free quote", href: "/contact" }}
        secondaryCTA={{ label: "See our machines", href: "/office-technology/copiers-printers" }}
        badges={[
          "HP authorized dealer",
          "Konica Minolta certified",
          "BBB accredited",
          "NorCal owned & operated",
        ]}
        backgroundImage="/images/sf-sutro-night.jpg"
      />

      {/* 4. Trust badges bar */}
      <TrustBadgeBar
        badges={[
          "HP Authorized Dealer",
          "Konica Minolta Certified",
          "BBB A+ Rated",
          "Family Owned & Operated",
        ]}
      />

      {/* 5. Location pills strip */}
      <LocationStrip />

      {/* Solution cards  -  Office Technology, Managed Services, IT */}
      <SolutionCards />

      {/* 6. How it works */}
      <StepBlock
        label="How it works"
        heading="Getting started is easy"
        steps={[
          {
            number: "01",
            title: "Get a free quote",
            description:
              "Tell us about your office  -  size, print volume, and budget. We'll recommend the perfect machine.",
          },
          {
            number: "02",
            title: "We deliver & install",
            description:
              "Our technicians deliver your copier, set it up, and train your team  -  all at no extra charge.",
          },
          {
            number: "03",
            title: "We handle everything",
            description:
              "Free toner delivery, same-day service calls, and proactive maintenance. You just print.",
          },
        ]}
      />

      {/* 7. Copiers & Printers */}
      <section className="px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            Our equipment
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            Copiers &amp; printers
          </h2>
          <p className="text-[12px] text-[#666] leading-[1.65] mb-6">
            Industry-leading HP and Konica Minolta machines  -  precisely matched
            to your office&apos;s size and print volume. Sales, lease, and rental
            available.
          </p>

          <BrandBlock
            pill="Konica Minolta"
            pillColor="black"
            title="bizhub multifunction copiers"
            features={[
              "Color & B&W MFP models",
              "25–65 ppm speeds",
              "Intuitive touchscreen",
              "Scan to cloud, email, USB",
              "Mobile & Wi-Fi printing",
              "Enterprise security built in",
            ]}
            ctaLabel="Get a Konica quote ↗"
            ctaHref="/contact"
          />

          <BrandBlock
            pill="HP"
            pillColor="blue"
            title="LaserJet & PageWide printers"
            features={[
              "LaserJet Pro & Enterprise",
              "PageWide high-speed output",
              "Auto duplex printing",
              "ePrint & AirPrint ready",
              "Low cost of ownership",
              "Single & multifunction",
            ]}
            ctaLabel="Get an HP quote ↗"
            ctaHref="/contact"
          />
        </div>
      </section>

      {/* Vintage milkman strip */}
      <div className="bg-steel-pale border-t-2 border-b-2 border-brand-black px-5 py-4 flex items-center gap-4">
        <div className="relative w-20 h-20 border-[1.5px] border-brand-black shrink-0 overflow-hidden">
          <Image
            src="/images/milkman-float.jpg"
            alt="Old-school milkman"
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div>
          <h4 className="font-heading text-sm text-brand-black mb-1">
            Delivering since day one
          </h4>
          <p className="text-[11px] text-brand-mid leading-[1.55]">
            Like the milkman of old - reliable, on time, and right to your door.
            Family-owned and operated out of Loomis, CA, serving Northern California businesses every day.
          </p>
        </div>
      </div>

      {/* 8. Trust credentials */}
      <section className="px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            Why Milk Man
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-5">
            Trusted by Northern California businesses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { title: "HP Authorized Dealer", sub: "Genuine HP parts & supplies" },
              { title: "Konica Minolta Certified", sub: "Factory-trained technicians" },
              { title: "BBB A+ Rated", sub: "Accredited business" },
              { title: "Family Owned", sub: "Loomis, CA - Placer County" },
              { title: "Same-Day Service", sub: "Local team, fast response" },
            ].map((badge) => (
              <div key={badge.title} className="border-[1.5px] border-brand-black p-4 text-center">
                <div className="font-heading text-[13px] text-brand-black mb-1">{badge.title}</div>
                <div className="text-[10px] text-brand-mid leading-[1.4]">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet section */}
      <section className="bg-steel-bg px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            Our fleet
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-2">
            We come to you
          </h2>
          <p className="text-[12px] text-[#666] leading-[1.65] mb-4">
            Our certified NorCal technicians deliver, install, and service your
            equipment  -  right at your office door. No call centers, no waiting.
          </p>
          <div className="relative h-[240px] md:h-[380px] border-[1.5px] border-brand-black overflow-hidden">
            <Image
              src="/images/team-fleet.jpg"
              alt="Milk Man Toner Company delivery fleet covering Northern California"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Your complete technology partner */}
      <TechPartner />

      {/* 9. NorCal location cards */}
      <section className="bg-brand-black px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel-light uppercase mb-1.5">
            Service area
          </div>
          <h2 className="font-heading text-[22px] text-white mb-2">
            Proudly serving Northern California
          </h2>
          <p className="text-[12px] text-steel-light leading-[1.65] mb-4">
            From the Redwoods to Silicon Valley. Wherever your business is, we
            deliver.
          </p>
          <div className="grid grid-cols-2 gap-[3px]">
            <LocationCard
              name="Sacramento"
              subtitle="Capital region · our home base"
              image="/images/sac-tower-bridge.jpg"
              href="/locations/sacramento"
            />
            <LocationCard
              name="San Francisco"
              subtitle="Bay Area & peninsula"
              image="/images/sf-skyline-night.jpg"
              href="/locations/bay-area"
            />
            <LocationCard
              name="Tahoe / Reno"
              subtitle="Sierra Nevada corridor"
              image="/images/tahoe-rocks.jpg"
              href="/locations/reno-tahoe"
            />
            <LocationCard
              name="Silicon Valley"
              subtitle="Tech corridor"
              image="/images/silicon-valley.jpg"
              href="/locations/silicon-valley"
            />
          </div>
        </div>
      </section>

      {/* 10. Why Milk Man */}
      <section className="px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            Why Milk Man
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-4">
            What sets us apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              {
                title: "Free toner delivery",
                desc: "Supplies delivered to your door  -  no extra charge, ever.",
              },
              {
                title: "Same-day service",
                desc: "Local NorCal techs on call. No waiting days or weeks.",
              },
              {
                title: "Flexible leasing",
                desc: "Month-to-month or long-term  -  you pick the terms that work.",
              },
              {
                title: "Family-run & local",
                desc: "NorCal owned and operated. We're your neighbors, not a call center.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-steel-pale p-4"
              >
                <h4 className="text-[12px] font-medium text-brand-black mb-1 border-l-2 border-steel pl-2">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#777] leading-[1.55] pl-2.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. About */}
      <section className="bg-steel-bg px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            Our story
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-4">
            Northern California, through and through
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="relative h-[220px] md:h-[320px] border-[1.5px] border-brand-black overflow-hidden">
              <Image
                src="/images/family-van.jpg"
                alt="The Milk Man Toner Company family in Loomis, California"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <div>
              <h3 className="font-heading text-base text-brand-black mb-2">
                Family-owned. NorCal raised.
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.65] mb-2.5">
                Milk Man Toner Company has been delivering office technology
                across Northern California with over 100 years of combined team experience. We stand behind
                every machine we sell, every toner cartridge we deliver, and
                every service call we make.
              </p>
              <Link
                href="/about"
                className="text-[11px] text-brand-mid tracking-[0.04em] border-b border-steel hover:text-brand-black transition-colors"
              >
                Read our story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Blog preview */}
      <section className="px-5 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            From the blog
          </div>
          <h2 className="font-heading text-[22px] text-brand-black mb-5">
            Insights &amp; tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ accordion */}
      <FAQAccordion
        label="FAQ"
        heading="Frequently asked questions"
        faqs={homepageFaqs}
      />

      {/* 15. CTA strip */}
      <CTAStrip
        heading="Ready to upgrade your office?"
        description={`Free quote · free toner delivery · no pressure. Local NorCal experts standing by.`}
        primaryCTA={{ label: "Request a free quote", href: "/contact" }}
        secondaryCTA={{ label: "Call us today", href: "tel:+19162539804" }}
        showPhone
      />
    </>
  );
}
