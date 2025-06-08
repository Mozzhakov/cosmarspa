import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Facebook, Instagram, Twitter } from "lucide-react";
import SocialLinks from "@/components/ui/social-links";
import Image from "next/image";

interface FooterProps {
  dictionary: {
    text: string;
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      home: string;
      about: string;
      services: string;
      contacts: string;
      qa: string;
      quick_links: string;
      support: string;
      location: string;
    };
  };
  lang: Locale;
}

export default function Footer({ dictionary, lang }: FooterProps) {
  return (
    <footer className="bg-neutral-50 border-t border-zinc-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={`/${lang}`}>
              <Image
                src={"/cosmarspa-logo.webp"}
                alt={"Cosmarspa logo"}
                width={100}
                height={50}
                className="rounded-lg"
              />
            </Link>
            <p className="text-zinc-700 mb-4 mt-2">{dictionary.text}</p>
            <SocialLinks />
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">
              {dictionary.links.quick_links}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}`}
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/services`}
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.services}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">
              {dictionary.links.support}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/contacts`}
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.contacts}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/qa`}
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.qa}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-zinc-700 hover:text-[#999D8F]"
                >
                  {dictionary.links.terms}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-4">
              {dictionary.links.location}
            </h3>
            <div className="h-48 w-full rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.320622675439!2d-95.45042718922662!3d30.142248074769718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647373415ef32f3%3A0xfb90b4aa2aa151c6!2sCosMarSpa%20Med%20Beauty!5e0!3m2!1sru!2sus!4v1748045741224!5m2!1sru!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-200 text-center">
          <p className="text-zinc-700 text-sm">{dictionary.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
