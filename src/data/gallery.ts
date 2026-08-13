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
    title: "Elegant Wedding Reception Cart",
    category: "Weddings",
    imageLabel: "REAL WEDDING RECEPTION MOBILE COFFEE CART",
    src: "/images/gallery/wedding_evening_reception.jpg",
    subtext: "White umbrella mobile bar surrounded by lush floral arches and evening banquet setting.",
    aspectRatio: "3/4",
  },
  {
    id: "g2",
    title: "Signature Iced Matcha Lineup",
    category: "Coffee",
    imageLabel: "BARAKOBREWS OFFICIAL MATCHA SELECTION",
    src: "/images/gallery/matcha_lineup.jpg",
    subtext: "Barako Matcha, Caramel, Strawbeki, Ube, Banat, and Leche-ka Matcha iced creations.",
    aspectRatio: "16/9",
  },
  {
    id: "g3",
    title: "Signature Iced Coffee Lattes",
    category: "Coffee",
    imageLabel: "BARAKOBREWS OFFICIAL LATTE LINEUP",
    src: "/images/gallery/latte_lineup.jpg",
    subtext: "Barako Latte, Leche-ka, Ube-tado, Pisteka, and Macchiato Latte espresso drinks.",
    aspectRatio: "16/9",
  },
  {
    id: "g4",
    title: "Outdoor Lawn & Wellness Event Bar",
    category: "Outdoor Events",
    imageLabel: "OUTDOOR MORNING LAWN COFFEE CART",
    src: "/images/gallery/yoga_lawn_cart.jpg",
    subtext: "Mobile Coffee & Matcha umbrella cart setup on a sunny park lawn.",
    aspectRatio: "3/4",
  },
  {
    id: "g5",
    title: "Golf Resort & Country Club Activation",
    category: "Corporate",
    imageLabel: "GOLF RESORT MOBILE COFFEE BAR",
    src: "/images/gallery/golf_resort_cart.jpg",
    subtext: "Fresh espresso & matcha bar serving guests at a scenic outdoor golf course event.",
    aspectRatio: "3/4",
  },
  {
    id: "g6",
    title: "Night Canopy Tent Espresso Bar",
    category: "Private Events",
    imageLabel: "NIGHT CANOPY EVENT COFFEE CART",
    src: "/images/gallery/night_tent_setup.jpg",
    subtext: "Illuminated evening coffee tent with fairy lights and custom illuminated menu board.",
    aspectRatio: "4/3",
  },
  {
    id: "g7",
    title: "Customer Spotlight & Ube Matcha",
    category: "Coffee",
    imageLabel: "HAPPY CUSTOMER ENJOYING UBE MATCHA",
    src: "/images/gallery/customer_ube_matcha.jpg",
    subtext: "Guest tag feature @inday24 with our signature layered Ube Matcha drink.",
    aspectRatio: "3/4",
  },
  {
    id: "g8",
    title: "Kapeng Barako Bean Selection",
    category: "Coffee",
    imageLabel: "FRESHLY ROASTED BARAKO BEANS",
    src: "/images/about/coffee_beans_close.png",
    subtext: "Specialty dark-roasted Batangas Kapeng Barako beans ground fresh for every cup.",
    aspectRatio: "16/9",
  },
  {
    id: "g9",
    title: "Artisan Latte Pouring Craft",
    category: "Coffee",
    imageLabel: "BARISTA LATTE ART CRAFT",
    src: "/images/about/barista_craft.png",
    subtext: "Microfoam latte art handcrafted with care for every event guest.",
    aspectRatio: "1/1",
  },
];
