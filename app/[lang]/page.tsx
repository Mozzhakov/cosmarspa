import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Hero from "@/components/home/hero";
import FeaturedServices from "@/components/home/featured-services";
import Testimonials from "@/components/home/testimonials";
import CallToAction from "@/components/home/call-to-action";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params }: Props) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

  return (
    <div>
      <Hero dictionary={dictionary.home} lang={lang} />
      <FeaturedServices dictionary={dictionary.home} lang={lang} />
      <Testimonials dictionary={dictionary.home} lang={lang} />
      <CallToAction dictionary={dictionary.home} lang={lang}/>
    </div>
  );
}
