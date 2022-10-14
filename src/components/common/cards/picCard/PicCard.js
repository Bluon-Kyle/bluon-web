import React from 'react'
import './_picCard.scss'
import distPic from '../../../../media/image/Distributors.png'
import conPic from '../../../../media/image/Contractors.png'
import techPic from '../../../../media/image/Technicians.png'
const PicCard = (props) => {
    const title = props.title; 
    const hover_title = props.hover_title; 
    const content = props.content;
    const img = props.img; 
    const alt = props.imgalt; 
    const button_text = props.button_text;
    let src = null; 
  
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
    <div className='pic-card'>
        <figure className="image-block">
            <h1>{title}</h1>
            <img src={src} alt={alt} />
            <figcaption>
                <h3>
                    {hover_title}
                </h3>
                <p>{content}</p>
                <button>
                   {button_text}
                </button>
            </figcaption>
        </figure>
    </div>
  )
}

export default PicCard