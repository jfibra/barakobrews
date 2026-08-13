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
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-caramel-light bg-caramel/10 border border-caramel/30 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-caramel" />
              <span>BARAKOBREWS • SOUTHERN CALIFORNIA MOBILE COFFEE</span>
            </div>

            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-cream leading-[1.05]">
              Coffee Worth <br className="hidden sm:block" />
              <span className="font-sans text-caramel-light italic font-normal">Gathering For.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-cream/80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Southern California's premier mobile espresso bar catering weddings, brand activations, and private events with specialty coffee & modern Filipino brews.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/get-a-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark px-9 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl shadow-caramel/20 transition-all duration-300 hover:shadow-caramel/40 hover:scale-105"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 bg-espresso/60 px-8 py-4 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md transition-all duration-300 hover:border-caramel hover:bg-caramel/20 hover:text-caramel-light"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="pt-2 text-xs font-medium text-cream/60 tracking-wider flex items-center justify-center lg:justify-start gap-2">
              <span>Weddings</span>
              <span className="text-caramel">•</span>
              <span>Corporate Events</span>
              <span className="text-caramel">•</span>
              <span>Private Celebrations</span>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-caramel/20 via-caramel-dark/10 to-transparent blur-xl pointer-events-none" />

              <PlaceholderImage
                label="REAL ELEGANT WEDDING MOBILE COFFEE CART"
                src="/images/services/wedding_catering_real.jpg"
                subtext="BarakoBrews mobile espresso & matcha cart setup with floral arches at an evening outdoor reception."
                aspectRatio="3/4"
                category="REAL EVENT PHOTOGRAPHY"
                dimensions="1200 x 1600"
                icon="coffee"
                className="shadow-2xl border-caramel/30 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
