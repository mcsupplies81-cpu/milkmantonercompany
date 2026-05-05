import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="bg-[#f0f1f3] border-b-2 border-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[56%_44%] min-h-[640px]">

        {/* Left column */}
        <div className="py-14 md:py-20 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">Northern California</span>
            <span className="text-brand-mid text-[10px]">•</span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">Family Owned &amp; Operated</span>
          </div>
          <div className="w-12 h-[2px] bg-brand-mid mb-6" />
          <h1 className="mb-5">
            <span className="block font-heading text-[38px] md:text-[50px] leading-[1.05] text-brand-black">Your local partner for</span>
            <span className="block font-heading text-[38px] md:text-[50px] leading-[1.05] text-brand-mid italic">office technology</span>
          </h1>
          <p className="text-[14px] md:text-[15px] text-brand-mid leading-[1.75] mb-8 max-w-[440px]">
            HP and Konica Minolta copiers, printers, toner delivery, and managed print services - serving Sacramento, the Bay Area, Silicon Valley, and Reno.
          </p>
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
          <div className="flex items-center gap-5 flex-wrap">
            {[
              { top: "HP", bottom: "Authorized Dealer" },
              { top: "Konica Minolta", bottom: "Certified" },
              { top: "BBB A+", bottom: "Rated" },
              { top: "Family", bottom: "Owned" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-5">
                {i > 0 && <div className="w-px h-8 bg-steel" />}
                <div className="text-[11px]">
                  <div className="font-bold text-brand-black">{badge.top}</div>
                  <div className="text-brand-mid">{badge.bottom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — overflow-visible so polaroids bleed off edge */}
        <div className="relative min-h-[640px] overflow-visible">

          {/* 5,000+ stat — centered in right column, sized to fit with polaroids */}
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] pointer-events-none select-none">
            <Image
              src="/images/stat-5000.png"
              alt="5,000 plus machines supported since 2013"
              fill
              className="object-contain"
              sizes="460px"
              priority
            />
          </div>

          {/* Vintage milkman — top right, bleeds off edge */}
          <div className="absolute top-4 right-[-24px] w-[185px] md:w-[220px] p-[7px] bg-[#f5f0e8] rotate-[3deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/vintage-milkman.jpg"
                alt="Vintage milkman delivery truck"
                fill
                className="object-cover grayscale"
                sizes="220px"
              />
            </div>
          </div>

          {/* Logo card — right edge, vertically centered */}
          <div className="absolute top-[36%] right-[-16px] w-[130px] md:w-[148px] bg-white border border-steel-pale p-2.5 rotate-[-2deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative h-[126px] w-full">
              <Image
                src="/images/logo.jpg"
                alt="Milk Man Toner Company logo"
                fill
                className="object-contain"
                sizes="148px"
              />
            </div>
          </div>

          {/* Fleet photo — bottom right, bleeds off edge */}
          <div className="absolute bottom-6 right-[-24px] w-[240px] md:w-[280px] p-[7px] pb-8 bg-[#f5f0e8] rotate-[-3deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2" />
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/fleet.jpg"
                alt="Milk Man Toner Company team and fleet"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
            <p className="font-heading italic text-[12px] text-brand-mid text-center mt-2">Thank you! - Our Customers</p>
          </div>

        </div>
      </div>
    </div>
  );
}
