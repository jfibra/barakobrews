import React from "react";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-caramel/25 bg-espresso p-8 text-cream shadow-xl transition-all duration-300 hover:border-caramel hover:shadow-2xl">
      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-caramel">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-caramel text-caramel" />
          ))}
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote className="h-8 w-8 text-caramel/20 absolute -top-3 -left-3 rotate-180" />
          <p className="relative z-10 font-serif text-base italic leading-relaxed text-cream/90 pl-2">
            "{testimonial.quote}"
          </p>
        </div>
      </div>

      {/* Author details */}
      <div className="mt-6 pt-4 border-t border-caramel/20 flex items-center justify-between">
        <div>
          <h4 className="font-serif text-sm font-bold text-caramel-light">
            {testimonial.clientName}
          </h4>
          <p className="text-[11px] text-cream/60">{testimonial.role}</p>
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-caramel/80 bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
          {testimonial.eventType}
        </span>
      </div>
    </div>
  );
}
