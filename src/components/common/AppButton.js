import React from "react";

import "./_appButton.scss";

const AppButton = (props) => {
  //depending on prop this will display iphone or andriod button
  const type = props.type;
  const iphone = require("../../assets/images/buttons/download-iphone.png");
  const andriod = require("../../assets/images/buttons/download-samsung.png");
  return type === "ios" ? (
    <a
      className="app-link"
      href="https://apps.apple.com/us/app/bluon-hvac/id1357521880"
    >
      <img
        className="app-link-img"
        alt="ios button"
        src={iphone}
        width="220"
        loading="lazy"
      />
    </a>
  ) : (
    <a
      className="app-link"
      href="https://play.google.com/store/apps/details?id=com.bluon"
    >
      <img
        className="app-link-img"
        alt="andriod button"
        src={andriod}
        width="220"
        loading="lazy"
      />
    </a>
  );
};

export default AppButton;
