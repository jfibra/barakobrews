import React from "react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Coffee, Heart, Users, Sparkles, Award } from "lucide-react";

export const metadata = {
  title: "About BarakoBrews | Coffee Worth Gathering For",
  description:
    "Learn about BarakoBrews, our passion for specialty coffee catering, Filipino coffee heritage inspiration, and hospitality vision.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Craft",
      description: "Artisan espresso extraction, micro-foamed milks, and precision brewing in every cup.",
      icon: Coffee,
    },
    {
      title: "Hospitality",
      description: "Warm, attentive barista service rooted in genuine Filipino care and welcoming spirit.",
      icon: Heart,
    },
    {
      title: "Connection",
      description: "Creating a central gathering point where event guests engage and converse naturally.",
      icon: Users,
    },
    {
      title: "Presentation",
      description: "A polished mobile bar setup, custom umbrella, and stylish aesthetics that elevate your venue.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            OUR STORY
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            More than coffee. <br />
            <span className="font-normal italic text-caramel-light">It's a reason to gather.</span>
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Bringing the warmth of specialty café culture and Filipino hospitality directly to life's special celebrations.
          </p>
        </div>
      </section>

      {/* 3 Story Chapters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chapter 1: The Idea */}
          <div className="p-8 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
                CHAPTER 01
              </span>
              <h3 className="font-sans text-2xl font-bold text-espresso">The Idea</h3>
              <p className="text-xs text-text-muted leading-relaxed font-normal">
                Why BarakoBrews exists: We noticed that standard event catering often treats coffee as an afterthought. We wanted to transform coffee into a vibrant, interactive centerpiece where guests gather, sip, and share moments.
              </p>
            </div>
            <div className="pt-4 border-t border-beige">
              <span className="text-[11px] font-semibold text-caramel-dark">A mobile café experience for your venue</span>
            </div>
          </div>

          {/* Chapter 2: The Inspiration */}
          <div className="p-8 rounded-3xl border border-caramel/30 bg-espresso text-cream space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                CHAPTER 02
              </span>
              <h3 className="font-sans text-2xl font-bold text-cream">The Inspiration</h3>
              <p className="text-xs text-cream/80 leading-relaxed font-normal">
                Inspired by the rich heritage of Batangas Kapeng Barako and authentic Filipino hospitality (pagmamalasakit). We bring artisan specialty beans, modern espresso techniques, and signature flavors like Ube and Flan to events across Southern California.
              </p>
            </div>
            <div className="pt-4 border-t border-caramel/20">
              <span className="text-[11px] font-semibold text-caramel-light">Filipino heritage + SoCal espresso culture</span>
            </div>
          </div>

          {/* Chapter 3: The Experience */}
          <div className="p-8 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
                CHAPTER 03
              </span>
              <h3 className="font-sans text-2xl font-bold text-espresso">The Experience</h3>
              <p className="text-xs text-text-muted leading-relaxed font-normal">
                From initial date reservation to full setup, service, and cleanup. Our baristas arrive fully equipped with complete mobile cart, umbrella, power, and high-capacity equipment to handle your guest volume seamlessly.
              </p>
            </div>
            <div className="pt-4 border-t border-beige">
              <span className="text-[11px] font-semibold text-caramel-dark">Complete turn-key mobile bar service</span>
            </div>
          </div>
        </div>
      </section>

      {/* "What We Believe" 4 Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="OUR PHILOSOPHY"
          title="What we believe."
          subtitle="Four core principles that guide every event we cater."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm text-center flex flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-espresso text-caramel-light shadow-md">
                  <IconComp className="h-6 w-6" />
                </div>
                <h4 className="font-sans text-lg font-bold text-espresso">{item.title}</h4>
                <p className="text-xs text-text-muted leading-relaxed font-normal">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual Barista & Cart Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-beige bg-cream p-8 sm:p-12 shadow-lg">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark">REAL EVENT PHOTOGRAPHY</span>
            <h3 className="font-sans text-3xl font-bold text-espresso">Crafted live at your venue.</h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
              Whether positioned on an outdoor wedding lawn, inside a hotel banquet hall, or at a corporate pavilion, our sleek mobile bar cart creates an instant focal point for your guests.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-beige shadow-xl">
              <img
                src="/images/services/outdoor_yoga_cart.jpg"
                alt="BarakoBrews Mobile Coffee Cart Setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Guidelines Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="BRAND IDENTITY"
          title="Official visual system & color palette."
          subtitle="Our brand design balances dark roasted espresso tones with warm caramel, cream, and handcrafted iconography."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stamp Seal & Badges */}
          <div className="lg:col-span-6 rounded-3xl border border-caramel/30 bg-espresso p-8 text-cream shadow-2xl space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                BRAND BADGES & MARKS
              </span>
              <h3 className="font-sans text-2xl font-bold">Official Seal & Logo Marks</h3>
              <p className="text-xs text-cream/70 font-normal">
                Designed for mobile bar aprons, custom cup sleeves, and event signage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 items-center pt-2">
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-cream-dark/10 border border-caramel/20">
                <img
                  src="/images/logo/logo_circular_stamp.png"
                  alt="BarakoBrews Circular Stamp Seal"
                  className="h-28 w-auto object-contain"
                />
                <span className="text-[10px] font-mono text-caramel-light mt-3 uppercase tracking-wider">
                  Circular Stamp Seal
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-espresso-dark border border-caramel/20">
                <img
                  src="/images/logo/logo_badge_dark_rect.png"
                  alt="BarakoBrews Dark Rectangular Badge"
                  className="h-16 w-auto object-contain"
                />
                <span className="text-[10px] font-mono text-caramel-light mt-3 uppercase tracking-wider">
                  Dark Container Badge
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-caramel/20 flex flex-col items-center text-center space-y-2">
              <img
                src="/images/logo/brand_tagline_banner.png"
                alt="Coffee Worth Gathering For Banner"
                className="h-6 w-auto object-contain opacity-90"
              />
              <span className="text-[10px] font-mono text-cream/50">
                Official Brand Tagline
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl border border-beige bg-cream-dark p-8 text-espresso shadow-lg space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 px-3 py-1 rounded-full border border-caramel/20">
                COLOR PALETTE
              </span>
              <h3 className="font-sans text-2xl font-bold">Curated Theme Swatches</h3>
              <p className="text-xs text-text-muted font-normal">
                Sampled directly from our brand system: Rich Espresso, Warm Coffee, Roasted Caramel, Cream Foam, and Milk.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cream border border-beige space-y-4">
              <div className="flex justify-center">
                <img
                  src="/images/logo/brand_color_swatches.png"
                  alt="BarakoBrews Brand Color Swatches"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-[10px] font-mono pt-2 border-t border-beige">
                <div>
                  <div className="h-6 w-full rounded-md bg-[#2C160A] mb-1" />
                  <span>#2C160A</span>
                </div>
                <div>
                  <div className="h-6 w-full rounded-md bg-[#754528] mb-1" />
                  <span>#754528</span>
                </div>
                <div>
                  <div className="h-6 w-full rounded-md bg-[#AF8155] mb-1" />
                  <span>#AF8155</span>
                </div>
                <div>
                  <div className="h-6 w-full rounded-md bg-[#D7C3A7] mb-1" />
                  <span>#D7C3A7</span>
                </div>
                <div>
                  <div className="h-6 w-full rounded-md bg-[#FCF6EC] mb-1 border" />
                  <span>#FCF6EC</span>
                </div>
                <div>
                  <div className="h-6 w-full rounded-md bg-[#FDFCFA] mb-1 border" />
                  <span>#FDFCFA</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-text-muted font-normal">
              <span>Primary Dark: <strong>Espresso Dark</strong></span>
              <span>Primary Accent: <strong>Golden Caramel</strong></span>
            </div>
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
