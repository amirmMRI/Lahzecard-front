import React, { useEffect, useState } from "react";

// Styles
import styles from "./AboutUs.module.css";

// Images
import AboutUspic from "../../../Images/Company-amico 1.svg";
import githubIcon from "../../../Images/github.svg";
import linkdinIcon from "../../../Images/linkdin.svg";

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

//multi language
import t from "../../../Multilanguage";
import { useTranslation } from "react-i18next";

//pfp pics
import sazgarImg from "../../../Images/aboutUs/sazgar.png";
import farhadImg from "../../../Images/aboutUs/farhad.png";
import khademImg from "../../../Images/aboutUs/khadem.png";
import khoshzabanImg from "../../../Images/aboutUs/khoshzaban.png";
import OGImg from "../../../Images/aboutUs/OG.png";
import pashakiImg from "../../../Images/aboutUs/pashaki.png";
import cheraghaliImg from "../../../Images/aboutUs/cheraghaali.png";
import shahroodiImg from "../../../Images/aboutUs/shahroodi.png";

//carousel images
import image1 from "../../../Images/aboutUs/carousel1.png";

const Divider = ({ text }) => {
  return (
    <div className={styles.divider_container}>
      <div className={styles.divider_text}>{t(text)}</div>
      <div className={styles.divider_line}></div>
    </div>
  );
};

const ProfileCard = ({ person: { image, name, linkdin, github } }) => {
  return (
    <div className={styles.staff_card}>
      <img className={styles.card_pfp} src={image} alt={name} />
      <div className={styles.card_details}>
        <div className={styles.card_details_name}>
          {t(`staff.${name}.name`)}
        </div>
        <div className={styles.card_details_role}>
          {t(`staff.${name}.role`)}
        </div>
      </div>
      <div className={styles.card_social_links}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github" />
        </a>
        <a href={linkdin} target="_blank" rel="noopener noreferrer">
          <img src={linkdinIcon} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

const Carousel = () => {
  const images = [
    {
      id: 0,
      image: image1,
    },

    {
      id: 1,
      image: image1,
    },
    {
      id: 2,
      image: image1,
    },
    {
      id: 3,
      image: image1,
    },
    {
      id: 4,
      image: image1,
    },
  ];

  const [shownImage, setShownImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setShownImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel_container}>
      <img
        src={images[shownImage].image}
        alt=""
        onClick={() =>
          setShownImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      />
      <div className={styles.carousel_indicator_container}>
        {images.map((indicator) => (
          <div
            key={indicator.id}
            className={`${styles.carousel_indicator} ${
              indicator.id === shownImage
                ? styles.carousel_active_indicator
                : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  let isRTL = i18n.language === "ar" || i18n.language === "ir";

  const developers = [
  {
    id: 1,
    name: "shahroodi_key",
    image: shahroodiImg,
    linkdin: "https://www.linkedin.com/in/kiarash-shahroudi-188294242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/kiarash-sh81",
  },
  {
    id: 2,
    name: "khoshzaban_key",
    image: khoshzabanImg,
    linkdin: "",
    github: "",
  },
  {
    id: 3,
    name: "OG_key",
    image: OGImg,
    linkdin:
      "https://www.linkedin.com/in/elahe-yaghoubi-00929524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/elaheyaghoubi",
  },
  {
    id: 4,
    name: "khadem_key",
    image: khademImg,
    linkdin: "",
    github: "",
  },
  {
    id: 5,
    name: "pashaki_key",
    image: pashakiImg,
    linkdin: "",
    github: "",
  },
  {
    id: 6,
    name: "cheraghali_key",
    image: cheraghaliImg,
    linkdin:
      "https://www.linkedin.com/in/daniyal-cheraghalikhani-126609329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/danitekcher",
  },
];


  const leaders = [
    {
      id: 1,
      name: "sazgar_key",
      image: sazgarImg,
      linkdin: "https://www.linkedin.com/in/rm-sazgar-b0b472202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/Ramtin-sa",
    },
    {
      id: 2,
      name: "farhad_key",
      image: farhadImg,
      linkdin: "https://linkedin.com/in/im-ali-farhad",
      github: "https://github.com/im-ali-f",
    },
  ];

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
          <Carousel></Carousel>

          <div className={styles.info}>
            <p>
              <span>{t("lahzecard")} </span>
              {t("aboutusparageraph")}
            </p>
            <img src={AboutUspic} alt="" />
          </div>

          <Divider text="team_lead" />

          <div className={styles.leaders_container}>
            {leaders.map((person) => (
              <ProfileCard person={person}></ProfileCard>
            ))}
          </div>

          <Divider text="team_development" />

          <div className={styles.developers_container}>
            <div>
              {developers.map((person) => (
                <ProfileCard person={person}></ProfileCard>
              ))}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
