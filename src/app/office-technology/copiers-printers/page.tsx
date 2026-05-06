import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildProductSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { konicaMachines, hpMachines } from "@/data/machines";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Copiers & Printers for Rent or Lease in Northern California",
  description:
    "Browse Konica Minolta and HP copiers, printers, and multifunction devices. Sales, lease, and rental available across Sacramento, Bay Area, and NorCal. Call (916) 253-9804.",
  path: "/office-technology/copiers-printers",
});

const categories = [
  {
    pill: "Konica Minolta",
    pillColor: "bg-brand-black",
    title: "Color Multifunction Copiers",
    subtitle: "bizhub i-Series  -  25 to 65 pages per minute",
    description:
      "The Konica Minolta bizhub i-Series is built for offices that need professional color output, fast scanning, and enterprise-level security in a single device. From the compact C250i for small offices to the high-volume C650i for large workgroups  -  every bizhub comes with intuitive touchscreen controls, mobile printing, and cloud-ready workflows.",
    features: [
      "Print, copy, scan & fax in one device",
      "25-65 ppm color output",
      "Scan to cloud, email & USB",
      "Mobile & Wi-Fi printing built in",
      "Enterprise-grade security",
      "Intuitive 10\" touchscreen panel",
    ],
    models: "bizhub C250i · C300i · C360i · C450i · C550i · C650i · C4050i · C3320i",
    image: "/images/machines/category-color-mfp.jpg",
    imageAlt: "Konica Minolta bizhub color multifunction copier",
  },
  {
    pill: "Konica Minolta",
    pillColor: "bg-brand-black",
    title: "Black & White Multifunction Copiers",
    subtitle: "bizhub B&W Series  -  fast, reliable, affordable",
    description:
      "When your office runs on documents, contracts, and forms, a dedicated black & white MFP keeps costs low and output fast. The bizhub 4020i and 5020i deliver high-speed B&W printing with rock-solid reliability  -  ideal for law firms, medical offices, and any business where uptime matters more than color.",
    features: [
      "High-speed B&W output up to 52 ppm",
      "Low cost per page",
      "Network-ready out of the box",
      "Automatic duplex printing",
      "Compact footprint for any office",
      "Fast first-print time",
    ],
    models: "bizhub 4020i · bizhub 5020i",
    image: "/images/machines/category-bw-mfp.jpg",
    imageAlt: "Konica Minolta bizhub black and white multifunction copier",
  },
  {
    pill: "HP",
    pillColor: "bg-[#0096D6]",
    title: "HP LaserJet Printers & MFPs",
    subtitle: "LaserJet Pro & Enterprise  -  legendary reliability",
    description:
      "HP LaserJet printers are the backbone of millions of offices worldwide. The Pro line delivers affordable, reliable printing for small businesses, while the Enterprise line brings fleet management, advanced security, and high-speed scanning to larger organizations. Every HP we sell comes with full Milk Man support  -  free toner delivery, same-day service, and expert installation.",
    features: [
      "LaserJet Pro for small offices",
      "LaserJet Enterprise for workgroups",
      "Auto duplex printing standard",
      "ePrint, AirPrint & Wi-Fi Direct",
      "HP Smart security built in",
      "Fleet management ready",
    ],
    models: "LaserJet Pro MFP · LaserJet Enterprise MFP",
    image: "/images/machines/category-hp-laserjet.jpg",
    imageAlt: "HP LaserJet multifunction printer for office use",
  },
  {
    pill: "HP",
    pillColor: "bg-[#0096D6]",
    title: "HP PageWide High-Speed Printers",
    subtitle: "PageWide Pro  -  fastest in class, lowest cost per page",
    description:
      "HP PageWide technology uses a stationary print bar instead of a moving printhead  -  delivering blazing speeds up to 70 pages per minute with the lowest cost per page in its class. Perfect for high-volume offices that need fast color output without the cost of traditional laser. Energy Star certified and built to run all day.",
    features: [
      "Up to 70 ppm color output",
      "Lowest cost per page in class",
      "PageWide stationary print bar",
      "Energy Star certified",
      "Dual input trays standard",
      "Professional color quality",
    ],
    models: "HP PageWide Pro series",
    image: "/images/machines/category-hp-pagewide.jpg",
    imageAlt: "HP PageWide high-speed office printer",
  },
];

