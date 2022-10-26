import React from "react";
import Banner from "../Banner/Banner";
import joinMovementMobile from "../../../assets/images/join-movement-mobile.png";
import ButtonImage from "../ButtonImage/ButtonImage";
import iPhoneImage from "../../../assets/images/buttons/download-iphone.png";
import androidImage from "../../../assets/images/buttons/download-samsung.png";

import { iPhoneHref } from "../../../data/hrefs";
import { androidHref } from "../../../data/hrefs";

import "./_joinBannerApp.scss";

const JoinBannerApp = ({ title, subtitle }) => {
  return (
    <div className="join-banner-style-wrapper">
      <Banner className={"join-banner-app-container"} image={joinMovementMobile}>
        <div className="join-banner-app">
          <h2 className="join-banner-app-title">{title}</h2>
          <p className="join-banner-app-subtitle">{subtitle}</p>
        </div>
        <div className="join-banner-app-buttons">
          <ButtonImage href={iPhoneHref} src={iPhoneImage} />
          <ButtonImage href={androidHref} src={androidImage} />
        </div>
      </Banner>
    </div>
  );
};

export default JoinBannerApp;
