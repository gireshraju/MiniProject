import React, { useState,useEffect,useContext } from 'react';
import {Bar} from 'react-chartjs-2';
// eslint-disable-next-line
import Chart, { Colors } from 'chart.js/auto';
import axios from 'axios';
import { store } from '../../../App';

const Graph = () => {
    // eslint-disable-next-line
   const [idtemp1,setidtemp1]=useContext(store);  
    const [datarating,setDatarating]=useState([]);
    const [details,setdetails]=useState([0,0,0,0,0]);
    var x;
    switch(idtemp1){
        case 'T01':x=0;
        break;
        case 'T02':x=1;
        break;
        case 'T03':x=2;
        break;
        case 'T04':x=3;
        break;
        default :x=99;
    }
    useEffect(()=>{   
        const fetchdata=async ()=>{
          try{
            const res=await axios.get("http://localhost:8900/ratings");
            setDatarating(res.data);
            setdetails([datarating[x].rat1,datarating[x].rat2,datarating[x].rat3,datarating[x].rat4,datarating[x].rat5]);
          }
          catch(err){
            console.log(err);
          }
        }
        fetchdata();
      },[datarating,x]) ;
    const labels = ["Bad","Average","Good","Best","Excellent"];
    const data={
        labels,
        datasets :[
            {
            label : idtemp1,
            data:details,
            backgroundColor: ["black","aqua", "green", "red", "yellow"],
            textColor:"black"
            }
        ]
    }
    const options ={
        plugins:{
            legend:{
                position:"top"
            },
            title:{
                text:"Teacher Reviews",
            }
        }
    }
  return (
    <div style={{backgroundColor:"white"}}>
      <Bar options={options} data={data}/>
    </div>
  )
}
export default Graph
