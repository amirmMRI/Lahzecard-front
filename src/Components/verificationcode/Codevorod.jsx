import React, { useState,useRef,useEffect } from 'react';
import ReactDOM from 'react-dom'
import { faTriangleExclamation,faArrowLeftLong} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./codevorod.module.css"
 //image
 import giftpic from "../../Images/giftmaking.png"

    const Codevorod = () => {
        const [load,setload]=useState(false)
        const [State,SetState]=useState( {
            isbuttondisabled: false,
            isbuttondisabled2: false
    
        })
            const[Data,SetData]=useState({
                ref2:"",
                ref3:"",
                ref4:"",
                ref5:"",
                ref6:"",

            
            })
            const[Value,SetValue]=useState({
                ref2:false,
                ref3:false,
                ref4:false,
                ref5:false,
                ref6:false,
        
            
            })
            const[header,setHeader]=useState({
                headers:{
                    'accept': '*/*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
              })
            const[Code,SetCode]=useState({})
            const phone={phone:JSON.parse(localStorage.getItem('Operatorphone'))}

            const Buttonhandler =event=>{
                setload(true)
                SetState({...State,
                    isbuttondisabled2:true
                })
                axios.post("https://api.lahzecard.com/api/operator/login",phone)
                .then((response)=> {
                    
                    if (response) {

                        SetErr("...درخواست کد جدید دادیم منتظر بمونید")
                        setload(false)
                        
                        setTimeout(() => {        SetState({
                            isbuttondisabled2:false
                        })}, 30000);
                    }
                })
            }

            const Changehandler = (event)=>{
                SetData({
                    ...Data,[event.target.name]:event.target.value

                })
                SetValue({
                    ...Value,[event.target.name]:true
        
                }) 

                validate(event.target.value,Data)
                // SetCode(
                //     {
                //        phone:`${JSON.parse(localStorage.getItem('phone'))}`,
                //        code:`${Data.ref2}${Data.ref3}${Data.ref4}${Data.ref5}${Data.ref6}`
                //     }
                // )
                console.log(Code)


            }
            const [error,SetError]=useState({})
            const [err,SetErr]=useState()


            const Navigate = useNavigate();


            useEffect(() => {
                
                if (!localStorage.getItem("Operatorphone")) {
                    Navigate("/seller");
                    
                    
                }
            }, []);
            
                //valid
                const validate = (event,Data)=>{
                    // const error={};
                    // console.log(isNaN(Data.phone))

                    
                    if(Object.keys(Data).length < 4)
                    {
                        if(isNaN(event)){

                            error.phone=" ! فرمت و تعداد کد درست نیست" 
                        }else
                        {error.phone=" ! کد را تکمیل کنید"}
                    }
                    else            
                    if(isNaN(event))
                    {
                    error.phone=" ! فرمت کد را درست وارد کنید" 
                    console.log("format ter")
                    }
                    else{
                        delete error.phone;
                        

                    }
                    
                }





            //for input focus
            const ref = useRef(null);    
            const ref2 = useRef(null);
            const ref3 = useRef(null);
            const ref4 = useRef(null);
            const ref5 = useRef(null);
            const ref6 = useRef(null);


   const Keyup=(event)=>{
        
        if(event.code==="Backspace" || event.keyCode=="8" ){
            
            if(event.target.name=="ref3" && !(Value.ref3))
            {ref.current.focus();}
            else
            if(event.target.name=="ref3" && (Value.ref3))
            {
                ref2.current.focus();
                
                SetValue({
                    ...Value,[event.target.name]:false
        
                })  
            }
            else
            if(event.target.name=="ref4" && !(Value.ref4))
            {ref2.current.focus();}
            else
            if(event.target.name=="ref4" && (Value.ref4))
            {
                ref3.current.focus();
                SetValue({
                    ...Value,[event.target.name]:false
        
                })  }
            else
            if(event.target.name=="ref5" && !(Value.ref5))
            {ref3.current.focus();}
            else
            if(event.target.name=="ref5" && (Value.ref5))
            {
                ref4.current.focus();
                SetValue({
                    ...Value,[event.target.name]:false
        
                })    
            }
            else
            if(event.target.name=="ref6" && !(Value.ref6))
            {
                ref4.current.focus();
                console.log(Data)
            }
            else
            if(event.target.name=="ref6" && (Value.ref6))
            { 
                ref5.current.focus();
                    SetValue({
                        ...Value,[event.target.name]:false
            
                    })        
            }
            // if(event.target.name=="ref4")
            // {ref2.current.focus();}
            // else
            // if(event.target.name=="ref5")
            // {ref3.current.focus();}
            // else
            // if(event.target.name=="ref6")
            // {ref4.current.focus();}
        }
        else{
            
        if(event.target.name=="ref2")
        {ref2.current.focus();}
        else
        if(event.target.name=="ref3")
        {ref3.current.focus();}
        else
        if(event.target.name=="ref4")
        {ref4.current.focus();}
        else
        if(event.target.name=="ref5")
        {ref5.current.focus();}

        }
        // if(event.target.name=="ref6")
        // {ref6.current.focus();}
    }
            useEffect(()=>{
                SetCode(
                    {
                    phone:`${JSON.parse(localStorage.getItem('Operatorphone'))}`,
                    code:`${Data.ref2}${Data.ref3}${Data.ref4}${Data.ref5}${Data.ref6}`
                    }
                )
            },[Data])

            const Submithandler = (event)=>{
                event.preventDefault();
                SetState({...State,
                    isbuttondisabled:true
                })
                setload(true);
                

                if(Code.code.length < 5)
                {    console.log(Code)
                    console.log(Data)
                    
                    error.phone=" ! کد کامل نیست"
                    
                }else{
                    console.log(Code)
                    axios.post("https://api.lahzecard.com/api/operator/checkOtp",Code,header)
                    .then((response)=> {
                        if (response) {
                            setTimeout(() => {        SetState({...State,
                                isbuttondisabled:false
                            })}, 3000);

                            console.log("post shod")
                            console.log(response)
                            
                            localStorage.setItem('OperatorData', JSON.stringify(response.data.operator))
                            localStorage.setItem('OperatorToken', JSON.stringify(response.data.accessToken))
                            
                            setTimeout(()=>Navigate("/UserPage"), 100)
                        }
                    })
                    .catch((errors)=> {
                        if (errors.code=="ERR_NETWORK") {
                            setTimeout(() => {        SetState({
                                isbuttondisabled:false
                            })}, 2000);
                            setload(false)
                            console.log(errors);
                            SetErr(" !کد اشتباه است")
                            
            
                        }else
                        {console.log(errors);
                        setTimeout(() => {        SetState({...State,
                            isbuttondisabled:false
                        })}, 1000);
                        setload(false)
                        // SetErr(errors.response.data.message)
                        console.log(errors.code);
                    }
            
            
                    })
                }


            }

            return (


            <div className={styles.login_seller}>
                {load?<Loading/>:""}

                <div className={styles.left}>

                


                    {/* <div className={styles.Group198}> */}


                        <div className={styles.Union}> 
                        


                            <div className={styles.joziyat}>
                                <div className={styles.header}>لطفا کد ارسال شده را وارد کنید </div>
                                
                                {/* <div className={styles.phonenumber}> */}
                                    
                                    {/* <div className={styles.Rectangle131}> */}
                                        
                                        {/* </div> */}
                                    <form className={styles.phonenumber} onSubmit={Submithandler}>
                                        {/* <input className={styles.Rectangle131} onChange={Changehandler} value={Data.phonenumber} type="text" name="phonenumber" /> */}
                                    
                                            
                                        <div className={styles.input} >
                                    <input className={styles.input1} onChange={Changehandler} onKeyUp={Keyup} ref={ref}  id='input1' name='ref2' inputmode="numeric" maxLength="1" type='text' pattern="[0-9]{1}" title='عدد لاتین در رمز یکبار مصرف را وارد کنید' />
                                    <input className={styles.input2} onChange={Changehandler} onKeyUp={Keyup} ref={ref2} id='input2' name='ref3' inputmode="numeric" maxLength="1" type='text' pattern="[0-9]{1}" title='عدد لاتین در رمز یکبار مصرف را وارد کنید'  />
                                    <input className={styles.input3} onChange={Changehandler} onKeyUp={Keyup} ref={ref3} id='input3' name='ref4' inputmode="numeric" maxLength="1" type='text' pattern="[0-9]{1}" title='عدد لاتین در رمز یکبار مصرف را وارد کنید' />
                                    <input className={styles.input4} onChange={Changehandler} onKeyUp={Keyup} ref={ref4} id='input4' name='ref5' inputmode="numeric" maxLength="1" type='text' pattern="[0-9]{1}" title='عدد لاتین در رمز یکبار مصرف را وارد کنید' />
                                    <input className={styles.input5} onChange={Changehandler} onKeyUp={Keyup} ref={ref5} id='input5' name='ref6' inputmode="numeric" maxLength="1" type='text' pattern="[0-9]{1}" title='عدد لاتین در رمز یکبار مصرف را وارد کنید' />
                                </div>

                                    {/*  */}
                                    {/*  */}
        {/*شرط های لازم واسه کد ورود باید در این قسمت اضافه شود */}
                                        {/* <div className={styles.errore}>.کد وارد شده صحیح نمی باشد<FontAwesomeIcon icon={faTriangleExclamation} style={{margin:"0px 0 0 12px",color: "#ff0000",}} /></div> */}
                                        <div className={styles.errore}>{error.phone && <span className={styles.error}>{error.phone} {error.format} <FontAwesomeIcon icon={faTriangleExclamation} style={{margin:"0px 0 0 12px",color: "#ff0000",}} /></span>}</div>
                                        {err && <span className={styles.error}>{err}</span>}


                                        <button  disabled={State.isbuttondisabled} className={styles.Rectangle132prim} type='submit'>  <span className={styles.links} >تایید کد</span></button>
                                        <button disabled={State.isbuttondisabled2}className={styles.Rectangle132pp} onClick={Buttonhandler}> ارسال مجدد کد</button>
                                    
                                    {/*  */}
                                    {/*  */}
                                    {/*  */}

                                    </form>
                                {/* </div> */}
                                
                                
                            </div>
                        </div>
                    {/* </div> */}            
                    
                    <Link to="/seller" className={styles.circle}><FontAwesomeIcon icon={faArrowLeftLong} size="2xl" style={{fontSize:"48px",color: "#F4E3EE"}} /></Link>
                </div>
                
                
                
        
        <div className={styles.Group420}>
            <div className={styles.image4}></div>
            <section>
                <div className={styles.Group153 }>چند قدم تا ساخت لحظات شیرین با لحظه کارت</div>
                
                <img className={styles.picholder} src={giftpic} alt="gif picture" width="320px" />
            </section>
        </div>

            

            </div>
            );
    };

    export default Codevorod;