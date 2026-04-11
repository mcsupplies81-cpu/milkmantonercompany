import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

const footerCols = [
  {
    title: "Office Technology",
    links: [
      { label: "Copiers & Printers", href: "/office-technology/copiers-printers" },
      { label: "Production Print", href: "/office-technology/production-print" },
      { label: "Wide Format", href: "/office-technology/wide-format" },
      { label: "Print Software", href: "/office-technology/print-software" },
    ],
  },
  {
    title: "Managed Services",
    links: [
      { label: "Managed Print", href: "/managed-services/managed-print" },
      { label: "Managed IT", href: "/managed-services/managed-it" },
      { label: "Help Desk", href: "/managed-services/help-desk" },
    ],
  },
  {
    title: "IT Solutions",
    links: [
      { label: "Network Solutions", href: "/it-solutions/network-solutions" },
      { label: "Cybersecurity", href: "/it-solutions/cybersecurity" },
      { label: "Cloud Services", href: "/it-solutions/cloud-services" },
      { label: "Business Continuity", href: "/it-solutions/business-continuity" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Locations", href: "/locations/sacramento" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-black px-5 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <Image
            src="/images/logo.jpg"
            alt="Milk Man Toner Company"
            width={90}
            height={108}
            className="h-[52px] w-auto brightness-0 invert"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[9px] tracking-[0.12em] text-steel uppercase mb-2">
                {col.title}
              </h4>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-[11px] text-[#555] mb-1.5 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-[11px] text-[#555] mb-4">
          {company.address.full} · {company.phone}
        </div>

        <div className="border-t border-[#333] pt-3.5 text-[10px] text-[#444] text-center">
          &copy; {new Date().getFullYear()} {company.name} · Northern
          California&apos;s Copier &amp; Printer Dealer · milkmancompany.com
        </div>
      </div>
    </footer>
  );
}
