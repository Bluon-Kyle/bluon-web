import React from 'react'
import './_luminance.scss'
const Luminance = (props) => {
    const text = props.text; 

  return (
    <div className='lumi'>
        {text}
    </div>
  )
}

export default Luminance