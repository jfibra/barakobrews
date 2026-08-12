import React from "react";
import { MessageSquare, Coffee, Settings, Sparkles } from "lucide-react";

export const stepsData = [
  {
    step: "01",
    title: "Tell Us About Your Event",
    description: "Share your event date, location, guest count, and coffee preferences through our quick quote form.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Choose Your Experience",
    description: "Select a package (Essential, Signature, or Grand) or request a customized beverage menu.",
    icon: Coffee,
  },
  {
    step: "03",
    title: "We Prepare Everything",
    description: "Our team handles full setup, equipment, specialty ingredients, cups, and professional baristas.",
    icon: Settings,
  },
  {
    step: "04",
    title: "Enjoy the Brew",
    description: "We arrive on time, serve your guests freshly crafted drinks, and create a memorable café atmosphere.",
    icon: Sparkles,
  },
];

export default function ProcessStep() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stepsData.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item.step}
            className="group relative flex flex-col justify-between rounded-2xl border border-caramel/20 bg-cream p-6 shadow-sm transition-all duration-300 hover:border-caramel hover:shadow-md hover:-translate-y-1"
          >
            <div>
              {/* Top Step Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-3xl font-bold text-caramel-dark opacity-90">
                  {item.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-espresso text-caramel-light transition-transform group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-caramel-dark transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>

            {/* Connecting Step Arrow indicator */}
            {idx < stepsData.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-caramel/40">
                →
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
