import React from "react";
import Banner from "../Banner/Banner";
import joinMovementMobile from "../../../assets/images/join-movement-mobile.png";
import ExternalButton from "../ExternalButton/ExternalButton";

import "./_joinBanner.scss";

const JoinBanner = ({ title }) => {
  const bannerStyle = {
    backgroundColor: "#1352fe",
  };

  return (
    <Banner image={joinMovementMobile} bannerStyle={bannerStyle}>
      <div className="join-banner">
        <h2 className="join-banner-title">{title}</h2>
        <ExternalButton link={"https://bluon.com/bluon-live.php"}>
          {"We're Hiring!"}
        </ExternalButton>
      </div>
    </Banner>
  );
};

export default JoinBanner;
