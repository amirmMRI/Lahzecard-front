import React, { useState, useEffect } from 'react';
// import * as Validate from "./validate"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from "./Hamkari.module.css"
import axios from "axios";

//multilanguage
import { useTranslation } from 'react-i18next';
import t from "../../../src/Multilanguage.jsx";
const Hamkari = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        type: "",
        city:"",
        phonenumber:""
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (data) => {

        const errors = {};
            if (!data.name.trim()) {
                errors.name = "*اجباری"
            } else {
                delete errors.name
            }
            if (!data.email) {
                errors.email = "*اجباری"
            } else if (!/\S+@\S+\.\S+/.test(data.email)) {
                errors.email = "درست نیست"
            } else {
                delete errors.email
            }
        
    
        return errors;
    }
    useEffect(() => {
        setErrors(validate(data))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "type") {
            setData({ ...data, [event.target.name]: event.target.value })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            // notify("You signed up successfully", "success")
            axios.post("link",data)
            .then(Response=>console.log(Response))
        } else {
            // notify("Invalid data!", "error")
            
            setTouched({
                name: true,
                email: true,
                city:true,
                type: true,
                phonenumber:true
            })
        }
    }




    return (
        <div className={styles.motherbox}>
           <section className={styles.background}>
                <section className={styles.navbar}>
                    <  Navbar  />
                </section>
                <br />
                <section className={styles.text}>
                    <p><h1 className={styles.text_topic}>{t("workwithus")}</h1></p><br /><br />
                    <p>{t("workwithusparagraph1")}</p><br />
                    <p><h3 className={styles.text_mein}>{t("workwithusparagraph2")}</h3></p>
                    <p>{t("workwithusparagraph3")}</p>
                    <ul className={styles.list}>
                        <header><h1>{t("workwithusli1")}</h1></header>
                        <li>{t("workwithusli2")}</li>
                        <li>{t("workwithusli3")}</li>
                        <li>{t("workwithusli4")}</li>
                        <dl>{t("workwithusli5")}</dl>
                    </ul>

    {/* form */}


                    <form onSubmit={submitHandler} className={styles.formContainer}>
            <section className={styles.formingresponse}>
                <section className={styles.formingresponsecol} >
                <div className={styles.formField}>
                    <label>{t("name")}</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHanlder}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>


                <div className={styles.formField}>
                    <label for="city">{t("city")}</label>
                            <select className={styles.city} name="city">
                                <option value="تهران">تهران</option>
                                <option value="گیلان">گیلان</option>
                                <option value="قزوین">قزوین</option>
                                <option value="اصفهان">اصفهان</option>
                                <option value="مشهد">مشهد</option>
                                <option value="شیراز">شیراز</option>
                                <option value="زنجان">زنجان</option>
                            </select>
                            
                            {errors.phonenumber && touched.phonenumber && <span className={styles.error}>{errors.city}</span>}

                </div>
                </section>
                    <section className={styles.formingresponsecol}>
                        <div className={styles.formField}>
                                    <label className={styles.labelrect}>{t("mobilenum")}</label>
                                        <input className={styles.Rectangle131} onChange={changeHandler} value={data.phonenumber} type="text" name="phonenumber"  onFocus={focusHanlder}  />
                                        {errors.phonenumber && touched.phonenumber && <span className={styles.error}>{errors.phonenumber}</span>}
                            </div> 


                            <div className={styles.formField}>
                                <label>{t("email")}</label>
                                <input
                                    className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    onChange={changeHandler}
                                    onFocus={focusHanlder} />
                                {errors.email && touched.email && <span>{errors.email}</span>}
                            </div>
                    </section>  
            </section>
            <section className={styles.formingresponse}>
            <section className={styles.formingresponsecol}>
                <div className={styles.formField}>
                <label>{t("businesstype")}</label>
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="radio"
                            name="type"
                            value={"کافی شاپ"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>{t("cofe")}</label>
                            <br />
                            <input
                            type="radio"
                            name="type"
                            value={" رستوران"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>{t("Restaurant")}</label>
                            <br />
                            <input
                            type="radio"
                            name="type"
                            value={" سایر موارد"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>{t("others")}</label>
                        
                    </div>
                    {errors.type && touched.type && <span>{errors.type}</span>}
                    </div>
            </section>


            <section className={styles.formingresponsecol}>
                <div className={styles.formField}>
                    <label>{t("NumberofLahzeCardOrders")}</label>   
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="radio"
                            name="Buynum"
                            value={"10-20"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>10-20</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={"20-50"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>20-50</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={"50-100"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>50-100</label>
                            <br />
                            <input
                            type="radio"
                            name="Buynum"
                            value={" سایر موارد"}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                            <label>{t("others")}</label>
                        
                    </div>
                    {errors.type && touched.type && <span>{errors.type}</span>}
                    </div>
                    </section>
                </section>
                <div className={styles.formButtons}>
                    <button type="submit">{t("send")}</button>
                </div>
            </form>

                </section>
            </section>
           <Footer/>
        </div>
    );
};

export default Hamkari;