import Link from "next/link";
import { company } from "@/data/company";
import { utilityNav } from "@/data/navigation";

export function UtilityBar() {
  return (
    <div className="bg-brand-black flex items-center justify-between px-5 py-2">
      <div className="flex gap-5">
        {utilityNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[10px] uppercase tracking-[0.07em] text-[#888] hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <a
        href={company.phoneHref}
        className="text-[10px] uppercase tracking-[0.07em] text-[#888] hover:text-white transition-colors"
      >
        {company.phone}
      </a>
    </div>
  );
}
