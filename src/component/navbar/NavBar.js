import React, { useContext } from 'react'
import { NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
// import MediaQuery from 'react-responsive'

function NavBar() {

  const loged = useContext(AuthContext)
  
  return (
    <>
        <nav id='background-navbar'>
            <ul className="background-navbar-ul">
                <li>
                  <NavLink to="/frontpage" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Frontpage</NavLink>
                </li>
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