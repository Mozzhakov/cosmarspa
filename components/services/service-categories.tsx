"use client";

import { categoryMap } from "@/lib/categoryMap";

interface ServiceCategoriesProps {
  dictionary: {
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
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ServiceCategories({
  dictionary,
  activeCategory,
  onCategoryChange,
}: ServiceCategoriesProps) {
  const categories = Object.entries(categoryMap).map(([label, key]) => ({
    id: label, // backend-raw name
    label: dictionary.categories[key as keyof typeof dictionary.categories],
  }));
  // const categories = [
  //   { id: "all", name: dictionary.categories.all },
  //   { id: "facials", name: dictionary.categories.facials },
  //   { id: "facial_addons", name: dictionary.categories.facial_addons },
  //   { id: "waxing", name: dictionary.categories.waxing },
  //   { id: "waxing_men", name: dictionary.categories.waxing_men },
  //   { id: "laser", name: dictionary.categories.laser },
  //   { id: "laser_men", name: dictionary.categories.laser_men },
  //   { id: "laser_package", name: dictionary.categories.laser_package },
  //   { id: "laser_package_men", name: dictionary.categories.laser_package_men },
  //   { id: "rejuvenation", name: dictionary.categories.rejuvenation },
  //   { id: "vascular", name: dictionary.categories.vascular },
  // ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            activeCategory === category.id
              ? "bg-[#999D8F] text-white"
              : "bg-white text-zinc-700 hover:bg-[#B7BBAC]"
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
