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
      "The BarakoBrews coffee cart was undoubtedly one of the highlights of our wedding reception. Our guests could not stop raving about the iced Spanish lattes!",
    clientName: "Happy Client",
    role: "Wedding Host",
    eventType: "Wedding Reception",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Extremely professional baristas, beautiful setup, and top-tier coffee. It gave our corporate product launch a warm and sophisticated café vibe.",
    clientName: "Happy Client",
    role: "Event Coordinator",
    eventType: "Corporate Launch",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "From the initial inquiry to the smooth setup and cleanup, BarakoBrews made our birthday gathering so special. The signature Barako Latte is a must-try!",
    clientName: "Happy Client",
    role: "Birthday Host",
    eventType: "Private Party",
    rating: 5,
  },
];
