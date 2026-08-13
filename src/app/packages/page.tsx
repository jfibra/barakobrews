import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";
import { packagesData } from "@/data/packages";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Coffee Catering Packages & Rates | BarakoBrews",
  description:
    "Explore our mobile coffee catering package tiers (Essential Brew, Signature Brew, Grand Brew) for weddings, corporate events, and celebrations.",
};

export default function PackagesPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            CATERING TIERS
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Choose your brew.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Transparent catering tiers built for intimate gatherings, weddings, and high-volume corporate celebrations.
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

      {/* "Help Me Choose" Concierge Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 sm:p-10 text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-caramel-light text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="h-4 w-4 text-caramel" />
              <span>CUSTOM ADVICE</span>
            </div>
            <h3 className="font-sans text-2xl font-bold">
              Not sure which package fits your event?
            </h3>
            <p className="text-xs text-cream/70 max-w-lg font-normal">
              Tell us your estimated guest count, event location, and duration, and our team will recommend the ideal setup.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-caramel-dark px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-all"
          >
            <span>Help Me Choose →</span>
          </Link>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="DETAILED BREAKDOWN"
          title="Compare packages."
          subtitle="Compare guest capacities, barista counts, drink selections, and customization options side by side."
        />

        <div className="overflow-x-auto rounded-3xl border border-caramel/30 bg-espresso text-cream shadow-xl">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-caramel/20 bg-espresso-dark/90 text-caramel-light font-sans text-sm">
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
                <td className="p-4 sm:p-6 font-sans text-xs font-semibold text-caramel-light">Custom Quote / Tier 1</td>
                <td className="p-4 sm:p-6 font-sans text-xs font-semibold text-caramel-light">Custom Quote / Tier 2</td>
                <td className="p-4 sm:p-6 font-sans text-xs font-semibold text-caramel-light">Custom Quote / Tier 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
