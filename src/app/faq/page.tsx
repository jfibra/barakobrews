import React from "react";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Frequently Asked Questions — BarakoBrews",
  description:
    "Find answers to common questions regarding BarakoBrews mobile coffee catering services, travel, power requirements, guest limits, and custom packages.",
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Help & Guidance
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            Everything you need to know about booking BarakoBrews for your wedding, corporate event, or private gathering.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Component */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
