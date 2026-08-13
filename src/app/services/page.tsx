import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { servicesData } from "@/data/services";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Coffee Catering Services | BarakoBrews",
  description:
    "Explore our mobile coffee catering services for weddings, corporate events, private parties, brand activations, conferences, and custom celebrations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-20 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-caramel/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            OUR OFFERINGS
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Coffee for every occasion.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto font-normal leading-relaxed">
            From intimate wedding receptions to multi-day corporate summits, BarakoBrews brings an extraordinary mobile café experience to your venue.
          </p>
        </div>
      </section>

      {/* 6 Service Experiences Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-beige bg-cream-dark p-6 shadow-sm transition-all duration-300 hover:border-caramel/50 hover:shadow-xl"
            >
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-beige aspect-[4/3]">
                  <img
                    src={service.src || "/images/services/wedding_catering_real.jpg"}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-espresso">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                {/* 3 Core Benefits */}
                <div className="space-y-2 pt-2 border-t border-beige">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-text-main">
                      <CheckCircle2 className="h-3.5 w-3.5 text-caramel-dark shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-beige">
                <Link
                  href={`/get-a-quote?service=${service.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-espresso py-3 text-xs font-bold uppercase tracking-widest text-cream hover:bg-caramel hover:text-espresso transition-all"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Single Visual Closing Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 sm:p-12 text-cream text-center space-y-6 shadow-2xl">
          <Sparkles className="h-8 w-8 text-caramel mx-auto" />
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            Whatever the occasion, we'll build the coffee experience around it.
          </h2>
          <p className="text-xs sm:text-sm text-cream/70 max-w-xl mx-auto font-normal">
            Need a custom cup stamp logo, bespoke latte flavor, or special event hours? Tell us about your event and we'll craft a custom proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel to-caramel-dark px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-all"
            >
              <span>Get a Quote →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
