import React from 'react'
import './_rotate.scss'
const RotateBorder = (props) => {
    const text = props.text; 
  return (
    <div className='rainbow'>
        <h3>{text}</h3>
    </div>
  )
}

export default RotateBorder