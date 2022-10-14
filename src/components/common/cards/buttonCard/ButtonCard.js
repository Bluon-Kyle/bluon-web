import React from 'react'
import distPic from '../../../../media/image/Distributors.png'
import conPic from '../../../../media/image/Contractors.png'
import techPic from '../../../../media/image/Technicians.png'
import { Link } from 'react-router-dom'
//import './_buttonCard.scss'
const ButtonCard = (props) => {
    let src = null; 
    const img = props.img; 
    const title = props.title; 
    const buttonText = props.button_text; 
    const link = props.button_link; 

    if(img === 'dist'){
        src=distPic; 
    }
    else if(img === "tech"){
        src=techPic; 
    }
    else if(img ==='contr'){
        src=conPic; 
    }

  return (
    <span className='button-card' style={{backgroundImage:`url(${src})`}}>
        <div className='button-card-text'>
            <h2>{title}</h2>
        </div>
        
        <div className='button-card-link'>
            <Link to={link}>
                <button>
                    {buttonText}
                </button>
            </Link>
        </div>
    </span>
  )
}

export default ButtonCard