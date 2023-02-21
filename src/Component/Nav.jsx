import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <div>
     <nav className='nav nav-pills justify-content-center'>
<ul>
  <li className='nav-item'>
<NavLink  to="/inComplete">

   inComplete
</NavLink>
  </li>


  <li>
  
  <NavLink  to="/Completed">

     Completed
  </NavLink>

  </li>

  
  <li>
  
<NavLink to="/">

  AllTask

</NavLink>
  
  </li>

</ul>


     </nav>


    </div>
  )
}
