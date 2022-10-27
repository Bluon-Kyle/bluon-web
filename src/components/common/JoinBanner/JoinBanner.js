import React from "react";
import Banner from "../Banner/Banner";
import joinMovementMobile from "../../../assets/images/join-movement-mobile.png";
import ButtonLink from "../ButtonLink/ButtonLink";
import joinMovement from '../../../assets/images/join-movement-img.jpg'
import "./_joinBanner.scss";

const JoinBanner = ({ title }) => {

  // const width = false ; 
  // if(width)

  return (
    <>
    <div className="join-banner-mobile">
      <Banner className={"join-banner-container"} image={joinMovementMobile}>
        <div className="join-banner">
          <h2 className="join-banner-title">{title}</h2>
          <ButtonLink color="secondary" href={"https://bluon.com/bluon-live.php"}>
            {"We're Hiring!"}
          </ButtonLink>
        </div>
      </Banner>
    </div>
    

    <div className="join-banner-desktop">
      <Banner className={"join-banner-container"} image={joinMovement}>
        <div className="join-banner">
          <h2 className="join-banner-title">{title}</h2>
          <ButtonLink color="secondary" href={"https://bluon.com/bluon-live.php"}>
            {"We're Hiring!"}
          </ButtonLink>
        </div>
      </Banner>
    </div>
    </>
  );
};

export default JoinBanner;
