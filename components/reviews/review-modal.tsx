// "use client";
//
// import { useEffect } from "react";
// import ReviewForm from "./review-form";
// import { IoClose } from "react-icons/io5";
//
// interface LocalReview {
//   _id: string;
//   name: string;
//   email: string;
//   comment: string;
//   rating: number;
//   sn_link?: string;
//   createdAt: string;
// }
//
// interface ReviewModalProps {
//   dictionary: any;
//   onReviewSubmitted: (review: LocalReview) => void;
//   open: boolean;
//   onClose: () => void;
// }
//
// export default function ReviewModal({
//   open,
//   onClose,
//   dictionary,
//   onReviewSubmitted,
// }: ReviewModalProps) {
//   useEffect(() => {
//     if (open) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [open]);
//
//   if (!open) return null;
//
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };
//
//   return (
//     <div
//       className="absolute inset-0 z-50 bg-black/50 flex justify-center items-center px-4 h-full overflow-y-auto"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white max-w-2xl w-full rounded-lg relative shadow-lg overflow-y-auto max-h-[90vh]">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-[#B7BBAC] hover:text-[#999D8F] text-2xl font-bold"
//           aria-label="Close"
//         >
//           <IoClose />
//         </button>
//         <ReviewForm
//           dictionary={dictionary}
//           onReviewSubmitted={(review) => {
//             onReviewSubmitted(review);
//             onClose();
//           }}
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect } from "react";
import ReviewForm from "./review-form";
import { IoClose } from "react-icons/io5";

interface LocalReview {
  _id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
  sn_link?: string;
  createdAt: string;
}

interface ReviewModalProps {
  dictionary: any;
  onReviewSubmitted: (review: LocalReview) => void;
  open: boolean;
  onClose: () => void;
}

export default function ReviewModal({
  open,
  onClose,
  dictionary,
  onReviewSubmitted,
}: ReviewModalProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center px-0 sm:px-4 h-full overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        className={`
      bg-white 
      w-full h-full 
      sm:w-full sm:max-w-2xl 
      sm:h-auto sm:rounded-lg 
      relative shadow-lg overflow-y-auto 
      max-h-screen sm:max-h-[90vh]
    `}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#B7BBAC] hover:text-[#999D8F] text-2xl font-bold"
          aria-label="Close"
        >
          <IoClose />
        </button>

        <div className="">
          <ReviewForm
            dictionary={dictionary}
            onReviewSubmitted={(review) => {
              onReviewSubmitted(review);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}
