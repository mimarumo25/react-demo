import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInEspanol from '../locales/es/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  es: {
    translation: translationsInEspanol
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // Set English as the default language.
    debug: true,
    fallbackLng: "es", // Use Spanish as the fallback language.
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;
