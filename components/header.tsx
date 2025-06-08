// "use client"
//
// import { useState } from "react"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import LanguageSwitcher from "./language-switcher"
// import type { Locale } from "@/i18n/config"
//
// interface HeaderProps {
//   dictionary: {
//     home: string
//     about: string
//     reviews: string
//     services: string
//     contacts: string
//     qa: string
//   }
//   lang: Locale
// }
//
// export default function Header({ dictionary, lang }: HeaderProps) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }
//
//   return (
//       <header className="border-b border-zinc-200 relative z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <Link href={`/${lang}`} className="font-heading text-2xl">
//               <span className="font-heading">Beauty Salon</span>
//             </Link>
//
//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <Link href={`/${lang}`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.home}
//               </Link>
//               <Link href={`/${lang}/about`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.about}
//               </Link>
//               <Link href={`/${lang}/services`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.services}
//               </Link>
//               <Link href={`/${lang}/reviews`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.reviews}
//               </Link>
//               <Link href={`/${lang}/contacts`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.contacts}
//               </Link>
//               <Link href={`/${lang}/qa`} className="text-zinc-700 hover:text-[#999D8F]">
//                 {dictionary.qa}
//               </Link>
//             </nav>
//
//             {/* Language Switcher & Mobile Button */}
//             <div className="flex items-center space-x-4">
//               <LanguageSwitcher lang={lang} />
//               <button
//                   className="md:hidden text-zinc-700"
//                   onClick={toggleMenu}
//                   aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
//
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//             <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-40">
//               <nav className="flex flex-col space-y-4 px-4 py-6">
//                 <Link href={`/${lang}`} onClick={() => setIsMenuOpen(false)} className="text-zinc-700 hover:text-[#999D8F]">
//                   {dictionary.home}
//                 </Link>
//                 <Link
//                     href={`/${lang}/about`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-zinc-700 hover:text-[#999D8F]"
//                 >
//                   {dictionary.about}
//                 </Link>
//                 <Link
//                     href={`/${lang}/services`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-zinc-700 hover:text-[#999D8F]"
//                 >
//                   {dictionary.services}
//                 </Link>
//                 <Link
//                     href={`/${lang}/reviews`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-zinc-700 hover:text-[#999D8F]"
//                 >
//                   {dictionary.reviews}
//                 </Link>
//                 <Link
//                     href={`/${lang}/contacts`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-zinc-700 hover:text-[#999D8F]"
//                 >
//                   {dictionary.contacts}
//                 </Link>
//                 <Link
//                     href={`/${lang}/qa`}
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-zinc-700 hover:text-[#999D8F]"
//                 >
//                   {dictionary.qa}
//                 </Link>
//               </nav>
//             </div>
//         )}
//       </header>
//   )
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import type { Locale } from "@/i18n/config";
import SocialLinks from "@/components/ui/social-links";

interface HeaderProps {
  dictionary: {
    home: string;
    about: string;
    reviews: string;
    services: string;
    contacts: string;
    qa: string;
  };
  lang: Locale;
}

export default function Header({ dictionary, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b border-zinc-200 relative z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`}>
            <Image src={"/cosmarspa-logo.webp"} alt={"Cosmarspa logo"} width={100} height={50} className="rounded-lg" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={`/${lang}`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.about}
            </Link>
            <Link
              href={`/${lang}/services`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.services}
            </Link>
            <Link
              href={`/${lang}/reviews`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.reviews}
            </Link>
            <Link
              href={`/${lang}/contacts`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.contacts}
            </Link>
            <Link
              href={`/${lang}/qa`}
              className="text-zinc-700 hover:text-[#999D8F]"
            >
              {dictionary.qa}
            </Link>
          </nav>

          {/* Lang + Toggle */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher lang={lang} />
            <button
              className="md:hidden text-zinc-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Fullscreen */}
      {isMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-white z-50 flex flex-col justify-between px-6 py-8">
          <nav className="flex flex-col items-center justify-center flex-grow space-y-6 text-lg">
            <Link
                href={`/${lang}`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.home}
            </Link>
            <Link
                href={`/${lang}/about`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.about}
            </Link>
            <Link
                href={`/${lang}/services`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.services}
            </Link>
            <Link
                href={`/${lang}/reviews`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.reviews}
            </Link>
            <Link
                href={`/${lang}/contacts`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.contacts}
            </Link>
            <Link
                href={`/${lang}/qa`}
                onClick={toggleMenu}
                className="text-zinc-700 hover:text-zinc-900"
            >
              {dictionary.qa}
            </Link>
            <div className="flex justify-center space-x-6">
              <SocialLinks/>
            </div>
          </nav>

          {/* Socials */}

        </div>
      )}
    </header>
  );
}
