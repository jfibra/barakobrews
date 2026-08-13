export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "pricing" | "menu" | "setup" | "venue" | "event-day";
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "booking", label: "Booking" },
  { id: "pricing", label: "Pricing" },
  { id: "menu", label: "Menu" },
  { id: "setup", label: "Setup" },
  { id: "venue", label: "Venue" },
  { id: "event-day", label: "Event Day" },
];

export const faqData: FAQItem[] = [
  {
    id: "travel-distance",
    question: "How far do you travel?",
    answer:
      "We serve events within Metro regions and surrounding provinces. Travel fees may apply depending on the venue location and distance. Please share your event location when requesting a quote for exact coverage details.",
    category: "venue",
  },
  {
    id: "guest-count",
    question: "How many guests can you serve?",
    answer:
      "Our packages range from intimate gatherings of 30-50 guests up to large scale events with 300+ attendees. For large crowds, we deploy multi-barista stations to keep queue waiting times minimal.",
    category: "event-day",
  },
  {
    id: "service-duration",
    question: "How long is the coffee service?",
    answer:
      "Standard service packages range from 2 to 5 hours of continuous brewing. Additional hours can easily be added to any package upon request.",
    category: "event-day",
  },
  {
    id: "cart-equipment",
    question: "Do you provide the coffee cart and equipment?",
    answer:
      "Yes! BarakoBrews brings the complete setup — including our custom mobile bar cart, commercial espresso machine, grinders, water filtration system, paper cups, milk jugs, and setup styling accessories.",
    category: "setup",
  },
  {
    id: "barista-staff",
    question: "Do you provide professional baristas?",
    answer:
      "Absolutely. Every booking includes trained, friendly, and professionally dressed baristas who manage setup, continuous beverage crafting, customer interaction, and post-event cleanup.",
    category: "event-day",
  },
  {
    id: "menu-customize",
    question: "Can we customize the menu?",
    answer:
      "Yes! You can choose your preferred espresso classics, custom milk alternatives (oat milk, almond milk), and select signature drinks. We can also rename signature drinks on the menu board to match your wedding or brand theme.",
    category: "menu",
  },
  {
    id: "non-coffee-options",
    question: "Do you offer non-coffee drinks?",
    answer:
      "Yes! We offer ceremonial Matcha lattes, rich Belgian chocolate, spiced Chai lattes, and herbal teas so every guest has a delicious option.",
    category: "menu",
  },
  {
    id: "cost-pricing",
    question: "How much does coffee catering cost?",
    answer:
      "Pricing depends on guest count, service duration, location, and drink menu selections. Our packages start at affordable tier rates tailored to your event size. Request a custom quote to get a detailed breakdown.",
    category: "pricing",
  },
  {
    id: "advance-booking",
    question: "How far in advance should we book?",
    answer:
      "We recommend booking 2 to 4 weeks in advance for weekend events and weddings to secure your preferred date. However, we also accommodate last-minute bookings subject to calendar availability.",
    category: "booking",
  },
  {
    id: "reservation-deposit",
    question: "Do you require a reservation deposit?",
    answer:
      "Yes, a standard reservation deposit is required upon booking confirmation to secure your date, with the remaining balance due prior to or on the event day.",
    category: "pricing",
  },
  {
    id: "outdoor-events",
    question: "Can you cater outdoor events?",
    answer:
      "Yes! Our mobile bar cart is designed for both indoor ballrooms and sheltered outdoor setups (garden weddings, lawn parties, patio celebrations). A level surface and overhead shade/cover are required.",
    category: "venue",
  },
  {
    id: "power-requirements",
    question: "What power supply do you require?",
    answer:
      "Our standard espresso equipment requires a standard dedicated electrical outlet (220V/15A-20A circuit). If your outdoor venue lacks power, please notify us during quote request so we can arrange portable generator power options.",
    category: "setup",
  },
  {
    id: "custom-packages",
    question: "Can I request a custom package?",
    answer:
      "Yes! If your event does not fit our standard package tiers, we will happily design a bespoke package for your exact guest count, time frame, and branding requirements.",
    category: "booking",
  },
];
