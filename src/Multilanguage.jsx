import React from 'react';
import { useTranslation } from 'react-i18next';


const Multilanguage = (text) => {
            const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
    
            i18n.changeLanguage(lng);
          };
          return (

        <div>
            {t(text)}
        </div>
    );
};

export default Multilanguage;