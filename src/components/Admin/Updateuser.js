import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Updateuser = () => {
    const [idtemp,setidtemp]=useState("");
    var details={id:"--",sec:"--"};
    const [s,setS]=useState('n');
    const [t,setT]=useState('n');
// eslint-disable-next-line
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
        setS('n');
        setT('b');
      }
     
        const fetchdata2=async ()=>{
          try{
            const res=await axios.get("http://localhost:8900/students");
            setData(res.data);
          }
          catch(err){
            console.log(err);
          }
          setS('b');
          setT('n');
        }
  
        const update =async ()=>{
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
                await axios.put("http://localhost:8900/del/teachersection",details);
                for(var i=0;i<sec.length;i++){
                  details={
                    id:idtemp,
                    sec:sec[i]
                  }
                  await axios.post("http://localhost:8900/admin/teachersection",details);
                  console.log(sec[i])
                } 
                alert("Teacher Updated!!");
              }
              else{
                details={
                  id:idtemp,
                  sec:sec
                };
                await axios.put("http://localhost:8900/del/students",details);
                await axios.post("http://localhost:8900/admin/students",details);
                alert("Student Updated!!");
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
    <h1>Update User</h1><br/>
  <h4>select type</h4>
  <form>
  <input type="radio" id="Teacher" name="typeofsel" value="Teacher" onChange={fetchdata1}/>
<label for="Teacher">Teacher</label><br/>
<input type="radio" id="Student" name="typeofsel" value="Student" onChange={fetchdata2}/>
<label for="Student">Student</label><br/><br/>
<input className='input_style' type='text' value={idtemp} onChange={(e)=>setidtemp(e.target.value)} placeholder='Id of User'></input><br/><br/>

<div id={t}>
     <h4>select Sections</h4>
     <form>
  <input type="checkbox" id="CSEA" name="typeofsel" value="CSEA" onChange={()=>setsec([...sec,"CSEA"])}/>
<label for="CSEA">CSE A</label><br/>
<input type="checkbox" id="CSEB" name="typeofsel" value="CSEB" onChange={()=>setsec([...sec,"CSEB"])}/>
<label for="CSEB">CSE B</label><br/>
 <input type="checkbox" id="CSEC" name="typeofsel" value="CSEC" onChange={()=>setsec([...sec,"CSEC"])}/>
 <label for="CSEC">CSE C</label><br/>
 <input type="checkbox" id="CSED" name="typeofsel" value="CSED" onChange={()=>setsec([...sec,"CSED"])}/>
 <label for="CSED">CSE D</label><br/>
 </form>
     </div>

     <div id={s}>
     <h4>select Section</h4>
     <form>
  <input type="radio" id="CSEA" name="typeofsel" value="CSEA" onChange={()=>setsec(["CSEA"])}/>
<label for="CSEA">CSE A</label><br/>
<input type="radio" id="CSEB" name="typeofsel" value="CSEB" onChange={()=>setsec(["CSEB"])}/>
<label for="CSEB">CSE B</label><br/>
 <input type="radio" id="CSEC" name="typeofsel" value="CSEC" onChange={()=>setsec(["CSEC"])}/>
 <label for="CSEC">CSE C</label><br/>
 <input type="radio" id="CSED" name="typeofsel" value="CSED" onChange={()=>setsec(["CSED"])}/>
 <label for="CSED">CSE D</label><br/>
 </form>
     </div>

<Link to='/admin' style={{color:"blue",textDecoration:"none"}}>Go Back to Login!!</Link><br/><br/>
<Link to='/update'> <button className='admin_button' type='submit' onClick={update}>Update User</button></Link><br/><br/>
</form>
  </center>
  </div>
  </div>
  )
}

export default Updateuser
