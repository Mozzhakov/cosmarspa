import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import AboutHero from "@/components/about/about-hero";
// import Team from "@/components/about/team"
import Founder from "@/components/about/founder";
import Diplomas from "@/components/about/diplomas";

const diplomas: string[] = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
];
export default async function About({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <AboutHero dictionary={dictionary.about} />
      <Founder dictionary={dictionary.about} />
      <Diplomas diplomas={diplomas} dictionary={dictionary.about} />
    </div>
  );
}
