import React from "react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { businessInfo } from "@/data/config";
import { Coffee, Heart, Users, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Us — BarakoBrews Mobile Coffee Catering",
  description:
    "Learn about BarakoBrews, our passion for specialty coffee catering, Filipino coffee heritage inspiration, and hospitality vision.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Our Brand & Mission
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            {businessInfo.storyTitle}
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            Bringing the warmth of specialty coffee shops and Filipino hospitality directly to life's special celebrations.
          </p>
        </div>
      </section>

      {/* Main Story & Large Placeholder Image */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              Coffee as a Catalyst for Connection
            </h2>
            <p className="text-base text-text-muted leading-relaxed">
              At BarakoBrews, we believe that some of the warmest conversations and happiest memories begin around a cup of coffee. Our mobile coffee catering service was built to bring people together at weddings, private parties, and corporate events.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Drawing subtle inspiration from the bold heritage of Kapeng Barako and Filipino coffee culture, we blend modern specialty espresso techniques with genuine hospitality. We treat every event not just as a catering job, but as an opportunity to host your guests with care.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-beige">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso text-caramel-light">
                  <Coffee className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">Artisan Quality</h4>
                  <p className="text-xs text-text-muted">Freshly extracted espresso & rich specialty milks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso text-caramel-light">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">Warm Hospitality</h4>
                  <p className="text-xs text-text-muted">Friendly, engaging barista service from start to finish.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso text-caramel-light">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">Community & Gathering</h4>
                  <p className="text-xs text-text-muted">Creating a focal gathering point for your event guests.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-espresso text-caramel-light">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-espresso">Stylish Presentation</h4>
                  <p className="text-xs text-text-muted">A sleek mobile bar cart designed to complement your venue aesthetic.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PlaceholderImage
              label="BARAKOBREWS ABOUT & BRAND STORY IMAGE"
              subtext="BarakoBrews mobile bar team serving freshly extracted coffee lattes."
              aspectRatio="4/3"
              category="BRAND & HOSPITALITY"
              dimensions="1200 x 900"
              icon="coffee"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
