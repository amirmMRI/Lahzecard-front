import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Images
import qanda from '../../Images/qanda.png'
import qandaen from '../../Images/qandaen.png'
import qandaar from '../../Images/qandaar.png'
import qandagr from '../../Images/qandagr.png'

import openmark from '../../Images/QmarkOpened.png'
import closemark from '../../Images/QmarkClosed.png'

import phone1img from '../../Images/phone1.png'
import phone2img from '../../Images/phone2.png'
import phone3img from '../../Images/phone3.png'
import phone4img from '../../Images/phone4.png'

import phone1imgen from '../../Images/phone1en.png'
import phone2imgen from '../../Images/phone2en.png'
import phone3imgen from '../../Images/phone3en.png'
import phone4imgen from '../../Images/phone4en.png'

import phone1imggr from '../../Images/phone1gr.png'
import phone2imggr from '../../Images/phone2gr.png'
import phone3imggr from '../../Images/phone3gr.png'
import phone4imggr from '../../Images/phone4gr.png'

import phone1imgar from '../../Images/phone1ar.png'
import phone2imgar from '../../Images/phone2ar.png'
import phone3imgar from '../../Images/phone3ar.png'
import phone4imgar from '../../Images/phone4ar.png'

// Styles
import styles from './Qanda.module.css'

//multi language
import t from "../../../src/Multilanguage.jsx";

