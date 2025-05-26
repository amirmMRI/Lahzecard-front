import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Images

import cardexample from '../../Images/examplecard1.png'
import cardexamplear from '../../Images/examplecard1_ar.png'
import cardexamplegr from '../../Images/examplecard1_gr.png'
import cardexampleen from '../../Images/examplecard1_en.png'


import cardexampleflip from '../../Images/examplecard2.png'
import cardexampleflipar from '../../Images/examplecard2_ar.png'
import cardexampleflipen from '../../Images/examplecard2_en.png'
import cardexampleflipgr from '../../Images/examplecard2_gr.png'

import cardphone1 from '../../Images/cardphone1.png'
import cardphone1en from '../../Images/cardphone1en.png'
import cardphone1ar from '../../Images/cardphone1ar.png'
import cardphone1gr from '../../Images/cardphone1gr.png'

import cardphone2 from '../../Images/cardphone2.png'
import cardphone2en from '../../Images/cardphone2en.png'
import cardphone2gr from '../../Images/cardphone2gr.png'
import cardphone2ar from '../../Images/cardphone2ar.png'

// Styles
import styles from './Cardexample.module.css'
// multi language
// import t from "../../../src/Multilanguage.jsx";


const Cardexample = () => {

   const { t, i18n } = useTranslation();
   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      }
    
   // Image funcs and states for desktop
   const [card3, setCard3] = useState(true);
   const [card4, setCard4] = useState(false);
   const cardHandlerDesktop = () => {
      setCard3(!card3)
      setCard4(!card4)
   }

   // Image funcs and statss
   const [card1, setCard1] = useState(true);
   const [card2, setCard2] = useState(false);
   const cardHandler = () => {
      setCard1(!card1)
      setCard2(!card2)
   }
   console.log(i18n.language)
    return ( 
        <div className={styles.Cards_Container}>
         

         {/*the part for firs page of card examples */}
            {i18n.language === 'en' ? (
               <img src={cardexampleen} alt="کارت نمونه" className={card3 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) : i18n.language === 'ar' ? (
               <img src={cardexamplear}  alt="کارت النمونه" className={card3 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop} />
            ) : i18n.language === 'gr' ? (
               <img src={cardexamplegr}  alt="کارت نمونه" className={card3 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) : (
            <img src={cardexample} alt="کارت نمونه" className={card3 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) 
            }
         {/* behind of cards */}

            {i18n.language === 'en' ? (
               <img src={cardexampleflipen} alt="کارت نمونه" className={card4 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) : i18n.language === 'ar' ? (
               <img src={cardexampleflipar}  alt="کارت النمونه" className={card4 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop} />
            ) : i18n.language === 'gr' ? (
               <img src={cardexampleflipgr}  alt="کارت نمونه" className={card4 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) : (
            <img src={cardexampleflip} alt="کارت نمونه" className={card4 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/>
            ) 
            }

           {/* <img src={t('cardexample1')} alt="example card" className={card3 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/> */}
           {/* <img src={cardexampleflip} alt="example card flipped" className={card4 ? styles.cardnum1 : styles.cardDeActive} onClick={cardHandlerDesktop}/> */}
           <div className={styles.cardexample_div}>

            {/*the part for firs page of card examples */}
            {i18n.language === 'en' ? (
               <img src={cardphone1en} alt="کارت نمونه" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler}/>
            ) : i18n.language === 'ar' ? (
               <img src={cardphone1ar}  alt="کارت النمونه" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler} />
            ) : i18n.language === 'gr' ? (
               <img src={cardphone1gr}  alt="کارت نمونه" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler}/>
            ) : (
            <img src={cardphone1} alt="کارت نمونه" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler}/>
            ) 
            }
         {/* behind of cards */}

            {i18n.language === 'en' ? (
               <img src={cardphone2en} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/>
            ) : i18n.language === 'ar' ? (
               <img src={cardphone2ar} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/>
            ) : i18n.language === 'gr' ? (
               <img src={cardphone2gr} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/>
            ) : (
               <img src={cardphone2} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/>
            ) 
            }
               {/* <img src={cardphone1} alt="example card" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler}/>
               <img src={cardphone2} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/> */}
           </div>
        </div>
     );
}
 
export default Cardexample;