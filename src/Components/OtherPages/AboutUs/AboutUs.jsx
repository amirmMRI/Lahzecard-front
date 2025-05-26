import React, { useState } from "react";

// Styles
import styles from './AboutUs.module.css'

// Images
import AboutUspic from '../../../Images/AboutUs.png'
import AboutUspicforphone from '../../../Images/AboutUsphone.png'

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

//multi language
import t from "../../../Multilanguage";
import { useTranslation } from 'react-i18next';
const AboutUs = () => {

    
        //multi language
        const { t, i18n } = useTranslation();

        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
          if (lng === 'ir' || lng === 'ar') {
            document.documentElement.dir = 'rtl';
          } else {
            document.documentElement.dir = 'ltr';
          }
        };
    return ( 
        <div className={styles.AboutUs_Container}>
            <section className={styles.main_qnada_sec}>
                <section className={styles.navbar_qnda_sec}>
                    <  Navbar  />
                </section>
                <section className={styles.AboutUs_info_sec}>
                    <h1>{t("aboutus")}</h1>
                    <p>{t("aboutusparageraph1")}</p>
                    <p>{t("aboutusparageraph2")}</p>
                    <p>{t("aboutusparageraph3")}</p>
                </section>
                <img src={AboutUspic} alt="info pic containing names and positions of the names." className={styles.info_pic}/>
                <img src={AboutUspicforphone} alt="info pic containing names and positions of the names." className={styles.info_pic_for_phone}/>
            </section>
            <  Footer  />
        </div>
     );
}
 
export default AboutUs;