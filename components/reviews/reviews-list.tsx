import Image from "next/image";
import { SyncLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";

interface ReviewsListProps {
  dictionary: {
    subtitle: string;
    google_reviews: string;
    local_reviews: string;
  };
  localReviews: LocalReview[];
  googleReviews: GoogleReview[];
  loading: boolean;
}

interface LocalReview {
  _id: string;
  name: string;
  comment: string;
  rating: number;
  email: string;
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

export default function ReviewsList({
  dictionary,
  localReviews,
  googleReviews,
  loading,
}: ReviewsListProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <SyncLoader size={20} color="#B7BBAC" />
      </div>
    );
  }

  return (
    <div className="mb-16">
      <p className="text-zinc-700 text-center mb-8">{dictionary.subtitle}</p>
      <h2 className="text-center text-lg my-8 font-heading">
        {dictionary.google_reviews}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex ml-auto mr-auto">
        {googleReviews.map((review, idx) => (
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
                    star <= review.rating ? "text-yellow-500" : "text-zinc-300"
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
        ))}
      </div>
      <h3 className="text-center text-lg italic my-8 font-heading">
        {dictionary.local_reviews}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {localReviews.map((review) => (
          <div key={review._id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={`/placeholder.svg?height=100&width=100&text=${encodeURIComponent(
                    review.name
                      .split(" ")
                      .map((word) => word[0])
                      .join(""),
                  )}`}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg">{review.name}</h3>
                <p className="text-zinc-600 text-sm">
                  {formatDate(review.createdAt)}
                </p>
              </div>
            </div>

            <div className="flex mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${star <= review.rating ? "text-yellow-500" : "text-zinc-300"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-zinc-700">{review.comment}</p>

            {review.sn_link && (
              <a
                href={review.sn_link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-blue-500 hover:underline"
              >
                {review.sn_link}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
