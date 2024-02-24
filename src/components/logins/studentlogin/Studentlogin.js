import React, { useState,useContext, useEffect } from 'react';
import axios from 'axios';
import { store } from '../../../App';
import './Studentlogin.css';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Radio, Rating } from "./RatingStyles";
const Studentlogin = () => {
  const navigate=useNavigate();
  const [tid,settid]=useState(""); 
  const [tdata,setTdata]=useState([{
    id:"satya",
    pass:"123"
  }]);
  const [sdata,setSdata]=useState("");
  const [idtemp2,setidtemp2]=useContext(store);
  const [sug,setsug]=useState("");
  const [data,setData]=useState([]);
  const [rate, setRate] = useState(0);
  const temp=idtemp2;
  const [sec,setsec]=useState("");
  const onOptionChangeHandler = (event) => {
    settid(event.target.value);
};
// eslint-disable-next-line
  const fetchdata=async ()=>{
    try{
      const res=await axios.get("http://localhost:8900/studentsuggestions/"+idtemp2);
      setData(res.data);
      console.log(data)
    } 
    catch(err){
      console.log(err);
    }
  }
  
  const sub= async ()=>{
    const data={
      sid:idtemp2,
      tid:tid,
      sug:sug,
      section:sec
    }
    const details={
      rat:rate
    }
    if(tid==="" || rate===""){
      alert("Enter Valid Options");
      return;
    }
    try{
      await axios.put("http://localhost:8900/ratings/"+tid,details);
      await axios.post("http://localhost:8900/records",data);
      alert("Successful");
      settid("");
      setsug("");
    }
    catch(err){
      console.log(err);
    }
  }
useEffect(()=>{
  const fetchdata2=async ()=>{
    try{
      // eslint-disable-next-line
      const res=await axios.get("http://localhost:8900/students/sample/"+idtemp2);
      setSdata(res.data);
      setsec(sdata[0].section);
      console.log(sec)
    }
    catch(err){
      console.log(err);
    }
  }
fetchdata2();
  const fetchdata1=async ()=>{
    try{
      const res=await axios.get("http://localhost:8900/teachers/sample/"+sec);
      setTdata(res.data);
      console.log(tdata)
    }
    catch(err){
      console.log(err);
    }
  }
  fetchdata1();
},[idtemp2,sdata,sec,tdata]);
// eslint-disable-next-line
  const a=data.map(d=>
    <div>
      <p>{d.sug}</p>
    </div>);

  
  return (

        <div className='s_container' style={{marginBottom:"20px"}}>
          <div className='pass'>
            <center>
                <h1>Welcome</h1>
                <button onClick={()=>{setidtemp2("");navigate('/')}} className='home_button' style={{fontSize: "small",padding: "5px",float:"right"}}>Logout</button>
                <div class="radio-container">
                    <input type="radio" id="same" name="typeofsel" value="same" onChange={() => setidtemp2(temp)} />
                    <label for="same">Normal</label>
                    <input type="radio" id="anonymous" name="typeofsel" value="anonymous" onChange={() => setidtemp2("")} />
                    <label for="anonymous">Anonymous</label>
                </div>
   <br></br>
                <div>
                <center>
                    <h4>Rate the teacher:</h4>
                  
                    <select onChange={onOptionChangeHandler}>
                    <option>Please choose one option</option>
                    {
                      tdata.map((t)=>
                       {
                        return(
                        <option> 
                          {t.id}
                        </option>
                        );
                       }
                      )
                    }
                    </select>
                
                    </center>
                </div>
                <br></br>
    
                <div>
                    <h4>Give Rating to {tid}</h4>
    
                    
                        {[...Array(5)].map((item, index) => {
                            const givenRating = index + 1;
                            return (
                                <label>
                                    <Radio
                                        type="radio"
                                        value={givenRating}
                                        onClick={() => {
                                            setRate(givenRating);
                                        }}
                                        style={{display:"none"}}
                                    />
                                    <Rating>
                                        <FaStar
                                            color={
                                                givenRating < rate || givenRating === rate
                                                    ? "000"
                                                    : "rgb(192,192,192)"
                                            }
                                        />
                                    </Rating>
                                </label>
                            );
                        })}
                
    
                    <p>{rate===1?"Bad":rate===2?"Average":rate===3?"Good":rate===4?"Very Good":rate===5?"Excellent":"Select the star"}</p>
                </div>
                <br></br>
                <div className='sl'>
                    <h2>Suggestion Box</h2>
                            
                            <textarea style={{width:"60%"}} id="suggestion" value={sug} onChange={(e)=>setsug(e.target.value)} placeholder='Enter your suggestion' rows="4"></textarea>
                    <br></br>
                        <button type="submit" onClick={sub}>Submit</button>
                </div>

            </center>
            <br></br>
            </div>
        </div> 
  )
}

export default Studentlogin
