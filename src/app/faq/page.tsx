import React from "react";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
  title: "BarakoBrews FAQ | Coffee Catering Questions",
  description:
    "Find answers to common questions regarding BarakoBrews mobile coffee catering services, travel, power requirements, guest limits, and custom packages.",
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            HELP & GUIDANCE
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Frequently asked questions.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Everything you need to know about booking BarakoBrews for your wedding, corporate event, or private gathering.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Component */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      {/* Still Have A Question? Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 sm:p-10 text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-caramel-light text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="h-4 w-4 text-caramel" />
              <span>DIRECT SUPPORT</span>
            </div>
            <h3 className="font-sans text-2xl font-bold">
              Still have a question?
            </h3>
            <p className="text-xs text-cream/70 max-w-md font-normal">
              Have a specific venue constraint or custom request? Our event coordination team is here to assist.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-caramel-dark px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-all"
          >
            <span>Talk to BarakoBrews →</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
