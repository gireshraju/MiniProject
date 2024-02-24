import React from 'react'
import './About.css'
import i1 from './32.jpg'
import i2 from './33.png'
const About = () => {
  return (
    <div>
      
    <div className="banner">
        <div className="row1">
            
            <div className="bcontent">
                <h1 className="suggestion">Suggestionbox</h1><br></br>
                <h3>Our student feedback system provides a seamless platform for students to share their thoughts and opinions on various aspects of their educational experience. It allows us to gather valuable insights that help us enhance the learning environment and tailor it to the needs of our students. Through this system, we foster open communication and continuously strive for improvement.</h3>
            </div>
            <div className="bimg">
                <img src="https://media.istockphoto.com/id/1470159954/photo/multi-cultural-elementary-school-pupils-with-female-teacher-in-geography-class-at-school.jpg?s=612x612&w=0&k=20&c=Navu7lsWLAtvrq_xXZwV4UY3nmQl6z7GSFCTS6jtsLk=" alt="Banner"/>
            </div>
        </div>
    </div>
    <h1 className="services-heading">Our Services</h1>
    <div className="services-container">
        <div className="service-box">
            <h3>Service 1</h3>
           <div className="service-icon"><i className="fa fa-cogs"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Earum doloremque, aut, maxime ratione </h5>
       </div>
       <div className="service-box">
         <h3>Service 2</h3>
           <div className="service-icon"><i className="fa fa-chart-bar"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h5>
           
       </div>
       <div className="service-box">
         <h3>Service 3</h3>
           <div className="service-icon"><i className="fa fa-laptop"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h5>
       </div>
       <div className="service-box">
         <h3>Service 4</h3>
           <div className="service-icon"><i className="fa fa-code"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h5>
       </div>
       <div className="service-box">
         <h3>Service 5</h3>
           <div className="service-icon"><i className="fa fa-paint-brush"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h5>
       </div>
       <div className="service-box">
         <h3>Service 6</h3>
           <div className="service-icon"><i className="fa fa-globe"></i></div>
           <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h5>
       </div>
      
    </div>
    <div className="what-we-do">
        <div className="col-1">
            <h1>What we do</h1><br></br>
            <h3>Our student feedback system facilitates the collection, analysis, and evaluation of feedback from students on various aspects of their educational experience. It includes features such as surveys, data visualization, and trend analysis, allowing us to gain valuable insights into student satisfaction, engagement, and areas for improvement. Additionally, the system provides a user-friendly interface for administrators to manage feedback campaigns and generate reports for decision-making.</h3>
      <br></br><br></br>
      <div className='hide'>
            <h1>Lorem</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Earum doloremque, aut, maxime ratione </h3>
             </div>
        </div>
        <div className="col-3">
            <h3>Additionally, the system provides a user-friendly interface for administrators to manage feedback campaigns and generate reports for decision-making.</h3>
            <div className="weimg">
                <img src={i2} alt="Survey"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
