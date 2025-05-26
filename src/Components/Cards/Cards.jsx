import React from 'react';

// Images
import gifts from '../../Images/gifts.png'
import qrcode from '../../Images/qrcode.png'
import privecy from '../../Images/privecy.png'
import gift from '../../Images/gift.png'

// Styles
import styles from './Cards.module.css'
//multi language
import t from "../../../src/Multilanguage.jsx";

const Cards = () => {

    return ( 
        <div className={styles.Cards_Container}>
            <section className={styles.gifts_sec}>
                <img src={gifts} alt="gifts png" />
            </section>
            <section className={styles.cards_sec}>
                <div className={styles.card_div1}>
                    <img src={gift} alt="lahze card" />
                    <section className={styles.card_text}>
                        <h3>{t("cards_right_title")}</h3>
                        <p>{t("cards_right_text")}</p>
                    </section>
                </div>
                <div className={styles.card_div2}>
                    <img src={privecy} alt="lahze card" />
                    <section className={styles.card_text}>
                        <h3>{t("cards_center_title")}</h3>
                        <p>{t("cards_center_text")}</p>
                    </section>
                </div>
                <div className={styles.card_div3}>
                    <img src={qrcode} alt="lahze card" />
                    <section className={styles.card_text}>
                        <h3>{t("cards_left_title")}</h3>
                        <p>{t("cards_left_text")}</p>
                    </section>
                </div>
            </section>
        </div>
     );
}
 
export default Cards;