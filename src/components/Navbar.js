import React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

  return (
    <div className='navbar'>
      <ul>
      <li className='nav-item'>  <Link to='/' style={{color:"black",textDecoration:"none"}}>Home</Link></li>
      <li className='nav-item'> <Link to='/adminlogin' style={{color:"black",textDecoration:"none"}}>Admin Login</Link></li>
      <li className='nav-item'> <Link to='/about' style={{color:"black",textDecoration:"none"}}>About</Link></li>
      <li className='nav-item'>  <Link to='/contactus' style={{color:"black",textDecoration:"none"}}>Contact Us</Link></li>
      <li className='nav-item'>  <Link to='/instructions' style={{color:"black",textDecoration:"none"}}>Instructions</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
