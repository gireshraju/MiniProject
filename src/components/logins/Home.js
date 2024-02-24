import React, { useEffect, useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { store } from '../../App';
import './Home.css';
const Home = () => {
  const [show1,setshow1]=useState("n");
  const [show2,setshow2]=useState("b");
  const [idtemp1,setidtemp1]=useContext(store);
  const [passtemp1,setpasstemp1]=useState("");
  const [idtemp2,setidtemp2]=useContext(store);
  const [passtemp2,setpasstemp2]=useState("");
  const [datastudents,setDatastudents]=useState([]);
  const [datateachers,setDatateachers]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{   
    const fetchdata=async ()=>{
      try{
        const res=await axios.get("http://localhost:8900/students");
        setDatastudents(res.data);
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
        const res=await axios.get("http://localhost:8900/teachers");
        setDatateachers(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchdata();
  },[]) ;

    const submit1 =()=>{
      var found=0;
        for(var a of datateachers){
           // eslint-disable-next-line
          if(a.id==idtemp1 && a.pass==passtemp1){
            alert("Welcome");
           found=1;
            navigate('/teacherlogin')
          }
        }
         // eslint-disable-next-line
        if(found==0){
          alert("Please Check your Details!!");
        }
    }
    const submit2 =()=>{
      var found=0;
        for(var a of datastudents){
           // eslint-disable-next-line
          if(a.id==idtemp2 && a.pass==passtemp2){
            alert("Welcome")
           found=1;
            navigate('/studentlogin')
          }
        }
         // eslint-disable-next-line
        if(found==0){
            alert("Please Check your Details!!");
        }
    }
const set1=()=>{
  setshow1("n");
setshow2("b");
}
const set2=()=>{
  setshow2("n");
  setshow1("b");
} 
  return (
<div class="container" id="container">
<div class="overlay-container" id={show2}>
		<div class="overlay">
	<div class="form-container sign-up-container">
		<form className='form_style' action="#">
			<h1 className='h1_style'>Sign in as Student</h1>
         <br/><br/>
        <input className='input_style' type='text' value={idtemp2} name="idtemp2" onChange={(e)=>setidtemp2(e.target.value)} placeholder='Email'></input><br/><br/>
        <input className='input_style' type='password' value={passtemp2} name="passtemp2" onChange={(e)=>setpasstemp2(e.target.value)} placeholder='password'></input><br/><br/>
        <Link to='/changepass' style={{color:"blue",textDecoration:"none"}}>Forget password?</Link><br/><br/>
			  <button className='home_button' onClick={submit2}>submit</button>
		</form>
	</div>
  <div class="overlay-panel overlay-left">
                <h1 className='h1_style'>Hello !</h1>
                <p className='para_style'>To login as Teacher and review your feedbacks</p>
				<button className='home_button' class="ghost" id="signIn" onClick={set2}>Click Here</button>
			</div>
</div>
</div>
	<div class="overlay-container" id={show1}>
		<div class="overlay">
    <div class="overlay-panel overlay-right">
				<h1 className='h1_style'>Hello !</h1>
                <p className='para_style'>To login as Student and give your suggestions</p>
				<button className='home_button' class="ghost" id="signUp" onClick={set1}>Click Here</button>
			</div>
      <div class="form-container sign-in-container">
		<form className='form_style' action="#">
			<h1 className='h1_style'>Sign in as Teacher</h1><br/><br/>
        <input className='input_style' type='text' value={idtemp1} name="idtemp1" onChange={(e)=>setidtemp1(e.target.value)} placeholder='Email'></input><br/>
        <input className='input_style' type='password' value={passtemp1} name="passtemp1" onChange={(e)=>setpasstemp1(e.target.value)} placeholder='Password'></input><br/><br/>
        <Link to='/changepass' style={{color:"blue",textDecoration:"none"}}>Forget password?</Link><br/><br/>
        <button className='home_button' onClick={submit1}>submit</button>
		</form>
	</div>
		</div>
	</div>
</div>

  )
}

export default Home
