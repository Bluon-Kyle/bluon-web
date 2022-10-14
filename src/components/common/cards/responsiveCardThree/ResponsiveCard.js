import React from 'react'
import './_responsiveCard.scss'
import { Link } from 'react-router-dom'
//import imgfill from '../../../../pages/home/ForContractors.jpg'
const ResponsiveCard = (props) => {
    
  return (
    <div>
        <div className="main">
            
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img src={props.img1} alt="Bluon"/>
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{props.title1}</h2>
                            <p className="card_text">{props.text1}</p>
                            <p className='card_text'>{props.bottomtext1}</p>
                            <Link to={`/${props.buttonLink1}`}>
                                <button className="btn card_btn">{props.buttonText1} &nbsp;&nbsp;<strong> &rarr;</strong></button>
                            </Link>
                            
                        </div>
                    </div>
                </li>

                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img src={props.img2} alt='Bluon'/>
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{props.title2}</h2>
                            <p className="card_text">{props.text2}</p>
                            <p className='card_text'>{props.bottomtext2}</p>
                            <Link to={`/${props.buttonLink2}`}>
                                <button className="btn card_btn">{props.buttonText2} &nbsp;&nbsp;<strong> &rarr;</strong></button>
                            </Link>                        
                        </div>
                    </div>
                </li>

                <li className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img src={props.img3} alt='Bluon'/>
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{props.title3}</h2>
                            <p className="card_text">{props.text3}</p>
                            <p className='card_text'>{props.bottomtext3}</p>
                            <Link to={`/${props.buttonLink3}`}>
                                <button className="btn card_btn">{props.buttonText3} &nbsp;&nbsp;<strong> &rarr;</strong></button>
                            </Link>                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveCard