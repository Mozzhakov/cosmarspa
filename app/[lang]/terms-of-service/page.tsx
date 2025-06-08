import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function TermsOfServicePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { title, lastUpdated, sections } = dictionary.termsOfService;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading mb-2">{title}</h1>
      <p className="text-sm text-zinc-500 mb-8">{lastUpdated}</p>

      <div className="space-y-6">
        {sections.map((section: any, idx: number) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-zinc-700 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
