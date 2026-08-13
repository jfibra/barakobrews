import React from "react";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "BarakoBrews Event Gallery | Mobile Coffee Catering",
  description:
    "Browse our event photography gallery featuring weddings, corporate catering setups, birthday mobile bars, and barista coffee craft moments.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            VISUAL EXPERIENCE
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Event gallery.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore past celebrations, mobile cart setups, wedding receptions, and barista craft moments.
          </p>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <GalleryGrid />
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
