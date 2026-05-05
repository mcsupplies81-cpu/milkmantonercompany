import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="bg-white border-b-2 border-brand-black">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[52%_48%] min-h-[600px]">

        {/* Left column */}
        <div className="py-12 md:py-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.14em] text-brand-mid uppercase">Northern California</span>
            <span className="text-brand-mid text-[10px]">•</span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-brand-mid uppercase">Family Owned &amp; Operated</span>
          </div>
          <div className="w-12 h-[2px] bg-brand-mid mb-6" />
          <h1>
            <span className="block font-heading text-[42px] md:text-[54px] leading-[1.05] text-brand-black">Your local partner for</span>
            <span className="block font-heading text-[42px] md:text-[54px] leading-[1.05] text-brand-mid italic">office technology</span>
          </h1>
          <p className="text-[13px] md:text-[15px] text-brand-mid leading-[1.7] mt-5 mb-7 max-w-[460px]">
            HP and Konica Minolta copiers, printers, toner delivery, and managed print services - serving Sacramento, the Bay Area, Silicon Valley, and Reno.
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <Link
              href="/contact"
              className="bg-brand-mid text-white text-[13px] font-medium px-7 py-3 hover:bg-brand-black transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/office-technology/copiers-printers"
              className="border-2 border-brand-black text-brand-black text-[13px] px-7 py-3 hover:bg-brand-black hover:text-white transition-colors"
            >
              See Our Machines
            </Link>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { top: "HP", bottom: "Authorized Dealer" },
              { top: "Konica Minolta", bottom: "Certified" },
              { top: "BBB A+", bottom: "Rated" },
              { top: "Family", bottom: "Owned" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-steel" />}
                <div className="text-[11px]">
                  <div className="font-bold text-brand-black">{badge.top}</div>
                  <div className="text-brand-mid">{badge.bottom}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative min-h-[560px] overflow-visible">

          {/* 5,000+ stat graphic - centered in column */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] md:w-[500px] md:h-[500px]">
              <Image
                src="/images/stat-5000.png"
                alt="5,000+ machines supported since 2013"
                fill
                className="object-contain"
                sizes="500px"
                priority
              />
            </div>
          </div>

          {/* Vintage milkman - top right */}
          <div className="absolute top-2 right-0 md:right-[-16px] w-[160px] md:w-[200px] p-2 bg-[#f5f0e8] rotate-[3deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2 z-10" />
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/vintage-milkman.jpg"
                alt="Vintage milkman delivery truck"
                fill
                className="object-cover grayscale"
                sizes="200px"
              />
            </div>
          </div>

          {/* Logo card - right middle */}
          <div className="absolute top-[38%] right-0 md:right-[-16px] w-[130px] md:w-[150px] bg-white border border-steel-pale p-3 rotate-[-2deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2 z-10" />
            <div className="relative h-28 w-full">
              <Image
                src="/images/logo.jpg"
                alt="Milk Man Toner Company logo"
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </div>

          {/* Fleet photo - bottom right */}
          <div className="absolute bottom-4 right-0 md:right-[-16px] w-[230px] md:w-[270px] p-2 pb-7 bg-[#f5f0e8] rotate-[-3deg] z-20">
            <div className="w-4 h-4 rounded-full bg-brand-mid absolute top-[-7px] left-1/2 -translate-x-1/2 z-10" />
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/fleet.jpg"
                alt="Milk Man Toner Company team and fleet"
                fill
                className="object-cover"
                sizes="270px"
              />
            </div>
            <p className="font-heading italic text-[12px] text-brand-mid text-center mt-1">Thank you! - Our Customers</p>
          </div>

        </div>
      </div>
    </div>
  );
}
