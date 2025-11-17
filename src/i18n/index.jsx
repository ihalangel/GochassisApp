import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa los archivos de traducción
import enTranslation from './en/translation.json';
import esTranslation from './es/translation.json';

// Inicializa i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
