import React from "react";
import { businessInfo } from "@/data/config";

export default function SEOStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    name: businessInfo.name,
    description: businessInfo.subtagline,
    url: "https://barakobrews.com",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    servesCuisine: "Specialty Coffee, Kapeng Barako, Espresso",
    priceRange: "$$",
    areaServed: {
      "@type": "AdministrativeArea",
      name: businessInfo.serviceArea,
    },
    knowsAbout: [
      "Mobile Coffee Cart Catering",
      "Wedding Coffee Bar",
      "Corporate Coffee Catering",
      "Specialty Espresso Service",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
