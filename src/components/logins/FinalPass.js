import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const FinalPass = () => {
    const navigate=useNavigate();
    const [idtemp,setidtemp]=useState("");
    const [pass,setpass]=useState("");
    const [passtemp,setpasstemp]=useState("");
    const submit =async ()=>{
        if(pass!==passtemp){
            alert("Please Enter Same Password!!");
        }else{
        const details={
            id:idtemp,
            pass:passtemp
          }
          alert("Password changed successfully!!")
          navigate('/');
              try{
            await axios.put("http://localhost:8900/records/"+idtemp,details);
              }
              catch(err){
                console.log(err);
              }
        }
      }
  return (
    <div className='container' id='change'>
    <div className='pass' style={{padding:"40px",margin:"10%"}}>
  <center><br/>
        <input className='input_style' type='text' value={idtemp} onChange={(e)=>setidtemp(e.target.value)} placeholder='Email'></input><br/><br/>
    <input className='input_style' type='text' value={passtemp} onChange={(e)=>setpasstemp(e.target.value)} placeholder='Enter New Password'></input><br/><br/>
    <input className='input_style' type='text' value={pass} onChange={(e)=>setpass(e.target.value)} placeholder='Confirm Your Password'></input><br/><br/>
    <button className='home_button' onClick={submit}>submit</button><br/><br/>
    </center>
            </div>
            </div>
  )
}

export default FinalPass
