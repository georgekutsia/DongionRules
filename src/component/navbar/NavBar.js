import React from 'react'
import { NavLink} from "react-router-dom"
// import MediaQuery from 'react-responsive'

function NavBar() {

  
  return (
    <div id='background-navbar-father'>
        <nav id='background-navbar'>
            <ul className="background-navbar-ul">
                <li>
                  <NavLink to="/rules" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Manual </NavLink>
                </li>
                <li>
                  <NavLink to="/eventos" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Eventos</NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Tienda </NavLink>
                </li>
                <li>
                  <NavLink to="/counter" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Contador</NavLink>
                </li>
              </ul>
        </nav>
    </div>
  )
}

export default NavBar