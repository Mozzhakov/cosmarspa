import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import FAQAccordion from "@/components/qa/faq-accordion";
import AskQuestion from "@/components/qa/ask-question";

export default async function QA({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl mb-8 text-center">
        {dictionary.qa.title}
      </h1>
      <FAQAccordion dictionary={dictionary.qa} />
      <AskQuestion dictionary={dictionary.qa} />
    </div>
  );
}
