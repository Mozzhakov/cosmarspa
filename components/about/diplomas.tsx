// import React from "react";
//
// export interface DiplomasProps {
//   diplomas: string[];
//   dictionary: {
//     certifications: {
//       title: string;
//     };
//   };
// }
//
// export default function Diplomas({ diplomas, dictionary }: DiplomasProps) {
//   return (
//     <div>
//       <h2 className="font-heading text-3xl mb-8 text-center">
//         {dictionary.certifications.title}
//       </h2>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20">
//         {diplomas.map((el, idx) => {
//           return (
//             <li key={idx}>
//               <img
//                 src={`/diplomas/${el}`}
//                 className="h-[200px] w-full object-contain"
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface DiplomasProps {
  diplomas: string[];
  dictionary: {
    certifications: {
      title: string;
    };
  };
}

export default function Diplomas({ diplomas, dictionary }: DiplomasProps) {
  const [index, setIndex] = useState(-1); // -1 means closed

  const slides = diplomas.map((el) => ({
    src: `/diplomas/${el}`,
  }));

  return (
    <div>
      <h2 className="font-heading text-3xl mb-8 text-center">
        {dictionary.certifications.title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        {diplomas.map((el, idx) => (
          <li key={idx}>
            <img
              src={`/diplomas/${el}`}
              onClick={() => setIndex(idx)}
              className="cursor-pointer transition-transform hover:scale-105 duration-200"
            />
          </li>
        ))}
      </ul>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        carousel={{ finite: false }} // бесконечная прокрутка
        animation={{ fade: 250 }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </div>
  );
}
