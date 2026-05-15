import type { NavItem } from "@/types";

export interface NavSection {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavSection[] = [
  {
    label: "Office Technology",
    href: "/office-technology",
    children: [
      { label: "Copiers & Printers", href: "/office-technology/copiers-printers", description: "HP & Konica Minolta MFPs" },
      { label: "Production Print", href: "/office-technology/production-print", description: "High-volume print systems" },
      { label: "Wide Format Printers", href: "/office-technology/wide-format", description: "Plotters & large-format" },
      { label: "Print Software", href: "/office-technology/print-software", description: "PaperCut & fleet management" },
    ],
  },
  {
    label: "Managed Services",
    href: "/managed-services",
    children: [
      { label: "Managed Print", href: "/managed-services/managed-print", description: "Full fleet management" },
      { label: "Managed IT", href: "/managed-services/managed-it", description: "Outsourced IT & 24/7 support" },
      { label: "Help Desk", href: "/managed-services/help-desk", description: "Local tech support on call" },
    ],
  },
  {
    label: "IT Solutions",
    href: "/it-solutions",
    children: [
      { label: "Network Solutions", href: "/it-solutions/network-solutions", description: "Setup, management & monitoring" },
      { label: "Cybersecurity", href: "/it-solutions/cybersecurity", description: "Protect your business data" },
      { label: "Cloud Services", href: "/it-solutions/cloud-services", description: "Cloud print & document management" },
      { label: "Business Continuity", href: "/it-solutions/business-continuity", description: "Backup & disaster recovery" },
    ],
  },
  {
    label: "Locations",
    href: "/copier-dealer/sacramento",
    children: [
      { label: "Sacramento", href: "/copier-dealer/sacramento", description: "Capital region & greater Sacramento" },
      { label: "San Francisco / Marin", href: "/copier-dealer/san-francisco", description: "SF, Marin & North Bay" },
      { label: "Silicon Valley", href: "/copier-dealer/silicon-valley", description: "San Jose, Palo Alto & tech corridor" },
      { label: "East Bay", href: "/copier-dealer/east-bay", description: "Oakland, Berkeley & Contra Costa" },
      { label: "Reno / Northern Nevada", href: "/copier-dealer/reno", description: "Reno, Sparks & Carson City" },
      { label: "Lake Tahoe / Truckee", href: "/copier-dealer/lake-tahoe", description: "Tahoe Basin & Sierra corridor" },
      { label: "Northern California", href: "/copier-dealer/northern-california", description: "Chico, Redding & I-5 corridor" },
    ],
  },
  { label: "About", href: "/about" },
];

export const utilityNav: NavItem[] = [
  { label: "Order Supplies", href: "/contact" },
  { label: "Request Service", href: "/contact" },
  { label: "Pay Bill", href: "/contact" },
  { label: "Current Customers", href: "/contact" },
];
