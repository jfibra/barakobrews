"use client";

import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { faqCategories, faqData, FAQItem } from "@/data/faq";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("travel-distance");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQ = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? "bg-caramel text-espresso font-bold shadow-md"
                  : "border border-caramel/30 bg-espresso/60 text-cream/80 hover:border-caramel"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/50" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-caramel/30 bg-espresso/80 pl-9 pr-4 py-2 text-xs text-cream placeholder-cream/40 focus:border-caramel focus:outline-none"
          />
        </div>
      </div>

      {/* Accordion Items List */}
      <div className="space-y-4">
        {filteredFAQ.length === 0 ? (
          <div className="rounded-2xl border border-caramel/20 bg-cream p-8 text-center text-text-muted">
            <p>No matching questions found. Please adjust your search or category filter.</p>
          </div>
        ) : (
          filteredFAQ.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-caramel bg-espresso text-cream shadow-xl"
                    : "border-caramel/20 bg-cream text-espresso shadow-sm hover:border-caramel/40"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-bold pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                      isOpen
                        ? "border-caramel/50 bg-caramel text-espresso rotate-180"
                        : "border-caramel/30 bg-cream-dark text-espresso"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-caramel/20 text-sm leading-relaxed text-cream/80 animate-fade-in">
                    <p className="mt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
