import React from 'react'
import { Link } from 'react-router-dom';
const ThankYou = () => {
  return (
    <div className='demo-thanks'>

        <div className='demo-thanks-left'>
            <div className='demo-thanks-left-text'>
                <h1>Thank You</h1>
                <p>Your message has been sent</p>
            </div>

            <div className='demo-thanks-left-button'>
                <Link className='button-link' to='/'>
                    <button>Back to Homepage</button>
                </Link>
            </div>
        </div>

        <div className='demo-thanks-right'>
            {/* TODO: img goes here */}
        </div>
    </div>
  )
}

export default ThankYou