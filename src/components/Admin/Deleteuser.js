import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Deleteuser = () => {
    const [idtemp,setidtemp]=useState("");
    // eslint-disable-next-line
    var details={id:"--",sec:"--"};
    const [data,setData]=useState([]);
    const [sec,setsec]=useState([]);
   const fetchdata1=async ()=>{
        try{
          const res=await axios.get("http://localhost:8900/teachers");
          setData(res.data);
        }
        catch(err){
          console.log(err);
        }

      }
     
        const fetchdata2=async ()=>{
          try{
            const res=await axios.get("http://localhost:8900/students");
            setData(res.data);
          }
          catch(err){
            console.log(err);
          }

        }
        const del =async ()=>{
            var found=0;
          for(var a of data){
                 // eslint-disable-next-line
                if(a.id==idtemp){
                  found=1;
                }
              }
              if(found===0){
                alert("User Doesn't Exist!!");
              }
              if(found===1){
                try{
                  if(idtemp.startsWith('T')){
                   details={
                    id:idtemp
                  };
                  console.log(sec)
                  await axios.put("http://localhost:8900/del/teachers",details);
                  await axios.put("http://localhost:8900/del/teachersection",details);
                  alert("Teacher Removed!!");
                }
                else{
                  details={
                    id:idtemp
                  };
                  await axios.put("http://localhost:8900/del/students",details);
                  alert("Student Removed!!");
                } 
                      }
                      catch(err){
                        console.log(err);
                      }
          }
          setidtemp("");
          setsec("");
        }
      
  return (
    <div className='container' id='change'>
    <div className='pass' style={{padding:"40px",margin:"10%"}}>
  <center>
    <h1>Delete User</h1>
  <h4>select type</h4>
  <form>
  <input type="radio" id="Teacher" name="typeofsel" value="Teacher" onChange={fetchdata1}/>
<label for="Teacher">Teacher</label><br/>
<input type="radio" id="Student" name="typeofsel" value="Student" onChange={fetchdata2}/>
<label for="Student">Student</label><br/><br/>
<input type='text' className='input_style' value={idtemp} onChange={(e)=>setidtemp(e.target.value)} placeholder='Id of User'></input><br/><br/>

<Link to='/admin' style={{color:"blue",textDecoration:"none"}}>Go Back to Login!!</Link><br/><br/>
<Link to='/delete'> <button className='admin_button' type='submit' onClick={del}>Delete User</button></Link>
</form>
  </center>
  </div>
  </div>
  )
}

export default Deleteuser
