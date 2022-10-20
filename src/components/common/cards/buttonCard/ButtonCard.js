import React from "react";
import distPic from "../../../../assets/images/distributors.png";
import conPic from "../../../../assets/images/contractors.png";
import techPic from "../../../../assets/images/technicians.png";
import { Link } from "react-router-dom";
import './_buttonCard.scss'
const ButtonCard = (props) => {
  let src = null;
  const img = props.img;
  const title = props.title;
  const buttonText = props.button_text;
  const link = props.button_link;

  if (img === "dist") {
    src = distPic;
  } else if (img === "tech") {
    src = techPic;
  } else if (img === "contr") {
    src = conPic;
  }

  return (
    <span className="button-card" style={{ backgroundImage: `url(${src})` }}>
      <div className="button-card-text">
        <h2>{title}</h2>
      </div>

      <div className="button-card-link">
        <Link to={link}>
          <button>{buttonText}</button>
        </Link>
      </div>
    </span>
  );
};

export default ButtonCard;
