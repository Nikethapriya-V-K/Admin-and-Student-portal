import {Link,Outlet} from 'react-router-dom'
import './Navbar.css'
function Navbar()
{
  return(
    
    <div id='checkin'>
    <h3><Link id='list'to='/'>Livewire</Link></h3>
    
      <div id='navbar'>
        <Link  id="list" to="/Student-Portal">Student</Link><br></br>
        <Link id="list" to="/Admin-Portal">Admin</Link><br></br>
        <Outlet/>
        </div> 
  </div>

  )
}
export default Navbar