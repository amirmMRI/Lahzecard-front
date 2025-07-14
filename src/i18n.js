import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // ✅ UNCOMMENT THIS

import translationEN from './en.json';
import translationAR from './ar.json';
import translationIR from './ir.json';
import translationGR from './gr.json';

const resources = {
    en: { translation: translationEN },
    ar: { translation: translationAR },
    ir: { translation: translationIR },
    gr: { translation: translationGR },
};

i18n
    .use(LanguageDetector) // ✅ ENABLE THIS
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ir',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'], // ✅ Store language in localStorage

        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
