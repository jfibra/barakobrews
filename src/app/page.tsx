import React from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Heart, Sparkles, CheckCircle2, Quote } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import PlaceholderImage from "@/components/PlaceholderImage";
import { packagesData } from "@/data/packages";

export default function Home() {
  const eventsWeCater = [
    {
      id: "weddings",
      title: "Weddings",
      description: "An artisan espresso bar setup with custom menus for receptions and ceremonies.",
      src: "/images/services/wedding_catering_real.jpg",
      href: "/services#weddings",
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description: "Rapid, professional barista service to energize summits, meetings, and company galas.",
      src: "/images/services/resort_golf_cart.jpg",
      href: "/services#corporate",
    },
    {
      id: "private-celebrations",
      title: "Private Celebrations",
      description: "Bring a cozy, interactive coffee bar to birthdays, anniversaries, and family reunions.",
      src: "/images/services/outdoor_yoga_cart.jpg",
      href: "/services#private-parties",
    },
    {
      id: "brand-activations",
      title: "Brand Activations",
      description: "Custom cup branding and bespoke signature recipes for launches and pop-up events.",
      src: "/images/hero/night_tent_setup.jpg",
      href: "/services#brand-events",
    },
  ];

  const signatureDrinks = [
    {
      name: "Barako Latte",
      tagline: "Dark-roasted Kapeng Barako, raw sugar syrup & textured cream.",
      tag: "House Special",
    },
    {
      name: "Leche-ka Latte",
      tagline: "Decadent caramel flan sauce swirled with rich double espresso.",
      tag: "Popular",
    },
    {
      name: "Ube-tado Latte",
      tagline: "Vibrant ube velvet swirl layered under dark Barako espresso.",
      tag: "Filipino Favorite",
    },
    {
      name: "Ube Matcha",
      tagline: "Sweet purple ube velvet layer topped with whisked Japanese matcha.",
      tag: "Top Seller",
    },
  ];

  const socialProofQuotes = [
    {
      role: "Malibu Wedding Reception",
      quote: "Having BarakoBrews at our Malibu estate reception was the highlight of the night. Guests lined up all evening for the Ube Lattes and Spanish Lattes!",
      event: "Malibu Coastal Reception • 120 Guests",
    },
    {
      role: "Orange County Event Producer",
      quote: "Flawless execution from setup to cleanup at our Irvine tech summit. They kept our corporate attendees energized without any queue delays.",
      event: "Irvine Tech Summit • 250 Guests",
    },
    {
      role: "Palm Springs Birthday Host",
      quote: "The mobile coffee cart looked stunning on our resort lawn and the baristas were incredibly warm and welcoming to all our family members.",
      event: "Palm Springs Celebration • 60 Guests",
    },
  ];

  return (
    <div className="space-y-0 font-sans">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. THE EXPERIENCE */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-dark block">
                THE BARAKOBREWS EXPERIENCE
              </span>
              
              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-espresso leading-[1.1]">
                Bring the café to your event.
              </h2>
              
              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl font-normal">
                BarakoBrews creates a complete specialty coffee experience — not simply beverage catering. We bring an authentic espresso bar, trained baristas, and handcrafted beverages directly to your venue so you and your guests can gather, connect, and celebrate.
              </p>

              {/* 3 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-beige">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-caramel-dark font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 text-caramel" />
                    <span>Freshly Crafted</span>
                  </div>
                  <p className="text-xs text-text-muted">Every beverage extracted fresh by order.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-caramel-dark font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 text-caramel" />
                    <span>Pro Baristas</span>
                  </div>
                  <p className="text-xs text-text-muted">Warm, hospitable service with poured latte art.</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-caramel-dark font-bold text-sm">
                    <CheckCircle2 className="h-4 w-4 text-caramel" />
                    <span>Mobile Setup</span>
                  </div>
                  <p className="text-xs text-text-muted">Complete bar cart, umbrella, power & cleanup.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-dark hover:text-espresso transition-colors group"
                >
                  <span>Learn About Our Setup</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PlaceholderImage
                label="BARAKOBREWS MOBILE COFFEE EXPERIENCE"
                src="/images/services/outdoor_yoga_cart.jpg"
                subtext="BarakoBrews mobile bar cart serving fresh lattes on a sunny outdoor lawn."
                aspectRatio="3/4"
                category="REAL EXPERIENCE"
                dimensions="1200 x 1600"
                icon="coffee"
                className="shadow-2xl rounded-3xl border-beige"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVENTS WE CATER (2x2 GRID) */}
      <section className="relative bg-espresso-dark py-24 lg:py-32 text-cream border-b border-caramel/20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="TAILORED CATERING"
            title="Events we cater."
            subtitle="Whether celebrating an intimate marriage, hosting a corporate summit, or launching a brand, we customize our mobile coffee bar for your vision."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsWeCater.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-caramel/20 bg-espresso/90 p-8 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-caramel/50"
              >
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-caramel/20 aspect-[16/9]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl font-bold text-cream group-hover:text-caramel-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-caramel/15">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-light hover:text-cream transition-colors group/link"
                  >
                    <span>Explore →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE COFFEE */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="CRAFTED SELECTIONS"
            title="Meet our signature brews."
            subtitle="Handcrafted at every event using specialty dark-roasted Kapeng Barako beans, house velvet Ube, and ceremonial Japanese matcha."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo Showcase: Dual Product Lineups Side-by-Side */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-caramel/30 bg-espresso p-2 shadow-xl group">
                <img
                  src="/images/menu/latte_lineup.jpg"
                  alt="BarakoBrews Signature Latte Lineup"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <span className="block text-[10px] font-bold uppercase tracking-wider text-caramel-light text-center mt-2 pb-1">
                  Craft Coffee Lattes
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-caramel/30 bg-espresso p-2 shadow-xl group">
                <img
                  src="/images/menu/matcha_lineup.jpg"
                  alt="BarakoBrews Ceremonial Matcha & Ube Lineup"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <span className="block text-[10px] font-bold uppercase tracking-wider text-caramel-light text-center mt-2 pb-1">
                  Japanese Matcha Series
                </span>
              </div>
            </div>

            {/* Right Drink Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                {signatureDrinks.map((drink) => (
                  <div
                    key={drink.name}
                    className="flex items-start justify-between p-5 rounded-2xl border border-beige bg-cream-dark shadow-sm transition-all hover:border-caramel/40"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-sans text-lg font-bold text-espresso">
                          {drink.name}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-caramel-dark bg-caramel/10 border border-caramel/20 px-2.5 py-0.5 rounded-full">
                          {drink.tag}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted font-normal">
                        {drink.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center lg:text-left">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cream shadow-lg hover:bg-caramel hover:text-espresso transition-all"
                >
                  <span>Explore the Menu</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PACKAGES (3 TIERS ONLY) */}
      <section className="bg-cream-dark py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="CATERING TIERS"
            title="Packages & rates."
            subtitle="Transparent package tiers for celebrations of every size. Customizations and addon options available."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-500 ${
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
                      className={`font-sans text-2xl font-bold ${
                        pkg.isPopular ? "text-caramel-light" : "text-espresso"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`mt-1.5 text-xs ${
                        pkg.isPopular ? "text-cream/70" : "text-text-muted"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Guest Capacity:</span>
                      <span className="font-bold">{pkg.guestCapacity}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Service Duration:</span>
                      <span className="font-bold">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-caramel/10">
                      <span className={pkg.isPopular ? "text-cream/60" : "text-text-muted"}>Staffing:</span>
                      <span className="font-bold">{pkg.baristaCount}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-caramel/30 bg-caramel/10 p-4 text-center">
                    <span
                      className={`font-sans text-2xl font-extrabold block ${
                        pkg.isPopular ? "text-caramel-light" : "text-caramel-dark"
                      }`}
                    >
                      {pkg.pricePlaceholder}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block mt-0.5">
                      Configurable Service Rate
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-caramel/15">
                  <Link
                    href={`/get-a-quote?package=${pkg.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-bold uppercase tracking-widest transition-all ${
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
              <span>Compare Packages →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY BARAKOBREWS */}
      <section className="bg-cream py-24 lg:py-32 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="WHY BARAKOBREWS"
            title="The difference is in the details."
            subtitle="We blend specialty espresso technique with warm Filipino hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block">
                SPECIALTY COFFEE
              </span>
              <h3 className="font-sans text-xl font-bold text-espresso">Freshly prepared beverages.</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Ground fresh per order using dark-roasted Kapeng Barako beans, organic oat milk, and house-made syrups.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block">
                FILIPINO HOSPITALITY
              </span>
              <h3 className="font-sans text-xl font-bold text-espresso">Warm, professional service.</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Friendly baristas who welcome every guest with genuine warmth, attention to detail, and poured latte art.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-beige bg-cream-dark space-y-4 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block">
                EFFORTLESS EXPERIENCE
              </span>
              <h3 className="font-sans text-xl font-bold text-espresso">We handle setup & cleanup.</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Complete mobile bar, umbrella, electrical power, and cleanup. Zero stress for event hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section className="bg-espresso-dark py-24 lg:py-32 border-b border-caramel/20 text-cream">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
          <SectionHeading
            eyebrow="CLIENT EXPERIENCES"
            title="Trusted by event hosts."
            subtitle="Real feedback from celebrations catered by BarakoBrews."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialProofQuotes.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between space-y-6 rounded-3xl border border-caramel/30 bg-espresso p-8 shadow-xl"
              >
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-caramel-light/40" />
                  <p className="font-sans text-sm text-cream/90 italic leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-caramel/20 space-y-1">
                  <h4 className="font-sans text-base font-bold text-cream">
                    {item.role}
                  </h4>
                  <p className="text-[11px] text-caramel-light font-mono">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BRAND STORY */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-24 lg:py-32 text-cream">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-light block">
                OUR STORY
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl font-extrabold text-cream leading-[1.1]">
                More than coffee. <br />
                <span className="font-normal italic text-caramel-light">It's a reason to gather.</span>
              </h2>
              <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-normal max-w-xl">
                BarakoBrews was founded on the belief that specialty coffee brings people together. Inspired by the bold heritage of Batangas Kapeng Barako and Filipino hospitality, we bring artisan coffee crafting to life's special occasions.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-light hover:text-cream transition-colors"
                >
                  <span>Meet BarakoBrews →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-caramel/30 shadow-2xl">
                <img
                  src="/images/about/happy_customer.jpg"
                  alt="Customer enjoying Ube Matcha"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-espresso-dark py-28 text-cream">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-light block">
            RESERVE YOUR EVENT DATE
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Your event deserves <br />
            <span className="font-normal italic text-caramel-light">great coffee.</span>
          </h2>
          <p className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed font-normal">
            Let's make your next gathering memorable with freshly poured specialty coffee and warm barista service.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark px-9 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl hover:scale-105 transition-all"
            >
              <span>Get a Quote →</span>
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-caramel/40 bg-espresso/60 px-8 py-4 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md hover:bg-caramel/20 hover:border-caramel transition-all"
            >
              <span>View Our Menu</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
