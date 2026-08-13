export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageLabel: string;
  src?: string;
  category: string;
  iconName: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "weddings",
    title: "Weddings",
    shortDescription:
      "A beautiful coffee experience for weddings, receptions, and intimate celebrations.",
    fullDescription:
      "Elevate your special day with an artisan espresso bar. Our sleek mobile setup blends seamlessly into your wedding aesthetic, offering handcrafted lattes and signature drinks that keep guests warm, energized, and gathered together.",
    imageLabel: "WEDDING COFFEE CART PHOTOGRAPHY",
    src: "/images/services/wedding_catering_real.jpg",
    category: "Weddings & Receptions",
    iconName: "Heart",
    features: [
      "Custom wedding drink menu",
      "Customized cup sleeves & signage option",
      "Dedicated barista team",
      "Setup before guest arrival",
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Resort Events",
    shortDescription:
      "Professional coffee catering for meetings, golf outings, conferences, and resort activations.",
    fullDescription:
      "Impress clients, reward employees, and fuel productive gatherings with high-quality specialty coffee. We provide rapid, professional service designed to handle corporate volume with ease.",
    imageLabel: "RESORT & GOLF COURSE COFFEE CART",
    src: "/images/services/resort_golf_cart.jpg",
    category: "Corporate Catering",
    iconName: "Briefcase",
    features: [
      "Fast dual-group espresso service",
      "Invoice and corporate billing available",
      "Branded cups & menu options",
      "Punctual setup & professional attire",
    ],
  },
  {
    id: "private-parties",
    title: "Outdoor & Wellness Gatherings",
    shortDescription:
      "Bring a mobile café experience to morning retreats, birthday lawn parties, and picnics.",
    fullDescription:
      "Turn your lawn, garden, or park venue into an interactive coffee haven. Perfect for outdoor celebrations, yoga mornings, milestone birthdays, and family reunions.",
    imageLabel: "OUTDOOR LAWN MOBILE COFFEE CART",
    src: "/images/services/outdoor_yoga_cart.jpg",
    category: "Outdoor Gatherings",
    iconName: "PartyPopper",
    features: [
      "Flexible footprint for park & lawn setups",
      "Kid-friendly & non-coffee options (Matcha, Chocolate)",
      "Warm, interactive barista service",
      "Zero hassle — we supply umbrella, cart & power",
    ],
  },
  {
    id: "brand-events",
    title: "Night & Evening Celebrations",
    shortDescription:
      "Illuminated canopy tent coffee bar for evening galas, brand launches, and nighttime parties.",
    fullDescription:
      "Transform coffee into a high-engagement nighttime focal point. Warm string lights, custom illuminated menu boards, and custom recipes create unforgettable evening moments.",
    imageLabel: "NIGHT CANOPY EVENT COFFEE CART",
    src: "/images/hero/night_tent_setup.jpg",
    category: "Evening Celebrations",
    iconName: "Sparkles",
    features: [
      "Illuminated menu board & ambient lighting",
      "Bespoke signature drinks matching event theme",
      "Social-media ready visual presentation",
      "High throughput for late-night guest energizing",
    ],
  },
  {
    id: "conferences",
    title: "Conferences & Summits",
    shortDescription:
      "Keep guests energized and engaged throughout your event.",
    fullDescription:
      "Sustain attendee energy through multi-day summits, trade shows, and breakout sessions. Efficient high-capacity espresso bar setup ensures quick queue turnaround times.",
    imageLabel: "CONFERENCE COFFEE SERVICE PHOTOGRAPHY",
    src: "/images/services/resort_golf_cart.jpg",
    category: "Seminars & Summits",
    iconName: "Users",
    features: [
      "Multi-barista high volume stations",
      "All-day continuous brewing packages",
      "Comprehensive hot and iced menus",
      "Compact clean electrical setup",
    ],
  },
  {
    id: "custom-events",
    title: "Custom Events",
    shortDescription:
      "Create a coffee experience tailored specifically to your event.",
    fullDescription:
      "Have a unique theme, location, or requirement? We collaborate closely with event planners to build a tailored mobile coffee activation that fits your exact vision.",
    imageLabel: "CUSTOM COFFEE EXPERIENCE PHOTOGRAPHY",
    src: "/images/services/wedding_catering_real.jpg",
    category: "Bespoke Catering",
    iconName: "Coffee",
    features: [
      "Tailored drink recipes & ingredients",
      "Flexible service hours & bar design",
      "Off-grid power options available",
      "Dedicated account manager",
    ],
  },
];

export const whyUsData = [
  {
    id: "freshly-crafted",
    title: "Freshly Crafted",
    description: "Every drink is prepared fresh for your guests by order.",
    icon: "Coffee",
  },
  {
    id: "pro-baristas",
    title: "Professional Baristas",
    description: "Friendly and professional service from setup to cleanup.",
    icon: "UserCheck",
  },
  {
    id: "quality-coffee",
    title: "Quality Coffee",
    description: "Thoughtfully prepared coffee using quality ingredients.",
    icon: "Award",
  },
  {
    id: "stylish-setup",
    title: "Beautiful Setup",
    description: "A stylish mobile coffee bar designed to complement your event.",
    icon: "Sparkles",
  },
  {
    id: "flexible-packages",
    title: "Flexible Packages",
    description: "Options that can be adapted to different events and guest counts.",
    icon: "Sliders",
  },
  {
    id: "memorable-exp",
    title: "Memorable Experience",
    description: "A coffee service your guests can enjoy and remember.",
    icon: "Smile",
  },
];
