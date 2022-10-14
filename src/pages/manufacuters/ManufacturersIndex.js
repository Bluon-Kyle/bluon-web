import React from 'react'
import './_manufacturers.scss'
import img from './images/manufacturer-wider.jpg'
const ManufacturersIndex = () => {
  return (
    <div className='manu'>
      <div className='manu-header'>
        <div className='manu-header-text'>
          <h1>Manufacturers</h1>
          <p>To learn more about how to get your equipment and/or parts onto the Bluon platform contact us below.</p>
        </div>
        <button>Contact us</button>
      </div>

      <div className='manu-img'>
        <img src={img} alt="parts" />
      </div>
    </div>
  )
}

export default ManufacturersIndex