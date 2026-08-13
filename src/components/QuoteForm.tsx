"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Users,
  MapPin,
  Coffee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { packagesData } from "@/data/packages";
import { servicesData } from "@/data/services";

interface FormDataState {
  // Step 1: Your Event
  eventType: string;
  eventDate: string;
  eventLocation: string;
  venueName: string;

  // Step 2: Your Guests
  guestCount: string;
  serviceDuration: string;
  startTime: string;

  // Step 3: Coffee Experience
  preferredPackage: string;
  coffeeOptions: string[];
  nonCoffeeOptions: string[];
  specialRequests: string;

  // Step 4: Contact Details
  fullName: string;
  email: string;
  phone: string;
  referralSource: string;
}

const initialFormState: FormDataState = {
  eventType: "Wedding",
  eventDate: "",
  eventLocation: "",
  venueName: "",
  guestCount: "60 - 120 guests",
  serviceDuration: "3 Hours",
  startTime: "14:00",
  preferredPackage: "signature-brew",
  coffeeOptions: ["Barako Latte", "Spanish Latte", "Caramel Cloud"],
  nonCoffeeOptions: ["Ceremonial Matcha", "Belgian Chocolate"],
  specialRequests: "",
  fullName: "",
  email: "",
  phone: "",
  referralSource: "Social Media",
};

