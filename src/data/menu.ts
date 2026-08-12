export interface MenuItem {
  id: string;
  name: string;
  category: "espresso" | "signature" | "non-coffee" | "iced";
  description: string;
  ingredients?: string[];
  isSignature?: boolean;
  isPopular?: boolean;
  tags?: string[];
}

export const menuCategories = [
  { id: "all", label: "Full Menu" },
  { id: "espresso", label: "Espresso Classics" },
  { id: "signature", label: "Signature Drinks" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "iced", label: "Iced Specialties" },
];

export const menuData: MenuItem[] = [
  // Espresso Classics
  {
    id: "espresso-single",
    name: "Espresso",
    category: "espresso",
    description: "Rich, concentrated shot of specialty roasted coffee with a golden crema layer.",
    tags: ["Hot", "Classic"],
  },
  {
    id: "americano",
    name: "Americano",
    category: "espresso",
    description: "Double shot espresso diluted with hot water for a smooth, bold coffee cup.",
    tags: ["Hot", "Iced Available"],
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "espresso",
    description: "Equal parts espresso, velvety steamed milk, and rich microfoam top.",
    tags: ["Hot", "Classic"],
  },
  {
    id: "cafe-latte",
    name: "Café Latte",
    category: "espresso",
    description: "Smooth espresso paired with silky steamed milk and a delicate layer of foam.",
    tags: ["Hot", "Iced Available"],
  },
  {
    id: "mocha",
    name: "Café Mocha",
    category: "espresso",
    description: "Rich espresso combined with dark cocoa, steamed milk, and light chocolate drizzle.",
    tags: ["Hot", "Iced Available"],
  },

  // Signature Drinks
  {
    id: "barako-latte",
    name: "Barako Latte",
    category: "signature",
    description: "Our hallmark signature drink using dark roasted Kapeng Barako beans, dark brown sugar, and rich creamy milk.",
    ingredients: ["Barako Espresso", "Raw Brown Sugar", "Whole Milk / Oat Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "House Favorite"],
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    category: "signature",
    description: "Sweet condensed milk shaken with bold espresso shots and chilled textured milk.",
    ingredients: ["Espresso", "Condensed Milk", "Fresh Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Customer Favorite"],
  },
  {
    id: "caramel-cloud",
    name: "Caramel Cloud",
    category: "signature",
    description: "Decadent caramel espresso topped with a light sea salt cream cold foam shroud.",
    ingredients: ["Espresso", "Caramel Syrup", "Sea Salt Cream Foam"],
    isSignature: true,
    tags: ["Signature", "Sweet & Savory"],
  },
  {
    id: "brown-sugar-espresso",
    name: "Brown Sugar Espresso",
    category: "signature",
    description: "Freshly shaken espresso with caramelized brown sugar syrup and cinnamon dust.",
    ingredients: ["Shaken Espresso", "Brown Sugar", "Cinnamon"],
    isSignature: true,
    tags: ["Signature", "Shaken"],
  },
  {
    id: "vanilla-cream-latte",
    name: "Vanilla Cream Latte",
    category: "signature",
    description: "Artisanal vanilla bean syrup infused with espresso and silky microfoam milk.",
    ingredients: ["Espresso", "Vanilla Bean Syrup", "Steamed Milk"],
    isSignature: true,
    tags: ["Signature", "Smooth"],
  },

  // Non-Coffee
  {
    id: "artisan-chocolate",
    name: "Artisan Chocolate",
    category: "non-coffee",
    description: "Premium dark cocoa melted with steamed milk, served hot or over ice.",
    tags: ["Non-Coffee", "Comforting"],
  },
  {
    id: "ceremonial-matcha",
    name: "Ceremonial Matcha Latte",
    category: "non-coffee",
    description: "Stone-ground Japanese green tea whisked smooth and layered with creamy milk.",
    tags: ["Non-Coffee", "Popular"],
  },
  {
    id: "spiced-chai",
    name: "Spiced Chai Latte",
    category: "non-coffee",
    description: "Black tea infused with cardamom, cinnamon, clove, and steamed textured milk.",
    tags: ["Non-Coffee", "Spiced"],
  },
  {
    id: "hot-chocolate",
    name: "Rich Hot Cocoa",
    category: "non-coffee",
    description: "Classic comforting hot cocoa topped with light cocoa powder.",
    tags: ["Non-Coffee", "Warm"],
  },

  // Iced Coffee
  {
    id: "iced-barako-latte",
    name: "Iced Barako Latte",
    category: "iced",
    description: "Chilled Barako espresso over ice cubes with dark brown sugar syrup and cold milk.",
    isSignature: true,
    tags: ["Iced", "Signature"],
  },
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    category: "iced",
    description: "Smooth iced double espresso layered over cold sweet milk and ice.",
    isPopular: true,
    tags: ["Iced", "Popular"],
  },
  {
    id: "iced-caramel-macchiato",
    name: "Iced Caramel Macchiato",
    category: "iced",
    description: "Chilled milk with vanilla syrup, topped with espresso shots and caramel drizzle.",
    tags: ["Iced", "Sweet"],
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    category: "iced",
    description: "Double espresso poured over crisp ice water for a clean refreshing caffeine kick.",
    tags: ["Iced", "Bold"],
  },
];
