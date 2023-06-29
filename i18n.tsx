import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json'
import ptTranslation from './translations/pt.json'

// Defina as traduções para cada idioma que você deseja suportar
// const resources = {
//   en: {
//     translation: {
//       greetingHi: 'Hello',
//     },
//   },
//   pt: {
//     translation: {
//       greetingHi: 'Olá',
//     },
//   },
// };

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    }
  },
  lng: 'pt', // Idioma padrão
  fallbackLng: 'pt', // Idioma de fallback (caso não haja tradução disponível)
  interpolation: {
    escapeValue: false, // Permite usar HTML nas traduções
  },
});

export default i18n;
