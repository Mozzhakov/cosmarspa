import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ReviewsClient from "@/components/reviews/review-client";


export default async function Reviews({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl mb-8 text-center">
        {dictionary.reviews.title}
      </h1>
      <ReviewsClient dictionary={dictionary.reviews} />

    </div>
  );
}
