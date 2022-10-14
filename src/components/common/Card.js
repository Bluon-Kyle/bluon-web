import React from 'react'
import dis_img from '../../pages/home/ForDistributors.jpg';
import con_img from '../../pages/home/ForContractors.jpg';
import tec_img from '../../pages/home/ForTechnicians.jpg';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const img = props.img; 
    const card_img_alt = props.img_alt; 
    const card_title = props.title; 
    const card_content = props.content; 
    const card_content_bottom = props.content_bottom;
    const button_text = props.button_text; 
    const link = props.button_link; 
    let src = null; 
    if(img === "Distributors"){
        src = dis_img; 
       
    }
    else if(img === "Contractors"){
        src=con_img; 
    }
    else if(img === "Techs"){
        src=tec_img; 
    }
    // function clicker(){
    //     return (<Link></Link>)
    // }
  return (
    <div className='bluon-card'>
        <div className='bluon-card-container'>
            <img className='bluon-card-img' alt={card_img_alt} src={src}/>
            <div className='bluon-card-text'>
                <h1>{card_title}</h1>
                <p>{card_content}</p>
                <p>{card_content_bottom}</p>
                
            </div>
            <div className='bluon-card-button'>
                <Link className='bluon-card-button-link' to={link}>
                    <button>{button_text} &nbsp;&nbsp;<strong> &rarr;</strong></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Card