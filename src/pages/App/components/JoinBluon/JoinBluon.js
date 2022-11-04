import React from "react";
import { iPhoneHref } from "../../../../data/hrefs";
import { androidHref } from "../../../../data/hrefs";

import iPhoneImage from "../../../../assets/images/buttons/download-iphone.png";
import androidImage from "../../../../assets/images/buttons/download-samsung.png";
import bluonAppLogo from "../../../../assets/logo/bluon-app-logo.svg";

import ButtonImage from "../../../../components/common/ButtonImage/ButtonImage";

import "./_joinBluon.scss";

const JoinBluon = () => {
  return (
    <div className="join-bluon">
      <div className="join-bluon-logo">
        <img
          className="join-bluon-logo-image"
          src={bluonAppLogo}
          alt="bluon-app-logo"
        />
      </div>

      <h3 className="join-bluon-quote">Join the Bluon Community</h3>
      <div className="join-bluon-buttons">
        <ButtonImage href={iPhoneHref} src={iPhoneImage} />
        <img
          className="join-bluon-logo-image-desktop"
          src={bluonAppLogo}
          alt="bluon-app-logo-desktop"
        />
        <ButtonImage href={androidHref} src={androidImage} />
      </div>
    </div>
  );
};

export default JoinBluon;
