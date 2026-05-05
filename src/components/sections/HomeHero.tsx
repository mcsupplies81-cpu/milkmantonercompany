import Image from "next/image";
import Link from "next/link";

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 text-brand-mid fill-current">
      <path d="m12 2.4 2.8 5.6 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 8.9l6.2-.9L12 2.4Z" />
    </svg>
  );
}

export function HomeHero() {
  return (
    <div className="min-h-[580px] bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-[55%_45%]">
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
            <Link href="/contact" className="bg-brand-mid text-white text-[13px] font-medium px-7 py-3 hover:bg-brand-black transition-colors">Request a Quote</Link>
            <Link href="/office-technology/copiers-printers" className="border-2 border-brand-black text-brand-black text-[13px] px-7 py-3 hover:bg-brand-black hover:text-white transition-colors">See Our Machines</Link>
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

        <div className="relative overflow-visible min-h-[500px]">
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border-[1.5px] border-brand-black bg-white overflow-hidden">
            <Image src="/images/sac-tower-bridge.jpg" alt="Sacramento skyline" fill className="object-cover opacity-60" sizes="320px" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <div className="font-heading text-[11px] tracking-[0.2em] text-brand-mid uppercase mb-2">SINCE 2013</div>
              <div className="flex items-center gap-1 mb-3"><StarIcon /><StarIcon /><StarIcon /></div>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-8 h-8 text-brand-mid mb-2" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 3h6l1 6v12H8V9l1-6Z" /><path d="M10 9h4" /></svg>
              <div className="font-heading text-[100px] md:text-[120px] leading-none text-brand-mid font-bold">5,000+</div>
              <div className="mt-2 bg-brand-mid text-white text-[12px] font-bold tracking-[0.12em] uppercase px-8 py-2">MACHINES SUPPORTED</div>
            </div>
          </div>

          <div className="absolute top-0 right-0 md:right-[-20px] w-[160px] md:w-[200px] p-2 bg-white  rotate-[3deg]">
            <div className="relative aspect-[5/4]">
              <Image src="/images/vintage-milkman.png" alt="Vintage milkman" fill className="object-cover" sizes="200px" />
            </div>
            <div className="w-4 h-4 rounded-full bg-brand-mid  absolute top-[-6px] left-1/2 -translate-x-1/2 z-10" />
          </div>

          <div className="absolute top-[30%] right-[-10px] md:right-[-30px] w-[120px] md:w-[140px] bg-[#dce8f5] p-3  rotate-[-2deg]">
            <div className="w-4 h-4 rounded-full bg-brand-mid  absolute top-[-6px] left-1/2 -translate-x-1/2 z-10" />
            <div className="relative w-20 h-20 mx-auto">
              <Image src="/images/logo-silhouette.png" alt="Milk Man logo" fill className="object-contain" sizes="80px" />
            </div>
            <p className="text-[8px] tracking-widest text-brand-black text-center mt-2">MILK MAN TONER COMPANY</p>
          </div>

          <div className="absolute bottom-0 right-[-10px] md:right-[-20px] w-[220px] md:w-[260px] p-2 pb-6 bg-white  rotate-[-3deg]">
            <div className="w-4 h-4 rounded-full bg-brand-mid  absolute top-[-6px] left-1/2 -translate-x-1/2 z-10" />
            <div className="relative aspect-[13/8]">
              <Image src="/images/team-fleet.jpg" alt="Milk Man team" fill className="object-cover" sizes="260px" />
            </div>
            <p className="font-heading italic text-[12px] text-brand-mid text-center mt-1">Thank you! - Our Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
