"use client";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import Link from "next/link";

interface TestimonialsProps {
  dictionary: {
    testimonials: {
      title: string;
      subtitle: string;
      link: string;
    };
  };
  lang: string;
}

interface Review {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  text: string;
  rating: number;
  relative_time_description: string;
}

export default function Testimonials({ dictionary, lang }: TestimonialsProps) {
  const { title, subtitle, link } = dictionary.testimonials;
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Ошибка загрузки отзывов:", err));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
          <p className="text-zinc-700 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex ml-auto mr-auto">
          {reviews.map((review, idx) =>
            idx <= 2 ? (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <a
                      href={review.author_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-lg hover:underline block"
                    >
                      {review.author_name}
                    </a>
                    <p className="text-zinc-600 text-sm">
                      {review.relative_time_description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <FcGoogle className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "text-yellow-500"
                          : "text-zinc-300"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-700 mb-3">{review.text}</p>
              </div>
            ) : null,
          )}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            aria-label="Learn more about our reviews"
            href={`/${lang}/reviews`}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#B7BBAC] hover:bg-[#999D8F] transition-colors duration-200"
          >
            {link}
          </Link>
        </div>
      </div>
    </section>
  );
}
