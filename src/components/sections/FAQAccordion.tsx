import type { FAQ } from "@/types";

interface FAQAccordionProps {
  label?: string;
  heading?: string;
  faqs: FAQ[];
}

export function FAQAccordion({ label, heading, faqs }: FAQAccordionProps) {
  return (
    <section className="px-5 py-8 md:px-8">
      <div className="max-w-3xl mx-auto">
        {label && (
          <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
            {label}
          </div>
        )}
        {heading && (
          <h2 className="font-heading text-[22px] text-brand-black mb-5">
            {heading}
          </h2>
        )}
        <div className="border border-brand-black divide-y divide-brand-black">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-steel-bg transition-colors">
                <span className="text-[12px] font-medium text-brand-black pr-4">
                  {faq.question}
                </span>
                <span className="text-brand-mid text-lg shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-[11px] text-[#666] leading-[1.65]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
