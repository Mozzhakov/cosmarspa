interface FounderProps {
  dictionary: {
    founder: {
      title: string;
      introduction: string;
      story: string;
      philosophy: string;
    };
  };
}

export default function Founder({ dictionary }: FounderProps) {
  const { title, introduction, story, philosophy } = dictionary.founder;

  return (
    <div className="max-w-3xl mx-auto my-16">
      <h2 className="font-heading text-3xl mb-6 text-center">{title}</h2>

      <p className="text-zinc-700 text-lg italic mb-6 text-center">
        {introduction}
      </p>

      <p className="text-zinc-700 leading-relaxed whitespace-pre-line mb-8">
        {story}
      </p>

      <p className="text-zinc-700 leading-relaxed whitespace-pre-line">
        {philosophy}
      </p>
    </div>
  );
}
