import type { MetadataRoute } from "next";

const BASE_URL = "https://milkmancompany.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locations = [
    "sacramento",
    "bay-area",
    "silicon-valley",
    "reno-tahoe",
    "central-california",
  ];
  const blogSlugs = [
    "how-to-choose-copier-lease-sacramento",
    "hp-vs-konica-minolta-copier-comparison",
    "what-is-managed-print-services",
    "managed-print-services-sacramento",
    "toner-delivery-sacramento-free",
    "copier-lease-vs-buy-sacramento",
    "hp-printer-repair-sacramento",
    "best-copier-small-business-roseville",
    "managed-print-placer-county-guide",
    "copier-rental-vs-lease",
    "konica-minolta-dealer-sacramento",
    "office-print-cost-reduction-tips",
    "choosing-local-copier-dealer-vs-national",
  ];

  const serviceCityPages = [
    "managed-print-sacramento",
    "managed-print-roseville",
    "managed-print-placer-county",
    "toner-delivery-sacramento",
    "toner-delivery-roseville",
    "hp-printer-service-sacramento",
    "copier-leasing-sacramento",
    "copier-leasing-roseville",
  ];

  return [
    // Core
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },

    // Office Technology hub + children
    { url: `${BASE_URL}/office-technology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/office-technology/copiers-printers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/office-technology/production-print`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/office-technology/wide-format`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/office-technology/print-software`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Managed Services hub + children
    { url: `${BASE_URL}/managed-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/managed-services/managed-print`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/managed-services/managed-it`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/managed-services/help-desk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // IT Solutions hub + children
    { url: `${BASE_URL}/it-solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/it-solutions/network-solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/it-solutions/cybersecurity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/it-solutions/cloud-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/it-solutions/business-continuity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Legacy service pages (kept for continuity)
    { url: `${BASE_URL}/services/copier-rental`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/copier-lease`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/managed-print`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/toner-delivery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/printer-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/it-support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Locations
    ...locations.map((l) => ({
      url: `${BASE_URL}/locations/${l}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // Company
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Service + city SEO pages (high priority - buyer intent)
    ...serviceCityPages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Blog
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
