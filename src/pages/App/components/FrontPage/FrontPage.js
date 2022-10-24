import React from "react";

import ButtonImage from "../../../../components/common/ButtonImage/ButtonImage";

import iPhoneImage from "../../../../assets/images/buttons/download-iphone.png";
import androidImage from "../../../../assets/images/buttons/download-samsung.png";
import stamp from "../../../../assets/images/app/stamp.png";
import phones from "../../../../assets/images/app/phones.png";
import { iPhoneHref } from "../../../../data/hrefs";
import { androidHref } from "../../../../data/hrefs";

import "./_frontPage.scss";

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="front-page-header">
        <h2>
          The App
          <br />
          HVAC Techs Actually Use
        </h2>
      </div>

      <div className="front-page-buttons">
        <ButtonImage href={iPhoneHref} src={iPhoneImage} />
        <ButtonImage href={androidHref} src={androidImage} />
      </div>

      <div className="front-page-stamp">
        <img src={stamp} alt="stamp" />
      </div>

      <div className="front-page-phones">
        <img src={phones} alt="phone" />
      </div>
    </div>
  );
};

export default FrontPage;
