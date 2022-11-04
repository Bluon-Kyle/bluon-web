import React from 'react'
import { Link } from 'react-router-dom';
import './_404.scss';
import Luminance from '../../assets/animations/text/luminance/Luminance';
import RotateBorder from '../../assets/animations/text/rotate/RotateBorder';
const NotFoundPage = (props) => {
    //const imgsrc = require(props.src); 
  return (
    <div className='not-found'>
        <Luminance text="Page Does Not Exist"/>
        <div className='not-found-home'>
            <Link to='/'>
                {/* <h4 className='not-found-link'>Return to home</h4> */}
                <RotateBorder text='Return to Home'/>
            </Link>
        </div>
        
    </div>
  )
}

export default NotFoundPage