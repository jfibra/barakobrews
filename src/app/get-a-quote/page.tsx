"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";

function QuoteFormContainer() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package") || undefined;
  const serviceParam = searchParams.get("service") || undefined;

  return <QuoteForm initialPackage={pkgParam} initialService={serviceParam} />;
}

export default function GetAQuotePage() {
  return (
    <div className="pt-32 pb-24 space-y-12">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-caramel-light">
            EVENT PROPOSAL REQUEST
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-cream">
            LET'S BREW SOMETHING SPECIAL.
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-xl mx-auto">
            Tell us about your event and we'll help create the perfect mobile coffee experience.
          </p>
        </div>
      </section>

      {/* Main Quote Wizard */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Suspense
          fallback={
            <div className="text-center py-16 text-cream/60 font-mono text-xs">
              Loading Event Quote Request Tool...
            </div>
          }
        >
          <QuoteFormContainer />
        </Suspense>
      </section>
    </div>
  );
}
