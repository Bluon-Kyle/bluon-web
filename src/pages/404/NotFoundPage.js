import React from 'react'
import { Link } from 'react-router-dom';
import './_404.scss';
const NotFoundPage = (props) => {
    //const imgsrc = require(props.src); 
  return (
    <div className='not-found'>
        <h3>404 - Page Does Not Exist </h3>
        <Link to='/'>
            <p className='not-found-link'>Return to home</p>
        </Link>
    </div>
  )
}

export default NotFoundPage