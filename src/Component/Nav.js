import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav() {
  return (
    <div>
     <nav>
<ul>
  <li>
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
