export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  eventType: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote:
      "The BarakoBrews mobile coffee cart was the biggest hit at our Malibu coastal wedding reception! Our guests were lined up for iced Spanish Lattes and the Ube Lattes all evening.",
    clientName: "Jessica & Marcus T.",
    role: "Malibu Estate Wedding",
    eventType: "Wedding Reception",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Exceptionally professional baristas, a gorgeous wooden cart setup, and top-tier specialty espresso. It gave our Irvine tech product launch an upscale coffee shop feel.",
    clientName: "David Chen",
    role: "Orange County Event Producer",
    eventType: "Corporate Activation",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "From seamless coordination to the effortless setup and breakdown in Palm Springs, BarakoBrews made our 30th birthday gathering unforgettable. The signature Barako Latte is incredible!",
    clientName: "Samantha R.",
    role: "Palm Springs Celebration Host",
    eventType: "Private Party",
    rating: 5,
  },
];
