import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_EMAIL,
  AUTHOR_PHONES,
  HEADQUARTERS_ADDRESS,
  HEADQUARTERS_GEO,
} from "@/constants/seo";
import type { JsonLd } from "@/types/seo";
import type { Property } from "@/lib/properties-constant";

export function structuredData(
  type: JsonLd["@type"],
  data: Record<string, unknown>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

export function realEstateAgentJsonLd(): JsonLd {
  return structuredData(["RealEstateAgent", "Organization"], {
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [
      "Avenue Constructions Ltd",
      "Avenue Constructions Ltd.",
      "Avenue Constructions Limited",
      "Avenue Constructions",
      "Avenue Construction Ltd",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/images/site_logo.png`,
    image: `${SITE_URL}/images/projects/avenue-ahsan-palace/project_image_1.jpeg`,
    description: SITE_DESCRIPTION,
    email: AUTHOR_EMAIL,
    telephone: AUTHOR_PHONES[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: HEADQUARTERS_ADDRESS.streetAddress,
      addressLocality: HEADQUARTERS_ADDRESS.addressLocality,
      addressRegion: HEADQUARTERS_ADDRESS.addressRegion,
      postalCode: HEADQUARTERS_ADDRESS.postalCode,
      addressCountry: HEADQUARTERS_ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HEADQUARTERS_GEO.latitude,
      longitude: HEADQUARTERS_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      "https://facebook.com",
      "https://linkedin.com",
      "https://instagram.com",
    ],
    priceRange: "$$$$",
    currenciesAccepted: "BDT",
    paymentAccepted: "Bank Transfer, Cheque",
    areaServed: [
      "Bangladesh",
      "Dhaka",
      "Gulshan",
      "Banani",
      "Baridhara",
      "Bashundhara R/A",
      "Aftabnagar",
      "Purana Paltan",
    ],
  });
}

export function websiteJsonLd(): JsonLd {
  return structuredData("WebSite", {
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  });
}

export function realEstateListingJsonLd(
  property: Property,
  canonicalUrl: string,
): JsonLd {
  return structuredData("RealEstateListing", {
    "@id": canonicalUrl,
    name: `${property.name} by ${SITE_NAME}`,
    description: property.description,
    url: canonicalUrl,
    datePosted: "2026-01-01",
    mainEntity: {
      "@type": "ApartmentComplex",
      name: property.name,
      description: property.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: property.region,
        addressLocality: property.location,
        addressCountry: "BD",
      },
      numberOfAccommodationUnits: property.statusTag === "Completed" ? 8 : 10,
      amenityFeature: property.amenities.map((amenity) => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
        value: true,
      })),
    },
  });
}

export function breadcrumbListJsonLd(
  items: Array<{ name: string; url: string }>,
): JsonLd {
  return structuredData("BreadcrumbList", {
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function serviceJsonLd(): JsonLd {
  return structuredData("Service", {
    name: "Architectural & Real Estate Development Services by Avenue Constructions Ltd",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "Dhaka, Bangladesh",
    serviceType:
      "Real Estate Development, Architectural Drafting, Joint Ventures, Asset Advisory",
    description:
      "Avenue Constructions Ltd provides full-lifecycle luxury residential development, architectural drafting, joint venture land development, and real estate asset management in Dhaka, Bangladesh.",
  });
}
