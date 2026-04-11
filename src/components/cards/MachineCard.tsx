import Link from "next/link";
import type { Machine } from "@/types";

export function MachineCard({ machine }: { machine: Machine }) {
  return (
    <div className="border-[1.5px] border-brand-black bg-white flex flex-col">
      {/* Image placeholder */}
      <div className="h-[180px] bg-steel-bg flex items-center justify-center border-b border-steel-pale">
        <div className="text-center">
          <p className="text-[10px] text-brand-mid opacity-60">
            [ {machine.model} photo ]
          </p>
          <span
            className={`inline-block mt-2 text-[9px] px-2 py-0.5 text-white ${
              machine.brand === "konica-minolta"
                ? "bg-brand-black"
                : "bg-[#0096D6]"
            }`}
          >
            {machine.brand === "konica-minolta" ? "Konica Minolta" : "HP"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[9px] text-steel tracking-[0.1em] uppercase mb-1">
          {machine.category} · {machine.ppm}
        </div>
        <h3 className="font-heading text-base text-brand-black mb-1.5">
          {machine.model}
        </h3>
        <p className="text-[11px] text-[#666] leading-[1.55] mb-3">
          {machine.bestFor}
        </p>

        {/* Features */}
        <ul className="mb-4 flex-1">
          {machine.features.map((feat) => (
            <li
              key={feat}
              className="text-[11px] text-[#555] py-1 pl-3 relative before:content-[' - '] before:absolute before:left-0 before:text-steel before:text-[10px]"
            >
              {feat}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="block text-center border-[1.5px] border-brand-black text-brand-black text-[11px] px-4 py-2.5 tracking-[0.03em] hover:bg-brand-black hover:text-white transition-colors"
        >
          Get a quote
        </Link>
      </div>
    </div>
  );
}
