import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom"


const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="logo">
          <img src="/Images/logo.png" alt="logo" id='logo'/>
        </div>
        <ul className='list'>          
          <li><NavLink to="/" className={({isActive})=>isActive? "active-link":"no-active"}>Home</NavLink></li>
          <li><NavLink to="/About-Us" className={({isActive})=>isActive? "active-link":"no-active"}>About us</NavLink></li>
          <li><NavLink to="/Study Abroad" className={({isActive})=>isActive? "active-link":"no-active"}>Study Abroad </NavLink></li>
          <li><NavLink to="/Other Services" className={({isActive})=>isActive? "active-link":"no-active"}>Other Services</NavLink></li>
          <li><NavLink to="/Gallery" className={({isActive})=>isActive? "active-link":"no-active"}>Gallery</NavLink></li>
          <li><NavLink to="/Success Stories" className={({isActive})=>isActive? "active-link":"no-active"}>Success Stories</NavLink></li>
          <li><NavLink to="/Contact" className={({isActive})=>isActive? "active-link":"no-active"}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
