export interface GalleryItem {
  id: string;
  title: string;
  category: "Weddings" | "Corporate" | "Birthdays" | "Private Events" | "Outdoor Events" | "Coffee";
  imageLabel: string;
  src?: string;
  subtext: string;
  aspectRatio: "16/9" | "4/3" | "1/1" | "3/4";
}

export const galleryCategories = [
  "All",
  "Weddings",
  "Corporate",
  "Birthdays",
  "Private Events",
  "Outdoor Events",
  "Coffee",
];

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Garden Wedding Reception Setup",
    category: "Weddings",
    imageLabel: "WEDDING COFFEE CART PHOTOGRAPHY",
    src: "/images/hero/hero_mobile_cart.png",
    subtext: "Outdoor mobile espresso station surrounded by floral arrangements.",
    aspectRatio: "4/3",
  },
  {
    id: "g2",
    title: "Corporate Summit Coffee Station",
    category: "Corporate",
    imageLabel: "CORPORATE EVENT COFFEE BAR PHOTOGRAPHY",
    src: "/images/services/corporate_event.png",
    subtext: "High-volume dual barista bar serving conference attendees.",
    aspectRatio: "16/9",
  },
  {
    id: "g3",
    title: "Artisan Latte Art Crafting",
    category: "Coffee",
    imageLabel: "BARISTA LATTE ART CRAFT PHOTOGRAPHY",
    src: "/images/about/barista_craft.png",
    subtext: "Close-up of precise microfoam poured into a warm cappuccino.",
    aspectRatio: "1/1",
  },
  {
    id: "g4",
    title: "Backyard Birthday Celebration",
    category: "Birthdays",
    imageLabel: "BIRTHDAY PARTY MOBILE BAR PHOTOGRAPHY",
    src: "/images/services/wedding_catering.png",
    subtext: "Cozy evening espresso station under warm festoon lighting.",
    aspectRatio: "3/4",
  },
  {
    id: "g5",
    title: "Kapeng Barako Bean Selection",
    category: "Coffee",
    imageLabel: "COFFEE BEANS & ROASTING PHOTOGRAPHY",
    src: "/images/about/coffee_beans_close.png",
    subtext: "Specialty dark roasted Kapeng Barako beans freshly ground on site.",
    aspectRatio: "16/9",
  },
  {
    id: "g6",
    title: "Signature Iced Drink Lineup",
    category: "Coffee",
    imageLabel: "SIGNATURE ICED DRINKS PHOTOGRAPHY",
    src: "/images/menu/signature_drinks.png",
    subtext: "Shaken iced Spanish lattes and Caramel Cloud espresso cold foams.",
    aspectRatio: "3/4",
  },
  {
    id: "g7",
    title: "Luxury Brand Activation Bar",
    category: "Corporate",
    imageLabel: "BRAND ACTIVATION COFFEE CART PHOTOGRAPHY",
    src: "/images/services/corporate_event.png",
    subtext: "Branded cart wrap and custom logo sleeves for product launch.",
    aspectRatio: "4/3",
  },
  {
    id: "g8",
    title: "Sunset Lawn Wedding Coffee Bar",
    category: "Outdoor Events",
    imageLabel: "OUTDOOR SUNSET WEDDING BAR PHOTOGRAPHY",
    src: "/images/hero/hero_mobile_cart.png",
    subtext: "Golden hour coffee service at a scenic estate wedding.",
    aspectRatio: "4/3",
  },
  {
    id: "g9",
    title: "Private Family Anniversary",
    category: "Private Events",
    imageLabel: "PRIVATE ANNIVERSARY COFFEE STATION",
    src: "/images/services/wedding_catering.png",
    subtext: "Intimate mobile café setup inside a private garden pavilion.",
    aspectRatio: "1/1",
  },
];
