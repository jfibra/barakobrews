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
  // Signature Coffee Lattes (From Official Lineup)
  {
    id: "barako-latte",
    name: "Barako Latte",
    category: "signature",
    description: "Our hallmark signature drink featuring dark-roasted Kapeng Barako beans, raw sugar, and rich creamy milk.",
    ingredients: ["Barako Espresso", "Muscovado Brown Sugar", "Creamy Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "House Special", "Iced/Hot"],
  },
  {
    id: "leche-ka-latte",
    name: "Leche-ka Latte",
    category: "signature",
    description: "Decadent caramel flan sauce swirled with rich Barako espresso and silky textured milk.",
    ingredients: ["Barako Espresso", "Leche Flan Caramel", "Chilled Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Sweet & Rich"],
  },
  {
    id: "ube-tado-latte",
    name: "Ube-tado Latte",
    category: "signature",
    description: "Vibrant house-made purple ube velvet swirl layered with double shots of dark espresso and milk.",
    ingredients: ["Double Barako Shot", "Real Ube Cream", "Fresh Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Filipino Favorite"],
  },
  {
    id: "pisteka-latte",
    name: "Pisteka Latte",
    category: "signature",
    description: "Creamy roasted pistachio white chocolate blend poured over bold espresso and crisp ice.",
    ingredients: ["Espresso", "Pistachio Butter Sauce", "Fresh Milk"],
    isSignature: true,
    tags: ["Signature", "Nutty & Creamy"],
  },
  {
    id: "macchiato-latte",
    name: "Macchiato Latte",
    category: "signature",
    description: "Vanilla bean infused chilled milk layered under dark espresso shots and golden caramel drizzle.",
    ingredients: ["Espresso", "Vanilla Bean", "Caramel Drizzle", "Milk"],
    isSignature: true,
    tags: ["Signature", "Classic Twist"],
  },

  // Signature Matcha Creations (From Official Lineup)
  {
    id: "ube-matcha",
    name: "Ube Matcha",
    category: "non-coffee",
    description: "Our iconic sweet purple ube velvet puree layered under ceremonial stone-ground Japanese matcha.",
    ingredients: ["Ube Halaya Cream", "Ceremonial Matcha", "Fresh Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Top Seller", "Non-Coffee"],
  },
  {
    id: "strawbeki-matcha",
    name: "Strawbeki Matcha",
    category: "non-coffee",
    description: "Real sweet strawberry reduction layered with chilled milk and vibrant green whisked matcha.",
    ingredients: ["Real Strawberry Compote", "Ceremonial Matcha", "Oat Milk / Whole Milk"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Fruity", "Non-Coffee"],
  },
  {
    id: "barako-matcha",
    name: "Barako Matcha",
    category: "signature",
    description: "The ultimate fusion of robust Kapeng Barako espresso and vibrant Japanese matcha over cold cream.",
    ingredients: ["Barako Espresso", "Whisked Matcha", "Cold Cream"],
    isSignature: true,
    isPopular: true,
    tags: ["Signature", "Espresso + Matcha"],
  },
  {
    id: "caramel-matcha",
    name: "Caramel Matcha",
    category: "non-coffee",
    description: "Stone-ground matcha whisked smooth with rich buttery caramel drizzle ribbon and milk.",
    ingredients: ["Ceremonial Matcha", "Butter Caramel", "Fresh Milk"],
    isSignature: true,
    tags: ["Non-Coffee", "Sweet"],
  },
  {
    id: "banat-matcha",
    name: "Banat Matcha",
    category: "non-coffee",
    description: "Tropical banana cream infusion blended with Japanese ceremonial matcha for a refreshing twist.",
    ingredients: ["Banana Cream", "Ceremonial Matcha", "Fresh Milk"],
    isSignature: true,
    tags: ["Non-Coffee", "Unique"],
  },
  {
    id: "leche-ka-matcha",
    name: "Leche-ka Matcha",
    category: "non-coffee",
    description: "Custard flan caramel sauce layered beneath creamy whisked matcha and cold textured milk.",
    ingredients: ["Flan Caramel", "Whisked Matcha", "Fresh Milk"],
    isSignature: true,
    tags: ["Non-Coffee", "Indulgent"],
  },

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
    id: "spanish-latte",
    name: "Spanish Latte",
    category: "espresso",
    description: "Sweet condensed milk shaken with bold espresso shots and chilled textured milk.",
    tags: ["Popular", "Sweet"],
  },

  // Iced Specialties
  {
    id: "iced-barako-latte",
    name: "Iced Barako Latte",
    category: "iced",
    description: "Chilled Barako espresso over ice cubes with dark brown sugar syrup and cold milk.",
    isSignature: true,
    tags: ["Iced", "Signature"],
  },
  {
    id: "iced-ube-latte",
    name: "Iced Ube-tado Latte",
    category: "iced",
    description: "Double Barako shot shaken over ice with real Ube velvet cream and milk.",
    isPopular: true,
    tags: ["Iced", "Popular"],
  },
  {
    id: "iced-strawbeki-matcha",
    name: "Iced Strawbeki Matcha",
    category: "iced",
    description: "Real strawberry compote topped with cold milk and stone-ground matcha over ice.",
    isPopular: true,
    tags: ["Iced", "Popular"],
  },
  {
    id: "iced-americano",
    name: "Iced Americano",
    category: "iced",
    description: "Double espresso poured over crisp ice water for a clean refreshing caffeine kick.",
    tags: ["Iced", "Bold"],
  },
];
