import React from "react";
import SectionHeading from "@/components/SectionHeading";
import MenuCategory from "@/components/MenuCategory";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata = {
  title: "Coffee & Beverage Menu — BarakoBrews",
  description:
    "Explore our complete drink menu featuring espresso classics, Kapeng Barako signature lattes, non-coffee lattes, and iced coffee specialties.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Specialty Beverages
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            BREWED FOR EVERYONE
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            From bold Kapeng Barako espresso shots to velvety Spanish lattes, ceremonial matcha, and artisanal cocoa.
          </p>
        </div>
      </section>

      {/* Main Menu Grid & Filter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <MenuCategory />
      </section>

      {/* Specialty Craft Spotlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 sm:p-12 text-cream shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full border border-caramel/30">
                Specialty Ingredients
              </span>
              <h2 className="font-serif text-3xl font-bold">
                Quality In Every Cup
              </h2>
              <p className="text-sm text-cream/80 leading-relaxed">
                We source premium roasted Kapeng Barako coffee beans alongside specialty arabica blends, raw brown sugars, organic oat milk, and ceremonial Japanese matcha.
              </p>
              <ul className="space-y-2 text-xs text-cream/90 pt-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                  <span>Freshly ground per order for optimal aroma & crema</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                  <span>Dairy & non-dairy oat milk options available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-caramel" />
                  <span>Customizable sweetness levels for iced lattes</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <PlaceholderImage
                label="BARAKOBREWS SPECIALTY INGREDIENTS & COFFEE CRAFT"
                subtext="Roasted coffee beans, fresh milk, and handcrafted syrups."
                aspectRatio="16/9"
                category="COFFEE CRAFT"
                dimensions="1200 x 675"
                icon="coffee"
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
