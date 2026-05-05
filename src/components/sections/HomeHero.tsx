import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="bg-[#f0f1f3] border-b-2 border-brand-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[640px]">

        {/* ── Left column ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16">

          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">
              Northern California
            </span>
            <span className="text-brand-mid text-[10px]">•</span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">
              Family Owned &amp; Operated
            </span>
          </div>

          {/* Rule */}
          <div className="w-12 h-[2px] bg-brand-mid mb-7" />

          {/* H1 */}
          <h1 className="mb-6">
            <span className="block font-heading text-[40px] md:text-[48px] leading-[1.05] text-brand-black">
              Your local partner for
            </span>
            <span className="block font-heading text-[40px] md:text-[48px] leading-[1.05] text-brand-mid italic">
              office technology
            </span>
          </h1>

          {/* Description */}
          <p className="text-[14px] text-brand-mid leading-[1.75] mb-8 max-w-[420px]">
            HP and Konica Minolta copiers, printers, toner delivery, and managed
            print services - serving Sacramento, the Bay Area, Silicon Valley,
            and Reno.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mb-10">
            <Link
              href="/contact"
              className="bg-brand-mid text-white text-[13px] font-medium px-8 py-3.5 hover:bg-brand-black transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/office-technology/copiers-printers"
              className="border-2 border-brand-black text-brand-black text-[13px] px-8 py-3.5 hover:bg-brand-black hover:text-white transition-colors"
            >
              See Our Machines
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-0 flex-wrap">
            {[
              { top: "HP", bottom: "Authorized Dealer" },
              { top: "Konica Minolta", bottom: "Certified" },
              { top: "BBB A+", bottom: "Rated" },
              { top: "Family", bottom: "Owned" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="w-px h-8 bg-steel mx-5" />}
                <div className="text-[11px]">
                  <div className="font-bold text-brand-black">{badge.top}</div>
                  <div className="text-brand-mid">{badge.bottom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ─────────────────────────────────────── */}
        <div className="relative min-h-[580px] overflow-hidden">

          {/* 5,000+ stat graphic — centered, fills the column */}
          <div className="absolute inset-0 flex items-center justify-start pl-4">
            <div className="relative w-[420px] h-[420px] shrink-0">
              <Image
                src="/images/stat-5000.png"
                alt="5,000 plus machines supported since 2013"
                fill
                className="object-contain object-left"
                sizes="420px"
                priority
              />
            </div>
          </div>

          {/* Vintage milkman — top right */}
          <div className="absolute top-6 right-4 w-[190px] p-[6px] bg-[#f5f0e8] rotate-[3deg] z-20">
            <div className="w-[14px] h-[14px] rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/vintage-milkman.jpg"
                alt="Vintage milkman delivery truck"
                fill
                className="object-cover grayscale"
                sizes="190px"
              />
            </div>
          </div>

          {/* Logo card — right, vertically centered */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 w-[138px] bg-white border border-steel-pale p-2.5 rotate-[-2deg] z-20">
            <div className="w-[14px] h-[14px] rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative h-[124px] w-full">
              <Image
                src="/images/logo.jpg"
                alt="Milk Man Toner Company logo"
                fill
                className="object-contain"
                sizes="138px"
              />
            </div>
          </div>

          {/* Fleet photo — bottom right */}
          <div className="absolute bottom-6 right-4 w-[260px] p-[6px] pb-8 bg-[#f5f0e8] rotate-[-3deg] z-20">
            <div className="w-[14px] h-[14px] rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/fleet.jpg"
                alt="Milk Man Toner Company team and fleet"
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
            <p className="font-heading italic text-[12px] text-brand-mid text-center mt-2">
              Thank you! - Our Customers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
