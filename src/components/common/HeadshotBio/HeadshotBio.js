import React from "react";
import "./_headshotBio.scss";
import mail_icon from "../../../assets/icons/blue-mail.svg";
import phone_icon from "../../../assets/icons/blue-phone.svg";
const HeadshotBio = ({
  picSrc: src,
  picAlt: alt,
  name,
  position,
  bio,
  contact,
  tel,
  email,
}) => {
  return (
    <div className="headshot">
      <div className="headshot-wrapper">
        <img className="headshot-img" src={src} width="130" alt={alt} />
        <h6 className="headshot-name">{name}</h6>
        <p className="">{position}</p>
        <p className="body-small mb-0">{bio}</p>
        {contact ? (
          <div className="headshot-contact">
            <a className="headshot-contact-tel" href={`tel:${tel}`}>
              {/* <img src="assets/images/icon/blue-phone.svg"/> */}
              <img alt="phone icon" src={phone_icon} />
            </a>
            <a className="headshot-contact-email" href={`mailto:${email}`}>
              {/* <img src="assets/images/icon/blue-mail.svg"/> */}
              <img alt="mail icon" src={mail_icon} />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HeadshotBio;

/*

*/
