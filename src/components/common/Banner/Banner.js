import React from "react";
import "./_banner.scss";

const Banner = ({ image, children, className }) => {
  return (
    <div className={`banner ${className}`}>
      {children}
      <img className="banner-image" src={image} alt="banner" />
    </div>
  );
};

export default Banner;
