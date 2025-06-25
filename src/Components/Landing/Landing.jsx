import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// Images
import Landingimg from '../../Images/LandingNoBack.png'
import littlearrow from '../../Images/littlearrow.png'
import arrow from '../../Images/arrow.png'

// Styles
import styles from './Landing.module.css'
//multi language
import t from "../../../src/Multilanguage.jsx";
import {useTranslation} from "react-i18next";


const Landing = () => {
    //------Multi Language----
    const { t, i18n } = useTranslation();
    let isRTL = i18n.language === 'ar' || i18n.language === 'ir';
    return (
        <div className={styles.Landing_Container}>
            <img src={Landingimg} alt="landing image" />
            <section className={styles.landing_text_sec}>
                <h1>{t("lahzecard")}
                    <br/>{t("lahzesazi_banner")}</h1>
                <img src={arrow} alt="arrow icon" className={styles.arrow_img}/>
                <section className={styles.landing_btn_sec}>
                    <p>{t("banner2")}</p>
                    <Link to="/customer">
                        <button
                            style={{direction: isRTL ? 'rtl' : 'ltr'}}
                            className={styles.landing_first_btn}
                        >
                            {t("bannerbutton")}
                            <img
                                src={littlearrow}
                                alt="littlearrow icon"
                                style={{rotate: !isRTL ? '180deg' : '0deg'}}
                            />
                        </button>
                    </Link>
                </section>
            </section>
        </div>
     );
}
 
export default Landing;