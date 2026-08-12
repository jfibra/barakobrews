"use client";

import React, { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";
import LightboxModal from "./LightboxModal";
import { galleryCategories, galleryData, GalleryItem } from "@/data/gallery";
import { Maximize2 } from "lucide-react";

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeTab);

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === cat
                ? "bg-caramel text-espresso shadow-md font-bold scale-105"
                : "border border-caramel/30 bg-espresso/60 text-cream/80 hover:border-caramel hover:text-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-caramel/20 bg-espresso shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-caramel hover:shadow-2xl"
          >
            <PlaceholderImage
              label={item.imageLabel}
              src={item.src}
              subtext={item.subtext}
              aspectRatio={item.aspectRatio}
              category={item.category}
              dimensions="1200 x 900"
              icon="camera"
            />

            {/* Hover Expand Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-espresso-dark/90 via-espresso/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-caramel text-espresso shadow-lg mb-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <Maximize2 className="h-5 w-5" />
              </div>
              <h4 className="font-serif text-base font-bold text-cream text-center">
                {item.title}
              </h4>
              <span className="text-[10px] font-mono text-caramel-light uppercase tracking-widest mt-1">
                Click to Expand Lightbox
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
