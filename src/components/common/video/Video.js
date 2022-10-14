import React from 'react'
import './_video.scss'
const Video = (props) => {
    const src = props.src; 
  return (
    <div className='b-vid-wrapper'>
        <video className='b-vid' autoPlay={true} loop={true} src={src}></video>
    </div>
  )
}

export default Video