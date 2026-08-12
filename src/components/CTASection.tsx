import React from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-caramel/40 bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center p-8 sm:p-12 lg:p-16 text-center text-cream shadow-2xl">
      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-dark/95 via-espresso/90 to-espresso-dark/95 backdrop-blur-[1px]" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-caramel/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-coffee-warm/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-caramel" />
          <span className="text-xs font-semibold uppercase tracking-widest text-caramel-light">
            Bring The Café To Your Event
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          Ready to elevate your event with freshly crafted coffee?
        </h2>

        <p className="text-base text-cream/80 max-w-xl mx-auto">
          From weddings and private parties to major corporate summits, our mobile coffee bar creates an unforgettable experience for your guests.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl hover:scale-105 transition-all"
          >
            <span>Request My Quote Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 bg-espresso/60 px-7 py-4 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md hover:bg-caramel/20 hover:border-caramel transition-all"
          >
            <Coffee className="h-4 w-4 text-caramel" />
            <span>Explore Coffee Menu</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
