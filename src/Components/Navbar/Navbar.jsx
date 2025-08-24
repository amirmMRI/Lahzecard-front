import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Styles
import styles from "./Navbar.module.css";

// Images
import logo from "../../Images/logo3.png";
// import close from "../../Images/close.png";
import char from "../../Images/char.png";
import langu from "../../Images/language.png";
import close from "../../Images/hamburger-menu-closed.svg";
import opened from "../../Images/hamburger_menu_open.svg";

//multilanguage
import { useTranslation } from "react-i18next";
import t from "../../../src/Multilanguage.jsx";
import { act } from "react";

const Navbar = () => {
  const location = useLocation().pathname;
  // const isRTLi18n = i18n.language === 'ar' || i18n.language === 'ir';

  const [isRTL, setIsRTL] = useState(
    localStorage.getItem("i18nextLng") === "ir" ||
      localStorage.getItem("i18nextLng") === "ar"
  );

  const [open, setOpen] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

  //multi language
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    setOpen(!open);

    if (
      lng === "ir" ||
      lng === "ar" ||
      localStorage.getItem("i18nextLng") === "ar" ||
      localStorage.getItem("i18nextLng") === "ir"
    ) {
      document.documentElement.dir = "rtl";
      setIsRTL(true);
      console.log(isRTL);
    } else {
      document.documentElement.dir = "ltr";
      setIsRTL(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= 950);
    };

    // Set initial value
    handleResize();

    // Attach resize listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Hamburge menu functions
  const [active, setActive] = useState(false);
  const hamHandler = () => {
    console.log(active, "ham menu");

    setActive(!active);
  };

  // url check
  const [pathIsHome, setPathIsHome] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/home") {
      setPathIsHome(!pathIsHome);
    }
  }, []);

  return (
    <div
      className={styles.Navbar_container}
      style={{
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <nav>
        <section className={styles.navbared}>
          {" "}
          {/* <div></div> */}
          <section className={styles.logo}>
            <a href="/home">
              <img src={logo} alt="logo" />
            </a>
          </section>
          {/* <div></div>
                <div></div> */}
          <section className={styles.btnvip}>
            {pathIsHome ? (
              ""
            ) : (
              <Link to="/home">
                <button className={styles.btn_nav}>{t("home")}</button>
              </Link>
            )}
            <Link to="/Coop">
              <button className={styles.btn_nav}>{t("workwithus")}</button>
            </Link>
            <Link to="/QandAPage">
              <button className={styles.btn_nav}>{t("faq")}</button>
            </Link>
            <Link to="/AboutUs">
              <button className={styles.btn_nav}>{t("aboutus")}</button>
            </Link>
            <Link to="/customer">
              <button className={styles.btn_account}>
                <img src={char} alt="cup icon" />
                {t("login")}
              </button>
            </Link>
            <div className={styles.dropdowncontainer}>
              <button
                onClick={() => setOpen(!open)}
                className={styles.dropdownbutton}
              >
                <img src={langu} alt="language icon" />
                <section
                  className={active ? styles.nothing : styles.ham_options_off}
                >
                  {/*{t('language')}*/}
                </section>
              </button>

              {open && (
                <ul
                  className={styles.dropdownmenu}
                  style={{
                    left:
                      window.location.pathname === "/Coop" && isRTL
                        ? "6rem"
                        : undefined,
                    right:
                      window.location.pathname === "/Coop" && !isRTL
                        ? "6rem"
                        : undefined,
                  }}
                >
                  <li className={styles.dropdownitem}>
                    <button onClick={() => changeLanguage("gr")}>
                      Duetsch
                    </button>
                  </li>
                  <li className={styles.dropdownitem}>
                    <button onClick={() => changeLanguage("en")}>
                      English
                    </button>
                  </li>
                  <li className={styles.dropdownitem}>
                    <button onClick={() => changeLanguage("ir")}>فارسی</button>
                  </li>
                  <li className={styles.dropdownitem}>
                    <button onClick={() => changeLanguage("ar")}>العربی</button>
                  </li>
                </ul>
              )}
            </div>

            {/* <section>
                        <button onClick={() => changeLanguage('en')}>English</button> 
                        <button onClick={() => changeLanguage('ir')}>فارسی</button>
                        <button onClick={() => changeLanguage('ar')}>العربی</button> 
                        <button onClick={() => changeLanguage('gr')}>Duetsch</button> 

 
                        </section> */}
          </section>
        </section>

        <img
          onClick={hamHandler}
          className={`${!isTabletOrSmaller ? styles.HanMenu : undefined}`}
          style={{
            rotate: !isRTL ? "180deg" : "",
          }}
          src={active ? opened : close}
          alt={active ? "menu open" : "menu closed"}
        />
        <div></div>
      </nav>
      <div className={`${styles.HamMenu_wrapper} ${active ? styles.open : ""}`}>
        <div className={`${styles.HamMenu_list} `}>
          <div className={styles.ham_options_container}>
            <Link to="/AboutUs">
              <div>{t("aboutus")}</div>
            </Link>
            <Link to="/Coop">
              <div>{t("workwithus")}</div>
            </Link>
            <Link to="/QandAPage">
              <div>{t("faq")}</div>
            </Link>
          </div>
          <div className={styles.hamMenu_button}>
            <div>
              <Link to={"/customer"}>{t("gift_prepration")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
