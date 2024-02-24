import Changepassword from './components/logins/Changepassword.js';
import Home from './components/logins/Home.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Studentlogin from './components/logins/studentlogin/Studentlogin.js';
import Teacherlogin from './components/logins/teacherlogin/Teacherlogin.js';
import { useState,createContext } from 'react';
import Navbar from './components/Navbar.js';
import Admin from './components/Admin/Admin.js';
import About from './components/nav-components/About.js';
import Contact from './components/nav-components/Contact.js';
import Adminlogin from './components/Admin/Adminlogin.js';
import Adduser from './components/Admin/Adduser.js';
import Updateuser from './components/Admin/Updateuser.js';
import Deleteuser from './components/Admin/Deleteuser.js';
import Instructions from './components/nav-components/instructions/Index.js';
import StudentInstructions from './components/nav-components/instructions/StudentInstructions.js';
import TeacherInstructions from './components/nav-components/instructions/TeacherInstructions.js';
import AdminInstructions from './components/nav-components/instructions/AdminInstructions.js';
import PageNotFound from './components/PageNotFound.js'
import FinalPass from './components/logins/FinalPass.js';
import OTP from './components/logins/OTP.js';
export const store = createContext();
function App() {
  const [idtemp1,setidtemp1]=useState("");
  const [idtemp2,setidtemp2]=useState("");
  return (
    <store.Provider value={[idtemp1,setidtemp1,idtemp2,setidtemp2]}>
<BrowserRouter>
<Navbar/><br/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/changepass' element={<Changepassword/>}/>
  <Route path='/studentlogin' element={<Studentlogin/>}/>
  <Route path='/teacherlogin' element={<Teacherlogin/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/adminlogin' element={<Adminlogin/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contactus' element={<Contact/>}/>
  <Route path='/add' element={<Adduser/>}/>
  <Route path='/update' element={<Updateuser/>}/>
  <Route path='/delete' element={<Deleteuser/>}/>
  <Route path='/instructions' element={<Instructions/>}/>
  <Route path='/student_instructions' element={<StudentInstructions/>}/>
  <Route path='/teacher_instructions' element={<TeacherInstructions/>}/>
  <Route path='/admin_instructions' element={<AdminInstructions/>}/>
  <Route path='/otp/:x' element={<OTP/>}/>
  <Route path='/finalpass' element={<FinalPass/>}/>
  <Route path='*' element={<PageNotFound/>}></Route>
  </Routes>
  </BrowserRouter>
    </store.Provider>
  );
}

export default App;
