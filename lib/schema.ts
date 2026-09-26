import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.brandName,
    alternateName: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.png`,
    image: `${siteConfig.domain}/hero.png`,
    telephone: siteConfig.phoneRaw,
    priceRange: siteConfig.priceRange,
    description:
      "Jasa saluran mampet di Bandung tanpa bongkar 24 jam. Melayani WC mampet, wastafel tersumbat, pipa saluran air buangan, got, dan sedot grease trap restoran dengan garansi resmi dan teknisi profesional.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    areaServed: siteConfig.areas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.fullName,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.ratingValue,
      reviewCount: siteConfig.rating.reviewCount,
      bestRating: siteConfig.rating.bestRating,
    },
    sameAs: [
      `https://wa.me/${siteConfig.whatsappNumber}`,
      "https://maps.google.com/?cid=1076191",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
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

export function generateArticleSchema(article: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/blog/${article.slug}`,
    },
    headline: article.title,
    description: article.description,
    image: article.image || `${siteConfig.domain}/hero.png`,
    author: {
      "@type": "Organization",
      name: article.authorName || "Tim Teknisi perbaikansaluranmampet.com",
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    inLanguage: "id-ID",
  };
}

export function generateAreaPageGraphSchema(areaSlug: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.domain}/#business`,
        name: `${siteConfig.brandName} - Area ${areaName}`,
        image: `${siteConfig.domain}/hero.png`,
        url: `${siteConfig.domain}/kota/${areaSlug}`,
        telephone: siteConfig.phoneRaw,
        priceRange: siteConfig.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.province,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.geo.latitude,
          longitude: siteConfig.address.geo.longitude,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${areaName}, Bandung`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "168",
        },
      },
      {
        "@type": "Service",
        "@id": `${siteConfig.domain}/kota/${areaSlug}#service`,
        name: `Jasa Saluran Mampet di ${areaName}, Bandung`,
        provider: {
          "@id": `${siteConfig.domain}/#business`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: `${areaName}, Bandung`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Layanan Saluran Mampet ${areaName}`,
          itemListElement: siteConfig.services.map((srv) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${srv.name} di ${areaName}`,
              description: srv.shortDesc,
            },
          })),
        },
      },
      generateBreadcrumbSchema([
        { name: "Beranda", url: "/" },
        { name: "Kota Bandung", url: "/kota/bandung" },
        { name: areaName, url: `/kota/${areaSlug}` },
      ]),
    ],
  };
}
