import React from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Check, Star, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { servicesData } from "@/data/services";
import { packagesData } from "@/data/packages";
import { stepsData } from "@/components/ProcessStep";
import { galleryData } from "@/data/gallery";
import { testimonialsData } from "@/data/testimonials";
import { businessInfo } from "@/data/config";

export default function Home() {
  const featuredServicesLarge = servicesData.slice(0, 2);
  const featuredServicesSmall = servicesData.slice(2, 6);
  const featuredGallery = galleryData.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. SHORT INTRO / VALUE PROPOSITION (LIGHT) */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-dark block">
                YOUR EVENT, BREWED BETTER
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-espresso leading-[1.1]">
                BarakoBrews brings the experience of a specialty coffee shop directly to your celebration.
              </h2>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
                From intimate wedding gatherings to major corporate launches, our mobile coffee bar creates a warm, interactive café experience your guests will talk about long after the last cup.
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-dark hover:text-espresso transition-colors group"
                >
                  <span>Plan Your Coffee Experience</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PlaceholderImage
                label="MOBILE CAFÉ EVENT SETUP PHOTOGRAPHY"
                src="/images/services/wedding_catering.png"
                subtext="BarakoBrews mobile bar serving guests at an outdoor pavilion."
                aspectRatio="4/3"
                category="EXPERIENCE"
                dimensions="1200 x 900"
                icon="coffee"
                className="shadow-xl rounded-2xl border-beige"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL SERVICES SECTION (DARK) */}
      <section className="relative bg-[url('/images/bg/hero_bg_texture.png')] bg-cover bg-center py-24 lg:py-32 text-cream">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="COFFEE FOR EVERY OCCASION"
            title="Catering Tailored To Your Gathering"
            subtitle="Whether celebrating a milestone marriage, hosting a corporate summit, or activating a brand launch, we customize our mobile coffee bar for your vision."
            theme="dark"
          />

          {/* Varied Editorial Grid: 2 Large Cards + 4 Flex Cards */}
          <div className="space-y-8">
            {/* Top Row: 2 Featured Large Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredServicesLarge.map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-caramel/20 bg-espresso/90 p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-caramel/50"
                >
                  <div className="space-y-6">
                    <PlaceholderImage
                      label={service.imageLabel}
                      subtext={service.shortDescription}
                      aspectRatio="16/9"
                      category={service.category}
                      dimensions="1000 x 562"
                      icon="coffee"
                      className="rounded-xl border-caramel/20"
                    />
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-caramel-light">
                        {service.category}
                      </span>
                      <h3 className="font-serif text-3xl font-normal text-cream group-hover:text-caramel-light transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-cream/70 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-caramel/15">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-light hover:text-cream transition-colors group/link"
                    >
                      <span>Explore {service.title} Catering</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 4 Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredServicesSmall.map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between rounded-xl border border-caramel/20 bg-espresso/60 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-caramel/40"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light">
                      {service.category}
                    </span>
                    <h4 className="font-serif text-2xl font-normal text-cream group-hover:text-caramel-light transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-cream/70 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-caramel/10">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-caramel-light hover:text-cream transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PACKAGES (LIGHT - CONCISE OVERVIEW) */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="CHOOSE YOUR BREW"
            title="Catering Packages & Rates"
            subtitle="Concise package tiers for celebrations of every size. Detailed menu options and customizations available on our packages page."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-500 ${
                  pkg.isPopular
                    ? "border-caramel bg-espresso text-cream shadow-2xl ring-1 ring-caramel/50"
                    : "border-caramel/30 bg-cream text-espresso shadow-md hover:border-caramel/60"
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-caramel px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-espresso shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-6">
                  <div className="border-b border-caramel/20 pb-4">
                    <h3
                      className={`font-serif text-3xl font-normal ${
                        pkg.isPopular ? "text-caramel-light" : "text-espresso"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`mt-2 text-xs ${
                        pkg.isPopular ? "text-cream/70" : "text-text-muted"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Guest Range:</span>
                      <span className="font-bold">{pkg.guestCapacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Service Time:</span>
                      <span className="font-bold">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Staffing:</span>
                      <span className="font-bold">{pkg.baristaCount}</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-caramel/30 bg-caramel/10 p-4 text-center">
                    <span
                      className={`font-serif text-2xl font-bold block ${
                        pkg.isPopular ? "text-caramel-light" : "text-caramel-dark"
                      }`}
                    >
                      {pkg.pricePlaceholder}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block mt-0.5">
                      Starting Rate / Configurable
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-caramel/15">
                  <Link
                    href={`/get-a-quote?package=${pkg.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                      pkg.isPopular
                        ? "bg-caramel text-espresso hover:bg-caramel-light shadow-md"
                        : "border border-caramel/40 bg-espresso text-cream hover:bg-caramel hover:text-espresso"
                    }`}
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-dark hover:text-espresso transition-colors"
            >
              <span>View Full Package Matrix & Addons →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (LIGHT - CLEAN HORIZONTAL STEPS) */}
      <section className="bg-cream-dark py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="SIMPLE 4-STEP BOOKING"
            title="How BarakoBrews Works"
            subtitle="From initial date confirmation to serving fresh espresso at your event venue."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepsData.map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="font-serif text-5xl font-light text-caramel-dark block">
                  {item.step}
                </span>
                <h3 className="font-serif text-2xl font-bold text-espresso">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED GALLERY & BRAND STORY TEASER (DARK) */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-24 lg:py-32 text-cream">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Teaser Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-light block">
                OUR STORY & HERITAGE
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-cream leading-[1.1]">
                MORE THAN COFFEE. <br />
                <span className="italic text-caramel-light">IT'S A REASON TO GATHER.</span>
              </h2>
              <p className="text-sm text-cream/80 leading-relaxed">
                BarakoBrews was founded on the belief that specialty coffee brings people together. Inspired by the bold spirit of Kapeng Barako and Filipino hospitality, we bring artisan coffee crafting to life's special occasions.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-light hover:text-cream transition-colors"
                >
                  <span>Read Our Full Story →</span>
                </Link>
              </div>
            </div>

            {/* Asymmetric 6-Image Featured Gallery */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {featuredGallery.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-xl border border-caramel/20 bg-espresso ${
                      idx === 0 ? "col-span-2 row-span-2" : ""
                    }`}
                  >
                    <PlaceholderImage
                      label={item.imageLabel}
                      subtext={item.title}
                      aspectRatio={idx === 0 ? "16/9" : "1/1"}
                      category={item.category}
                      dimensions="800 x 600"
                      icon="camera"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-caramel-light hover:underline"
                >
                  <span>View Full Photo Gallery →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (LIGHT - 3 EDITORIAL QUOTES) */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            title="What Event Hosts Say"
            subtitle="Feedback from clients who trusted BarakoBrews for their celebrations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between space-y-6 rounded-2xl border border-beige bg-cream-dark p-8 shadow-sm"
              >
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-caramel-dark/30" />
                  <p className="font-serif text-lg italic text-espresso leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-beige flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-espresso">
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-text-muted">{item.role}</p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-dark bg-caramel/10 border border-caramel/20 px-3 py-1 rounded-full">
                    {item.eventType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (DARK) */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-28 text-cream">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-light block">
            LET'S BREW SOMETHING SPECIAL
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.05]">
            YOUR EVENT DESERVES <br />
            <span className="italic text-caramel-light">GREAT COFFEE.</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed">
            Let's make your next gathering a little more memorable with freshly poured specialty coffee and warm barista service.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark px-9 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl hover:scale-105 transition-all"
            >
              <span>GET A QUOTE →</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 bg-espresso/60 px-8 py-4 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md hover:bg-caramel/20 hover:border-caramel transition-all"
            >
              <span>EXPLORE OUR SERVICES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
