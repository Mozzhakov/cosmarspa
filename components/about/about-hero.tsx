import Image from "next/image";

interface AboutHeroProps {
  dictionary: {
    title: string;
    subtitle: string;
  };
}

export default function AboutHero({ dictionary }: AboutHeroProps) {
  const { title, subtitle } = dictionary;

  return (
    <div className="mb-16">
      <h1 className="font-heading text-4xl md:text-5xl mb-4 text-center">
        {title}
      </h1>
      <p className="text-zinc-700 text-center max-w-3xl mx-auto mb-12">
        {subtitle}
      </p>

      <div className="relative h-80 md:h-96 rounded-lg overflow-visible">
        <Image
          src="/bg-img.webp"
          alt="About CosmarSpa"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
