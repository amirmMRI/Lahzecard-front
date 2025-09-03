import React, { useState } from "react";

// Styles
import styles from "./AboutUs.module.css";

// Images
import AboutUspic from "../../../Images/Company-amico 1.svg";

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

//multi language
import t from "../../../Multilanguage";
import { useTranslation } from "react-i18next";

const Divider = ({ text }) => {
  return (
    <div className={styles.divider_container}>
        <div className={styles.divider_text}>{t(text)}</div>
        <div className={styles.divider_line}></div>
    </div>
  );
};


const AboutUs = () => {
  //------Multi Language----
  const { t, i18n } = useTranslation();
  let isRTL = i18n.language === "ar" || i18n.language === "ir";
  // console.log(isRTL);

  return (
    <div className={styles.AboutUs_Container}>
      <section className={styles.main_qnada_sec}>
        <section className={styles.navbar_qnda_sec}>
          <Navbar />
        </section>
        <section
          className={styles.container}
          style={{
            direction: isRTL ? "rtl" : "ltr",
            textAlign: !isRTL ? "left" : "right",
          }}
        >
          <div className={styles.info}>
            <p>
              <span>{t("lahzecard")} </span>
              {t("aboutusparageraph")}
            </p>
            <img src={AboutUspic} alt="" />
          </div>

          <Divider text="team_development" />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
