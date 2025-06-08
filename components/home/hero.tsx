import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  lang: string;
}

export default function Hero({ dictionary, lang }: HeroProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-img-home.webp"
          alt="Beauty salon background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-sm"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl/tight md:text-6xl/tight lg:text-7xl/tight text-white mb-6 ">
          {dictionary.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          {dictionary.hero.subtitle}
        </p>
        <Link
          href={`/${lang}/appointment`}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-[#B7BBAC] hover:bg-[#999D8F] transition-colors duration-200"
        >
          {dictionary.hero.cta}
        </Link>
      </div>
    </section>
  );
}
