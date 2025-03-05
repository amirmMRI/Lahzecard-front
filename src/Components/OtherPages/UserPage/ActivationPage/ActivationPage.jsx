import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AudioRecorder } from "react-audio-voice-recorder";
import Loading from "../../../Loading/Loading";
// Style
import styles from "./ActivationPage.module.css";

// Images
import userlogo from "../../../../Images/partner2.png";
import instagram from "../../../../Images/instagram.png";
import phone from "../../../../Images/phone.png";
import website from "../../../../Images/website.png";
import map from "../../../../Images/map.png";
import location from "../../../../Images/location.png";
import attetiongrey from "../../../../Images/attentiongrey.png";
import trash from "../../../../Images/trash.png";
import step1 from "../../../../Images/activationpage1.png";
import step2 from "../../../../Images/activationpage2.png";
import tic2 from "../../../../Images/tic2.png";

// Componentes

const ActivationPage = () => {
    const Navigate = useNavigate();
    const [os, setOs] = useState();

    useEffect(() => {
        if (!localStorage.getItem("CustomerData")) {
            Navigate("/home");
        }
        const userAgent = navigator.userAgent;
        const isAndroid = userAgent.includes("Android");
        const isWindoes = userAgent.includes("Windows");
        console.log(userAgent);
        if (isAndroid || isWindoes) {
            setOs(true);
        }
    }, []);

    // Voice recording Funcs and
    const [theVoice, setTheVoice] = useState();
    const [voiceFile, setVoiceFile] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        // if (!os) {
        // }
        setTheVoice(blob);
        // the code below changes the blob type and not the file format
        // const convertWebmToMp3 = async () => {
        //     console.log("converttomp3");
        //     setIsLoading(true);
        //     try {
        //         await recorder.initAudio();
        //         await recorder.initWorker();
        //         await recorder.startRecording(blob);
        //         const mp3Blob = await recorder.stopRecording();
        //         setTheVoice(mp3Blob);
        //         console.log(theVoice);
        //     } catch (error) {
        //         console.error("Error converting WebM to MP3:", error);
        //     } finally {
        //         setIsLoading(false);
        //     }
        // };
        // convertWebmToMp3();
        if (voiceFile) return;
        document.getElementById("voiceRec").appendChild(audio);
        setVoiceFile(true);
    };

    const removeChildHandler = () => {
        setVoiceFile(false);
        const parent = document.getElementById("voiceRec");
        parent.removeChild(parent.firstElementChild);
    };

    const fileChangeHandler = (event) => {
        const maxsize = 7 * 1024 * 1024;
        const type = "audio/x-m4a";
        if (event.target.files[0].size > maxsize) {
            alert("فایل مورد نظر نباید بیشتر از 3 مگابایت حجم داشته باشد.");
        } else if (event.target.files[0].type !== type) {
            alert(
                "مشکلی در فرمت ویس ضبط شده ی شما وجود دارد، یا کارت را با تلفن همراه دیگری اسکن کنید و سپس ضبط کنید یا آنکه با استفاده از تبدیل کننده های آنلاین ویس خود را به فرمت ام فور ای در بیاورید."
            );
        } else {
            const Voice = {
                // preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0],
            };

            setTheVoice(Voice.data);
            console.log(theVoice);
        }
    };

    // Gathering data

    const [data, setData] = useState({
        text: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
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

    const localCN = localStorage.getItem("CustomerData");
    const [partnerName, setPartnerName] = useState();
    const [partnerNumber, setPartnerNumber] = useState();
    const [partnerInsta, setPartnerInsta] = useState();
    const [partneraddress, setPartneraddress] = useState();
    const [partnerLogo, setPartnerLogo] = useState();
    const [partnerWeb, setPartnerWeb] = useState();

    const [load, setload] = useState(false);

    useEffect(() => {
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
                            response.data.cardInfo.contractParties.instaAddress
                        );
                        setPartnerLogo(
                            response.data.cardInfo.contractParties.logoAddress
                        );
                        setPartnerWeb(
                            response.data.cardInfo.contractParties.webAddress
                        );
                        setPartneraddress(
                            response.data.cardInfo.contractParties.address
                        );
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
    }, []);

    // Sending Voice message
    const [buttonDisable, setButtonDisable] = useState(false);

    const axiosConficPost = {
        headers: {
            accept: "*/*",
            "Content-Type": "multipart/form-data",
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0OWZlMTk3My03NjdjLTQ0Y2YtYmM4OC03Njc4ZWE2ZmE3NmQiLCJwaG9uZSI6IjA5MDM3MTU4NzU1Iiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MDEyMDQyNjN9.8kf5qMIyfnwgZPOJK3V_Xk-baUhhJs1jeEWnjtYHyTg",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
        },
    };

    const submitHandler = (event) => {
        event.preventDefault();
        let formeData = new FormData();
        formeData.append("text", data.text);
        formeData.append("voice", theVoice);
        setload(true);
        // Log the formdata
        for (var pair of formeData.entries()) {
            // console.log(pair[0] + ", " + pair[1]);
        }
        setButtonDisable(true);
        axios
            .post(
                `https://api.lahzecard.com/api/user/uploadData?cardNumber=${localCN.slice(
                    1,
                    -1
                )}`,
                formeData,
                axiosConficPost
            )
            .then((response) => {
                setload(false);
                alert(
                    "پیام و ویس شما با موفقیت آپلود شد. زمان تقریبی تایید آن: یک روز"
                );
                // console.log(response);
                setTimeout(() => Navigate("/home"), 100);
            })

            .catch((errors) => {
                setload(false);
                // console.log(errors);
                setButtonDisable(false);
            });
    };

    // Rules Norif section funcs and states
    const [notif, setNotif] = useState(true);

    return (
        <div className={styles.ActivationPage_Container}>
            {load ? <Loading /> : undefined}
            {notif ? (
                <section className={styles.RulesNotif_sec}>
                    <div className={styles.rules_div}>
                        <div className={styles.textrule}>

                        <h2>قوانین و مقررات</h2>
                        <p>
                            متن و یا صدای شما بایستی منطبق با قوانین و مقررات
                            جاری کشور باشد در غیر این صورت استارتاپ لحظه کارت
                            مطابق با الزامات و قوانین حاکم، اختیار تام در خصوص
                            رد صدا و یا متن ثبت شده داشته.
                        </p>
                        <p>
                            تمامیه امورات مالی فی مابین مشتری و فروشنده های لحظه
                            کارت می باشد و استارتاپ لحظه کارت هیچگونه مسئولیتی
                            در این خصوص نخواهد داشت.
                        </p>
                        <p>
                            امکان استفاده از اسماء جالله، آیات متبرک قرآن،
                            ادعیه، اسامی و القاب امامان و معصومین وجود ندارد.
                        </p>
                        <p>از آپلود صدای خوانندگان یا آهنگ خودداری نمایید.</p>
                        <p>
                            پس از ثبت صدا و متن شما، امکان ویرایش و پاک کردن از
                            جانب شما وجود ندارد و در صورتی که پس از یک روز صدا و
                            و متن شما در qrcode قرار نگرفت به معنی این است صدا و
                            یا متن شما مورد پذیرش نبوده و لطفا با درنظر گرفتن
                            قوانین مجددا صدا و متن خود را بارگذاری کنید.
                        </p>
                        </div>
                        <div className={styles.rules_btn_div}>
                            <button
                                className={styles.cancel_btn}
                                onClick={() => {
                                    Navigate("/home");
                                }}
                            >
                                انصراف
                            </button>
                            <button
                                className={styles.accept_btn}
                                onClick={() => {
                                    setNotif(false);
                                }}
                            >
                                می پذیرم
                            </button>
                        </div>
                    </div>
                </section>
            ) : undefined}
            <section className={styles.right_sec}>
                <img src={step1} alt="first step" />
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
                            <div className={styles.removeinphone}>
                                <img src={website} alt="user info" />
                                <p>
                                    <a href={partnerWeb ?? partnerWeb}>
                                        Website
                                    </a>
                                </p>
                            </div>
                            <div>
                                <img src={instagram} alt="user info" />
                                <p>
                                    <a href={partnerInsta ?? partnerInsta}>
                                        Instagram Page
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
                    {/* <img
                        src={map}
                        alt="user map address"
                        className={styles.user_map_address}
                    /> */}
                    <a
                        className={styles.user_map_address}
                        href={partneraddress}
                    >
                        <img src={location} alt="location" />
                        <span>برای مسیریابی به {partnerName} کلیک کنید </span>
                    </a>
                    <section className={styles.activation_input_sec}>
                        <input
                            className={styles.activation_input}
                            placeholder="متن پیام دلخواه"
                            type="text"
                            name="text"
                            value={data.text}
                            onChange={changeHandler}
                        />
                    </section>
                    <section className={styles.voice_input_sec} id="voiceRec">
                        {voiceFile ? (
                            <div
                                className={styles.trash_icon}
                                onClick={removeChildHandler}
                            >
                                <img src={trash} alt="trash icon" />
                            </div>
                        ) : (
                            !os && (
                                <AudioRecorder
                                    onRecordingComplete={addAudioElement}
                                    audioTrackConstraints={{
                                        noiseSuppression: true,
                                        echoCancellation: true,
                                    }}
                                    downloadOnSavePress={false}
                                    downloadFileExtension="webm"
                                />
                            )
                        )}
                        {/* THe Audio file will be created here: */}
                    </section>
                    <section className={styles.btn_sec}>
                        {os ? (
                            <input
                                class="hidden"
                                className={styles.input_but}
                                type="file"
                                name="resume"
                                id="files"
                                onChange={fileChangeHandler}
                            />
                        ) : undefined}
                        {os && theVoice ? (
                            <div>
                                <img src={attetiongrey} alt="attention sign" />
                                <p>وویس شما با موفقیت آپلود شد.</p>
                            </div>
                        ) : undefined}
                        {os ? (
                            <div>
                                <img src={attetiongrey} alt="attention sign" />
                                <p>
                                    ویس خود را با ریکوردر تلفن ضبط و سپس با
                                    استفاده از کلید بالا آپلود کنید.
                                </p>
                            </div>
                        ) : undefined}
                        <div>
                            <img src={attetiongrey} alt="attention sign" />
                            <p>
                                در صورت نقض قوانین جمهوری اسلامی صدای شما حذف می
                                شود.
                            </p>
                        </div>
                        <div>
                            <img src={tic2} alt="attention sign" />
                            <p>قوانین و مقررات را مطالعه کرده و می پذیرم.</p>
                        </div>
                        <div className={styles.btn_div}>
                            {buttonDisable ? undefined : (
                                <button
                                    className={styles.submit_btn}
                                    onClick={submitHandler}
                                >
                                    ثبت پیام
                                </button>
                            )}
                            <button
                                className={styles.cancel_btn}
                                onClick={() => {
                                    Navigate("/home");
                                }}
                            >
                                بازگشت
                            </button>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ActivationPage;
