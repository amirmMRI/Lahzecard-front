import React, { useContext, useState,useEffect } from 'react';
import styles from "./comp.module.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import Loading from '../Loading/Loading';
 //image
 import giftpic from "../../Images/its your gift.png"


const Compo = () => {
    const [load,setload]=useState(false)
    const [State,SetState]=useState( {
        isbuttondisabled: false
    })
    const[Data,SetData]=useState({
        phone:""
        })
    
    const Changehandler = (event)=>{
            SetData({
                ...Data,[event.target.name]:event.target.value
    
            })
        }
        const Navigate = useNavigate();







    //valid
    const validate = Data=>{
        const error={};
        if(!Data.phone.trim()){
            error.phone=" !شماره تلفن را کامل کنید"
        }else
        if(isNaN(Data.phone))
        {
         error.phone=" !شماره تلفن را به فرم صحیح وارد کنید" 
        }
        else{
            delete error.phone;
        }
        return error;
    }
    //error
    const [error,SetError]=useState({})
    const [err,SetErr]=useState("")


    //check for error
    useEffect(()=>{
        SetError(validate(Data))
        console.log(error)
    },[Data])
    
    const [Touched,SetTouched]=useState({})

    const Focused=event=>{
        SetErr("")  
        SetTouched({...Touched,[event.target.name]:true})
    }
            

    const Submithandler = (event)=>{
        setload(true)
        event.preventDefault();
        SetError(validate(Data));
        console.log(load)
        SetState({
            isbuttondisabled:true
        })
        console.log(Data)
        axios.post("https://api.lahzecard.com/api/operator/login",Data)
        .then((response)=> {
            if (response.data.statusCode==404) {
                setTimeout(() => {        SetState({
                    isbuttondisabled:false
                })}, 1000);
                setload(false)
                console.log(response);
                SetErr(response.data.message)
                SetErr("!این اطلاعات ثبت نشده")
                // if(!error){

                //     SetErr("!این شماره تلفن ثبت نشده")
                //     console.log(err);
                //     console.log("hi");
                // }else{
                //     SetErr("!شماره تلفن خالی است")
                // }

            }
            else if (response) {

                setTimeout(() => {        SetState({
                    isbuttondisabled:false
                })}, 10000);
                console.log("post shod")
                console.log(response)
                
                localStorage.setItem('Operatorphone', JSON.stringify(Data.phone))
                
                setTimeout(()=>Navigate("/sellerotp"), 1000)
            }
        })

                // .catch((errors)=> {
                //     console.log(errors)

                // })

        .catch((errors)=> {
            setTimeout(() => {        SetState({
                isbuttondisabled:false
            })}, 10000);
            setload(false)
            console.log(errors);
            SetErr(errors.response.data.message)
            console.log(err);

        })
    }


    return (
        <div>       <div className={styles.login_seller}>
            {load?<Loading/>:""}
        <div className={styles.left}>

        


            {/* <div className={styles.Group198}> */}


                <div className={styles.Union}> 
        
                    <div className={styles.customer}>
                        <Link className={styles.Rectangle130} to="/customer"> خریدار </Link>
                        <div className={styles.Rectangle130prim}> فروشنده</div>
                    </div>           


                    <div className={styles.joziyat}>
                        <div className={styles.header}>ورود به عنوان فروشنده </div>
                        
                        {/* <div className={styles.phone}> */}
                            
                            {/* <div className={styles.Rectangle131}> */}
                                
                                {/* </div> */}
                                <form className={styles.phonenumber} onSubmit={Submithandler}>
                                    <label className={styles.labelrect}>شماره همراه</label>
                                <input className={styles.Rectangle131} onChange={Changehandler} value={Data.phone} type="text" name="phone" onFocus={Focused} />
                                {error.phone && Touched.phone && <span className={styles.error}>{error.phone}</span>}
                                {err && <span className={styles.error}>{err}</span>}                                
                                <button disabled={State.isbuttondisabled}  className={styles.Rectangle132prim} type='submit'><span className={styles.links}>ارسال کد</span></button>
                            </form> 
                        {/* </div> */}
                        
                        
                    </div>

                </div>
            {/* </div> */}            
            

             
        </div>
        
        <div className={styles.Group420}>
    <div className={styles.image4}></div>
    <section>
        <div className={styles.Group153 }>چند قدم تا ساخت لحظات شیرین برای نزدیکانت با لحظه کارت</div>
        
        <img className={styles.picholder} src={giftpic} alt="gif picture" width="320px" />
    </section>
</div>
    

    </div>
    </div>


    );
};

export default Compo;