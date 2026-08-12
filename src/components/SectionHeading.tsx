import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow = "BARAKOBREWS",
  title,
  subtitle,
  centered = true,
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-4xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-[0.25em] mb-4 ${
            isDark ? "text-caramel-light" : "text-caramel-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] ${
          isDark ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${isDark ? "text-cream/80" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
