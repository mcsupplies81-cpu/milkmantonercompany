import Link from "next/link";

const solutions = [
  {
    title: "Office Technology Solutions",
    description:
      "Copiers, printers, and multifunction devices from HP and Konica Minolta  -  matched to your office size and print volume.",
    href: "/copiers-printers",
    cta: "Explore equipment",
  },
  {
    title: "Managed Print Services",
    description:
      "We monitor your fleet, auto-ship toner, and handle every service call. You focus on your business  -  we handle the printing.",
    href: "/services/managed-print",
    cta: "Learn more",
  },
  {
    title: "Expert IT Solutions",
    description:
      "Network setup, troubleshooting, and ongoing IT support from local NorCal technicians who know your business.",
    href: "/services/it-support",
    cta: "Get IT help",
  },
];

export function SolutionCards() {
  return (
    <section className="px-5 py-8 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-[9px] tracking-[0.16em] text-steel uppercase mb-1.5">
          What we do
        </div>
        <h2 className="font-heading text-[22px] text-brand-black mb-2">
          Custom solutions for your business technology needs
        </h2>
        <p className="text-[12px] text-[#666] leading-[1.65] mb-6 max-w-xl">
          Whether you need a single printer or a full fleet with managed
          services, we tailor every solution to fit your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="border-[1.5px] border-brand-black p-5 flex flex-col"
            >
              <h3 className="font-heading text-base text-brand-black mb-2">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#666] leading-[1.65] mb-4 flex-1">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="text-[11px] text-brand-black tracking-[0.03em] font-medium hover:text-brand-mid transition-colors"
              >
                {item.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
