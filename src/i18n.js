import { useEffect } from 'react';
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en.json';
import translationAR from './ar.json';
import translationIR from './ir.json';
import translationGR from './gr.json';

const resources = {
    en: {
        translation: translationEN,
    },
    ar: {
        translation: translationAR,
    },
    ir: {
        translation: translationIR,
    },
    gr: {
        translation: translationGR,
    },
};
i18n
//   .use(LanguageDetector) // detect user language

    .use(initReactI18next) // pass i18n to react-i18next
    .init({
        resources,
        fallbackLng: 'ir',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;