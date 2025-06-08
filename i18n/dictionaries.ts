// import "server-only"
import type { Locale } from "./config";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    reviews: string;
    services: string;
    contacts: string;
    qa: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    featuredServices: {
      title: string;
      subtitle: string;
      services: Array<{
        title: string;
        description: string;
      }>;
      link: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      link: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    founder: {
      title: string;
      introduction: string;
      story: string;
      philosophy: string;
    };
    certifications: {
      title: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      facials: string;
      facial_addons: string;
      waxing: string;
      waxing_men: string;
      laser: string;
      laser_men: string;
      laser_package: string;
      rejuvenation: string;
    };
  };
  reviews: {
    title: string;
    subtitle: string;
    modal_btn: string;
    google_reviews: string;
    local_reviews: string;
    form: {
      title: string;
      name: string;
      email: string;
      sn_link: string;
      rating: string;
      comment: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
  contacts: {
    title: string;
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
      links: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
  qa: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      question: string;
      submit: string;
      success_msg: string;
      error_msg: string;
    };
  };
  footer: {
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
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
  termsOfService: {
    title: string;
    lastUpdated: string;
    sections: Array<{
      title: string;
      description: string;
    }>;
  };
}

const dictionaries = {
  en: () =>
    import("./en.json").then((module) => module.default) as Promise<Dictionary>,
  ru: () =>
    import("./ru.json").then((module) => module.default) as Promise<Dictionary>,
  uk: () =>
    import("./uk.json").then((module) => module.default) as Promise<Dictionary>,
  es: () =>
    import("./es.json").then((module) => module.default) as Promise<Dictionary>,
};

export const getDictionary = async (locale: Locale) => {
  // console.log("Requested locale:", locale);
  return dictionaries[locale]();
};
