import React from "react";
import { Coffee, UserCheck, Award, Sparkles, Sliders, Smile } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  UserCheck,
  Award,
  Sparkles,
  Sliders,
  Smile,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || Coffee;

  return (
    <div className="group relative rounded-2xl border border-caramel/20 bg-cream p-6 shadow-sm transition-all duration-300 hover:border-caramel hover:shadow-md hover:-translate-y-1">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-espresso text-caramel-light transition-transform duration-300 group-hover:scale-110 group-hover:bg-caramel group-hover:text-espresso">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-xl font-bold text-espresso group-hover:text-caramel-dark transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
