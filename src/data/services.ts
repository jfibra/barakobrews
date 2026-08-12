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
    src: "/images/services/wedding_catering.png",
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
    title: "Corporate Events",
    shortDescription:
      "Professional coffee catering for meetings, conferences, launches, and company events.",
    fullDescription:
      "Impress clients, reward employees, and fuel productive meetings with high-quality specialty coffee. We provide rapid, professional service designed to handle corporate volume with ease.",
    imageLabel: "CORPORATE EVENT COFFEE BAR PHOTOGRAPHY",
    src: "/images/services/corporate_event.png",
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
    title: "Private Parties",
    shortDescription:
      "Bring a mobile café experience to birthdays, anniversaries, reunions, and celebrations.",
    fullDescription:
      "Turn your home or venue into a cozy, interactive coffee haven. Perfect for milestone birthdays, baby showers, housewarmings, and family reunions.",
    imageLabel: "PRIVATE PARTY MOBILE BAR PHOTOGRAPHY",
    src: "/images/hero/hero_mobile_cart.png",
    category: "Private Gatherings",
    iconName: "PartyPopper",
    features: [
      "Flexible footprint for indoor & outdoor setups",
      "Kid-friendly non-coffee options (Matcha, Chocolate)",
      "Warm, interactive barista service",
      "Zero hassle — we supply everything",
    ],
  },
  {
    id: "brand-events",
    title: "Brand Events",
    shortDescription:
      "Create an interactive coffee experience for launches, activations, and promotional events.",
    fullDescription:
      "Transform coffee into a high-engagement branding touchpoint. Custom cups, custom menu naming, and branded cart wraps create memorable social-media-ready moments for your guests.",
    imageLabel: "BRAND ACTIVATION COFFEE CART PHOTOGRAPHY",
    src: "/images/services/corporate_event.png",
    category: "Brand Activations",
    iconName: "Sparkles",
    features: [
      "Custom logo printed on cups & sleeves",
      "Bespoke signature drinks matching brand colors",
      "Social-media ready visual presentation",
      "High throughput for large foot traffic",
    ],
  },
  {
    id: "conferences",
    title: "Conferences",
    shortDescription:
      "Keep guests energized and engaged throughout your event.",
    fullDescription:
      "Sustain attendee energy through multi-day summits, trade shows, and breakout sessions. Efficient high-capacity espresso bar setup ensures quick queue turnaround times.",
    imageLabel: "CONFERENCE COFFEE SERVICE PHOTOGRAPHY",
    src: "/images/services/corporate_event.png",
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
    src: "/images/services/wedding_catering.png",
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
