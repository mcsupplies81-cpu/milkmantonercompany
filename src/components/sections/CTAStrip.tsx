import Link from "next/link";
import { company } from "@/data/company";

interface CTAStripProps {
  heading: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  showPhone?: boolean;
}

export function CTAStrip({
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  showPhone = false,
}: CTAStripProps) {
  return (
    <div className="bg-steel-pale border-t-2 border-b-2 border-brand-black px-5 py-7 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-[22px] text-brand-black mb-1.5">
          {heading}
        </h2>
        {description && (
          <p className="text-[12px] text-brand-mid mb-4">{description}</p>
        )}
        {showPhone && (
          <a
            href={company.phoneHref}
            className="block font-heading text-2xl text-brand-black mb-4 hover:text-brand-mid transition-colors"
          >
            {company.phone}
          </a>
        )}
        <div className="flex gap-2.5 justify-center flex-wrap">
          {primaryCTA && (
            <Link
              href={primaryCTA.href}
              className="bg-brand-black text-white text-[11px] px-[18px] py-2.5 font-medium tracking-[0.04em] hover:bg-brand-accent transition-colors"
            >
              {primaryCTA.label}
            </Link>
          )}
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="border-[1.5px] border-brand-black text-brand-black text-[11px] px-[18px] py-2.5 tracking-[0.04em] hover:bg-brand-black hover:text-white transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
