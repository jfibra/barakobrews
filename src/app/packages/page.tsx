import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { packagesData } from "@/data/packages";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Coffee Catering Packages — BarakoBrews",
  description:
    "View our coffee catering packages (Essential Brew, Signature Brew, Grand Brew) with guest counts, barista service, and customizable options.",
};

export default function PackagesPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Catering Tiers & Rates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            CHOOSE YOUR BREW
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            Transparent catering tiers built for intimate gatherings, weddings, and high-volume corporate events.
          </p>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="Detailed Breakdown"
          title="PACKAGE COMPARISON"
          subtitle="Compare guest capacities, barista counts, drink selections, and customization options side by side."
        />

        <div className="overflow-x-auto rounded-3xl border border-caramel/30 bg-espresso text-cream shadow-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-caramel/20 bg-espresso-dark/90 text-caramel-light font-serif text-sm">
                <th className="p-4 sm:p-6 font-bold">Feature</th>
                <th className="p-4 sm:p-6 font-bold">Essential Brew</th>
                <th className="p-4 sm:p-6 font-bold">Signature Brew (Popular)</th>
                <th className="p-4 sm:p-6 font-bold">Grand Brew</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-caramel/10 text-cream/80">
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Guest Capacity</td>
                <td className="p-4 sm:p-6">Up to 50 guests</td>
                <td className="p-4 sm:p-6 font-semibold text-caramel-light">Up to 120 guests</td>
                <td className="p-4 sm:p-6">150+ guests</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Service Duration</td>
                <td className="p-4 sm:p-6">2 Hours</td>
                <td className="p-4 sm:p-6 font-semibold text-caramel-light">3 - 4 Hours</td>
                <td className="p-4 sm:p-6">5+ Hours / Full Day</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Baristas Included</td>
                <td className="p-4 sm:p-6">1 Professional Barista</td>
                <td className="p-4 sm:p-6 font-semibold text-caramel-light">2 Professional Baristas</td>
                <td className="p-4 sm:p-6">3+ Baristas / Dual Station</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Espresso Menu</td>
                <td className="p-4 sm:p-6">Core Classics</td>
                <td className="p-4 sm:p-6 font-semibold text-caramel-light">Full Menu + Signatures</td>
                <td className="p-4 sm:p-6">Unlimited Bespoke Menu</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Custom Cup Sleeves</td>
                <td className="p-4 sm:p-6 text-cream/40">—</td>
                <td className="p-4 sm:p-6 font-semibold text-caramel-light">Optional Addon</td>
                <td className="p-4 sm:p-6">Included</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-bold text-cream">Pricing Rate</td>
                <td className="p-4 sm:p-6 font-serif text-sm font-bold text-caramel-light">Starting at ₱XX,XXX</td>
                <td className="p-4 sm:p-6 font-serif text-sm font-bold text-caramel-light">Starting at ₱XX,XXX</td>
                <td className="p-4 sm:p-6 font-serif text-sm font-bold text-caramel-light">Starting at ₱XX,XXX</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Quick Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="Package Questions"
          title="PACKAGE & PRICING FAQS"
        />
        <FAQAccordion />
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
