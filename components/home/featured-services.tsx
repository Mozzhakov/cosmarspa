import Image from "next/image";
import Link from "next/link";

interface FeaturedServicesProps {
  dictionary: {
    featuredServices: {
      title: string;
      subtitle: string;
      services: Array<{
        title: string;
        description: string;
      }>;
      link: string;
    };
  };
  lang: string;
}

// export default function FeaturedServices({
//   dictionary,
//   lang,
// }: FeaturedServicesProps) {
//   const { title, subtitle, services, link } = dictionary.featuredServices;
//
//   return (
//     <section className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
//           <p className="text-zinc-700 max-w-2xl mx-auto">{subtitle}</p>
//         </div>
//
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-sm overflow-hidden"
//             >
//               <div className="h-48 relative">
//                 <Image
//                   src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(service.title)}`}
//                   alt={service.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-heading text-xl mb-2">{service.title}</h3>
//                 <p className="text-zinc-700 mb-4">{service.description}</p>
//                 <Link
//                   href={`/${lang}/services`}
//                   className="inline-flex items-center text-zinc-700 hover:text-[#999D8F]"
//                   aria-label="Learn more about our services"
//                 >
//                   {link}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4 ml-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function FeaturedServices({
                                           dictionary,
                                           lang,
                                         }: FeaturedServicesProps) {
  const { title, subtitle, services, link } = dictionary.featuredServices;

  return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
            <p className="text-zinc-700 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-zinc-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600  leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                      href={`/${lang}/services`}
                      className="text-sm text-[#B7BBAC] hover:text-[#999D8F] inline-flex items-center font-medium"
                  >
                    {link}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
