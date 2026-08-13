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
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-espresso-dark border border-caramel/40 shadow-md transition-all group-hover:border-caramel">
          <img
            src="/images/logo/logo-barako-icon.png"
            alt="BarakoBrews Icon Mark"
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
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
      {/* Official B Mark Icon Badge */}
      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3D2012] to-espresso-dark border border-caramel/40 shadow-md group-hover:border-caramel transition-all">
        <img
          src="/images/logo/logo-barako-icon.png"
          alt="BarakoBrews Icon Mark"
          className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(175,129,85,0.4)] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-sans text-xl sm:text-2xl font-extrabold tracking-tight leading-none ${isDarkTheme ? "text-cream" : "text-espresso"
            }`}
        >
          Barako<span className="text-caramel">Brews</span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-semibold uppercase tracking-[0.25em] mt-1 ${isDarkTheme ? "text-caramel-light/90" : "text-caramel-dark"
              }`}
          >
            Mobile Coffee Catering
          </span>
        )}
      </div>
    </Link>
  );
}
