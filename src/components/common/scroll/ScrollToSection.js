import React from 'react'
import './_scrolltosection.scss'
const ScrollToSection = (props) => {
    const id = props.id; 
    const label = props.label; 

    
    
    const clickHandler = () => {
      var element = document.getElementById(id);
      element.scrollIntoView({behavior:"smooth", block: "start", inline:"start"});
    }
  return (
    <div className={`scroll-to-${label} scroller-comp`} onClick={clickHandler}>
        <h3>{label}</h3>
    </div>
  )
}

export default ScrollToSection