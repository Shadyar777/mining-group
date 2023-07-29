import i18n from 'i18next';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    lng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${window.location.origin}/i18n/{{lng}}.json`,
    },
  });

export default i18n;