export default function CopiersAndPrintersPage() {
  return (
    <>
      {/* Breadcrumb schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Office Technology", url: `${company.website}/office-technology` },
          {
            name: "Copiers & Printers",
            url: `${company.website}/office-technology/copiers-printers`,
          },
        ])}
      />

      {/* Product schema for SEO  -  still indexes individual models */}
      {[...konicaMachines, ...hpMachines].map((machine) => (
        <JsonLd key={machine.id} data={buildProductSchema(machine)} />
      ))}

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid flex items-center gap-1">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-0.5">/</span>
          <Link href="/office-technology" className="hover:text-brand-black transition-colors">
            Office Technology
          </Link>
          <span className="mx-0.5">/</span>
          <span className="text-brand-black">Copiers &amp; Printers</span>
        </div>
      </div>

      {/* Page hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Our Equipment
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Copiers &amp; printers for every office
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] mb-5 max-w-xl">
            Industry-leading HP and Konica Minolta copiers, printers, and
            multifunction devices  -  precisely matched to your office&apos;s size
            and print volume. Sales, lease, and rental available across Northern
            California.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors inline-block"
            >
              Get a free quote
            </Link>
            <a
              href={company.phoneHref}
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-[18px] py-2.5 tracking-[0.04em] hover:bg-brand-black hover:text-white transition-colors inline-block"
            >
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Equipment categories */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          className={`px-5 py-10 md:px-8 ${
            i % 2 === 1 ? "bg-steel-bg" : "bg-white"
          } border-b border-steel-pale`}
        >
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""
              }`}
            >
              {/* Content side */}
              <div>
                <span
                  className={`inline-block text-white text-[10px] font-medium px-3 py-1.5 tracking-[0.06em] mb-3 ${cat.pillColor}`}
                >
                  {cat.pill}
                </span>
                <h2 className="font-heading text-[22px] md:text-[26px] text-brand-black mb-1">
                  {cat.title}
                </h2>
                <p className="text-[11px] text-steel tracking-[0.04em] uppercase mb-3">
                  {cat.subtitle}
                </p>
                <p className="text-[12px] text-[#555] leading-[1.7] mb-5">
                  {cat.description}
                </p>
                <ul className="mb-5">
                  {cat.features.map((feat) => (
                    <li
                      key={feat}
                      className="text-[11px] text-[#555] py-1.5 pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-steel before:text-[11px] before:font-bold"
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="text-[10px] text-brand-mid mb-5 tracking-[0.02em]">
                  <span className="font-medium">Models:</span> {cat.models}
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-brand-black text-white text-[11px] px-5 py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors"
                >
                  Get a quote
                </Link>
              </div>

              {/* Image side */}
              <div className="relative h-[260px] md:h-[340px] border-[1.5px] border-brand-black overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why choose Milk Man */}
      <section className="bg-brand-black px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] tracking-[0.16em] text-steel-light uppercase mb-1.5">
            Why choose us
          </div>
          <h2 className="font-heading text-[22px] text-white mb-5">
            Why choose Milk Man for your copier?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                title: "Free delivery & installation",
                desc: "We deliver your machine, set it up, connect it to your network, and train your staff  -  all included at no extra cost.",
              },
              {
                title: "Free toner for life",
                desc: "As long as you're a Milk Man customer, toner and supplies are delivered to your door at no charge. No shipping fees, no minimums.",
              },
              {
                title: "Same-day service & repair",
                desc: "Our local NorCal technicians respond fast. Most service calls are resolved the same day  -  no waiting days or weeks.",
              },
              {
                title: "Flexible terms  -  your way",
                desc: "Buy, lease, or rent month-to-month. We'll find the plan that fits your budget and your business, with no pressure.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-[#333] p-5"
              >
                <h3 className="text-[13px] font-medium text-white mb-1.5 border-l-2 border-steel pl-2.5">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#999] leading-[1.65] pl-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTAStrip
        heading="Not sure which machine is right?"
        description="Tell us about your office and we'll recommend the perfect copier or printer  -  no obligation, no pressure."
        primaryCTA={{ label: "Get a free consultation", href: "/contact" }}
        secondaryCTA={{
          label: `Call ${company.phone}`,
          href: company.phoneHref,
        }}
        showPhone
      />
    </>
  );
}
