import { company } from "@/data/company";
import type { FAQ, Machine } from "@/types";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description:
      "Northern California's locally owned copier and printer dealer. Serving Sacramento, Bay Area, Silicon Valley, and Reno/Tahoe with HP and Konica Minolta copiers, managed print services, free toner delivery, and same-day repair.",
    telephone: "+19162539804",
    url: company.website,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8277,
      longitude: -121.1958,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      "Sacramento, CA",
      "Roseville, CA",
      "Rocklin, CA",
      "Lincoln, CA",
      "Loomis, CA",
      "Auburn, CA",
      "Penryn, CA",
      "Granite Bay, CA",
      "Folsom, CA",
      "Elk Grove, CA",
      "Rancho Cordova, CA",
      "Natomas, CA",
      "San Francisco, CA",
      "San Jose, CA",
      "Silicon Valley, CA",
      "Reno, NV",
      "Lake Tahoe, CA",
      "Northern California",
    ],
    sameAs: [],
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.website,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
    },
  };
}

export function buildFAQPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildProductSchema(machine: Machine) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: machine.model,
    description: machine.bestFor,
    brand: {
      "@type": "Brand",
      name: machine.brand === "konica-minolta" ? "Konica Minolta" : "HP",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    },
  };
}

export function buildLocationSchema(cityName: string, citySlug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${company.name} - ${cityName}`,
    description,
    telephone: "+19162539804",
    url: `${company.website}/locations/${citySlug}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8277,
      longitude: -121.1958,
    },
    areaServed: cityName,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
