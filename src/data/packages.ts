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
    name: "ESSENTIAL BREW",
    tagline: "For intimate gatherings and smaller celebrations.",
    pricePlaceholder: "Starting at ₱XX,XXX",
    guestCapacity: "Up to 50 guests",
    duration: "2 Hours of Service",
    baristaCount: "1 Professional Barista",
    imageLabel: "ESSENTIAL BREW PACKAGE SETUP",
    src: "/images/services/wedding_catering.png",
    drinksOverview: "Core Espresso Classics + Milk Alternatives",
    features: [
      "Up to 50 guests capacity",
      "2 hours of continuous service",
      "1 trained professional barista",
      "Core Espresso Menu (Espresso, Americano, Latte, Cappuccino)",
      "Standard milk & oat milk option",
      "Complete mobile bar setup & cleanup",
      "Syrups: Vanilla & Caramel",
    ],
  },
  {
    id: "signature-brew",
    name: "SIGNATURE BREW",
    tagline: "For weddings, birthdays, and corporate events.",
    pricePlaceholder: "Starting at ₱XX,XXX",
    guestCapacity: "Up to 120 guests",
    duration: "3 - 4 Hours of Service",
    baristaCount: "2 Professional Baristas",
    isPopular: true,
    imageLabel: "SIGNATURE BREW PACKAGE SETUP",
    src: "/images/hero/hero_mobile_cart.png",
    drinksOverview: "Full Espresso Menu + Barako & Signature Specialties + Non-Coffee",
    features: [
      "Up to 120 guests capacity",
      "3 to 4 hours of continuous service",
      "2 trained professional baristas",
      "Full Espresso & Iced Coffee Menu",
      "Includes Barako Latte & Spanish Latte signatures",
      "Non-Coffee Selections (Chocolate & Matcha)",
      "Customized menu board with event title",
      "Complete mobile bar setup & cleanup",
    ],
  },
  {
    id: "grand-brew",
    name: "GRAND BREW",
    tagline: "For larger events, galas, and premium experiences.",
    pricePlaceholder: "Starting at ₱XX,XXX",
    guestCapacity: "150+ guests",
    duration: "5+ Hours / Full Day",
    baristaCount: "3+ Baristas / Dual Bar Stations",
    imageLabel: "GRAND BREW PACKAGE SETUP",
    src: "/images/services/corporate_event.png",
    drinksOverview: "Unlimited Full Menu + All Signatures + Custom Branding Options",
    features: [
      "150+ guests high-throughput capacity",
      "5+ hours or full-day service",
      "Multi-barista dual group station",
      "Complete Beverage Menu (Hot & Iced)",
      "All Signature & Custom Drink offerings",
      "Custom printed cup sleeves option",
      "Dedicated event coordinator on site",
      "Off-grid power kit if required",
    ],
  },
];
