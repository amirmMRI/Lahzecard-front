import React, { useState } from "react";

// Styles
import styles from './QandaPage.module.css'

// Images
import openmark from '../../../Images/minussign.png'
import closemark from '../../../Images/plussign.png'

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

//multi language
import t from "../../../Multilanguage";

const QandaPage = () => {

    // Answer States and Funncs
   const [q1state, setQ1state] = useState(false);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);
   const [q5state, setQ5state] = useState(false);
   const [q6state, setQ6state] = useState(false);
   const [q7state, setQ7state] = useState(false);

   const q1Handler = () => {
      setQ1state(!q1state);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(!q2state);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(!q3state);
      setQ4state(false);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q4Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(!q4state);
      setQ5state(false);
      setQ6state(false);
      setQ7state(false);
   }

   const q5Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(!q5state);
      setQ6state(false);
      setQ7state(false);
   }

   const q6Handler = () => {
    setQ1state(false);
    setQ2state(false);
    setQ3state(false);
    setQ4state(false);
    setQ5state(false);
    setQ6state(!q6state);
    setQ7state(false);
 }

 const q7Handler = () => {
    setQ1state(false);
    setQ2state(false);
    setQ3state(false);
    setQ4state(false);
    setQ5state(false);
    setQ6state(false);
    setQ7state(!q7state);
 }

    return ( 
        <div className={styles.QandaPage_Container}>
            <section className={styles.main_qnada_sec}>
                <section className={styles.navbar_qnda_sec}>
                    <  Navbar  />
                </section>
                <section className={styles.questions_sec}>
                    <h1>سوالات متداول</h1>
                    <div className={styles.certainq_div}>
                        <div onClick={q1Handler}>
                            <p>{t("q1_howtobuy")}</p>
                            <img src={q1state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q1state ? styles.span_active : styles.spandeActive}>{t("a1_howtobuy")}<a href="Lahzecard.com">Lahzecard.com</a>{t("a12_howtobuy")}</span>
                    </div>
                    <div className={styles.certainq_div}>
                    <div onClick={q2Handler}>
                        <p>{t("q2_howtorecord")}</p>
                        <img src={q2state ? openmark : closemark} alt="question mark closed icon" />
                    </div>
                    <span className={q2state ? styles.span_active : styles.spandeActive}>{t("a2_howtorecord")}</span>
                    </div>
                    <div className={styles.certainq_div}>
                    <div onClick={q3Handler}>
                        <p>{t("q3_canmultiuse")}</p>
                        <img src={q3state ? openmark : closemark} alt="question mark closed icon" />
                    </div>
                    <span className={q3state ? styles.span_active : styles.spandeActive}>{t("a3_canmultiuse")}</span>
                    </div>
                    <div className={styles.certainqdiv}>
                    <div onClick={q4Handler}>
                        <p>{t("q4_howtoopen")}</p>
                        <img src={q4state ? openmark : closemark} alt="question mark closed icon" />
                    </div>
                    <span className={q4state ? styles.span_active : styles.spandeActive}>{t("a42_howtoopen")}
                    <a href="https://lahzecard.com/opengiftcardnumvar"><b>https://lahzecard.com/opengiftcardnumvar</b></a>
                    {t("a41_howtoopen")}</span>
                    </div>
                    <div className={styles.certainq_div}>
                    <div onClick={q5Handler}>
                        <p>{t("q5_canmultiuse")}</p>
                        <img src={q5state ? openmark : closemark} alt="question mark closed icon" />
                    </div>
                    <span className={q5state ? styles.span_active : styles.spandeActive}>{t("a5_canmultiuse")}</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q6Handler}>
                            <p>{t("q6_balance")}</p>
                            <img src={q6state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q6state ? styles.span_active : styles.spandeActive}>{t("a6_balance")}</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q7Handler}>
                            <p>{t("q7_refund")}</p>
                            <img src={q7state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q7state ? styles.span_active : styles.spandeActive}>{t("a7_refund")}</span>
                    </div>
                </section>
            </section>
            <  Footer  />
        </div>
     );
}
 
export default QandaPage;