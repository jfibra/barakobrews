"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import { GalleryItem } from "@/data/gallery";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-dark/95 p-4 sm:p-6 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-3xl border border-caramel/30 bg-espresso p-6 shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-caramel/20 pb-4 text-cream">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-light bg-caramel/20 px-3 py-1 rounded-full">
              {item.category}
            </span>
            <h3 className="mt-2 font-serif text-xl font-bold">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-caramel/30 bg-espresso-dark text-cream hover:bg-caramel hover:text-espresso transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Visual Container */}
        <div className="relative">
          <PlaceholderImage
            label={item.imageLabel}
            src={item.src}
            subtext={item.subtext}
            aspectRatio={item.aspectRatio}
            category={item.category}
            dimensions="1600 x 1200"
            className="max-h-[60vh] object-cover"
          />
        </div>

        {/* Caption & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-caramel/20 text-xs text-cream/70">
          <p className="text-center sm:text-left">{item.subtext}</p>
          <a
            href="/get-a-quote"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-caramel px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-espresso hover:bg-caramel-light transition-all shadow-md"
          >
            <span>Want this experience at your event? Get a Quote →</span>
          </a>
        </div>

        {/* Prev / Next Navigation Controls */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-caramel/40 bg-espresso/90 text-caramel-light hover:bg-caramel hover:text-espresso transition-all shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-caramel/40 bg-espresso/90 text-caramel-light hover:bg-caramel hover:text-espresso transition-all shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
