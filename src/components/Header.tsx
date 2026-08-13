"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Coffee, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import Logo from "./Logo";
import { navLinks, businessInfo } from "@/data/config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-espresso-dark/95 backdrop-blur-xl border-b border-caramel/35 py-3 shadow-2xl"
            : "bg-espresso-dark/90 backdrop-blur-lg border-b border-caramel/20 py-4 shadow-xl"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <Logo theme="dark" showSubtitle={true} />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
            <div className="flex items-center gap-1.5 rounded-full border border-caramel/30 bg-espresso/80 px-4 py-1.5 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                      isActive
                        ? "text-caramel-light font-bold"
                        : "text-cream/80 hover:text-caramel-light hover:bg-caramel/10"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-caramel" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/get-a-quote"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-caramel via-[#D2925B] to-caramel-dark px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg shadow-caramel/20 transition-all duration-300 hover:shadow-caramel/40 hover:scale-105"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-caramel/30 bg-espresso/90 text-cream shadow-md backdrop-blur-md transition-all active:scale-95 md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6 text-caramel-light" />
          </button>
        </div>
      </header>

      {/* Cool Mobile Slide-Over Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-espresso-dark/80 backdrop-blur-sm transition-opacity animate-fade-in"
          />

          {/* Drawer Content Panel */}
          <div className="relative flex w-full max-w-sm flex-col justify-between overflow-y-auto border-l border-caramel/30 bg-espresso-dark p-6 text-cream shadow-2xl animate-slide-left z-10 font-sans">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-caramel/20 pb-5">
              <Logo theme="dark" showSubtitle={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-caramel/30 bg-espresso text-caramel-light hover:bg-caramel hover:text-espresso transition-all"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Items List */}
            <div className="my-6 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-caramel-light/80 block px-3 mb-2">
                NAVIGATION
              </span>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-bold tracking-wide transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-caramel/30 to-caramel/10 text-caramel-light border border-caramel/40 shadow-md"
                        : "text-cream/90 hover:bg-espresso hover:text-caramel-light"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Coffee className={`h-4 w-4 ${isActive ? "text-caramel" : "text-cream/40"}`} />
                      {link.name}
                    </span>
                    <ArrowRight className={`h-4 w-4 opacity-70 ${isActive ? "text-caramel-light" : "text-cream/40"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Actions & Contact */}
            <div className="space-y-4 border-t border-caramel/20 pt-6">
              <Link
                href="/get-a-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#C49466] to-caramel-dark px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-espresso shadow-xl shadow-caramel/20 hover:scale-[1.02] transition-all"
              >
                <span>Get a Quote</span>
                <Sparkles className="h-4 w-4" />
              </Link>

              {/* SoCal Contact Snippet */}
              <div className="rounded-2xl border border-caramel/20 bg-espresso/60 p-4 text-xs space-y-2 text-cream/70 font-normal">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-caramel shrink-0" />
                  <span>{businessInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-caramel shrink-0" />
                  <span>{businessInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-caramel shrink-0" />
                  <span className="truncate">Southern California Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
