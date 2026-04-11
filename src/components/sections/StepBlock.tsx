interface Step {
  number: string;
  title: string;
  description: string;
}

interface StepBlockProps {
  label?: string;
  heading?: string;
  steps: Step[];
}

export function StepBlock({ label, heading, steps }: StepBlockProps) {
  return (
    <section className="px-5 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-black">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`p-5 ${i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-brand-black" : ""}`}
            >
              <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-2">
                {step.number}
              </div>
              <h3 className="font-heading text-base text-brand-black mb-1.5">
                {step.title}
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.65]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
