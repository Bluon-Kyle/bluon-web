import React from "react";
import Banner from "../Banner/Banner";
import joinMovementMobile from "../../../assets/images/join-movement-mobile.png";
import ButtonLink from "../ButtonLink/ButtonLink";

import "./_joinBanner.scss";

const JoinBanner = ({ title }) => {
  const bannerStyle = {
    backgroundColor: "#1352fe",
  };

  return (
    <Banner image={joinMovementMobile} bannerStyle={bannerStyle}>
      <div className="join-banner">
        <h2 className="join-banner-title">{title}</h2>
        <ButtonLink color="secondary" href={"https://bluon.com/bluon-live.php"}>
          {"We're Hiring!"}
        </ButtonLink>
      </div>
    </Banner>
  );
};

export default JoinBanner;
