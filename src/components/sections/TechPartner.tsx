import Link from "next/link";
import { company } from "@/data/company";

export function TechPartner() {
  return (
    <section className="bg-brand-black px-5 py-10 md:py-14 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-[9px] tracking-[0.16em] text-steel-light uppercase mb-2">
          More than a vendor
        </div>
        <h2 className="font-heading text-[24px] md:text-[30px] text-white mb-3">
          Your complete technology partner
        </h2>
        <p className="text-[12px] text-steel-light leading-[1.65] mb-6 max-w-lg mx-auto">
          From copier delivery to IT support, Milk Man Toner Company is the
          single point of contact for all your office technology needs across
          Northern California.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="bg-white text-brand-black text-[11px] px-5 py-2.5 font-medium tracking-[0.04em] hover:bg-steel-pale transition-colors"
          >
            Get a free consultation
          </Link>
          <a
            href={company.phoneHref}
            className="border-[1.5px] border-white text-white text-[11px] px-5 py-2.5 tracking-[0.04em] hover:bg-white hover:text-brand-black transition-colors"
          >
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