const Qanda = () => {
   //------Multi Language----
   const { t, i18n } = useTranslation();
   let isRTL = i18n.language === 'ar' || i18n.language === 'ir';

   // Answer States and Funncs
   const [q1state, setQ1state] = useState(false);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);
   const [q5state, setQ5state] = useState(false);

   const q1Handler = () => {
      setQ1state(!q1state);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(!q2state);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(!q3state);
      setQ4state(false);
      setQ5state(false);
   }

   const q4Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(!q4state);
      setQ5state(false);
   }

   const q5Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(!q5state);
   }

   // Phone states and func
   const [phone1, setPhone1] = useState(true);
   const [phone2, setPhone2] = useState(false);
   const [phone3, setPhone3] = useState(false);
   const [phone4, setPhone4] = useState(false);

   const phone1Handler = () => {
      setPhone1(true);
      setPhone2(false);
      setPhone3(false);
      setPhone4(false);
   }

   const phone2Handler = () => {
      setPhone1(false);
      setPhone2(true);
      setPhone3(false);
      setPhone4(false);
   }

   const phone3Handler = () => {
      setPhone1(false);
      setPhone2(false);
      setPhone3(true);
      setPhone4(false);
   }

   const phone4Handler = () => {
      setPhone1(false);
      setPhone2(false);
      setPhone3(false);
      setPhone4(true);
   }

   return ( 
      <div className={styles.Qanda_Container}>
         <section
             className={styles.qanda_sec}>
            {i18n.language === 'en' ? (
               <img src={qandaen} alt="q and a icon" className={styles.qanda_img}/>
            ) : i18n.language === 'ar' ? (
               <img src={qandaar} alt="q and a icon" className={styles.qanda_img}/>
            ) : i18n.language === 'gr' ? (
               <img src={qandagr} alt="q and a icon" className={styles.qanda_img}/>
            )
            :(
               <img src={qanda} alt="q and a icon" className={styles.qanda_img}/>
            ) 
            }
            <div  className={styles.certainq_div}>
               <div onClick={q1Handler}>
                  <p style={{textAlign: isRTL? 'right' : 'left'}}>{t("q1_howtobuy")}</p>
                  <img src={q1state ? openmark : closemark} alt="question mark closed icon" />
               </div>
               <span className={q1state ? styles.span_active : styles.spandeActive}>{t("a1_howtobuy")}<a href="Lahzecard.com">Lahzecard.com</a>{t("a12_howtobuy")}</span>
            </div>
            <div   className={styles.certainq_div}>
               <div onClick={q2Handler}>
                  <p style={{textAlign: isRTL? 'right' : 'left'}}>{t("q2_howtorecord")}</p>
                  <img src={q2state ? openmark : closemark} alt="question mark closed icon" />
               </div>
               <span className={q2state ? styles.span_active : styles.spandeActive}>{t("a2_howtorecord")}</span>
            </div>
            <div   className={styles.certainq_div}>
               <div onClick={q3Handler}>
                  <p style={{textAlign: isRTL? 'right' : 'left'}}>{t("q3_canmultiuse")}</p>
                  <img src={q3state ? openmark : closemark} alt="question mark closed icon" />
               </div>
               <span className={q3state ? styles.span_active : styles.spandeActive}>{t("a3_canmultiuse")}</span>
            </div>
            <div   className={styles.certainq_div}>
               <div onClick={q4Handler}>
                  <p style={{textAlign: isRTL? 'right' : 'left'}}>{t("q4_howtoopen")}</p>
                  <img src={q4state ? openmark : closemark} alt="question mark closed icon" />
               </div>
               <span className={q4state ? styles.span_active : styles.spandeActive}>{t("a42_howtoopen")}
               <a href="https://lahzecard.com/opengiftcardnumvar"><b>https://lahzecard.com/opengiftcardnumvar</b></a>
               {t("a41_howtoopen")}</span>
            </div>
            <div className={styles.certainq_div}>
               <div onClick={q5Handler}>
                  <p style={{textAlign: isRTL? 'right' : 'left'}}>{t("q5_canmultiuse")}</p>
                  <img src={q5state ? openmark : closemark} alt="question mark closed icon" />
               </div>
               <span className={q5state ? styles.span_active : styles.spandeActive}>{t("a5_canmultiuse")}</span>
            </div>
            <div className={styles.moreQ_div}>
               <Link to="/QandAPage">
                  <button>{t("howtobuy_moreQ")}</button>
               </Link>
            </div>
         </section>
         <section className={styles.phone_sec}>
         {i18n.language === 'en' ? (
               <>
                  <img src={phone1imgen} alt="phone png" className={phone1 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone2imgen} alt="phone png" className={phone2 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone3imgen} alt="phone png" className={phone3 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone4imgen} alt="phone png" className={phone4 ? styles.phone_img : styles.phone_img_deactive}/>
               </>
            ) : i18n.language === 'ar' ? (
               <>
                  <img src={phone1imgar} alt="phone png" className={phone1 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone2imgar} alt="phone png" className={phone2 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone3imgar} alt="phone png" className={phone3 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone4imgar} alt="phone png" className={phone4 ? styles.phone_img : styles.phone_img_deactive}/>
               </>
            ) : i18n.language === 'gr' ? (
               <>
                  <img src={phone1imggr} alt="phone png" className={phone1 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone2imggr} alt="phone png" className={phone2 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone3imggr} alt="phone png" className={phone3 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone4imggr} alt="phone png" className={phone4 ? styles.phone_img : styles.phone_img_deactive}/>
               </>
            )
            :(
               <>
                  <img src={phone1img} alt="phone png" className={phone1 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone2img} alt="phone png" className={phone2 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone3img} alt="phone png" className={phone3 ? styles.phone_img : styles.phone_img_deactive}/>
                  <img src={phone4img} alt="phone png" className={phone4 ? styles.phone_img : styles.phone_img_deactive}/>
               </>
            ) 
            }
            <div className={styles.buttons_div}>
               <button className={phone4 ? styles.btn_active : styles.btn_deactive} onClick={phone4Handler}></button>
               <button className={phone3 ? styles.btn_active : styles.btn_deactive} onClick={phone3Handler}></button>
               <button className={phone2 ? styles.btn_active : styles.btn_deactive} onClick={phone2Handler}></button>
               <button className={phone1 ? styles.btn_active : styles.btn_deactive} onClick={phone1Handler}></button>
            </div>
         </section>
      </div>
   );
}
 
export default Qanda;