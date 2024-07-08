import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AudioRecorder } from "react-audio-voice-recorder";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as FileSaver from "file-saver";

// Styles
import styles from "./CardPage.module.css";

// Images
import userlogo from "../../../../Images/partner2.png";
import instagram from "../../../../Images/instagram.png";
import phone from "../../../../Images/phone.png";
import website from "../../../../Images/website.png";
import location from "../../../../Images/location.png";
import attetiongrey from "../../../../Images/attentiongrey.png";
import trash from "../../../../Images/trash.png";
import cardexample from "../../../../Images/JustCard.png";

const CardPage = () => {
    const Navigate = useNavigate();
    //show circular progress
    const CircularProgress = ({ value }) => {
        if (value <= 50) {
            return (
                <div style={{ width: "100px", height: "100px" }}>
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            textColor: "#111111",
                            pathColor: "red",
                            trailColor: "#d6d6d6",
                        })}
                    />
                </div>
            );
        } else {
            return (
                <div style={{ width: "100px", height: "100px" }}>
                    <CircularProgressbar
                        value={value}
                        text={`${value}%`}
                        styles={buildStyles({
                            textColor: "#111111",
                            pathColor: "blue",
                            trailColor: "#d6d6d6",
                        })}
                    />
                </div>
            );
        }
    };
    // Getting card info
    const axiosConficGet = {
        headers: {
            "Content-type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const localCN = localStorage.getItem("GiftData");
    const [partnerName, setPartnerName] = useState();
    const [partnerNumber, setPartnerNumber] = useState();
    const [partnerInsta, setPartnerInsta] = useState();
    const [partnerLogo, setPartnerLogo] = useState();
    const [partneraddress, setPartneraddress] = useState();
    const [partnerWeb, setPartnerWeb] = useState();
    const [cardText, setCardText] = useState();
    const [cardVoice, setCardVoice] = useState();
    const [cardAmount, setCardAmount] = useState();

    useEffect(() => {
        if (!localStorage.getItem("GiftData")) {
            Navigate("/customer");
            alert("شما فعلا مجوز ورود به این صفحه رو ندارید");
        } else {
            const getCardInfo = (event) => {
                axios
                    .get(
                        `https://api.lahzecard.com/api/user/NotFilter${localCN.slice(
                            1,
                            -1
                        )}`,
                        axiosConficGet
                    )
                    .then((response) => {
                        if (response) {
                            console.log(response);
                            setPartnerName(
                                response.data.cardInfo.contractParties.name
                            );
                            setPartnerNumber(
                                response.data.cardInfo.contractParties.phone
                            );
                            setPartnerInsta(
                                response.data.cardInfo.contractParties
                                    .instaAddress
                            );
                            setPartnerLogo(
                                response.data.cardInfo.contractParties
                                    .logoAddress
                            );
                            setPartnerWeb(
                                response.data.cardInfo.contractParties
                                    .webAddress
                            );
                            setPartneraddress(
                                response.data.cardInfo.contractParties.address
                            );
                            setCardText(response.data.cardInfo.text);
                            setCardVoice(response.data.cardInfo.voice);
                            setCardAmount(response.data.cardInfo.primaryAmount);
                            setTimeout(() => {
                                localStorage.clear("GiftData");
                            }, 3600000);
                        }
                    })

                    .catch((errors) => {
                        if (errors) {
                            // console.log(errors);
                            alert("مشکلی پیش آمده. دوباره امتحان کنید.");
                        }
                    });
            };

            getCardInfo();
        }
    }, []);

    // const handleDownload = () => {
    //     FileSaver.saveAs(cardVoice, "mp3");
    // };

    return (
        <div className={styles.CardPage_Container}>
            <section className={styles.right_sec}>
                <img
                    src={cardexample}
                    alt="user card example"
                    className={styles.cardexampleforuser}
                />
                {/* <section className={styles.leftover_sec}>
                    <section className={styles.leftover_percent_sec}>
                        <p>25%</p>
                    </section>
                </section> */}

                {/* <CircularProgress value={50} /> */}

                <section className={styles.info_sec}>
                    {/* <div>
                        <p>موجودیه اولیه:</p>
                        {cardAmount && <p>{cardAmount} ریال</p>}
                    </div> */}
                    <div>
                        <p>موجودی کارت:</p>
                        {cardAmount}
                    </div>
                </section>
            </section>
            <section className={styles.left_sec}>
                <div className={styles.activation_info_div}>
                    <section className={styles.activation_info_div_sec_img}>
                        <img src={partnerLogo ?? partnerLogo} alt="user logo" />
                    </section>
                    <section className={styles.activation_info_div_sec_info}>
                        <h2>{partnerName ?? partnerName}</h2>
                        <div
                            className={styles.activation_info_div_sec_info_div}
                        >
                            <div>
                                <img src={website} alt="user info" />
                                <p>
                                    <a href={partnerWeb ?? partnerWeb}>
                                        وبسایت {partnerName}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <img src={instagram} alt="user info" />
                                <p>
                                    <a href={partnerInsta ?? partnerInsta}>
                                        مشاهده اینستاگرام
                                    </a>
                                </p>
                            </div>
                            <div>
                                <img src={phone} alt="user info" />
                                <p>{partnerNumber ?? partnerNumber}</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={styles.activation_input_div}>
                    <a
                        className={styles.user_map_address}
                        href={partneraddress}
                    >
                        <img src={location} alt="location" />
                        <span>برای مسیریابی به {partnerName} کلیک کنید </span>
                    </a>
                    {/* <img src={map} alt="user map address" className={styles.user_map_address}/> */}
                    <section className={styles.activation_input_sec}>
                        <p className={styles.activation_input}>
                            {cardText && cardText}
                        </p>
                    </section>
                    <section className={styles.voice_input_sec} id="voiceRec">
                        <audio
                            src={cardVoice && cardVoice}
                            controls
                            type="audio/aac"
                        ></audio>
                        {/* <button onClick={handleDownload}>download</button> */}
                        {/* <audio controls preload="auto">
                            <source
                                src={cardVoice && cardVoice}
                                type="audio/aac"
                            />
                            Your browser does not support the audio element.
                        </audio> */}
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CardPage;
