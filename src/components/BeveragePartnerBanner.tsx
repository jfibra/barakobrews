import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Coffee, Sparkles, CheckCircle2 } from "lucide-react";

export default function BeveragePartnerBanner() {
  return (
    <section 
      id="beverage-partners" 
      aria-label="Beverage Catering Partner: Sugar Splash"
      className="relative bg-cream-dark py-24 lg:py-32 border-b border-beige overflow-hidden"
    >
      {/* Decorative subtle background lemon branch illustration */}
      <div 
        className="hidden xl:block absolute -right-12 -top-12 w-64 h-64 pointer-events-none opacity-20 rotate-45 select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/partner/lemon-branch.png"
          alt=""
          width={256}
          height={256}
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* 1. MAIN PARTNER SHOWCASE BANNER */}
        <div className="relative rounded-3xl border border-beige bg-cream p-8 sm:p-10 lg:p-14 shadow-xl overflow-hidden">
          {/* Subtle warm glow behind partner card */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-[#F8C928]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Left Column: Brand, Logo & Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Partner Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#062D49] text-cream shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#F8C928]" />
                  <span>Our Lemonade Partner</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-[#062D49] bg-[#F8C928]/20 border border-[#F8C928]/40">
                  <span>Freshly Squeezed &amp; Sweet</span>
                </span>
              </div>

              {/* Logo & Sub-heading */}
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-2xl bg-white p-2 border border-beige shadow-sm">
                    <Image
                      src="/images/partner/sugar-splash-logo.png"
                      alt="Sugar Splash Lemonade Cart Catering Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block">
                      Meet Sugar Splash
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#062D49] tracking-tight">
                      SUGAR SPLASH
                    </h3>
                    <p className="text-xs text-text-muted font-medium italic">
                      Freshly Squeezed &amp; Sweet
                    </p>
                  </div>
                </div>

                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-espresso leading-[1.15] pt-2">
                  Need Lemonade Too?
                </h2>
              </div>

              {/* Body Text */}
              <p className="text-base sm:text-lg text-text-muted leading-relaxed font-normal">
                Complete your event beverage experience with Sugar Splash. From freshly squeezed lemonade to beautiful lemonade cart setups, Sugar Splash brings refreshing drinks and brighter moments to weddings, birthdays, corporate events, and celebrations.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cream-dark border border-beige text-xs text-espresso font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#4D793C] shrink-0" />
                  <span>Fresh Real Fruit</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cream-dark border border-beige text-xs text-espresso font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#4D793C] shrink-0" />
                  <span>Striped Bar Cart</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-cream-dark border border-beige text-xs text-espresso font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#4D793C] shrink-0" />
                  <span>Full Attendant Service</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://sugarsplash.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#062D49] hover:bg-[#0D446C] text-cream font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#062D49]/15 transition-all duration-200 active:scale-95 group"
                >
                  <span>Explore Sugar Splash</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F8C928] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-text-muted justify-center sm:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#4D793C]" />
                  <span>Good Drinks. Brighter Days.</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lemonade Cart Photography */}
            <div className="lg:col-span-5 space-y-4">
              <div className="group relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] bg-cream-dark">
                <Image
                  src="/images/partner/sugar-splash-cart.jpg"
                  alt="Sugar Splash mobile lemonade cart setup with yellow and cream striped awning, fresh lemons, and glass drink dispensers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Glassmorphism Feature Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#062D49]/90 backdrop-blur-md text-white p-3.5 rounded-2xl border border-white/20 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl" role="img" aria-label="Lemon">🍋</span>
                    <div>
                      <p className="text-xs font-bold text-cream">Mobile Lemonade Cart</p>
                      <p className="text-[11px] text-[#F8C928]">Weddings, Corporate &amp; Parties</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full text-cream/90">
                    Handcrafted
                  </span>
                </div>
              </div>

              {/* Secondary Supporting Flavor Lineup Pill */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-beige shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-beige">
                    <Image
                      src="/images/partner/lemonade-trio.jpg"
                      alt="Trio of iced lemonades with fresh fruit garnishes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-espresso">Signature Citrus Flavors</p>
                    <p className="text-[11px] text-text-muted">Classic Lemon, Strawberry Puree &amp; Calamansi Honey</p>
                  </div>
                </div>
                <a
                  href="https://sugarsplash.vercel.app/packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-caramel-dark hover:text-espresso shrink-0 flex items-center gap-1 transition-colors"
                >
                  <span>Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. COMBINED BEVERAGE EXPERIENCE SECTION */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-dark block">
              COMPLETE EVENT BEVERAGE PACKAGES
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-espresso">
              Coffee &amp; Lemonade, Together
            </h3>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-normal">
              Planning a bigger celebration? Pair Barako Brews coffee catering with Sugar Splash lemonade for a complete beverage experience. Perfect for weddings, corporate events, birthdays, and special gatherings.
            </p>
          </div>

          {/* Dual Brand Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Primary Brand Card: Barako Brews */}
            <div className="relative rounded-3xl border-2 border-caramel bg-espresso p-8 text-cream shadow-xl flex flex-col justify-between space-y-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-caramel/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-caramel-light border border-caramel/40">
                    <Coffee className="w-3 h-3 text-caramel" />
                    PRIMARY CATERING BRAND
                  </span>
                  <span className="text-xs font-mono text-caramel-light">Hot &amp; Iced</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans text-2xl font-extrabold text-cream">
                    BARAKO BREWS
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-caramel-light">
                    Coffee Cart Catering
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                  Artisan espresso, signature Ube &amp; Spanish lattes, ceremonial matcha, and warm Filipino hospitality served fresh from our boutique mobile coffee cart.
                </p>
              </div>

              <div className="pt-4 border-t border-caramel/20 flex items-center justify-between">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel-light hover:text-cream transition-colors"
                >
                  <span>Book Coffee Catering →</span>
                </Link>
                <span className="text-[11px] text-cream/50 italic">Currently Here</span>
              </div>
            </div>

            {/* Secondary Partner Card: Sugar Splash */}
            <div className="relative rounded-3xl border border-beige bg-white p-8 text-espresso shadow-lg flex flex-col justify-between space-y-6 group hover:-translate-y-1 hover:border-[#F8C928] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F8C928]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#062D49] border border-[#F8C928]/40">
                    <Sparkles className="w-3 h-3 text-[#E5A91D]" />
                    COMPLEMENTARY PARTNER
                  </span>
                  <span className="text-xs font-mono text-text-muted">Ice-Cold Citrus</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans text-2xl font-extrabold text-[#062D49]">
                    SUGAR SPLASH
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4D793C]">
                    Lemonade Cart Catering
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-normal">
                  Freshly squeezed lemonade, real fruit purees, and bright event presentation served from a charming yellow-and-cream striped mobile cart.
                </p>
              </div>

              <div className="pt-4 border-t border-beige flex items-center justify-between">
                <a
                  href="https://sugarsplash.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#062D49] hover:text-caramel-dark transition-colors"
                >
                  <span>Visit Sugar Splash</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E5A91D]" />
                </a>
                <span className="text-[11px] text-[#4D793C] font-semibold">Dual-Cart Friendly</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
