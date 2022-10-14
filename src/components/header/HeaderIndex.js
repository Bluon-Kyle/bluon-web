import React from 'react'
import NavBar from './NavBar'
import TitleBlue from '../common/TitleBlue.js'
import { Link } from 'react-router-dom'

const HeaderIndex = () => {
  return (
    <span className='header'>
      <Link className='header-link' to='/'><TitleBlue content="Bluon&reg;"/></Link>
        <NavBar/>
        <span className='header-blive'> Looking for BluonLive?&nbsp;
          <a href="https://bluonlive.com/" className="nav-login">Login here</a>&nbsp;&nbsp;&nbsp;
          
        </span>
        
    </span>
  )
}

export default HeaderIndex