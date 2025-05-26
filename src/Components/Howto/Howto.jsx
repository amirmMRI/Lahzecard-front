import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Images
import q1 from '../../Images/q1.png'
import q2 from '../../Images/q2.png'
import q3 from '../../Images/q3.png'
import q4 from '../../Images/q4.png'

import q1en from '../../Images/q1en.png'
import q2en from '../../Images/q2en.png'
import q3en from '../../Images/q3en.png'
import q4en from '../../Images/q4en.png'

import q1ar from '../../Images/q1ar.png'
import q2ar from '../../Images/q2ar.png'
import q3ar from '../../Images/q3ar.png'
import q4ar from '../../Images/q4ar.png'

import q1gr from '../../Images/q1gr.png'
import q2gr from '../../Images/q2gr.png'
import q3gr from '../../Images/q3gr.png'
import q4gr from '../../Images/q4gr.png'

import q1phone from '../../Images/q1phone.png'
import q2phone from '../../Images/q2phone.png'
import q3phone from '../../Images/q3phone.png'
import q4phone from '../../Images/q4phone.png'

import q1phoneen from '../../Images/q1phoneen.png'
import q2phoneen from '../../Images/q2phoneen.png'
import q3phoneen from '../../Images/q3phoneen.png'
import q4phoneen from '../../Images/q4phoneen.png'

import q1phonear from '../../Images/q1phonear.png'
import q2phonear from '../../Images/q2phonear.png'
import q3phonear from '../../Images/q3phonear.png'
import q4phonear from '../../Images/q4phonear.png'

import q1phonegr from '../../Images/q1phonegr.png'
import q2phonegr from '../../Images/q2phonegr.png'
import q3phonegr from '../../Images/q3phonegr.png'
import q4phonegr from '../../Images/q4phonegr.png'

// Styles
import styles from './Howto.module.css'

const Howto = () => {
   const { t, i18n } = useTranslation();
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      }

   // Image states and funcs
   const [q1state, setQ1state] = useState(true);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);

   const q1Handler = () => {
      setQ1state(false);
      setQ2state(true);
      setQ3state(false);
      setQ4state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(true);
      setQ4state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(true);
   }

   const q4Handler = () => {
      setQ1state(true);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
   }

    return ( 
        <div className={styles.Cards_Container}>
            <h1>نحوه آماده سازی هدیه:</h1>
            {i18n.language === 'en' ? (
               <>
               <img src={q1en} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
               <img src={q2en} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
               <img src={q3en} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
               <img src={q4en} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
               </>
            ) : i18n.language === 'ar' ? (
               <>
               <img src={q1ar} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
               <img src={q2ar} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
               <img src={q3ar} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
               <img src={q4ar} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
               </>
            ) : i18n.language === 'gr' ? (
               <>
               <img src={q1gr} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
               <img src={q2gr} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
               <img src={q3gr} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
               <img src={q4gr} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
               </>
            )
            :(
               <>
               <img src={q1} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
               <img src={q2} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
               <img src={q3} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
               <img src={q4} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
               </>
            ) 
            }



            {i18n.language === 'en' ? (
               <div className={styles.phoneHowto}>
                  <img src={q1phoneen} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q2phoneen} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q3phoneen} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q4phoneen} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
               </div>
            ) : i18n.language === 'ar' ? (
               <div className={styles.phoneHowto}>
                  <img src={q1phonear} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q2phonear} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q3phonear} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q4phonear} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
               </div>
            ) : i18n.language === 'gr' ? (
               <div className={styles.phoneHowto}>
                  <img src={q1phonegr} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q2phonegr} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q3phonegr} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q4phonegr} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
               </div>
            )
            :(
               <div className={styles.phoneHowto}>
                  <img src={q1phone} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q2phone} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q3phone} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
                  <img src={q4phone} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
               </div>
            ) 
            }
            {/* <img src={q1} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
            <img src={q2} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
            <img src={q3} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
            <img src={q4} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
             */}


            {/* <div className={styles.phoneHowto}>
               <img src={q1phone} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q2phone} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q3phone} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q4phone} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
            </div> */}
        </div>
     );
}
 
export default Howto;