import React from "react";
import Link from "next/link";
import { Coffee, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { businessInfo, navLinks } from "@/data/config";

export default function Footer() {
  return (
    <footer className="relative border-t border-caramel/20 bg-coffee-pattern pt-16 pb-12 text-cream">
      {/* Decorative Top Accent Glow */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-caramel/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo theme="dark" showSubtitle={true} />
            <p className="text-sm leading-relaxed text-cream/70 max-w-sm">
              BarakoBrews brings freshly crafted coffee, professional baristas, and a memorable café experience straight to your wedding, corporate event, or private party.
            </p>
            <div className="rounded-2xl border border-caramel/20 bg-espresso/60 p-4 backdrop-blur-md">
              <p className="font-serif text-sm font-semibold text-caramel-light">
                "{businessInfo.tagline}"
              </p>
              <p className="mt-1 text-xs text-cream/50">
                Fresh coffee. Great company. Memorable moments.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 col-span-6 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-caramel-light">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-cream/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-caramel-light hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 col-span-6 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-caramel-light">
              Event Services
            </h3>
            <ul className="space-y-2.5 text-xs text-cream/70">
              <li>
                <Link href="/services#weddings" className="hover:text-caramel-light">
                  Wedding Coffee Catering
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="hover:text-caramel-light">
                  Corporate Event Bar
                </Link>
              </li>
              <li>
                <Link href="/services#private-parties" className="hover:text-caramel-light">
                  Private Parties & Birthdays
                </Link>
              </li>
              <li>
                <Link href="/services#brand-events" className="hover:text-caramel-light">
                  Brand Activations & Launches
                </Link>
              </li>
              <li>
                <Link href="/services#conferences" className="hover:text-caramel-light">
                  Conferences & Summits
                </Link>
              </li>
              <li>
                <Link href="/services#custom-events" className="hover:text-caramel-light">
                  Custom Event Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-caramel-light">
              Contact & Area
            </h3>
            <div className="space-y-3 text-xs text-cream/70">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 shrink-0 text-caramel mt-0.5" />
                <span>{businessInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 shrink-0 text-caramel mt-0.5" />
                <span>{businessInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-caramel mt-0.5" />
                <span>{businessInfo.serviceArea}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-caramel/30 bg-espresso/80 text-caramel-light transition-all hover:border-caramel hover:bg-caramel hover:text-espresso"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-caramel/30 bg-espresso/80 text-caramel-light transition-all hover:border-caramel hover:bg-caramel hover:text-espresso"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <Link
                href="/quote"
                className="flex items-center gap-1 text-xs font-semibold text-caramel-light hover:underline ml-2"
              >
                <span>Book Event</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-caramel/15 pt-8 text-xs text-cream/40 sm:flex-row gap-4">
          <p>© {new Date().getFullYear()} BarakoBrews. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-cream/70 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cream/70 cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
