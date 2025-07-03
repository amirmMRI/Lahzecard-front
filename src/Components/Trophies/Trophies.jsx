import React from "react";

// Images
import trophies from "../../Images/trophies.png";
import trophiesGR from "../../Images/trophiesGR.png";
import trophiesEN from "../../Images/trophiesEN.png";
import trophiesAR from "../../Images/trophiesAR.png";
import roshd from "../../Images/roshd.png";
import Hologram from "../../Images/Hologram.png";
import samane from "../../Images/samane.png";
import enamad from "../../Images/enamad.png";

// Styles
import styles from "./Trophies.module.css";
import {useTranslation} from "react-i18next";
import t from "../../Multilanguage";

const Trophies = () => {
    const { t, i18n } = useTranslation();
    let isRTL = i18n.language === 'ar' || i18n.language === 'ir';

    return (
        <div className={styles.Trophies_Container}>
            <img
                src={
                    i18n.language === 'ir' ? trophies
                        : i18n.language === 'ar' ? trophiesAR
                            : i18n.language === 'en' ? trophiesEN
                                : trophiesGR
                }
                alt="example card"
                className={styles.header_pic}
            />

            <section className={styles.pid_sec}>
                <section>
                    <a href="https://syntechcenter.ir/">
                        <img src={roshd}
                        style={{width:"100%"}} alt="roshd org logo" />
                    </a>
                </section>

                <section>
                    {/* enamad */}
                    <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=493207&Code=zR1UHy9DrBqxcXyWa9wEk0KVuQwt4Ljv'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=493207&Code=zR1UHy9DrBqxcXyWa9wEk0KVuQwt4Ljv' alt='' style={{cursor:"pointer",width:"100%"}} code='zR1UHy9DrBqxcXyWa9wEk0KVuQwt4Ljv'/></a>                
                </section>

                <section>
                {/* ershad */}
                    <img referrerpolicy='origin' id = 'rgvjfukzoeukjzpesizpjxlz' className={styles.samane} onClick={() => {
                    window.open("https://logo.samandehi.ir/Verify.aspx?id=368791&p=xlaogvkamcsijyoepfvlrfth", "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, height=600, top=30")
                    }}
                    alt = 'logo-samandehi' src = 'https://logo.samandehi.ir/logo.aspx?id=368791&p=qftiwlbqaqgwyndtbsiynbpd' />
                </section>

                <section>
                    <img
                        className={styles.Hologram_img}
                        src={Hologram}
                        alt="roshd org logo"
                    />
                </section>

            </section>
        </div>
    );
};

export default Trophies;
