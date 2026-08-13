import React from "react";
import { businessInfo } from "@/data/config";

export default function SEOStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CateringService",
    name: businessInfo.name,
    description: businessInfo.subtagline,
    url: "https://barakobrews.vercel.app",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    servesCuisine: "Specialty Coffee, Modern Filipino Espresso, Kapeng Barako, Ube Lattes",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Southern California",
      },
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "Orange County",
      },
      {
        "@type": "City",
        name: "San Diego",
      },
    ],
    knowsAbout: [
      "Mobile Coffee Cart Catering",
      "Southern California Wedding Coffee Bar",
      "SoCal Corporate Coffee Catering",
      "Specialty Espresso Bar",
      "Ube & Barako Specialty Lattes",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
