import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Student from './Login-page/Student-Portal'
import Admin from './Login-page/Admin-Portal.js'
import Bill from './Billing/Dashboard.js'
import Navbar from './Login-page/Navbar'
import Studentdetails from './Billing/Student-details.js'
import Coursefees from './Billing/Course-fees.js'
import Payments from './Billing/Payments.js'
import Studentinfo from './Billing/Student-Profile.js'
import Billdetail from './Billing/Billdetails.js'
function App()
{
  return(
  <div id='body'>
    <Navbar/>
    
  <Routes>
        <Route path='/'></Route>
        <Route path='/Student-Portal/*' element={<Student/>}></Route>
        <Route path='/Admin-Portal' element={<Admin/>}></Route>
        <Route path='/Billing/*' element={<Bill/>}></Route>
        <Route path='/Billing/student-details' element={<Studentdetails/>}></Route>
        <Route path='/Billing/course-fees' element={<Coursefees/>}></Route>
        <Route path='/Billing/payments' element={<Payments/>}></Route>
        <Route path="/Student-Portal/Home/Profile" element={<Studentinfo/>}></Route>
        <Route path='/Student-Portal/Home/Bills' element={<Billdetail/>}></Route>
        <Route path='/Student-Portal/Home/*' element={<div style={{marginTop:"20px"}}>
            <Link to="/Student-Portal/Home/Profile" style={{marginLeft:"1200px",textDecoration:"none",color:"white"}}>Profile</Link>
            <Link to="/Student-Portal/Home/Bills" style={{marginLeft:"50px",textDecoration:"none",color:"white"}}>Bill Details</Link>
            </div>}></Route>
  </Routes>
  </div>
  )
}
export default App