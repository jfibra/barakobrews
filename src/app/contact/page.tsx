import React from "react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import PlaceholderImage from "@/components/PlaceholderImage";
import ContactForm from "@/components/ContactForm";
import { businessInfo } from "@/data/config";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Us — BarakoBrews Mobile Coffee Catering",
  description:
    "Get in touch with BarakoBrews for mobile coffee catering inquiries, venue site checks, and custom event partnerships.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Banner */}
      <section className="relative bg-[url('/images/bg/cta_bg_event.png')] bg-cover bg-center py-20 text-cream border-b border-caramel/20">
        <div className="absolute inset-0 bg-espresso-dark/95 backdrop-blur-[1px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center space-y-4">
          <span className="inline-block rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1 text-xs font-bold uppercase tracking-widest text-caramel-light">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            LET'S BREW SOMETHING SPECIAL
          </h1>
          <p className="text-base sm:text-lg text-cream/70 max-w-2xl mx-auto">
            Have questions about date availability, custom menus, or location coverage? We're here to help.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-caramel/30 bg-espresso p-8 text-cream shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl font-bold">Contact Details</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel/20 text-caramel-light border border-caramel/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase tracking-wider block font-semibold">Phone</span>
                    <span className="font-medium text-cream">{businessInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel/20 text-caramel-light border border-caramel/30">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase tracking-wider block font-semibold">Email</span>
                    <span className="font-medium text-cream">{businessInfo.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel/20 text-caramel-light border border-caramel/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase tracking-wider block font-semibold">Service Area</span>
                    <span className="font-medium text-cream">{businessInfo.serviceArea}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-caramel/20 text-caramel-light border border-caramel/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-cream/50 uppercase tracking-wider block font-semibold">Business Hours</span>
                    <span className="font-medium text-cream">{businessInfo.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-caramel/20">
                <span className="text-xs font-bold uppercase tracking-widest text-caramel-light block mb-3">
                  Follow Our Journey
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={businessInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-caramel/30 bg-espresso-dark px-4 py-2 text-xs font-semibold text-cream hover:bg-caramel hover:text-espresso transition-all"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-caramel/30 bg-espresso-dark px-4 py-2 text-xs font-semibold text-cream hover:bg-caramel hover:text-espresso transition-all"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder Map Container */}
            <div className="rounded-3xl border border-caramel/20 bg-cream p-6 shadow-lg space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-caramel-dark block">
                Service Area Map Preview
              </span>
              <PlaceholderImage
                label="SERVICE AREA COVERAGE MAP PLACEHOLDER"
                subtext="Map preview showing event service region boundaries."
                aspectRatio="16/9"
                category="COVERAGE REGION"
                dimensions="800 x 450"
                icon="camera"
              />
            </div>
          </div>

          {/* Right Column: General Message Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-caramel/20 bg-cream p-8 sm:p-10 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-espresso">
                Send a General Message
              </h3>
              <p className="text-xs text-text-muted">
                Looking for a quick quote for an upcoming event? You can also use our dedicated{" "}
                <a href="/quote" className="text-caramel-dark font-bold underline">
                  Multi-Step Quote Form
                </a>
                .
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  );
}
