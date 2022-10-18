import React from 'react'
//import NavBar from './NavBar'
// import HamburgerNav from './HamburgerNav.js'
import HamburgerMenu from './components/Hamburger/HamburgerMenu.js'
import TitleBlue from '../common/TitleBlue.js'
import { Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
const HeaderIndex = () => {
  return (
    <span className='header'>
      <Link className='header-link' to='/'><TitleBlue content="Bluon&reg;"/></Link>
      <div className='header-wrapper'>
        <NavBar className='header-navbar'/>
          
          <span className='header-blive'> Looking for BluonLive?&nbsp;
            <a href="https://bluonlive.com/" className="nav-login">Login here</a>&nbsp;&nbsp;&nbsp;
            
          </span>
      </div>
      <HamburgerMenu className='header-hamburger' />
     
        
    </span>
  )
} 

export default HeaderIndex