import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Footer.module.css";

// Images
import logoforfooter from "../../Images/logoforfooter.png";
import email from "../../Images/email.png";
import location from "../../Images/location.png";
import telegram from "../../Images/telegram.png";
import instagram from "../../Images/instagram.png";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter.png";

const Footer = () => {
    return (
        <div className={styles.Footer_Container}>
            <section className={styles.foot_contact_sec}>
                <h3>راه های ارتباطی</h3>
                <section>
                    <img src={email} alt="email" />
                    <p>Lahzecard@gmail.com</p>
                </section>
                <section>
                    <img src={location} alt="address" />
                    <p>قزوین ، باراجین ، مرکز واحدهای فناور سینتک</p>
                </section>
            </section>
            <section className={styles.foot_lahze_sec}>
                <h3>با لحظه کارت</h3>
                <Link to="/Coop">
                    <button className={styles.btn_nav}>همکاری با ما</button>
                </Link>
                <Link to="/QandAPage">
                    <button className={styles.btn_nav}>سوالات متداول</button>
                </Link>
                <Link to="/AboutUs">
                    <button className={styles.btn_nav}>درباره ما</button>
                </Link>
            </section>
            <section className={styles.foot_social_sec}>
                <h3>شبکه های اجتماعی</h3>
                <section>
                
                  <a  className={styles.socials} href="https://t.me/lahzecard">
                    <img src={telegram} alt="telegram channel" />
                </a>  
                <a href="https://www.instagram.com/lahzecard?igsh=cDJuYnNxZnNlZnUy">
                    <img src={instagram} alt="instagram page" />
                </a>
                <a href="https://www.linkedin.com/company/lahze-card/">
                    <img src={linkedin} alt="linkedin page" />
                </a>
                    
                </section>
            </section>
            <section >
                <a href="/home">
                    <img src={logoforfooter} alt="Lahzecard Logo" />
                </a>
            </section>
        </div>
    );
};

export default Footer;
