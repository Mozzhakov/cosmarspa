"use client";
import { useState } from "react";
import ServiceCategories from "./service-categories";
import ServicesList from "./services-list";

interface ServicesPageProps {
  dictionary: {
    title: string;
      categories: {
          all: string;
          facials: string;
          facial_addons: string;
          waxing: string;
          waxing_men: string;
          laser: string;
          laser_men: string;
          laser_package: string;
          laser_package_men: string;
          rejuvenation: string;
          vascular: string;
      };
  };
}

export default function ServicePage({ dictionary }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState("All Services");

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl mb-8 text-center">
        {dictionary.title}
      </h1>
      <ServiceCategories
        dictionary={dictionary}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ServicesList dictionary={dictionary} activeCategory={activeCategory} />
    </div>
  );
}
