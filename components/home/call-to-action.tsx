import Link from "next/link";

interface CallToActionProps {
  dictionary: {
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  lang: string;
}

export default function CallToAction({ dictionary, lang }: CallToActionProps) {
  const { title, subtitle, button } = dictionary.cta;

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-zinc-700 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link
          href={`/${lang}/appointment`}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#B7BBAC] hover:bg-[#999D8F] transition-colors duration-200"
        >
          {button}
        </Link>
      </div>
    </section>
  );
}
