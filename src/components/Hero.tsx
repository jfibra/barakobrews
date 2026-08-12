import React from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[url('/images/bg/hero_bg_texture.png')] bg-cover bg-center bg-no-repeat pt-32 pb-20 overflow-hidden">
      {/* Dark Vignette & Ambient Glow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/95 via-espresso/85 to-espresso-dark/95" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-caramel/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-caramel-light">
              <Sparkles className="h-4 w-4 text-caramel" />
              <span>BARAKOBREWS • MOBILE COFFEE CATERING</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-cream leading-[1.05]">
              Coffee Worth <br className="hidden sm:block" />
              <span className="italic font-serif text-caramel-light">Gathering For.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-cream/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A premium mobile coffee experience, crafted for weddings, celebrations, corporate events, and unforgettable gatherings.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/get-a-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-caramel via-[#D2925B] to-caramel-dark px-9 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl shadow-caramel/20 transition-all duration-300 hover:shadow-caramel/40 hover:scale-105"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 bg-espresso/60 px-8 py-4 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md transition-all duration-300 hover:border-caramel hover:bg-caramel/20 hover:text-caramel-light"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-caramel/20 via-caramel-dark/10 to-transparent blur-xl pointer-events-none" />

              <PlaceholderImage
                label="BARAKOBREWS MOBILE COFFEE CART AT ELEGANT EVENT"
                src="/images/hero/hero_mobile_cart.png"
                subtext="Professional barista preparing fresh espresso and poured latte art at a wedding reception."
                aspectRatio="4/3"
                category="HERO PHOTOGRAPHY"
                dimensions="1200 x 900"
                icon="coffee"
                className="shadow-2xl border-caramel/30 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
