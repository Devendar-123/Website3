import React from 'react'
import './Navbar.css'
import {Link, NavLink} from "react-router-dom"


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
          <li className='dropdown'><NavLink to="/Study Abroad" className={({isActive})=>isActive? "active-link":"no-active"}>Study Abroad </NavLink>
          <ul className="dropdown-content">
              <li><Link to="/Study Abroad/MainTabUK">Study in UK</Link></li>
              <li><Link to="/Study Abroad/France">Study in France</Link></li>
              <li><Link to="/Study Abroad/USA">Study in USA</Link></li>
              <li><Link to="/Study Abroad/MainTabAus">Australia</Link></li>
              <li><Link to="/Study Abroad/MainTabNew">New Zealand</Link></li>
              <li><Link to="/Study Abroad/MainTabGer">Germany</Link></li>
              <li><Link to="/Study Abroad/MainTabCan">Canada</Link></li>
            </ul>
          </li>
          <li className='dropdown'>
            <NavLink to="/Other Services" className={({isActive})=>isActive? "active-link":"no-active"}>Other Services</NavLink>
          
            <ul className="dropdown-content">
              <li><Link to="/Other Services/test">Test Preparation</Link></li>
              <li><Link to="/Other Services/Counselling">Career Counseling</Link></li>
              <li><Link to="/Other Services/Admission">Admission Guidence</Link></li>
              <li><Link to="/Other Services/Visa">Visa Assistance</Link></li>
              <li><Link to="/Other Services/ForeignExchange">Foreign Exchange Assistance</Link></li>
            </ul>
          
          </li>

          <li><NavLink to="/Gallery" className={({isActive})=>isActive? "active-link":"no-active"}>Gallery</NavLink></li>

          <li className='dropdown'><NavLink to="/Success Stories" className={({isActive})=>isActive? "active-link":"no-active"}>Success Stories</NavLink>
          <ul className='dropdown-content'>
            <li><NavLink to="/Success Stories/Test">Testimonials</NavLink></li>
          </ul>
          </li>

          <li><NavLink to="/Contact" className={({isActive})=>isActive? "active-link":"no-active"}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
