import React from 'react'
import { NavLink} from "react-router-dom"
// import MediaQuery from 'react-responsive'

function NavBar() {

  
  return (
    <>
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
              </ul>
        </nav>
    </>
  )
}

export default NavBar