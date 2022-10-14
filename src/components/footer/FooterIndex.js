import React from 'react'
import { Link } from 'react-router-dom'
const FooterIndex = () => {
  return (
    <div className='footer'>
        
        <div className='footer-content'>
            <span className='link-wrapper'>
              
              <Link className='link' to='/'><h1>bluon&reg;</h1></Link>
              <Link className='link' to='/About'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link className='link' to='/News'>News</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link className='link' to='/Contact'>Contact</Link>
              <br></br><br></br>
              2022 Bluon, Inc.&nbsp;&nbsp;&nbsp;
              <Link className='small-link' to='/Terms'>Terms</Link>&nbsp;&nbsp; | &nbsp;&nbsp;
              <Link className='small-link' to='/Privacy'>Privacy</Link>
            </span>
            <span className='contact-wrapper'>
              <a className='content' href="tel:+1-855-425-8686">1-855-425-8686</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a className='content' href="mailto:contactus@bluon.com">contactus@bluon.com</a>
            </span>
        </div>
    </div>
  )
}

export default FooterIndex