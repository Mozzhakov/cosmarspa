"use client";

import { useEffect, useState } from "react";
import ReviewsList from "./reviews-list";
import ReviewModal from "@/components/reviews/review-modal";

interface Props {
  dictionary: {
    title: string;
    subtitle: string;
    modal_btn: string;
    google_reviews: string;
    local_reviews: string;
    form: {
      title: string;
      name: string;
      email: string;
      sn_link: string;
      rating: string;
      comment: string;
    };
  };
}

interface LocalReview {
  _id: string;
  name: string;
  email: string;
  comment: string;
  rating: number;
  sn_link?: string;
  createdAt: string;
}

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  text: string;
  rating: number;
  relative_time_description: string;
}

export default function ReviewsClient({ dictionary }: Props) {
  const [googleReviews, setGoogleReviews] = useState<GoogleReview[]>([]);
  const [localReviews, setLocalReviews] = useState<LocalReview[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const resGoogle = await fetch("/api/google-reviews");
      const googleData = await resGoogle.json();

      const resLocal = await fetch("/api/reviews");
      const localData = await resLocal.json();

      setGoogleReviews(googleData);
      setLocalReviews(localData);
    } catch (err) {
      console.error("Ошибка загрузки отзывов:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#B7BBAC] text-white px-6 py-3 rounded-md hover:bg-[#999D8F] transition mb-9"
        >
          {dictionary.modal_btn}
        </button>
      </div>
      <ReviewsList
        dictionary={dictionary}
        googleReviews={googleReviews}
        localReviews={localReviews}
        loading={loading}
      />
      <ReviewModal
        dictionary={dictionary}
        onReviewSubmitted={fetchReviews}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
