"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Contact submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-caramel/30 bg-espresso p-8 text-center text-cream shadow-xl space-y-4">
        <CheckCircle2 className="h-10 w-10 text-caramel mx-auto" />
        <h4 className="font-serif text-2xl font-bold">Message Sent!</h4>
        <p className="text-xs text-cream/70">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="text-xs text-caramel-light font-bold underline pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-caramel-dark mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Maria Santos"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-beige bg-cream-dark p-3 text-sm text-espresso placeholder-text-muted/50 focus:border-caramel focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-caramel-dark mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-beige bg-cream-dark p-3 text-sm text-espresso placeholder-text-muted/50 focus:border-caramel focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-caramel-dark mb-1">
          Subject
        </label>
        <input
          type="text"
          placeholder="e.g. General Inquiry / Venue Partnership"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-xl border border-beige bg-cream-dark p-3 text-sm text-espresso placeholder-text-muted/50 focus:border-caramel focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-caramel-dark mb-1">
          Message *
        </label>
        <textarea
          rows={5}
          required
          placeholder="Write your message or inquiry here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-xl border border-beige bg-cream-dark p-4 text-sm text-espresso placeholder-text-muted/50 focus:border-caramel focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-espresso py-4 text-xs font-bold uppercase tracking-widest text-cream hover:bg-caramel hover:text-espresso transition-all shadow-md disabled:opacity-50"
      >
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
