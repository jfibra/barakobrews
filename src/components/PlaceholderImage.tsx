import React from "react";
import { Camera, Coffee, Sparkles } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  subtext?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "3/4" | "auto";
  src?: string;
  alt?: string;
  category?: string;
  dimensions?: string;
  className?: string;
  icon?: "coffee" | "camera" | "sparkles";
}

export default function PlaceholderImage({
  label,
  subtext,
  aspectRatio = "16/9",
  src,
  alt,
  category,
  dimensions = "Asset Placeholder",
  className = "",
  icon = "coffee",
}: PlaceholderImageProps) {
  // If actual image source is provided in the future, render the real image cleanly
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-espresso-dark ${className}`}>
        {/* eslint-disable-next-next/no-img-element */}
        <img
          src={src}
          alt={alt || label}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    "3/4": "aspect-[3/4]",
    auto: "",
  };

  const IconComponent =
    icon === "sparkles" ? Sparkles : icon === "camera" ? Camera : Coffee;

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-caramel/25 bg-gradient-to-br from-[#261811] via-[#1C120C] to-[#352117] shadow-xl transition-all duration-500 hover:border-caramel/50 hover:shadow-2xl hover:shadow-caramel/10 ${aspectClasses[aspectRatio]} ${className}`}
      aria-label={`Placeholder for ${label}`}
    >
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Decorative Gradient Flares */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-caramel/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-coffee-warm/30 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Main Content Badge */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center">
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs tracking-wider uppercase">
          {category ? (
            <span className="rounded-full border border-caramel/30 bg-espresso/80 px-3 py-1 text-[10px] font-semibold tracking-widest text-caramel-light backdrop-blur-md">
              {category}
            </span>
          ) : (
            <span />
          )}
          <span className="font-mono text-[10px] text-cream/40">
            {dimensions}
          </span>
        </div>

        {/* Central Icon Ring */}
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-caramel/40 bg-espresso/90 text-caramel-light shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-caramel">
          <IconComponent className="h-7 w-7 text-caramel" />
        </div>

        {/* Main Placeholder Label */}
        <div className="rounded-lg border border-caramel/20 bg-espresso/90 px-4 py-2 text-xs font-semibold tracking-widest uppercase text-cream/90 backdrop-blur-md transition-colors duration-300 group-hover:border-caramel/40 group-hover:text-caramel-light">
          [{label}]
        </div>

        {/* Subtext description */}
        {subtext && (
          <p className="mt-2.5 max-w-[80%] text-xs font-medium text-cream/60 line-clamp-2">
            {subtext}
          </p>
        )}

        {/* Bottom Hint */}
        <span className="absolute bottom-3 text-[10px] tracking-wider text-cream/30 uppercase">
          Placeholder Asset Container
        </span>
      </div>
    </div>
  );
}
