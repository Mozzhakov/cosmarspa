import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ServicePage from "@/components/services/service-page";

export default async function Services({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <ServicePage dictionary={dictionary.services} />;
}
