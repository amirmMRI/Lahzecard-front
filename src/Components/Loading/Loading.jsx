import React from 'react';
import styles from "./Loading.module.css"
import logo from"../../Images/logoforfooter.png"
const Loading = () => {
    return (
        <div className={styles.bigbox}>
            <img src={logo} alt="loading..." />
            <br />
            
            
        </div>
    );
};

export default Loading;