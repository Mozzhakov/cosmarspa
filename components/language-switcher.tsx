// "use client"
//
// import { useState } from "react"
// import { useRouter, usePathname } from "next/navigation"
// import { ChevronDown, Globe } from "lucide-react"
// import { type Locale, i18n } from "@/i18n/config"
//
// interface LanguageSwitcherProps {
//   lang: Locale
// }
//
// export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
//   const [isOpen, setIsOpen] = useState(false)
//   const router = useRouter()
//   const pathname = usePathname()
//
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen)
//   }
//
//   const switchLanguage = (locale: string) => {
//     const newPath = pathname.replace(`/${lang}`, `/${locale}`)
//     router.push(newPath)
//     setIsOpen(false)
//   }
//
//   const languageNames: Record<Locale, string> = {
//     en: "English",
//     ru: "Русский",
//     uk: "Українська",
//     es: "Español",
//   }
//
//   return (
//     <div className="relative">
//       <button
//         className="flex items-center space-x-1 text-zinc-700 hover:text-zinc-900"
//         onClick={toggleDropdown}
//         aria-expanded={isOpen}
//         aria-haspopup="true"
//       >
//         <Globe size={18} />
//         <span className="hidden sm:inline">{languageNames[lang]}</span>
//         <ChevronDown size={16} />
//       </button>
//
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border border-zinc-200">
//           <div className="py-1">
//             {i18n.locales.map((locale) => (
//               <button
//                 key={locale}
//                 className={`block w-full text-left px-4 py-2 text-sm ${
//                   locale === lang ? "bg-neutral-100 text-zinc-900" : "text-zinc-700 hover:bg-neutral-50"
//                 }`}
//                 onClick={() => switchLanguage(locale)}
//               >
//                 {languageNames[locale]}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { type Locale, i18n } from "@/i18n/config";

interface LanguageSwitcherProps {
  lang: Locale;
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const switcherRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(`/${lang}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  // const languageNames: Record<Locale, string> = {
  //   en: "🇺🇸 English",
  //   ru: "🇷🇺 Русский",
  //   uk: "🇺🇦 Українська",
  //   es: "🇪🇸 Español",
  // };
  const languageData: Record<Locale, { name: string; flag: string }> = {
    en: { name: "English", flag: "/flags/en.svg" },
    ru: { name: "Русский", flag: "/flags/ru.svg" },
    uk: { name: "Українська", flag: "/flags/uk.svg" },
    es: { name: "Español", flag: "/flags/es.svg" },
  };
  // 👇 Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={switcherRef}>
      <button
        className="flex items-center space-x-1 text-zinc-700 hover:text-zinc-900"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} />
        {/*<span className="hidden sm:inline">{languageNames[lang]}</span>*/}
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 ">
          <div className="py-1">
            {Object.keys(languageData).map((locale) => (
              <button
                key={locale}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm ${
                  locale === lang
                    ? "bg-[#B7BBAC] text-white"
                    : "text-zinc-700 hover:bg-neutral-50"
                }`}
                onClick={() => switchLanguage(locale)}
              >
                <img
                  src={languageData[locale as Locale].flag}
                  alt=""
                  className="w-5 h-5"
                />
                {languageData[locale as Locale].name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
