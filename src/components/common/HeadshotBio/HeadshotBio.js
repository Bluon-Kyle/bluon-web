import React from "react";
import "./_headshotBio.scss";
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
          ""
        ) : (
          <div className="headshot-contact">
            <a className="headshot-contact-tel" href={`tel:${tel}`}>
              {/* <img src="assets/images/icon/blue-phone.svg"/> */}
            </a>
            <a className="headshot-contact-email" href={`mailto:${email}`}>
              {/* <img src="assets/images/icon/blue-mail.svg"/> */}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeadshotBio;

/*

*/
