import React from "react";
import "./_banner.scss";

const Banner = ({ image, children, className }) => {
  return (
      <div className={`banner ${className}`}>
        <div className="banner-content">
          {children}
        </div>
        <div className="banner-content-img">
          <img className="banner-image" src={image} alt="banner" />
        </div>
        
      </div>
  );
};

export default Banner;
