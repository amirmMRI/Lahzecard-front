import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
// Style
import styles from './Sellerpanel.module.css'

// Images
import userprof from '../../../../Images/partner2.png'
import phone from '../../../../Images/phone.png'
import instagram from '../../../../Images/instagram.png'
import home from '../../../../Images/home.png'
import edit from '../../../../Images/edit.png'
import exit from '../../../../Images/exit.png'
import attention from '../../../../Images/attantion.png'
import close from '../../../../Images/close.png'
import tic from '../../../../Images/tic.png'
import greentic from '../../../../Images/green_tic.png'

const SellerPanel = () => {

    // Gathering data
    const localCN = JSON.parse(localStorage.getItem('OperatorData'));
    const partnerName = localCN.contractParties.name;
    const partnerAddress = localCN.contractParties.address;
    const partnerInsta = localCN.contractParties.instaAddress;
    const partnerLogo = localCN.contractParties.logoAddress;
    const partnerPhone = localCN.contractParties.phone;
    const partnerId = localCN.contractParties.id

    // button handlers
    
    // LogoutHandler func and state
    
    const Navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const LogoutHandler = () => {
        setAlert(true)
    }
    
    const logoutCancel = () => {
        setAlert(false)
    }
    
    const logoutActivate = () => {
        // Delete the user data from the computer.
        // localStorage.clear("user");
        console.log("askljfgalsg");
        Navigate("/home");
    }
    
    // navbar funcs and states
    const [navbarAvtive, setNavbarActive] = useState(false)
    const navbarHandler = () => {
        setNavbarActive(!navbarAvtive)
    }
    
    // Making cp_id
    const cp_id = "c18b4dba-14b2-4805-82b0-193fc07adebe"
    
    // Gathering data func and states
    const [data, setData] = useState({
        user_name: "",
        user_phone: "",
        cardNumber: "",
        primaryAmount: "",
        cp_id: partnerId
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    // Alert message state
    const [cardalert, setcardalert] = useState(false);
    const AlertHandler = () => {
        setcardalert(true)
        setTimeout(() => {
            setcardalert(false)
            console.log(alert);
        }, 2000);
    }


    const [buttonDisable, setButtonDisable] = useState(false);
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MTNiOWE0OS04MDFlLTRmZWQtOTM3Yi1lODQ4MzAxYzc2YWUiLCJwaG9uZSI6IjA5MDM3MTU4NzU1Iiwicm9sZSI6Ik9QRVJBVE9SIiwiaWF0IjoxNzAxMTE1MDM0fQ.CiqttZnvBe10JCIBtXQvPLKKenDw6ABHmlzi-cvmZsc"
    const axiosConficPost = {
        headers: {
            "accept": "*/*",
            "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MTNiOWE0OS04MDFlLTRmZWQtOTM3Yi1lODQ4MzAxYzc2YWUiLCJwaG9uZSI6IjA5MDM3MTU4NzU1Iiwicm9sZSI6Ik9QRVJBVE9SIiwiaWF0IjoxNzAxMTE1MDM0fQ.CiqttZnvBe10JCIBtXQvPLKKenDw6ABHmlzi-cvmZsc",
            'Content-Type': 'application/x-www-form-urlencoded',
            
            // "origin": "*",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
        },
    };

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        const CreateCard_Data = data;
        setButtonDisable(true)
        axios.post("https://api.lahzecard.com/api/card", CreateCard_Data, axiosConficPost)
            .then((response)=> {
                setWelcomeMassage(true)
                AlertHandler();
                console.log(response);
                setIsError_1("")
            })

            .catch((errors)=> {
                console.log(errors)
                setIsError_1(errors.response.data.message)
                setButtonDisable(false)
            })

    }

    return ( 
        <div className={styles.UserPage_Container}>
            <section className={styles.right_sec}>
                <section className={styles.user_profile_info}>
                    <img src={userprof} alt="user profile" className={styles.user_prof_img}/>
                    <h3>{partnerName ?? partnerName}</h3>
                </section>
                <section className={styles.user_profile_info_phone}>
                    <section>
                        <img src={partnerLogo ?? partnerLogo} alt="user profile" className={styles.user_prof_img}/>
                        <h3>{partnerName ?? partnerName}</h3>
                    </section>
                    <div onClick={navbarHandler}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <section className={styles.user_info_sec}>
                    <section>
                        <p>{partnerAddress ?? partnerAddress}</p>
                    </section>
                    <section>
                        <img src={phone} alt="telephone" />
                        <p>{partnerPhone ?? partnerPhone}</p>
                    </section>
                    <section>
                        <img src={instagram} alt="instagram" />
                        <p><a href={partnerInsta ?? partnerInsta}>Instagram Page</a></p>
                    </section>
                </section>
                <section className={styles.user_btn_sec}>
                    <section>
                        <img src={edit} alt="edit" />
                        <p>ویرایش اطلاعات</p>
                    </section>
                    <section>
                        <img src={home} alt="home" />
                        <p>خانه</p>
                    </section>
                    <section onClick={LogoutHandler}>
                        <img src={exit} alt="exit" />
                        <p>خروج از حساب کاربری</p>
                    </section>
                </section>
            </section>
            <section className={styles.left_sec}>

                <section className={styles.threebtn}>
                <Link to="/UserPage" className={styles.rowbtn1}><div >فعالسازی</div></Link>
                <Link to="/AmountPanel"className={styles.rowbtn2}><div >موجودی</div></Link>
                <Link to="/HistoryPanel"className={styles.rowbtn3}><div >سوابق</div></Link>
            </section>
                <section className={styles.threebtninf}>
                    <div className={styles.Activation_Container}>
                        <form onSubmit={submitHandler}>
                            <section className={styles.activation_input_sec}>
                                <p>نام</p>
                                <input
                                    className={styles.formInput}
                                    type='text'
                                    name='user_name'
                                    value={data.user_name}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>شماره تلفن</p>
                                <input
                                    className={styles.formInput}
                                    type='number'
                                    name='user_phone'
                                    value={data.user_phone}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>شماره کارت</p>
                                <input
                                    className={styles.formInput}
                                    type='number'
                                    placeholder="تنها عدد وارد کنید"
                                    name='cardNumber'
                                    value={data.cardNumber}
                                    onChange={changeHandler}
                                />
                            </section>
                            <section className={styles.activation_input_sec}>
                                <p>مبلغ شارژ</p>
                                <input
                                    className={styles.formInput}
                                    type='number'
                                    name='primaryAmount'
                                    value={data.primaryAmount}
                                    onChange={changeHandler}
                                />
                                <span>ریال</span>
                            </section>
                            <section className={styles.err_sec}>
                                <p>{isError_1}</p>
                            </section>
                            <section className={styles.activation_btn_sec}>
                                { buttonDisable ?
                                    undefined
                                    :
                                    <button ><img src={tic} alt="tic icon" />فعالسازی</button>
                                }
                                <div></div>
                                <div></div>
                            </section>
                            <div className={cardalert ? styles.alert_div : styles.alert_div_notactive}>
                                <section className={styles.alert_sec} >
                                    <img src={greentic} alt="green tic for an alert message" />
                                    <p>کارت با موفقیت فعال شد.</p>
                                </section>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
            <div className={alert ? styles.alert_div : styles.alert_div_notactive}>
                <section className={styles.alert_sec} >
                    <div className={styles.alert_div_message}>
                        <img src={attention} alt="green tic for an alert message" />
                        <p>می خواهید از حساب خود خارج شوید؟</p>
                    </div>
                    <div className={styles.alert_btn_div}>
                        <button className={styles.logout_activate} onClick={logoutActivate}>بلی</button>
                        <button className={styles.logout_cancel} onClick={logoutCancel}>خیر</button>
                    </div>
                </section>
            </div>
            <div className={navbarAvtive ? styles.navbarAvtive : styles.navbarDeactive}>
                <img className={styles.nav_close_btn} src={close} alt="close button" onClick={navbarHandler} />
                <section className={styles.user_btn_sec_fornav}>
                    <section>
                        <img src={edit} alt="edit" />
                        <p>ویرایش اطلاعات</p>
                    </section>
                    <section>
                        <img src={home} alt="home" />
                        <p>خانه</p>
                    </section>
                    <section onClick={LogoutHandler}>
                        <img src={exit} alt="exit" />
                        <p>خروج از حساب کاربری</p>
                    </section>
                </section>
            </div>
        </div>
     );
}
 
export default SellerPanel;