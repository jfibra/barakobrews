import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import { servicesData } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Coffee Catering Services — BarakoBrews",
  description:
    "Explore our mobile coffee catering services for weddings, corporate events, private parties, brand activations, and custom celebrations.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Our Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            COFFEE FOR EVERY OCCASION
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            From intimate wedding ceremonies to high-volume multi-day corporate conferences, BarakoBrews delivers an extraordinary mobile café experience.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Deep Dive Breakdown */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Specialized Catering"
          title="TAILORED TO YOUR EVENT VISION"
          subtitle="Learn how we adapt our setup, menu, and service style to match your specific celebration."
        />

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl border border-caramel/20 p-8 sm:p-12 ${
              index % 2 === 0 ? "bg-cream" : "bg-cream-dark"
            }`}
          >
            <div
              className={`lg:col-span-6 space-y-6 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
                {service.category}
              </span>
              <h2 className="font-serif text-3xl font-bold text-espresso">
                {service.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-caramel-dark">
                  Service Highlights:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-main font-medium">
                      <CheckCircle2 className="h-4 w-4 text-caramel-dark shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href={`/quote?service=${service.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream hover:bg-caramel hover:text-espresso transition-all"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <PlaceholderImage
                label={service.imageLabel}
                subtext={service.shortDescription}
                aspectRatio="4/3"
                category={service.category}
                dimensions="1200 x 900"
                icon="coffee"
                className="shadow-xl"
              />
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
