export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  pricePlaceholder: string;
  guestCapacity: string;
  duration: string;
  baristaCount: string;
  isPopular?: boolean;
  imageLabel: string;
  src?: string;
  features: string[];
  drinksOverview: string;
}

export const packagesData: PackageItem[] = [
  {
    id: "essential-brew",
    name: "Essential Brew",
    tagline: "Ideal for intimate SoCal gatherings, bridal showers, and boutique pop-ups.",
    pricePlaceholder: "Starting at $550",
    guestCapacity: "Up to 50 guests",
    duration: "2 Hours of Continuous Brewing",
    baristaCount: "1 Professional Barista",
    imageLabel: "ESSENTIAL BREW PACKAGE SETUP",
    src: "/images/services/outdoor_yoga_cart.jpg",
    drinksOverview: "Core Espresso Classics + Plant Milk Bar",
    features: [
      "Up to 50 guests capacity",
      "2 hours of continuous espresso service",
      "1 trained professional barista",
      "Core Espresso Menu (Espresso, Americano, Latte, Cappuccino)",
      "Standard milk, oat milk & almond milk options",
      "House syrups (Madagascar Vanilla & Salted Caramel)",
      "Complete mobile bar cart setup & breakdown",
    ],
  },
  {
    id: "signature-brew",
    name: "Signature Brew",
    tagline: "Our most popular tier for Southern California weddings, birthdays, and corporate events.",
    pricePlaceholder: "Starting at $950",
    guestCapacity: "Up to 120 guests",
    duration: "3 - 4 Hours of Service",
    baristaCount: "2 Professional Baristas",
    isPopular: true,
    imageLabel: "SIGNATURE BREW PACKAGE SETUP",
    src: "/images/services/wedding_catering_real.jpg",
    drinksOverview: "Full Espresso Menu + Signature Barako & Ube Lattes + Ceremonial Matcha",
    features: [
      "Up to 120 guests capacity",
      "3 to 4 hours of continuous service",
      "2 trained professional baristas",
      "Full Specialty Espresso & Iced Beverage Menu",
      "Includes Barako Latte, Spanish Latte & Ube Latte signatures",
      "Ceremonial Grade Matcha Selection (Ube Matcha, Strawberry Matcha)",
      "Customized menu stand with event host names / brand logo",
      "Complete mobile bar setup & breakdown",
    ],
  },
  {
    id: "grand-brew",
    name: "Grand Brew",
    tagline: "For high-guest weddings, estate galas, and multi-day SoCal brand activations.",
    pricePlaceholder: "Starting at $1,650",
    guestCapacity: "150+ guests",
    duration: "5+ Hours / Full Day",
    baristaCount: "3+ Baristas / Dual Espresso Stations",
    imageLabel: "GRAND BREW PACKAGE SETUP",
    src: "/images/hero/night_tent_setup.jpg",
    drinksOverview: "Unlimited Full Menu + All Signatures + Custom Branding & Evening Lighting",
    features: [
      "150+ guests high-volume capacity",
      "5+ hours or full-day service coverage",
      "Multi-barista dual group commercial espresso station",
      "Complete Beverage Menu (Hot Espresso, Iced Lattes, Cold Brew)",
      "All Signature & Custom Drink offerings included",
      "Custom branded cup sleeves & menu stand styling",
      "Illuminated canopy setup for sunset/evening receptions",
      "Dedicated lead barista & event coordinator on site",
    ],
  },
];