export default function QuoteForm({
  initialPackage,
  initialService,
}: {
  initialPackage?: string;
  initialService?: string;
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataState>(() => ({
    ...initialFormState,
    preferredPackage: initialPackage || "signature-brew",
    eventType: initialService
      ? servicesData.find((s) => s.id === initialService)?.title || "Wedding"
      : "Wedding",
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, preferredPackage: initialPackage }));
    }
  }, [initialPackage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxToggle = (field: "coffeeOptions" | "nonCoffeeOptions", item: string) => {
    setFormData((prev) => {
      const list = prev[field];
      const exists = list.includes(item);
      const updated = exists ? list.filter((i) => i !== item) : [...list, item];
      return { ...prev, [field]: updated };
    });
  };

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.eventDate) errs.eventDate = "Event date is required";
      if (!formData.eventLocation.trim()) errs.eventLocation = "Location / City is required";
    }
    if (step === 4) {
      if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
      if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Valid email is required";
      if (!formData.phone.trim()) errs.phone = "Phone number is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Quote submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#AF8155", "#754528", "#FCF6EC", "#2C160A"],
        });
      } catch {
        // fallback
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-caramel/40 bg-espresso p-8 sm:p-12 text-center text-cream shadow-2xl space-y-6 max-w-2xl mx-auto animate-fade-in font-sans">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-caramel/20 text-caramel-light border border-caramel">
          <CheckCircle2 className="h-10 w-10 text-caramel" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-caramel-light bg-caramel/10 px-4 py-1 rounded-full border border-caramel/20">
          INQUIRY RECEIVED
        </span>
        <h2 className="font-sans text-3xl font-bold text-cream">
          Your coffee proposal is on the way.
        </h2>
        <p className="text-sm text-cream/80 max-w-md mx-auto leading-relaxed font-normal">
          Thank you! We've received your event details and will review your request to send a tailored coffee catering proposal within 24 hours.
        </p>

        {/* Summary Preview Box */}
        <div className="rounded-2xl border border-caramel/20 bg-espresso-dark/80 p-6 text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between border-b border-caramel/10 pb-2">
            <span className="text-cream/50">Contact:</span>
            <span className="font-bold text-cream">{formData.fullName} ({formData.email})</span>
          </div>
          <div className="flex justify-between border-b border-caramel/10 pb-2">
            <span className="text-cream/50">Event Type:</span>
            <span className="font-bold text-caramel-light">{formData.eventType}</span>
          </div>
          <div className="flex justify-between border-b border-caramel/10 pb-2">
            <span className="text-cream/50">Date & Location:</span>
            <span className="font-bold text-cream">{formData.eventDate || "TBD"} ({formData.eventLocation})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cream/50">Package:</span>
            <span className="font-bold text-caramel-light capitalize">{formData.preferredPackage.replace("-", " ")}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-caramel/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-caramel-light hover:bg-caramel hover:text-espresso transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-caramel/30 bg-espresso p-6 sm:p-10 text-cream shadow-2xl max-w-3xl mx-auto font-sans">
      {/* Step Indicator Header */}
      <div className="mb-8 border-b border-caramel/20 pb-6">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-caramel-light mb-3">
          <span>Step 0{currentStep} of 05</span>
          <span>
            {currentStep === 1 && "Your Event"}
            {currentStep === 2 && "Your Guests"}
            {currentStep === 3 && "Coffee Experience"}
            {currentStep === 4 && "Your Details"}
            {currentStep === 5 && "Review & Request"}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-espresso-dark">
          <div
            className="h-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark transition-all duration-500"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: Your Event */}
        {currentStep === 1 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-sans text-2xl font-bold text-cream">
              Step 1: Your Event
            </h3>
            <p className="text-xs text-cream/70 font-normal">
              Tell us what occasion you are celebrating and where it takes place.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream focus:border-caramel focus:outline-none"
              >
                <option value="Wedding">Wedding Reception</option>
                <option value="Corporate Event">Corporate Event / Summit</option>
                <option value="Private Celebration">Private Birthday / Anniversary</option>
                <option value="Brand Activation">Brand Launch / Activation</option>
                <option value="Conference">Conference / Seminar</option>
                <option value="Custom Event">Custom Celebration</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream focus:border-caramel focus:outline-none"
                />
                {errors.eventDate && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.eventDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Location / City *
                </label>
                <input
                  type="text"
                  name="eventLocation"
                  placeholder="e.g. Metro Manila / Tagaytay"
                  value={formData.eventLocation}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                />
                {errors.eventLocation && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.eventLocation}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                Venue Name (Optional)
              </label>
              <input
                type="text"
                name="venueName"
                placeholder="e.g. Grand Ballroom / Private Garden"
                value={formData.venueName}
                onChange={handleChange}
                className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 2: Your Guests */}
        {currentStep === 2 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-sans text-2xl font-bold text-cream">
              Step 2: Your Guests & Schedule
            </h3>
            <p className="text-xs text-cream/70 font-normal">
              Help us estimate barista staffing and high-volume espresso equipment capacity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Estimated Guest Count
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream focus:border-caramel focus:outline-none"
                >
                  <option value="Under 30 guests">Under 30 guests</option>
                  <option value="30 - 60 guests">30 - 60 guests</option>
                  <option value="60 - 120 guests">60 - 120 guests</option>
                  <option value="120 - 200 guests">120 - 200 guests</option>
                  <option value="200+ guests">200+ guests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Service Duration
                </label>
                <select
                  name="serviceDuration"
                  value={formData.serviceDuration}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream focus:border-caramel focus:outline-none"
                >
                  <option value="2 Hours">2 Hours</option>
                  <option value="3 Hours">3 Hours</option>
                  <option value="4 Hours">4 Hours</option>
                  <option value="Full Day (5+ Hours)">Full Day (5+ Hours)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Service Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 px-4 py-3 text-sm text-cream focus:border-caramel focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Coffee Experience */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-sans text-2xl font-bold text-cream">
              Step 3: Your Coffee Experience
            </h3>
            <p className="text-xs text-cream/70 font-normal">
              Select your package tier and favorite drink options.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-2">
                Preferred Package Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {packagesData.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, preferredPackage: pkg.id }))
                    }
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      formData.preferredPackage === pkg.id
                        ? "border-caramel bg-caramel/20 text-cream ring-1 ring-caramel"
                        : "border-caramel/20 bg-espresso-dark/60 text-cream/70 hover:border-caramel/40"
                    }`}
                  >
                    <span className="font-sans text-sm font-bold block">{pkg.name}</span>
                    <span className="text-[10px] text-caramel-light block mt-1">{pkg.guestCapacity}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-2">
                Coffee Options
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {["Barako Latte", "Spanish Latte", "Caramel Cloud", "Espresso", "Americano", "Mocha"].map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 cursor-pointer transition-colors ${
                      formData.coffeeOptions.includes(item)
                        ? "border-caramel bg-caramel/20 text-cream"
                        : "border-caramel/20 bg-espresso-dark/60 text-cream/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.coffeeOptions.includes(item)}
                      onChange={() => handleCheckboxToggle("coffeeOptions", item)}
                      className="accent-caramel"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-2">
                Non-Coffee & Specialty Options
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {["Ceremonial Matcha", "Belgian Chocolate", "Spiced Chai", "Oat Milk Option", "Almond Milk"].map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-2 rounded-xl border p-2.5 cursor-pointer transition-colors ${
                      formData.nonCoffeeOptions.includes(item)
                        ? "border-caramel bg-caramel/20 text-cream"
                        : "border-caramel/20 bg-espresso-dark/60 text-cream/60"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.nonCoffeeOptions.includes(item)}
                      onChange={() => handleCheckboxToggle("nonCoffeeOptions", item)}
                      className="accent-caramel"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Your Details */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-sans text-2xl font-bold text-cream">
              Step 4: Your Contact Details
            </h3>
            <p className="text-xs text-cream/70 font-normal">
              We'll send your customized proposal and pricing breakdown directly to your inbox.
            </p>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/50" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Maria Santos"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 pl-10 pr-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/50" />
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 pl-10 pr-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/50" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+63 900 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 pl-10 pr-4 py-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Review & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in font-sans">
            <h3 className="font-sans text-2xl font-bold text-cream">
              Step 5: Review Your Proposal Request
            </h3>

            {/* Proposal Summary Box */}
            <div className="rounded-2xl border border-caramel/30 bg-espresso-dark/90 p-6 text-xs space-y-3">
              <span className="font-bold uppercase tracking-widest text-caramel-light block border-b border-caramel/20 pb-2">
                Event Summary:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-cream/80">
                <div>
                  <span className="text-cream/50 block">Contact:</span>
                  <strong>{formData.fullName}</strong> ({formData.email})
                </div>
                <div>
                  <span className="text-cream/50 block">Phone:</span>
                  <strong>{formData.phone}</strong>
                </div>
                <div>
                  <span className="text-cream/50 block">Event Type & Date:</span>
                  <strong className="text-caramel-light">{formData.eventType}</strong> — {formData.eventDate || "Date TBD"}
                </div>
                <div>
                  <span className="text-cream/50 block">Location & Guests:</span>
                  <strong>{formData.eventLocation || "TBD"}</strong> ({formData.guestCount})
                </div>
                <div>
                  <span className="text-cream/50 block">Package Tier:</span>
                  <strong className="capitalize text-caramel-light">{formData.preferredPackage.replace("-", " ")}</strong>
                </div>
                <div>
                  <span className="text-cream/50 block">Duration:</span>
                  <strong>{formData.serviceDuration}</strong>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                name="specialRequests"
                rows={3}
                placeholder="Share any special branding requests, power setup details, custom cup sleeve logos..."
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3.5 text-xs text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
              />
            </div>

            {/* Reassurance Note */}
            <div className="flex items-center gap-2 rounded-2xl border border-caramel/20 bg-caramel/10 p-4 text-xs text-cream/80">
              <ShieldCheck className="h-5 w-5 text-caramel shrink-0" />
              <span>
                <strong>No payment required.</strong> We'll review your event details and get back to you with a tailored proposal and availability.
              </span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-caramel/20">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-2 rounded-full border border-caramel/30 bg-espresso-dark/80 px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream/80 hover:border-caramel hover:text-cream transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark px-9 py-4 text-xs font-bold uppercase tracking-widest text-espresso shadow-xl hover:scale-105 transition-all disabled:opacity-50"
            >
              <span>{isSubmitting ? "Submitting..." : "Request My Quote"}</span>
              <Sparkles className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
