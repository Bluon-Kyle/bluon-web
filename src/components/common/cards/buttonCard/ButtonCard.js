import React from "react";
import distPic from "../../../../assets/images/distributors.png";
import conPic from "../../../../assets/images/contractors.png";
import techPic from "../../../../assets/images/technicians.png";
import distIcn from './icons/dist-icon.svg';
import techIcn from './icons/tech-icon.svg';
import conIcn from './icons/contr-icon.svg';
import { Link } from "react-router-dom";
import './_buttonCard.scss'
const ButtonCard = (props) => {
  let src = null;
  let icn = null; 
  const img = props.img;
  const title = props.title;
  const buttonText = props.button_text;
  const link = props.button_link;

  if (img === "dist") {
    src = distPic;
    icn = distIcn; 
  } else if (img === "tech") {
    src = techPic;
    icn = techIcn; 
  } else if (img === "contr") {
    src = conPic;
    icn = conIcn
  }

  return (
    <span className="button-card" style={{ backgroundImage: `url(${src})` }}>
      <div className="button-card-content">

      
        <div className="button-card-text">
          <img alt={`${img}-icon`} src={icn}/>
          <h2>{title}</h2>
        </div>

        <div className="button-card-link">
          <Link to={link}>
            <button><strong>{buttonText}</strong></button>
          </Link>
        </div>
      </div>
    </span>
  );
};

export default ButtonCard;
