import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Admin.css'
const Adminlogin = () => {
    const navigate=useNavigate();
    const [id,setid]=useState("");
    const [pass,setpass]=useState("");
    const submit=()=>{
      if(id==="satya" && pass==="123"){
        navigate('/admin');
      }else{
        alert("Not allowed!!")
      }
    }
  return (
    <div className='container admin' id='change'>
        <div className='pass'>
    <center>
        <h1>Admin Login</h1><br/><br/>
        <form>
    <input className='input_style' type='text' value={id} onChange={(e)=>setid(e.target.value)} placeholder='Enter Id' ></input><br/><br/>
    <input className='input_style' type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setpass(e.target.value)}></input><br/><br/>
    <button className='admin_button' type='submit' onClick={submit}>submit</button>
    </form>
    </center>
    </div>
  </div>
  )
}

export default Adminlogin
