import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CommentsCarouselComponent.module.css";
import brand_ziviyeh from "../../Images/brands/Frame 1171275933 1.jpg";
import brand_pedra from "../../Images/brands/16534668626016 1.jpg";
import brand_sazgardnt from "../../Images/brands/16045956227427 1.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import e from "cors";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow },
  } = rest;
  const totalSlides = rest.carouselState.totalItems;
  const isMobile =
    rest.carouselState.deviceType === "tablet" ||
    rest.carouselState.deviceType === "mobile";

  return (
    <div
      className={`${styles.carousel_button_container} ${
        isMobile ? styles.mobile : styles.desktop
      }`}
    >
      {isMobile ? (
        <>
          <button
            className={`${styles.carousel_button} ${styles.prev_button} ${
              currentSlide === 0 ? styles.disabled : ""
            }`}
            onClick={() => previous()}
            disabled={currentSlide === 0}
          >
            <svg width="61" height="61" viewBox="0 0 62 62" fill="none">
              <path
                d="M33.0613 21.1387L42.2266 30.3039M42.2266 30.3039L33.0613 39.4692M42.2266 30.3039H19.3135"
                stroke="#501A60"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.carousel_button} ${styles.next_button} ${
              currentSlide >= totalSlides - slidesToShow ? styles.disabled : ""
            }`}
            onClick={() => next()}
            disabled={currentSlide >= totalSlides - slidesToShow}
          >
            <svg width="61" height="61" viewBox="0 0 63 62" fill="none">
              <path
                d="M29.134 21.1385L19.9688 30.3039M19.9688 30.3039L29.134 39.4691M19.9688 30.3039H42.8818"
                stroke="#501A60"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      ) : (
        <div className={styles.center_buttons}>
          <button
            className={`${styles.carousel_button} ${
              currentSlide === 0 ? styles.disabled : ""
            }`}
            onClick={() => previous()}
            disabled={currentSlide === 0}
          >
            <svg width="61" height="61" viewBox="0 0 62 62" fill="none">
              <path
                d="M33.0613 21.1387L42.2266 30.3039M42.2266 30.3039L33.0613 39.4692M42.2266 30.3039H19.3135"
                stroke="#501A60"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.carousel_button} ${
              currentSlide >= totalSlides - slidesToShow ? styles.disabled : ""
            }`}
            onClick={() => next()}
            disabled={currentSlide >= totalSlides - slidesToShow}
          >
            <svg width="61" height="61" viewBox="0 0 63 62" fill="none">
              <path
                d="M29.134 21.1385L19.9688 30.3039M19.9688 30.3039L29.134 39.4691M19.9688 30.3039H42.8818"
                stroke="#501A60"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const CommentsCarouselComponent = () => {
  const { t, i18n } = useTranslation();
  const [showTranslate, setShowTranslate] = useState(false);
  const isRTL = i18n.language === "ar" || i18n.language === "ir";

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "رستوران پدرا",
      text: "نوآوری خیلی خوب و جالبی بود. برای هدیه دادن به مشتریان از طرف رستوران پدرا استفاده کردیم.",
      rating: 5,
      avatar: brand_pedra,
      nameKey: "testimonials.1.name",
      textKey: "testimonials.1.text",
      showTranslation: false,
    },
    {
      id: 2,
      name: "طافروشی زیویه",
      text: "سلام، ممنونم از خدمات خوب شما. امیدوارم کلی اتفاق خوب و موفقیت‌های بیشتر در تیم حرفه‌ای‌تون باشه.",
      rating: 5,
      avatar: brand_ziviyeh,
      nameKey: "testimonials.2.name",
      textKey: "testimonials.2.text",
      showTranslation: false,
    },
    {
      id: 3,
      name: "دندان پزشک‌ دکتر پورنگ سازگار",
      text: "پشتیبانی عالی و خوب. برای هدیه‌های مناسبتی به مریضانم استفاده کردم و خیلی راضی بودم.",
      rating: 5,
      avatar: brand_sazgardnt,
      nameKey: "testimonials.3.name",
      textKey: "testimonials.3.text",
      showTranslation: false,
    },
  ]);

  const StarIcon = () => (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.mx_1}
    >
      <path
        d="M14.1707 9.92737C15.0536 7.72643 15.495 6.62596 16.2122 6.47344C16.4007 6.43333 16.5956 6.43333 16.7842 6.47344C17.5014 6.62596 17.9428 7.72643 18.8257 9.92737C19.3277 11.179 19.5788 11.8048 20.0485 12.2305C20.1802 12.3499 20.3232 12.4562 20.4755 12.548C21.0184 12.8752 21.6962 12.9359 23.0516 13.0573C25.3462 13.2628 26.4934 13.3655 26.8438 14.0197C26.9163 14.1552 26.9657 14.3018 26.9897 14.4536C27.1059 15.1865 26.2625 15.9539 24.5756 17.4885L24.1072 17.9147C23.3186 18.6322 22.9243 18.9909 22.6962 19.4386C22.5594 19.7072 22.4676 19.9964 22.4247 20.2948C22.353 20.7921 22.4685 21.3125 22.6994 22.3534L22.7819 22.7252C23.1961 24.5918 23.4031 25.5252 23.1446 25.9839C22.9125 26.396 22.4848 26.6598 22.0123 26.6824C21.4863 26.7075 20.7452 26.1036 19.263 24.8958C18.2865 24.1 17.7982 23.7022 17.2562 23.5468C16.7608 23.4047 16.2356 23.4047 15.7402 23.5468C15.1982 23.7022 14.7099 24.1 13.7334 24.8958C12.2512 26.1036 11.51 26.7075 10.9841 26.6824C10.5116 26.6598 10.0839 26.396 9.85175 25.9839C9.59326 25.5252 9.80033 24.5919 10.2145 22.7252L10.297 22.3534C10.5279 21.3125 10.6434 20.7921 10.5717 20.2948C10.5288 19.9964 10.437 19.7072 10.3002 19.4386C10.0721 18.9909 9.67781 18.6322 8.88919 17.9147L8.42077 17.4885C6.73393 15.9539 5.89051 15.1865 6.00666 14.4536C6.03072 14.3018 6.08005 14.1552 6.15261 14.0197C6.50296 13.3655 7.65024 13.2628 9.94478 13.0573C11.3002 12.9359 11.978 12.8752 12.5209 12.548C12.6731 12.4562 12.8162 12.3499 12.9479 12.2305C13.4176 11.8048 13.6687 11.179 14.1707 9.92737Z"
        fill="#FFE966"
        stroke="#FFE966"
        strokeWidth="2"
      />
    </svg>
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const onClickTranslate = (id) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial) =>
        testimonial.id === id
          ? { ...testimonial, showTranslation: !testimonial.showTranslation }
          : testimonial
      )
    );
  };

  return (
    <div className={styles.carousel_container}>
      <Carousel
        responsive={responsive}
        infinite={false}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
        containerClass={styles.carousel_container_class}
        itemClass={styles.carousel_item}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonial_card}>
            <div className={styles.testimonial_card_content}>
              <img
                className={styles.carousel_brand_icon}
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <div className={styles.testimonial_card_content_header}>
                {testimonial.showTranslation
                  ? i18n.language === "ir"
                    ? t(testimonial.nameKey, { lng: "en-US" })
                    : t(testimonial.nameKey)
                  : testimonial.name}
              </div>
            </div>
            <div
              style={{
                direction: testimonial.showTranslation
                  ? i18n.language === "ar"
                    ? "rtl" 
                    : "ltr"
                  : "rtl",
              }}
              className={styles.carousel_text}
            >
              {testimonial.showTranslation
                ? i18n.language === "ir"
                  ? t(testimonial.textKey, { lng: "en-US" })
                  : t(testimonial.textKey)
                : testimonial.text}
            </div>

            <div>
              <div
                onClick={() => onClickTranslate(testimonial.id)}
                className={styles.translation_section}
              >
                {!testimonial.showTranslation
                  ? "Show Translation"
                  : "See Original"}
              </div>

              <div className={styles.carousel_stars}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CommentsCarouselComponent;
