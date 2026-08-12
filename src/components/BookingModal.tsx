"use client";

import React, { useState } from "react";
import { Calendar, X, CheckCircle2, Clock, MapPin, Coffee, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultPackage = "Signature Brew",
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    location: "",
    package: defaultPackage,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.eventDate) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Booking submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-dark/95 p-4 sm:p-6 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl border border-caramel/30 bg-espresso p-6 sm:p-8 text-cream shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-caramel/20 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full">
              Quick Date Reservation
            </span>
            <h3 className="font-serif text-2xl font-bold mt-2">Book Your Event Date</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-caramel/30 bg-espresso-dark text-cream hover:bg-caramel hover:text-espresso transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="h-12 w-12 text-caramel mx-auto" />
            <h4 className="font-serif text-2xl font-bold">Booking Request Received!</h4>
            <p className="text-xs text-cream/70">
              We have received your date reservation for <strong className="text-caramel-light">{formData.eventDate}</strong>. Our team will verify calendar availability and reach out to confirm your booking.
            </p>
            <button
              onClick={onClose}
              className="mt-4 rounded-full bg-caramel px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-espresso"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maria Santos"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+63 900 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3 text-sm text-cream focus:border-caramel focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-caramel-light mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Metro Manila"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl border border-caramel/30 bg-espresso-dark/90 p-3 text-sm text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-all disabled:opacity-50"
            >
              <span>{isSubmitting ? "Reserving Date..." : "Reserve Event Date"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
