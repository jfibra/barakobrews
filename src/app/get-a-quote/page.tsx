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
    <div className="pt-28 pb-24 space-y-12 font-sans">
      {/* Header Banner */}
      <section className="relative bg-espresso-dark py-20 text-cream border-b border-caramel/20">
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-caramel-light bg-caramel/10 border border-caramel/30 px-4 py-1 rounded-full">
            EVENT PROPOSAL REQUEST
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cream">
            Let's brew something special.
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto font-normal leading-relaxed">
            Tell us a little about your event and we'll recommend the right coffee experience.
          </p>
        </div>
      </section>

      {/* Main Quote Wizard */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Suspense
          fallback={
            <div className="text-center py-16 text-caramel-light font-mono text-xs">
              Preparing your concierge quote builder...
            </div>
          }
        >
          <QuoteFormContainer />
        </Suspense>
      </section>
    </div>
  );
}
