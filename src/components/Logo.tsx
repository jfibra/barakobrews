import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "primary" | "mark" | "horizontal" | "monogram";
  theme?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "primary",
  theme = "dark",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  const isDarkTheme = theme === "dark";

  // Monogram / Icon only
  if (variant === "monogram" || variant === "mark") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center gap-2 group ${className}`}
        aria-label="BarakoBrews Homepage"
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-caramel via-[#A87042] to-espresso-dark p-[1px] shadow-md transition-transform duration-300 group-hover:scale-105">
          <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-espresso px-2 py-1 font-serif text-sm font-bold tracking-widest text-caramel-light">
            BB
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-95 ${className}`}
      aria-label="BarakoBrews Mobile Coffee Catering"
    >
      {/* Monogram Badge */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-caramel via-[#B57C4B] to-espresso p-[1px] shadow-md transition-transform duration-300 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-espresso text-sm font-bold tracking-widest text-caramel-light font-serif">
          BB
        </div>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-serif text-xl font-bold tracking-tight leading-none ${
            isDarkTheme ? "text-cream" : "text-espresso"
          }`}
        >
          Barako<span className="text-caramel">Brews</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] font-medium uppercase tracking-[0.25em] mt-1 ${
              isDarkTheme ? "text-cream/60" : "text-text-muted"
            }`}
          >
            Mobile Coffee Catering
          </span>
        )}
      </div>
    </Link>
  );
}
