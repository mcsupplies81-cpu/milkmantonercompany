import Link from "next/link";

interface BrandBlockProps {
  pill: string;
  pillColor?: "black" | "blue";
  title: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export function BrandBlock({
  pill,
  pillColor = "black",
  title,
  features,
  ctaLabel,
  ctaHref,
}: BrandBlockProps) {
  return (
    <div className="mb-7 pb-7 border-b border-steel-pale last:border-b-0 last:mb-0 last:pb-0">
      <span
        className={`inline-block text-[10px] font-medium px-3 py-1.5 tracking-[0.06em] mb-3 text-white ${
          pillColor === "blue" ? "bg-[#0096D6]" : "bg-brand-black"
        }`}
      >
        {pill}
      </span>
      <div className="font-heading text-[17px] text-brand-black mb-3.5">
        {title}
      </div>
      <ul className="list-none mb-4 grid grid-cols-2 gap-0">
        {features.map((feat) => (
          <li
            key={feat}
            className="text-[11px] text-[#555] py-1.5 pl-3.5 border-b border-steel-pale/50 relative leading-[1.4] before:content-[' - '] before:absolute before:left-0 before:text-steel before:text-[10px]"
          >
            {feat}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="inline-block border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2.5 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
