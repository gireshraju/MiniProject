import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';

const OTP = () => {
  const {x}=useParams();
    const navigate=useNavigate();
    const [otp,setOtp]=useState("");
    const submit=()=>{
        if(otp===x.slice(7,11))
        navigate('/finalpass');
        else
        alert("Please Enter Valid OTP!!");
    }
  return (  
    <div className='container' id='change'>
    <div className='pass' style={{padding:"40px",margin:"10%"}}>
    <center><br/>
    <h3>OTP is Sent to your Mail!!</h3><br></br>
    <h3>Please Enter It!!</h3><br></br>
        <input className='input_style' type='text' value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder='Enter OTP'></input><br/><br/>
        <button className='home_button' onClick={submit}>submit</button><br/><br/>
        </center>
            </div>
            </div>      
  )
}

export default OTP
