import React, { useEffect, useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Changepassword = () => {
    const navigate=useNavigate();
    const [idtemp,setidtemp]=useState("");
    const [data1,setData1]=useState([]);
    const [data2,setData2]=useState([]);
    var found=0;
    const form = useRef();
    const rand = (min=1000, max=9999) => { 
      return (Math.floor(Math.random()  
              * (max - min + 1)) + min); 
  }; 
  const x=rand();
  const [otp,setOtp]=useState(x); 
    const sendEmail = (e) => {
        var data=data2;
        if(idtemp.startsWith('T')){
          data=data1;
        }
        for(var a of data){
          if(a.id===idtemp){
            e.preventDefault();
            emailjs.sendForm('service_46bi9i5', 'template_w5bbk0e', form.current, '-mw_x5xByyLLa6tYH')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
            alert("OTP Sent To Your Mail");
            found=1;
            navigate('/otp/'+"Sgfw!N8"+otp+"12H+Iow829$&vkS^(gf?w>.1?<")
          }
        }
        if(found===0){
          alert("User not found!!");
      }
    };
    useEffect(()=>{   
      const fetchdata=async ()=>{
        try{
          const res=await axios.get("http://localhost:8900/teachers");
          setData1(res.data);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchdata();
    },[]) ;
    useEffect(()=>{   
        const fetchdata=async ()=>{
          try{
            const res=await axios.get("http://localhost:8900/students");
            setData2(res.data);
          }
          catch(err){
            console.log(err);
          }
        }
        fetchdata();
      },[]) ;
        return(
          <form ref={form} onSubmit={sendEmail}>
            <div className='container' id='change'>
              <div className='pass' style={{padding:"40px",margin:"10%"}}>
            <center><br/>
              <h1>Change password</h1><br/><br/><br/>
              <input className='input_style' type='text' value={idtemp} onChange={(e)=>setidtemp(e.target.value)} placeholder='Email'></input><br/><br/>
              <input type="email" name="to_email" value={"svecprojectbatch1@gmail.com"} style={{display:"none"}}/>
              <input type="text" name="user_name" value={idtemp} style={{display:"none"}}/>
              <input type="text" name="otp" value={otp} style={{display:"none"}}/>
              <Link to='/' style={{color:"blue",textDecoration:"none"}}>go home!!</Link><br/><br/>
              <button className='home_button' type='submit'>submit</button><br/><br/>    
            </center>
            </div>
            </div>
            </form>  
        );
}
export default Changepassword
