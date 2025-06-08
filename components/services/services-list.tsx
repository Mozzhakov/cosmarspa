// "use client";
//
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { SyncLoader } from "react-spinners";
//
// interface ServicesListProps {
//   dictionary: {
//     categories: {
//       all: string;
//       facials: string;
//       facial_addons: string;
//       waxing: string;
//       waxing_men: string;
//       laser: string;
//       laser_men: string;
//       laser_package: string;
//       rejuvenation: string;
//       vascular: string;
//     };
//   };
//   activeCategory: string;
// }
//
// interface Service {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   currency: string;
//   duration: number;
// }
//
// export default function ServicesList({
//   dictionary,
//   activeCategory,
// }: ServicesListProps) {
//   // const categories = dictionary.categories
//   const [services, setServices] = useState<Service[]>([]);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     fetch("/api/square-services")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(data);
//         setLoading(false);
//       });
//   }, []);
//
//   const filteredServices =
//     activeCategory === "All Services"
//       ? services
//       : services.filter((s) => s.category === activeCategory);
//
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <SyncLoader size={20} color="#B7BBAC" />
//       </div>
//     );
//   }
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//       {filteredServices.map((service) => (
//         <div
//           key={service.id}
//           className="bg-white rounded-lg shadow-sm overflow-hidden"
//         >
//           <div className="h-48 relative">
//             <Image
//               src={"/placeholder.svg"}
//               alt={service.name}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute top-0 right-0 bg-[#B7BBAC] text-zinc-700 px-3 py-1 m-2 rounded-md text-sm font-medium">
//               {service.price} {service.currency}
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="font-heading text-xl max-w-72">{service.name}</h3>
//               <span className="text-zinc-600 text-sm">
//                 {service.duration} min
//               </span>
//             </div>
//             <p className="text-[#B7BBAC] font-medium mb-3">
//               {service.category}
//             </p>
//             {/*<p className="text-zinc-700">{service.description}</p>*/}
//             <Link
//               href={`https://book.squareup.com/appointments/zmhtr72158hx0a/location/LDT09K6231WYR/services/${service.id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 px-4 py-2 bg-[#B7BBAC] hover:bg-[#999D8F] text-white rounded-md transition-colors duration-200"
//             >
//               Book now
//             </Link>
//             {/*<button className="mt-4 px-4 py-2 bg-[#B7BBAC] hover:bg-[#999D8F] text-zinc-700 rounded-md transition-colors duration-200">*/}
//             {/*  Book Now*/}
//             {/*</button>*/}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { categoryMap } from "@/lib/categoryMap";

interface ServicesListProps {
  dictionary: {
    categories: Record<string, string>;
  };
  activeCategory: string;
}

interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  currency: string;
  duration: number;
}

export default function ServicesList({
  dictionary,
  activeCategory,
}: ServicesListProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/square-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <SyncLoader size={20} color="#B7BBAC" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredServices.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="h-48 relative">
            <Image
              src={"/placeholder.svg"}
              alt={service.name}
              fill
              className="object-cover"
            />
            <div className="absolute top-0 right-0 bg-[#B7BBAC] text-zinc-700 px-3 py-1 m-2 rounded-md text-sm font-medium">
              {service.price} {service.currency}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-heading text-xl max-w-72">{service.name}</h3>
              <span className="text-zinc-600 text-sm">
                {service.duration} min
              </span>
            </div>
            <p className="text-[#B7BBAC] font-medium mb-3">
              {
                dictionary.categories[
                  categoryMap[
                    service.category
                  ] as keyof typeof dictionary.categories
                ]
              }
            </p>
            <Link
              href={`https://book.squareup.com/appointments/zmhtr72158hx0a/location/LDT09K6231WYR/services/${service.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-[#B7BBAC] hover:bg-[#999D8F] text-white rounded-md transition-colors duration-200"
            >
              Book now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
