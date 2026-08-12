import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-caramel/20 bg-cream p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-caramel/50 hover:shadow-xl">
      <div>
        {/* Image Header */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <PlaceholderImage
            label={service.imageLabel}
            src={service.src}
            subtext={service.shortDescription}
            aspectRatio="16/9"
            category={service.category}
            dimensions="800 x 450"
            icon="coffee"
          />
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-espresso group-hover:text-caramel-dark transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-text-muted">
          {service.shortDescription}
        </p>

        {/* Key Highlights */}
        <ul className="mt-4 space-y-2 border-t border-beige pt-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xs font-medium text-text-main">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-caramel-dark" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-beige">
        <Link
          href={`/quote?service=${service.id}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caramel-dark hover:text-espresso transition-colors group/link"
        >
          <span>Book for {service.title}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
