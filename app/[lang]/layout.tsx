import type React from "react";
import { type Locale, i18n } from "@/i18n/config";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getDictionary } from "@/i18n/dictionaries";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import ToastProvider from "@/components/toast-provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const tildaSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-tilda-sans",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${bodoni.variable} ${tildaSans.variable} bg-neutral-50 text-zinc-700 font-sans min-h-screen flex flex-col`}
      >
        <Header dictionary={dictionary.navigation} lang={lang} />
        <main className="flex-grow">{children}</main>
        <Footer dictionary={dictionary.footer} lang={lang} />
        <ToastProvider />
      </body>
    </html>
  );
}
