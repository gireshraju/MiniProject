import React from 'react';
import {Link} from 'react-router-dom';
import i1 from '../nav-components/instructions/admin.jpg'
import i2 from '../nav-components/instructions/admin.jpg'
import i3 from '../nav-components/instructions/admin.jpg'
const Admin = () => {  
        return(
<div class>
<div className="mt-5">
<h1 className="instruction-heading">Select an Option</h1>
<div className="row justify-content-around">
<div className="col-sm-6 col-md-3 col-lg-3">
<div className="shadow menu-item-card p-3 text-center">
  <img src={i1} className="menu-item-image text-center aicte-card" alt='student'/>
  <Link to='/add' style={{color:"black",textDecoration:"none"}}>
    <h1 className="menu-card-title pt-3">Add User</h1>
    </Link>
</div>
</div>
<div className="col-sm-6 col-md-3 col-lg-3">
<div className="shadow menu-item-card p-3 text-center">
  <img src={i2} className="menu-item-image text-center aicte-card" alt='teacher'/>
  <Link to='/update' style={{color:"black",textDecoration:"none"}}>
    <h1 className="menu-card-title pt-3">Update User</h1>
  </Link>
</div>
</div>
<div className="col-sm-6 col-md-3 col-lg-3">
<div className="shadow menu-item-card p-3 text-center">
  <img src={i3} className="menu-item-image text-center aicte-card" alt='admin'/>
  <Link to='/delete' style={{color:"black",textDecoration:"none"}}>
  <h1 className="menu-card-title pt-3">Delete User</h1>
  </Link>
</div>
</div>
</div>
</div>
</div>
        );
}

export default Admin
