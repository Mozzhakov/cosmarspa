"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQAccordionProps {
  dictionary: {
    subtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

export default function FAQAccordion({ dictionary }: FAQAccordionProps) {
  const faqs = dictionary.questions;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <p className="text-zinc-700 text-center mb-8">{dictionary.subtitle}</p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-zinc-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-neutral-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-heading text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-zinc-700" size={20} />
              ) : (
                <ChevronDown className="text-zinc-700" size={20} />
              )}
            </button>

            {openIndex === index && (
              <div className="p-4 bg-neutral-50 border-t border-zinc-200">
                <p className="text-zinc-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
