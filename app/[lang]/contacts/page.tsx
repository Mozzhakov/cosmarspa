import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import ContactForm from "@/components/contacts/contact-form";
import ContactInfo from "@/components/contacts/contact-info";
import Map from "@/components/contacts/map";

export default async function Contacts({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl md:text-5xl mb-8 text-center">
        {dictionary.contacts.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo dictionary={dictionary.contacts} />
        <ContactForm dictionary={dictionary.contacts} />
      </div>
      <div className="mt-12">
        <Map dictionary={dictionary.contacts} />
      </div>
    </div>
  );
}
