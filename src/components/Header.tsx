"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Coffee } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/data/config";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-espresso/95 backdrop-blur-md border-b border-caramel/20 py-3.5 shadow-xl"
          : "bg-gradient-to-b from-espresso-dark/90 via-espresso-dark/60 to-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Logo theme="dark" showSubtitle={!isScrolled} />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          <div className="flex items-center gap-1 rounded-full border border-caramel/20 bg-espresso/60 px-3 py-1.5 backdrop-blur-md">
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-caramel/30 bg-espresso/80 text-cream backdrop-blur-md transition-colors hover:border-caramel md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-caramel-light" />
          ) : (
            <Menu className="h-6 w-6 text-caramel-light" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between border-t border-caramel/20 bg-espresso/95 px-6 py-8 backdrop-blur-xl animate-fade-in md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-serif font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-caramel/20 text-caramel-light border border-caramel/40"
                      : "text-cream/90 hover:bg-espresso-dark hover:text-caramel-light"
                  }`}
                >
                  <span>{link.name}</span>
                  <Coffee className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-caramel/20 pt-6">
            <Link
              href="/get-a-quote"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-caramel to-caramel-dark px-6 py-4 text-center text-sm font-bold uppercase tracking-widest text-espresso shadow-xl"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-center text-xs text-cream/50">
              Fresh coffee. Great company. Memorable moments.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
