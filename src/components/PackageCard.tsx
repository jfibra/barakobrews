import React from "react";
import Link from "next/link";
import { Check, Users, Clock, User, Sparkles, ArrowRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { PackageItem } from "@/data/packages";

interface PackageCardProps {
  pkg: PackageItem;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
        pkg.isPopular
          ? "border-caramel bg-gradient-to-b from-espresso to-[#261811] text-cream shadow-2xl ring-2 ring-caramel/50"
          : "border-caramel/25 bg-cream text-espresso shadow-lg hover:border-caramel/50"
      }`}
    >
      {/* Popular Tag */}
      {pkg.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-caramel/50 bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-espresso shadow-lg">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 fill-espresso" />
            MOST POPULAR
          </span>
        </div>
      )}

      <div>
        {/* Package Title & Tagline */}
        <div className="text-center pb-6 border-b border-caramel/20">
          <h3
            className={`font-serif text-2xl font-bold tracking-tight uppercase ${
              pkg.isPopular ? "text-caramel-light" : "text-espresso"
            }`}
          >
            {pkg.name}
          </h3>
          <p
            className={`mt-1.5 text-xs ${
              pkg.isPopular ? "text-cream/70" : "text-text-muted"
            }`}
          >
            {pkg.tagline}
          </p>

          {/* Pricing Placeholder */}
          <div className="mt-4 inline-block rounded-xl border border-caramel/30 bg-caramel/10 px-4 py-2">
            <span
              className={`font-serif text-xl font-bold ${
                pkg.isPopular ? "text-caramel-light" : "text-caramel-dark"
              }`}
            >
              {pkg.pricePlaceholder}
            </span>
            <span
              className={`block text-[10px] uppercase tracking-wider ${
                pkg.isPopular ? "text-cream/50" : "text-text-muted"
              }`}
            >
              Placeholder Rate / Custom Quote
            </span>
          </div>
        </div>

        {/* Visual Setup */}
        <div className="my-6">
          <PlaceholderImage
            label={pkg.imageLabel}
            src={pkg.src}
            subtext={`${pkg.guestCapacity} • ${pkg.duration}`}
            aspectRatio="16/9"
            category="SETUP PREVIEW"
            dimensions="600 x 337"
            icon="coffee"
          />
        </div>

        {/* Core Quick Stats */}
        <div
          className={`grid grid-cols-3 gap-2 rounded-xl p-3 text-center text-xs mb-6 ${
            pkg.isPopular ? "bg-espresso-dark/80 text-cream" : "bg-cream-dark text-espresso"
          }`}
        >
          <div className="flex flex-col items-center">
            <Users className="h-4 w-4 text-caramel mb-1" />
            <span className="font-semibold text-[11px]">{pkg.guestCapacity}</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-4 w-4 text-caramel mb-1" />
            <span className="font-semibold text-[11px]">{pkg.duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <User className="h-4 w-4 text-caramel mb-1" />
            <span className="font-semibold text-[11px]">{pkg.baristaCount}</span>
          </div>
        </div>

        {/* Drinks Overview */}
        <p
          className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
            pkg.isPopular ? "text-caramel-light" : "text-caramel-dark"
          }`}
        >
          Included Features:
        </p>

        {/* Checklist */}
        <ul className="space-y-3 text-xs mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  pkg.isPopular ? "bg-caramel text-espresso" : "bg-espresso text-caramel-light"
                }`}
              >
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <span
                className={pkg.isPopular ? "text-cream/90" : "text-text-main"}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Link
        href={`/quote?package=${pkg.id}`}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
          pkg.isPopular
            ? "bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark text-espresso shadow-xl hover:scale-105"
            : "border border-caramel/40 bg-espresso text-cream hover:bg-caramel hover:text-espresso"
        }`}
      >
        <span>Request Package Quote</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
