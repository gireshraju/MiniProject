import React from 'react'
import { Link } from 'react-router-dom';
import './Index.css'
import i1 from './admin.jpg'
import i2 from './teacher.jpg'
import i3 from './admin.jpg'
const Instructions = () => {
  return (
    <div>
        <div className="mt-5">
    <h1 className="instruction-heading">Select an Option</h1>
    <div className="row justify-content-around">
      <div className="col-sm-6 col-md-3 col-lg-3">
      <Link to='/student_instructions' style={{color:"black",textDecoration:"none"}}>
        <div className="shadow menu-item-card p-3 text-center">
          <img src={i1} className="menu-item-image text-center aicte-card" alt='student'/>
            <h1 className="menu-card-title pt-3">STUDENT</h1>
        </div>
        </Link>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
      <Link to='/teacher_instructions' style={{color:"black",textDecoration:"none"}}>
        <div className="shadow menu-item-card p-3 text-center">
          <img src={i2} className="menu-item-image text-center aicte-card" alt='teacher'/>
            <h1 className="menu-card-title pt-3">FACULTY</h1>
        </div>
        </Link>
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3">
      <Link to='/admin_instructions' style={{color:"black",textDecoration:"none"}}>
        <div className="shadow menu-item-card p-3 text-center">
          <img src={i3} className="menu-item-image text-center aicte-card" alt='admin'/>
          <h1 className="menu-card-title pt-3">ADMIN</h1>
        </div>
        </Link>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Instructions
