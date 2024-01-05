import React from "react";

// Styles
import styles from './Remaningcard.module.css'

const Remaningcard = ({productData}) => {
    return ( 
        <div className={styles.Remaningcard_Container}>
            <section className={styles.remaiming_main_sec}>
                <div className={styles.remaiming_main_sec_div1}>
                    <p>شماره کارت</p>
                    <p>نام</p>
                    <p>شماره همراه</p>
                    <p>مبلغ</p>
                    <p>تاریخ</p>
                </div>
                <div className={styles.remaiming_main_sec_div2}>
                    <p>{productData.card.cardNumber}</p>
                    <p>{productData.card.user.name}</p>
                    <p>{productData.card.user.phone}</p>
                    <p>{productData.spentPrice}</p>
                    <p>{productData.spentDate.substring(0,10)}</p>
                </div>
            </section>
        </div>
     );
}
 
export default Remaningcard;