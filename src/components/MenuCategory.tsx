"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Coffee, Sparkles, ArrowRight, Check } from "lucide-react";
import { menuCategories, menuData, MenuItem } from "@/data/menu";

export default function MenuCategory() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredMenu =
    activeCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-caramel text-espresso shadow-lg shadow-caramel/20 font-bold scale-105"
                : "border border-caramel/30 bg-espresso/60 text-cream/80 hover:border-caramel hover:text-cream"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Drink Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              item.isSignature
                ? "border-caramel/40 bg-gradient-to-br from-espresso via-[#231710] to-espresso-dark text-cream shadow-xl"
                : "border-caramel/20 bg-cream text-espresso shadow-sm"
            }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                    item.isSignature
                      ? "border-caramel/50 bg-caramel/20 text-caramel-light"
                      : "border-beige bg-cream-dark text-caramel-dark"
                  }`}
                >
                  {item.category.replace("-", " ")}
                </span>
                {item.isSignature && (
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-caramel-light bg-caramel/20 px-2 py-0.5 rounded-full">
                    <Sparkles className="h-3 w-3 fill-caramel-light" />
                    Signature
                  </span>
                )}
              </div>

              {/* Drink Name */}
              <h4
                className={`font-serif text-xl font-bold ${
                  item.isSignature ? "text-cream" : "text-espresso"
                }`}
              >
                {item.name}
              </h4>

              {/* Description */}
              <p
                className={`mt-2 text-xs leading-relaxed ${
                  item.isSignature ? "text-cream/80" : "text-text-muted"
                }`}
              >
                {item.description}
              </p>

              {/* Ingredients list if signature */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div className="mt-3 pt-3 border-t border-caramel/20">
                  <span className="text-[10px] uppercase font-bold text-caramel-light tracking-wider block mb-1">
                    Ingredients:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-espresso-dark/60 text-cream/70 px-2 py-0.5 rounded-md border border-caramel/20"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mt-4 pt-3 border-t border-caramel/10 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-caramel font-medium">
                <Coffee className="h-3.5 w-3.5" />
                <span>Available Hot & Iced</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Menu Variation Note & CTA */}
      <div className="mt-12 text-center rounded-2xl border border-caramel/30 bg-espresso/80 p-8 backdrop-blur-md text-cream max-w-3xl mx-auto space-y-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-caramel-light">
          Note: Menu selections may vary depending on package and event requirements.
        </p>
        <p className="text-sm text-cream/70">
          Want custom branded drink cups, specialized syrup flavors, or milk alternatives? We tailor our coffee menu to fit your guest preferences.
        </p>
        <div className="pt-2">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-caramel via-[#D99A66] to-caramel-dark px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-espresso shadow-lg hover:scale-105 transition-transform"
          >
            <span>Ask About Our Packages</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
