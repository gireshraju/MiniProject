import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Adduser = () => {
    const [idtemp,setidtemp]=useState("");
    // eslint-disable-next-line
    var found;
    const [s,setS]=useState('n');
    const [t,setT]=useState('n');
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
  
      const submit =async ()=>{
        var found=0;
      for(var a of data){
             // eslint-disable-next-line
            if(a.id==idtemp){
              alert("User already Exists!!")
              found=1;
            }
            // eslint-disable-next-line
            if(sec.length==0){
              alert("Enter Section!!");
              found=1;
              break;
            }
          }
          if(found===0){
            try{
              if(idtemp.startsWith('T')){
               details={
                id:idtemp
              };
              console.log(sec)
               await axios.post("http://localhost:8900/admin/teachers",details);
              for(var i=0;i<sec.length;i++){
                details={
                  id:idtemp,
                  sec:sec[i]
                }
                await axios.post("http://localhost:8900/admin/teachersection",details);
                console.log(sec[i])
              } 
              alert("New Teacher Added!!");
            }
            else{
              details={
                id:idtemp,
                sec:sec
              };
              await axios.post("http://localhost:8900/admin/students",details);
              alert("New Student Added!!");
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
    <h1>Add User</h1><br/>
  <h4>select type</h4>
  <form>
  <input type="radio" id="Teacher" name="typeofsel" value="Teacher" onChange={fetchdata1}/>
<label for="Teacher">Teacher</label><br/>
<input type="radio" id="Student" name="typeofsel" value="Student" onChange={fetchdata2}/>
<label for="Student">Student</label><br/><br/>
<input type='text' className='input_style' value={idtemp} onChange={(e)=>setidtemp(e.target.value)} placeholder='Id of User'></input><br/><br/>

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
<Link to='/add'> <button className='admin_button' type='submit' onClick={submit}>Add User</button></Link><br/><br/>
</form>

  </center>
  </div>
  </div>
  )
}

export default Adduser
