import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_46bi9i5', 'template_24uygx6', form.current, '-mw_x5xByyLLa6tYH')
        .then((result) => {
            console.log(result.text);
            alert("Sent Successfully!!!")
        }, (error) => {
            console.log(error.text);
        });
    };
        return(
          <form ref={form} onSubmit={sendEmail}>
            <div className='container' id='change'>
              <div className='pass' style={{padding:"40px",margin:"10%"}}>
            <center><br/>
              <h1>Send a Mail</h1><br/>
              <p>Have questions or feedback? Reach out to us!</p>
              <input className='input_style' type="text" name="from_name" placeholder='Name' />
              <input className='input_style' type="text" name="from_name" placeholder='Mail' />
              <textarea className='input_style' type="text" name="message" placeholder='message'/>
              <Link to='/' style={{color:"blue",textDecoration:"none"}}>go home!!</Link><br/><br/>
              <button className='home_button' type='submit'>submit</button><br/><br/>
            </center>
            </div>
            </div>
            <br></br>
             </form>
        );
    
}

export default Contact
