import React from "react";
import SectionHeading from "@/components/SectionHeading";
import MenuCategory from "@/components/MenuCategory";
import CTASection from "@/components/CTASection";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Coffee & Beverage Menu | BarakoBrews",
  description:
    "Explore our complete drink menu featuring Kapeng Barako espresso classics, signature lattes, non-coffee drinks, and iced specialties.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            SPECIALTY BEVERAGES
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Brewed for everyone.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            From bold Batangas Kapeng Barako espresso shots to velvety Spanish lattes, ceremonial matcha, and artisanal cocoa.
          </p>
        </div>
      </section>

      {/* Featured Signature Hero: Meet the Barako Latte */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 sm:p-12 text-cream shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                <Sparkles className="h-3 w-3 text-caramel" />
                FEATURED HOUSE SIGNATURE
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream">
                Meet the Barako Latte.
              </h2>
              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                Inspired by the legendary Batangas Liberica bean, our signature <strong>Barako Latte</strong> balances dark, punchy espresso notes with raw muscovado sweetness and micro-foamed cream. It's the soul of our mobile coffee bar.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-caramel-light pt-2">
                <span className="bg-caramel/10 px-3 py-1 rounded-lg border border-caramel/20">Batangas Liberica</span>
                <span className="bg-caramel/10 px-3 py-1 rounded-lg border border-caramel/20">Muscovado Syrup</span>
                <span className="bg-caramel/10 px-3 py-1 rounded-lg border border-caramel/20">Textured Oat or Fresh Milk</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-caramel/30 shadow-xl">
                <img
                  src="/images/menu/latte_lineup.jpg"
                  alt="BarakoBrews Signature Barako Latte"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu Grid & Category Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="FULL DRINK SELECTION"
          title="Explore the complete menu."
          subtitle="All beverages are extracted fresh per order at your event."
        />
        <MenuCategory />
      </section>

      {/* Official Drink Lineups Showcase */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="OFFICIAL DRINK SELECTIONS"
          title="Signature drink lineups."
          subtitle="Handcrafted at every event. Look for your favorite Barako Coffee Latte or Japanese Matcha creation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Iced Latte Lineup Card */}
          <div className="group overflow-hidden rounded-3xl border border-caramel/30 bg-espresso p-6 sm:p-8 text-cream shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                CRAFT COFFEE LATTES
              </span>
              <h3 className="font-sans text-2xl font-bold">Iced Latte Specialties</h3>
              <p className="text-xs text-cream/70 font-normal">
                Barako Latte • Leche-ka Latte • Ube-tado Latte • Pisteka Latte • Macchiato Latte
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-caramel/20">
              <img
                src="/images/menu/latte_lineup.jpg"
                alt="Official BarakoBrews Iced Latte Lineup"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Matcha Lineup Card */}
          <div className="group overflow-hidden rounded-3xl border border-caramel/30 bg-espresso p-6 sm:p-8 text-cream shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                JAPANESE CEREMONIAL MATCHA
              </span>
              <h3 className="font-sans text-2xl font-bold">Iced Matcha Specialties</h3>
              <p className="text-xs text-cream/70 font-normal">
                Barako Matcha • Caramel Matcha • Strawbeki Matcha • Ube Matcha • Banat Matcha • Leche-ka Matcha
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-caramel/20">
              <img
                src="/images/menu/matcha_lineup.jpg"
                alt="Official BarakoBrews Iced Matcha Lineup"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
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
