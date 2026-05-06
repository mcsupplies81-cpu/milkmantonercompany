import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="bg-[#f0f1f3] border-b-2 border-brand-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

        {/* ── Left column ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-12 py-10 lg:py-16">

          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">
              Northern California
            </span>
            <span className="text-brand-mid text-[10px]">•</span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-brand-mid uppercase">
              Family Owned &amp; Operated
            </span>
          </div>

          <div className="w-12 h-[2px] bg-brand-mid mb-7" />

          <h1 className="mb-6">
            <span className="block font-heading text-[44px] md:text-[56px] leading-[1.05] text-brand-black">
              Your local partner for
            </span>
            <span className="block font-heading text-[44px] md:text-[56px] leading-[1.05] text-brand-mid italic">
              office technology
            </span>
          </h1>

          <p className="text-[14px] text-brand-mid leading-[1.75] mb-8 max-w-[420px]">
            HP and Konica Minolta copiers, printers, toner delivery, and managed
            print services - serving Sacramento, the Bay Area, Silicon Valley,
            and Reno.
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

          <div className="flex items-center flex-wrap">
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

        {/* ── Right column — single collage image ─────────────── */}
        <div className="relative h-[320px] lg:min-h-[680px]">
          <Image
            src="/images/hero-collage.png"
            alt="5,000 plus machines supported - Milk Man Toner Company team and history"
            fill
            className="object-contain object-center lg:object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

      </div>
    </section>
  );
}
