import React, { useState,useContext } from 'react';
import axios from 'axios';
import { store } from '../../../App';
import Graph from './Graph';
import './Teacherlogin.css';
import { useNavigate } from 'react-router-dom';
const Teacherlogin = () => {
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const [sdata,setSdata]=useState([]);
  const [sug,setSug]=useState("Select a student");
  // eslint-disable-next-line
 const [idtemp1,setidtemp1]=useContext(store);    
 const [idtemp2,setidtemp2]=useState("");  
 const [sec,setSec]=useState([]); 
 const [show,setShow]=useState(""); 
 const [name,setName]=useState(""); 
 const onOptionChangeHandler = (event) => {
  setShow(event.target.value);
  if(event.target.value==="Overall")
  setShow("");
};
     // eslint-disable-next-line
    const displayall=async ()=>{
      try{
        const res=await axios.get("http://localhost:8900/teachersuggestions/"+idtemp1);
        const k=await axios.get("http://localhost:8900/sections/"+idtemp1);
        setSec(k.data);
        setData(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
  const a=data.map(d=>
    <div key={d.sid} id={show===''?'b':show===d.section?'b':'n'}> 
    <div>  
         <h4 style={{cursor:"pointer",textAlign:"left",borderBottom:"1px solid black"}} onClick={()=>{setSug(d.sug);setName(d.sid);}}>{d.sid==="" ? "Anonymous" :d.sid}</h4>
   </div>
</div>
)
displayall();   
  return (    
<div className="teacher">
        <div className="container">
            <div className="left-panel">
                <header>
                    <h1>Welcome, {idtemp1}!</h1>
                    <button onClick={()=>{setidtemp1("");navigate('/')}} className='home_button' style={{fontSize: "small",padding: "5px",float:"right"}}>Logout</button>    
                </header>
                <section className="feedback-section">
                    <h3>Student Feedback</h3>
                    <div className="selector-container">
                        <label for="feedbackSelector">Section:</label>
                        <select onChange={onOptionChangeHandler}>
                    <option>Overall</option>
                    {
                      sec.map((t)=>
                       {
                        return(
                        <option> 
                          {t.section}
                        </option>
                        );
                       }
                      )
                    }
                    </select>
                    <button className='home_button' style={{fontSize: "small",padding: "5px",float:"right"}}>show</button>
                    </div>
                </section>
                <div className="chat-container">
                    {a}
              </div>
            </div>
            <div className="right-panel">
                <section className="chart" style={{height:"20%" , backgroundColor:" rgb(192, 125, 125);"}}>
                    <h2>{name}</h2>
                    <p>{sug}</p>
                </section>
                <section className="graph" style={{backgroundColor: "pink"}}>
                    <h2>Ratings Graph</h2>
                    <div className="selector-container">
                        <label for="feedbackSelector">Section:</label>
                        <select onChange={onOptionChangeHandler}>
                    <option>Overall</option>
                    {
                      sec.map((t)=>
                       {
                        return(
                        <option> 
                          {t.section}
                        </option>
                        );
                       }
                      )
                    }
                    </select>
                        <button className='home_button' style={{fontSize: "small",padding: "5px",float:"right"}}>show</button>
                    </div>
                    <br/>
                    <Graph/>
                </section>
            </div>
        </div>
    </div>
  );
}
export default Teacherlogin
