import React from "react";
import "./_banner.scss";

const Banner = ({ image, bannerStyle, children }) => {
  return (
    <div className="banner" style={bannerStyle}>
      {children}
      <img className="banner-image" src={image} alt="banner" />
    </div>
  );
};

export default Banner;
