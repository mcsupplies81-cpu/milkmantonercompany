import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us  -  Get a Free Quote",
  description:
    "Contact Milk Man Toner Company for a free copier or printer quote. Serving Sacramento, Bay Area, Silicon Valley, and Northern California. Call (916) 253-9804.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: company.website },
          { name: "Contact", url: `${company.website}/contact` },
        ])}
      />

      {/* Breadcrumbs */}
      <div className="px-5 py-3 bg-steel-bg border-b border-steel-pale">
        <div className="max-w-6xl mx-auto text-[11px] text-brand-mid">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-brand-black">Contact</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-steel-pale border-b-2 border-brand-black px-5 py-10 md:py-14 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-brand-black text-white text-[9px] tracking-[0.16em] px-2.5 py-1 mb-3 uppercase">
            Contact Us
          </div>
          <h1 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-brand-black mb-3 tracking-[-0.3px]">
            Get a free quote
          </h1>
          <p className="text-[12px] md:text-sm text-brand-mid leading-[1.65] max-w-xl">
            Tell us about your office and we&apos;ll recommend the right
            equipment and service plan  -  no obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-5 py-10 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Form */}
            <div>
              <h2 className="font-heading text-[22px] text-brand-black mb-5">
                Request a quote
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-heading text-[22px] text-brand-black mb-5">
                Contact information
              </h2>

              <div className="border-[1.5px] border-brand-black p-5 mb-4">
                <h3 className="font-heading text-base text-brand-black mb-3">
                  {company.name}
                </h3>
                <div className="space-y-2">
                  <div className="text-[12px] text-[#555]">
                    <span className="font-medium text-brand-black">Phone:</span>{" "}
                    <a
                      href={company.phoneHref}
                      className="text-brand-mid hover:text-brand-black transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                  <div className="text-[12px] text-[#555]">
                    <span className="font-medium text-brand-black">
                      Address:
                    </span>{" "}
                    {company.address.full}
                  </div>
                </div>
              </div>

              <div className="border border-steel-pale p-5 mb-4">
                <h3 className="text-[13px] font-medium text-brand-black mb-2">
                  Business hours
                </h3>
                <div className="text-[12px] text-[#555] space-y-1">
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday – Sunday: Closed</p>
                  <p className="text-brand-mid mt-2">
                    Emergency service available for managed print customers
                  </p>
                </div>
              </div>

              <div className="border border-steel-pale p-5">
                <h3 className="text-[13px] font-medium text-brand-black mb-2">
                  Service areas
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {company.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="border border-steel text-brand-mid text-[10px] px-2.5 py-0.5"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-4 bg-steel-bg border-[1.5px] border-brand-black h-[200px] flex items-center justify-center">
                <p className="text-[10px] text-brand-mid opacity-60 text-center">
                  [ Google Maps embed  -  3444 Swetzer Rd Suite D, Loomis CA 95650
                  ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
