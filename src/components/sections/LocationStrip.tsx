import { company } from "@/data/company";

export function LocationStrip() {
  return (
    <div className="bg-brand-black px-5 py-2.5 flex items-center gap-1.5 flex-wrap">
      <span className="text-[9px] text-[#666] tracking-[0.1em] uppercase mr-1">
        We serve
      </span>
      {company.serviceAreas.map((area) => (
        <span
          key={area}
          className="border border-[#444] text-[#aaa] text-[10px] px-2.5 py-0.5"
        >
          {area}
        </span>
      ))}
    </div>
  );
}
